import React from "react";
import "./InsurancePartners.css";

const partners = [
  'https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/628e508ce87c24a18f60b486_images.avif',
  'https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/628e504fe1f79d915b9436fd_download.avif',
  'https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/628e504fe1f79d915b9436fd_download.avif',
  'https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/628e50e99a5e4531e8c6dc12_download.avif',
  'https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/628e510dd9b30693aa78cd06_2560px-Centene_Corporation_Logo.svg-p-1600.webp',
  'https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/628e51275c662cfb0e0cc40a_Humana.avif',
];

const InsurancePartners: React.FC = () => (
  <section className="ip-container">
    <h1 className="ip-title">Are Allergy Shots Covered by Insurance?</h1>
    <p className="ip-desc">
      When considering allergy shots, one common question is whether this form of immunotherapy is covered by insurance. The answer depends on the specific insurance plan you have. Many insurance providers do offer coverage for allergy shots, as they are recognized as a medically necessary and effective treatment for allergic conditions. However, it’s crucial to check with your insurance provider to understand the details of your coverage, including any copayments or deductibles that may apply. Some plans may require pre-authorization or a referral from your healthcare provider. Curex accepts all major insurance groups.
    </p>
    <div className="ip-logos">
      {partners.map((src, idx) => (
        <div className="ip-logo" key={idx}>
          <img
            src={src}
            alt={`Insurance Partner ${idx + 1}`}
            className="insurance-partner-img"
          />
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
