import './Features.css'

const features = [
  {
    icon: 'fa-solid fa-arrows-spin',
    title: 'Workflow Automation',
    paragraph:
      'Automate repetitive tasks with our drag-and-drop visual builder. No code required.',
    color: 'primary',
  },
  {
    icon: 'fa-solid fa-users',
    title: 'Team Collaboration',
    paragraph:
      'Work together seamlessly with multi-player editing and contextual comments.',
    color: 'secondary',
  },
  {
    icon: 'fa-solid fa-chart-line',
    title: 'Real-Time Analytics',
    paragraph:
      'Track progress as it happens with live dashboards and predictive insights.',
    color: 'tertiary',
  },
  {
    icon: 'fa-solid fa-building-shield',
    title: 'Secure Infrastructure',
    paragraph:
      'Enterprise-grade security with end-to-end encryption and SOC2 compliance.',
    color: 'primary',
  },
  {
    icon: 'fa-solid fa-arrows-to-circle',
    title: 'Seamless Integrations',
    paragraph:
      'Connect your favorite tools like Github, Jira, and Figma in one click..',
    color: 'secondary',
  },
  {
    icon: 'fa-solid fa-globe',
    title: 'Global Scale',
    paragraph:
      'Built for teams of all sizes, from day-one startups to global enterprises.',
    color: 'tertiary',
  },
];

export function Features() {
  return (
    <section className="features">
      <FeatureText />
      <FeatureItems />
    </section>
  );
}

function FeatureText() {
  return (
    <div className="text">
      <h2>Powerful features for high-performing teams</h2>
      <p>Everything you need to move from idea to production in record time.</p>
    </div>
  );
}

function FeatureItems() {
  let iconColor;
  return (
    <div className="feature-group">
      {features.map((feature) => (
        <div className={`feature-item ${feature.color}`}>
          <span>
            <i className={feature.icon}></i>
          </span>
          <h3>{feature.title}</h3>
          <p>{feature.paragraph}</p>
        </div>
      ))}
    </div>
  );
}
