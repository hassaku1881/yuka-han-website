// 採用情報の求人データ
// 追加・変更はこのファイルを編集（Airワーク側は別途手動反映が必要）

export type JobCategory = "part" | "contract" | "registered";

export type Occupation = "facility" | "support" | "sales";

export const OCCUPATION_LABELS: Record<Occupation, string> = {
  facility: "施設管理",
  support: "カスタマーサポート",
  sales: "営業",
};

export const OCCUPATION_LABELS_EN: Record<Occupation, string> = {
  facility: "Facility Management",
  support: "Customer Support",
  sales: "Sales",
};

export const JOB_CATEGORY_LABELS: Record<JobCategory, string> = {
  part: "パート・アルバイト",
  contract: "業務委託",
  registered: "登録スタッフ",
};

export type Job = {
  id: string;
  published: boolean;
  occupation: Occupation;
  category: JobCategory;
  title: string;
  area: string; // 表示用エリア
  wage: string; // 表示用報酬
  summary: string; // 一覧カード用（1〜2文）
  facts: { label: string; value: string }[]; // 詳細ページの条件表
  sections: { heading: string; text: string }[]; // 詳細本文（textは改行可）
  note?: string; // 応募ボタン付近の補足
  applyUrl?: string; // Airワーク等の応募URL（無ければメール応募）
  // JobPosting 構造化データ用
  employmentType: "PART_TIME" | "CONTRACTOR";
  datePosted: string;
  remote?: boolean;
  locality?: string; // 例: 葛飾区
  streetAddress?: string;
  hourlyWage?: number; // 時給ベースの場合のみ
  en?: JobContent; // 英語版（日本語が必須でない求人のみ）
};

export type JobContent = Pick<Job, "title" | "area" | "wage" | "summary" | "facts" | "sections" | "note">;

export type RecruitLocale = "ja" | "en";

export const JOB_CATEGORY_LABELS_EN: Record<JobCategory, string> = {
  part: "Part-time",
  contract: "Freelance / Contract",
  registered: "Registered Staff",
};

export const jobs: Job[] = [
  // ── パート・アルバイト ──────────────────────────────
  {
    id: "katsushika-facility",
    published: true,
    occupation: "facility",
    category: "part",
    title: "宿泊施設の管理スタッフ（見回り・軽作業）",
    area: "葛飾エリア",
    wage: "時給1,300円＋日直手当500円/日",
    summary:
      "葛飾区内の宿泊施設を自転車やバイクで回り、見回りと軽作業をお願いします。未経験歓迎、週20時間。午前か夕方か、巡回の時間帯を選べます。",
    facts: [
      { label: "雇用形態", value: "パート（3か月契約・原則更新／試用期間なし）" },
      { label: "勤務地", value: "東京都葛飾区内の当社運営・受託施設（事業所：葛飾区お花茶屋2-5-21）" },
      {
        label: "報酬",
        value:
          "時給1,300円（試用期間なし・最初から同額）＋日直手当 500円/日（巡回を担当した日）。月額換算 約126,000円",
      },
      {
        label: "勤務時間",
        value:
          "週20時間・週6日。巡回は 9:00〜13:00 または 16:00〜20:00 の間で2〜3時間（どちらかを面接時に決定）。その他の作業はシフト制（応相談）。1日2〜6時間程度",
      },
      { label: "休日", value: "週1日（曜日は応相談）" },
      { label: "加入保険", value: "雇用保険・労災保険" },
      { label: "賞与・昇給", value: "賞与なし／昇給あり（6か月経過後に評価）" },
      { label: "通勤手当", value: "なし" },
      {
        label: "応募資格",
        value:
          "年齢・学歴・経験・資格すべて不問。スマートフォンで写真の撮影・送信ができる方。自転車またはバイクをお持ちで、区内を移動できる方",
      },
      { label: "選考", value: "面接1回＋有給の体験勤務（半日×2回・時給をお支払いします）。履歴書は不要です" },
    ],
    sections: [
      {
        heading: "仕事内容",
        text: "葛飾区内にある宿泊施設を自転車またはバイクで回り、施設の見回りと管理をお願いします。\n\n【毎日の巡回・2時間程度】\n・施設の見回りと、スマホでの写真報告\n・共用部の簡単な清掃、ゴミの整理\n\n【その他の作業・週8時間程度／シフト制】\n・新しい施設の開業準備（家具や備品の設置、開梱、清掃）\n・備品や消耗品の買い出しと補充\n・草取りなど、外まわりの手入れ\n・電球交換など簡単な修繕、業者の立ち会い\n・清掃業者が入ったあとの仕上がり確認\n\n施設は今後も増える予定です。ひとりで自分のペースで動ける仕事です。",
      },
      {
        heading: "働き方",
        text: "毎日の巡回は2時間程度。午前（9〜13時のうち2時間）か夕方（16〜20時のうち2時間）か、ご都合のよいほうを選べます。巡回以外の作業はシフト制で、ご自身の予定に合わせて組めます。巡回だけの2時間で終わる日と、清掃などをまとめて行う長めの日があります。\n\n・勤務地はすべて葛飾区内。作業は一人で行います\n・試用期間はありません。最初から同じ時給です\n・ダブルワークの方も歓迎します\n・施設の増加にあわせて、契約社員・正社員への登用制度があります",
      },
    ],
    note: "まずはメールでお気軽にご連絡ください（履歴書は不要です）。",
    employmentType: "PART_TIME",
    datePosted: "2026-09-05",
    locality: "葛飾区",
    streetAddress: "お花茶屋2-5-21",
    hourlyWage: 1300,
  },
  {
    id: "shinjuku-facility",
    published: true,
    occupation: "facility",
    category: "part",
    title: "宿泊施設の見回り・管理スタッフ",
    area: "新宿エリア（新宿三丁目駅 徒歩3分）",
    wage: "巡回手当 月6,000円＋時給1,300円（見回り以外の作業）",
    summary:
      "週1回・最長15分の見回りで月6,000円。留学生の方も、資格外活動の週28時間の枠をほとんど使わずに働けます。",
    facts: [
      { label: "雇用形態", value: "パート（3か月契約・原則更新／試用期間なし）" },
      { label: "勤務地", value: "東京都新宿区新宿5-11-2（新宿三丁目駅 徒歩3分）" },
      {
        label: "報酬",
        value:
          "巡回手当 月6,000円（週1回・最長15分の見回り）／時給1,300円（見回り以外の作業・1分単位）／緊急駆けつけ 1回3,000円＋時給（深夜は割増）",
      },
      { label: "収入の目安", value: "見回りだけの月 6,000円／軽作業が入った月 1万円前後" },
      { label: "勤務時間", value: "9:00〜20:00の間（曜日と時間は相談のうえ固定）" },
      { label: "通勤手当", value: "支給はありません。徒歩や自転車で通える範囲の方に向いた仕事です" },
      { label: "加入保険", value: "労災保険" },
      { label: "賞与・昇給", value: "賞与なし／昇給あり（業務量の変更に応じて手当を見直し）" },
      { label: "応募資格", value: "年齢・学歴・経験・資格すべて不問。日本語力は問いません。スマートフォンで写真の撮影・送信ができる方" },
      { label: "選考", value: "書類選考＋面接1回（オンライン可）。履歴書をご用意ください" },
      { label: "採用人数", value: "1名" },
    ],
    sections: [
      {
        heading: "仕事内容",
        text: "新宿三丁目駅から徒歩3分のマンション1棟（5部屋）の見回りと管理をお願いします。対象の部屋は1〜3階にあり、エレベーターはありません（階段を使います）。\n\n【週1回の見回り・最長15分】\n・玄関とゴミ置き場の様子を確認\n・共用部のちょっとした清掃\n・郵便物の確認と回収\n・スマホで写真を撮って完了報告\n早ければ数分で終わります。時間が短くても手当は減りません。\n\n【軽作業・不定期／時給1,300円・1分単位】\n・客室内の清掃、草取り\n・消耗品の買い出しと補充\n・電球や電池の交換、簡単な組立\n・工事や設備点検の立ち会い（平日日中）\n\n【緊急駆けつけ】\nトラブルのときの駆けつけをお願いすることがあります。1回3,000円の手当と時給で、深夜は割増します。都合がつかないときは別の担当者が対応します。",
      },
      {
        heading: "留学生の方へ",
        text: "見回りは週15分ほど。資格外活動許可の週28時間の枠のうち、使うのは1%未満です。ほかのアルバイトと両立できます（在留カードの資格外活動許可が必要です）。",
      },
      {
        heading: "やさしい にほんご",
        text: "■ １しゅうかんに １かい：見まわり（ながくても １５分）\n・げんかんと ゴミおきばを 見ます\n・きょうようぶを かんたんに そうじします\n・ゆうびんぶつを かくにんして とります\n・スマホで しゃしんを とって、ほうこくします\n　→ はやいときは ２ふんで おわります\n　→ みじかくても 手当は へりません\n\n■ おきゅうりょう\n・見まわり手当　１かげつ ６，０００円\n・時給　１，３００円（見まわり いがいの さぎょう）\n・こうつうひは 出ません\n\n■ 留学生の みなさんへ\nこのしごとは、１しゅうかんに １５ふんだけです。\n「しかくがい かつどう」の ２８じかんのうち、\nつかうのは １％より すくないです。\nほかの アルバイトと いっしょに できます。\n（ざいりゅうカードの「資格外活動許可」が ひつようです）\n\n■ おうぼ\nメールで りれきしょを おくってください。\ncontact@yuka-han.com",
      },
    ],
    note: "応募は履歴書（写真貼付なし）をメールでお送りください。",
    en: {
      title: "Property Check & Maintenance Staff",
      area: "Shinjuku (3 min walk from Shinjuku-sanchome Sta.)",
      wage: "¥6,000/month patrol allowance + ¥1,300/hour for other tasks",
      summary:
        "One check a week, 15 minutes at most, for ¥6,000 a month. International students can take this job while using almost none of their 28-hour weekly work limit.",
      facts: [
        { label: "Employment", value: "Part-time (3-month contract, normally renewed / no probation period)" },
        { label: "Location", value: "5-11-2 Shinjuku, Shinjuku-ku, Tokyo (3 min walk from Shinjuku-sanchome Station)" },
        {
          label: "Pay",
          value:
            "Patrol allowance ¥6,000/month (one weekly check, up to 15 min) / ¥1,300 per hour for other tasks (paid by the minute) / Emergency call-out ¥3,000 per visit + hourly pay (late-night premium applies)",
        },
        { label: "Expected income", value: "¥6,000 in months with patrols only / around ¥10,000 in months with extra tasks" },
        { label: "Hours", value: "Between 9:00 and 20:00 (day and time fixed by mutual agreement)" },
        { label: "Commuting allowance", value: "Not provided. This job suits people who can walk or cycle to the site." },
        { label: "Insurance", value: "Workers' accident compensation insurance" },
        { label: "Bonus / raises", value: "No bonus / Raises available (allowance reviewed as the workload changes)" },
        {
          label: "Requirements",
          value:
            "No requirements for age, education, experience, or qualifications. Japanese language ability is not required. You need to be able to take and send photos with a smartphone.",
        },
        { label: "Selection", value: "Document screening + one interview (online OK). Please prepare a résumé." },
        { label: "Openings", value: "1" },
      ],
      sections: [
        {
          heading: "Job description",
          text: "Check on and look after one apartment building (5 units), a 3-minute walk from Shinjuku-sanchome Station. The units are on floors 1–3 and there is no elevator (stairs only).\n\n[Weekly check — once a week, 15 minutes at most]\n・Check the entrance and the garbage area\n・Light cleaning of shared areas\n・Check and collect the mail\n・Take photos with your smartphone and send a completion report\nIt can take just a few minutes. Your allowance stays the same even when it is quick.\n\n[Other tasks — occasional, ¥1,300/hour, paid by the minute]\n・Cleaning inside guest rooms, weeding\n・Buying and restocking supplies\n・Replacing light bulbs and batteries, simple assembly\n・Being present for construction work or equipment inspections (weekday daytime)\n\n[Emergency call-outs]\nWe may ask you to go to the site when there is trouble. You receive ¥3,000 per visit plus hourly pay, with a late-night premium. If you are not available, another staff member will handle it.",
        },
        {
          heading: "For international students",
          text: "The weekly check takes about 15 minutes — less than 1% of the 28 hours a week you are allowed to work. You can easily combine it with another part-time job. You need permission to engage in activities outside your status of residence (shown on the back of your residence card).",
        },
      ],
      note: "To apply, email us your résumé (English or Japanese, no photo needed).",
    },
    employmentType: "PART_TIME",
    datePosted: "2026-09-23",
    locality: "新宿区",
    streetAddress: "新宿5-11-2",
    hourlyWage: 1300,
  },

  // ── 業務委託 ────────────────────────────────────────
  {
    id: "customer-support",
    published: true,
    occupation: "support",
    category: "contract",
    title: "宿泊施設のカスタマーサポート",
    area: "フルリモート",
    wage: "1担当施設あたり 月15,000〜25,000円",
    summary:
      "Airbnbを中心としたゲスト対応をフルリモートで。実働は短く、レスポンスの速さとホスピタリティを評価する完全歩合制です。",
    facts: [
      { label: "契約形態", value: "業務委託（初回1か月トライアル→3〜6か月ごとの自動更新）" },
      { label: "勤務地", value: "フルリモート" },
      {
        label: "報酬",
        value:
          "施設担当：1施設あたり 月15,000〜25,000円（実働目安 1日10〜30分）／清掃連携のみ（英語不要）：月5,000〜8,000円",
      },
      {
        label: "対応時間",
        value: "コア10:00〜22:00。緊急は30分以内・通常は3時間以内の返信目安。深夜・早朝は原則対応不要",
      },
      {
        label: "求める人材",
        value: "接客・ホスピタリティ業界での実務経験／英語での柔軟なコミュニケーション（CEFR B1程度〜）／自律して業務を遂行できる方",
      },
    ],
    sections: [
      {
        heading: "仕事内容",
        text: "主にAirbnbのプラットフォームを通じたゲスト対応全般をお任せします。\n・予約前後のメッセージ対応、チェックインフォームの回収、観光・アクセス案内\n・チェックイン／チェックアウトのサポート、設備の使い方案内、清掃連携\n・チェックアウト後のお礼メッセージ、レビュー返信、現場の声の共有\n\n定型文をなぞる事務対応ではなく、ゲスト一人ひとりに寄り添う柔軟な対応を重視しています。",
      },
      {
        heading: "働き方",
        text: "固定シフトはありません。通知が届いたらスマホやPCから対応するスタイルで、実働は短時間。まずは1施設からスタートし、慣れたら複数施設を担当して報酬を増やせます（例：2万円×4施設＝月8万円）。",
      },
    ],
    applyUrl: "https://arwrk.net/recruit/hmgi14si0uenqxf/9932023/",
    employmentType: "CONTRACTOR",
    datePosted: "2026-07-08",
    remote: true,
  },
  {
    id: "sales",
    published: false,
    occupation: "sales",
    category: "contract",
    title: "営業（民泊運営代行）",
    area: "東京",
    wage: "要相談",
    summary: "民泊運営代行サービスの営業パートナーを募集します。",
    facts: [],
    sections: [],
    employmentType: "CONTRACTOR",
    datePosted: "2026-09-23",
  },

  // ── 登録スタッフ（業務委託） ─────────────────────────
  // 条件は2025/9のジモティー掲載（京成線エリア）を全エリア共通で使用
  ...[
    {
      id: "oncall-keisei",
      area: "葛飾区・京成線エリア",
      areaDetail: "葛飾区の京成線エリア（堀切菖蒲園・お花茶屋・青砥・四ツ木・京成立石）",
      areaEn: "Katsushika – Keisei Line area",
      areaDetailEn: "the Keisei Line area of Katsushika (Horikiri-shobuen, Ohanajaya, Aoto, Yotsugi, Keisei-Tateishi)",
      locality: "葛飾区",
    },
    {
      id: "oncall-shinkoiwa",
      area: "葛飾区・新小岩エリア",
      areaDetail: "葛飾区の新小岩エリア",
      areaEn: "Katsushika – Shin-Koiwa area",
      areaDetailEn: "the Shin-Koiwa area of Katsushika",
      locality: "葛飾区",
    },
    {
      id: "oncall-shinjuku",
      area: "新宿エリア",
      areaDetail: "新宿区の新宿エリア",
      areaEn: "Shinjuku area",
      areaDetailEn: "the Shinjuku area",
      locality: "新宿区",
    },
    {
      id: "oncall-ichinoe",
      area: "江戸川区・一之江/瑞江エリア",
      areaDetail: "江戸川区の一之江・瑞江エリア",
      areaEn: "Edogawa – Ichinoe / Mizue area",
      areaDetailEn: "the Ichinoe / Mizue area of Edogawa",
      locality: "江戸川区",
    },
  ].map(
    (a): Job => ({
      id: a.id,
      published: true,
      occupation: "facility",
      category: "registered",
      title: `駆け付け・施設管理 登録スタッフ（${a.area}）`,
      area: a.area,
      wage: "緊急駆け付け 1件5,000円／緊急でない対応 1件2,500円",
      summary:
        "民泊施設の「困った！」を解決するお仕事。時給ではなく対応1件ごとのお支払いなので、空いた時間の副業に向いています。",
      facts: [
        { label: "契約形態", value: "業務委託（登録制）" },
        { label: "対応エリア", value: `${a.areaDetail}の各施設` },
        {
          label: "報酬",
          value:
            "緊急駆け付け対応（60分以内）：1件5,000円／緊急でない対応（60分以内）：1件2,500円／60分を超えた場合は以降30分ごとに1,500円",
        },
        { label: "支払い", value: "日払い（翌営業日振り込み）" },
        { label: "勤務時間", value: "決まった勤務時間はありません。対応が必要になったときのみ" },
        {
          label: "応募資格",
          value:
            "経験不問。日本語力は問いません。自転車やバイクでフットワーク軽く動ける方。英語や中国語で日常会話ができる方は優遇します",
        },
      ],
      sections: [
        {
          heading: "仕事内容",
          text: `${a.areaDetail}にある民泊施設の「困った！」を解決していただくお仕事です。\n\n【ゲストからの緊急連絡への対応】\n・鍵の紛失、設備の故障、騒音トラブルなど\n\n【ちょっとした施設管理・清掃】\n・備品の補充、壊れた物の買い替え\n・簡単な整理整頓や清掃\n\n時給ではなく対応ごとにお支払いするので、ご自身の空いた時間で副業として働きたい方におすすめです。`,
        },
        {
          heading: "こんな方を求めています",
          text: "・担当エリアに詳しく、自転車やバイクでフットワーク軽く動ける方\n・責任感があり、臨機応変に対応できる方\n・民泊の仕事の経験は問いません\n・英語や中国語で日常会話ができる方は優遇します",
        },
      ],
      note: "まずはメールでお気軽にお問い合わせください。詳しくご説明します。",
      en: {
        title: `On-call Property Support Staff (${a.areaEn})`,
        area: a.areaEn,
        wage: "¥5,000 per emergency call-out / ¥2,500 per non-urgent task",
        summary:
          "Help solve problems at vacation rentals. You are paid per job, not by the hour, so it works well as a side job in your free time.",
        facts: [
          { label: "Contract", value: "Freelance (registered on-call staff)" },
          { label: "Area", value: `Properties in ${a.areaDetailEn}` },
          {
            label: "Pay",
            value:
              "Emergency call-out (up to 60 min): ¥5,000 per job / Non-urgent task (up to 60 min): ¥2,500 per job / Beyond 60 min: ¥1,500 for every additional 30 min",
          },
          { label: "Payment", value: "Paid daily (transferred the next business day)" },
          { label: "Hours", value: "No fixed hours — only when a job comes up" },
          {
            label: "Requirements",
            value:
              "No experience needed. Japanese language ability is not required. You can get around quickly by bicycle or motorbike. Everyday English or Chinese is a plus.",
          },
        ],
        sections: [
          {
            heading: "Job description",
            text: `Help solve problems at vacation rental properties in ${a.areaDetailEn}.\n\n[Responding to guest emergencies]\n・Lost keys, broken equipment, noise complaints, etc.\n\n[Light property upkeep and cleaning]\n・Restocking supplies, replacing broken items\n・Simple tidying and cleaning\n\nYou are paid per job rather than by the hour, so this suits people looking for a side job in their free time.`,
          },
          {
            heading: "Who we are looking for",
            text: "・You know the area well and can get around quickly by bicycle or motorbike\n・You are responsible and can adapt to the situation\n・No vacation rental experience needed\n・Everyday English or Chinese is a plus",
          },
        ],
        note: "Feel free to email us first — we will explain the details.",
      },
      employmentType: "CONTRACTOR",
      datePosted: "2026-09-23",
      locality: a.locality,
    })
  ),
];

export const publishedJobs = jobs.filter((j) => j.published);
export const getJob = (id: string) => publishedJobs.find((j) => j.id === id);

/** 英語版がある公開求人 */
export const publishedJobsEn = publishedJobs.filter((j) => j.en);

/** 表示言語に応じた本文を返す（英語版が無ければ null） */
export function jobContent(job: Job, locale: RecruitLocale): JobContent | null {
  if (locale === "en") return job.en ?? null;
  return job;
}
