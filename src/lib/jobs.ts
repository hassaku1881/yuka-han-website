// 採用情報の求人データ
// 追加・変更はこのファイルを編集（Airワーク側は別途手動反映が必要）

export type JobCategory = "part" | "contract" | "registered";

export const JOB_CATEGORY_LABELS: Record<JobCategory, string> = {
  part: "パート・アルバイト",
  contract: "業務委託",
  registered: "登録スタッフ",
};

export type Job = {
  id: string;
  published: boolean;
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
};

export const jobs: Job[] = [
  // ── パート・アルバイト ──────────────────────────────
  {
    id: "katsushika-facility",
    // 2026/9 充足済み（1名稼働中）。欠員時に true へ
    published: false,
    category: "part",
    title: "宿泊施設の管理スタッフ（見回り・軽作業）",
    area: "葛飾エリア",
    wage: "時給1,300円＋日直手当500円/日",
    summary:
      "葛飾区内の宿泊施設を自転車やバイクで回り、見回りと軽作業をお願いします。未経験歓迎、週20時間ほど。",
    facts: [
      { label: "雇用形態", value: "パート（3か月契約・原則更新／試用期間なし）" },
      { label: "勤務地", value: "東京都葛飾区内の宿泊施設（拠点：お花茶屋2-5-21）" },
      { label: "報酬", value: "時給1,300円＋日直手当500円/日" },
      {
        label: "勤務時間",
        value:
          "週20時間ほど。毎日の巡回2時間（午前型9:00〜13:00／夕方型16:00〜20:00から選択・固定）＋その他作業 週8時間（シフト制）",
      },
      { label: "休日", value: "週1日（巡回は予備スタッフが担当）" },
      { label: "通勤", value: "自転車・バイク可" },
      { label: "応募資格", value: "年齢・学歴・経験不問。スマホで写真を撮って送れる方" },
    ],
    sections: [
      {
        heading: "仕事内容",
        text: "葛飾区内にある宿泊施設を自転車またはバイクで回り、施設の見回りと管理をお願いします。\n\n【毎日の巡回・2時間程度】\n・施設の見回りと、スマホでの写真報告\n・共用部の簡単な清掃、ゴミの整理\n\n【その他の作業・週8時間程度／シフト制】\n・新しい施設の開業準備（家具や備品の設置、開梱、清掃）\n・備品や消耗品の買い出しと補充\n・草取りなど、外まわりの手入れ\n・電球交換などの軽微な修繕、業者立ち会い",
      },
      {
        heading: "働き方",
        text: "巡回の時間帯は午前型（9:00〜13:00の中で2時間）か夕方型（16:00〜20:00の中で2時間）を選んで固定。その他の作業は日ごとの濃淡を自由に調整できます。客室の清掃とお客様への対応は別の担当が行います。",
      },
    ],
    note: "この求人はハローワークにも掲載しています（ハローワーク墨田）。",
    employmentType: "PART_TIME",
    datePosted: "2026-09-05",
    locality: "葛飾区",
    streetAddress: "お花茶屋2-5-21",
    hourlyWage: 1300,
  },
  {
    id: "shinjuku-facility",
    published: true,
    category: "part",
    title: "宿泊施設の見回り・管理スタッフ",
    area: "新宿エリア（新宿三丁目駅 徒歩4分）",
    wage: "巡回手当 月6,000円＋時給1,300円（見回り以外の作業）",
    summary:
      "週1回・最長15分の見回りで月6,000円。留学生の方も、資格外活動の週28時間の枠をほとんど使わずに働けます。",
    facts: [
      { label: "雇用形態", value: "パート（3か月契約・原則更新／試用期間なし）" },
      { label: "勤務地", value: "東京都新宿区新宿5-11-2（新宿三丁目駅 徒歩4分）" },
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
      { label: "応募資格", value: "年齢・学歴・経験・資格すべて不問。スマートフォンで写真の撮影・送信ができる方" },
      { label: "選考", value: "書類選考＋面接1回（オンライン可）。履歴書をご用意ください" },
      { label: "採用人数", value: "1名" },
    ],
    sections: [
      {
        heading: "仕事内容",
        text: "新宿三丁目駅から徒歩4分のマンション1棟（5部屋）の見回りと管理をお願いします。対象の部屋は1〜3階にあり、エレベーターはありません（階段を使います）。\n\n【週1回の見回り・最長15分】\n・玄関とゴミ置き場の様子を確認\n・共用部のちょっとした清掃\n・郵便物の確認と回収\n・スマホで写真を撮って完了報告\n早ければ数分で終わります。時間が短くても手当は減りません。\n\n【軽作業・不定期／時給1,300円・1分単位】\n・客室内の清掃、草取り\n・消耗品の買い出しと補充\n・電球や電池の交換、簡単な組立\n・工事や設備点検の立ち会い（平日日中）\n\n【緊急駆けつけ】\nトラブルのときの駆けつけをお願いすることがあります。1回3,000円の手当と時給で、深夜は割増します。都合がつかないときは別の担当者が対応します。",
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
    note: "応募は履歴書（写真貼付なし）をメールでお送りください。ハローワークからの紹介でも応募できます。",
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
  ...[
    { id: "oncall-keisei", area: "葛飾区・京成線エリア", locality: "葛飾区" },
    { id: "oncall-shinkoiwa", area: "葛飾区・新小岩エリア", locality: "葛飾区" },
    { id: "oncall-shinjuku", area: "新宿エリア", locality: "新宿区" },
    { id: "oncall-ichinoe", area: "江戸川区・一之江/瑞江エリア", locality: "江戸川区" },
  ].map(
    (a): Job => ({
      id: a.id,
      published: false,
      category: "registered",
      title: `施設管理・駆け付け登録スタッフ（${a.area}）`,
      area: a.area,
      wage: "1回あたりの手当制",
      summary: "お近くの宿泊施設でトラブルがあった際の駆け付け・現地確認をお願いする登録制スタッフです。",
      facts: [],
      sections: [],
      employmentType: "CONTRACTOR",
      datePosted: "2026-09-23",
      locality: a.locality,
    })
  ),
];

export const publishedJobs = jobs.filter((j) => j.published);
export const getJob = (id: string) => publishedJobs.find((j) => j.id === id);
