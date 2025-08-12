import React from "react";
import "./WhatsAllergenImmunoT.css";

const WhatsAllergenImmunoT: React.FC = () => (
  <section className="wai-section">
    <div className="wai-inner">
      {/* Left: Text Content */}
      <div className="wai-content">
        <h1 className="wai-title">What’s Allergen Immunotherapy?</h1>
        <p className="wai-para">
          Immunotherapy, encompassing both allergy shots and allergy drops, presents a targeted and transformative approach to allergy management. Allergen immunotherapy, whether administered through injections or sublingual drops, involves exposing the immune system to small amounts of specific allergens. This gradual exposure aims to build tolerance over time, resulting in a reduction of allergy symptoms. While allergy shots are administered in a healthcare setting, allergy drops, or sublingual immunotherapy, offer a convenient at-home option.
        </p>
        <p className="wai-para">
          Whether you opt for allergy shots or drops, consulting with an allergist is key to determining the most effective and personalized plan for your specific allergens. Embrace a proactive journey toward lasting allergy relief, exploring the benefits of both allergy shots and drops to find a solution that seamlessly integrates into your lifestyle, providing comfort and freedom from persistent allergic reactions.
        </p>
        <h2 className="wai-heading">How Does Allergen Immunotherapy Work</h2>
        <p className="wai-para">
          Allergen immunotherapy, commonly known as allergy shots, is a proven long-term treatment that decreases symptoms for many people with allergic rhinitis and allergic asthma. It involves gradually introducing small, controlled amounts of the allergens that most aggravate your symptoms into your body. This process helps your immune system become less sensitive to them over time, leading to fewer allergy symptoms and reducing reliance on medications in everyday life. By directly addressing the underlying cause of allergies, not just the symptoms, allergen immunotherapy can significantly reduce the long-term use of allergy medications and improve your quality of life.
        </p>
      </div>
      {/* Right: Image */}
      <div className="wai-visual">
        <img
          src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/65573d6cd0de7397c78a586a_health-care-medicine-concept%201-p-1080.webp"
          alt="Curex allergy immunotherapy drops bottle, kit, and packaging on green background"
          className="wai-image-main"
        />
      </div>
    </div>
  </section>
);

export default WhatsAllergenImmunoT;
