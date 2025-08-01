import React from 'react';
import './hero2.css';

const Hero2: React.FC = () => {
  return (
    <div className="hero-container">
      <div className="content-wrapper">
        <div className="image-section">
          <div className="product-showcase">
            <img src="" alt="Allergy drops bottle" className="product-image" />
          </div>
        </div>
        
        <div className="text-section">
          <div className="badge">
            AT-HOME IMMUNOTHERAPY
          </div>
          <h1 className="main-title">
            Sublingual Allergy Drops
          </h1>
          <p className="description">
            Sublingual immunotherapy (SLIT), also known as allergy drops, is a form of allergy treatment that involves placing a small amount of allergen extract under the tongue. This is done because the tissue under the tongue is very absorbent, allowing the allergens to be quickly absorbed into the bloodstream. This direct absorption is more effective than oral administration, skipping the digestive system where allergens may break down and lose their potency, making it ineffective.
          </p>
          <p className="benefits">
            SLIT is a safe, effective, and convenient treatment for a variety of allergies, including allergic rhinitis (hay fever), conjunctivitis (eye allergy), and asthma. It is a good option for people who:
          </p>
          
          <div className="feature-cards">
            <div className="feature-card">
              <div className="card-icon">
                <img src="" alt="Medical icon" className="icon-image" />
              </div>
              <div className="card-content">
                <span className="card-number">1</span>
                <p className="card-text">
                  want to address the source<br />
                  of their allergies and get<br />
                  healthier;
                </p>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="card-icon">
                <img src="" alt="Syringe icon" className="icon-image" />
              </div>
              <div className="card-content">
                <span className="card-number">2</span>
                <p className="card-text">
                  consider allergy<br />
                  shots inconvenient;
                </p>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="card-icon">
                <img src="" alt="Natural treatment icon" className="icon-image" />
              </div>
              <div className="card-content">
                <span className="card-number">3</span>
                <p className="card-text">
                  want a natural treatment<br />
                  option that trains their body<br />
                  to fight against allergies.
                </p>
              </div>
            </div>
          </div>
          
          <div className="timeline-section">
            <h2 className="timeline-title">
              How Long Does It Take For Sublingual Allergy Drops to Work
            </h2>
            <p className="timeline-description">
              Sublingual allergy drops typically work within four to eight weeks of treatment for most often reported around three to six months. However, optimal benefits are seen typically after a year. Over 90% experience significant reduction in symptoms and medicine taken after one year. The gradual improvement occurs as the immune system becomes increasingly tolerant to the allergens present in the drops. Patients are encouraged to adhere to their prescribed regimen without interruption to achieve the best results and long-term relief from allergy symptoms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
