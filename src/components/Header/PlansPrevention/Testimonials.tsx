import React from 'react';
import './Testimonials.css';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Robert S.",
      review: "The treatment is much less expensive than a course of allergy shots at a doctor's office and eliminates numerous trips to the doctor's and all the waiting time.",
      stars: 5
    },
    {
      name: "Lauren S.", 
      review: "No longer having to go the doctor's office a few times a week for painful shots.",
      stars: 5
    },
    {
      name: "Tony P.",
      review: "I have done allergy shots in the past but found it pretty inconvenient to go every week. I really like the ease as compared with physically going to the doctors office.",
      stars: 5
    },
    {
      name: "Janie L.",
      review: "My seasonal allergies were much less severe than years prior. Most importantly, the convenience of taking drops in my own home is unbeatable.",
      stars: 5
    }
  ];

  const renderStars = (count: number) => {
    return Array.from({ length: count }, (_, i) => (
      <span key={i} className="star">★</span>
    ));
  };

  return (
    <section className="section_testimonials2">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-medium">
            <div className="margin-bottom margin-huge">
              <div className="text-align-center">
                <div className="max-width-large align-center">
                  <div className="margin-bottom margin-xxsmall">
                    <div className="section-tagline is-blue">What people say</div>
                  </div>
                  <h2>More than 50,000 Allergy Sufferers Love Curex</h2>
                </div>
              </div>
            </div>
            
            <div className="testimonials2_component">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonials2_item">
                  <div className="card-image-with-tag">
                    <div className="testimonials2_tag-wrapper">
                      <div className="box-card-label-wrapper no-margin">
                        <p className="testimonials2_customer-name">{testimonial.name}</p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="testimonials_review">{testimonial.review}</p>
                  
                  <div className="testimonials2_stars">
                    {renderStars(testimonial.stars)}
                  </div>
                  
                  <div className="testimonials2_meta-wrapper">
                    <p className="testimonials2_meta-text">Reviewed on</p>
                    <div className="google-logo-placeholder">[Google Logo]</div>
                  </div>
                  
                  <div className="testimonials2_quote-icon">"</div>
                </div>
              ))}
            </div>
            
            <div className="testimonials2_button-wrapper">
              <a href="/reviews" className="button is-link">Read More Verified Reviews</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
