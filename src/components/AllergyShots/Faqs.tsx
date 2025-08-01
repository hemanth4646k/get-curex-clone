import React, { useState } from 'react';
import './Faqs.css';

const Faqs: React.FC = () => {
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
      question: "What are allergy shots, and how do they work?",
      answer: "Allergy shots, also known as allergen immunotherapy, are a long-term treatment that exposes the immune system to increasing doses of allergens. This desensitizes the immune system, reducing the severity of allergic reactions over time."
    },
    {
      question: "Do allergy shots really work?",
      answer: "Yes, allergy shots have proven highly effective in alleviating allergic reactions. By gradually exposing the immune system to small doses of allergens, they help build tolerance, resulting in a significant reduction in allergy symptoms."
    },
    {
      question: "What are the side effects of allergy shots?",
      answer: "While generally well-tolerated, some may experience mild side effects such as itching or swelling in the mouth. Serious side effects are rare but may include difficulty breathing or severe allergic reactions."
    },
    {
      question: "What allergies can be treated with allergy shots?",
      answer: "Allergy shots offer a comprehensive solution for airborne allergies, including pollen, dust mites, mold, and pet dander. They are effective for seasonal allergies (hay fever), allergic asthma, insect sting allergies, and certain allergic skin conditions."
    },
    {
      question: "How much do allergy shots cost?",
      answer: "The cost varies based on factors like targeted allergens, treatment duration, and location. While considered an investment in long-term allergy management, Curex provides a more affordable option compared to traditional allergy shots."
    },
    {
      question: "Are allergy shots covered by insurance?",
      answer: "Many insurance providers cover allergy shots as a recognized medically necessary treatment. Curex accepts all major insurance groups, making personalized allergy care accessible."
    },
    {
      question: "Are allergy shots worth it?",
      answer: "For many, the benefits of allergy shots outweigh the investment. They offer a targeted, long-term solution, addressing the root cause of allergies and improving overall quality of life. Curex provides an alternative for a more affordable and convenient option."
    },
    {
      question: "How many days can you go between allergy shots?",
      answer: "The frequency varies based on the treatment plan and targeted allergens. Initially, shots may be administered one to three times a week, gradually extending the interval as tolerance builds."
    },
    {
      question: "How long do allergy injections last?",
      answer: "The duration varies, with many experiencing long-lasting relief even after completing the recommended course. Maintenance injections may be necessary for sustained benefits."
    },
    {
      question: "Can I get at-home allergy shots?",
      answer: "Currently, allergy shots are primarily administered in clinical settings. However, innovative solutions like Curex provide personalized allergy care at home through the convenience and safety of at-home allergy drops."
    },
    {
      question: "Where can I get allergy shots near me?",
      answer: "Find a qualified allergist in your local area for allergy shots. For a convenient alternative, explore Curex—an online allergy clinic specializing in personalized allergy drops delivered directly to your home."
    },
    {
      question: "Can allergy shots treat pollen allergies?",
      answer: "Yes, allergy shots can be a game-changer for pollen allergies, providing lasting relief by gradually desensitizing the immune system to pollen allergens."
    },
    {
      question: "How do cat and dog allergy shots work?",
      answer: (
        <div>
          <p>Cat and <a href="https://getcurex.com/blog-posts/8-important-things-to-know-about-allergy-shots-for-dog-allergies">dog allergy shots</a>, or immunotherapy, gradually expose the immune system to small doses of pet allergens, reducing the severity of allergic reactions over time.</p>
        </div>
      )
    },
    {
      question: "What is allergen immunotherapy?",
      answer: "Allergen immunotherapy, including both shots and drops, exposes the immune system to small amounts of specific allergens, building tolerance over time for a reduction in allergy symptoms."
    },
    {
      question: "Are allergy shots better than drops?",
      answer: "The choice depends on individual preferences and lifestyle. Both allergy shots and drops are forms of effective immunotherapy, with Curex offering an affordable and convenient at-home option."
    }
  ];

  return (
    <div id="allergy-shots-faqs" className="faq-container">
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

export default Faqs;
