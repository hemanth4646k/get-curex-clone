import React from 'react';
import './WhatIsImmunotherapy.css';

const WhatIsImmunotherapy: React.FC = () => {
  return (
    <div id="what-is-immunotherapy" className="what-is-immunotherapy-section">
      <div className="what-is-immunotherapy-container">
        <div className="what-is-immunotherapy-wrapper">
          <h2 className="what-is-immunotherapy-heading">What is Immunotherapy?</h2>
          <div className="what-is-immunotherapy-content">
            <p className="what-is-immunotherapy-paragraph">
              Allergy immunotherapy is the repeated introduction of medical-grade allergens 
              into the system, building the body's tolerance and decreasing its reactivity to 
              allergens.
            </p>
            
            <p className="what-is-immunotherapy-paragraph">
              The goal is to provide long-term relief & improve the quality of life by treating the 
              source of allergies, not just the symptoms.
            </p>
            
            <p className="what-is-immunotherapy-paragraph">
              Immunotherapy has been around for over 100 years. More convenient forms of 
              this treatment have started gaining popularity recently, making it accessible to 
              many Americans struggling with allergies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsImmunotherapy;