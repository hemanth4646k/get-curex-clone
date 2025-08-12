import React from 'react';
import './InsurancePartners.css';

const InsurancePartners: React.FC = () => {
  return (
    <div className="insurance-partners-container" id="Does-Insurance-Pay-for-Allergy-Drops">
      <div className="content-wrapper">
        <h1 className="main-heading">Are Allergy Shots Covered by Insurance?</h1>
        
        <div className="content-section">
          <p className="main-paragraph">
            When considering allergy shots, one common question is whether this form of immunotherapy is covered by insurance. The answer depends on the specific insurance plan you have. Many insurance providers do offer coverage for allergy shots, as they are recognized as a medically necessary and effective treatment for allergic conditions. However, it's crucial to check with your insurance provider to understand the details of your coverage, including any copayments or deductibles that may apply. Some plans may require pre-authorization or a referral from your healthcare provider.
          </p>
          
          <p className="final-paragraph">
            <strong>Curex accepts all major insurance groups.</strong>
          </p>
        </div>
        
        <div className="insurance-logos">
          <div className="logo-item">
            <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/628e508ce87c24a18f60b486_images.avif" alt="UnitedHealthcare" className="insurance-logo" />
          </div>
          <div className="logo-item">
            <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/628e504fe1f79d915b9436fd_download.avif" alt="Aetna" className="insurance-logo" />
          </div>
          <div className="logo-item">
            <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/628e50a63a11a19a6024c27d_download.avif" alt="Blue Cross Blue Shield" className="insurance-logo" />
          </div>
          <div className="logo-item">
            <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/628e50e99a5e4531e8c6dc12_download.avif" alt="Anthem" className="insurance-logo" />
          </div>
          <div className="logo-item">
            <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/628e510dd9b30693aa78cd06_2560px-Centene_Corporation_Logo.svg-p-1600.webp" alt="Centene" className="insurance-logo" />
          </div>
          <div className="logo-item">
            <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/628e51275c662cfb0e0cc40a_Humana.avif" alt="Humana" className="insurance-logo" />
          </div>
        </div>
        
        <button className="cta-button">
          Learn More About Curex Pricing
        </button>
      </div>
    </div>
  );
};

export default InsurancePartners;
