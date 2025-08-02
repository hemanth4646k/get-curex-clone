import React from 'react';
import './AllervieHealth.css';

const AllervieHealth: React.FC = () => {
  return (
    <section className="allervie-health" id="allervie-health">
      <div className="allervie-health-container">
        {/* Title */}
        <h1 className="allervie-health-title">
          Allervie Health
        </h1>
        
        {/* Two Column Layout */}
        <div className="allervie-health-content">
          {/* Left Column - Image */}
          <div className="allervie-health-image-column">
            <img 
              src="" 
              alt="Allervie Health clinic building exterior with modern architecture, green roof trim, and storefront entrance" 
              className="allervie-health-building-image"
            />
          </div>
          
          {/* Right Column - Text Content */}
          <div className="allervie-health-text-column">
            <p className="allervie-health-paragraph">
              Allervie Health offers allergy and immunology services to the millions of 
              Americans who suffer annually from allergies, asthma, and immunological 
              disorders. If you are looking for the most comprehensive, affordable, and 
              convenient allergy relief solution, start with Curex.
            </p>
            
            {/* CTA Button */}
            <div className="allervie-health-cta">
              <button className="allervie-health-button">
                Learn more about Curex
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllervieHealth;
