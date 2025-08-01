import React from 'react';
import './brands.css';

const Brands = () => {
  return (
    <section className="brands-container">
      <div className="brands-content">
        <div className="brands-grid">
          <div className="brands-logo">
            <img className="brands-logo-image" alt="USA Today" />
          </div>
          <div className="brands-logo">
            <img className="brands-logo-image" alt="Men's Health" />
          </div>
          <div className="brands-logo">
            <img className="brands-logo-image" alt="CBS" />
          </div>
          <div className="brands-logo">
            <img className="brands-logo-image" alt="FOX" />
          </div>
          <div className="brands-logo">
            <img className="brands-logo-image" alt="AXIOS" />
          </div>
          <div className="brands-logo">
            <img className="brands-logo-image" alt="Healthline" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;