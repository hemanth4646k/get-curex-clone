
import './hero.css';

function Immunotherapy101() {
  return (
    <div className="immunotherapy-101-container">
      <div className="immunotherapy-101-content">
        <div className="immunotherapy-101-left-section">
          <div className="immunotherapy-101-logo">
            <svg className="immunotherapy-101-logo-icon" viewBox="0 0 100 50">
              <path d="M15 25 Q25 10, 35 25 Q45 40, 55 25" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
              <path d="M45 25 Q55 10, 65 25 Q75 40, 85 25" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
            </svg>
          </div>
          
          <h1 className="immunotherapy-101-title">Immunotherapy 101</h1>
          
          <p className="immunotherapy-101-subtitle">
            All you need to know about allergy immunotherapy, simplified.
          </p>
          
          <button className="immunotherapy-101-cta-button">
            Take the Free Quiz
          </button>
        </div>
        
        <div className="immunotherapy-101-right-section">
          <div className="immunotherapy-101-image-container">
            <img 
              src='https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/6285164f77bde724f7eeba58_Curex-2461%20(1)-p-2000.jpeg'
              className="immunotherapy-101-image" 
              alt="Woman working on laptop with green background"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Immunotherapy101;