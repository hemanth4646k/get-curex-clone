import React from "react";
import "./Hero2.css";

const allergyItems = [
  { alt: "Sneezing face icon", label: "Allergic rhinitis (hay fever)" },
  { alt: "Asthma inhaler icon", label: "Allergic asthma" },
  { alt: "Eye icon", label: "Conjunctivitis (eye allergy)" },
  { alt: "Insect icon", label: "Stinging insect allergy" },
];

const Hero2: React.FC = () => (
  <section className="hero2-main">
    <div className="hero2-inner">
      <div className="hero2-left">
        <div className="hero2-tag">AT-HOME IMMUNOTHERAPY</div>
        <p className="hero2-paragraph">
          Allergy shots, also known as allergen immunotherapy or allergy immunotherapy, are a long-term treatment for allergies. They work by gradually exposing the immune system to increasing doses of the allergen, which can help to reduce the severity of allergic reactions. Allergy shots can be used to treat a variety of allergies, including:
        </p>
        <div className="hero2-allergies">
          {allergyItems.map((item, i) => (
            <div className="hero2-allergy-item" key={i}>
              <div className="hero2-allergy-icon">
                <img src="" alt={item.alt} />
              </div>
              <div className="hero2-allergy-label">{item.label}</div>
            </div>
          ))}
        </div>
        <p className="hero2-footnote">
          Allergy shots are typically administered once or twice a week under the guidance of an allergy specialist. The treatment process usually takes several months or years, but the benefits can last for many years after treatment is stopped.
        </p>
      </div>
      <div className="hero2-right">
        <img
          src=""
          alt="Gloved hands preparing syringe injection"
          className="hero2-img"
        />
      </div>
    </div>
  </section>
);

export default Hero2;
