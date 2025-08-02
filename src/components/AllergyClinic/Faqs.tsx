
import React, { useState } from 'react';
import '../AllergyShots/Faqs.css';

const faqData = [
  {
    question: "Sign up for Free Webinar",
    answer: (
      <div>
        <p>Learn how allergy immunotherapy can help you find lasting relief. Allergy experts discuss allergy shots, allergy drops and food OIT to help you reduce your environmental and/or food allergies. Reserve your spot here: </p>
        <p><a target="_blank" href="https://calendly.com/webinar-curex/allergy-immunotherapy">https://calendly.com/webinar-curex/allergy-immunotherapy</a></p>
      </div>
    )
  },
  {
    question: "How does Curex compare to Wyndly in terms of allergy care?",
    answer: "Curex offers a comprehensive online allergy clinic specializing in sublingual immunotherapy, providing affordable, convenient, and time-saving solutions. While Wyndly positions itself as an at-home allergy treatment, Curex excels in offering a holistic range of services, addressing not only allergies but also asthma, eczema, and more."
  },
  {
    question: "How does Curex compare to Nectar Allergy in terms of specialized providers?",
    answer: "Curex boasts the largest clinical team with board-certified allergists and medical professionals specializing in allergy & immunology. Curex's expert providers ensure personalized attention and a comprehensive understanding of the extent of your allergies. Nectar Allergy may not offer the same level of expertise and accessibility."
  },
  {
    question: "Is Curex more family-friendly compared to Allergy Partners?",
    answer: "Yes, Curex offers a family-friendly approach to sublingual immunotherapy, ensuring safety and effectiveness for both adults and children. Unlike traditional clinics like Allergy Partners, Curex makes top-notch allergy care affordable for families of all sizes, eliminating the hassle of frequent doctor visits."
  },
  {
    question: "How does Curex compare to Allervie Health in terms of comprehensive allergy relief?",
    answer: "Curex stands out for its comprehensive approach to allergy management, addressing not only allergies but also asthma and other immunological disorders. While Allervie Health offers allergy and immunology services, Curex ensures accessibility, affordability, and a seamless online experience for those seeking a more comprehensive solution."
  },
  {
    question: "Is sublingual immunotherapy (SLIT) safe for children?",
    answer: "Yes, sublingual immunotherapy (SLIT) can be safe for children. Curex offers a family-friendly approach to sublingual immunotherapy, ensuring safety and effectiveness for both adults and children. Consult with our healthcare professionals for personalized pediatric allergy care."
  },
  {
    question: "How does Curex's online consultation compare to in-person visits at traditional clinics?",
    answer: "Curex's online consultations provide convenience, accessibility, continuity of care, and reduced exposure to allergens. It eliminates the need for frequent in-person visits, making it ideal for busy individuals, those in remote areas, and those seeking consistent follow-ups with healthcare providers."
  },
  {
    question: "Are Curex's allergy drops covered by insurance?",
    answer: "Curex accepts all major insurance providers, making our allergy drops accessible and affordable. Our commitment is to provide cost-effective alternatives to traditional allergy shots, ensuring that allergy care is within reach for a broader range of individuals."
  },
  {
    question: "How does Curex ensure the safety of its allergy care?",
    answer: "Curex prioritizes safety by having a dedicated team of board-certified allergists and medical professionals specializing in allergy & immunology. Our extensive clinical team provides personalized attention and ensures that treatments address the source of allergies. We also offer continuous support through text, email, or phone communication with your assigned Curex provider."
  },
  {
    question: "Can Curex be used for asthma management?",
    answer: "Yes, Curex specializes in sublingual immunotherapy, offering a seamless and effective solution for managing both allergies and asthma. Whether you seek expert medical guidance or a family-friendly approach to allergy and asthma relief, Curex is your trusted partner."
  },
  {
    question: "Is Curex's sublingual immunotherapy suitable for pet allergies?",
    answer: "Yes, Curex's sublingual immunotherapy is designed to address various allergies, including pet allergies. It ensures a holistic solution for managing allergies from the comfort of your home, making it convenient for individuals dealing with pesky pet allergies."
  },
  {
    question: "How does Curex ensure a family-friendly approach to allergy care?",
    answer: "Curex prioritizes a family-friendly approach by providing a seamless and effective solution for managing allergies for both adults and children. Our treatments are tailored to ensure the safety and comfort of children, making allergy care accessible and affordable for families of all sizes."
  },
  {
    question: "Can Curex's sublingual immunotherapy be used for multiple allergies?",
    answer: "Yes, Curex's sublingual immunotherapy is designed to address multiple allergies. Our extensive clinical team, including board-certified allergists, ensures that treatments are personalized and effective for individuals dealing with various allergy triggers."
  },
  {
    question: "Is Curex available nationwide?",
    answer: "Yes, Curex is available nationwide, serving all states. Our sublingual immunotherapy ensures that effective allergy care is accessible and affordable for everyone, regardless of their location."
  }
];

const Faqs: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div id="faqs" className="faq-container">
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
