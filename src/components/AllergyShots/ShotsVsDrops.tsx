import React from "react";
import "./ShotsVsDrops.css";

const ShotsVsDrops: React.FC = () => (
  <section className="svd-section">
    <div className="svd-inner">
      {/* Left: Box visual */}
      <div className="svd-imgcol">
        <div className="svd-box">
          <div className="svd-box-inner">
            <div className="svd-box-lid">
              <span className="svd-free-text">Be free.</span>
              {/* (cloud/sky background - add as background via CSS or image if desired) */}
            </div>
            <div className="svd-box-bottles">
              <img
                src=""
                alt="Open box containing four blue allergy treatment bottles with pipettes and yellow tray"
                className="svd-box-img"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Right: Content */}
      <div className="svd-content">
        <h1 className="svd-title">Are Allergy Shots Better than Drops?</h1>
        <p className="svd-desc">
          The choice between allergy shots and drops often depends on individual preferences, lifestyle, and specific allergic conditions. Both options—shots and drops—are forms of immunotherapy designed to address the root cause of allergies by desensitizing the immune system to specific allergens. Allergy shots are administered in a healthcare setting. Allergy drops, or sublingual immunotherapy, provide the convenience of at-home administration. While both approaches are effective, your selection may come down to factors such as convenience and affordability. Curex is the most affordable and convenient allergy treatment.
        </p>
      </div>
    </div>
  </section>
);

export default ShotsVsDrops;
