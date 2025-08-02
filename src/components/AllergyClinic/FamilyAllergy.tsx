import React from 'react';
import './FamilyAllergy.css';

const FamilyAllergy: React.FC = () => {
  return (
    <section className="family-allergy" id="family-allergy">
      <div className="family-allergy-container">
        {/* Title */}
        <h1 className="family-allergy-title">
          Family Allergy
        </h1>
        
        {/* Hero Section with Yellow Background */}
        <div className="family-allergy-hero">
          <div className="hero-content">
            <div className="hero-text">
              <p className="hero-description">
                Unlock allergy relief for your entire family with Curex, your trusted partner in 
                comprehensive and convenient allergy care. Our family-friendly approach to 
                sublingual immunotherapy ensures that managing allergies is not only effective 
                but also accessible from the comfort of your home. With a focus on safety, 
                Curex ensures a seamless experience for both children and adults. Even pets 
                love Curex by eliminating pesky pet allergies. Curex makes top-notch allergy 
                care affordable for families of all sizes. Say goodbye to the hassle of frequent 
                doctor visits and embrace a holistic solution that addresses various wellness 
                needs, from antihistamines to asthma management. Trust Curex to provide 
                personalized, family-centric allergy treatment backed by expert medical 
                guidance.
              </p>
            </div>
            <div className="hero-image">
              <img 
                src="" 
                alt="Hand holding Curex allergy product bottle on yellow background with red nail polish" 
                className="family-allergy-image"
              />
            </div>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="family-allergy-cta">
          <button className="family-allergy-button">
            Discover Curex For Kids
          </button>
        </div>
      </div>
    </section>
  );
};

export default FamilyAllergy;
