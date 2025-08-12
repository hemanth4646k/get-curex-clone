import React from 'react';
import './DropsForFoodAllergies.css';

const DropsForFoodAllergies: React.FC = () => {
  return (
    <div className="drops-for-food-allergies-container" id="Do-Allergy-Drops-Treat-Food-Allergies">
      <div className="header-section">
        <h1 className="main-title">Do Allergy Drops Treat Food Allergies?</h1>
        
        <div className="intro-content">
          <p className="intro-paragraph">
            Sublingual immunotherapy (SLIT) is a method of treating food allergies by placing a small amount of liquid 
            containing food allergens under the tongue for several minutes. This exposure is thought to help the body 
            develop tolerance to the food by introducing undigested allergens to cells in the mouth lining.
          </p>
          
          <p className="effectiveness-paragraph">
            Allergy drops can be effective for a variety of food allergies, including kiwi, peanut, hazelnut, milk, and peach. 
            However, it is less commonly used than treatments for airborne allergies, and less research has been done on its 
            effectiveness compared to oral immunotherapy (OIT).
          </p>
        </div>
      </div>

      <div className="main-content">
        <div className="image-section">
          <div className="family-image-container">
            <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/655740da8ffbd8c3210cea98_mom-with-children-homely-atmosphere%201-p-1080.webp" alt="Mother and child" className="family-image" />
          </div>
        </div>
        
        <div className="video-section">
          <div className="video-container">
            <div className="video-thumbnail">
              <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/652e8cfbb1b80741ea039757_Rectangle%201942-p-1080.webp" alt="Sublingual Immunotherapy for Treatment of Food Allergy" className="video-image" />
              <div className="play-button">
                <div className="play-icon">▶</div>
              </div>
            </div>
            <div className="video-info">
              <h3 className="video-title">
                Sublingual Immunotherapy 
                for Treatment of
                Food Allergy
              </h3>
              <p className="video-author">Mary S. Morris, MD</p>
              <div className="watch-on-youtube">
                <span>Watch on</span>
                <img src="" alt="YouTube" className="youtube-logo" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="detailed-content">
        <p className="comparison-paragraph">
          In the United States, SLIT is not yet officially approved for food allergies, but research is ongoing. The FDA has approved Palforzia, an OIT tablet for peanut allergies. However, Palforzia is only approved for administration in a doctor's office because the dosage is relatively high and allergic reactions are common.
        </p>
        
        <p className="safety-paragraph">
          In contrast, there is some evidence that SLIT for food allergies may be safer and provide a more gradual build-up of tolerance than OIT. However, it also takes longer to work; typically 18-24 months compared to 6 months for OIT.
        </p>
      </div>

      <div className="additional-info" id='Allergy-Drops-Reviews'>
        <h2 className="section-heading">Allergy Drops Reviews</h2>
        
        <p className="reviews-intro">
          Customers generally find allergy drops to be convenient, easy to use, and portable. The treatment typically 
          involves a build-up phase followed by a maintenance phase. While some people may experience mild side 
          effects, these are typically temporary and mild in nature.
        </p>
        
        <p className="reviews-timeline">
          Most customers start to see benefits within 3-6 months of starting treatment. They continue to work with their 
          allergist to maximize the effectiveness of the treatment over time.
        </p>
        
        <h3 className="subsection-heading">How Sublingual Drops Can Ease Your Allergy Symptoms</h3>
        
        <div className="family-scene">
          <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/655740da8ffbd8c3210cea98_mom-with-children-homely-atmosphere%201-p-1080.webp" alt="Mother helping child with allergies" className="family-scene-image" />
        </div>
      </div>
    </div>
  );
};

export default DropsForFoodAllergies;
