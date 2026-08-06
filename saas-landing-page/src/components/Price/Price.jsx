import './Price.css';
import { Buttons } from '../Buttons/Buttons';

const prices = [
  {
    status: 'starter',
    price: '$15',
    duration: '/mo',
    description: 'Perfect for solo founders and small side projects.',
    features: ['Up to 5 projects', 'Basic automation', 'Community support'],
  },
  {
    status: 'pro',
    price: '$49',
    duration: '/mo',
    description: 'For scaling teams that need advanced tools and sync.',
    features: [
      'Unlimited projects',
      'Priority AI automation',
      'Real-time analytics',
      '24/7 Priority support',
    ],
    popularCap: 'Most Popular',
  },
  {
    status: 'Enterprise',
    price: 'custom',
    description: 'Dedicated infrastructure and white-glove service.',
    features: [
      'SSO & SAML',
      'Custom integrations',
      'Dedicated account manager',
    ],
  },
];

export function Price() {
  return (
    <section className="price">
      <PriceHeader />

      <PriceCards />
    </section>
  );
}

function PriceHeader() {
  return (
    <div className="price-header">
      <h2 className="price-title">Transparent Pricing</h2>
      <p className="price-subtitle">
        Scalable plans for every stage of your growth.
      </p>
    </div>
  );
}

function PriceCards() {
  return (
    <div className="price-cards">
      {prices.map((price) => (
        <PriceCard key={price.status} price={price} />
      ))}
    </div>
  );
}

function PriceCard({ price }) {
  return (
    <div
      className={`price-card flex flex-col ${price.status === 'pro' && 'price-card-pro'}`}
    >
      <PriceStatus price={price} />
      <PriceTitle price={price} />
      <PriceDescription price={price} />
      <PriceFeatures price={price} />
      <PopularCap price={price} />
      <PriceButton price={price} />
    </div>
  );
}

function PriceStatus({ price }) {
  return (
    <span
      className={`price-status ${price.status === 'pro' && 'price-status-pro'}`}
    >
      {price.status}
    </span>
  );
}

function PriceTitle({ price }) {
  return (
    <h3 className="price-price">
      {price.price}{' '}
      {price.duration && (
        <span className="price-duration">{price.duration}</span>
      )}
    </h3>
  );
}

function PriceDescription({ price }) {
  return <p className="price-description">{price.description}</p>;
}

function PriceFeatures({ price }) {
  return (
    <ul className="price-features flex flex-col js-center">
      {price.features.map((feature, index) => (
        <li key={index} className="price-feature flex align-center">
          <i className="fa-solid fa-check"></i> {feature}
        </li>
      ))}
    </ul>
  );
}

function PopularCap({ price }) {
  return (
    <>
      {price.popularCap && (
        <span className="price-popular">{price.popularCap}</span>
      )}
    </>
  );
}

function PriceButton({ price }) {
  return (
    <div className="price-button">
      {price.status === 'pro' ? (
        <Buttons
          variant="primary"
          size="medium"
          onClick={() =>
            alert('Free Trails will be available in the next update')
          }
        >
          Start Free Trail
        </Buttons>
      ) : (
        <Buttons
          variant="outline"
          size="small"
          onClick={() =>
            alert(
              `${price.status === 'starter' ? "You've selected the starter package" : 'Customer Service \nTell: +xxx xx xxxx xxx\nEmail: customerservice@example.com'}`,
            )
          }
        >
          {price.status === 'starter' ? 'Select Starter' : 'Contact Sales'}
        </Buttons>
      )}
    </div>
  );
}
