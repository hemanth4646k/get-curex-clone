import React from 'react';
import './Immuno101Testimonials.css';

const Immuno101Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Allie, Nevada",
      nameColor: "green",
      quote: "I have two cats I can finally cuddle!",
      allergyTypes: ["Cat and dog allergies"],
      icons: ["🐱", "🐶"]
    },
    {
      id: 2,
      name: "Zachary, Texas",
      nameColor: "yellow",
      quote: "I can breathe through my nose for the first time in like 20 years!",
      allergyTypes: ["Dust and mold allergies"],
      icons: ["🌪️", "🦠"]
    },
    {
      id: 3,
      name: "Erika, New York",
      nameColor: "blue",
      quote: "I've noticed less sneezing and shortness of breath.",
      allergyTypes: ["Tree and grass allergies"],
      icons: ["🌳", "🌿"]
    },
    {
      id: 4,
      name: "Richard, Texas",
      nameColor: "pink",
      quote: "I love the convenience!",
      allergyTypes: ["Tree and cat allergies"],
      icons: ["🌳", "🐱"]
    }
  ];

  const renderStars = () => {
    return (
      <div className="immuno-testimonials-stars">
        {[...Array(5)].map((_, index) => (
          <span key={index} className="immuno-testimonials-star">★</span>
        ))}
      </div>
    );
  };

  return (
    <div className="immuno-testimonials-section">
      <div className="immuno-testimonials-container">
        <div className="immuno-testimonials-header">
          <div className="immuno-testimonials-badge">HAPPY CUSTOMERS</div>
          <h2 className="immuno-testimonials-title">We love helping people!</h2>
        </div>

        <div className="immuno-testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="immuno-testimonials-card">
              <div className="immuno-testimonials-avatar-section">
                <div className="immuno-testimonials-avatar">
                  <img 
                    className="immuno-testimonials-avatar-image" 
                    alt={`${testimonial.name} profile photo`}
                  />
                </div>
                <div className={`immuno-testimonials-name-tag ${testimonial.nameColor}`}>
                  {testimonial.name}
                </div>
              </div>

              {renderStars()}

              <blockquote className="immuno-testimonials-quote">
                "{testimonial.quote}"
              </blockquote>

              <div className="immuno-testimonials-divider"></div>

              <div className="immuno-testimonials-allergies">
                <div className="immuno-testimonials-allergy-icons">
                  {testimonial.icons.map((icon, index) => (
                    <span key={index} className="immuno-testimonials-icon">
                      {icon}
                    </span>
                  ))}
                </div>
                <div className="immuno-testimonials-allergy-text">
                  {testimonial.allergyTypes.join(", ")}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="immuno-testimonials-cta">
          <button className="immuno-testimonials-cta-button">
            Take the Free Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default Immuno101Testimonials;