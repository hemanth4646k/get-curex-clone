import type { ReactElement } from 'react';
import './AllervieHealth.css';

function DescCard({heading,desc,imgSrc,buttonEle}:{heading:string, desc:string, imgSrc:string, buttonEle:ReactElement}) {
  return (
    <section className="DescCard">
      <div className="DescCard-container">
        {/* Title */}
        <h1 className="DescCard-title">
          {heading}
        </h1>
        
        {/* Two Column Layout */}
        <div className="DescCard-content">
          {/* Left Column - Image */}
          <div className="DescCard-image-column">
            <img src={imgSrc} alt={heading} className="DescCard-image" />
          </div>
          
          {/* Right Column - Text Content */}
          <div className="DescCard-text-column">
            <p className="DescCard-paragraph">
              {desc}
            </p>
            
            {/* CTA Button */}
            <div className="DescCard-cta">
              {buttonEle}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DescCard;
