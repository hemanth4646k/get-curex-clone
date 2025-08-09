import React, { useState } from 'react';
import './GettingStarted.css';

interface Step {
  number: number;
  description: string;
}

const GettingStartedKids: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'existing' | 'need'>('existing');


  const existingResultsSteps: Step[] = [
    { number: 1, description: "Finish quiz & pay onboarding fee." },
    { number: 2, description: "Complete your child's medical history (Upload your test results in the medical history intake)." },
    { number: 3, description: "Verify your ID. (Parent or Guardian ID)" },
    { number: 4, description: "Confirm details. (Pre-clinical form)" },
    { number: 5, description: "Connect with a Curex clinician to get your child's treatment plan." },
    { number: 6, description: "If eligible, get 3 months of supply shipped to your home." }
  ];

  const needTestSteps: Step[] = [
    { number: 1, description: "Finish your quiz & pay the onboarding fee." },
    { number: 2, description: "Complete your child's medical history." },
    { number: 3, description: "Verify your ID. (Parent or Guardian ID)" },
    { number: 4, description: "Complete your child's allergy test (We will send you a requisition & instructions)." },
    { number: 5, description: "Once your test results are in, confirm your details. (Preclinical Form)" },
    { number: 6, description: "Connect with a Curex clinician to get your child's treatment plan." },
    { number: 7, description: "If eligible, get 3 months of supply shipped to your home." }
  ];

  const currentSteps = activeTab === 'existing' ? existingResultsSteps : needTestSteps;

  return (
    <div className="getting-started-container">
      <div className="getting-started-content">
        <div className="header-section">
          <div className="header-content">
            <h1 className="main-title">Getting Started with Curex</h1>
            <p className="subtitle">
              Please select one of the options below to see the next steps for <br />your child’s treatment.
            </p>
          </div>
        </div>

        <div className="tabs-section">
          <div className="tabs-menu">
            <button
              className={`tab-button ${activeTab === 'existing' ? 'active' : ''}`}
              onClick={() => setActiveTab('existing')}
            >
              My child has existing test results
            </button>
            <button
              className={`tab-button ${activeTab === 'need' ? 'active' : ''}`}
              onClick={() => setActiveTab('need')}
            >
              My child needs an allergy test
            </button>
          </div>

          <div className="tab-content">
            <div className="steps-container">
              <div className="steps-list">
                {currentSteps.map((step) => (
                  <div key={step.number} className="step-item">
                    <div className="step-number-wrapper">
                      <div className="step-number">{step.number}</div>
                    </div>
                    <div className="step-description">{step.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingStartedKids;
