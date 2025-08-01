import React from 'react';
import './InsurancePartners.css';

const InsurancePartners: React.FC = () => {
  return (
    <div className="insurance-partners-container">
      <div className="content-wrapper">
        <h1 className="main-heading">Does Insurance Pay for Allergy Drops?</h1>
        
        <div className="insurance-logos">
          <div className="logo-item">
            <img src="" alt="UnitedHealthcare" className="insurance-logo" />
          </div>
          <div className="logo-item">
            <img src="" alt="Aetna" className="insurance-logo" />
          </div>
          <div className="logo-item">
            <img src="" alt="Blue Cross Blue Shield" className="insurance-logo" />
          </div>
          <div className="logo-item">
            <img src="" alt="Anthem" className="insurance-logo" />
          </div>
          <div className="logo-item">
            <img src="" alt="Centene" className="insurance-logo" />
          </div>
          <div className="logo-item">
            <img src="" alt="Humana" className="insurance-logo" />
          </div>
        </div>
        
        <div className="content-section">
          <p className="main-paragraph">
            Insurance coverage for allergy drops varies depending on your specific plan. Traditionally, insurance plans cover immunotherapy administered through injections at the doctor's office. However, allergy drops are considered a pharmacy product, and may not be covered due to Stark Law, which restricts financial arrangements between doctors and pharmacies.
          </p>
          
          <p className="secondary-paragraph">
            However, some insurance plans are partnering with specialized pharmacies to offer coverage for allergy drops. For instance, Curex has partnered with a pharmacy that has contracts with the U.S. Navy, Mayo Clinic, and several large employer insurance plans. Curex is also actively engaged in discussions with major pharmacy plans to expand coverage for allergy drops.
          </p>
          
          <p className="final-paragraph">
            While broader insurance coverage may take time, Curex currently accepts every major insurance plan to cover clinical consultations and allergy testing fees, which account for approximately half of the cost of allergy immunotherapy. This allows Curex to offer starting prices as low as $59/month for allergy drops.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InsurancePartners;
