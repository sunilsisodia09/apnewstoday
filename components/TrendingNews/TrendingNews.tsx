import Link from "next/link";
import "./TrendingNews.css";

const trendingNews = [
  {
    id: 1,
    image: "https://your-domain.com/news/trending-1.jpg",
    category: "उत्तराखंड",
    title:
      "उत्तराखंड से जुड़ी बड़ी खबरों और महत्वपूर्ण अपडेट पर सबकी नजर",
    href: "/uttarakhand",
  },
  {
    id: 2,
    image: "https://your-domain.com/news/trending-2.jpg",
    category: "देहरादून",
    title:
      "देहरादून से सामने आई दिनभर की प्रमुख खबरें और बड़े अपडेट",
    href: "/category/dehradun",
  },
  {
    id: 3,
    image: "https://your-domain.com/news/trending-3.jpg",
    category: "राजनीति",
    title:
      "राजनीतिक गतिविधियों और महत्वपूर्ण घटनाक्रम से जुड़ी खबरें",
    href: "/politics",
  },
  {
    id: 4,
    image: "https://your-domain.com/news/trending-4.jpg",
    category: "बिज़नेस",
    title:
      "कारोबार, बाजार और अर्थव्यवस्था से जुड़े अहम अपडेट",
    href: "/business",
  },
  {
    id: 5,
    image: "https://your-domain.com/news/trending-5.jpg",
    category: "खेल",
    title:
      "खेल जगत से सामने आई महत्वपूर्ण खबर और ताजा अपडेट",
    href: "/sports",
  },
];

export default function TrendingNews() {
  return (
    <section className="ap-trending">
      <div className="ap-trending-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="ap-trending-header">

          <div className="ap-trending-heading">

            <span className="ap-trending-line"></span>

            <div>
              <span className="ap-trending-eyebrow">
                AP TODAY NEWS
              </span>

              <h2>
                Trending <span>News</span>
              </h2>

              <p>
                अभी सबसे ज्यादा पढ़ी जा रही खबरें
              </p>
            </div>

          </div>

         

        </div>


        {/* =================================================
            TRENDING CONTENT
        ================================================= */}

        <div className="ap-trending-layout">

          {/* LEFT FEATURED */}

          <Link
            href={trendingNews[0].href}
            className="ap-trending-featured"
          >

            <div className="ap-trending-featured-image">

              <img
                src={trendingNews[0].image}
                alt={trendingNews[0].title}
              />

              <div className="ap-trending-overlay"></div>

              <span className="ap-trending-featured-label">
                #1 TRENDING
              </span>

              <div className="ap-trending-featured-content">

                <span>
                  {trendingNews[0].category}
                </span>

                <h3>
                  {trendingNews[0].title}
                </h3>

                <strong>
                  पूरी खबर पढ़ें →
                </strong>

              </div>

            </div>

          </Link>


          {/* RIGHT LIST */}

          <div className="ap-trending-list">

            {trendingNews.slice(1).map((item) => (

              <Link
                href={item.href}
                className="ap-trending-item"
                key={item.id}
              >

                <div className="ap-trending-number">
                  {String(item.id).padStart(2, "0")}
                </div>

                <div className="ap-trending-item-image">

                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                  />

                </div>

                <div className="ap-trending-item-content">

                  <span>
                    {item.category}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <small>
                    AP TODAY NEWS
                  </small>

                </div>

                <div className="ap-trending-arrow">
                  →
                </div>

              </Link>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}