import React from 'react';
import './Table1.css';

const Table1: React.FC = () => {
  return (
    <section className="table1">
      <div className="table1-container">
        <div className="table1-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th className="table-header-empty"></th>
                <th className="table-header at-home-header">
                  <div className="header-content">
                    <div className="header-icon at-home-icon">
                      <svg viewBox="0 0 24 24" fill="none" className="icon-svg">
                        <path d="M3 12L5 10L12 17L22 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="header-text">At-Home Automatic Test Kit</span>
                  </div>
                </th>
                <th className="table-header in-lab-header">
                  <div className="header-content">
                    <div className="header-icon in-lab-icon">
                      <svg viewBox="0 0 24 24" fill="none" className="icon-svg">
                        <path d="M3 12L5 10L12 17L22 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="header-text">In-Lab Test</span>
                  </div>
                </th>
                <th className="table-header concierge-header">
                  <div className="header-content">
                    <div className="header-icon concierge-icon">
                      <svg viewBox="0 0 24 24" fill="none" className="icon-svg">
                        <path d="M3 12L5 10L12 17L22 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="header-text">Concierge At-Home Test</span>
                  </div>
                </th>
                <th className="table-header office-header">
                  <div className="header-content">
                    <span className="header-text">Doctor's Office Scratch Test</span>
                  </div>
                </th>
                <th className="table-header finger-header">
                  <div className="header-content">
                    <span className="header-text">Finger Prick Test</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="table-row-header">Test Accuracy</td>
                <td className="table-cell at-home-cell">High</td>
                <td className="table-cell in-lab-cell">High</td>
                <td className="table-cell concierge-cell">High</td>
                <td className="table-cell office-cell">High</td>
                <td className="table-cell finger-cell">Low</td>
              </tr>
              <tr className="table-row-alt">
                <td className="table-row-header">Consistency</td>
                <td className="table-cell at-home-cell">
                  <div className="check-icon">
                    <svg viewBox="0 0 24 24" fill="none" className="icon-svg">
                      <path d="M3 12L5 10L12 17L22 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </td>
                <td className="table-cell in-lab-cell">
                  <div className="check-icon">
                    <svg viewBox="0 0 24 24" fill="none" className="icon-svg">
                      <path d="M3 12L5 10L12 17L22 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </td>
                <td className="table-cell concierge-cell">
                  <div className="check-icon">
                    <svg viewBox="0 0 24 24" fill="none" className="icon-svg">
                      <path d="M3 12L5 10L12 17L22 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </td>
                <td className="table-cell office-cell">
                  <div className="cross-icon">
                    <svg viewBox="0 0 24 24" fill="none" className="icon-svg">
                      <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </td>
                <td className="table-cell finger-cell">
                  <div className="cross-icon">
                    <svg viewBox="0 0 24 24" fill="none" className="icon-svg">
                      <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-row-header">Doctor Acceptance</td>
                <td className="table-cell at-home-cell">Accepted</td>
                <td className="table-cell in-lab-cell">Gold Standard</td>
                <td className="table-cell concierge-cell">Gold Standard</td>
                <td className="table-cell office-cell">Gold Standard</td>
                <td className="table-cell finger-cell">Rare</td>
              </tr>
              <tr className="table-row-alt">
                <td className="table-row-header">Where</td>
                <td className="table-cell at-home-cell">Home</td>
                <td className="table-cell in-lab-cell">LabCorp/Quest</td>
                <td className="table-cell concierge-cell">Home</td>
                <td className="table-cell office-cell">Doctor's Office</td>
                <td className="table-cell finger-cell">Home</td>
              </tr>
              <tr>
                <td className="table-row-header">Medical Restrictions</td>
                <td className="table-cell at-home-cell">None</td>
                <td className="table-cell in-lab-cell">None</td>
                <td className="table-cell concierge-cell">None</td>
                <td className="table-cell office-cell">No Meds Before Test</td>
                <td className="table-cell finger-cell">None</td>
              </tr>
              <tr className="table-row-alt">
                <td className="table-row-header">Adverse Reaction</td>
                <td className="table-cell at-home-cell">None</td>
                <td className="table-cell in-lab-cell">None</td>
                <td className="table-cell concierge-cell">None</td>
                <td className="table-cell office-cell">Possible</td>
                <td className="table-cell finger-cell">None</td>
              </tr>
              <tr>
                <td className="table-row-header">Results Turnaround</td>
                <td className="table-cell at-home-cell">6-10 days</td>
                <td className="table-cell in-lab-cell">3-5 days</td>
                <td className="table-cell concierge-cell">10-14 days</td>
                <td className="table-cell office-cell">30 mins</td>
                <td className="table-cell finger-cell">10+ days</td>
              </tr>
              <tr className="table-row-alt">
                <td className="table-row-header">Insurance Accepted</td>
                <td className="table-cell at-home-cell">
                  <div className="cross-icon">
                    <svg viewBox="0 0 24 24" fill="none" className="icon-svg">
                      <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </td>
                <td className="table-cell in-lab-cell">
                  <div className="check-icon">
                    <svg viewBox="0 0 24 24" fill="none" className="icon-svg">
                      <path d="M3 12L5 10L12 17L22 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </td>
                <td className="table-cell concierge-cell">
                  <div className="check-icon">
                    <svg viewBox="0 0 24 24" fill="none" className="icon-svg">
                      <path d="M3 12L5 10L12 17L22 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </td>
                <td className="table-cell office-cell">
                  <div className="check-icon">
                    <svg viewBox="0 0 24 24" fill="none" className="icon-svg">
                      <path d="M3 12L5 10L12 17L22 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </td>
                <td className="table-cell finger-cell">
                  <div className="cross-icon">
                    <svg viewBox="0 0 24 24" fill="none" className="icon-svg">
                      <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Table1;
