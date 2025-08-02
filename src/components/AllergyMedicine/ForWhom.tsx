import React from 'react';
import './ForWhom.css';

const ForWhom: React.FC = () => {
  return (
    <section className="for-whom">
      <div className="for-whom-container">
        {/* Main Title */}
        <h1 className="for-whom-title">
          Finding the Right Fit for Your Allergy Relief
        </h1>
        
        <div className="for-whom-subtitle">
          <p className="subtitle-text">
            The world of allergy medications is vast and varied, offering solutions for adults, children, and those with asthma. While OTC medicines 
            provide immediate relief, long-term solutions like immunotherapy can offer lasting benefits. It's always advisable to consult with a 
            healthcare professional to match the treatment to your specific needs and conditions, ensuring safe and effective allergy 
            management. Remember, you don't have to suffer in silence. With the right medication, you can take control of your allergies and enjoy a 
            symptom-free life.
          </p>
        </div>
        
        {/* Three Column Grid */}
        <div className="for-whom-grid">
          {/* For Adults Column */}
          <div className="for-whom-card">
            <div className="card-icon adults-icon">
              <svg viewBox="0 0 24 24" fill="none" className="icon-svg">
                <circle cx="12" cy="6" r="4" stroke="currentColor" strokeWidth="2"/>
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="card-title">For Adults: Combating Allergy Symptoms</h3>
            <p className="card-description">
              Adults have a variety of options to choose from when it comes to allergy medications. The most common ones are antihistamines, which are effective in relieving symptoms like sneezing, itching, and that annoying runny nose. Over-the-counter options like loratadine, fexofenadine, and cetirizine can provide temporary relief, but long-term use is not recommended due to potential side effects such as drowsiness and blood pressure.
            </p>
            <p className="card-description">
              Nasal corticosteroids, such as fluticasone and budesonide, are another effective option for nasal symptoms. They're safe for long-term use and can provide significant relief. And for those dealing with itchy, watery eyes containing antihistamines or mast cell stabilizers can bring welcome relief.
            </p>
          </div>

          {/* For Children Column */}
          <div className="for-whom-card">
            <div className="card-icon children-icon">
              <svg viewBox="0 0 24 24" fill="none" className="icon-svg">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z" fill="currentColor"/>
                <path d="M12 7C13.1 7 14 7.9 14 9S13.1 11 12 11S10 10.1 10 9S10.9 7 12 7Z" fill="currentColor"/>
                <path d="M12 13C14.21 13 16 14.79 16 17V22H8V17C8 14.79 9.79 13 12 13Z" fill="currentColor"/>
              </svg>
            </div>
            <h3 className="card-title">For Children: Safe and Effective Allergy Solutions</h3>
            <p className="card-description">
              When it comes to kids, safety and efficacy are top priorities. Pediatricians often recommend second-generation antihistamines like cetirizine and loratadine because they have fewer drowsiness than first-generation antihistamines. Dosages are also lower and specified based on the child's weight and age, ensuring precise and effective medication.
            </p>
            <p className="card-description">
              It's always best to consult a pediatric before starting any allergy medication for children, as some OTC medications are not recommended for young kids. Parents should also be aware of the potential side effects of first-generation antihistamines like diphenhydramine in children.
            </p>
          </div>

          {/* For People with Asthma Column */}
          <div className="for-whom-card">
            <div className="card-icon asthma-icon">
              <svg viewBox="0 0 24 24" fill="none" className="icon-svg">
                <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 12C21 16.97 16.97 21 12 21S3 16.97 3 12S7.03 3 12 3S21 7.03 21 12Z" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="card-title">For People with Asthma: Managing Both Allergies and Asthma</h3>
            <p className="card-description">
              Allergies and asthma often go hand in hand, making medication selection crucial. Leukotriene receptor antagonists, like montelukast, can be particularly effective for people with both asthma and allergies. They work by blocking the action of leukotrienes, substances in the body that cause allergy and asthma symptoms. It's essential for asthmatics to work closely with their healthcare provider to manage both conditions effectively.
            </p>
            <p className="card-description">
              Inhaled corticosteroids are commonly prescribed for asthma but may also help with allergic conditions when used in conjunction with allergy medications to manage asthma symptoms. It's essential for asthmatics to work closely with their healthcare provider to manage both conditions effectively.
            </p>
          </div>
        </div>
        
        {/* Other Options Section */}
        <div className="other-options">
          <div className="other-options-icon">
            <svg viewBox="0 0 24 24" fill="none" className="icon-svg">
              <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="currentColor"/>
            </svg>
          </div>
          <h3 className="other-options-title">Other Options to Consider</h3>
          <p className="other-options-description">
            Immunotherapy, available as allergy shots, sublingual tablets or allergy drops, is an effective long-term treatment. Shots, although allergist administered, can help build up tolerance. This long-term treatment can be effective but requires commitment and regular doctor visits.
          </p>
          <p className="other-options-description">
            Natural remedies, such as saline nasal sprays and washes, can help with symptom management without the side effects of medication. However, these should be used in conjunction with, not as a replacement for, medical treatment, especially in severe cases.
          </p>
        </div>

        {/* NEW SECTION - Pink Bottom Section */}
        <div className="bottom-section">
          <div className="bottom-content">
            <div className="bottom-icon">
              <svg viewBox="0 0 24 24" fill="none" className="icon-svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="2" fill="currentColor"/>
              </svg>
            </div>
            <div className="bottom-text">
              <p className="bottom-description">
                These are just a few examples of how allergy medications can vary based on age and other health conditions. Whether you're 
                an adult dealing with seasonal allergies, a parent seeking safe treatment for your child, or someone managing both allergies 
                and asthma, there's a solution out there for you. The key is finding the right fit with the guidance of a healthcare professional 
                who can tailor the treatment to your specific needs and ensure that you're getting the most effective and safest care possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhom;
