import Link from "next/link";

type NewsPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const newsData: Record<
  string,
  {
    category: string;
    title: string;
    excerpt: string;
  }
> = {
  "uttarakhand-latest-news": {
    category: "उत्तराखंड",
    title: "उत्तराखंड से जुड़ी बड़ी खबरें और ताज़ा अपडेट",
    excerpt:
      "उत्तराखंड के अलग-अलग जिलों से सामने आ रही महत्वपूर्ण खबरों और घटनाक्रमों की जानकारी।",
  },

  "india-latest-news": {
    category: "भारत",
    title: "देशभर की महत्वपूर्ण खबरों पर रहेगी AP Today News की नज़र",
    excerpt:
      "देश में हो रहे महत्वपूर्ण राजनीतिक, सामाजिक और आर्थिक घटनाक्रमों की ताज़ा जानकारी।",
  },

  "politics-latest-news": {
    category: "राजनीति",
    title: "राजनीति से जुड़ी बड़ी खबरें और महत्वपूर्ण अपडेट",
    excerpt:
      "राजनीतिक गतिविधियों और देश-प्रदेश की राजनीति से जुड़े महत्वपूर्ण अपडेट।",
  },

  "business-latest-news": {
    category: "बिज़नेस",
    title: "बिज़नेस और अर्थव्यवस्था की ताज़ा खबरें",
    excerpt:
      "बाजार, कारोबार, कंपनियों और अर्थव्यवस्था से जुड़े महत्वपूर्ण समाचार।",
  },

  "sports-latest-news": {
    category: "खेल",
    title: "खेल जगत की बड़ी खबरें और ताज़ा अपडेट",
    excerpt:
      "क्रिकेट, फुटबॉल और अन्य खेलों से जुड़े महत्वपूर्ण समाचार और अपडेट।",
  },

  "entertainment-latest-news": {
    category: "मनोरंजन",
    title: "मनोरंजन जगत की लेटेस्ट खबरें",
    excerpt:
      "फिल्म, टीवी, बॉलीवुड और मनोरंजन की दुनिया से जुड़ी ताज़ा खबरें।",
  },
};

export default async function SingleNewsPage({
  params,
}: NewsPageProps) {
  const { slug } = await params;

  const news = newsData[slug];

  if (!news) {
    return (
      <main
        style={{
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 20px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1
            style={{
              fontSize: "50px",
              marginBottom: "15px",
            }}
          >
            खबर नहीं मिली
          </h1>

          <p
            style={{
              color: "#777",
              marginBottom: "25px",
            }}
          >
            जिस खबर को आप खोज रहे हैं वह उपलब्ध नहीं है।
          </p>

          <Link
            href="/news"
            style={{
              display: "inline-block",
              padding: "13px 22px",
              background: "#d90000",
              color: "#fff",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            सभी खबरें देखें
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main
      style={{
        background: "#fff",
        minHeight: "100vh",
      }}
    >
      {/* HERO */}
      <section
        style={{
          background: "#111",
          padding: "100px 20px",
          color: "#fff",
        }}
      >
        <div
          style={{
            width: "min(100%, 900px)",
            margin: "0 auto",
          }}
        >
          <Link
            href="/news"
            style={{
              color: "#d90000",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 700,
            }}
          >
            ← सभी खबरें
          </Link>

          <div
            style={{
              marginTop: "30px",
              color: "#d90000",
              fontSize: "12px",
              fontWeight: 900,
              letterSpacing: "2px",
            }}
          >
            {news.category}
          </div>

          <h1
            style={{
              margin: "18px 0",
              fontSize: "clamp(36px, 6vw, 70px)",
              lineHeight: 1.05,
              letterSpacing: "-2px",
            }}
          >
            {news.title}
          </h1>

          <p
            style={{
              maxWidth: "700px",
              color: "rgba(255,255,255,0.7)",
              fontSize: "17px",
              lineHeight: 1.8,
            }}
          >
            {news.excerpt}
          </p>

          <div
            style={{
              marginTop: "25px",
              color: "rgba(255,255,255,0.5)",
              fontSize: "13px",
            }}
          >
            AP Today News • आज
          </div>
        </div>
      </section>

      {/* ARTICLE */}
      <article
        style={{
          width: "min(100% - 40px, 850px)",
          margin: "0 auto",
          padding: "70px 0 100px",
        }}
      >
        <div
          style={{
            height: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background:
              "linear-gradient(135deg, #111111, #303030)",
            marginBottom: "45px",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                color: "#fff",
                fontSize: "70px",
                fontWeight: 900,
                letterSpacing: "-5px",
              }}
            >
              AP
            </div>

            <div
              style={{
                color: "#d90000",
                fontSize: "11px",
                fontWeight: 900,
                letterSpacing: "3px",
              }}
            >
              TODAY NEWS
            </div>
          </div>
        </div>

        <p
          style={{
            fontSize: "20px",
            lineHeight: 1.9,
            color: "#222",
            fontWeight: 600,
          }}
        >
          {news.excerpt}
        </p>

        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.9,
            color: "#555",
          }}
        >
          AP Today News पर हम अपने पाठकों तक महत्वपूर्ण और
          जनहित से जुड़ी खबरों को सरल एवं स्पष्ट तरीके से
          पहुंचाने का प्रयास करते हैं। उत्तराखंड के साथ-साथ
          देश और दुनिया में होने वाले महत्वपूर्ण घटनाक्रमों
          पर हमारी नज़र रहती है।
        </p>

        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.9,
            color: "#555",
          }}
        >
          इस खबर से जुड़ी नई जानकारी सामने आने पर इसे अपडेट
          किया जा सकता है। ताज़ा समाचारों के लिए AP Today News
          के साथ जुड़े रहें।
        </p>

        <div
          style={{
            marginTop: "45px",
            paddingTop: "25px",
            borderTop: "1px solid #ddd",
          }}
        >
          <Link
            href="/news"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              color: "#d90000",
              textDecoration: "none",
              fontWeight: 800,
            }}
          >
            ← सभी खबरें देखें
          </Link>
        </div>
      </article>
    </main>
  );
}