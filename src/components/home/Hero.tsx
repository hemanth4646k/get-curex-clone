
import './hero.css';

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        {/* Left side - Text and CTA */}
        <div className="hero-left">
          <h1 className="hero-title">Goodbye Allergies!</h1>
          <p className="hero-subtitle">
            Curex is the easiest way to treat allergies at home without allergy shots.
          </p>
          
          <button className="hero-cta-button">Am I eligible?</button>
          
          {/* Stats Cards */}
          <div className="hero-stats">
            <div className="hero-stat-card">
              <div className="hero-stat-icon">
                <div className="hero-bar hero-bar-pink"></div>
                <div className="hero-bar hero-bar-gray"></div>
                <div className="hero-bar hero-bar-light-gray"></div>
              </div>
              <div className="hero-stat-text">
                <span className="hero-stat-number">#1</span>
                <span className="hero-stat-description">Online Allergy & Asthma Clinic</span>
              </div>
            </div>
            
            <div className="hero-stat-card">
              <div className="hero-stat-people">
                <img className="hero-person-image" alt="Happy user 1" />
                <img className="hero-person-image" alt="Happy user 2" />
                <img className="hero-person-image" alt="Happy user 3" />
              </div>
              <div className="hero-stat-text">
                <span className="hero-stat-number hero-stat-number-pink">50,000+</span>
                <span className="hero-stat-description hero-stat-description-pink">users</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right side - Hand with bottle */}
        <div className="hero-right">
          <div className="hero-image-container">
            <img className="hero-hand-image" alt="Hand holding Curex allergy treatment bottle" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;