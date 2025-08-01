import './pricingComponent1.css';

const PricingComponent1 = () => {
  return (
    <section className="pricing-component1">
      <div className="pricing-container">
        <div className="pricing-content">
          <div className="pricing-text">
            <h2 className="pricing-title">The most affordable allergy drops</h2>
            <p className="pricing-description">
              As America's #1 Online Allergy Clinic, we can offer 
              you the best price on allergy immunotherapy drops.
            </p>
            <p className="pricing-offer">
              Start today for only <span className="price-highlight">$4.99</span> (normally $49). You can 
              cancel anytime.
            </p>
            <button className="eligibility-button">Am I eligible?</button>
          </div>
          
          <div className="pricing-card">
            <div className="pricing-item">
              <div className="pricing-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <span className="pricing-service">Sign up</span>
              <div className="pricing-cost">
                <span className="original-price">$49</span>
                <span className="discounted-price">$4.99</span>
              </div>
            </div>
            
            <div className="pricing-item">
              <div className="pricing-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <span className="pricing-service">Allergy Drops Treatment</span>
              <span className="pricing-cost">From $59 / Month</span>
            </div>
            
            <div className="pricing-item">
              <div className="pricing-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <span className="pricing-service">Online Doctor Consults</span>
              <span className="pricing-cost">Billed to insurance</span>
            </div>
            
            <div className="pricing-item">
              <div className="pricing-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M13 11h4a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M5 11V7a7 7 0 0 1 14 0v4" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <span className="pricing-service">Allergy Testing</span>
              <span className="pricing-cost">Billed to insurance</span>
            </div>
          </div>
        </div>
        
        <div className="insurance-note">
          <a href="#" className="insurance-link">
            High deductible plan? No insurance? No problem!
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingComponent1;
