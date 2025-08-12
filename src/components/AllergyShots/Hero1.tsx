import React from 'react';
import './Hero1.css';

interface Hero1Props {
  className?: string;
}

const Hero1: React.FC<Hero1Props> = ({ className = '' }) => {
  return (
    <section className={`hero-container ${className}`}>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Allergy Shots & Allergy Immunotherapy: A Comprehensive Guide
          </h1>
          
          <button className="quiz-button">
            Take the free quiz
          </button>
          
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-icon">
                <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/64be9b8f052089fb35eb989e_chart.svg" alt="Bar chart icon showing clinic ranking" />
              </div>
              <div className="stat-text">
                <span className="stat-number">#1 Online</span>
                <span className="stat-label">Allergy Clinic</span>
              </div>
            </div>
            
            <div className="stat-item">
              <div className="stat-avatars">
                <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/64be9b90ce56126260163aec_image%20116.webp" alt="User avatar 1" className="avatar" />
                <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/64be9b90ce56126260163aec_image%20116.webp" alt="User avatar 2" className="avatar" />
                <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/64be9b90ce56126260163aec_image%20116.webp" alt="User avatar 3" className="avatar" />
              </div>
              <div className="stat-text">
                <span className="stat-number">50,000+</span>
                <span className="stat-label">users</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero-image">
          <img 
            src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/655f33263af0622a2a9b6d74_DSCF6127%202-p-1080.webp" 
            alt="Medical professional administering allergy shot injection to patient's arm" 
            className="main-image"
          />
          
          <div className="brand-logo">
            <img src="public\icons\pink_spring.png" alt="Brand logo in pink" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero1;
