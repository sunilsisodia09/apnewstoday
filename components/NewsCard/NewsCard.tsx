import Link from "next/link";
import "./NewsCard.css";

interface NewsCardProps {
  image: string;
  category: string;
  title: string;
  description?: string;
  date?: string;
  href?: string;
  featured?: boolean;
}

export default function NewsCard({
  image,
  category,
  title,
  description,
  date,
  href = "/news",
  featured = false,
}: NewsCardProps) {
  return (
    <Link
      href={href}
      className={`ap-news-card ${
        featured ? "ap-news-card-featured" : ""
      }`}
    >
      {/* IMAGE */}

      <div className="ap-news-card-image">

        <img
          src={image}
          alt={title}
          loading="lazy"
        />

        <span className="ap-news-card-category">
          {category}
        </span>

        <div className="ap-news-card-image-overlay"></div>

      </div>


      {/* CONTENT */}

      <div className="ap-news-card-content">

        <div className="ap-news-card-meta">

          <span>
            AP TODAY NEWS
          </span>

          {date && (
            <>
              <i></i>
              <time>{date}</time>
            </>
          )}

        </div>


        <h3>
          {title}
        </h3>


        {description && (
          <p>
            {description}
          </p>
        )}


        <div className="ap-news-card-footer">

          <span>
            पूरी खबर पढ़ें
          </span>

          <strong>
            →
          </strong>

        </div>

      </div>
    </Link>
  );
}