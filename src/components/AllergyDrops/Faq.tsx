import React, { useState } from 'react';
import './Faq.css';

const FAQ: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const faqData = [
    {
      question: "Sign up for Free Webinar",
      answer: (
        <div>
          <p>Learn how allergy immunotherapy can help you find lasting relief. Allergy experts discuss allergy shots, allergy drops and food OIT to help you reduce your environmental and/or food allergies. Reserve your spot here:</p>
          <p><a href="https://calendly.com/webinar-curex/allergy-immunotherapy" target="_blank" rel="noopener noreferrer">https://calendly.com/webinar-curex/allergy-immunotherapy</a></p>
        </div>
      )
    },
    {
      question: "What is sublingual immunotherapy (SLIT), or allergy drops?",
      answer: "SLIT, also known as allergy drops, is a form of allergy treatment that involves placing a small amount of allergen extract under the tongue. It's an effective and convenient alternative to allergy shots."
    },
    {
      question: "How often do I need to take allergy drops?",
      answer: "The frequency depends on factors like the severity of your allergies and the type of allergen extract. Typically, allergy drops are taken daily, but your doctor will prescribe a specific protocol for you."
    },
    {
      question: "How do allergy drops compare to allergy shots?",
      answer: "Both are forms of immunotherapy, but allergy shots involve injecting allergen extract into the skin, usually once or twice a week. Allergy drops are placed under the tongue daily, with a different dosage approach. Drops can contain up to 30 times the active ingredients of shots."
    },
    {
      question: "What is the cost of allergy drops?",
      answer: "Traditionally more costly, advancements in compounding pharmacies are making allergy drops more affordable. Prices can start as low as $59/month with options like Curex."
    },
    {
      question: "Does insurance cover allergy drops?",
      answer: "Insurance coverage varies. While traditionally covering injections, some plans are now partnering with pharmacies to cover allergy drops. Curex accepts major insurance plans for clinical consultations and testing fees, offering starting prices as low as $59/month."
    },
    {
      question: "Are allergy drops FDA approved?",
      answer: "Allergy drops are made using allergenic extracts that have received FDA approval—the same extracts found in allergy shots and single-allergy tablets. However, because these drops are compounded specifically for each patient, they are not individually reviewed by the FDA for safety or efficacy. As a result, while clinicians may prescribe allergy drops off-label when medically indicated, this practice is both legal and common. In fact, U.S. ENTs and European allergists consider allergy drops a standard of care, a view supported by decades of research following their surge in popularity in Europe during the 1990s."
    },
    {
      question: "What are the side effects of allergy drops?",
      answer: "Generally safe, side effects may include minor and short-lived irritation in the mouth or throat. Severe reactions are exceedingly rare (less than 0.03%), making drops a preferred option for those with previous negative reactions to shots."
    },
    {
      question: "How long does it take for allergy drops to work?",
      answer: "It takes several months for allergy drops to take effect, with full benefits potentially visible after a year. Improvement in symptoms is often experienced within 3-6 months, with over 80% reporting significant reduction after 1 year."
    },
    {
      question: "What do customers say about allergy drops?",
      answer: "Customers generally find allergy drops convenient, easy to use, and portable. Benefits are often seen within 3-6 months, and working with an allergist helps maximize effectiveness over time."
    }
  ];

  return (
    <div className="faq-container">
      <div className="faq-wrapper">
        <div className="faq-header">
          <h2>FAQs</h2>
        </div>
        
        <div className="faq-list">
          {faqData.map((faq, index) => (
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

export default FAQ;
