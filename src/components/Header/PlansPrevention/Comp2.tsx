import React from 'react';
import './Comp2.css';

const Comp2: React.FC = () => {
  return (
    <div className="padding-global no-padding-right">
      <div className="container-large">
        <div className="padding-section-medium">
          <div className="value1_component">
            <div className="value1_title-wrapper">
              <div className="text-align-center">
                <div>
                  <div className="margin-bottom margin-medium">
                    <div className="section-tagline is-blue">At-home Immunotherapy</div>
                  </div>
                  <div className="margin-bottom margin-small">
                    <h2>Benefits of Curex<br /></h2>
                  </div>
                  <div className="margin-bottom margin-medium"></div>
                </div>
              </div>
            </div>
            <div className="value1_list no-scrollbar">
              <div className="value1_item">
                <div className="value1_item-icon-wrapper">
                  <div className="icon-decor4 w-embed">
                    <img src="/icons/green_cloud.png" style={{objectFit:"cover"}} alt="At-home treatment icon" />
                  </div>
                </div>
                <h3>At-home treatment</h3>
                <div>Apply treatments in minutes from the comfort of your own home with under-the-tongue applications instead of shots or pills</div>
              </div>

              <div className="value1_item">
                <div className="value1_item-icon-wrapper">
                  <div className="icon-decor5 text-color-pink w-embed">
                    <img src="/icons/pink_spring.png" style={{objectFit:"cover"}} alt="Higher dose icon" />
                  </div>
                </div>
                <h3>5-30x higher cumulative dose vs allergy shots</h3>
                <div>Sublingual immunotherapy delivers a higher dose of allergens over the course of treatment.</div>
              </div>

              <div className="value1_item">
                <div className="value1_item-icon-wrapper">
                  <div className="icon-decor2 text-color-blue w-embed">
                    <img src="/icons/blue_flower.png" style={{objectFit:"cover"}} alt="Quick results icon" />
                  </div>
                </div>
                <h3>Potential for results in as few as 6 months</h3>
                <div>Individual results vary but some users have reported a noticeable difference in as few as 6-12 months since starting treatments</div>
              </div>

              <div className="value1_item">
                <div className="value1_item-icon-wrapper">
                  <div className="icon-decor5 text-color-lightblue w-embed">
                    <img src="/icons/blue_spring.png" style={{objectFit:"cover"}} alt="Safety profile icon" />
                  </div>
                </div>
                <h3>Excellent safety profile</h3>
                <div>Studies that have been reviewed by certified physicians show that sublingual immunotherapy is a safe treatment option</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comp2;
