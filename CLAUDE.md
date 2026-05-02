# 株式会社ユカハン — ウェブサイト運用ガイド

このファイルは Claude Code が自動で読み込む共有メモリです。
サイト構築の方針・決定事項・進捗を記録しています。作業前に必ず確認してください。

---

## プロジェクト概要

- **会社**: 株式会社ユカハン（Yuka-Han & Co.）
- **事業**: 東京を中心とした宿泊施設の企画・開発・運用、民泊運営代行
- **主力ブランド**: Wuto（スモールラグジュアリー民泊）
- **ドメイン**: https://yuka-han.com（2025年5月8〜10日に本番切り替え予定）
- **リポジトリ**: https://github.com/hassaku1881/yuka-han-website
- **デプロイ**: Vercel（main ブランチに push で自動デプロイ）

---

## 技術スタック

| 項目 | 内容 |
|------|------|
| フレームワーク | Next.js 16.2.2 (App Router) |
| 言語 | TypeScript |
| CMS | microCMS（記事・ニュース） |
| メール送信 | Resend API（contact@yuka-han.com 受信） |
| アナリティクス | Google Analytics 4（G-M3KBC10PGH） |
| フォント | Noto Sans JP + Cormorant Garamond（Google Fonts） |
| アイコン | lucide-react |

### 環境変数

`.env.local`（ローカル）と Vercel の環境変数に設定が必要：

```
MICROCMS_SERVICE_DOMAIN=...
MICROCMS_API_KEY=...
RESEND_API_KEY=...
NEXT_PUBLIC_SITE_URL=https://yuka-han.com   ← 本番切り替え後に Vercel へ追加
```

---

## ディレクトリ構成（主要ファイル）

```
src/
├── app/
│   ├── layout.tsx          # 全ページ共通レイアウト（OGP・GA4・JSON-LD）
│   ├── globals.css         # CSS変数・グローバルスタイル
│   ├── sitemap.ts          # 動的サイトマップ（/sitemap.xml）
│   ├── robots.ts           # /robots.txt
│   ├── page.tsx            # トップページ
│   ├── about/              # 会社概要
│   ├── service/            # サービス紹介
│   ├── wuto/               # Wutoブランドページ
│   ├── articles/
│   │   ├── page.tsx        # コラム一覧（カテゴリフィルター付き）
│   │   └── [id]/page.tsx   # コラム詳細
│   ├── news/
│   │   ├── page.tsx        # ニュース一覧
│   │   └── [id]/page.tsx   # ニュース詳細
│   ├── contact/            # お問い合わせフォーム
│   └── api/contact/        # フォーム送信API（Resend）
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── HeroSlider.tsx
└── lib/
    ├── microcms.ts         # microCMS クライアント・型定義・取得関数
    └── constants.ts        # BASE_URL 定数
```

---

## デザイン・ブランドルール

### CSS 変数（globals.css）

```css
--color-primary:    #141e30   /* ダークネイビー */
--color-accent:     #8b7355   /* ウォームゴールド */
--color-bg:         #f8f6f2   /* オフホワイト */
--color-white:      #ffffff
--color-text:       #2d2d2d
--color-text-light: #7a7a7a
--font-en:          var(--font-cormorant)   /* 英字見出し */
```

### トーン＆マナー

- **専門性はあるが上から目線にならない**
- 潜在顧客（オーナー）を見下す・素人扱いする表現は絶対NG
- 過度に丁寧・流暢にしすぎない。「言葉尻が良すぎて胡散臭い」はアウト
- 「暮らすように泊まる」は **Wuto 固有のコピー**。会社全体・コラム全体には使わない
- 伝聞（「〜という声を耳にする」等）は避ける。実績・データに基づいた表現にする

---

## microCMS 設計

### エンドポイント

| エンドポイント | 用途 | 主な型 |
|---------------|------|--------|
| `articles` | コラム記事 | `Article` |
| `news` | ニュース | `NewsItem` |

### Article 型

```ts
type Article = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  category: string;      // "BUSINESS" | "INTERIOR" | "AREA GUIDE" | "OTHERS"
  excerpt: string;
  body: string;          // HTML（microCMS リッチエディタ出力）
  thumbnail?: { url: string; width: number; height: number; };
};
```

### 記事 ID 体系

**フォーマット**: `YYYY` + `CC`（カテゴリ） + `NNN`（連番） + `D`（チェックデジット）

| カテゴリコード | カテゴリ名 |
|--------------|-----------|
| `01` | BUSINESS |
| `02` | INTERIOR |
| `03` | AREA GUIDE |
| `99` | OTHERS |

**チェックデジット**: 全桁の合計 mod 10

例: `2026010012` = 2026年・BUSINESS・001番目・チェックデジット2

**旧IDから新IDへのリダイレクト（next.config.ts に定義済み）**:
- `y_v8jj93a1` → `2026010012`（GOP記事）
- `qnsjwoza43j6` → `2026020013`（Japandi記事）

### 次の採番

| カテゴリ | 最終採番 | 次の番号 |
|---------|---------|---------|
| BUSINESS | `2026010023`（ADR記事） | `2026010034` |
| INTERIOR | `2026020013`（Japandi記事） | `2026020024` |
| AREA GUIDE | 未発行 | `2026030015` |
| OTHERS | 未発行 | `2026990016` |

---

## コラム記事（articles）

### 公開済み記事

| ID | タイトル | カテゴリ |
|----|---------|---------|
| `2026010012` | GOP（粗利益）とは何か — 민泊経営で最初に見るべき数字（第1回） | BUSINESS |
| `2026020013` | Japandi：なぜこのスタイルを選ぶのか | INTERIOR |
| `2026010023` | ADR（平均客室単価）をどう動かすか（第2回） | BUSINESS |

### BUSINESS シリーズ：民泊経営指標（連載）

各記事の末尾で次回予告あり。連続性を保つこと。

| 回 | 指標 | 状態 |
|----|------|------|
| 1 | GOP（粗利益） | 公開済み |
| 2 | ADR（平均客室単価） | 公開済み |
| 3 | 平均宿泊日数 | **次回執筆予定** |
| 4 | RevPAR | 未着手 |
| 5〜 | （以降検討中） | 未着手 |

**平均宿泊日数 記事の注意点（ADR記事末尾に予告済み）**:
ADR記事の末尾でこう予告している：「清掃業者・運営代行会社の利益構造と真っ向から利益相反するこの指標について、オーナー目線からしっかりお伝えする」。この約束を守る内容にすること。

### コンテンツカレンダー方針

- 週1本ペース（2026年1月から遡ってバックデート）
- BUSINESSシリーズを軸に、INTERIORを挟みながら展開
- ある程度ストックが溜まったら更新頻度を落としてOK
- 将来的にSNS（Instagram等）での定期発信も検討中

### 記事の装飾クラス（article-body CSS）

microCMS のリッチエディタ HTML に以下のクラスを付与することで装飾が適用される：

| クラス | 用途 |
|--------|------|
| `.point-box` | ポイントまとめ（ウォームゴールドのボーダー＋「POINT」ラベル） |
| `.warning-box` | 注意事項（オレンジのボーダー＋「⚠ 注意」ラベル） |
| `<mark>` | マーカーハイライト（黄色下線マーカー風） |
| `<blockquote>` | 引用・ゲストの声（大きな「"」装飾） |
| `<pre>` | 数式・計算式（ダークネイビー背景・中央揃え） |

---

## SEO 実装状況

| 項目 | 状態 | 備考 |
|------|------|------|
| `/sitemap.xml` | ✅ 完了 | 動的生成（articles + news） |
| `/robots.txt` | ✅ 完了 | サイトマップURL指定 |
| OGP メタタグ | ✅ 完了 | layout.tsx + 各記事ページ |
| Twitter Card | ✅ 完了 | summary_large_image |
| Organization JSON-LD | ✅ 完了 | layout.tsx |
| Article JSON-LD | ✅ 完了 | articles/[id]/page.tsx |
| canonical URL | ✅ 完了 | 全主要ページ |
| Google Analytics 4 | ✅ 完了 | G-M3KBC10PGH |
| Google Search Console | ⏳ 未設定 | ドメイン切り替え後に対応 |

**OGP 画像**: `/public/og-default.jpg` がまだ存在しない。1200×630px の画像を配置すること。

---

## 残タスク

### ドメイン切り替え前
- [ ] `/public/og-default.jpg` を作成・配置（1200×630px）
- [ ] Vercel 環境変数に `NEXT_PUBLIC_SITE_URL=https://yuka-han.com` を追加

### ドメイン切り替え後（2026年5月8〜10日）
- [ ] Google Search Console にサイト登録
- [ ] `/sitemap.xml` を Search Console に送信

### コンテンツ
- [ ] 平均宿泊日数の記事を執筆（BUSINESSシリーズ第3回）
- [ ] 既存記事の publishedAt をバックデート（週1ペース、2026年1月〜）
- [ ] INTERIORカテゴリの記事を追加

---

## 作業上の約束事

1. **microCMS の記事本文は承認なしに変更しない**。変更前に必ず確認を取る
2. **記事IDは上の採番表に従う**。勝手に命名しない
3. **リダイレクトが必要な場合は `next.config.ts` に追加する**
4. 全ページに **`revalidate = 60`** を設定（ISR）
5. **コミットは機能単位でまとめる**
6. 本番ドメイン切り替え前は `NEXT_PUBLIC_SITE_URL` が未設定でも動くこと（`constants.ts` でフォールバック設定済み）
