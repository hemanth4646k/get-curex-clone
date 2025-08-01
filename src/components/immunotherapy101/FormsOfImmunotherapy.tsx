import React from 'react';
import './FormsOfImmunotherapy.css';

const FormsOfImmunotherapy: React.FC = () => {
  return (
    <div id="forms-of-immunotherapy" className="forms-immunotherapy-section">
      <div className="forms-immunotherapy-container">
        <h2 className="forms-immunotherapy-title">Forms of Immunotherapy</h2>
        
        <div className="forms-immunotherapy-table">
          {/* Table Header */}
          <div className="forms-immunotherapy-header">
            <div className="forms-immunotherapy-header-cell empty"></div>
            <div className="forms-immunotherapy-header-cell">Doctor Visits</div>
            <div className="forms-immunotherapy-header-cell">Risk of adverse reactions</div>
            <div className="forms-immunotherapy-header-cell">Cumulative Dose</div>
          </div>

          {/* Allergy Shots Row */}
          <div className="forms-immunotherapy-row white-row">
            <div className="forms-immunotherapy-treatment-cell">
              <div className="forms-immunotherapy-treatment-info">
                <img 
                  className="forms-immunotherapy-icon" 
                  alt="Medical syringe for allergy shots"
                />
                <div className="forms-immunotherapy-treatment-text">
                  <div className="forms-immunotherapy-treatment-name">Allergy Shots</div>
                  <div className="forms-immunotherapy-treatment-type">(SCIT)</div>
                </div>
              </div>
            </div>
            <div className="forms-immunotherapy-cell">Once a week</div>
            <div className="forms-immunotherapy-cell">Low</div>
            <div className="forms-immunotherapy-cell">High</div>
          </div>

          {/* Curex Row (Highlighted) */}
          <div className="forms-immunotherapy-row green-row">
            <div className="forms-immunotherapy-treatment-cell">
              <div className="forms-immunotherapy-treatment-info">
                <img 
                  className="forms-immunotherapy-icon" 
                  alt="Curex sublingual immunotherapy package"
                />
                <div className="forms-immunotherapy-treatment-text">
                  <div className="forms-immunotherapy-treatment-name">Curex</div>
                  <div className="forms-immunotherapy-treatment-type">(SLIT)</div>
                </div>
              </div>
            </div>
            <div className="forms-immunotherapy-cell">100% at home</div>
            <div className="forms-immunotherapy-cell">Lowest</div>
            <div className="forms-immunotherapy-cell">5 to 30x Higher</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormsOfImmunotherapy;