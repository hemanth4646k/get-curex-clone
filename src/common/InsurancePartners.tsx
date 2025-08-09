import React from 'react';
import './InsurancePartners.css';


const InsurancePartnersTitle: React.FC = () => (
  <h2 className="insurance-partners-title">
    We accept all major insurance providers
  </h2>
);

const InsuranceLogos: React.FC = () => (
  <div className="insurance-logos-grid">
    <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/628e508ce87c24a18f60b486_images.avif" alt="UnitedHealthcare" className="insurance-logo" />
    <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/628e504fe1f79d915b9436fd_download.avif" alt="Aetna" className="insurance-logo" />
    <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/628e50a63a11a19a6024c27d_download.avif" alt="Blue Cross Blue Shield" className="insurance-logo" />
    <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/628e50e99a5e4531e8c6dc12_download.avif" alt="Anthem" className="insurance-logo" />
    <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/628e510dd9b30693aa78cd06_2560px-Centene_Corporation_Logo.svg.webp" alt="Centene" className="insurance-logo" />
    <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/628e51275c662cfb0e0cc40a_Humana.avif" alt="Humana" className="insurance-logo" />
  </div>
);

const InsuranceInfo: React.FC = () => (
  <div className="insurance-info">
    <p className="insurance-coverage-text">
      Insurance covers clinical consultations.
    </p>
    <p className="subscription-fee-text">
      Subscription fee ($149/month not billed to insurance) covers immunotherapy, shipping &related costs.
    </p>
  </div>
);

const HsaFsaBadge: React.FC = () => (
  <div className="hsa-fsa-badge">
    <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/653fd2420cd291c78099513c_HSA%20FSA%20Badge%201.webp" alt="HSA/FSA accepted" className="hsa-fsa-logo" />
  </div>
);

const StartQuizButton: React.FC = () => (
  <button className="start-quiz-button">
    Start With Free Quiz
  </button>
);

const InsurancePartnersCommon: React.FC = () => {
  return (
    <div className="insurance-partners-container">
      <InsurancePartnersTitle />
      <InsuranceLogos />
      <InsuranceInfo />
      <HsaFsaBadge />
      <StartQuizButton />
    </div>
  );
};

export default InsurancePartnersCommon;
export { InsurancePartnersCommon, InsurancePartnersTitle, InsuranceLogos, InsuranceInfo, HsaFsaBadge, StartQuizButton };
