import React, { useState } from 'react';
import './Faq.css';

export interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

export interface FaqProps {
  faqs: FaqItem[];
  title?: string;
  id?: string;
}

const Faq: React.FC<FaqProps> = ({ faqs, title = 'FAQs', id }) => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div id={id} className="faq-container">
      <div className="faq-wrapper">
        <div className="faq-header">
          <h2>{title}</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div
                className={`faq-question ${openAccordion === index ? 'open' : ''}`}
                onClick={() => toggleAccordion(index)}
              >
                <div className="faq-question-text">{faq.question}</div>
                <div className={`faq-arrow ${openAccordion === index ? 'rotated' : ''}`}>
                  <svg width="26" height="13" viewBox="0 0 26 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.17578L10.78 11.1191C11.935 12.2934 13.825 12.2934 14.98 11.1191L24.76 1.17578" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className={`faq-answer ${openAccordion === index ? 'open' : ''}`}>
                <div className="faq-answer-content">
                  {typeof faq.answer === 'string' ? <p>{faq.answer}</p> : faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
