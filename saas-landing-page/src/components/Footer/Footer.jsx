import './Footer.css';
import logo from '../../assets/Logo.png';

const footerLinkList = [
  {
    navTitle: 'Product',
    navLinks: ['Features', 'Integrations', 'Pricing'],
  },
  {
    navTitle: 'Company',
    navLinks: ['About', 'Career', 'Contact'],
  },
  {
    navTitle: 'Legal',
    navLinks: ['Privacy', 'Terms'],
  },
  {
    navTitle: 'Social',
    navLinks: ['X / Twitter', 'LinkedIn'],
  },
];

export function Footer() {
  return (
    <section className="footer-container">
      <div className="footer">
        <FooterLogo />
        <FooterLinksList />
      </div>
        <CopyRight />
    </section>
  );
}

function FooterLogo() {
  return (
    <div className="footer-logo">
      <div className="logo">
        <span>
          <img src={logo} alt="Logo" className="logo" />
        </span>
        <span className="logo-text">StartupFlow</span>
      </div>
      <p className="footer-text">
        Building the future of team productivity with intelligent design and
        seamless automation.
      </p>
    </div>
  );
}

function FooterLinksList() {
  return (
    <div className="footer-link-list">
      {footerLinkList.map((footerLink) => (
        <div className="footer-link " key={footerLink.navTitle}>
          <p className="link-title">{footerLink.navTitle}</p>
          <ul className="linList flex flex-col">
            {footerLink.navLinks.map((linkList, index) => (
              <li key={linkList.index}>
                <a href="#">{linkList}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function CopyRight() {
  return (
    <div className="copy-right">
      <p className="copy-right-text">
        © 2024 StartupFlow. All rights reserved.
      </p>
    </div>
  );
}
