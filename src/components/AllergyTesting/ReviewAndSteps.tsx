import React from 'react';
import './ReviewAndSteps.css';

const ReviewsAndSteps: React.FC = () => {
  return (
    <section className="reviews-and-steps">
      <div className="reviews-and-steps-container">
        {/* Reviews Section */}
        <div className="reviews-section">
          <h2 className="reviews-title">Reviews</h2>
          
          <div className="reviews-grid">
            {/* Review 1 - Walter Berestein */}
            <div className="review-card">
              <div className="reviewer-name">Walter Berestein</div>
              <div className="star-rating">
                <span className="stars">★★★★★</span>
              </div>
              <p className="review-text">
                The testing process was incredibly easy and reasonably priced.
              </p>
            </div>

            {/* Review 2 - Valentina Vasquez */}
            <div className="review-card">
              <div className="reviewer-name">Valentina Vasquez</div>
              <div className="star-rating">
                <span className="stars">★★★★★</span>
              </div>
              <p className="review-text">
                Allergy treatment made easy the way it should be. Testing done at home with a drop of blood... Not the torture skin test I've endured before.
              </p>
            </div>

            {/* Review 3 - Tamerah Jones */}
            <div className="review-card">
              <div className="reviewer-name">Tamerah Jones</div>
              <div className="star-rating">
                <span className="stars">★★★★★</span>
              </div>
              <p className="review-text">
                Curex is an amazing alternative to in-person allergy care. I waited weeks for an appointment and had to deal with multiple incorrect allergy tests before giving up and going to Curex.
              </p>
            </div>

            {/* Review 4 - Zoe Vahlberg */}
            <div className="review-card">
              <div className="reviewer-name">Zoe Vahlberg</div>
              <div className="star-rating">
                <span className="stars">★★★★★</span>
              </div>
              <p className="review-text">
                So grateful to have found this company. From a simple blood test they were able to work out a plan for me.
              </p>
            </div>
          </div>
        </div>

        {/* Steps Section */}
        <div className="steps-section">
          <h2 className="steps-title">Steps</h2>
          <p className="steps-subtitle">
            Three easy steps to getting a natural, proven treatment delivered to your door!
          </p>
          
          <div className="steps-grid">
            {/* Step 1 */}
            <div className="step-card">
              <div className="step-image">
                <img 
                  src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/652e8cfbb1b80741ea039757_Rectangle%201942-p-500.webp" 
                  alt="Curex test kit box with dropper bottle on yellow background" 
                  className="step-image-img"
                />
              </div>
              <div className="step-content">
                <div className="step-number">1</div>
                <h3 className="step-title">Start with a free quiz to get your test order</h3>
              </div>
            </div>

            {/* Step 2 */}
            <div className="step-card">
              <div className="step-image">
                <img 
                  src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/63d28d24ba70d63f87bb63a3_how-it-works-1.webp" 
                  alt="Medical professional conducting allergy test with patient" 
                  className="step-image-img"
                />
              </div>
              <div className="step-content">
                <div className="step-number">2</div>
                <h3 className="step-title">Schedule your allergy test</h3>
              </div>
            </div>

            {/* Step 3 */}
            <div className="step-card">
              <div className="step-image">
                <img 
                  src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/62273a13cb6d641444cc5420_61ed4dc36e7fdbb8f5dc50e0_61dfcdfb4274b06facf162f9_61dd1468389f23dc971cfaf3_Curex-1198_50%402x.jpg" 
                  alt="Person holding customized treatment formula bottles with smile" 
                  className="step-image-img"
                />
              </div>
              <div className="step-content">
                <div className="step-number">3</div>
                <h3 className="step-title">Get a customized treatment formula for your specific allergens</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsAndSteps;
