import React from 'react';
import './hero.css';
import Hero from '../../common/ui/Hero';

const AllergyDropsHero: React.FC = () => {
  return (
    // <div className="allergy-drops-container">
    //   <div className="content-wrapper">
    //     <div className="text-content">
    //       <h1 className="main-heading">
    //         Allergy Drops: Cost<br />
    //         & Benefits
    //       </h1>
    //       <p className="subtitle">
    //         Learn about allergy drops as an alternative to allergy shots.
    //       </p>
    //       <button className="cta-button">
    //         Start with a free quiz
    //       </button>
          
    //       <div className="info-cards">
    //         <div className="info-card clinic-card">
    //           <div className="card-icon">
    //             <div className="bar-chart">
    //               <div className="bar bar-1"></div>
    //               <div className="bar bar-2"></div>
    //               <div className="bar bar-3"></div>
    //             </div>
    //           </div>
    //           <div className="card-text">
    //             <span className="card-number">#1</span>
    //             <span className="card-label">Online<br />Allergy Clinic</span>
    //           </div>
    //         </div>
            
    //         <div className="info-card users-card">
    //           <div className="card-icon">
    //             <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/64be9b906187686e97a89913_image%20114.webp" alt="Happy users" className="users-image" />
    //           </div>
    //           <div className="card-text">
    //             <span className="card-number">50,000+</span>
    //             <span className="card-label">users</span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
        
    //     <div className="image-content">
    //       <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/652e8cfbb1b80741ea039757_Rectangle%201942-p-1080.webp" alt="Allergy drops package" className="package-image" />
    //         <div className="decorative-circles">
    //           <div className="circle circle-1"></div>
    //           <div className="circle circle-2"></div>
    //           <div className="circle circle-3"></div>
    //         </div>
    //     </div>
    //   </div>
    // </div>
    <div>
      <Hero heading="Allergy Drops: Cost & Benefits"
            subtitle="Learn about allergy drops as an alternative to allergy shots."
            ctaText="Start with a free quiz"
            imageSrc="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/652e8cfbb1b80741ea039757_Rectangle%201942-p-1080.webp"
            imageAlt="Allergy drops package"
            onCtaClick={() => window.location.href = '/quiz'}/>
    </div>
  );
};

export default AllergyDropsHero;
