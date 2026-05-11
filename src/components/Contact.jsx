function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container contact-split">
        <div className="contact-left">
          <p className="section-label">Contact</p>

          <h2>Let’s plan a space that feels calm, useful, and beautifully yours.</h2>

          <p>
            Share a few details about your home, condo, café, studio, or small
            business space. This demo section shows how a service-based company
            can guide customers toward a clear inquiry.
          </p>

          <div className="contact-note">
            <span>Portfolio Note</span>
            <strong>
              Demo website concept only. These details can be replaced with real
              business information when used for an actual client.
            </strong>
          </div>
        </div>

        <div className="contact-panel">
          <div className="contact-panel-header">
            <span>Inquiry Details</span>
            <strong>Available for consultations</strong>
          </div>

          <div className="contact-info-list">
            <a href="mailto:hello@lumaandco.com">
              <span>Email</span>
              <strong>hello@lumaandco.com</strong>
            </a>

            <a href="tel:+639123456789">
              <span>Phone</span>
              <strong>+63 912 345 6789</strong>
            </a>

            <div>
              <span>Location</span>
              <strong>Philippines / Remote Consultation</strong>
            </div>
          </div>

          <a href="mailto:hello@lumaandco.com" className="contact-main-button">
            Send Inquiry
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;