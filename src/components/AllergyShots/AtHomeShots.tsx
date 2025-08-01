import React from "react";
import "./AtHomeShots.css";

const AtHomeShots: React.FC = () => (
  <section className="ahs-section">
    <div className="ahs-inner" id="at-home-allergy-shots">
      {/* Left: Professional arrival illustration */}
      <div className="ahs-image">
        <img
          src=""
          alt="Healthcare professional arriving at home with kit, greeted by homeowner"
          className="ahs-img-main"
        />
      </div>
      {/* Right: Main content */}
      <div className="ahs-content">
        <h1 className="ahs-title">At Home Allergy Shots</h1>
        <p className="ahs-text">
          Currently, allergy shots, or immunotherapy, are primarily administered in a clinical setting under the supervision of healthcare professionals. However, innovative solutions in allergy treatment, such as Curex, have revolutionized the landscape, enabling individuals to now experience personalized allergy care in the comfort of their own homes. Utilizing the proven method of exposure theory, Curex delivers the same efficacy as traditional allergy shots but through the convenience and safety of at-home allergy drops. Embrace a new era of allergy management where comfort and effectiveness converge seamlessly in the familiar surroundings of your home.
        </p>
        <button className="ahs-btn">Start with a free quiz</button>
      </div>
    </div>
  </section>
);

export default AtHomeShots;
