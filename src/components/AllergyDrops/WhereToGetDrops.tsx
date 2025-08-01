import React from 'react';
import './WhereToGetDrops.css';

const WhereToGetDrops: React.FC = () => {
  return (
    <div className="where-to-get-container">
      <div className="content-wrapper">
        <div className="text-section">
          <h1 className="main-heading">Where Can I Get Allergy Drops?</h1>
          
          <p className="main-description">
            Allergy drops can be dispensed by an allergy doctor that specializes in allergy immunotherapy and allergy 
            drops. Several pharmacies may be able to ship you an order of allergy drops, but they require a prescription. 
            Curex offers an affordable option at just $59/month. You can start a Free Quiz with Curex, receive a prescription 
            from a Curex allergy clinician online, and have your allergy drops mailed to you.
          </p>
          
          <button className="cta-button">Start a Free Quiz Now</button>
        </div>
        
        <div className="image-section">
          <div className="product-container">
            <div className="product-box">
              <img src="" alt="Curex allergy drops package" className="package-image" />
            </div>
            <div className="bottle-image">
              <img src="" alt="Allergy drops bottle with dropper" className="bottle" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="dog-section">
        <div className="dog-content">
          <div className="dog-image-container">
            <img src="" alt="Happy dog with person" className="dog-image" />
          </div>
          
          <div className="dog-text-section">
            <h2 className="dog-heading">Allergy Drops For Dog Allergies</h2>
            
            <p className="dog-description">
              Allergy drops, also known as sublingual immunotherapy drops, can be used to treat dog allergies. This treatment 
              works by gradually exposing the immune system to small, controlled doses of dog allergens, which helps the 
              body to develop tolerance.
            </p>
            
            <p className="dog-benefits">
              Allergy drops are considered to be one of the safest and most effective long-term treatments for dog allergies. 
              They are reported to be successful in approximately 60% of patients.
            </p>
            
            <p className="dog-comparison">
              Unlike traditional allergy medications, which only alleviate the symptoms of allergies, allergy drops can help the 
              body to overcome its allergic response to dogs. Discover the benefits of sublingual allergy drops.
            </p>
            
            <p className="dog-conclusion">
              With regular use, allergy drops can provide long-term relief from dog allergies and reduce the risk of developing 
              asthma.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhereToGetDrops;
