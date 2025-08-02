import React from 'react';
import './RidAllergies.css';

const RidAllergies: React.FC = () => {
  return (
    <section className="rid-allergies">
      <div className="rid-allergies-container" id='How-to-Get-Rid-of-Allergies'>
        {/* Header Section */}
        <div className="rid-allergies-header">
          <h1 className="rid-allergies-title">
            How to Get Rid of Allergies?
          </h1>
          <p className="rid-allergies-subtitle">
            5 ways to Get Rid of Allergies
          </p>
        </div>
        
        {/* Cards Grid */}
        <div className="rid-allergies-grid">
          {/* Card 1 - Identify and Avoid Triggers */}
          <div className="rid-allergies-card">
            <div className="card-icon">
              <img src="" alt="Weather icon with sun and cloud symbol" className="card-icon-img" />
            </div>
            <h3 className="card-title">
              Identify and Avoid Triggers:
            </h3>
            <p className="card-description">
              Determine specific allergens causing your symptoms (e.g., pollen, dust mites, pet dander). 
              Take steps to minimize exposure to these allergens at home and in your environment.
            </p>
          </div>

          {/* Card 2 - Keep Your Living Space Clean */}
          <div className="rid-allergies-card">
            <div className="card-icon">
              <img src="" alt="House icon representing clean living space" className="card-icon-img" />
            </div>
            <h3 className="card-title">
              Keep Your Living Space Clean:
            </h3>
            <p className="card-description">
              Regularly clean and dust your home. Use allergen-proof mattress and pillow covers. 
              Wash bedding, curtains, and rugs frequently in hot water.
            </p>
          </div>

          {/* Card 3 - Manage Indoor Humidity */}
          <div className="rid-allergies-card">
            <div className="card-icon">
              <img src="" alt="Cat face icon for pet allergen management" className="card-icon-img" />
            </div>
            <h3 className="card-title">
              Manage Indoor Humidity:
            </h3>
            <p className="card-description">
              Limit exposure to pets or create pet-free zones in your home. Bathe and groom pets 
              regularly.
            </p>
          </div>

          {/* Card 4 - Antihistamines */}
          <div className="rid-allergies-card">
            <div className="card-icon">
              <img src="" alt="Pill or medication capsule icon" className="card-icon-img" />
            </div>
            <h3 className="card-title">
              Antihistamines (e.g., loratadine, cetirizine)
            </h3>
            <p className="card-description">
              Can provide relief from symptoms. Decongestants may help alleviate nasal congestion. 
              Prescription Medications
            </p>
          </div>

          {/* Card 5 - Immunotherapy */}
          <div className="rid-allergies-card">
            <div className="card-icon">
              <img src="" alt="Syringe or injection icon for immunotherapy" className="card-icon-img" />
            </div>
            <h3 className="card-title">
              Immunotherapy (Allergy Shots or SLIT)
            </h3>
            <p className="card-description">
              Consider allergen immunotherapy if allergies are severe and persistent. This involves 
              regular injections or sublingual tablets to desensitize the immune system.
            </p>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="rid-allergies-cta">
          <button className="rid-allergies-button">
            Start With A Free Quiz
          </button>
        </div>
      </div>
    </section>
  );
};

export default RidAllergies;
