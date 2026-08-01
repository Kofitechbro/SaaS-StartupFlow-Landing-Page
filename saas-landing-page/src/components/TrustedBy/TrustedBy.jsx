import './TrustedBy.css';

const brandCompanies = [
  {
    name: 'Microsoft',
    icon: 'fa-brands fa-microsoft',
  },
  {
    name: 'Google',
    icon: 'fa-brands fa-google',
  },
  {
    name: 'Shopify',
    icon: 'fa-brands fa-shopify',
  },
  {
    name: 'Slack',
    icon: 'fa-brands fa-slack',
  },
  {
    name: 'Airbnb',
    icon: 'fa-brands fa-airbnb',
  },
  {
    name: 'Apple',
    icon: 'fa-brands fa-apple',
  },
  {
    name: 'OpenAI',
    icon: 'fa-brands fa-openai',
  },
  {
    name: 'Meta',
    icon: 'fa-brands fa-meta',
  },
];

export function TrustedBy() {
  return (
    <section className="trusted-by flex flex-col js-center align-center">
      <p className="trustedBy-text">TRUSTED BY INDUSTRY LEADERS</p>
      <BrandIcon />
    </section>
  );
}

function BrandIcon() {
  return (
    <ul className=" brands flex js-center">
      {brandCompanies.map((brands) => (
        <li key={brands.name} className="brand-item">
          <i className={brands.icon}></i>
        </li>
      ))}
    </ul>
  );
}
