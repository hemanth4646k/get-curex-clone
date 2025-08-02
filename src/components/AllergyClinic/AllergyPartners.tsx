import React from 'react';
import './AllergyPartners.css';

const AllergyPartners: React.FC = () => {
  return (
    <section className="allergy-partners" id="allergy-partners">
      <div className="allergy-partners-container">
        {/* Title */}
        <h1 className="allergy-partners-title">
          Allergy Partners
        </h1>
        
        {/* Hero Image Section */}
        <div className="allergy-partners-hero">
          <img 
            src="" 
            alt="Allergy Partners clinic building exterior - brick building with white trim and Allergy Partners signage reading 'Leaders in Allergy & Asthma Care'" 
            className="allergy-partners-hero-image"
          />
          <div className="decorative-flower"></div>
        </div>
        
        {/* Descriptive Text */}
        <div className="allergy-partners-description">
          <p className="description-text">
            Curex Allergy Care offers a competitive edge compared to traditional allergy clinics, like Allergy Partners, 
            thanks to its comprehensive online consultation and treatment options. Enhancing remote healthcare services 
            can be a game-changer for allergy sufferers facing challenges in visiting physical clinics regularly. Explore the 
            following ways in which Curex's online consultations provide advantages:
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="features-grid">
          {/* Convenience Feature */}
          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" className="feature-icon-svg">
                <rect x="3" y="4" width="18" height="12" rx="1" stroke="currentColor" strokeWidth="2"/>
                <path d="M7 8h10M7 12h6" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="feature-title">Convenience</h3>
            <p className="feature-description">
              Save time and effort with online consultations, eliminating the need for in-person visits. Ideal for busy individuals or those living far from a clinic.
            </p>
          </div>

          {/* Accessibility Feature */}
          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" className="feature-icon-svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor"/>
              </svg>
            </div>
            <h3 className="feature-title">Accessibility</h3>
            <p className="feature-description">
              Benefit from specialized allergy care regardless of your location. Online platforms make it easier for people in remote areas or with limited mobility to access the services they need.
            </p>
          </div>

          {/* Continuity of Care Feature */}
          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" className="feature-icon-svg">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
              </svg>
            </div>
            <h3 className="feature-title">Continuity of Care</h3>
            <p className="feature-description">
              Experience more consistent follow-ups and seamless communication with healthcare providers through online consultations. Enhance the overall management of allergies with convenient virtual check-ins.
            </p>
          </div>

          {/* Reduced Exposure Feature */}
          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" className="feature-icon-svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-1.12.23-2.18.64-3.15L6.5 10.5c-.28.28-.28.72 0 1l3 3c.28.28.72.28 1 0s.28-.72 0-1L9 12l1.5-1.5c.28-.28.28-.72 0-1s-.72-.28-1 0L8 11l-.64-.64C8.82 8.77 10.35 8 12 8c2.21 0 4 1.79 4 4 0 .35-.05.69-.14 1.02l1.42 1.42c.46-.97.72-2.07.72-3.22 0-4.41-3.59-8-8-8z" fill="currentColor"/>
              </svg>
            </div>
            <h3 className="feature-title">Reduced Exposure to Allergens</h3>
            <p className="feature-description">
              Opt for online consultations to minimize exposure to potential allergens found in waiting rooms or during travel to clinics. Prioritize your health in a controlled and comfortable environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllergyPartners;
