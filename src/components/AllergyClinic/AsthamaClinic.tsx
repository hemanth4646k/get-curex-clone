
import './AsthamaClinic.css';
import './AllervieHealth.css';

const Part2: React.FC = () => {
  return (
    <section className="allervie-health">
      <div className="allervie-health-container" id='allergy-clinic-near-me'>
        {/* Title */}
        <h1 className="allervie-health-title">
          Allergy Clinic Near Me
        </h1>
        
        {/* Two Column Layout */}
        <div className="allervie-health-content">
          {/* Left Column - Image */}
          <div className="allervie-health-image-column">
            <img 
              src="" 
              alt="Allervie Health clinic building exterior with modern architecture, green roof trim, and storefront entrance" 
              className="allervie-health-building-image"
            />
          </div>
          
          {/* Right Column - Text Content */}
          <div className="allervie-health-text-column">
            <p className="allervie-health-paragraph">
              Curex is your local destination for comprehensive and convenient allergy care. Our sublingual immunotherapy offers a practical solution to manage allergies from the comfort of your home, eliminating the need for frequent visits to a traditional clinic.Curex ensures that effective allergy care is accessible and affordable for everyone, regardless of location. Say goodbye to the search for a local allergy clinic and hello to the comfort and convenience of Curex, serving all states and accepting all major insurance providers.
            </p>
            
            {/* CTA Button */}
            <div className="allervie-health-cta">
              <button className="allervie-health-button">
                Start a Free Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


const AsthmaClinic: React.FC = () => {
  return (
    <div>
    <section id="astma-allergy-clinic" className="asthma-clinic-section">
      <div className="asthma-clinic-container">
        <div className="asthma-clinic-grid">
          {/* Left Column - Text Content */}
          <div className="asthma-clinic-text-column">
            <div className="asthma-clinic-content">
              <div className="asthma-clinic-header">
                <h2 className="asthma-clinic-title">Asthma & Allergy Clinic</h2>
              </div>
              <div className="asthma-clinic-description">
                <p className="description-text">
                  At Curex, we specialize in sublingual immunotherapy, offering a seamless and 
                  effective solution for managing both allergies and asthma. Whether you seek 
                  expert medical guidance or a family-friendly approach to allergy and asthma 
                  relief, Curex is your trusted partner. Say goodbye to endless searches for an 
                  allergy and asthma clinic—experience the Curex advantage today and 
                  redefine your journey to personalized, convenient, and effective allergy and 
                  asthma care.
                </p>
              </div>
              <div className="asthma-clinic-cta">
                <a href="/quiz" target="_blank" className="asthma-clinic-button">
                  Start With A Free Quiz
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="asthma-clinic-image-column">
            <div className="asthma-clinic-image-wrapper">
              <img 
                src="" 
                alt="Hand reaching out to Curex allergy treatment kit" 
                className="asthma-clinic-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <Part2/>
    </div>
  );
};

export default AsthmaClinic;
