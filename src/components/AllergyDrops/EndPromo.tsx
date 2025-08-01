import React from 'react';
import './EndPromo.css';

const EndPromo: React.FC = () => {
  return (
    <div className="end-promo-container">
      <div className="content-wrapper">
        <div className="image-section">
          <div className="woman-container">
            <img src="" alt="Happy woman enjoying allergy relief" className="woman-image" />
          </div>
        </div>
        
        <div className="text-section">
          <div className="promo-content">
            <h1 className="main-heading">
              Get Your Personalized 
              Immunotherapy Treatment Today!
            </h1>
            
            <p className="description">
              Take control of your allergies with our personalized sublingual immunotherapy treatment. 
              Our expert allergists will create a customized treatment plan just for you, helping you 
              achieve long-term relief from your allergy symptoms.
            </p>
            
            <button className="cta-button">Take Our Quiz!</button>
            
            <div className="features-list">
              <div className="feature-item">
                <div className="checkmark">✓</div>
                <span className="feature-text">At-home treatment</span>
              </div>
              
              <div className="feature-item">
                <div className="checkmark">✓</div>
                <span className="feature-text">Personalized for your allergies</span>
              </div>
              
              <div className="feature-item">
                <div className="checkmark">✓</div>
                <span className="feature-text">Expert allergist support</span>
              </div>
              
              <div className="feature-item">
                <div className="checkmark">✓</div>
                <span className="feature-text">Long-term relief</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="decorative-elements">
        <div className="circle-yellow"></div>
        <div className="circle-blue"></div>
        <div className="circle-pink"></div>
      </div>
    </div>
  );
};

export default EndPromo;
