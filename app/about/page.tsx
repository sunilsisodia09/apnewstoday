import Link from "next/link";
import "./About.css";

const highlights = [
  {
    number: "01",
    title: "उत्तराखंड की खबरें",
    text: "उत्तराखंड के शहरों, जिलों और ग्रामीण क्षेत्रों से जुड़ी महत्वपूर्ण खबरों और घटनाक्रमों को एक जगह पहुंचाने का प्रयास।",
  },
  {
    number: "02",
    title: "तेज़ न्यूज़ अपडेट",
    text: "महत्वपूर्ण घटनाओं और समाचारों के बारे में पाठकों तक समय पर जानकारी पहुंचाने पर हमारा फोकस रहता है।",
  },
  {
    number: "03",
    title: "जनता से जुड़ी खबरें",
    text: "आम लोगों, स्थानीय मुद्दों, शिक्षा, रोजगार, मौसम और जनहित से जुड़े विषयों को प्रमुखता देना।",
  },
  {
    number: "04",
    title: "देश-दुनिया की खबरें",
    text: "उत्तराखंड के साथ भारत और दुनिया से जुड़े महत्वपूर्ण घटनाक्रमों को भी पाठकों तक पहुंचाना।",
  },
];

const coverage = [
  {
    name: "उत्तराखंड",
    href: "/uttarakhand",
  },
  {
    name: "भारत",
    href: "/india",
  },
  {
    name: "राजनीति",
    href: "/politics",
  },
  {
    name: "बिज़नेस",
    href: "/business",
  },
  {
    name: "खेल",
    href: "/sports",
  },
  {
    name: "मनोरंजन",
    href: "/entertainment",
  },
  {
    name: "शिक्षा",
    href: "/education",
  },
  {
    name: "टेक्नोलॉजी",
    href: "/technology",
  },
];

export default function AboutPage() {
  return (
    <main className="ap-about-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="ap-about-hero">

        <div className="ap-about-hero-overlay"></div>

        <div className="ap-about-hero-content">

          <span className="ap-about-kicker">
            AP TODAY NEWS
          </span>

          <h1>
            हमारे बारे में
          </h1>

          <p>
            खबरों को समझने और समाज से जुड़े महत्वपूर्ण मुद्दों
            को आपके सामने लाने की हमारी कोशिश।
          </p>

          <div className="ap-about-breadcrumb">

            <Link href="/">
              होम
            </Link>

            <span>/</span>

            <strong>
              हमारे बारे में
            </strong>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="ap-about-intro">

        <div className="ap-about-container">

          <div className="ap-about-intro-grid">

            <div className="ap-about-intro-left">

              <span className="ap-section-label">
                AP TODAY NEWS
              </span>

              <h2>
                आपकी खबर,
                <br />
                <span>हमारी जिम्मेदारी</span>
              </h2>

              <div className="ap-about-red-line"></div>

            </div>


            <div className="ap-about-intro-right">

              <p className="ap-about-lead">
                AP Today News एक डिजिटल न्यूज़ प्लेटफॉर्म है,
                जिसका उद्देश्य पाठकों तक उत्तराखंड, भारत और
                दुनिया से जुड़ी महत्वपूर्ण खबरों को सरल और
                स्पष्ट तरीके से पहुंचाना है।
              </p>

              <p>
                हम उत्तराखंड के अलग-अलग जिलों और क्षेत्रों से
                जुड़े समाचारों के साथ-साथ राजनीति, बिज़नेस,
                खेल, शिक्षा, मनोरंजन और टेक्नोलॉजी जैसे विषयों
                पर भी खबरें और अपडेट उपलब्ध कराने का प्रयास
                करते हैं।
              </p>

              <p>
                हमारा फोकस ऐसी खबरों पर रहता है जो लोगों के
                जीवन, समाज और आसपास हो रहे महत्वपूर्ण
                घटनाक्रमों से जुड़ी हों।
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          OWNER / FOUNDER
      ===================================================== */}

      <section className="ap-about-owner">

        <div className="ap-about-container">

          <div className="ap-about-owner-grid">

            {/* LEFT - OWNER INFORMATION */}

            <div className="ap-about-owner-content">

              <span className="ap-section-label">
                AP TODAY NEWS
              </span>

              <h2>
                हमारे <span>संस्थापक</span>
              </h2>

              <div className="ap-about-owner-line"></div>

              <h3>
                V.s Rawat
              </h3>

              <p className="ap-about-owner-role">
                Founder &amp; Director
              </p>

              <p>
                AP Today News की शुरुआत एक ऐसे डिजिटल न्यूज़
                प्लेटफॉर्म के उद्देश्य से की गई है, जहां
                उत्तराखंड और देश-दुनिया से जुड़ी महत्वपूर्ण
                खबरें पाठकों तक सरल, स्पष्ट और तेज़ तरीके से
                पहुंच सकें।
              </p>

              <p>
                हमारा प्रयास स्थानीय मुद्दों, जनहित से जुड़े
                विषयों और महत्वपूर्ण घटनाक्रमों को प्रमुखता
                देते हुए पाठकों के लिए एक भरोसेमंद डिजिटल
                न्यूज़ प्लेटफॉर्म तैयार करना है।
              </p>

              <blockquote>
                “हमारा उद्देश्य सिर्फ खबर पहुंचाना नहीं,
                बल्कि लोगों तक सही और महत्वपूर्ण जानकारी
                पहुंचाना है।”
              </blockquote>

            </div>


            {/* RIGHT - OWNER IMAGE */}

            <div className="ap-about-owner-image">

              <div className="ap-about-owner-image-frame">

                <img
                  src="/images/gallery/owner.jpg"
                  alt="Sunil Singh Sisodia - Founder of AP Today News"
                />

              </div>

              <div className="ap-about-owner-image-caption">

                <strong>
                V.s Rawat
                </strong>

                <span>
                  Founder &amp; Director — AP Today News
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          STATS / IDENTITY STRIP
      ===================================================== */}

      <section className="ap-about-strip">

        <div className="ap-about-container">

          <div className="ap-about-strip-grid">

            <div>
              <strong>24×7</strong>
              <span>न्यूज़ अपडेट</span>
            </div>

            <div>
              <strong>UK</strong>
              <span>उत्तराखंड फोकस</span>
            </div>

            <div>
              <strong>08+</strong>
              <span>न्यूज़ कैटेगरी</span>
            </div>

            <div>
              <strong>LIVE</strong>
              <span>खबरों से जुड़े रहें</span>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          OUR FOCUS
      ===================================================== */}

      <section className="ap-about-focus">

        <div className="ap-about-container">

          <div className="ap-about-section-heading">

            <div>

              <span className="ap-section-label">
                WHAT WE COVER
              </span>

              <h2>
                हम किन खबरों पर
                <span> फोकस करते हैं?</span>
              </h2>

            </div>

            <p>
              अलग-अलग क्षेत्रों की महत्वपूर्ण खबरों और
              अपडेट को एक ही प्लेटफॉर्म पर उपलब्ध कराने
              का प्रयास।
            </p>

          </div>


          <div className="ap-about-focus-grid">

            {coverage.map((item, index) => (

              <Link
                href={item.href}
                className="ap-about-focus-card"
                key={item.name}
              >

                <span className="ap-focus-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>
                  {item.name}
                </h3>

                <span className="ap-focus-arrow">
                  →
                </span>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          HIGHLIGHTS
      ===================================================== */}

      <section className="ap-about-highlights">

        <div className="ap-about-container">

          <div className="ap-about-section-heading dark-heading">

            <div>

              <span className="ap-section-label">
                OUR APPROACH
              </span>

              <h2>
                AP Today News की
                <span> प्राथमिकताएं</span>
              </h2>

            </div>

          </div>


          <div className="ap-about-highlight-grid">

            {highlights.map((item) => (

              <article
                className="ap-about-highlight-card"
                key={item.number}
              >

                <span className="highlight-number">
                  {item.number}
                </span>

                <div className="highlight-line"></div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY AP TODAY NEWS
      ===================================================== */}

      <section className="ap-about-why">

        <div className="ap-about-container">

          <div className="ap-about-why-grid">

            <div className="ap-about-why-title">

              <span className="ap-section-label">
                AP TODAY NEWS
              </span>

              <h2>
                खबरों के साथ
                <br />
                <span>जुड़े रहें</span>
              </h2>

            </div>


            <div className="ap-about-why-content">

              <p>
                आज के तेज़ी से बदलते न्यूज़ माहौल में सही
                जानकारी तक पहुंचना बेहद महत्वपूर्ण है।
                AP Today News का प्रयास है कि पाठकों को
                महत्वपूर्ण खबरें एक साफ, सरल और आसानी से
                समझ आने वाले रूप में मिल सकें।
              </p>

              <p>
                हमारा उद्देश्य उत्तराखंड की स्थानीय आवाज़
                और देश-दुनिया की महत्वपूर्ण खबरों के बीच
                एक भरोसेमंद डिजिटल न्यूज़ प्लेटफॉर्म तैयार
                करना है।
              </p>

              <Link
                href="/"
                className="ap-about-home-button"
              >
                ताज़ा खबरें पढ़ें
                <span>→</span>
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="ap-about-cta">

        <div className="ap-about-cta-content">

          <span>
            AP TODAY NEWS
          </span>

          <h2>
            हर खबर पर
            <br />
            आपकी नज़र।
          </h2>

          <p>
            उत्तराखंड और देश-दुनिया की महत्वपूर्ण खबरों
            से जुड़े रहने के लिए AP Today News पढ़ते रहें।
          </p>

          <Link
            href="/"
            className="ap-about-cta-button"
          >
            न्यूज़ पढ़ें
            <span>→</span>
          </Link>

        </div>

      </section>

    </main>
  );
}