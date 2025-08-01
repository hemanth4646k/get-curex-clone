import React from "react";
import "./WhereShots.css";

const WhereShots: React.FC = () => (
  <section className="wshots-section">
    <div className="wshots-inner" id="where-to-get-allergy-shots-near-me">
      {/* Left: Content */}
      <div className="wshots-content">
        <h1 className="wshots-title">Where to Get Allergy Shots?</h1>
        <p className="wshots-desc">
          When searching for "where to get allergy shots near me," it's essential to find a qualified and experienced allergist in your local area. Allergy shots are typically administered in a healthcare setting, so identifying a convenient location is crucial for consistent treatment. For those seeking an innovative and convenient alternative, consider Curex—an online allergy clinic that specializes in personalized allergy drops delivered directly to your home.
        </p>
        <button className="wshots-btn">How It Works</button>
      </div>
      {/* Right: Image */}
      <div className="wshots-visual">
        <div className="wshots-img-wrap">
          <img
            src=""
            alt="Person holding branded Curex allergy treatment boxes"
            className="wshots-main-img"
          />
          <div className="wshots-logo-wrap">
            <img
              src=""
              alt="Curex bee logo"
              className="wshots-logo"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhereShots;
