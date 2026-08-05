import './Newsletters.css';
import { Input } from '../Input/Input';
import { Buttons } from '../Buttons/Buttons';

export function Newsletter() {
  return (
    <section className="newsletter">
      <div className="newsletter-bg">
        <div className="newsletter-container">
          <NewsletterHeader />
          <NewsletterText />
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
}

function NewsletterHeader() {
  return <h2 className="newsletter-header">Subscribe to our newsletter</h2>;
}

function NewsletterText() {
  return (
    <p className="newsletter-text">
      Get the latest updates on workflow automation and team productivity
      delivered straight to your inbox.
    </p>
  );
}

function NewsletterForm() {
  return (
    <form className="newsletter-form">
      <Input
        type="email"
        variant="outline"
        size="medium"
        placeholder="Enter your email"
      />
      <Buttons variant="primary" size="medium">
        Subscribe
      </Buttons>
    </form>
  );
}
