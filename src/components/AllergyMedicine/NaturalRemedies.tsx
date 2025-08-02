import React from 'react';
import './NaturalRemedies.css';

const NaturalRemedies: React.FC = () => {
  return (
    <section className="natural-remedies">
      <div className="natural-remedies-container" id='Natural-Remedies-for-Allergies'>
        {/* Header Section */}
        <div className="natural-remedies-header">
          <h1 className="natural-remedies-title">
            Natural Remedies for Allergies
          </h1>
        </div>
        
        {/* Cards Grid */}
        <div className="natural-remedies-grid">
          {/* Card 1 - Dietary Changes */}
          <div className="natural-remedies-card">
            <div className="card-icon">
              <img src="" alt="Shopping basket with healthy foods and vegetables" className="card-icon-img" />
            </div>
            <h3 className="card-title">
              Dietary Changes
            </h3>
            <p className="card-description">
              Adopting an anti-inflammatory diet rich in fruits, vegetables, and omega-3 
              fatty acids can help alleviate allergy symptoms by reducing overall inflammation in the 
              body.
            </p>
          </div>

          {/* Card 2 - Herbal Supplements */}
          <div className="natural-remedies-card">
            <div className="card-icon">
              <img src="" alt="Herbal supplement bottles and natural remedies" className="card-icon-img" />
            </div>
            <h3 className="card-title">
              Herbal Supplements
            </h3>
            <p className="card-description">
              Incorporating herbs like butterbur and quercetin into your routine may provide relief 
              from allergies, as these natural compounds have demonstrated anti-allergic 
              properties and can help modulate the immune response.
            </p>
          </div>

          {/* Card 3 - Saline Nasal Rinses */}
          <div className="natural-remedies-card">
            <div className="card-icon">
              <img src="" alt="Nose icon representing nasal care and breathing" className="card-icon-img" />
            </div>
            <h3 className="card-title">
              Saline Nasal Rinses
            </h3>
            <p className="card-description">
              Using saline nasal rinses helps flush out allergens from nasal passages, providing 
              immediate relief and reducing congestion by keeping the nasal passages moist and 
              clear.
            </p>
          </div>

          {/* Card 4 - Immunotherapy */}
          <div className="natural-remedies-card">
            <div className="card-icon">
              <img src="" alt="Medical syringe or injection for immunotherapy treatment" className="card-icon-img" />
            </div>
            <h3 className="card-title">
              Immunotherapy
            </h3>
            <p className="card-description">
              Incorporating herbs like butterbur and quercetin into your routine may provide relief 
              from allergies, as these natural compounds have demonstrated anti-allergic 
              properties and can help modulate the immune response.
            </p>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="natural-remedies-cta">
          <button className="natural-remedies-button">
            Immunotherapy 101
          </button>
        </div>
      </div>
    </section>
  );
};

export default NaturalRemedies;
