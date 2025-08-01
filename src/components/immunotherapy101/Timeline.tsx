
import './Timeline.css';

const Timeline = () => {
  return (
    <div className="timeline-container" id='timeline'>
      <h1 className="timeline-title">Timeline of Allergy Immunotherapy</h1>
      
      <div className="intro-text">
        <p>
          First step for allergy immunotherapy to determine your allergies- either using pre-
          existing allergy test results or an at-home allergy test through Curex.
        </p>
        
        <p>
          Once we have your allergy test results, you will meet with a Curex clinician to 
          customize the treatment based on your needs. Your treatment will be shipped to 
          you quarterly.
        </p>
      </div>

      <div className="timeline-visual">
        <div className="timeline-line">
          <div className="timeline-dot timeline-dot-start"></div>
          <div className="timeline-dot timeline-dot-end"></div>
        </div>
      </div>

      <div className="timeline-cards">
        <div className="timeline-card">
          <h3 className="card-title">Months 1-5</h3>
          <p className="card-content">
            During the first several months the goal is to introduce the allergens to your body. Apply the treatment daily under the tongue.
          </p>
          <div className="card-footer">
            <span className="footer-text">Already have </span>
            <span className="footer-link">allergy test results</span>
            <span className="footer-text">? No problem, start with quiz and select the </span>
            <span className="footer-link">Treatment Consultation</span>
            <span className="footer-text"> option.</span>
          </div>
        </div>

        <div className="timeline-card">
          <h3 className="card-title">Months 6-12</h3>
          <p className="card-content">
            Most patients start seeing improvements before the end of their first year. In some cases, people start experiencing significant improvement in their symptoms earlier.
          </p>
          <div className="card-footer">
            <span className="footer-text">Already have allergy test results? No problem, start with quiz and select the </span>
            <span className="footer-link">Treatment Consultation</span>
            <span className="footer-text"> option.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;