import React from 'react';
import './InsurancePartners.css';


const InsurancePartnersTitle: React.FC = () => (
  <h2 className="insurance-partners-title">
    We accept all major insurance providers
  </h2>
);

const InsuranceLogos: React.FC = () => (
  <div className="insurance-logos-grid">
    <img src="" alt="UnitedHealthcare" className="insurance-logo" />
    <img src="" alt="Aetna" className="insurance-logo" />
    <img src="" alt="Blue Cross Blue Shield" className="insurance-logo" />
    <img src="" alt="Anthem" className="insurance-logo" />
    <img src="" alt="Centene" className="insurance-logo" />
    <img src="" alt="Humana" className="insurance-logo" />
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
    <img src="" alt="HSA/FSA accepted" className="hsa-fsa-logo" />
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
