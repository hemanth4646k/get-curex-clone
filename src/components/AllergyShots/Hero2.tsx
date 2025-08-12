import React from "react";
import "./Hero2.css";

const allergyItems = [
  { alt: "Sneezing face icon", label: "Allergic rhinitis (hay fever)", link:"https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/6536b2ae5615421a869134ec_Property%201%3Dsneeze.svg" },
  { alt: "Asthma inhaler icon", label: "Allergic asthma", link: "https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/655f384b82807dae3809669a_ic-venom-2.svg" },
  { alt: "Eye icon", label: "Conjunctivitis (eye allergy)", link: "https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/655f384c3586199f464c8eab_ic-venom.svg" },
  { alt: "Insect icon", label: "Stinging insect allergy", link: "https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/655f384b3152bef7679ee023_ic-venom-1.svg" },
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
                <img src={item.link} alt={item.alt} />
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
          src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/655f332611952369151902ed_image%20144-p-1080.webp"
          alt="Gloved hands preparing syringe injection"
          className="hero2-img"
        />
      </div>
    </div>
  </section>
);

export default Hero2;
