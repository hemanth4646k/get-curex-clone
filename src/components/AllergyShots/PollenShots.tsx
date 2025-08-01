import React from "react";
import "./PollenShots.css";

const PollenShots: React.FC = () => (
  <section className="pshots-section">
    <div className="pshots-inner" id="allergy-shots-for-pollen">
      <div className="pshots-content">
        <h1 className="pshots-title">Allergy Shots for Pollen</h1>
        <p className="pshots-text">
          If you’re battling seasonal allergies triggered by pollen, allergy shots can be a game-changer in providing lasting relief. Allergy shots, or immunotherapy, work by gradually exposing the immune system to small amounts of pollen allergens, helping the body build tolerance over time. This targeted approach can significantly reduce the severity of allergy symptoms related to pollen, such as sneezing, congestion, and itchy eyes. By addressing the root cause of the allergic response, allergy shots aim to modify the immune system’s reaction to pollen, offering a more sustainable solution compared to symptomatic treatments.
        </p>
        <p className="pshots-text pshots-text-last">
          Consult with an allergist to determine if allergy shots are the right fit for your pollen allergies and take the proactive step towards enjoying the changing seasons without the burden of persistent allergic reactions.
        </p>
      </div>
      <div className="pshots-image-col">
        <div className="pshots-image-wrap">
          <img
            src=""
            alt="Sunset over field representing pollen season"
            className="pshots-image"
          />
        </div>
      </div>
    </div>
  </section>
);

export default PollenShots;
