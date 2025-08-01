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
            <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/672d01e4aadf10f830b1cb4c_unitedHealthcare.svg" alt="UnitedHealthcare" className="insurance-logo" />
          </div>
          <div className="logo-item">
            <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/672d01e4098e7b5b40b5e9b0_aetna.svg" alt="Aetna" className="insurance-logo" />
          </div>
          <div className="logo-item">
            <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/672d01e48ae8cf7e9c80f72f_blueCross.svg" alt="Blue Cross Blue Shield" className="insurance-logo" />
          </div>
          <div className="logo-item">
            <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/672d01e45d79e9f1d0b1b8d0_anthem.svg" alt="Anthem" className="insurance-logo" />
          </div>
          <div className="logo-item">
            <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/672d01e4cd5c5a15e0a3c95c_centene.svg" alt="Centene" className="insurance-logo" />
          </div>
          <div className="logo-item">
            <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/672d01e4b8d6b6e0e8abf7a7_humana.svg" alt="Humana" className="insurance-logo" />
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
