import React from 'react';
import './DoDropsReallyWork.css';

const DoDropsReallyWork: React.FC = () => {
  return (
    <div className="do-drops-work-container" id="Do-Allergy-Drops-Really-Work">
      <div className="content-wrapper">
        <div className="image-section">
          <div className="woman-image-container">
            <img src="" alt="Happy woman with allergy drops" className="woman-image" />
            <div className="curex-logo">
              <img src="" alt="Curex logo" className="logo-image" />
            </div>
          </div>
        </div>
        
        <div className="text-section">
          <h1 className="main-heading">Do Allergy Drops Really Work?</h1>
          
          <div className="content-blocks">
            <p className="description">
              Allergy drops, also known as sublingual immunotherapy (SLIT), are an effective treatment for allergies. By 
              gradually exposing the body to small amounts of an allergen, they aid in building up tolerance and reducing 
              allergy symptoms like sneezing, runny nose, itchy eyes, and congestion.
            </p>
            
            <p className="effectiveness">
              Studies show that allergy drops are successful in treating various allergies, including allergic rhinitis (hay fever), 
              allergic conjunctivitis (eye allergy), eczema and asthma. They're a good option for those unable to take allergy 
              shots or prefer a more convenient and less invasive treatment.
            </p>
            
            <p className="timeline">
              Allergy drops typically take several months to kick in, and the full benefits may not be seen for up to a year. 
              Nevertheless, most people experience symptom improvement within a few months of starting treatment. The 
              effectiveness of allergy drops varies depending on the individual and the type of allergy being treated. However, 
              studies have shown that they work well for most people who use them: How Sublingual Drops Can 
              Ease Your Allergy Symptoms; How Sublingual Drops Can Ease Your Allergy Symptoms; How Sublingual Drops Can 
              Ease Your Allergy Symptoms; How Sublingual Drops Can Ease Your Allergy Symptoms; How Sublingual Drops Can 
              Ease Your Allergy Symptoms; How Sublingual Drops Can Ease Your Allergy Symptoms
            </p>
          </div>
          
          <div className="effectiveness-section">
            <h2 className="effectiveness-title">How Effective Are Allergy Drops</h2>
            
            <p className="effectiveness-intro">
              Allergy drops, or sublingual immunotherapy, usually take several months to start showing results, with full 
              benefits potentially not being noticeable until around one year of treatment. Most individuals begin to notice an improvement in their 
              symptoms within the first few months of treatment. The efficacy of allergy drops can vary based on the individual 
              and the specific allergens being targeted. Clinical studies indicate that up to 80% of patients using allergy drops 
              experience significant relief from their allergy symptoms. This form of treatment is particularly effective for those 
              who are unable to tolerate or do not respond well to traditional allergy shots, offering a viable and effective 
              alternative for long-term allergy management.
            </p>
          </div>
          
          <div className="cta-section">
            <button className="cta-button">Start a Free Quiz Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoDropsReallyWork;
