import React from "react";
import "./CatShots.css";

const CatShots: React.FC = () => (
  <section className="catshots-section" id="cat-allergy-shots">
    <div className="catshots-inner">
      {/* Left: Image */}
      <div className="catshots-image-col">
        <img
          src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/655f33261903fb447d5856dc_Mask%20group-p-1080.webp"
          alt="Woman cuddling cat on couch with Curex allergy drops and box in foreground"
          className="catshots-img"
        />
      </div>
      {/* Right: Content */}
      <div className="catshots-content">
        <h1 className="catshots-title">Cat Allergy Shots</h1>
        <p className="catshots-desc">
          For those grappling with cat allergies, finding effective relief is crucial to enjoying a pet-friendly environment. Cat allergy shots, also known as immunotherapy, offer a targeted solution to alleviate allergic reactions triggered by cat dander. By gradually exposing the immune system to small doses of cat allergens, these shots work to build tolerance over time, reducing the severity of symptoms like sneezing, itching, and congestion. If you’re passionate about sharing your home with feline companions but struggle with cat allergies, consulting with an allergist can help determine if cat allergy shots are the right choice for you. Take a proactive step towards a harmonious coexistence with your furry friends by exploring the potential benefits of cat allergy shots.
        </p>
        <button className="catshots-btn">
          Discover Pet Allergies
        </button>
      </div>
    </div>
  </section>
);

export default CatShots;
