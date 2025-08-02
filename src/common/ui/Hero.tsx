import React from 'react';
import './Hero.css';

interface HeroProps {
  heading: React.ReactNode;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  imageSrc?: string;
  imageAlt?: string;
  children?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({
  heading,
  subtitle,
  ctaText,
  onCtaClick,
  imageSrc,
  imageAlt,
  children
}) => {
  return (
    <div className="hero-container">
      <div className="hero-content-wrapper">
        <div className="hero-text-content">
          <h1 className="hero-main-heading">{heading}</h1>
          {subtitle && <p className="hero-subtitle">{subtitle}</p>}
          {ctaText && (
            <button className="hero-cta-button" onClick={onCtaClick}>
              {ctaText}
            </button>
          )}
          <div className="hero-info-cards">
            <div className="info-card clinic-card">
              <div className="card-icon">
                <div className="bar-chart">
                  <div className="bar bar-1"></div>
                  <div className="bar bar-2"></div>
                  <div className="bar bar-3"></div>
                </div>
              </div>
              <div className="card-text">
                <span className="card-number">#1</span>
                <span className="card-label">Online<br />Allergy Clinic</span>
              </div>
            </div>
            <div className="info-card users-card">
              <div className="card-icon">
                <img src="" alt="Happy users" className="users-image" />
              </div>
              <div className="card-text">
                <span className="card-number">50,000+</span>
                <span className="card-label">users</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-image-content">
          {imageSrc && (
            <div className="hero-product-box">
              <img src={imageSrc} alt={imageAlt || ''} className="hero-package-image" />
              <div className="hero-decorative-circles">
                <div className="hero-circle hero-circle-1"></div>
                <div className="hero-circle hero-circle-2"></div>
                <div className="hero-circle hero-circle-3"></div>
              </div>
            </div>
          )}
        </div>
      </div>
      {children}
    </div>
  );
};

export default Hero;
