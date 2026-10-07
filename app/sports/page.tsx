"use client";

import Link from "next/link";
import "./Sports.css";

const sportsNews = [
  {
    image: "/sports/sports-1.jpg",
    category: "क्रिकेट",
    title:
      "क्रिकेट जगत की बड़ी खबरें और आज के मुकाबलों से जुड़े सभी ताजा अपडेट",
  },
  {
    image: "/sports/sports-2.jpg",
    category: "क्रिकेट",
    title:
      "टीम इंडिया के मैच से पहले खिलाड़ियों की तैयारी पर सबकी नजर",
  },
  {
    image: "/sports/sports-3.jpg",
    category: "फुटबॉल",
    title:
      "फुटबॉल की दुनिया से आई बड़ी खबर, मुकाबले को लेकर बढ़ा उत्साह",
  },
  {
    image: "/sports/sports-4.jpg",
    category: "अन्य खेल",
    title:
      "खेल जगत में खिलाड़ियों के शानदार प्रदर्शन की हो रही चर्चा",
  },
];

const sideSports = [
  "क्रिकेट मैच से पहले टीम की रणनीति पर सबकी नजर",
  "खेल जगत में आज होने वाले मुकाबलों की पूरी जानकारी",
  "भारतीय खिलाड़ियों के प्रदर्शन से जुड़ी महत्वपूर्ण खबर",
  "विश्व क्रिकेट से सामने आया बड़ा अपडेट",
];

export default function SportsPage() {
  return (
    <main className="ap-sports">
      <div className="ap-sports-container">

        {/* HEADER */}
        <div className="ap-sports-header">
          <div className="ap-sports-heading">
            <span className="ap-sports-line"></span>

            <div>
              <span className="ap-sports-small-title">
                AP TODAY NEWS
              </span>

              <h1>
                खेल <span>जगत</span>
              </h1>
            </div>
          </div>

          <Link
            href="/"
            className="ap-sports-view-all"
          >
            होम
            <span>→</span>
          </Link>
        </div>

        {/* MAIN SPORTS */}
        <div className="ap-sports-main">

          {/* FEATURED */}
          <Link
            href="#"
            className="ap-sports-featured"
          >
            <div className="ap-sports-featured-image">
              <img
                src="/sports/featured.jpg"
                alt="खेल जगत की मुख्य खबर"
              />

              <span className="ap-sports-badge">
                बड़ी खबर
              </span>
            </div>

            <div className="ap-sports-featured-content">
              <span className="ap-sports-category">
                क्रिकेट
              </span>

              <h2>
                खेल जगत की आज की बड़ी खबरें,
                क्रिकेट से लेकर सभी खेलों पर नजर
              </h2>

              <p>
                मैच, खिलाड़ी, टीम और खेल जगत से जुड़ी
                महत्वपूर्ण खबरों के सभी ताजा अपडेट यहां पढ़ें।
              </p>

              <span className="ap-sports-read">
                पूरी खबर पढ़ें →
              </span>
            </div>
          </Link>

          {/* SIDE NEWS */}
          <div className="ap-sports-side">

            <div className="ap-sports-side-title">
              <span></span>
              ताजा खेल खबरें
            </div>

            {sideSports.map((news, index) => (
              <Link
                href="#"
                className="ap-sports-side-item"
                key={index}
              >
                <span className="ap-sports-number">
                  0{index + 1}
                </span>

                <div>
                  <span>SPORTS</span>

                  <h3>{news}</h3>
                </div>

                <strong>→</strong>
              </Link>
            ))}

          </div>
        </div>

        {/* SPORTS CARDS */}
        <div className="ap-sports-cards">
          {sportsNews.map((item, index) => (
            <Link
              href="#"
              className="ap-sports-card"
              key={index}
            >
              <div className="ap-sports-card-image">
                <img
                  src={item.image}
                  alt={item.title}
                />

                <span>
                  {item.category}
                </span>
              </div>

              <div className="ap-sports-card-content">
                <small>
                  {item.category}
                </small>

                <h3>
                  {item.title}
                </h3>

                <div className="ap-sports-card-bottom">
                  <span>AP TODAY</span>
                  <strong>→</strong>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}