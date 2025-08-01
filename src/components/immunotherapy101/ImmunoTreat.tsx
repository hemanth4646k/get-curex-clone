import React from 'react';
import './ImmunoTreat.css';

const WhatAllergiesTreat: React.FC = () => {
  const allergyTypes = [
    {
      id: 1,
      name: "Tree Pollen",
      icon: "🌳"
    },
    {
      id: 2,
      name: "Grass Pollen",
      icon: "🌾"
    },
    {
      id: 3,
      name: "Weed Pollen",
      icon: "🌿"
    },
    {
      id: 4,
      name: "Dog Allergies",
      icon: "🐕"
    },
    {
      id: 5,
      name: "Cat Allergies",
      icon: "🐱"
    },
    {
      id: 6,
      name: "Mold",
      icon: "🦠"
    },
    {
      id: 7,
      name: "Dust Mites",
      icon: "🐛"
    },
    {
      id: 8,
      name: "Cockroaches",
      icon: "🪳"
    }
  ];

  return (
    <div id="what-allergies-can-be-treated" className="what-allergies-section">
      <div className="what-allergies-container">
        <div className="what-allergies-green-bar"></div>
        
        <h2 className="what-allergies-title">What Allergies Can Immunotherapy Treat?</h2>
        
        <div className="what-allergies-intro">
          <p className="what-allergies-paragraph">
            Immunotherapy is a custom treatment formulated based on your allergy profile, 
            along with allergens you are exposed to where you live.
          </p>
          
          <p className="what-allergies-paragraph">
            This approach allows immunotherapy to treat a wide array of allergies. The most 
            common ones we treat are:
          </p>
        </div>

        <div className="what-allergies-grid">
          {allergyTypes.map((allergy) => (
            <div key={allergy.id} className="what-allergies-item">
              <div className="what-allergies-icon-wrapper">
                <span className="what-allergies-icon">{allergy.icon}</span>
              </div>
              <span className="what-allergies-name">{allergy.name}</span>
            </div>
          ))}
        </div>

        <div className="what-allergies-disclaimer">
          <p className="what-allergies-disclaimer-text">
            We do not prescribe immunotherapy for food allergies or food insensitivity. 
            Oral food allergy occurs in people who are allergic to certain pollens. This is a 
            condition we treat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatAllergiesTreat;