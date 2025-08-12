import React from 'react';
import './AllergyNutshell.css';

const AllergyNutshell: React.FC = () => {
  return (
    <div className="allergy-nutshell-section">
      <div className="allergy-nutshell-container">
        <div className="allergy-nutshell-header">
          <div className="allergy-nutshell-badge">UNDERSTAND</div>
          <h2 className="allergy-nutshell-title">Allergy Immunotherapy in a Nutshell</h2>
          <p className="allergy-nutshell-description">
            <a href="https://getcurex.com/blog-posts/allergy-immunotherapy" className="allergy-nutshell-link">
              Allergy immunotherapy
            </a> is a clinician-prescribed treatment that helps{' '}
            <strong>build long-term tolerance to allergens</strong> that millions of Americans suffer from.
          </p>
        </div>

        <div className="allergy-nutshell-content">
          <div className="allergy-nutshell-image-section">
            <img 
              src='https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/626b110125c10c7fec477041_43c82f5f8d661d008f9fc719d32d53cc-min-p-2000.jpeg'
              className="allergy-nutshell-image" 
              alt="Woman opening Curex box with blue background"
            />
          </div>

          <div className="allergy-nutshell-toc-section">
            <h2 className="allergy-nutshell-toc-title">Table of Contents</h2>
            <div className="allergy-nutshell-toc-links">
              <a href="#what-is-immunotherapy" className="allergy-nutshell-toc-link">
                What is Immunotherapy?
              </a>
              <a href="#common-misconceptions" className="allergy-nutshell-toc-link">
                Common Misconceptions
              </a>
              <a href="#is-immunotherapy-safe" className="allergy-nutshell-toc-link">
                Is it proven & safe?
              </a>
              <a href="#forms-of-immunotherapy" className="allergy-nutshell-toc-link">
                How does it compare to taking over-the-counter medication?
              </a>
              <a href="#forms-of-immunotherapy" className="allergy-nutshell-toc-link">
                Forms of Immunotherapy
              </a>
              <a href="#slit-vs-scit" className="allergy-nutshell-toc-link">
                SLIT vs SCIT
              </a>
              <a href="#what-allergies-can-be-treated" className="allergy-nutshell-toc-link">
                What allergies can it treat?
              </a>
              <a href="#who-is-it-for" className="allergy-nutshell-toc-link">
                Who can use this treatment?
              </a>
              <a href="#timeline" className="allergy-nutshell-toc-link">
                Timeline
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllergyNutshell;