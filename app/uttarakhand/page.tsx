"use client";

import Link from "next/link";
import "./Uttarakhand.css";

const districtNews = [
  {
    image: "/uttarakhand/dehradun.jpg",
    district: "देहरादून",
    title:
      "देहरादून से जुड़ी महत्वपूर्ण खबरें और शहर में होने वाली प्रमुख गतिविधियां",
  },
  {
    image: "/uttarakhand/haridwar.jpg",
    district: "हरिद्वार",
    title:
      "हरिद्वार की प्रमुख खबरें, प्रशासन और स्थानीय गतिविधियों से जुड़े अपडेट",
  },
  {
    image: "/uttarakhand/nainital.jpg",
    district: "नैनीताल",
    title:
      "नैनीताल और कुमाऊं क्षेत्र से सामने आईं महत्वपूर्ण खबरें",
  },
  {
    image: "/uttarakhand/rishikesh.jpg",
    district: "ऋषिकेश",
    title:
      "ऋषिकेश से जुड़ी ताजा खबरें और स्थानीय घटनाक्रम पर एक नजर",
  },
];

const sideNews = [
  "उत्तराखंड के अलग-अलग जिलों से जुड़ी प्रमुख खबरों पर नजर",
  "देहरादून में स्थानीय गतिविधियों और प्रशासन से जुड़े अपडेट",
  "कुमाऊं और गढ़वाल मंडल की महत्वपूर्ण खबरें यहां पढ़ें",
  "राज्य में शिक्षा, रोजगार और जनहित से जुड़े प्रमुख समाचार",
  "उत्तराखंड के मौसम और पर्यटन से जुड़े महत्वपूर्ण अपडेट",
];

const categories = [
  "देहरादून",
  "हरिद्वार",
  "नैनीताल",
  "ऋषिकेश",
  "हल्द्वानी",
  "ऊधम सिंह नगर",
  "पौड़ी",
  "अल्मोड़ा",
];

export default function UttarakhandPage() {
  return (
    <main className="ap-uk-page">
      <div className="ap-uk-container">

        {/* =================================================
            PAGE HEADER
        ================================================= */}

        <div className="ap-uk-header">

          <div className="ap-uk-heading">
            <span className="ap-uk-heading-line"></span>

            <div>
              <span className="ap-uk-eyebrow">
                AP TODAY NEWS
              </span>

              <h1>
                उत्तराखंड <span>न्यूज़</span>
              </h1>

              <p>
                उत्तराखंड के हर जिले की प्रमुख खबरें और ताजा अपडेट
              </p>
            </div>
          </div>

          <Link
            href="/"
            className="ap-uk-home-link"
          >
            होम
            <span>→</span>
          </Link>

        </div>

        {/* =================================================
            DISTRICT NAVIGATION
        ================================================= */}

        <div className="ap-uk-districts">

          <div className="ap-uk-district-title">
            जिले
          </div>

          {categories.map((category, index) => (
            <Link
              href="#"
              key={index}
            >
              {category}
            </Link>
          ))}

        </div>

        {/* =================================================
            FEATURED NEWS
        ================================================= */}

        <div className="ap-uk-featured">

          {/* MAIN STORY */}

          <Link
            href="#"
            className="ap-uk-main-story"
          >
            <div className="ap-uk-main-image">
              <img
                src="/uttarakhand/main.jpg"
                alt="उत्तराखंड की मुख्य खबर"
              />

              <span className="ap-uk-breaking">
                बड़ी खबर
              </span>
            </div>

            <div className="ap-uk-main-content">

              <span className="ap-uk-category">
                उत्तराखंड
              </span>

              <h2>
                उत्तराखंड की आज की प्रमुख खबरें,
                प्रदेश के हर जिले से जुड़े महत्वपूर्ण अपडेट
              </h2>

              <p>
                देहरादून से लेकर पहाड़ के दूरस्थ क्षेत्रों तक
                राज्य से जुड़ी महत्वपूर्ण खबरों और घटनाक्रम पर
                AP Today News की नजर।
              </p>

              <span className="ap-uk-read">
                पूरी खबर पढ़ें →
              </span>

            </div>
          </Link>

          {/* SIDE NEWS */}

          <div className="ap-uk-side">

            <div className="ap-uk-side-header">
              <span></span>
              उत्तराखंड की ताजा खबरें
            </div>

            {sideNews.map((news, index) => (
              <Link
                href="#"
                className="ap-uk-side-item"
                key={index}
              >
                <div className="ap-uk-side-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="ap-uk-side-content">

                  <span>
                    उत्तराखंड
                  </span>

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
            DISTRICT NEWS
        ================================================= */}

        <div className="ap-uk-section-title">

          <div>
            <span></span>
            <h2>
              जिलेवार <strong>खबरें</strong>
            </h2>
          </div>

          <Link href="#">
            सभी खबरें →
          </Link>

        </div>

        <div className="ap-uk-cards">

          {districtNews.map((item, index) => (
            <Link
              href="#"
              className="ap-uk-card"
              key={index}
            >

              <div className="ap-uk-card-image">

                <img
                  src={item.image}
                  alt={item.title}
                />

                <span>
                  {item.district}
                </span>

              </div>

              <div className="ap-uk-card-content">

                <small>
                  {item.district}
                </small>

                <h3>
                  {item.title}
                </h3>

                <div className="ap-uk-card-footer">
                  <span>AP TODAY NEWS</span>
                  <strong>→</strong>
                </div>

              </div>

            </Link>
          ))}

        </div>

        {/* =================================================
            BOTTOM INFORMATION
        ================================================= */}

        <div className="ap-uk-bottom">

          <div className="ap-uk-bottom-icon">
            UK
          </div>

          <div>
            <h3>
              उत्तराखंड की हर खबर पर नजर
            </h3>

            <p>
              प्रदेश के अलग-अलग जिलों से जुड़ी खबरें,
              स्थानीय घटनाक्रम और महत्वपूर्ण अपडेट AP Today News पर।
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