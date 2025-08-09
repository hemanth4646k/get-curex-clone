import React from 'react';
import './ImmunoscienceHeader.css';

interface ImmunotherapyHeaderProps {
  title?: string;
  description?: string;
}

const ImmunotherapyHeader: React.FC<ImmunotherapyHeaderProps> = ({
  title = "Immunotherapy Science",
  description = "Clinical studies referenced below are intended to provide information to medical professionals about allergy immunotherapy. These studies have not been reviewed by the FDA."
}) => {
  return (
    <div className="padding-global">
      <div className="container-large">
        <div className="padding-section-small">
          <div className="header1_component" style={{backgroundColor: "#f4eb9eff", padding: "2rem", borderRadius: "12px"}}>
            <div className="header1_contents-left">
              <div className="immunoscience-header_decor1">
                <div className="icon-decor4">
                  <img src="/icons/green_cloud.png" style={{ width: "100%", height: "100%" }} alt="Green cloud icon" className="decor-icon" />
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
            
            <div className="header1_contents-right">
              <div className="immunoscience-header_bg"></div>
              
              <div className="header1_image-wrapper">
                <img 
                  src="/Curex-science.webp"
                  loading="lazy" 
                  alt="" 
                  className="header1_image"
                  style={{ width: "100%", height: "100%", zIndex: 1000 }}
                />
              </div>
              
              <div className="immunoscience-header_decor2">
                <div className="icon-decor5">
                  <img src="/icons/blue_spring.png" style={{ width: "100%", height: "100%" }} alt="Green cloud icon" className="decor-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImmunotherapyHeader;
