import Link from "next/link";
import "./CategorySection.css";

const categories = [
  {
    title: "उत्तराखंड",
    subtitle: "राज्य की हर बड़ी खबर",
    href: "/uttarakhand",
    icon: "UK",
    news: [
      {
        image: "/news/uk-1.jpg",
        title: "उत्तराखंड से जुड़ी आज की प्रमुख खबरों पर नजर",
        href: "/uttarakhand",
      },
      {
        image: "/news/uk-2.jpg",
        title: "देहरादून समेत कई जिलों से महत्वपूर्ण अपडेट",
        href: "/uttarakhand",
      },
    ],
  },
  {
    title: "भारत",
    subtitle: "देश की प्रमुख खबरें",
    href: "/india",
    icon: "IN",
    news: [
      {
        image: "/news/india-1.jpg",
        title: "देशभर की बड़ी खबरों और अहम अपडेट पर नजर",
        href: "/india",
      },
      {
        image: "/news/india-2.jpg",
        title: "देश से जुड़े महत्वपूर्ण घटनाक्रम सामने आए",
        href: "/india",
      },
    ],
  },
  {
    title: "राजनीति",
    subtitle: "राजनीतिक खबरें और अपडेट",
    href: "/politics",
    icon: "POL",
    news: [
      {
        image: "/news/politics-1.jpg",
        title: "राजनीतिक गतिविधियों से जुड़ी प्रमुख खबरें",
        href: "/politics",
      },
      {
        image: "/news/politics-2.jpg",
        title: "सरकार और विपक्ष से जुड़े महत्वपूर्ण अपडेट",
        href: "/politics",
      },
    ],
  },
  {
    title: "बिज़नेस",
    subtitle: "बाजार और अर्थव्यवस्था",
    href: "/business",
    icon: "₹",
    news: [
      {
        image: "/news/business-1.jpg",
        title: "बाजार और कारोबार जगत से जुड़े अहम अपडेट",
        href: "/business",
      },
      {
        image: "/news/business-2.jpg",
        title: "अर्थव्यवस्था से जुड़ी प्रमुख खबरों पर नजर",
        href: "/business",
      },
    ],
  },
  {
    title: "खेल",
    subtitle: "स्पोर्ट्स की ताजा खबरें",
    href: "/sports",
    icon: "SP",
    news: [
      {
        image: "/news/sports-1.jpg",
        title: "खेल जगत की बड़ी खबरों और अपडेट पर नजर",
        href: "/sports",
      },
      {
        image: "/news/sports-2.jpg",
        title: "क्रिकेट और अन्य खेलों से जुड़ी खबरें",
        href: "/sports",
      },
    ],
  },
  {
    title: "मनोरंजन",
    subtitle: "फिल्म और मनोरंजन जगत",
    href: "/entertainment",
    icon: "ENT",
    news: [
      {
        image: "/news/entertainment-1.jpg",
        title: "मनोरंजन जगत से सामने आई बड़ी खबरें",
        href: "/entertainment",
      },
      {
        image: "/news/entertainment-2.jpg",
        title: "फिल्म और सेलिब्रिटी अपडेट यहां पढ़ें",
        href: "/entertainment",
      },
    ],
  },
  {
    title: "शिक्षा",
    subtitle: "एजुकेशन और करियर अपडेट",
    href: "/education",
    icon: "EDU",
    news: [
      {
        image: "/news/education-1.jpg",
        title: "शिक्षा और करियर से जुड़े महत्वपूर्ण अपडेट",
        href: "/education",
      },
      {
        image: "/news/education-2.jpg",
        title: "छात्रों के लिए जरूरी खबरों पर नजर",
        href: "/education",
      },
    ],
  },
  {
    title: "टेक्नोलॉजी",
    subtitle: "टेक और डिजिटल दुनिया",
    href: "/technology",
    icon: "TECH",
    news: [
      {
        image: "/news/tech-1.jpg",
        title: "टेक्नोलॉजी की दुनिया से जुड़े नए अपडेट",
        href: "/technology",
      },
      {
        image: "/news/tech-2.jpg",
        title: "डिजिटल दुनिया में सामने आई नई खबरें",
        href: "/technology",
      },
    ],
  },
];

export default function CategorySection() {
  return (
    <section className="ap-category-section">
      <div className="ap-category-container">

        {/* HEADER */}
        <div className="ap-category-header">

          <div className="ap-category-heading">

            <span className="ap-category-red-line"></span>

            <div>
              <span className="ap-category-label">
                AP TODAY NEWS
              </span>

              <h2>
                न्यूज़ <span>कैटेगरी</span>
              </h2>

              <p>
                अपनी पसंद की खबरों की कैटेगरी चुनें
              </p>
            </div>

          </div>

        

        </div>


        {/* CATEGORY CARDS */}
        <div className="ap-category-grid">

          {categories.map((category) => (

            <div
              className="ap-category-box"
              key={category.title}
            >

              {/* CATEGORY TOP */}
              <Link
                href={category.href}
                className="ap-category-card"
              >

                <div className="ap-category-icon">
                  {category.icon}
                </div>

                <div className="ap-category-content">

                  <h3>
                    {category.title}
                  </h3>

                  <p>
                    {category.subtitle}
                  </p>

                </div>

                <div className="ap-category-arrow">
                  →
                </div>

              </Link>


              {/* NEWS */}
              <div className="ap-category-news">

                {category.news.map((news, index) => (

                  <Link
                    href={news.href}
                    className="ap-small-news"
                    key={index}
                  >

                    <div className="ap-small-news-image">
                      <img
                        src={news.image}
                        alt={news.title}
                        loading="lazy"
                      />
                    </div>

                    <div className="ap-small-news-content">

                      <span>
                        {category.title}
                      </span>

                      <h4>
                        {news.title}
                      </h4>

                    </div>

                  </Link>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}