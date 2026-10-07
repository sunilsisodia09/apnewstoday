import Link from "next/link";
import "./News.css";

const newsItems = [
  {
    id: 1,
    category: "उत्तराखंड",
    title: "उत्तराखंड से जुड़ी बड़ी खबरें और ताज़ा अपडेट",
    excerpt:
      "उत्तराखंड के अलग-अलग जिलों से सामने आ रही महत्वपूर्ण खबरों और घटनाक्रमों पर एक नज़र।",
    date: "आज",
    slug: "uttarakhand-latest-news",
  },
  {
    id: 2,
    category: "भारत",
    title: "देशभर की महत्वपूर्ण खबरों पर रहेगी AP Today News की नज़र",
    excerpt:
      "देश में हो रहे महत्वपूर्ण राजनीतिक, सामाजिक और आर्थिक घटनाक्रमों की ताज़ा जानकारी।",
    date: "आज",
    slug: "india-latest-news",
  },
  {
    id: 3,
    category: "राजनीति",
    title: "राजनीति से जुड़ी बड़ी खबरें और महत्वपूर्ण अपडेट",
    excerpt:
      "राजनीतिक गतिविधियों, नेताओं के बयान और देश-प्रदेश की राजनीति से जुड़े अपडेट।",
    date: "आज",
    slug: "politics-latest-news",
  },
  {
    id: 4,
    category: "बिज़नेस",
    title: "बिज़नेस और अर्थव्यवस्था की ताज़ा खबरें",
    excerpt:
      "बाजार, कारोबार, कंपनियों और अर्थव्यवस्था से जुड़े महत्वपूर्ण समाचार।",
    date: "आज",
    slug: "business-latest-news",
  },
  {
    id: 5,
    category: "खेल",
    title: "खेल जगत की बड़ी खबरें और ताज़ा अपडेट",
    excerpt:
      "क्रिकेट, फुटबॉल और अन्य खेलों से जुड़े महत्वपूर्ण समाचार और अपडेट।",
    date: "आज",
    slug: "sports-latest-news",
  },
  {
    id: 6,
    category: "मनोरंजन",
    title: "मनोरंजन जगत की लेटेस्ट खबरें",
    excerpt:
      "फिल्म, टीवी, बॉलीवुड और मनोरंजन की दुनिया से जुड़ी ताज़ा खबरें।",
    date: "आज",
    slug: "entertainment-latest-news",
  },
];

const categories = [
  { name: "सभी खबरें", href: "/news" },
  { name: "उत्तराखंड", href: "/uttarakhand" },
  { name: "भारत", href: "/india" },
  { name: "राजनीति", href: "/politics" },
  { name: "बिज़नेस", href: "/business" },
  { name: "खेल", href: "/sports" },
  { name: "मनोरंजन", href: "/entertainment" },
  { name: "टेक्नोलॉजी", href: "/technology" },
];

export default function NewsPage() {
  return (
    <main className="news-page">

      {/* HERO */}
      <section className="news-hero">
        <div className="news-hero-overlay"></div>

        <div className="news-container news-hero-content">
          <span className="news-eyebrow">AP TODAY NEWS</span>

          <h1>
            ताज़ा <span>खबरें</span>
          </h1>

          <p>
            उत्तराखंड, भारत और दुनिया की महत्वपूर्ण खबरों से
            जुड़े रहें। पढ़ें लेटेस्ट न्यूज़ और अपडेट।
          </p>

          <div className="news-breadcrumb">
            <Link href="/">होम</Link>
            <span>/</span>
            <strong>न्यूज़</strong>
          </div>
        </div>
      </section>

      {/* CATEGORY NAV */}
      <section className="news-category-section">
        <div className="news-container">
          <div className="news-category-scroll">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className={
                  category.href === "/news"
                    ? "news-category active"
                    : "news-category"
                }
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN NEWS */}
      <section className="news-main-section">
        <div className="news-container">

          <div className="news-section-heading">
            <div>
              <span className="news-section-label">
                LATEST UPDATES
              </span>

              <h2>
                आज की <span>बड़ी खबरें</span>
              </h2>
            </div>

            <p>
              AP Today News पर पढ़ें देश और दुनिया की
              महत्वपूर्ण खबरें।
            </p>
          </div>

          <div className="news-layout">

            {/* NEWS GRID */}
            <div className="news-grid">

              {newsItems.map((item) => (
                <article
                  className="news-card"
                  key={item.id}
                >
                  <div className="news-card-image">
                    <div className="news-card-placeholder">
                      <span>AP</span>
                      <small>TODAY NEWS</small>
                    </div>

                    <span className="news-card-category">
                      {item.category}
                    </span>
                  </div>

                  <div className="news-card-content">

                    <div className="news-card-meta">
                      <span>{item.date}</span>
                      <span>•</span>
                      <span>AP Today News</span>
                    </div>

                    <h3>
                      <Link href={`/news/${item.slug}`}>
                        {item.title}
                      </Link>
                    </h3>

                    <p>
                      {item.excerpt}
                    </p>

                    <Link
                      href={`/news/${item.slug}`}
                      className="news-read-more"
                    >
                      पूरी खबर पढ़ें
                      <span>→</span>
                    </Link>

                  </div>
                </article>
              ))}

            </div>

            {/* SIDEBAR */}
            <aside className="news-sidebar">

              <div className="news-sidebar-box">

                <span className="news-sidebar-label">
                  TRENDING
                </span>

                <h3>
                  ट्रेंडिंग <span>खबरें</span>
                </h3>

                <div className="trending-list">

                  {newsItems.slice(0, 5).map((item, index) => (
                    <Link
                      href={`/news/${item.slug}`}
                      className="trending-item"
                      key={item.id}
                    >
                      <strong>
                        {String(index + 1).padStart(2, "0")}
                      </strong>

                      <div>
                        <span>{item.category}</span>
                        <h4>{item.title}</h4>
                      </div>
                    </Link>
                  ))}

                </div>

              </div>

              {/* NEWSLETTER */}
              <div className="news-newsletter">

                <span>AP TODAY NEWS</span>

                <h3>
                  खबरों से
                  <br />
                  जुड़े रहें
                </h3>

                <p>
                  महत्वपूर्ण खबरों और लेटेस्ट अपडेट के लिए
                  AP Today News पढ़ते रहें।
                </p>

                <Link
                  href="/"
                  className="news-newsletter-button"
                >
                  होम पेज देखें
                  <span>→</span>
                </Link>

              </div>

            </aside>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="news-bottom-cta">
        <div className="news-container">
          <div className="news-bottom-cta-inner">

            <div>
              <span>AP TODAY NEWS</span>

              <h2>
                हर खबर पर
                <br />
                आपकी नज़र।
              </h2>
            </div>

            <Link
              href="/"
              className="news-cta-button"
            >
              ताज़ा खबरें पढ़ें
              <span>→</span>
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}