import React, { useState } from "react";

const faqs = [
  {
    question: "What is Curex?",
    answer: (
      <>
        <p>
          Curex is America’s #1 Online Allergy Clinic and the place to go for all your allergy questions and needs. We believe that true allergy care should have only one goal: zero allergies. We believe in a world without allergies, and we offer the easiest and most affordable treatment to get you to zero-allergies: sublingual immunotherapy.
        </p>
        <p>
          Sublingual immunotherapy is a form of allergy treatment that involves placing drops containing allergenic extracts under the tongue. This method helps build the body's tolerance to allergens over time, just like allergy shots. The treatment is customized based on an individual's specific allergies, as determined by allergy testing and medical history.
        </p>
        <p>
          Curex offers comprehensive services that include at-home allergy testing, online consultations, symptom management, and personalized sublingual immunotherapy plans. Our goal is to improve access to quality allergy care for anyone who needs it. If you’re ready to finally get rid of your allergies, you’re in the right place. Together with our partners we have treated more patients with allergy drops than anyone else in the U.S.
        </p>
      </>
    ),
  },
  {
    question: "Is Curex legitimate?",
    answer: (
      <p>
        Curex is the largest online allergy and asthma clinic in the U.S. We started because our clinicians wanted to offer more convenient and affordable allergy and asthma care for everyone. So far we have attracted more than 50,000 customers from every U.S. state. We are proud to have the highest patient satisfaction and loyalty rates in the industry. Our service has been audited and certified by <a href="http://legitscript.com/" target="_blank" rel="noopener noreferrer">LegitScript.com</a>.
      </p>
    ),
  },
  {
    question: "What services do you offer?",
    answer: (
      <p>
        Curex provides comprehensive care for those suffering from allergies, asthma and eczema. This includes customized <a href="https://getcurex.com/sublingual-immunotherapy" target="_blank" rel="noopener noreferrer">sublingual immunotherapy</a>, at-home concierge allergy testing, and symptom management. Our goal is to provide accessibility and quality of allergy care in the U.S.
      </p>
    ),
  },
  {
    question: "What conditions do you treat?",
    answer: (
      <p>
        We focus on food as well as indoor and outdoor allergies caused by environmental or inhalant allergies, like those caused by pollens, weeds, grasses, dust mites, molds and pets. We also treat allergic asthma and eczema, as these conditions are closely related to allergies.
      </p>
    ),
  },
  {
    question: "What is immunotherapy?",
    answer: (
      <p>
        <a href="https://getcurex.com/immunotherapy-101" target="_blank" rel="noopener noreferrer">Immunotherapy</a> is a longstanding form of treatment that aims to meaningfully reduce the underlying cause of indoor/outdoor allergies and related conditions. Immunotherapy is frequently practiced by using allergen extracts for allergy drops, allergy shots and allergy tablets.
      </p>
    ),
  },
  {
    question: "What is your cancellation policy?",
    answer: (
      <p>
        You can cancel at any time. However, please note that if you received treatment recently, we will need to collect any remaining payments for that treatment on your account. Additionally, if you had any telehealth visits, it can take up to three months for insurance to process each claim. These may be billed to you after you cancel if they have not been processed already.
      </p>
    ),
  },
  {
    question: "Can my child use Curex?",
    answer: (
      <p>
        Curex <a href="https://getcurex.com/kids-allergy-care" target="_blank" rel="noopener noreferrer">serves adults and children</a> as young as 5 years old. Certain tests and treatments may be limited for younger kids. Start by answering the quiz, so that our clinicians can recommend the best testing and treatment options.
      </p>
    ),
  },
  {
    question: "Where can I find information about the costs and details of allergy immunotherapy?",
    answer: (
      <p>
        <a href="https://getcurex.com/blog-posts/allergy-immunotherapy" target="_blank" rel="noopener noreferrer">Allergy immunotherapy</a>, available as either <a href="https://getcurex.com/allergy-shots" target="_blank" rel="noopener noreferrer">allergy shots</a> or sublingual (under-the-tongue) <a href="https://getcurex.com/allergy-drops" target="_blank" rel="noopener noreferrer">allergy drops</a>, offers various treatment options for allergies. For detailed information about the differences between <a href="https://getcurex.com/blog-posts/allergy-immunotherapy-costs" target="_blank" rel="noopener noreferrer">allergy immunotherapy costs</a>, you can explore information on all <a href="https://getcurex.com/allergy-medicine" target="_blank" rel="noopener noreferrer">allergy medicine</a>. Alternatively, to learn more specifically about <a href="https://getcurex.com/sublingual-immunotherapy" target="_blank" rel="noopener noreferrer">sublingual allergy immunotherapy</a>, you can read information about various providers that offer it, in the section on the <a href="https://getcurex.com/best-allergy-clinic" target="_blank" rel="noopener noreferrer">best allergy clinic</a>. There are multiple methods for administering allergy medication, including prescription <a href="https://getcurex.com/blog-posts/immunotherapy-cat-allergies" target="_blank" rel="noopener noreferrer">immunotherapy for cat allergies</a>.
      </p>
    ),
  },
];

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="faq-section">
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>FAQs</h2>
      <div className="faqs-list">
        {faqs.map((faq, idx) => (
          <div key={idx} className="faq-item" style={{ marginBottom: "1rem", borderRadius: 8, border: "1px solid #eee", background: "#fff" }}>
            <button
              className="faq-question"
              style={{
                width: "100%",
                textAlign: "left",
                padding: "1.2rem",
                fontWeight: 600,
                fontSize: "1.1rem",
                background: "none",
                border: "none",
                outline: "none",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
              onClick={() => handleToggle(idx)}
              aria-expanded={openIndex === idx}
            >
              <span>{faq.question}</span>
              <span style={{ fontSize: "1.5rem", transition: "transform 0.2s", transform: openIndex === idx ? "rotate(90deg)" : "rotate(0deg)" }}>›</span>
            </button>
            {openIndex === idx && (
              <div className="faq-answer" style={{ padding: "1.2rem", borderTop: "1px solid #eee", background: "#fafbfc" }}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;