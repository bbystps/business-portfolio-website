import aboutStudio from "../assets/about-studio.png";

function About() {
  return (
    <section id="about" className="about section">
      <div className="container about-grid">
        <div className="about-visual">
          <img src={aboutStudio} alt="Interior studio concept" />

          <div className="about-visual-tag">
            <span>Studio Philosophy</span>
            <strong>Clean spaces. Warm details. Everyday function.</strong>
          </div>
        </div>

        <div className="about-content">
          <p className="section-label">About the Studio</p>

          <h2>Designing interiors that feel calm, personal, and useful.</h2>

          <p>
            Luma Interior Studio is a fictional boutique interior styling and
            space planning studio created as a portfolio business website
            concept. The brand focuses on warm minimalism, practical layouts,
            and refined interiors for modern living.
          </p>

          <p>
            This website is designed to showcase how a service-based business
            can present its background, offers, design process, sample projects,
            and customer-facing information in a clean and memorable way.
          </p>

          <div className="about-highlights">
            <div className="about-highlight">
              <span>45+</span>
              <p>Styled residential and commercial concepts</p>
            </div>

            <div className="about-highlight">
              <span>08</span>
              <p>Interior services for modern spaces</p>
            </div>

            <div className="about-highlight">
              <span>4.9</span>
              <p>Sample client satisfaction rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;