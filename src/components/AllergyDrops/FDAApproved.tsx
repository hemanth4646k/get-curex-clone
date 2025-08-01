import React from 'react';
import './FDAApproved.css';

const FDAApproved: React.FC = () => {
  return (
    <div className="fda-approved-container">
      <div className="content-wrapper">
        <div className="text-section">
          <h1 className="main-heading">Are Allergy Drops FDA Approved?</h1>
          
          <div className="content-blocks">
            <p className="intro-paragraph">
              The FDA has approved four single-allergy immunotherapy tablets for sublingual 
              administration: Odactra, Grastek, Ragwitek and Oralair. These tablets have proven 
              both effective and safe, making the sublingual method a viable treatment option. 
              Interestingly, in the EU, especially in France, allergy drops are the primary form of 
              allergy immunotherapy.
            </p>
            
            <p className="description-paragraph">
              The FDA maintains the highest global standards for pharmaceutical approval, ensuring the safety and efficacy of approved treatments. However, conducting double-blind 
              clinical studies on allergy drops or allergy shots targeting multiple allergies proves challenging due to the inherent variability among patients' allergy profiles. Take Sam and 
              Kato, for example; their sets of allergies could significantly differ, requiring distinct treatment mixes. Introducing this variability into clinical studies would complicate data 
              interpretation.
            </p>
            
            <p className="explanation-paragraph">
              As a result, no clinical studies have yet been conducted on allergy drops or allergy shots for multiple allergies. In the US, allergy immunotherapy typically involves treating 
              patients for multiple allergies, requiring doctors to rely on their expertise for establishing treatment plans.
            </p>
            
            <p className="conclusion-paragraph">
              While the FDA has not yet reviewed clinical studies for drops or shots with multiple allergies, allergy shots have been "grandfathered in" due to their widespread use since the 
              1920s and their well-established safety and efficacy. On the other hand, allergy drops, introduced in the 1990s and despite being administered to millions of patients 
              worldwide, remain unapproved by the FDA. This means that when doctors prescribe allergy drops, they do so off-label. While this practice is legal and common, 
              pharmaceutical companies are restricted in marketing their allergenic extracts for use in allergy drops due to the lack of FDA approval.
            </p>
          </div>
        </div>
        
        <div className="table-section">
          <div className="fda-table">
            <div className="table-header">
              <div className="header-cell name-header">Name</div>
              <div className="header-cell treats-header">Treats</div>
              <div className="header-cell approval-header">Approval Year</div>
            </div>
            
            <div className="table-row">
              <div className="table-cell name-cell">Oralair</div>
              <div className="table-cell treats-cell">Grass Pollen</div>
              <div className="table-cell approval-cell">2014</div>
            </div>
            
            <div className="table-row">
              <div className="table-cell name-cell">Grastek</div>
              <div className="table-cell treats-cell">Timothy grass</div>
              <div className="table-cell approval-cell">2017</div>
            </div>
            
            <div className="table-row">
              <div className="table-cell name-cell">Ragwitek</div>
              <div className="table-cell treats-cell">Ragweed</div>
              <div className="table-cell approval-cell">2018</div>
            </div>
            
            <div className="table-row">
              <div className="table-cell name-cell">Odactra</div>
              <div className="table-cell treats-cell">Dust mite</div>
              <div className="table-cell approval-cell">2022</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FDAApproved;
