import React from 'react';
import './NectarReviews.css';
const Nectar2: React.FC = () => {
  return (
    <section className="nectar2" id="nectar-allergy">
      <div className="nectar2-container">
        <div className="nectar2-grid">
          {/* Expert Specialized Card */}
          <div className="nectar2-card">
            <div className="nectar2-icon green">
              <svg viewBox="0 0 24 24" fill="none" className="nectar2-icon-svg">
                <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor"/>
              </svg>
            </div>
            <h3 className="nectar2-card-title">Expert Specialized</h3>
            <p className="nectar2-card-text">
              Curex has the largest clinical team to serve all of our patients with care and personalized attention. 
              With board-certified allergists and medical professionals specializing in allergy & immunology, our 
              expert providers are able to fully understand the extent of your allergies and recommend treatments 
              that can treat them at the source. Another benefit of choosing Curex is the ability to reach your 
              provider anytime you need via text, email, or phone. Questions about your treatment? Your assigned 
              Curex provider is always a tap away!
            </p>
          </div>

          {/* Curex Accepts Insurance Card */}
          <div className="nectar2-card">
            <div className="nectar2-icon pink">
              <svg viewBox="0 0 24 24" fill="none" className="nectar2-icon-svg">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 6.5C15.5 7.4 16 8.5 16 9.5V11C16 13.2 14.2 15 12 15S8 13.2 8 11V9.5C8 8.5 8.5 7.4 9 6.5L3 7V9H5V19C5 20.1 5.9 21 7 21H17C18.1 21 19 20.1 19 19V9H21Z" fill="currentColor"/>
              </svg>
            </div>
            <h3 className="nectar2-card-title">Curex Accepts Insurance</h3>
            <p className="nectar2-card-text">
              With a growing network of insurance providers, Curex is the first online allergy clinic helping 
              patients save money on their treatment. We have the most affordable immunotherapy options 
              available in the market today as we try to make allergy care more accessible in the United States.
            </p>
          </div>

          {/* Our Mission Card */}
          <div className="nectar2-card">
            <div className="nectar2-icon blue">
              <svg viewBox="0 0 24 24" fill="none" className="nectar2-icon-svg">
                <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" fill="currentColor"/>
              </svg>
            </div>
            <h3 className="nectar2-card-title">Our Mission</h3>
            <p className="nectar2-card-text">
              We are not just another allergy clinic. Our goal since day one has been providing exceptional 
              allergy care and making immunotherapy more accessible and convenient than ever. If you've 
              tried shots or considered them, Curex will provide a much superior experience that is a lot 
              more convenient than shots.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
const CurexVsNectar: React.FC = () => {
  return (
    <section className="curex-vs-nectar">
      <div className="comparison-container">
        {/* Title */}
        <h1 className="comparison-title">
          Curex vs Nectar
        </h1>
        
        {/* Content Paragraphs */}
        <div className="comparison-content">
          <p className="comparison-paragraph">
            Curex and Nectar Allergy both provide sublingual allergy drops, an effective and user-friendly alternative to traditional allergy shots. However, when choosing between the two, it's important to consider several crucial differences in their services.
          </p>
          
          <p className="comparison-paragraph">
            Curex stands out for its affordability and the inclusion of insurance coverage, making it a more accessible option for a broader range of patients. Curex's pricing is transparent, with treatments offered at a consistent monthly rate that includes the support of medical professionals. In contrast, Nectar Allergy does not accept insurance, which can significantly increase the out-of-pocket cost for patients and limit accessibility.
          </p>
          
          <p className="comparison-paragraph">
            One of Curex's major advantages is its team of real medical professionals, including allergists and a full clinical team who oversee the treatment process. This ensures that patients receive care that is not only based on test results but also on expert medical opinions. Nectar Allergy, while offering quality treatment options, may not provide the same level of professional healthcare oversight, which can impact the customization and effectiveness of the treatment.
          </p>
          
          <p className="comparison-paragraph">
            For patients looking for a cost-effective, professionally supervised allergy treatment plan that also leverages insurance benefits, Curex clearly provides a superior option compared to Nectar Allergy.
          </p>
        </div>
      </div>
    </section>
  );
};

const NectarReviews: React.FC = () => {
  return (
    <div>
    <section className="nectar-reviews">
      <div className="nectar-container">
        {/* Title */}
        <h1 className="nectar-title">
          Nectar Allergy Reviews
        </h1>
        
        {/* Hero Image Section */}
        <div className="nectar-hero">
          <img 
            src="" 
            alt="Nectar allergy product boxes stacked on wooden surface with white background" 
            className="nectar-hero-image"
          />
        </div>
        
        {/* Content Paragraphs */}
        <div className="nectar-content">
          <p className="nectar-paragraph">
            Both Curex and Nectar Allergy offer the convenience of allergy drops from the comfort of your home, 
            eliminating the time typically spent at doctor's offices. However, when it comes to choosing the right allergy 
            relief solution, Curex emerges as number one due to several factors.
          </p>
        </div>
      </div>
    </section>
    <Nectar2/>
    <CurexVsNectar/>
    </div>
  );
};

export default NectarReviews;
