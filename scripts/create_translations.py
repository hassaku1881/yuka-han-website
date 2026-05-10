#!/usr/bin/env python3
"""
Create EN + ZH translated articles in microCMS from draft markdown files.
Usage: python3 scripts/create_translations.py
"""

import os
import re
import json
import time
import urllib.request
import urllib.error

try:
    import markdown
    MD_AVAILABLE = True
except ImportError:
    MD_AVAILABLE = False
    print("Warning: markdown library not found, using basic HTML conversion")

API_KEY = "ogjVGPDz3m94OOSHO4LtV4Vnm7aO1HWpSJwV"
SERVICE_DOMAIN = "yuka-han"
BASE_URL = f"https://{SERVICE_DOMAIN}.microcms.io/api/v1/articles"

# Base ID → publishedAt (matches Japanese originals)
ARTICLE_MAP = {
    "01": {"base_id": "2026010012", "published_at": "2026-03-14T00:00:00.000Z"},
    "02": {"base_id": "2026010023", "published_at": "2026-03-21T00:00:00.000Z"},
    "03": {"base_id": "2026010034", "published_at": "2026-03-28T00:00:00.000Z"},
    "04": {"base_id": "2026010045", "published_at": "2026-04-04T00:00:00.000Z"},
    "05": {"base_id": "2026010056", "published_at": "2026-04-11T00:00:00.000Z"},
    "06": {"base_id": "2026010067", "published_at": "2026-04-18T00:00:00.000Z"},
    "07": {"base_id": "2026010078", "published_at": "2026-04-25T00:00:00.000Z"},
    "08": {"base_id": "2026010089", "published_at": "2026-05-02T00:00:00.000Z"},
}

DRAFT_DIRS = {
    "en": os.path.join(os.path.dirname(__file__), "../drafts/articles/translations/en"),
    "zh": os.path.join(os.path.dirname(__file__), "../drafts/articles/translations/zh-Hant"),
}

LOCALE_SUFFIX = {"en": "-en", "zh": "-zh"}

FILENAMES = [
    ("01", "01-business-gop.md"),
    ("02", "02-business-adr.md"),
    ("03", "03-business-los.md"),
    ("04", "04-business-conflict.md"),
    ("05", "05-business-cleaning.md"),
    ("06", "06-business-guest-communication.md"),
    ("07", "07-business-language.md"),
    ("08", "08-business-revpar.md"),
]


def md_to_html(text: str) -> str:
    """Convert markdown to HTML."""
    if MD_AVAILABLE:
        return markdown.markdown(
            text,
            extensions=["tables", "fenced_code"],
        )
    # Minimal fallback: wrap paragraphs
    lines = text.split("\n")
    html_lines = []
    for line in lines:
        stripped = line.strip()
        if stripped:
            html_lines.append(f"<p>{stripped}</p>")
        else:
            html_lines.append("")
    return "\n".join(html_lines)


def parse_draft(filepath: str) -> dict:
    """Parse a draft markdown file and return title, excerpt, body_html."""
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Extract title from first # heading
    title_match = re.search(r"^# (.+)$", content, re.MULTILINE)
    raw_title = title_match.group(1).strip() if title_match else "Untitled"

    # Strip [CATEGORY] prefix like "[BUSINESS] " from title
    title = re.sub(r"^\[[^\]]+\]\s*", "", raw_title)

    # Find body: everything after the first "---" separator line
    # The separator is after the metadata block (> lines)
    parts = re.split(r"^---\s*$", content, maxsplit=1, flags=re.MULTILINE)
    if len(parts) > 1:
        body_md = parts[1].strip()
    else:
        # No separator found, use content after metadata block
        # Skip first heading + blockquote lines
        body_md = re.sub(r"^#[^\n]*\n", "", content, count=1).strip()
        body_md = re.sub(r"^>.*\n?", "", body_md, flags=re.MULTILINE).strip()

    # Extract excerpt: first blockquote in body (teaser sentence)
    # or first paragraph that isn't a series-intro line
    excerpt = ""
    bq_match = re.search(r"^> (.+)$", body_md, re.MULTILINE)
    if bq_match:
        excerpt = bq_match.group(1).strip()
        # Truncate to ~120 chars
        if len(excerpt) > 120:
            excerpt = excerpt[:117] + "..."
    else:
        # Find first non-empty paragraph that isn't a series-name line
        for line in body_md.split("\n"):
            line = line.strip()
            if (line
                    and not line.startswith("#")
                    and not line.startswith("|")
                    and not line.startswith(">")
                    and "BUSINESS SERIES" not in line
                    and len(line) > 20):
                excerpt = line[:120]
                if len(line) > 120:
                    excerpt += "..."
                break

    # Convert body markdown to HTML
    body_html = md_to_html(body_md)

    return {"title": title, "excerpt": excerpt, "body_html": body_html}


def microcms_put(content_id: str, payload: dict) -> dict:
    """Create or overwrite content via PUT."""
    url = f"{BASE_URL}/{content_id}"
    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(
        url,
        data=data,
        method="PUT",
        headers={
            "X-MICROCMS-API-KEY": API_KEY,
            "Content-Type": "application/json",
        },
    )
    try:
        with urllib.request.urlopen(req) as resp:
            return json.loads(resp.read())
    except urllib.error.HTTPError as e:
        body = e.read().decode("utf-8")
        raise RuntimeError(f"PUT {url} → {e.code}: {body}")


def microcms_patch(content_id: str, payload: dict) -> dict:
    """Partial update via PATCH."""
    url = f"{BASE_URL}/{content_id}"
    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(
        url,
        data=data,
        method="PATCH",
        headers={
            "X-MICROCMS-API-KEY": API_KEY,
            "Content-Type": "application/json",
        },
    )
    try:
        with urllib.request.urlopen(req) as resp:
            return json.loads(resp.read())
    except urllib.error.HTTPError as e:
        body = e.read().decode("utf-8")
        raise RuntimeError(f"PATCH {url} → {e.code}: {body}")


def main():
    results = []

    for locale in ("en", "zh"):
        draft_dir = DRAFT_DIRS[locale]
        suffix = LOCALE_SUFFIX[locale]

        for num, filename in FILENAMES:
            filepath = os.path.join(draft_dir, filename)
            if not os.path.exists(filepath):
                print(f"  [SKIP] {filepath} not found")
                continue

            info = ARTICLE_MAP[num]
            base_id = info["base_id"]
            published_at = info["published_at"]
            content_id = f"{base_id}{suffix}"

            print(f"\n[{locale.upper()}] {content_id} ({filename})")

            parsed = parse_draft(filepath)
            print(f"  title:   {parsed['title'][:70]}")
            print(f"  excerpt: {parsed['excerpt'][:60]}...")

            payload = {
                "title": parsed["title"],
                "category": "BUSINESS",
                "excerpt": parsed["excerpt"],
                "body": parsed["body_html"],
            }

            # Step 1: Create/update via PUT
            try:
                result = microcms_put(content_id, payload)
                print(f"  PUT → id={result.get('id', '?')}")
            except RuntimeError as e:
                print(f"  ERROR: {e}")
                results.append({"id": content_id, "status": "error", "detail": str(e)})
                time.sleep(1)
                continue

            time.sleep(0.5)

            # Step 2: Set publishedAt via PATCH
            try:
                patch_result = microcms_patch(content_id, {"publishedAt": published_at})
                actual_published = patch_result.get("publishedAt", "?")
                print(f"  PATCH publishedAt → {actual_published}")
            except RuntimeError as e:
                print(f"  PATCH warning (publishedAt may not be settable): {e}")

            results.append({"id": content_id, "status": "ok"})
            time.sleep(0.5)

    print("\n\n=== SUMMARY ===")
    ok = [r for r in results if r["status"] == "ok"]
    errors = [r for r in results if r["status"] == "error"]
    print(f"Created/updated: {len(ok)}")
    if errors:
        print(f"Errors: {len(errors)}")
        for e in errors:
            print(f"  {e['id']}: {e['detail'][:100]}")


if __name__ == "__main__":
    main()
