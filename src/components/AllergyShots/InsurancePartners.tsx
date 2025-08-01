import React from "react";
import "./InsurancePartners.css";

const partners = [
  { alt: "UnitedHealthcare logo" },
  { alt: "Aetna logo" },
  { alt: "Blue Cross Blue Shield logo" },
  { alt: "Anthem logo" },
  { alt: "Centene logo" },
  { alt: "Humana logo" },
];

const InsurancePartners: React.FC = () => (
  <section className="ip-container">
    <h1 className="ip-title">Are Allergy Shots Covered by Insurance?</h1>
    <p className="ip-desc">
      When considering allergy shots, one common question is whether this form of immunotherapy is covered by insurance. The answer depends on the specific insurance plan you have. Many insurance providers do offer coverage for allergy shots, as they are recognized as a medically necessary and effective treatment for allergic conditions. However, it’s crucial to check with your insurance provider to understand the details of your coverage, including any copayments or deductibles that may apply. Some plans may require pre-authorization or a referral from your healthcare provider. Curex accepts all major insurance groups.
    </p>
    <div className="ip-logos">
      {partners.map(p => (
        <div className="ip-logo" key={p.alt}>
          <img src="" alt={p.alt} />
        </div>
      ))}
    </div>
    <div className="ip-btn-row">
      <button className="ip-btn">
        Learn More About Curex Pricing
      </button>
    </div>
  </section>
);

export default InsurancePartners;
