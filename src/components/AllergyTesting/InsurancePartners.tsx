import React from 'react';
import './InsurancePartners.css';

const InsurancePartners: React.FC = () => {
  return (
    <section className="insurance-partners">
      <div className="insurance-partners-container">
        {/* Title */}
        <h2 className="insurance-partners-title">
          Our lab partners accept insurance.
        </h2>
        
        {/* Insurance Logos Row */}
        <div className="insurance-logos">
          <div className="logo-item">
            <img 
              src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/628e508ce87c24a18f60b486_images.avif" 
              alt="UnitedHealthcare insurance provider logo" 
              className="logo-image"
            />
          </div>
          <div className="logo-item">
            <img 
              src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/628e504fe1f79d915b9436fd_download.avif" 
              alt="Aetna insurance provider logo in purple" 
              className="logo-image"
            />
          </div>
          <div className="logo-item">
            <img 
              src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/628e50a63a11a19a6024c27d_download.avif" 
              alt="BlueCross BlueShield insurance provider logo" 
              className="logo-image"
            />
          </div>
          <div className="logo-item">
            <img 
              src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/628e50e99a5e4531e8c6dc12_download.avif" 
              alt="Anthem insurance provider logo in blue" 
              className="logo-image"
            />
          </div>
          <div className="logo-item">
            <img 
              src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/628e510dd9b30693aa78cd06_2560px-Centene_Corporation_Logo.svg.webp" 
              alt="Centene insurance provider logo" 
              className="logo-image"
            />
          </div>
          <div className="logo-item">
            <img 
              src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/628e51275c662cfb0e0cc40a_Humana.avif" 
              alt="Humana insurance provider logo in green" 
              className="logo-image"
            />
          </div>
        </div>
        
        {/* Insurance Information Text */}
        <div className="insurance-info">
          <p className="insurance-coverage-text">
            Insurance covers clinical consultations.
          </p>
          <p className="subscription-text">
            Subscription fee (from $59/month not billed to insurance) covers immunotherapy, shipping & related costs.
          </p>
        </div>
        
        {/* HSA/FSA Badge */}
        <div className="hsa-fsa-badge">
          <img 
            src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/654c7b25824c04859c806490_HSA%20FSA%20Badge%202.svg" 
            alt="HSA/FSA approved badge - pink circular badge indicating Health Savings Account and Flexible Spending Account compatibility" 
            className="badge-image"
          />
        </div>
      </div>
    </section>
  );
};

export default InsurancePartners;
