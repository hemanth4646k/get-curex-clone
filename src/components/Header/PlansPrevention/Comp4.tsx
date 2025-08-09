import React from 'react';
import './Comp4.css';

const Comp4: React.FC = () => {
  return (
    <div className="getting-started-container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1 className="main-title">Getting Started is Easy!</h1>
      <p className="subtitle">
        Curex makes it easier than ever to treat allergies, even if you need an allergy test or have existing results!
      </p>

      <div className="steps-container">
        {/* Step One Card */}
        <div className="step-card step-one">
          <div className="pricing-section">
            <div className="due-today">DUE TODAY:</div>
            <div className="original-price">$49</div>
            <div className="discounted-price">$4.99</div>
            <div className="sign-up-fee">
              Sign-up fee
              <br />
              (refundable)
            </div>
          </div>

          <div className="step-content">
            <div className="step-header">STEP ONE:</div>
            
            <div className="features-list">
              <div className="feature-item">
                <span className="checkmark">✓</span>
                Review of your allergy test results
              </div>
              <div className="feature-item">
                <span className="checkmark">✓</span>
                Prescription for medication or immunotherapy
              </div>
              <div className="feature-item">
                <span className="checkmark">✓</span>
                Cancel Anytime
              </div>
            </div>

            <button className="start-quiz-btn">Start with a free quiz</button>
          </div>
        </div>

        {/* Step Two Card */}
        <div className="step-card step-two">
          <div className="step-header-two">STEP TWO:</div>
          
          <h2 className="immunotherapy-title">Immunotherapy Delivered</h2>
          
          <div className="pricing-info">
            <div className="monthly-price">$59/month</div>
            <div className="copay">+ copay</div>
          </div>

          <div className="package-image">
            <img src="" alt="Curex delivery package" className="package-img" />
          </div>

          <div className="features-list">
            <div className="feature-item">
              <span className="checkmark">✓</span>
              Free shipping
            </div>
            <div className="feature-item">
              <span className="checkmark">✓</span>
              Ongoing access to allergist
            </div>
          </div>

          <div className="insurance-note">
            High deductible plan? No insurance? No problem!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comp4;
