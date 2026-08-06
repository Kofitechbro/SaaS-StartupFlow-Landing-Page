import { useState } from 'react';
import './FAQ.css';

const faqData = [
  {
    question: 'What is StartupFlow?',
    answer:
      'StartupFlow is a SaaS landing page template designed to help you quickly create a professional and modern website for your software product.',
  },
  {
    question: 'How do I get started with StartupFlow?',
    answer:
      'You can get started by signing up for an account and choosing a plan that fits your needs. Once you have an account, you can customize your landing page using our easy-to-use editor.',
  },
  {
    question: 'What is your refund policy?',
    answer: 'We offer a 30-day money-back guarantee on all our plans.',
  },
  {
    question: 'How do I cancel my subscription?',
    answer:
      'You can cancel your subscription at any time from your account settings.',
  },
  {
    question: 'Do you offer customer support?',
    answer: 'Yes, we offer 24/7 customer support via email and live chat.',
  },
];

{
  /* <i class="fa-solid fa-chevron-up"></i>
        
          <i class="fa-solid fa-chevron-down"></i> */
}

export function FAQ() {
  const [curOpen, setCurOpen] = useState(null);

  function toggleFAQ(index) {
    setCurOpen(curOpen === index ? null : index);
  }

  return (
    <section className="faq flex flex-col js-center align-center">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-cards">
        {faqData.map((faq, index) => (
          <FAQData
            question={faq.question}
            answer={faq.answer}
            key={index}
            curOpen={curOpen}
            index={index}
            toggleFAQ={toggleFAQ}
          />
        ))}
      </div>
    </section>
  );
}

function FAQData({ question, answer, curOpen, index, toggleFAQ }) {
  const isOpen = curOpen === index;

  return (
    <article className="faq-card">
      <h4 className="faq-question" onClick={() => toggleFAQ(index)}>
        {question}
        {isOpen ? (
          <i className="fa-solid fa-chevron-up"></i>
        ) : (
          <i className="fa-solid fa-chevron-down"></i>
        )}
      </h4>
      {isOpen && <p className="faq-answer">{answer}</p>}
    </article>
  );
}
