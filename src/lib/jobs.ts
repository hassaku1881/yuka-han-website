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
  termsUrl?: string; // 登録スタッフ規約など、条件の詳細（公開Googleドキュメント）
  // JobPosting 構造化データ用
  employmentType: "PART_TIME" | "CONTRACTOR" | ("PART_TIME" | "CONTRACTOR")[];
  datePosted: string; // 自社サイト掲載開始日
  updatedAt: string; // 最終更新日（条件を変えたら必ず更新）
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
      "葛飾区内の宿泊施設を自転車やバイクで回り、見回りと管理をお願いします。巡回の時間帯は午前か夕方から選べます。ダブルワークや60歳以上の方も歓迎します。",
    facts: [
      { label: "雇用形態", value: "パート" },
      { label: "契約期間", value: "3か月（契約更新の可能性あり・原則更新／更新上限なし）" },
      { label: "試用期間", value: "なし" },
      {
        label: "勤務地",
        value: "葛飾区内の当社運営施設を自転車やバイクで巡回します（集合・解散場所は応相談）",
      },
      { label: "報酬", value: "時給1,300円" },
      {
        label: "手当",
        value:
          "日直（巡回）を担当した日は1日500円。業務で使う自転車・バイクの費用と、業務連絡用スマートフォンの通信費を含みます",
      },
      {
        label: "勤務時間",
        value:
          "シフト制・週6日程度。巡回は (1) 9:00〜13:00 か (2) 16:00〜20:00 のいずれかを選んで固定し、1日2〜3時間。その他の作業はシフト制で時間は応相談。1日の労働時間は2〜6時間程度",
      },
      { label: "休日", value: "週1日（曜日は応相談で、面接時に決めます）" },
      { label: "休憩・時間外労働", value: "休憩なし／時間外労働なし" },
      { label: "加入保険", value: "雇用保険・労災保険（健康保険・厚生年金は適用なし）" },
      { label: "賞与・昇給", value: "賞与なし／昇給あり" },
      { label: "正社員登用", value: "あり" },
      { label: "通勤手当", value: "なし" },
      { label: "受動喫煙対策", value: "屋内禁煙" },
      { label: "変更の範囲", value: "業務内容・就業場所ともに変更なし（転勤なし）" },
      {
        label: "応募資格",
        value:
          "年齢・学歴・経験・資格すべて不問。自転車またはバイクで葛飾区内を移動できる方（車両はご自身のものをお使いいただきます）。スマートフォンで写真を撮って送ることができる方",
      },
      {
        label: "選考",
        value:
          "書類選考（履歴書）→ 面接。結果は面接後7日以内にメールでお知らせします",
      },
    ],
    sections: [
      {
        heading: "仕事内容",
        text: "葛飾区内にある宿泊施設を自転車やバイクで回り、施設の見回りと管理をお願いします。ダブルワークや60歳以上の方も歓迎します。\n\n【毎日の巡回・2時間程度】\n・施設の見回りと、スマホでの写真報告\n・共用部の簡単な清掃、ゴミの整理\n\n【その他の作業・週8時間程度／シフト制】\n・新しい施設の開業準備（設置、開梱、清掃）\n・備品や消耗品の買い出しと補充、草取り\n・電球交換など簡単な修繕、業者の立ち会い\n・清掃業者が入ったあとの仕上がり確認",
      },
    ],
    note: "応募は履歴書をメールでお送りください。",
    employmentType: "PART_TIME",
    datePosted: "2026-09-23",
    updatedAt: "2026-09-24",
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
      { label: "雇用形態", value: "パート" },
      { label: "契約期間", value: "3か月（契約更新の可能性あり・原則更新／更新上限なし）" },
      { label: "試用期間", value: "なし" },
      { label: "勤務地", value: "東京都新宿区新宿5-11-2（新宿三丁目駅 徒歩3分）" },
      {
        label: "報酬",
        value:
          "巡回手当 月6,000円（週1回・最長15分の見回り）／時給1,300円（見回り以外の作業・1分単位）／緊急駆けつけ 1回3,000円＋時給（深夜は割増）",
      },
      { label: "勤務時間", value: "週1日程度・9:00〜20:00の間の1時間程度" },
      { label: "休日", value: "勤務日以外" },
      { label: "休憩・時間外労働", value: "休憩なし／時間外労働なし" },
      { label: "加入保険", value: "労災保険（雇用保険・健康保険・厚生年金は適用なし）" },
      { label: "通勤手当", value: "なし。徒歩や自転車で通える範囲の方に向いた仕事です" },
      { label: "受動喫煙対策", value: "屋内禁煙" },
      { label: "変更の範囲", value: "業務内容・就業場所ともに変更なし（転勤なし）" },
      { label: "賞与・昇給", value: "賞与なし／昇給あり" },
      { label: "応募資格", value: "年齢・学歴・経験・資格すべて不問。日本語力は問いません。スマートフォンで写真を撮って送ることができる方" },
      {
        label: "選考",
        value: "書類選考（履歴書・写真貼付）→ 面接（オンライン可）。結果は面接後7日以内にメールでお知らせします",
      },
      { label: "採用人数", value: "1名" },
    ],
    sections: [
      {
        heading: "仕事内容",
        text: "新宿三丁目駅から徒歩3分のマンションにある宿泊施設の見回りと管理をお願いします。対象の部屋は1階から3階にあり、階段を使います。\n\n【週1回の見回り・最長15分】\n・玄関とゴミ置き場の様子を確認\n・共用部のちょっとした清掃と郵便物の回収\n・スマホで写真を撮って完了報告\n長くても15分、早ければ数分で終わります。時間が短くても手当は減りません。\n\n【そのほかの軽作業・不定期・時給制】\n・客室内の清掃、草取り\n・消耗品の買い出しと補充、電球や電池の交換\n・工事や設備点検の立ち会い\n見回り以外の作業は、時給1,300円を1分単位でお支払いします。\n\n【緊急の駆けつけ】\nトラブルのときの駆けつけをお願いすることがあります。1回3,000円の手当と時給で、深夜は割増します。都合がつかないときは別の担当者が対応します。",
      },
      {
        heading: "留学生の方へ",
        text: "見回りは週15分ほど。資格外活動許可の週28時間の枠のうち、使うのは1%未満です。ほかのアルバイトと両立できます（在留カードの資格外活動許可が必要です）。",
      },
      {
        heading: "やさしい にほんご",
        text: "■ １しゅうかんに １かい：見まわり（ながくても １５分）\n・げんかんと ゴミおきばを 見ます\n・きょうようぶを かんたんに そうじします\n・ゆうびんぶつを かくにんして とります\n・スマホで しゃしんを とって、ほうこくします\n　→ はやいときは ２ふんで おわります\n　→ みじかくても 手当は へりません\n\n■ おきゅうりょう\n・見まわり手当　１かげつ ６，０００円\n・時給　１，３００円（見まわり いがいの さぎょう）\n・こうつうひは 出ません\n\n■ 留学生の みなさんへ\nこのしごとは、１しゅうかんに １５ふんだけです。\n「しかくがい かつどう」の ２８じかんのうち、\nつかうのは １％より すくないです。\nほかの アルバイトと いっしょに できます。\n（ざいりゅうカードの「資格外活動許可」が ひつようです）\n\n■ おうぼ\nしゃしんを はった りれきしょを、メールで おくってください。\ncontact@yuka-han.com",
      },
    ],
    note: "応募は履歴書（写真貼付）をメールでお送りください。",
    en: {
      title: "Property Check & Maintenance Staff",
      area: "Shinjuku (3 min walk from Shinjuku-sanchome Sta.)",
      wage: "¥6,000/month patrol allowance + ¥1,300/hour for other tasks",
      summary:
        "One check a week, 15 minutes at most, for ¥6,000 a month. International students can take this job while using almost none of their 28-hour weekly work limit.",
      facts: [
        { label: "Employment", value: "Part-time" },
        { label: "Contract period", value: "3 months (may be renewed — renewal is the norm / no cap on renewals)" },
        { label: "Probation period", value: "None" },
        { label: "Location", value: "5-11-2 Shinjuku, Shinjuku-ku, Tokyo (3 min walk from Shinjuku-sanchome Station)" },
        {
          label: "Pay",
          value:
            "Patrol allowance ¥6,000/month (one weekly check, up to 15 min) / ¥1,300 per hour for other tasks (paid by the minute) / Emergency call-out ¥3,000 per visit + hourly pay (late-night premium applies)",
        },
        { label: "Hours", value: "About 1 day a week, around 1 hour between 9:00 and 20:00" },
        { label: "Days off", value: "Any day other than your working day" },
        { label: "Breaks / overtime", value: "No breaks / No overtime" },
        { label: "Insurance", value: "Workers' accident compensation insurance (employment insurance, health insurance and employees' pension do not apply)" },
        { label: "Commuting allowance", value: "Not provided. This job suits people who can walk or cycle to the site." },
        { label: "Smoking", value: "No smoking indoors" },
        { label: "Scope of changes", value: "No change to duties or workplace (no transfers)" },
        { label: "Bonus / raises", value: "No bonus / Raises available" },
        {
          label: "Requirements",
          value:
            "No requirements for age, education, experience, or qualifications. Japanese language ability is not required. You need to be able to take and send photos with a smartphone.",
        },
        { label: "Selection", value: "Document screening (résumé with a photo) → interview (online OK). We will email you the result within 7 days of the interview." },
        { label: "Openings", value: "1" },
      ],
      sections: [
        {
          heading: "Job description",
          text: "Check on and look after our vacation rental units in an apartment building, a 3-minute walk from Shinjuku-sanchome Station. The units are on floors 1–3 and you will use the stairs.\n\n[Weekly check — once a week, 15 minutes at most]\n・Check the entrance and the garbage area\n・Light cleaning of shared areas and collecting the mail\n・Take photos with your smartphone and send a completion report\nIt takes 15 minutes at most, and often just a few. Your allowance stays the same even when it is quick.\n\n[Other tasks — occasional, hourly pay]\n・Cleaning inside guest rooms, weeding\n・Buying and restocking supplies, replacing light bulbs and batteries\n・Being present for construction work or equipment inspections\nTasks other than the weekly check are paid at ¥1,300 per hour, calculated by the minute.\n\n[Emergency call-outs]\nWe may ask you to go to the site when there is trouble. You receive ¥3,000 per visit plus hourly pay, with a late-night premium. If you are not available, another staff member will handle it.",
        },
        {
          heading: "For international students",
          text: "The weekly check takes about 15 minutes — less than 1% of the 28 hours a week you are allowed to work. You can easily combine it with another part-time job. You need permission to engage in activities outside your status of residence (shown on the back of your residence card).",
        },
      ],
      note: "To apply, email us your résumé with a photo (English or Japanese).",
    },
    employmentType: "PART_TIME",
    datePosted: "2026-09-23",
    updatedAt: "2026-09-24",
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
      { label: "支払い", value: "月末締め・翌月払い（請求書払い）。詳細は個別契約で定めます" },
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
    datePosted: "2026-09-23",
    updatedAt: "2026-09-24",
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
    updatedAt: "2026-09-24",
  },

  // ── 登録スタッフ（業務委託） ─────────────────────────
  // 条件の正：01_Corporate … 21_駆けつけ・施設管理/登録スタッフ_発注条件と運用.md と「登録スタッフ規約」
  ...[
    {
      id: "oncall-keisei",
      area: "葛飾区・京成線エリア",
      areaDetail: "葛飾区の京成線エリア（堀切菖蒲園・お花茶屋・青砥・四ツ木・京成立石）",
      areaEn: "Katsushika – Keisei Line area",
      areaDetailEn: "the Keisei Line area of Katsushika (Horikiri-shobuen, Ohanajaya, Aoto, Yotsugi, Keisei-Tateishi)",
      locality: "葛飾区",
      patrol: "巡回（75分程度）：1回3,300円",
      patrolEn: "Patrol (about 75 min): ¥3,300 per round",
      patrolCard: "巡回 1回3,300円",
      patrolCardEn: "Patrol ¥3,300",
    },
    {
      id: "oncall-shinkoiwa",
      area: "葛飾区・新小岩エリア",
      areaDetail: "葛飾区の新小岩エリア",
      areaEn: "Katsushika – Shin-Koiwa area",
      areaDetailEn: "the Shin-Koiwa area of Katsushika",
      locality: "葛飾区",
      patrol: "巡回（10分程度）：1回550円",
      patrolEn: "Patrol (about 10 min): ¥550 per round",
      patrolCard: "巡回 1回550円",
      patrolCardEn: "Patrol ¥550",
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
    (a: {
      id: string; area: string; areaDetail: string; areaEn: string; areaDetailEn: string; locality: string;
      patrol?: string; patrolEn?: string; patrolCard?: string; patrolCardEn?: string;
    }): Job => ({
      id: a.id,
      published: true,
      occupation: "facility",
      category: "registered",
      title: `駆けつけ・施設管理 登録スタッフ（${a.area}）`,
      area: a.area,
      wage: `${a.patrolCard ? a.patrolCard + "／" : ""}駆けつけ 3,300円〜／通常のお仕事 2,200円〜（税込・目安）`,
      summary: `空いた時間に、お近くの民泊施設の${a.patrol ? "巡回の代行・" : ""}駆けつけ・軽作業をスポットで。お仕事は1件ごとに、受けるかどうかを選べます。`,
      facts: [
        {
          label: "契約形態",
          value:
            "登録制（ご登録の時点では契約は発生しません）。お仕事は1件ごとにLINEでご依頼し、お受けいただいたものを業務委託としてお願いします。受けるかどうかは毎回選べます",
        },
        { label: "対応エリア", value: `${a.areaDetail}の当社運営施設` },
        {
          label: "お仕事の内容",
          value: `${a.patrol ? "巡回（担当者が休むときの代わり）、" : ""}駆けつけ（ゲストからの連絡を受けての現地対応）、軽作業（備品の補充、電球や電池の交換、業者の立ち会いなど）`,
        },
        {
          label: "報酬（税込・目安）",
          value: `${a.patrol ? a.patrol + "／" : ""}通常のお仕事（60分以内）：2,200円（以降30分ごと＋1,100円）／緊急の駆けつけ（最初の30分）：3,300円、深夜（22:00〜翌5:00）は5,500円（以降30分ごと＋1,100円）。金額はお仕事ごとにご提示し、合意のうえでお願いします`,
        },
        { label: "交通費", value: "原則お支払いしません。担当エリアへ自転車や徒歩で動ける方に向いています" },
        { label: "支払い", value: "月末締め・翌月末払い（銀行振込）" },
        {
          label: "応募資格",
          value:
            "経験不問。日本語力は問いません。スマートフォンで写真の撮影・送信、フォームの入力ができる方。LINEでやり取りができる方。英語や中国語ができる方は歓迎します",
        },
        { label: "選考", value: "書類選考 → 面接" },
      ],
      sections: [
        {
          heading: "仕事内容",
          text: `${a.areaDetail}にある当社運営の民泊施設で、スタッフが回りきれないときのお仕事をスポットでお願いします。\n\n${a.patrol ? "【巡回】\n・担当者が休む日の見回りの代わり\n・施設の様子を確認し、スマホで写真を撮って報告\n\n" : ""}【駆けつけ】\n・ゲストからの連絡を受けての現地対応（鍵のトラブル、設備の不具合、騒音への対応など）\n\n【軽作業】\n・備品や消耗品の補充、電球や電池の交換\n・業者の立ち会いなど\n\nお仕事はLINEで日時・場所・内容・金額をお伝えします。受けるかどうかは、その都度ご自身で選べます。`,
        },
        {
          heading: "ご登録について",
          text: "登録フォームで、連絡先・本人確認書類・報酬の振込口座などをご登録いただき、登録スタッフ規約（お仕事の条件）にご同意いただきます。\n留学生の方は、資格外活動許可の範囲内（ほかのアルバイトと合わせて週28時間以内）でお受けいただけます。",
        },
      ],
      note: "まずはメールでお気軽にお問い合わせください。",
      termsUrl: "https://docs.google.com/document/d/e/2PACX-1vTHf_x1y3_D9ykI41nu6FTbhPzBOBBC5mycZqZThoktBx9GY0mWDX_4nELu-sE1H3RTbdVQusX4MGdX/pub",
      en: {
        title: `On-call Property Support Staff (${a.areaEn})`,
        area: a.areaEn,
        wage: `${a.patrolCardEn ? a.patrolCardEn + " / " : ""}Call-out from ¥3,300 / Tasks from ¥2,200 (tax incl., guide)`,
        summary: `Spot work in your free time at vacation rentals near you — ${a.patrolEn ? "covering patrols, " : ""}call-outs and light tasks. You decide whether to take each job.`,
        facts: [
          {
            label: "Arrangement",
            value:
              "Registration-based (registering does not create any contract). We offer each job by LINE, and jobs you accept are done as freelance work. You can choose every time whether to take a job.",
          },
          { label: "Area", value: `Our properties in ${a.areaDetailEn}` },
          {
            label: "Work",
            value: `${a.patrolEn ? "Patrols (covering for staff on days off), " : ""}call-outs (on-site response to guest calls), and light tasks (restocking supplies, replacing light bulbs and batteries, being present for contractors, etc.)`,
          },
          {
            label: "Pay (tax incl., guide)",
            value: `${a.patrolEn ? a.patrolEn + " / " : ""}Regular task (up to 60 min): ¥2,200 (then +¥1,100 per 30 min) / Emergency call-out (first 30 min): ¥3,300, or ¥5,500 late at night (22:00–5:00) (then +¥1,100 per 30 min). We show the amount for each job, and you take it only if you agree.`,
          },
          { label: "Transport", value: "Not paid as a rule. Suits people who can get around the area by bicycle or on foot." },
          { label: "Payment", value: "Closed at month-end, paid by bank transfer by the end of the following month" },
          {
            label: "Requirements",
            value:
              "No experience needed. Japanese language ability is not required. You can take and send photos and fill in forms on a smartphone, and use LINE. English or Chinese is welcome.",
          },
          { label: "Selection", value: "Document screening → interview" },
        ],
        sections: [
          {
            heading: "Job description",
            text: `Spot work at our vacation rentals in ${a.areaDetailEn}, when our staff cannot cover everything.\n\n${a.patrolEn ? "[Patrols]\n・Covering the patrol on days our staff member is off\n・Checking the properties and reporting with smartphone photos\n\n" : ""}[Call-outs]\n・On-site response to guest calls (key trouble, equipment problems, noise, etc.)\n\n[Light tasks]\n・Restocking supplies, replacing light bulbs and batteries\n・Being present for contractors, etc.\n\nWe send each job by LINE with the date, place, task and amount. You decide each time whether to take it.`,
          },
          {
            heading: "Registering",
            text: "You register your contact details, ID and bank account on our registration form and agree to our registered staff terms (the conditions of the work).\nInternational students can take jobs within the limits of their permission to work (28 hours a week in total, including other part-time jobs).",
          },
        ],
        note: "Feel free to email us first.",
      },
      employmentType: "CONTRACTOR",
      datePosted: "2026-09-23",
      updatedAt: "2026-09-24",
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
