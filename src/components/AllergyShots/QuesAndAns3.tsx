import React from "react";
import "./QuesAndAns3.css";

interface QAItem {
  title: string;
  content: React.ReactNode;
  imgAlt?: string;
  withImg?: boolean;
}

const qaItems: QAItem[] = [
  {
    title: "Are Allergy Shots Better than Drops",
    content: (
      <p>
        Both allergy shots and drops are effective forms of immunotherapy, but the best choice depends on your specific needs and preferences. Allergy shots have a longer history of use and are highly effective for a broad range of allergens. Allergy drops are a convenient at-home alternative, especially for those who wish to avoid frequent office visits or have difficulty with injections. Discuss your goals, allergy profile, and lifestyle with your allergist to determine which option may be most appropriate for you.
      </p>
    ),
    imgAlt: "Comparison icon: syringe and dropper",
    withImg: true,
  },
  {
    title: "Are Allergy Shots Safe for Kids",
    content: (
      <p>
        Yes, allergy shots are generally considered safe and effective for children as young as five years old. Starting treatment at a younger age can provide long-term benefits by reducing allergy symptoms and potentially preventing the development of asthma. The allergist will carefully assess your child’s health and allergy history to ensure the treatment is appropriate.
      </p>
    ),
    imgAlt: "Doctor smiling with child holding teddy bear",
    withImg: true,
  },
  {
    title: "Are Allergy Shots Covered By Insurance",
    content: (
      <p>
        Many insurance plans do offer coverage for allergy shots, as they are recognized as a medically necessary and effective treatment for allergy sufferers. Coverage specifics, copayments, and deductibles vary by provider and plan, so you should check directly with your insurance company for exact details and requirements such as pre-authorization or referral.
      </p>
    ),
    imgAlt: "Insurance card with shield icon",
    withImg: true,
  },
];

function formatId(title: string) {
  return title.toLowerCase().replace(/\?/g, '').replace(/\s+/g, '-');
}

const QuesAndAns3: React.FC = () => (
  <section className="qna3-section">
    <div className="qna3-inner">
      {qaItems.map((item) => (
        <div className="qna3-block" id={formatId(item.title)} key={item.title}>
          <div className="qna3-content">
            <h2 className="qna3-title">{item.title.replace(/([A-Z])/g, ' $1').trim()}</h2>
            <div className="qna3-text">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default QuesAndAns3;
