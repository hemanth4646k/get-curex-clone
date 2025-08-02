import React from 'react';
import './ForKids.css';

const ForKids: React.FC = () => {
  return (
    <section className="for-kids">
      <div className="for-kids-container" id='Allergy-Medicine-for-Kids'>
        {/* Header Section */}
        <div className="for-kids-header">
          <h1 className="for-kids-title">
            Allergy Medicine for Kids
          </h1>
          <p className="for-kids-subtitle">
            When it comes to allergy medicine for kids, it's important to choose products that are specifically 
            formulated for their age group. Some common options include
          </p>
        </div>
        
        {/* Three Column Grid */}
        <div className="for-kids-grid">
          {/* Cetirizine/Loratadine Column */}
          <div className="for-kids-card">
            <div className="card-image">
              <img 
                src="" 
                alt="Children's Zyrtec allergy medication box - green package with cartoon character" 
                className="card-image-img"
              />
            </div>
            <h3 className="card-title">
              Cetirizine (Zyrtec) or Loratadine (Claritin)
            </h3>
            <p className="card-description">
              These are often available in children's formulations and can help with allergy 
              symptoms like sneezing, itching, and runny nose.
            </p>
          </div>

          {/* Diphenhydramine Column */}
          <div className="for-kids-card">
            <div className="card-image">
              <img 
                src="" 
                alt="Benadryl Allergy medication - pink package with diphenhydramine HCI" 
                className="card-image-img"
              />
            </div>
            <h3 className="card-title">
              Diphenhydramine (Benadryl)
            </h3>
            <p className="card-description">
              While it can be effective, it might cause drowsiness, so it's often used at bedtime. 
              There are also non-drowsy options available.
            </p>
          </div>

          {/* Nasal Corticosteroid Sprays Column */}
          <div className="for-kids-card">
            <div className="card-image">
              <img 
                src="" 
                alt="Woman using nasal spray - profile view showing proper nasal spray technique" 
                className="card-image-img"
              />
            </div>
            <h3 className="card-title">
              Nasal Corticosteroid Sprays
            </h3>
            <p className="card-description">
              Some nasal sprays, like fluticasone (Flonase) for children, can be prescribed 
              to help with nasal congestion and other allergy symptoms.
            </p>
          </div>
        </div>
        
        {/* Bottom Content Section */}
        <div className="for-kids-bottom-content">
          <p className="bottom-description">
            Curex understands the unique needs of children with allergies and offers a specialized approach to provide reliable relief. While various 
            allergy medications are available, including antihistamines and nasal sprays, Curex stands out with its sublingual immunotherapy 
            tailored for kids. Through online consultations, our personalized treatment plans ensure that the specific triggers and symptoms are 
            addressed. Sublingual immunotherapy involves placing allergen extracts under the tongue, offering a natural and gradual 
            desensitization of the immune system. The convenience of self-administered sublingual drops at home makes it a practical choice for 
            parents and children alike. Choose Curex for its commitment to the well-being of your child, providing a safe, effective, and long-term 
            solution for allergy relief. Contact us for a consultation and give your child the relief they deserve with our child-friendly sublingual 
            immunotherapy.
          </p>
          
          {/* CTA Button */}
          <div className="for-kids-cta">
            <button className="for-kids-button">
              Allergy Relief for Kids
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForKids;
