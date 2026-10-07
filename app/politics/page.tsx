"use client";

import Link from "next/link";
import "./Politics.css";

const politicsNews = [
  {
    image: "/politics/politics-1.jpg",
    category: "उत्तराखंड राजनीति",
    title:
      "उत्तराखंड की राजनीति से जुड़ी प्रमुख खबरों और राजनीतिक गतिविधियों पर नजर",
  },
  {
    image: "/politics/politics-2.jpg",
    category: "राजनीति",
    title:
      "राज्य में राजनीतिक गतिविधियां तेज, महत्वपूर्ण मुद्दों पर चर्चा जारी",
  },
  {
    image: "/politics/politics-3.jpg",
    category: "सरकार",
    title:
      "सरकार और प्रशासन से जुड़े महत्वपूर्ण फैसलों पर सबकी नजर",
  },
  {
    image: "/politics/politics-4.jpg",
    category: "देश की राजनीति",
    title:
      "देश की राजनीति से जुड़े प्रमुख घटनाक्रम और महत्वपूर्ण अपडेट",
  },
];

const latestPolitics = [
  "उत्तराखंड की राजनीति से जुड़े प्रमुख मुद्दों पर चर्चा",
  "सरकार और विपक्ष से जुड़े महत्वपूर्ण राजनीतिक घटनाक्रम",
  "राज्य में राजनीतिक गतिविधियों और बैठकों पर नजर",
  "जनहित से जुड़े मुद्दों को लेकर राजनीतिक हलचल",
  "देश की राजनीति से सामने आने वाले प्रमुख अपडेट",
];

const politicalCategories = [
  "उत्तराखंड राजनीति",
  "देश की राजनीति",
  "सरकार",
  "विपक्ष",
  "चुनाव",
  "विधानसभा",
];

export default function PoliticsPage() {
  return (
    <main className="ap-politics-page">
      <div className="ap-politics-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="ap-politics-header">

          <div className="ap-politics-heading">
            <span className="ap-politics-heading-line"></span>

            <div>
              <span className="ap-politics-eyebrow">
                AP TODAY NEWS
              </span>

              <h1>
                राजनीति <span>न्यूज़</span>
              </h1>

              <p>
                उत्तराखंड और देश की राजनीति से जुड़ी प्रमुख खबरें
              </p>
            </div>
          </div>

          <Link
            href="/"
            className="ap-politics-home"
          >
            होम
            <span>→</span>
          </Link>

        </div>

        {/* =================================================
            CATEGORY NAVIGATION
        ================================================= */}

        <div className="ap-politics-categories">

          <div className="ap-politics-category-title">
            राजनीति
          </div>

          {politicalCategories.map((item, index) => (
            <Link
              href="#"
              key={index}
            >
              {item}
            </Link>
          ))}

        </div>

        {/* =================================================
            FEATURED SECTION
        ================================================= */}

        <div className="ap-politics-featured">

          {/* MAIN STORY */}

          <Link
            href="#"
            className="ap-politics-main-story"
          >

            <div className="ap-politics-main-image">

              <img
                src="/politics/main.jpg"
                alt="राजनीति की मुख्य खबर"
              />

              <span className="ap-politics-breaking">
                बड़ी खबर
              </span>

            </div>

            <div className="ap-politics-main-content">

              <span className="ap-politics-tag">
                उत्तराखंड राजनीति
              </span>

              <h2>
                उत्तराखंड और देश की राजनीति से
                जुड़ी आज की प्रमुख खबरों पर नजर
              </h2>

              <p>
                राजनीतिक दलों, सरकार, विपक्ष और जनहित से जुड़े
                महत्वपूर्ण मुद्दों के प्रमुख अपडेट AP Today News पर।
              </p>

              <span className="ap-politics-read">
                पूरी खबर पढ़ें →
              </span>

            </div>

          </Link>

          {/* SIDE STORIES */}

          <div className="ap-politics-side">

            <div className="ap-politics-side-header">
              <span></span>
              ताजा राजनीतिक खबरें
            </div>

            {latestPolitics.map((news, index) => (
              <Link
                href="#"
                className="ap-politics-side-item"
                key={index}
              >

                <span className="ap-politics-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>

                  <small>
                    राजनीति
                  </small>

                  <h3>
                    {news}
                  </h3>

                </div>

                <strong>
                  →
                </strong>

              </Link>
            ))}

          </div>

        </div>

        {/* =================================================
            POLITICS NEWS
        ================================================= */}

        <div className="ap-politics-section-title">

          <div>
            <span></span>

            <h2>
              राजनीतिक <strong>खबरें</strong>
            </h2>
          </div>

          <Link href="#">
            सभी खबरें →
          </Link>

        </div>

        <div className="ap-politics-cards">

          {politicsNews.map((item, index) => (
            <Link
              href="#"
              className="ap-politics-card"
              key={index}
            >

              <div className="ap-politics-card-image">

                <img
                  src={item.image}
                  alt={item.title}
                />

                <span>
                  {item.category}
                </span>

              </div>

              <div className="ap-politics-card-content">

                <small>
                  {item.category}
                </small>

                <h3>
                  {item.title}
                </h3>

                <div className="ap-politics-card-footer">
                  <span>AP TODAY NEWS</span>

                  <strong>
                    →
                  </strong>
                </div>

              </div>

            </Link>
          ))}

        </div>

        {/* =================================================
            BOTTOM CTA
        ================================================= */}

        <div className="ap-politics-bottom">

          <div className="ap-politics-bottom-icon">
            POL
          </div>

          <div>
            <h3>
              राजनीति की हर बड़ी खबर पर नजर
            </h3>

            <p>
              उत्तराखंड और देश की राजनीति से जुड़े
              महत्वपूर्ण घटनाक्रम AP Today News पर पढ़ें।
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