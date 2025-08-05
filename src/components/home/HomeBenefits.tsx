import './homeBenefits.css';

const HomeBenefits = () => {
  return (
    <section className="home-benefits">
      <div className="home-benefits-container">
        <div className="home-benefits-content">
          <div className="home-benefits-text">
            <h2 className="home-benefits-title">
              Permanent Allergy Relief<br />
              Is Possible
            </h2>
            <p className="home-benefits-description">
              With prescription allergy drops, getting rid of allergies has never been easier.
            </p>
            
            <div className="home-benefits-list">
              <div className="home-benefits-item">
                <div className="home-benefits-checkmark">✓</div>
                <span className="home-benefits-item-text">
                  100% at-home treatment customized for you
                </span>
              </div>
              
              <div className="home-benefits-item">
                <div className="home-benefits-checkmark">✓</div>
                <span className="home-benefits-item-text">
                  Prescribed and supervised by clinicians
                </span>
              </div>
              
              <div className="home-benefits-item">
                <div className="home-benefits-checkmark">✓</div>
                <span className="home-benefits-item-text">
                  Lowest prices in the U.S.
                </span>
              </div>
            </div>
          </div>
          
          <div className="home-benefits-image">
            <img 
              src="/componentimages/home/home2.png" 
              alt="Curex allergy treatment package with 'Relief is here' message"
              className="home-benefits-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBenefits;
