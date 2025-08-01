import './weightLossPricingComponent.css';

const WeightLossPricingComponent = () => {
  const benefits = [
    'No membership fees',
    'No commitment',
    'No upcharge for higher dosages',
    'No BS'
  ];

  return (
    <section className="weight-loss-pricing">
      <div className="weight-loss-pricing-container">
        <div className="pricing-content">
          <div className="pricing-image">
            <img 
              src="/src/assets/women-exercising.jpg" 
              alt="Two women exercising outdoors" 
              className="exercise-image"
            />
          </div>
          
          <div className="pricing-text">
            <h2 className="pricing-title">
              Finally, an online clinic with{' '}
              <span className="highlight-text">honest pricing</span>
            </h2>
            
            <p className="pricing-description">
              We need to talk about pricing. We know you have choices. 
              Unfortunately, many of those choice include deceptive pricing. More 
              often than not, it's almost impossible to figure out the true price of 
              semaglutide treatment. We believe you shouldn't have to read the fine 
              print. Our prices are honest and affordable:
            </p>
            
            <div className="benefits-list">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-item">
                  <div className="check-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path 
                        d="M20 6L9 17l-5-5" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="benefit-text">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="pricing-info">
              <p className="pricing-statement">
                What you see is what you pay. <span className="price-highlight">$95</span> for the first month and <span className="price-highlight">$299</span> per month thereafter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeightLossPricingComponent;
