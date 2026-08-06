import { Buttons } from '../Buttons/Buttons';
import './CTA.css';

export function CTA() {
  return (
    <section className="cta">
      <div className="cta-container">
        <CTAHeader />
        <CTAText />
        <CTAButtons />
      </div>
    </section>
  );
}

function CTAHeader() {
  return <h2 className="cta-header">Ready to improve team productivity?</h2>;
}

function CTAText() {
  return (
    <p className="cta-text">
      Join 10,000+ teams shipping better products with StartupFlow.
    </p>
  );
}

function CTAButtons() {
  return (
    <div className="cta-buttons">
      <Buttons variant="primary" size="large" onClick={()=> alert('Free Trails will be available in the next update')}>
        Start Free Trail
      </Buttons>
      <Buttons variant="outline" size="large" onClick={()=>alert('')}>
        Contact Sales
      </Buttons>
    </div>
  );
}
