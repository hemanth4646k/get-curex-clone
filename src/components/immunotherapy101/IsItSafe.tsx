import React from 'react';
import './IsItSafe.css';

const IsItSafe: React.FC = () => {
  return (
    <div id="is-immunotherapy-safe" className="is-it-safe-section">
      <div className="is-it-safe-container">
        <div className="is-it-safe-wrapper">
          <h2 className="is-it-safe-heading">Is immunotherapy safe?</h2>
          <div className="is-it-safe-content">
            <p className="is-it-safe-paragraph">
              Allergy immunotherapy is very safe, with mild side effects including redness, 
              itching and swelling.
            </p>
            
            <p className="is-it-safe-paragraph">
              Severe reactions are extremely rare. Most common form of allergy 
              immunotherapy in the United States is allergy shots, which are administered in 
              person.
            </p>
            
            <p className="is-it-safe-paragraph">
              Curex clinicians prescribe a different form of immunotherapy called{' '}
              <a 
                href="#" 
                className="is-it-safe-link"
              >
                "sublingual immunotherapy"
              </a>{' '}
              (SLIT), which is applied under the tongue instead of injections. 
              This form is shown to be even safer, and people with more severe allergies are 
              usually pointed in this direction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IsItSafe;