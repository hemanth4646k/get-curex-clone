import React from 'react';
import './DropCost.css';

const DropCost: React.FC = () => {
  return (
    <div className="drop-cost-container" id="Allergy-Drops-Cost">
      <div className="content-wrapper">
        <div className="text-section">
          <h1 className="main-heading">Allergy Drops Cost</h1>
          
          <div className="content-blocks">
            <p className="description">
              Allergy drops, also known as sublingual immunotherapy (SLIT), have traditionally been 
              a more costly treatment. This is due to several factors, including the expense of FDA-
              approved allergenic extracts, the need for precise dosing, and a significantly higher 
              dosage of the extract used in allergy drops compared to allergy shots. Allergy drops 
              can contain as much as 50 times the allergenic extract of shots, making them cost-
              prohibitive for many allergist offices and clinics.
            </p>
            
            <p className="description">
              Fortunately, the emergence of scaled high-efficiency compounding pharmacies, in 
              partnership with specialist telemedicine providers like Curex, is paving the way for 
              more affordable allergy drops in the US. These pharmacies can produce SLIT orders 
              for thousands of patients per day in a standardized manner, significantly reducing the 
              cost per dose. Additionally, they can leverage economies of scale to purchase 
              allergen extracts in bulk, further driving down costs. These advancements are making 
              allergy drops a more accessible treatment option for people with allergies, particularly 
              those who cannot afford allergy shots, which are traditionally even more expensive 
              than SLIT. Allergy drops with Curex cost $400/month + copay for clinical consultations 
              with Curex clinicians.
            </p>
          </div>
        </div>
        
        <div className="image-section">
          <div className="image-container">
            <div className="be-free-card">
              <div className="card-content">
                <h2 className="card-title">Be free.</h2>
              </div>
            </div>
            
            <div className="product-box">
              <img src="" alt="Allergy drops bottles in yellow box" className="product-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropCost;
