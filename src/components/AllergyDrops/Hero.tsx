import React from 'react';
import './hero.css';

const AllergyDropsHero: React.FC = () => {
  return (
    <div className="allergy-drops-container">
      <div className="content-wrapper">
        <div className="text-content">
          <h1 className="main-heading">
            Allergy Drops: Cost<br />
            & Benefits
          </h1>
          <p className="subtitle">
            Learn about allergy drops as an alternative to allergy shots.
          </p>
          <button className="cta-button">
            Start with a free quiz
          </button>
          
          <div className="info-cards">
            <div className="info-card clinic-card">
              <div className="card-icon">
                <div className="bar-chart">
                  <div className="bar bar-1"></div>
                  <div className="bar bar-2"></div>
                  <div className="bar bar-3"></div>
                </div>
              </div>
              <div className="card-text">
                <span className="card-number">#1</span>
                <span className="card-label">Online<br />Allergy Clinic</span>
              </div>
            </div>
            
            <div className="info-card users-card">
              <div className="card-icon">
                <img src="" alt="Happy users" className="users-image" />
              </div>
              <div className="card-text">
                <span className="card-number">50,000+</span>
                <span className="card-label">users</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="image-content">
          <div className="product-box">
            <img src="" alt="Allergy drops package" className="package-image" />
            <div className="decorative-circles">
              <div className="circle circle-1"></div>
              <div className="circle circle-2"></div>
              <div className="circle circle-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllergyDropsHero;
