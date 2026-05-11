import heroInterior from "../assets/hero-interior.png";

function Hero() {
  return (
    <section id="home" className="editorial-hero">
      <div className="container editorial-hero-grid">
        <div className="hero-side-label">
          <span>Interior Styling</span>
          <span>Space Planning</span>
        </div>

        <div className="editorial-hero-content">
          <p className="editorial-kicker">Warm Minimalist Studio</p>

          <h1>Spaces with soul, purpose, and quiet elegance.</h1>

          <p>
            Luma Interior Studio creates thoughtful interiors for homes, condos,
            cafés, and small commercial spaces — blending calm aesthetics with
            everyday function.
          </p>

          <div className="editorial-actions">
            <a href="#projects" className="editorial-btn editorial-btn-dark">
              View Spaces
            </a>

            <a href="#services" className="editorial-btn editorial-btn-light">
              Explore Services
            </a>
          </div>
        </div>

        <div className="editorial-hero-visual">
          <div className="large-visual-card">
            <img src={heroInterior} alt="Modern interior design" />
            <span>01</span>
            <p>Modern Residence Concept</p>
          </div>

          <div className="small-visual-card top">
            <span>Palette</span>
            <strong>Sand / Clay / Walnut</strong>
          </div>

          <div className="small-visual-card bottom">
            <span>Approach</span>
            <strong>Calm, functional, timeless</strong>
          </div>
        </div>
      </div>

      <div className="hero-marquee">
        <span>Residential Styling</span>
        <span>Condo Fit-Out</span>
        <span>Café Interiors</span>
        <span>Space Planning</span>
      </div>
    </section>
  );
}

export default Hero;