import './Testimony.css';
import profile1 from '../../assets/profile-img (1).jpg';
import profile2 from '../../assets/profile-img (2).jpg';
import profile3 from '../../assets/profile-img (3).jpg';

const testimonies = [
  {
    image: profile1,
    name: 'John Doe',
    title: 'CEO, VipTech',
    testimony:
      'This product has transformed the way we do business. The team is amazing and the support is top-notch!',
  },
  {
    image: profile2,
    name: 'Jane Smith',
    title: 'CTO, MetaTech',
    testimony:
      "I can't imagine going back to the old way of doing things. This product has saved us countless hours and made our workflow so much smoother.",
  },
  {
    image: profile3,
    name: 'Millicent Johnson',
    title: 'CFO, TechCorp',
    testimony:
      'The features and flexibility of this product are unmatched. It has allowed us to innovate and stay ahead of the competition.',
  },
];

export function Testimony() {
  return (
    <section className="testimony">
      <h2 className="testimony-title">What Our Customers Say</h2>

      <div className="testimony-cards">
        {testimonies.map((testimony, index) => (
          <div className="testimony-card flex flex-col" key={index}>
            <p className="testimony-text">{testimony.testimony}</p>
            <div className="testimony-profile">
              <img
                src={testimony.image}
                alt={testimony.name}
                className="testimony-image"
              />
              <div className="testimony-info flex flex-col">
                <h4 className="testimony-name">{testimony.name}</h4>
                <p className="testimony-position">{testimony.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
