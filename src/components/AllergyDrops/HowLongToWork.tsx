import React from 'react';
import './HowLongToWork.css';

const HowLongToWork: React.FC = () => {
  return (
    <div className="how-long-container" id="How-Long-Does-it-Take-for-Allergy-Drops-to-Start-Working">
      <div className="content-wrapper">
        <div className="text-section">
          <h1 className="main-heading">
            How Long Does it Take for Allergy 
            Drops to Start Working?
          </h1>
          
          <p className="main-description">
            It typically takes several months for allergy drops to take effect, and the complete benefits may not be seen for 
            up to a year. However, most people experience improvement in their symptoms within 3-6 months of starting 
            treatment. Over 80% experience significant reduction in symptoms and medicine taken after 1 year.
          </p>
        </div>
        
        <div className="image-section">
          <div className="image-container">
            <img src="" alt="Person with cat showing allergy relief" className="main-image" />
          </div>
          
          <div className="product-showcase">
            <div className="curex-box">
              <div className="curex-logo">
                <img src="" alt="Curex logo" className="logo-image" />
              </div>
              <div className="product-info">
                <span className="product-label">Custom Allergy</span>
                <span className="product-subtitle">Immunotherapy Drops</span>
                <span className="product-code">MEDICATION</span>
              </div>
            </div>
            <div className="dropper-bottle">
              <img src="" alt="Allergy drops bottle" className="bottle-image" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="lower-section" id='Can-You-Get-Allergy-Drops-Over-the-Counter'>
        <div className="food-display">
          <img src="" alt="Healthy foods" className="food-image" />
        </div>
        
        <div className="otc-section">
          <h2 className="otc-heading">Can You Get Allergy Drops Over the Counter?</h2>
          
          <p className="otc-description">
            No, allergy drops are not available over the counter. They are prescription medications that must be dispensed 
            by a doctor or pharmacist. This is because allergy drops require careful dosing and monitoring to ensure their 
            safety and effectiveness. While there are homeopathic allergy drops available at certain retail stores, typically 
            costing about $5-10 per bottle (some may charge more), these bottles lack relevant active ingredients and 
            evidence of efficacy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowLongToWork;
