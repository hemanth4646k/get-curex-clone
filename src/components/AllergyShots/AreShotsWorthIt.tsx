import React from "react";
import "./AreShotsWorthIt.css";

const AreShotsWorthIt: React.FC = () => (
  <section className="asw-section" id="are-shots-worth-it">
    <div className="asw-grid">
      {/* Left Content */}
      <div className="asw-left">
        <h1 className="asw-title">Are Allergy Shots Worth It?</h1>
        <p className="asw-desc">
          The decision to pursue allergy shots is a personal one, but for many individuals, the benefits far outweigh the investment. Allergy shots offer a targeted and long-term solution to allergic conditions, addressing the root cause rather than merely alleviating symptoms. By gradually desensitizing the immune system to specific allergens, these shots can lead to a significant reduction in allergy symptoms, providing lasting relief.
          <br /><br />
          The worth of allergy shots extends beyond immediate results, as they have the potential to improve overall quality of life by minimizing the impact of allergies on daily activities. While the decision may involve factors such as time commitment and cost, there is another alternative. For a more affordable and convenient option, many individuals explore allergy drops, also a form of immunotherapy, as an effective at-home alternative.
        </p>
        <button className="asw-btn">Take a free allergy quiz</button>
      </div>
      {/* Right Image */}
      <div className="asw-right">
        <img
          src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/629f7e905eabc4379a47eeed_image1-p-1080.webp"
          alt="Allergist preparing to give an injection to a patient's upper arm"
          className="asw-image"
        />
      </div>
    </div>
  </section>
);

export default AreShotsWorthIt;
