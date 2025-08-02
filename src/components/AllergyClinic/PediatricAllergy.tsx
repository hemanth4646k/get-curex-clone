import React from 'react';
import './PediatricAllergy.css';

const PediatricAllergy: React.FC = () => {
  return (
    <section className="pediatric-allergy" id="pediatric-allergy">
      <div className="pediatric-allergy-container">
        {/* Title */}
        <h1 className="pediatric-allergy-title">
          Pediatric Allergy
        </h1>
        
        {/* Description Text */}
        <div className="pediatric-allergy-description">
          <p className="description-text">
            Curex is your trusted partner for pediatric allergy care, providing a seamless 
            and effective solution for the little ones in your family. Our sublingual 
            immunotherapy is not only family-friendly but also tailored to ensure the safety 
            and comfort of children. Say goodbye to the stress of finding specialized 
            pediatric allergy care and embrace the convenience of Curex. Trust Curex to 
            deliver personalized care backed by expert medical guidance, giving your 
            child the gift of a happy, allergy-free childhood.
          </p>
        </div>
        
        {/* Product Image */}
        <div className="pediatric-allergy-image-section">
          <img 
            src="" 
            alt="Curex pediatric allergy product packages - blue and pink boxes with colorful design elements for children" 
            className="pediatric-allergy-image"
          />
        </div>
        
        {/* CTA Button */}
        <div className="pediatric-allergy-cta">
          <button className="pediatric-allergy-button">
            Discover Curex for Kids
          </button>
        </div>
      </div>
    </section>
  );
};

export default PediatricAllergy;
