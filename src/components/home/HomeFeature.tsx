import './homeFeature.css';

const HomeFeature = () => {
  return (
    <section className="home-feature">
      <div className="home-feature-container">
        <div className="home-feature-content">
          <div className="home-feature-image">
            <img 
              src="/componentimages/home/home4.png" 
              alt="Woman using allergy drops" 
              className="feature-image"
            />
          </div>
          <div className="home-feature-text">
            <h2 className="home-feature-title">
              Easier than brushing your teeth
            </h2>
            <p className="home-feature-description">
              Allergy drops contain clinical allergenic extracts to desensitize 
              your immune system over time, just like allergy shots.
            </p>
            <p className="home-feature-instruction">
              Simply place them under your tongue for 2 minutes a day and 
              start seeing relief in as little as 3-6 months!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFeature;
