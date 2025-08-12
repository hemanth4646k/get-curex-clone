import React from 'react';
import './DropsForCats.css';

const DropsForCats: React.FC = () => {
  return (
    <div className="drops-for-cats-container" id="Allergy-Drops-For-Cat-Allergies">
      <div className="content-wrapper">
        <div className="text-section">
          <h1 className="main-heading">Allergy Drops For Cat Allergies</h1>
          
          <div className="content-blocks">
            <p className="intro-paragraph">
              Sublingual immunotherapy, commonly referred to as allergy drops, offers a therapeutic approach for managing 
              cat allergies. By introducing incremental doses of cat allergens beneath the tongue, this method aims to boost 
              the immune system's tolerance.
            </p>
            
            <p className="effectiveness-paragraph">
              Recognized for its safety and efficacy, sublingual immunotherapy is an established long-term solution, boasting 
              a success rate of about 80% in individuals.
            </p>
            
            <p className="mechanism-paragraph">
              This therapy goes beyond the scope of conventional allergy medications that typically alleviate only allergy 
              symptoms. Instead, it assists in enabling the body to build resistance to the allergens specific to cats. Through 
              targeting the underlying cause of pet allergies, it promises enduring relief and a potential decrease in asthma-
              related risks through consistent application.
            </p>
          </div>
        </div>
        
        <div className="image-section">
          <div className="cat-owner-image">
            <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/65573e928992b2764fd77561_image%2097-p-1080.webp" alt="Happy woman holding cat" className="woman-cat-image" />
          </div>
        </div>
      </div>
      
      <div className="lower-section" id='Can-You-Use-Allergy-Drops-While-Pregnant'>
        <h2 className="secondary-heading">Can You Use Allergy Drops While Pregnant?</h2>
        
        <p className="pregnancy-intro">
          Using allergy drops or sublingual immunotherapy during pregnancy is generally safe if a woman has been on allergy drops 
          before becoming pregnant and has tolerated the treatment well; she may be able to continue with her regimen under close 
          medical supervision. Starting allergy drops during pregnancy, however, is usually not recommended. This caution stems from 
          the lack of extensive research on the initiation of sublingual immunotherapy during pregnancy, and the potential risks are 
          not fully understood.
        </p>
        
        <p className="pregnancy-advice">
          For expectant mothers managing allergies, it's crucial to consult with both an allergist and an obstetrician to discuss the safety 
          and timing of continuing or modifying allergy treatment. Adjustments might be necessary depending on the individual's health and 
          response to the therapy. Regular monitoring by healthcare professionals will ensure that both the mother and the unborn baby remain 
          safe throughout the pregnancy, minimizing any potential risks associated with allergy treatments.
        </p>
        
        <h2 className="tertiary-heading" id='Can-You-Treat-Allergic-Conjunctivitis-With-Allergy-Drops'>Can You Treat Allergic Conjunctivitis With Allergy Drops?</h2>
        
        <p className="conjunctivitis-intro">
          Yes, allergy drops can be used to treat allergic conjunctivitis. Over-the-counter and prescription anti-allergy eye drops are 
          commonly used to relieve the symptoms of allergic conjunctivitis, such as red, itchy eyes. These eye drops may contain medications 
          such as antihistamines and mast cell stabilizers, which help to control allergic reactions.
        </p>
        
        <p className="conjunctivitis-treatment">
          Sublingual allergy immunotherapy drops can also be used to treat allergic conjunctivitis. Immunotherapy is a longer-term treatment 
          that works by helping the body build immunity to allergens. This prevents the immune system from overreacting to allergens and causing 
          symptoms of allergic conjunctivitis.
        </p>
      </div>
    </div>
  );
};

export default DropsForCats;
