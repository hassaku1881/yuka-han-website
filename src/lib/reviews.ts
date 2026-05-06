export type Review = {
  ja: string;
  original?: string;
  author: string;
  flag: string;
  rating: number;
};

export const reviews: Review[] = [
  {
    ja: "初めてAirbnbを利用しました。結果的に最高の経験でした。寛げる空間に必要な環境が揃っていて、外出するのがイヤになってしまうぐらい。また東京観光に行く際はお邪魔したいです。本当にありがとうございました。",
    author: "日本より",
    flag: "🇯🇵",
    rating: 5,
  },
  {
    ja: "このお家に泊まれて本当に良かったです！1ヶ月の滞在中、まるで自分の家にいるような感覚でした。家もアメニティも完璧で、周辺の環境も素晴らしかったです。ゆかさんとはんさん、素晴らしいホストでいてくださってありがとうございました！",
    original: "It was an absolute pleasure to stay at this house! It felt like having our own home while staying here for a month. The house and amenities were perfect, and the surrounding area was beautiful. Thank you so much to Yuka and Han for being excellent hosts!",
    author: "アメリカより",
    flag: "🇺🇸",
    rating: 5,
  },
  {
    ja: "到着した瞬間、温かいインテリアに思わずほっとしました。みんなでリビングに座って、食べながら話して、テレビを見て——何気ない、でもとても大切な時間。旅の締めくくりとして、これ以上ない柔らかな終わり方でした。また機会があれば、必ず戻ってきたいです。",
    original: "一走進屋內，溫暖的擺設讓人瞬間放鬆下來。大家坐在客廳，一邊吃著東西、一邊聊天、看著電視，那種平凡卻很珍貴的時光，讓人覺得特別安心。為這趟旅行劃下了一個很溫柔、也很完整的句點。如果還有機會，一定會想再回來住一次。",
    author: "台湾より",
    flag: "🇹🇼",
    rating: 5,
  },
  {
    ja: "これまでのAirbnbで最高の経験の一つでした。床暖房が素晴らしく、大きな窓から自然光がたっぷり入り、ベッドも快適でした。家族全員が安心して過ごせて、周辺も徒歩圏内に何でも揃っていました。また絶対に泊まりたいです！",
    original: "We had a wonderful stay at Yuka & Han's! One of the best AirBnB experiences so far. The home is more modern, very well insulated & the heated floors was absolutely wonderful. Our family felt safe & everything was within walking distance. Beds were comfortable & large windows allowed for lots of natural light. Definitely recommend!",
    author: "アメリカより",
    flag: "🇺🇸",
    rating: 5,
  },
  {
    ja: "素晴らしい滞在でした。スペースは清潔で広く、必要なアメニティが全て揃っていました。場所も最高——交通アクセスが良く、近くに良いレストランも。また絶対に泊まりたいし、友人にも強くおすすめします！",
    original: "I had an amazing experience at Yuka's house. The space was clean, spacious, and well-equipped with all the amenities I could ask for. The location was perfect—close to public transport, and great restaurants. Would definitely stay here again and highly recommend it to anyone looking for a cozy, convenient, and hassle-free experience!",
    author: "マレーシアより",
    flag: "🇲🇾",
    rating: 5,
  },
  {
    ja: "6人家族にぴったりの、快適で実用的な滞在でした。インテリアデザインが好きな私には、この家の和のコンセプトがたまりませんでした。大きな窓から差し込む自然光で空間が明るく、とても落ち着いた雰囲気でした。",
    original: "We had a truly enjoyable stay, very comfortable and perfectly suited for our family of 6. As someone who appreciates interior design, I loved the traditional Japanese concept of the house. The design details and wide windows brought in natural light, making the space feel bright, airy and very calming.",
    author: "マレーシアより",
    flag: "🇲🇾",
    rating: 5,
  },
  {
    ja: "本当に自分の家のように快適で清潔で居心地よく、家族での滞在に十分でした。布団も枕も充実していて、キッチンとリビングでみんなで食事を楽しめました。何よりホストがとても親切で、質問にもすぐ答えてくれました。また利用したいし、ぜひおすすめしたいです！",
    original: "이곳은 정말 내집처럼 편안하고 청결하고 아늑하고 가족단위 머물기 충분했습니다. 방도 이불도 넉넉해서 넉넉히 이용하고 주방거실에서 먹거리를 함께 먹기 좋았습니다. 무엇보다 숙소주인님 너무너무 친절하고 바로바로 문의에 빠른게 응답해주셨습니다. 다시한번 이용하고싶고 추천하고 싶습니다^^",
    author: "韓国より",
    flag: "🇰🇷",
    rating: 5,
  },
  {
    ja: "まさに想像していたJapandiスタイルのお家でした！設備が本当に充実していて、細部まで丁寧に考えられていることが伝わりました。ホストの対応も素晴らしく、また必ず戻ってきたいです。友人や家族にも強くおすすめします。",
    original: "The place is exactly the Japandi-style house I was imagining. Their house is super nice, and the hosts are very responsive. They have everything we need—truly, everything was very well thought out. We will definitely come back and recommend this place to our friends and family.",
    author: "フィリピンより",
    flag: "🇵🇭",
    rating: 5,
  },
  {
    ja: "家族全員、本当に楽しい滞在でした。ホストはとても親切でいつもすぐに対応してくれました。食事のおすすめを教えてくれて、遅めのチェックアウトにも融通を利かせてくれました。このエリアに泊まるならここをおすすめします！",
    original: "Our family truly enjoyed our stay. The host was very friendly and always responsive. She gave great food recommendations and allowed for a late checkout. We definitely recommend this home if you're in the area.",
    author: "アメリカより",
    flag: "🇺🇸",
    rating: 5,
  },
  {
    ja: "コミュニケーションが素晴らしく、分かりやすい案内をしてくださいました。広い家で必要なものが全て揃っていました。1歳半の子どもと旅行していましたが、ハイチェアや子ども用食器まで用意してあったのは嬉しい驚きでした！",
    original: "We had a fantastic time at Yuka & Hans! Their communication was exceptional. The home was spacious and had everything we needed for a comfortable stay. We were travelling with a 1.5 year old and the house had a highchair and plates/cutlery for her which was an unexpected help!",
    author: "ニュージーランドより",
    flag: "🇳🇿",
    rating: 5,
  },
  {
    ja: "美しい和の家で、清潔で丁寧にデザインされた空間。穏やかな雰囲気と素晴らしいレイアウトで、リラックスした滞在を楽しめました。強くおすすめします。",
    original: "Beautiful Japanese house, clean and thoughtful designed. Peaceful atmosphere, great layout and relaxing stay. Highly recommend.",
    author: "アメリカより",
    flag: "🇺🇸",
    rating: 5,
  },
  {
    ja: "家族で数日滞在しましたが、宿泊施設は完璧でした。全員が快適に過ごせる十分なスペースがあり、駅も近くてとても便利でした。また日本を訪れるときはここに泊まりたいです。ゆかさん・はんさん、ありがとうございました。",
    original: "Nous sommes restés quelques jours en famille et le logement était impeccable. Nous nous sommes sentis à l'aise avec assez d'espace pour tout le monde. De plus, la gare était proche. Nous recommandons et reviendrons si nous revenons au Japon. Merci pour tout Yuka & Han.",
    author: "カナダより",
    flag: "🇨🇦",
    rating: 5,
  },
  {
    ja: "静かな住宅街でゆっくりしたい方にぴったりの場所です！とても快適で居心地が良く、家は広くて設備も充実——必要なものは全て揃っています。周辺にはショッピング施設やレストランもあり、駅もすぐそこです！ゆかさん・はんさん、素晴らしい滞在をありがとうございました。",
    original: "Yuka & Han's place is perfect if you like being in a quiet neighborhood! We felt very comfortable there. The house is large and very well equipped—you'll find everything you need. There are also shopping facilities and restaurants nearby, and the train station is right next door!",
    author: "スイスより",
    flag: "🇨🇭",
    rating: 5,
  },
  {
    ja: "静かな住宅街の広々としたお家で、素敵な滞在を楽しめました。ホストは親切でレスポンスも早く、駐車場が使えたのも便利でした。ベッドシーツも快適で、全体的にとても気持ちのいい滞在でした。ありがとうございます！",
    original: "It was a lovely stay at this spacious house in a peaceful neighborhood. Host was friendly and responsive. As we drove a car, we found the parking convenient to have. The bed sheets were comfortable. Overall it was a pleasant stay. Thank you!",
    author: "シンガポールより",
    flag: "🇸🇬",
    rating: 5,
  },
];
