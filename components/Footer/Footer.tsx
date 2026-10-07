import Link from "next/link";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="ap-footer">

      {/* =========================
          MAIN FOOTER
      ========================= */}
      <div className="ap-footer-container">
        <div className="ap-footer-grid">

          {/* =========================
              BRAND
          ========================= */}
          <div className="ap-footer-brand">

            <Link href="/" className="ap-footer-logo">
              <span className="ap-logo-ap">AP</span>

              <span className="ap-logo-text">
                TODAY
                <small>NEWS</small>
              </span>
            </Link>

            <p>
              AP Today News is a Uttarakhand-focused news platform bringing
              you the latest updates, breaking news, local stories and
              important developments from across the state.
            </p>

            {/* SOCIAL MEDIA */}
            <div className="ap-social-links">

              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M14 8h3V4h-3c-3.3 0-5 1.7-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.7.3-1 1-1Z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />

                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                  />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M21.6 7.2a2.9 2.9 0 0 0-2-2C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.6.5a2.9 2.9 0 0 0-2 2C2 9 2 12 2 12s0 3 .4 4.8a2.9 2.9 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.9 2.9 0 0 0 2-2C22 15 22 12 22 12s0-3-.4-4.8Z"
                    fill="currentColor"
                  />

                  <path
                    d="m10 9 5 3-5 3V9Z"
                    fill="#101010"
                  />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="#"
                aria-label="X"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M18.9 2H22l-6.8 7.8L23 22h-6.1l-4.8-6.3L6.6 22H3.5l7.2-8.2L3 2h6.2l4.3 5.7L18.9 2Zm-1.1 17.7h1.7L8.3 4.2H6.5l11.3 15.5Z"
                    fill="currentColor"
                  />
                </svg>
              </a>

            </div>
          </div>

          {/* =========================
              QUICK LINKS
          ========================= */}
          <div className="ap-footer-column">

            <h3>Quick Links</h3>

            <Link href="/">
              Home
            </Link>

            <Link href="/latest-news">
              Latest News
            </Link>

            <Link href="/uttarakhand">
              Uttarakhand
            </Link>

            <Link href="/breaking-news">
              Breaking News
            </Link>

            <Link href="/gallery">
              Photo Gallery
            </Link>

            <Link href="/videos">
              Videos
            </Link>

          </div>

          {/* =========================
              NEWS CATEGORIES
          ========================= */}
          <div className="ap-footer-column">

            <h3>News Categories</h3>

            <Link href="/dehradun">
              Dehradun
            </Link>

            <Link href="/haridwar">
              Haridwar
            </Link>

            <Link href="/nainital">
              Nainital
            </Link>

            <Link href="/pauri">
              Pauri Garhwal
            </Link>

            <Link href="/rudraprayag">
              Rudraprayag
            </Link>

            <Link href="/politics">
              Politics
            </Link>

          </div>

          {/* =========================
              CONTACT
          ========================= */}
          <div className="ap-footer-column ap-contact-column">

            <h3>Contact Us</h3>

            <div className="ap-contact-item">

              <span className="ap-contact-icon">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M12 21s7-6.1 7-12A7 7 0 1 0 5 9c0 5.9 7 12 7 12Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />

                  <circle
                    cx="12"
                    cy="9"
                    r="2.3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </span>

              <span>
                Uttarakhand, India
              </span>

            </div>

            <div className="ap-contact-item">

              <span className="ap-contact-icon">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M22 16.9v3a2 2 0 0 1-2.2 2
                    19.8 19.8 0 0 1-8.6-3.1
                    19.5 19.5 0 0 1-6-6
                    A19.8 19.8 0 0 1 2.1 4.2
                    2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7
                    c.1 1 .4 2 .8 2.9
                    a2 2 0 0 1-.5 2.1L8.1 9.9
                    a16 16 0 0 0 6 6l1.2-1.3
                    a2 2 0 0 1 2.1-.5
                    c.9.4 1.9.7 2.9.8A2 2 0 0 1 22 16.9Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </span>

              <a href="tel:+919999999999">
                +91 99999 99999
              </a>

            </div>

            <div className="ap-contact-item">

              <span className="ap-contact-icon">
                <svg viewBox="0 0 24 24">
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />

                  <path
                    d="m3 7 9 6 9-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </span>

              <a href="mailto:info@aptodaynews.com">
                info@aptodaynews.com
              </a>

            </div>

          </div>

        </div>
      </div>

      {/* =========================
          CTA
      ========================= */}
      <div className="ap-footer-newsletter">

        <div className="ap-footer-container ap-newsletter-inner">

          <div>

            <span className="ap-newsletter-label">
              STAY UPDATED
            </span>

            <h3>
              Get the latest news from Uttarakhand
            </h3>

          </div>

          <Link
            href="/latest-news"
            className="ap-newsletter-button"
          >
            Read Latest News
          </Link>

        </div>

      </div>

      {/* =========================
          BOTTOM BAR
      ========================= */}
      <div className="ap-footer-bottom">

        <div className="ap-footer-container ap-footer-bottom-inner">

          <p>
            © {new Date().getFullYear()} AP Today News.
            All Rights Reserved.
          </p>

          <div className="ap-footer-bottom-links">

            <Link href="/about">
              About Us
            </Link>

            <Link href="/contact">
              Contact
            </Link>

            <Link href="/privacy-policy">
              Privacy Policy
            </Link>

            <Link href="/terms">
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}