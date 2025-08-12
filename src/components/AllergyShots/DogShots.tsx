import React from "react";
import "./DogShots.css";

const DogShots: React.FC = () => (
  <section className="dogshots-section" id="dog-allergy-shots">
    <div className="dogshots-inner">
      {/* Left: Content */}
      <div className="dogshots-content">
        <h1 className="dogshots-title">Dog Allergy Shots</h1>
        <p className="dogshots-desc">
          If dog allergies are hindering your ability to fully enjoy the companionship of man’s best friend, dog allergy shots, or immunotherapy, may offer a transformative solution. Tailored to address allergic reactions triggered by dog dander, these shots work by gradually exposing the immune system to small amounts of the allergen, allowing the body to build tolerance over time. Symptoms like sneezing, itching, and congestion can be significantly reduced, enabling a more comfortable coexistence with your furry family member. Consult with an allergist to explore whether dog allergy shots are the right fit for you, providing a personalized approach to managing dog allergies and allowing you to experience the joys of pet ownership without the constant struggle against allergic reactions.
        </p>
        <button className="dogshots-btn">Discover Pet Allergies</button>
      </div>
      {/* Right: Image */}
      <div className="dogshots-imagewrap">
        <img
          src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/64d4aa5ca8b65943ddc1d1e5_Rectangle%201886-p-800.webp"
          alt="Woman kneeling on grass holding dog and branded box"
          className="dogshots-img"
        />
      </div>
    </div>
  </section>
);

export default DogShots;
