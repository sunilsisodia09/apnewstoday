"use client";

import "./BreakingNews.css";

const breakingNews = [
  "उत्तराखंड: मौसम विभाग ने कई जिलों के लिए जारी किया ताजा अपडेट",
  "भारत: संसद में आज की प्रमुख गतिविधियों और घटनाक्रम पर नजर",
  "देहरादून: शहर की महत्वपूर्ण गतिविधियों और ताजा स्थानीय खबरें",
  "खेल: क्रिकेट जगत से जुड़ी सभी ताजा और महत्वपूर्ण अपडेट",
  "टेक्नोलॉजी: भारत के डिजिटल भविष्य को प्रभावित करने वाले नए बदलाव",
  "बिजनेस: बाजार और अर्थव्यवस्था से जुड़ी खबरें सुर्खियों में",
];

export default function BreakingNews() {
  return (
    <section
      className="breaking-news"
      aria-label="Breaking News"
    >
      <div className="breaking-news-container">

        <div className="breaking-label">
          <span className="breaking-dot"></span>

          <span className="breaking-label-text">
            BREAKING NEWS
          </span>
        </div>

        <div className="breaking-ticker">
          <div className="breaking-track">
            {[...breakingNews, ...breakingNews].map(
              (news, index) => (
                <div
                  className="breaking-item"
                  key={`${news}-${index}`}
                >
                  <span className="breaking-arrow">
                    ◆
                  </span>

                  <a href="#">
                    {news}
                  </a>
                </div>
              )
            )}
          </div>
        </div>

        <div className="breaking-live">
          <span className="live-dot"></span>
          <span>LIVE</span>
        </div>

      </div>
    </section>
  );
}