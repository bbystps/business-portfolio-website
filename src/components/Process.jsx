import { processSteps } from "../data/processSteps";

function Process() {
  return (
    <section id="process" className="process section section-soft">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">Process</p>

          <h2>A simple design journey from first idea to final styling.</h2>

          <p>
            The process section helps customers understand how the service works
            before they send an inquiry.
          </p>
        </div>

        <div className="process-timeline">
          {processSteps.map((step) => (
            <article className="process-card" key={step.title}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;