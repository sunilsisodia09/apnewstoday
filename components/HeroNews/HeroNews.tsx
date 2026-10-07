"use client";

import Link from "next/link";
import "./HeroNews.css";

/* =========================================================
   MEDIA LINKS
   YAHAN APNE ACTUAL IMAGE / VIDEO URL PASTE KAREIN
========================================================= */

const MEDIA = {
  mainNews:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7gsgNKr-3Cvgvp6ArXrDKil6sYOK3iEC8F9JZTOT03Q&s",

  news1:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7gsgNKr-3Cvgvp6ArXrDKil6sYOK3iEC8F9JZTOT03Q&s",

  news2:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7gsgNKr-3Cvgvp6ArXrDKil6sYOK3iEC8F9JZTOT03Q&s",

  news3:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7gsgNKr-3Cvgvp6ArXrDKil6sYOK3iEC8F9JZTOT03Q&s",

  videoPoster:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7gsgNKr-3Cvgvp6ArXrDKil6sYOK3iEC8F9JZTOT03Q&s",

  video:
    "https://youtu.be/xfWDnrqVZ6A?si=ca56a6SIxsHcwf47",
};

/* =========================================================
   SMALL NEWS
========================================================= */

const newsItems = [
  {
    id: 1,
    image: MEDIA.news1,
    category: "उत्तराखंड",
    title:
      "उत्तराखंड से जुड़ी आज की बड़ी और महत्वपूर्ण खबरें",
  },
  {
    id: 2,
    image: MEDIA.news2,
    category: "देहरादून",
    title:
      "देहरादून में दिनभर की प्रमुख खबरों पर एक नज़र",
  },
  {
    id: 3,
    image: MEDIA.news3,
    category: "राज्य समाचार",
    title:
      "प्रदेश की राजनीति, प्रशासन और जनहित से जुड़ी खबरें",
  },
];

/* =========================================================
   HERO COMPONENT
========================================================= */

export default function Hero() {
  return (
    <section className="ap-hero">

      {/* =====================================================
          BREAKING NEWS BAR
      ===================================================== */}

      <div className="ap-breaking-bar">

        <div className="ap-breaking-label">
          <span className="ap-breaking-dot"></span>
          BREAKING NEWS
        </div>

        <div className="ap-breaking-content">
          <div className="ap-breaking-track">

            <span>
              उत्तराखंड की हर बड़ी खबर सबसे पहले AP Today News पर पढ़ें
            </span>

            <span>
              देहरादून से लेकर पूरे उत्तराखंड की ताज़ा खबरें
            </span>

            <span>
              राजनीति, मौसम, शिक्षा, रोजगार और जनहित से जुड़ी खबरें
            </span>

          </div>
        </div>

      </div>


      {/* =====================================================
          HERO CONTAINER
      ===================================================== */}

      <div className="ap-hero-container">


        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <div className="ap-hero-content">

          <div className="ap-hero-tag">
            <span></span>
            उत्तराखंड की आवाज़
          </div>


          <h1>
            उत्तराखंड की
            <strong> हर बड़ी खबर </strong>
            अब आपके साथ
          </h1>


          <p className="ap-hero-description">
            उत्तराखंड के हर शहर और गांव से जुड़ी खबरें,
            राजनीति, शिक्षा, रोजगार, मौसम, अपराध और जनहित
            से जुड़ी महत्वपूर्ण जानकारी एक ही जगह।
          </p>


          {/* BUTTONS */}

          <div className="ap-hero-buttons">

            <Link
              href="#latest-news"
              className="ap-primary-btn"
            >
              ताज़ा खबरें पढ़ें
              <span>→</span>
            </Link>


            <Link
              href="/about"
              className="ap-secondary-btn"
            >
              AP Today News के बारे में
            </Link>

          </div>


          {/* INFO */}

          <div className="ap-hero-info">

            <div>
              <strong>24×7</strong>
              <span>न्यूज़ अपडेट</span>
            </div>

            <div className="ap-info-line"></div>

            <div>
              <strong>उत्तराखंड</strong>
              <span>हर जिले की खबर</span>
            </div>

            <div className="ap-info-line"></div>

            <div>
              <strong>LIVE</strong>
              <span>खबरों से जुड़े रहें</span>
            </div>

          </div>

        </div>


        {/* =================================================
            CENTER NEWS
        ================================================= */}

        <div className="ap-featured-news">


          {/* MAIN NEWS IMAGE */}

          <div className="ap-featured-image">

            <img
              src={MEDIA.mainNews}
              alt="AP Today News मुख्य खबर"
            />

            <div className="ap-image-overlay"></div>


            <div className="ap-featured-badge">
              बड़ी खबर
            </div>


            <div className="ap-featured-text">

              <span>
                उत्तराखंड न्यूज़
              </span>

              <h2>
                प्रदेश की आज की
                <br />
                प्रमुख खबरों पर एक नज़र
              </h2>

              <Link href="/news">
                पूरी खबर पढ़ें →
              </Link>

            </div>

          </div>


          {/* =================================================
              SMALL NEWS CARDS
          ================================================= */}

          <div className="ap-small-news-grid">

            {newsItems.map((item) => (

              <Link
                href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7gsgNKr-3Cvgvp6ArXrDKil6sYOK3iEC8F9JZTOT03Q&s"
                className="ap-small-news"
                key={item.id}
              >

                <div className="ap-small-news-image">

                  <img
                    src={item.image}
                    alt={item.title}
                  />

                </div>


                <div className="ap-small-news-content">

                  <span>
                    {item.category}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                </div>

              </Link>

            ))}

          </div>

        </div>


        {/* =================================================
            VIDEO NEWS
        ================================================= */}

        <div className="ap-video-news">


          {/* VIDEO HEADER */}

          <div className="ap-video-header">

            <div>
              <span className="ap-live-dot"></span>
              LIVE NEWS
            </div>

            <span className="ap-video-label">
              VIDEO
            </span>

          </div>


          {/* VIDEO */}

          <div className="ap-video-wrapper">

            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={MEDIA.videoPoster}
            >

              <source
                src={MEDIA.video}
                type="video/mp4"
              />

              आपका ब्राउज़र वीडियो को सपोर्ट नहीं करता।

            </video>


            <div className="ap-video-overlay"></div>


            <div className="ap-video-play-status">

              <span className="ap-pulse"></span>

              LIVE

            </div>


            <div className="ap-video-bottom">

              <span>
                AP TODAY NEWS
              </span>

              <strong>
                उत्तराखंड की खबरें वीडियो में
              </strong>

            </div>

          </div>


          {/* VIDEO DESCRIPTION */}

          <div className="ap-video-description">

            <span>
              वीडियो न्यूज़
            </span>

            <h3>
              खबरों को सिर्फ पढ़ें नहीं,
              <br />
              वीडियो में भी देखें
            </h3>

            <Link href="/video">
              सभी वीडियो देखें →
            </Link>

          </div>

        </div>

      </div>


      {/* =====================================================
          BOTTOM CATEGORY / TRENDING STRIP
      ===================================================== */}

      <div className="ap-category-strip">

        <div className="ap-category-title">
          TRENDING
        </div>


        <Link href="/uttarakhand">
          उत्तराखंड
        </Link>


        <Link href="/category/dehradun">
          देहरादून
        </Link>


        <Link href="/category/haridwar">
          हरिद्वार
        </Link>


        <Link href="/category/nainital">
          नैनीताल
        </Link>


        <Link href="/category/education">
          शिक्षा
        </Link>


        <Link href="/category/jobs">
          रोजगार
        </Link>


        <Link href="/category/weather">
          मौसम
        </Link>


        <Link href="/politics">
          राजनीति
        </Link>

      </div>

    </section>
  );
}