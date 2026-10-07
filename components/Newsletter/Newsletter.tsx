"use client";

import { FormEvent, useState } from "react";
import "./Newsletter.css";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) return;

    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="ap-newsletter">
      <div className="ap-newsletter-container">

        {/* LEFT CONTENT */}
        <div className="ap-newsletter-content">

          <div className="ap-newsletter-label">
            <span className="ap-newsletter-dot"></span>
            AP TODAY NEWS
          </div>

          <h2>
            हर बड़ी खबर
            <span> सीधे आपके इनबॉक्स में</span>
          </h2>

          <p>
            उत्तराखंड और देश-दुनिया की महत्वपूर्ण खबरों,
            ब्रेकिंग न्यूज़ और खास अपडेट के लिए AP Today News
            के न्यूज़लेटर से जुड़ें।
          </p>

          <div className="ap-newsletter-points">
            <div>
              <span>✓</span>
              <strong>ताज़ा खबरों के अपडेट</strong>
            </div>

            <div>
              <span>✓</span>
              <strong>ब्रेकिंग न्यूज़ सबसे पहले</strong>
            </div>

            <div>
              <span>✓</span>
              <strong>कोई महत्वपूर्ण खबर मिस न करें</strong>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="ap-newsletter-box">

          <div className="ap-newsletter-box-top">
            <span>NEWSLETTER</span>

            <div className="ap-newsletter-icon">
              ✉
            </div>
          </div>

          {!submitted ? (
            <>
              <h3>
                न्यूज़लेटर के लिए
                <br />
                <strong>सब्सक्राइब करें</strong>
              </h3>

              <p>
                अपना ईमेल दर्ज करें और AP Today News के
                लेटेस्ट अपडेट पाएं।
              </p>

              <form
                className="ap-newsletter-form"
                onSubmit={handleSubmit}
              >
                <input
                  type="email"
                  placeholder="अपना ईमेल एड्रेस दर्ज करें"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label="Email Address"
                />

                <button type="submit">
                  सब्सक्राइब करें
                  <span>→</span>
                </button>
              </form>

              <small>
                आपका ईमेल सुरक्षित रहेगा। हम स्पैम नहीं भेजेंगे।
              </small>
            </>
          ) : (
            <div className="ap-newsletter-success">
              <div className="ap-success-icon">
                ✓
              </div>

              <h3>
                धन्यवाद!
              </h3>

              <p>
                आपने AP Today News के न्यूज़लेटर के लिए
                सफलतापूर्वक सब्सक्राइब कर लिया है।
              </p>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}