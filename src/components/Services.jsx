import { services } from "../data/services";

function Services() {
  return (
    <section id="services" className="services section section-soft">
      <div className="container services-layout">
        <div className="section-heading services-intro">
          <p className="section-label">Services</p>

          <h2>Interior services for homes, condos, and small businesses.</h2>

          <p>
            Each service is designed to help clients improve how their space
            looks, feels, and functions without making the website look like a
            typical technology landing page.
          </p>
        </div>

        <div className="services-list">
          {services.map((service, index) => (
            <article className="service-row" key={service.title}>
              <span className="service-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;