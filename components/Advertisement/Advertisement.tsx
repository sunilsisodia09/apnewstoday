"use client";

import Link from "next/link";
import "./Advertisement.css";

const sideNews = [
  {
    title:
      "दिल्ली: थंपड़ कांड में मंत्री प्रवेश वर्मा के खिलाफ कार्रवाई, पुलिस ने लिया ये...",
    href: "#",
  },
  {
    title:
      "दिल्ली की झुग्गी में 728 में से 727 नाम कटे, राहुल ने SIR पर उठाए सवाल",
    href: "#",
  },
  {
    title:
      "भारत-पाकिस्तान का सेमीफाइनल, 01 अक्टूबर को मुकाबला; जानें पूरा शेड्यूल",
    href: "#",
  },
  {
    title:
      "'द पेड़ाजाइज' या 'द वन', मॉल्ड टेस्ट में बॉक्स ऑफिस पर कौन पार? जानें...",
    href: "#",
  },
  {
    title:
      "एक UPI पेमेंट पर सरकार को कितना पैसा मिलता है, जानें हर ट्रांजैक्शन का पू...",
    href: "#",
  },
];

const advertisementItems = [
  {
    image: "/advertisements/ad-1.jpg",
    title:
      "होंठों में सिगरेट फंसाना स्टेटस सिंबल और रोला जमाने का जरिया कैसे बना?",
    href: "#",
  },
  {
    image: "/advertisements/ad-2.jpg",
    title:
      "नहीं भरा ट्रैफिक चालान तो इन 10 तरीकों से होगी वसूली, सीधा वाहन जब्त करेगी...",
    href: "#",
  },
  {
    image: "/advertisements/ad-3.jpg",
    title:
      "फेस्टिव सीजन से पहले ये कार और बाइक होंगी लॉन्च, देखें लिस्ट",
    href: "#",
  },
  {
    image: "/advertisements/ad-4.jpg",
    title:
      "कल का राशिफल 29 सितंबर 2026: मंगलवार को इन 4 राशियों की...",
    href: "#",
  },
];

export default function Advertisement() {
  return (
    <section className="ap-ad-section">
      <div className="ap-ad-container">

        {/* ================================================
            FEATURED TOP SECTION
        ================================================= */}

        <div className="ap-ad-featured">

          {/* MAIN IMAGE */}
          <Link href="#" className="ap-ad-main-image">
            <img
              src="/advertisements/main-ad.jpg"
              alt="AP Today News मुख्य खबर"
            />

            <span className="ap-ad-live">
              ● LIVE
            </span>
          </Link>

          {/* MAIN HEADLINE */}
          <div className="ap-ad-main-content">
            <span className="ap-ad-category">
              बड़ी खबर
            </span>

            <Link href="#">
              <h2>
                SC के कॉलेजियम ने बतौर जज नियुक्ति के लिए सरकार को भेजी 3 नामों की सिफारिश
              </h2>
            </Link>
          </div>

          {/* SIDE HEADLINES */}
          <div className="ap-ad-side-news">
            {sideNews.map((news, index) => (
              <Link
                href={news.href}
                className="ap-ad-side-item"
                key={index}
              >
                <span className="ap-ad-side-arrow">
                  ›
                </span>

                <span className="ap-ad-side-title">
                  {news.title}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* ================================================
            BOTTOM AD / NEWS CARDS
        ================================================= */}

        <div className="ap-ad-cards">
          {advertisementItems.map((item, index) => (
            <Link
              href={item.href}
              className="ap-ad-card"
              key={index}
            >
              <div className="ap-ad-card-image">
                <img
                  src={item.image}
                  alt={item.title}
                />

                <span className="ap-ad-card-label">
                  AP TODAY
                </span>
              </div>

              <div className="ap-ad-card-content">
                <h3>{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}