"use client";

import Link from "next/link";
import "./Business.css";

const businessNews = [
  {
    image: "/business/business-1.jpg",
    category: "बिज़नेस",
    title:
      "देश की अर्थव्यवस्था और कारोबार जगत से जुड़ी प्रमुख खबरों पर नजर",
  },
  {
    image: "/business/business-2.jpg",
    category: "बाजार",
    title:
      "शेयर बाजार और निवेश से जुड़े महत्वपूर्ण अपडेट सामने आए",
  },
  {
    image: "/business/business-3.jpg",
    category: "अर्थव्यवस्था",
    title:
      "देश की आर्थिक गतिविधियों और कारोबार से जुड़े अहम घटनाक्रम",
  },
  {
    image: "/business/business-4.jpg",
    category: "उद्योग",
    title:
      "उद्योग और कंपनियों से जुड़ी महत्वपूर्ण खबरें और ताजा अपडेट",
  },
];

const latestBusiness = [
  "देश के कारोबार जगत से जुड़े प्रमुख घटनाक्रम",
  "शेयर बाजार और निवेश से जुड़ी महत्वपूर्ण खबरें",
  "अर्थव्यवस्था से जुड़े नए अपडेट पर नजर",
  "कंपनियों और उद्योग जगत से सामने आई अहम खबरें",
  "बैंकिंग और वित्तीय क्षेत्र से जुड़े प्रमुख अपडेट",
];

const businessCategories = [
  "बिज़नेस",
  "शेयर बाजार",
  "अर्थव्यवस्था",
  "उद्योग",
  "बैंकिंग",
  "निवेश",
];

export default function BusinessPage() {
  return (
    <main className="ap-business-page">
      <div className="ap-business-container">

        {/* HEADER */}
        <div className="ap-business-header">
          <div className="ap-business-heading">

            <span className="ap-business-heading-line"></span>

            <div>
              <span className="ap-business-eyebrow">
                AP TODAY NEWS
              </span>

              <h1>
                बिज़नेस <span>न्यूज़</span>
              </h1>

              <p>
                कारोबार, बाजार, अर्थव्यवस्था और उद्योग जगत की प्रमुख खबरें
              </p>
            </div>

          </div>

          <Link href="/" className="ap-business-home">
            होम
            <span>→</span>
          </Link>
        </div>

        {/* CATEGORIES */}
        <div className="ap-business-categories">

          <div className="ap-business-category-title">
            बिज़नेस
          </div>

          {businessCategories.map((item, index) => (
            <Link href="#" key={index}>
              {item}
            </Link>
          ))}

        </div>

        {/* FEATURED SECTION */}
        <div className="ap-business-featured">

          {/* MAIN STORY */}
          <Link
            href="#"
            className="ap-business-main-story"
          >
            <div className="ap-business-main-image">

              <img
                src="/business/main.jpg"
                alt="बिज़नेस की मुख्य खबर"
              />

              <span className="ap-business-breaking">
                बड़ी खबर
              </span>

            </div>

            <div className="ap-business-main-content">

              <span className="ap-business-tag">
                बिज़नेस
              </span>

              <h2>
                कारोबार और अर्थव्यवस्था से जुड़ी
                आज की प्रमुख खबरों पर नजर
              </h2>

              <p>
                बाजार, कंपनियों, उद्योग, निवेश और देश की अर्थव्यवस्था
                से जुड़े महत्वपूर्ण अपडेट AP Today News पर।
              </p>

              <span className="ap-business-read">
                पूरी खबर पढ़ें →
              </span>

            </div>
          </Link>

          {/* SIDE NEWS */}
          <div className="ap-business-side">

            <div className="ap-business-side-header">
              <span></span>
              ताजा बिज़नेस खबरें
            </div>

            {latestBusiness.map((news, index) => (
              <Link
                href="#"
                className="ap-business-side-item"
                key={index}
              >

                <span className="ap-business-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <small>बिज़नेस</small>
                  <h3>{news}</h3>
                </div>

                <strong>→</strong>

              </Link>
            ))}

          </div>
        </div>

        {/* SECTION TITLE */}
        <div className="ap-business-section-title">

          <div>
            <span></span>

            <h2>
              बिज़नेस <strong>खबरें</strong>
            </h2>
          </div>

          <Link href="#">
            सभी खबरें →
          </Link>

        </div>

        {/* NEWS CARDS */}
        <div className="ap-business-cards">

          {businessNews.map((item, index) => (
            <Link
              href="#"
              className="ap-business-card"
              key={index}
            >

              <div className="ap-business-card-image">

                <img
                  src={item.image}
                  alt={item.title}
                />

                <span>
                  {item.category}
                </span>

              </div>

              <div className="ap-business-card-content">

                <small>
                  {item.category}
                </small>

                <h3>
                  {item.title}
                </h3>

                <div className="ap-business-card-footer">
                  <span>AP TODAY NEWS</span>
                  <strong>→</strong>
                </div>

              </div>

            </Link>
          ))}

        </div>

        {/* BOTTOM CTA */}
        <div className="ap-business-bottom">

          <div className="ap-business-bottom-icon">
            ₹
          </div>

          <div>
            <h3>
              बिज़नेस की हर बड़ी खबर पर नजर
            </h3>

            <p>
              बाजार, अर्थव्यवस्था, कंपनियों और कारोबार जगत
              से जुड़े महत्वपूर्ण अपडेट AP Today News पर पढ़ें।
            </p>
          </div>

          <Link href="#">
            और खबरें देखें →
          </Link>

        </div>

      </div>
    </main>
  );
}