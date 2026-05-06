"use client";

import { useState } from "react";
import { Star, ChevronDown, ChevronUp } from "lucide-react";

type Review = {
  ja: string;
  original?: string;
  author: string;
  flag: string;
  rating: number;
};

const reviews: Review[] = [
  {
    ja: "初めてAirbnbを利用しました。結果的に最高の経験でした。寛げる空間に必要な環境が揃っていて、外出するのがイヤになってしまうぐらい。また東京観光に行く際はお邪魔したいです。本当にありがとうございました。",
    author: "日本のゲスト",
    flag: "🇯🇵",
    rating: 5,
  },
  {
    ja: "このお家に泊まれて本当に良かったです！1ヶ月の滞在中、まるで自分の家にいるような感覚でした。家もアメニティも完璧で、周辺の環境も素晴らしかったです。ゆかさんとはんさん、素晴らしいホストでいてくださってありがとうございました！",
    original: "It was an absolute pleasure to stay at this house! It felt like having our own home while staying here for a month. The house and amenities were perfect, and the surrounding area was beautiful. Thank you so much to Yuka and Han for being excellent hosts!",
    author: "アメリカのゲスト",
    flag: "🇺🇸",
    rating: 5,
  },
  {
    ja: "到着した瞬間、温かいインテリアに思わずほっとしました。みんなでリビングに座って、食べながら話して、テレビを見て——何気ない、でもとても大切な時間。旅の締めくくりとして、これ以上ない柔らかな終わり方でした。また機会があれば、必ず戻ってきたいです。",
    original: "一走進屋內，溫暖的擺設讓人瞬間放鬆下來。大家坐在客廳，一邊吃著東西、一邊聊天、看著電視，那種平凡卻很珍貴的時光，讓人覺得特別安心。為這趟旅行劃下了一個很溫柔、也很完整的句點。如果還有機會，一定會想再回來住一次。",
    author: "台湾のゲスト",
    flag: "🇹🇼",
    rating: 5,
  },
  {
    ja: "これまでのAirbnbで最高の経験の一つでした。床暖房が素晴らしく、大きな窓から自然光がたっぷり入り、ベッドも快適でした。家族全員が安心して過ごせて、周辺も徒歩圏内に何でも揃っていました。また絶対に泊まりたいです！",
    original: "We had a wonderful stay at Yuka & Han's! One of the best AirBnB experiences so far. The home is more modern, very well insulated & the heated floors was absolutely wonderful. Our family felt safe & everything was within walking distance. Beds were comfortable & large windows allowed for lots of natural light. Definitely recommend!",
    author: "アメリカのゲスト",
    flag: "🇺🇸",
    rating: 5,
  },
  {
    ja: "素晴らしい滞在でした。スペースは清潔で広く、必要なアメニティが全て揃っていました。場所も最高——交通アクセスが良く、近くに良いレストランも。また絶対に泊まりたいし、友人にも強くおすすめします！",
    original: "I had an amazing experience at Yuka's house. The space was clean, spacious, and well-equipped with all the amenities I could ask for. The location was perfect—close to public transport, and great restaurants. Would definitely stay here again and highly recommend it to anyone looking for a cozy, convenient, and hassle-free experience!",
    author: "マレーシアのゲスト",
    flag: "🇲🇾",
    rating: 5,
  },
  {
    ja: "6人家族にぴったりの、快適で実用的な滞在でした。インテリアデザインが好きな私には、この家の和のコンセプトがたまりませんでした。大きな窓から差し込む自然光で空間が明るく、とても落ち着いた雰囲気でした。",
    original: "We had a truly enjoyable stay, very comfortable and perfectly suited for our family of 6. As someone who appreciates interior design, I loved the traditional Japanese concept of the house. The design details and wide windows brought in natural light, making the space feel bright, airy and very calming.",
    author: "マレーシアのゲスト",
    flag: "🇲🇾",
    rating: 5,
  },
  {
    ja: "本当に自分の家のように快適で清潔で居心地よく、家族での滞在に十分でした。布団も枕も充実していて、キッチンとリビングでみんなで食事を楽しめました。何よりホストがとても親切で、質問にもすぐ答えてくれました。また利用したいし、ぜひおすすめしたいです！",
    original: "이곳은 정말 내집처럼 편안하고 청결하고 아늑하고 가족단위 머물기 충분했습니다. 방도 이불도 넉넉해서 넉넉히 이용하고 주방거실에서 먹거리를 함께 먹기 좋았습니다. 무엇보다 숙소주인님 너무너무 친절하고 바로바로 문의에 빠른게 응답해주셨습니다. 다시한번 이용하고싶고 추천하고 싶습니다^^",
    author: "韓国のゲスト",
    flag: "🇰🇷",
    rating: 5,
  },
  {
    ja: "まさに想像していたJapandiスタイルのお家でした！設備が本当に充実していて、細部まで丁寧に考えられていることが伝わりました。ホストの対応も素晴らしく、また必ず戻ってきたいです。友人や家族にも強くおすすめします。",
    original: "The place is exactly the Japandi-style house I was imagining. Their house is super nice, and the hosts are very responsive. They have everything we need—truly, everything was very well thought out. We will definitely come back and recommend this place to our friends and family.",
    author: "フィリピンのゲスト",
    flag: "🇵🇭",
    rating: 5,
  },
  {
    ja: "家族全員、本当に楽しい滞在でした。ホストはとても親切でいつもすぐに対応してくれました。食事のおすすめを教えてくれて、遅めのチェックアウトにも融通を利かせてくれました。このエリアに泊まるならここをおすすめします！",
    original: "Our family truly enjoyed our stay. The host was very friendly and always responsive. She gave great food recommendations and allowed for a late checkout. We definitely recommend this home if you're in the area.",
    author: "アメリカのゲスト",
    flag: "🇺🇸",
    rating: 5,
  },
  {
    ja: "コミュニケーションが素晴らしく、分かりやすい案内をしてくださいました。広い家で必要なものが全て揃っていました。1歳半の子どもと旅行していましたが、ハイチェアや子ども用食器まで用意してあったのは嬉しい驚きでした！",
    original: "We had a fantastic time at Yuka & Hans! Their communication was exceptional. The home was spacious and had everything we needed for a comfortable stay. We were travelling with a 1.5 year old and the house had a highchair and plates/cutlery for her which was an unexpected help!",
    author: "ニュージーランドのゲスト",
    flag: "🇳🇿",
    rating: 5,
  },
  {
    ja: "美しい和の家で、清潔で丁寧にデザインされた空間。穏やかな雰囲気と素晴らしいレイアウトで、リラックスした滞在を楽しめました。強くおすすめします。",
    original: "Beautiful Japanese house, clean and thoughtful designed. Peaceful atmosphere, great layout and relaxing stay. Highly recommend.",
    author: "アメリカのゲスト",
    flag: "🇺🇸",
    rating: 5,
  },
  {
    ja: "家族で数日滞在しましたが、宿泊施設は完璧でした。全員が快適に過ごせる十分なスペースがあり、駅も近くてとても便利でした。また日本を訪れるときはここに泊まりたいです。ゆかさん・はんさん、ありがとうございました。",
    original: "Nous sommes restés quelques jours en famille et le logement était impeccable. Nous nous sommes sentis à l'aise avec assez d'espace pour tout le monde. De plus, la gare était proche. Nous recommandons et reviendrons si nous revenons au Japon. Merci pour tout Yuka & Han.",
    author: "カナダのゲスト",
    flag: "🇨🇦",
    rating: 5,
  },
  {
    ja: "静かな住宅街でゆっくりしたい方にぴったりの場所です！とても快適で居心地が良く、家は広くて設備も充実——必要なものは全て揃っています。周辺にはショッピング施設やレストランもあり、駅もすぐそこです！ゆかさん・はんさん、素晴らしい滞在をありがとうございました。",
    original: "Yuka & Han's place is perfect if you like being in a quiet neighborhood! We felt very comfortable there. The house is large and very well equipped—you'll find everything you need. There are also shopping facilities and restaurants nearby, and the train station is right next door!",
    author: "スイスのゲスト",
    flag: "🇨🇭",
    rating: 5,
  },
  {
    ja: "静かな住宅街の広々としたお家で、素敵な滞在を楽しめました。ホストは親切でレスポンスも早く、駐車場が使えたのも便利でした。ベッドシーツも快適で、全体的にとても気持ちのいい滞在でした。ありがとうございます！",
    original: "It was a lovely stay at this spacious house in a peaceful neighborhood. Host was friendly and responsive. As we drove a car, we found the parking convenient to have. The bed sheets were comfortable. Overall it was a pleasant stay. Thank you!",
    author: "シンガポールのゲスト",
    flag: "🇸🇬",
    rating: 5,
  },
];

function ReviewCard({ review }: { review: Review }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div style={{
      background: "var(--color-white)",
      borderRadius: "8px",
      padding: "1.8rem",
      boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
      breakInside: "avoid",
      marginBottom: "1.5rem",
    }}>
      {/* 星 + 国旗 */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.8rem" }}>
        <div style={{ display: "flex", gap: "2px" }}>
          {[...Array(review.rating)].map((_, j) => (
            <Star key={j} size={13} fill="var(--color-accent)" color="var(--color-accent)" />
          ))}
        </div>
        <span style={{ fontSize: "1.3rem" }}>{review.flag}</span>
      </div>

      {/* 日本語テキスト */}
      <p style={{
        fontSize: "0.88rem",
        lineHeight: 1.9,
        color: "var(--color-text-light)",
        fontStyle: "italic",
        overflow: "hidden",
        display: "-webkit-box",
        WebkitLineClamp: expanded ? undefined : 4,
        WebkitBoxOrient: "vertical",
        marginBottom: "0.5rem",
      }}>
        &ldquo;{review.ja}&rdquo;
      </p>

      {/* 原文（展開時のみ） */}
      {expanded && review.original && (
        <p style={{
          fontSize: "0.78rem",
          lineHeight: 1.8,
          color: "rgba(0,0,0,0.35)",
          marginBottom: "0.8rem",
          paddingTop: "0.8rem",
          borderTop: "1px solid #f0f0f0",
        }}>
          {review.original}
        </p>
      )}

      {/* 展開ボタン + 著者 */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "1rem" }}>
        <p style={{
          fontSize: "0.78rem",
          color: "var(--color-primary)",
          fontFamily: "var(--font-en)",
          letterSpacing: "0.05em",
        }}>
          — {review.author}
        </p>
        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.2rem",
            fontSize: "0.72rem",
            color: "var(--color-accent)",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.2rem 0",
            letterSpacing: "0.05em",
          }}
        >
          {expanded ? (
            <><ChevronUp size={13} /> 閉じる</>
          ) : (
            <><ChevronDown size={13} /> 続きを見る</>
          )}
        </button>
      </div>
    </div>
  );
}

export default function WutoReviews() {
  return (
    <section style={{ background: "var(--color-bg)", padding: "5rem 8%" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
          <p style={{
            fontFamily: "var(--font-en)",
            fontSize: "0.75rem",
            letterSpacing: "0.3em",
            color: "var(--color-accent)",
            marginBottom: "0.5rem",
          }}>GUEST REVIEWS</p>
          <h2 style={{
            fontFamily: "var(--font-en)",
            fontSize: "2.5rem",
            fontWeight: 400,
            color: "var(--color-primary)",
            marginBottom: "0.5rem",
          }}>ゲストの声</h2>
        </div>

        {/* 評価サマリー */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "3rem",
          marginBottom: "3rem",
          flexWrap: "wrap",
        }}>
          <div style={{ textAlign: "center" }}>
            <p style={{
              fontFamily: "var(--font-en)",
              fontSize: "3rem",
              fontWeight: 300,
              color: "var(--color-primary)",
              lineHeight: 1,
              marginBottom: "0.3rem",
            }}>4.97</p>
            <div style={{ display: "flex", gap: "2px", justifyContent: "center", marginBottom: "0.3rem" }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="var(--color-accent)" color="var(--color-accent)" />
              ))}
            </div>
            <p style={{ fontSize: "0.78rem", color: "var(--color-text-light)", letterSpacing: "0.05em" }}>
              Airbnb 5施設平均評価
            </p>
          </div>
          <div style={{ width: "1px", height: "60px", background: "#ddd" }} className="review-divider" />
          <div style={{ textAlign: "center" }}>
            <p style={{
              fontFamily: "var(--font-en)",
              fontSize: "3rem",
              fontWeight: 300,
              color: "var(--color-primary)",
              lineHeight: 1,
              marginBottom: "0.3rem",
            }}>5/5</p>
            <p style={{ fontSize: "0.78rem", color: "var(--color-text-light)", letterSpacing: "0.05em" }}>
              全施設 Airbnb ゲストチョイス獲得
            </p>
          </div>
        </div>

        {/* レビューカード masonry */}
        <div style={{ columns: 3, columnGap: "1.5rem" }} className="reviews-masonry">
          {reviews.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .reviews-masonry { columns: 1 !important; }
          .review-divider { display: none; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .reviews-masonry { columns: 2 !important; }
        }
      `}</style>
    </section>
  );
}
