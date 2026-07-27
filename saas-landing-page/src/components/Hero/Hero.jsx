import { Buttons } from '../Buttons/Buttons';
import './Hero.css';

export function Hero() {
  return (
    <section className="hero flex align-center js-center">
      <div className="hero-content flex flex-col align-center js-center">
        <div className="version flex align-center">
          <span className="online"></span>
          <span className="version-text">New: Workflow v3.0 Released</span>
        </div>
        <h1>
          Automate Work.{' '}
          <span className="text-primary">Deliver Faster.</span>
        </h1>
        <p>
          StartupFlow streamlines your engineering and design processes with
          intelligent automation, real-time sync, and enterprise-grade
          infrastructure.
        </p>

        <div className="hero-button flex">
          <Buttons size="large">Start Free Trial</Buttons>
          <button className="btn btn-large btn-secondary hero-btn flex align-center js-center">
            <i className="fa-regular fa-circle-play"></i>Watch Demo
          </button>
        </div>
      </div>
      <div className="bg-gradient"></div>
    </section>
  );
}
