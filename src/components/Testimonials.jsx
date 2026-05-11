import { testimonials } from "../data/testimonials";

function Testimonials() {
  return (
    <section className="testimonials section">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">Testimonials</p>

          <h2>Warm words from sample clients.</h2>

          <p>
            This is a demo portfolio project, these testimonials are
            sample content only and can be replaced with real client feedback
            later.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <article className="testimonial-card" key={item.name}>
              <p className="quote">“{item.message}”</p>

              <div>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;