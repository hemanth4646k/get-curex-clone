import React from 'react';
import './HowOften.css';

interface HowOftenProps {
  title?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const HowOften: React.FC<HowOftenProps> = ({
  title = "How Often Do You Take Allergy Drops?",
  description = "The frequency of allergy drop administration depends on several factors, including the severity of your allergies, the type of allergen extract you are receiving, and your doctor's recommendations. Typically, allergy drops are taken daily. Some more diluted doses of allergies are taken 3 times per day. Your doctor will prescribe you a specific protocol that is likely to be the most effective for you. Like with most medications, it's important to follow your prescription.",
  imageSrc = "",
  imageAlt = ""
}) => {
  return (
    <div className="padding-global">
      <div className="container-large">
        <div className="padding-section-small">
          <div className="how-often_component" id="How-Often-Do-You-Take-Allergy-Drops">
            <div className="how-often_contents-left">
              <div className="how-often_decor1">
                <div className="icon-decor4">
                  {/* Icon will be added later */}
                </div>
              </div>
              
              <div className="margin-bottom margin-small">
                <h1>{title}</h1>
              </div>
              
              <div className="margin-bottom margin-xsmall">
                <div className="text-size-large">
                  {description}
                </div>
              </div>
            </div>
            
            <div className="how-often_contents-right">
              <div className="how-often_bg"></div>
              
              <div className="how-often_image-wrapper">
                <img 
                  src={imageSrc} 
                  loading="lazy" 
                  alt={imageAlt} 
                  className="how-often_image"
                />
              </div>
              
              <div className="how-often_decor2">
                <div className="icon-decor5">
                  {/* Icon will be added later */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowOften;
