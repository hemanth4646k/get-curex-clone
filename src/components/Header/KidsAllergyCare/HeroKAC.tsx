import { Link } from "react-router-dom";
import Hero from "../../../common/ui/Hero";

function HeroKAC() {
  return (
    <div style={{ padding: "2rem 4rem" }}>
      <Hero
        heading="#1 Pediatrician-Approved Alternative to Allergy Shots"
        subtitle="Control your child's allergies without the hassle of shots."
        ctaText="Take out Free quiz"
        imageSrc="/YellowSyringes.avif"
      />
      <KidsTestimonials />
    </div>
  );
}

export function KidsTestimonials() {
  return (
    <div className="section_testimonials2">
      <div className="padding-global">
        <div className="container-medium">
          <div className="padding-section-medium">
            <div className="testimonials-grid_wrapper" style={{ display: 'flex', flexDirection: 'column' }}>
              {/* Main testimonials grid */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {/* Left column with image */}
                <div className="curexwyndly-testimonials_content-left-wrapper" style={{ flex: '1', minWidth: '250px' }}>
                  <div className="curexwyndly-testimonials_image1-wrapper" style={{ position: 'relative' }}>
                    <img 
                      src="/componentimages/home/home7.png" 
                      alt="Person with Curex box" 
                      style={{ width: '100%', borderRadius: '8px' }}
                      className="curexwyndly-testimonials_image1"
                    />
                  </div>
                </div>
                
                {/* Center column with testimonials */}
                <div className="curexwyndly-testimonials_content-centre-wrapper" style={{ flex: '2', minWidth: '300px' }}>
                  {/* Top row testimonials */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', marginBottom: '15px' }}>
                    {/* Blue testimonial */}
                    <div className="curexwyndly-testimonials_item1" style={{ 
                      flex: '1', 
                      backgroundColor: '#a7e3ffff', 
                      padding: '20px',
                      borderRadius: '8px',
                      minWidth: '250px',
                      position: 'relative'
                    }}>
                      <div className="box-card-label-wrapper" style={{ marginBottom: '10px' }}>
                        <div style={{ 
                          backgroundColor: '#FFF176', 
                          display: 'inline-block',
                          padding: '5px 15px',
                          borderRadius: '4px',
                          fontWeight: '500'
                        }}>
                          <p className="curexshots4-testimonials_customer-name">Tiffany</p>
                        </div>
                      </div>
                      <p className="curexwyndly-testimonials_review" style={{ fontSize: '14px' }}>
                        "Curex has greatly improved my daughters allergies and asthma... The process and care team has been to work wtih. After a year on CUREX there is a big improvement... Im looking forward to seeing what results she'll have in another year of using the drops. Now that I have an HSA, I'M going to also sign myself up and see if I can get rid of my year round allergies and puffy eyes!"
                      </p>
                    </div>
                    
                    {/* Pink testimonial */}
                    <div className="curexwyndly-testimonials_item1 is-pink" style={{ 
                      flex: '1', 
                      backgroundColor: '#f3a7ffff', 
                      padding: '20px',
                      borderRadius: '8px',
                      minWidth: '250px'
                    }}>
                      <div className="box-card-label-wrapper" style={{ marginBottom: '10px' }}>
                        <div style={{ 
                          backgroundColor: '#FFF176', 
                          display: 'inline-block',
                          padding: '5px 15px',
                          borderRadius: '4px',
                          fontWeight: '500'
                        }}>
                          <p className="curexshots4-testimonials_customer-name">Helen</p>
                        </div>
                      </div>
                      <p className="curexwyndly-testimonials_review" style={{ fontSize: '14px' }}>
                        My son has been using these drops for two years. It's been life changing. He no longer has to take allergy medication everyday and can enjoy being a kid outside without itching the whole time!
                      </p>
                    </div>
                  </div>
                  
                  {/* Bottom row testimonials */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                    {/* Yellow testimonial */}
                    <div className="curexwyndly-testimonials_item1 is-yellow" style={{ 
                      flex: '1', 
                      backgroundColor: '#FFF176', 
                      padding: '20px',
                      borderRadius: '8px',
                      minWidth: '250px'
                    }}>
                      <div className="box-card-label-wrapper" style={{ marginBottom: '10px' }}>
                        <div style={{ 
                          backgroundColor: '#f3a7ffff', 
                          display: 'inline-block',
                          padding: '5px 15px',
                          borderRadius: '4px',
                          fontWeight: '500'
                        }}>
                          <p className="curexshots4-testimonials_customer-name">Simone</p>
                        </div>
                      </div>
                      <p className="curexwyndly-testimonials_review" style={{ fontSize: '14px' }}>
                        "We have noticed an improvement with our son's allergies in just the 4 months we have started the program. Very easy and convenient to use."
                      </p>
                    </div>
                    
                    {/* Green testimonial */}
                    <div className="curexwyndly-testimonials_item1 is-green" style={{ 
                      flex: '1', 
                      backgroundColor: '#76f194ff', 
                      padding: '20px',
                      borderRadius: '8px',
                      minWidth: '250px',
                      position: 'relative'
                    }}>
                      <div className="box-card-label-wrapper" style={{ marginBottom: '10px' }}>
                        <div style={{ 
                          backgroundColor: '#f3a7ffff', 
                          display: 'inline-block',
                          padding: '5px 15px',
                          borderRadius: '4px',
                          fontWeight: '500'
                        }}>
                          <p className="curexshots4-testimonials_customer-name">CJ Morgan</p>
                        </div>
                      </div>
                      <p className="curexwyndly-testimonials_review" style={{ fontSize: '14px' }}>
                        "My kids and I were sick of the weekly allergy shot appointments... We actually were sitting in the waiting room on one of our weekly appointments when we saw an ad for Curex allergy drops!.. The drops are quick and easy - much better than getting poked every week. And the communication with Curex has been top notch. Overall a great experience for us the last few months!"
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Right column with image */}
                <div className="curexwyndly-testimonials_content-right-wrapper" style={{ flex: '1', minWidth: '250px' }}>
                  <div className="curexwyndly-testimonials_image2-wrapper" style={{ position: 'relative' }}>
                    <img 
                      src="/componentimages/home/home10.png" 
                      alt="Person using allergy drops" 
                      style={{ width: '100%', borderRadius: '8px' }}
                      className="curexwyndly-testimonials_image1"
                    />
                  </div>
                </div>
              </div>
              
              {/* Button section */}
              <div className="testimonials2_button-wrapper" style={{ 
                display: 'flex', 
                justifyContent: 'center',
                marginTop: '30px'
              }}>
                <Link to="/reviews" className="button is-link" style={{
                  backgroundColor: 'transparent',
                  color: '#fd1ebeff',
                  textDecoration: 'underline',
                  fontWeight: '500',
                  fontSize: '16px',
                  padding: '10px 20px',
                  border: 'none',
                  cursor: 'pointer'
                }}>Read More Verified Reviews</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroKAC;
