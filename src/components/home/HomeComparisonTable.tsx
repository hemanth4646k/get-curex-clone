import './homeComparisonTable.css';

const HomeComparisonTable = () => {
  const comparisonData = [
    {
      feature: 'Backed by science',
      curex: true,
      allergyShots: true
    },
    {
      feature: 'Long-term relief',
      curex: true,
      allergyShots: true
    },
    {
      feature: 'Painless',
      curex: true,
      allergyShots: false
    },
    {
      feature: 'At-home treatment',
      curex: true,
      allergyShots: false
    },
    {
      feature: 'Access to clinician via text/call/zoom',
      curex: true,
      allergyShots: false
    }
  ];

  return (
    <section className="home-comparison-table">
      <div className="comparison-container">
        <h2 className="comparison-title">The Better Alternative to Allergy Shots</h2>
        
        <div className="comparison-table">
          {/* Header Row */}
          <div className="comparison-header">
            <div className="feature-header"></div>
            <div className="curex-header">
              <div className="header-content">
                <h3>Curex Plans</h3>
                <div className="header-image">
                  <img 
                    src="/componentimages/home/home5.png" 
                    alt="Curex package" 
                    className="curex-image"
                  />
                </div>
              </div>
            </div>
            <div className="allergy-shots-header">
              <div className="header-content">
                <h3>Allergy Shots</h3>
                <div className="header-image">
                  <img 
                    src="/componentimages/home/home6.png" 
                    alt="Allergy shot injection" 
                    className="allergy-shot-image"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Feature Rows */}
          {comparisonData.map((item, index) => (
            <div key={index} className="comparison-row">
              <div className="feature-cell">
                <span className="feature-text">{item.feature}</span>
              </div>
              <div className="curex-cell">
                {item.curex ? (
                  <div className="check-icon green">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                ) : (
                  <div className="cross-icon red">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
              <div className="allergy-shots-cell">
                {item.allergyShots ? (
                  <div className="check-icon green">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                ) : (
                  <div className="cross-icon red">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Cost Row */}
          <div className="comparison-row cost-row">
            <div className="feature-cell">
              <span className="feature-text">Total cost/year</span>
            </div>
            <div className="curex-cell cost-cell">
              <div className="cost-info curex-cost">
                <span className="cost-amount">From $59/month</span>
                <span className="cost-detail">+ copay</span>
              </div>
            </div>
            <div className="allergy-shots-cell cost-cell">
              <div className="cost-info allergy-shots-cost">
                <span className="cost-amount">$1,500-$4,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeComparisonTable;
