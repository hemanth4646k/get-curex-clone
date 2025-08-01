import React from "react";
import "./Comparision.css";

const curexFeatures = [
  { label: "At-home treatment", checked: true },
  { label: "Access to clinician via text/call/zoom", checked: true },
  { label: "Non-invasive application?", checked: true },
  { label: "No Scary Needles", checked: true },
  { label: "No Time Away From School", checked: true },
  { label: "No More Commutes to the Allergist", checked: true },
  { label: "Time spent per year", value: "Less than 2 hours" },
  { label: "Price", value: "$69/month + copay" }
];

const allergyFeatures = [
  { label: "At-home treatment", checked: false },
  { label: "Access to clinician via text/call/zoom", checked: false },
  { label: "Non-invasive application?", checked: false },
  { label: "No Scary Needles", checked: false },
  { label: "No Time Away From School", checked: false },
  { label: "No More Commutes to the Allergist", checked: false },
  { label: "Time spent per year", value: "Over 52 hours" },
  { label: "Price", value: "$2,000 – $5,000" }
];

const Comparision: React.FC = () => (
  <section className="cmp-table-section" id="how-much-do-allergy-shots-cost">
    <h2 className="cmp-title">How Much Do Allergy Shots Cost?</h2>
    <p className="cmp-desc">
      The cost of allergy shots can vary depending on various factors, including the specific allergens being targeted, the duration of treatment, and geographic location. Generally, allergy shots are considered an investment in long-term allergy management, as they address the root cause of allergies and can lead to lasting relief. However, there is a more affordable option &ndash; Curex. Curex is a much better value compared to allergy shots.
    </p>
    <div className="cmp-table-container">
      <div className="cmp-table-header">
        <div className="cmp-header-col">Curex</div>
        <div className="cmp-header-col">Allergy Shots</div>
      </div>
      
      <div className="cmp-table-images">
        <div className="cmp-img-col cmp-curex">
          <img src="https://getcurex.com/images/curex-box-hands.jpg" alt="Curex home test kit held by hands against pink background" />
        </div>
        <div className="cmp-img-col cmp-shots">
          <img src="https://getcurex.com/images/allergy-shot-child.jpg" alt="Child receiving an allergy shot injection" />
        </div>
      </div>
      
      <div className="cmp-feature-rows">
        {curexFeatures.map((curex, idx) => {
          const shots = allergyFeatures[idx];
          return (
            <div className="cmp-row" key={curex.label}>
              <div className="cmp-cell cmp-label">{curex.label}</div>
              <div className="cmp-cell cmp-curex">
                {curex.value ? (
                  <span className="cmp-value">{curex.value}</span>
                ) : (
                  <span className="cmp-check">✓</span>
                )}
              </div>
              <div className="cmp-cell cmp-shots">
                {shots.value ? (
                  <span className="cmp-value">{shots.value}</span>
                ) : (
                  <span className="cmp-cross">✕</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
    <div className="cmp-footer-row">
      <button className="cmp-cta-btn">Start a Free Quiz Now</button>
    </div>
  </section>
);

export default Comparision;
