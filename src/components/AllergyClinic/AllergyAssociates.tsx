import React from 'react';
import './AllergyAssociates.css';

const AllergyAssociates: React.FC = () => {
  return (
    <section className="allergy-associates" id="allergy-associates">
      <div className="allergy-associates-container">
        {/* Title */}
        <h1 className="allergy-associates-title">
          Allergy Associates
        </h1>
        
        {/* Two Column Layout */}
        <div className="allergy-associates-content">
          {/* Left Column - Image */}
          <div className="allergy-associates-image-column">
            <img 
              src="" 
              alt="Modern Allergy Associates clinic building exterior with glass facade and ENT & Allergy signage" 
              className="allergy-associates-building-image"
            />
          </div>
          
          {/* Right Column - Text Content */}
          <div className="allergy-associates-text-column">
            <p className="allergy-associates-paragraph">
              Curex Allergy Care outshines traditional allergy clinics, such as ENT Allergy 
              Associates, by offering a competitive advantage through its extensive online 
              consultation and treatment options. Embracing remote healthcare services can 
              revolutionize the experience for allergy sufferers who encounter difficulties in 
              regularly attending physical clinics. Explore the various ways in which Curex's 
              online consultations provide benefits:
            </p>
          </div>
        </div>
        
        {/* Comparison Table */}
        <div className="comparison-table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th className="table-header"></th>
                <th className="table-header curex-header">Curex</th>
                <th className="table-header online-header">online SLIT clinic</th>
                <th className="table-header local-header">Local Allergist</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="table-row-header">Telemedicine</td>
                <td className="table-cell curex-cell">Yes</td>
                <td className="table-cell online-cell">Yes</td>
                <td className="table-cell local-cell">No</td>
              </tr>
              <tr className="table-row-alt">
                <td className="table-row-header">Accepts Insurance</td>
                <td className="table-cell curex-cell">Yes</td>
                <td className="table-cell online-cell">No</td>
                <td className="table-cell local-cell">No</td>
              </tr>
              <tr>
                <td className="table-row-header">Testing Quality</td>
                <td className="table-cell curex-cell">High</td>
                <td className="table-cell online-cell">Low</td>
                <td className="table-cell local-cell">High</td>
              </tr>
              <tr className="table-row-alt">
                <td className="table-row-header">Popularity</td>
                <td className="table-cell curex-cell">High</td>
                <td className="table-cell online-cell">Low</td>
                <td className="table-cell local-cell">Low</td>
              </tr>
              <tr>
                <td className="table-row-header">Price</td>
                <td className="table-cell curex-cell price-affordable">Most Affordable</td>
                <td className="table-cell online-cell price-expensive">Expensive</td>
                <td className="table-cell local-cell price-most-expensive">Most Expensive</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AllergyAssociates;
