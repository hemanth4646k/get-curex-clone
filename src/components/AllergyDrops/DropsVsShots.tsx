import './DropsVsShots.css';

const DropsVsShots1 = () => {
  return (
    <div className="drops-vs-shots-section" id="Allergy-Drops-vs.-Shots">
      <div className="drops-vs-shots-container">
        <div className="drops-vs-shots-header">
          <h1 className="drops-vs-shots-title">Allergy Drops vs. Shots</h1>
          
          <p className="drops-vs-shots-intro">
            Allergy shots and allergy drops are both forms of immunotherapy, which means they work by gradually exposing the body to small amounts of allergens to build tolerance. However, there are some key differences between the two treatments.
          </p>
          
          <p className="drops-vs-shots-description">
            Allergy shots, also known as subcutaneous immunotherapy (SCIT), involve injecting allergen extract into the skin. This is typically done once or twice a week, and the dosage is gradually increased over time. On the other hand, allergy drops, also known as sublingual immunotherapy (SLIT), involve placing a small amount of the same allergen extract under the tongue. These drops are typically taken daily, with the dosage adjusted as needed. Allergy drops can contain as much as 30x of active ingredients as allergy shots.
          </p>
          
          <p className="drops-vs-shots-table-intro">
            Here is a table summarizing the key differences between allergy shots and allergy drops:
          </p>
        </div>

        {/* <div className="comparison-table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th className="table-header">Aspect</th>
                <th className="table-header shots-header">Allergy Shots (SCIT)</th>
                <th className="table-header drops-header">Allergy Drops (SLIT)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="table-aspect">Administration</td>
                <td className="table-cell">Injected into the skin</td>
                <td className="table-cell highlighted">Placed under the tongue</td>
              </tr>
              <tr>
                <td className="table-aspect">Frequency</td>
                <td className="table-cell">1-2 times per week</td>
                <td className="table-cell highlighted">Daily</td>
              </tr>
              <tr>
                <td className="table-aspect">Location</td>
                <td className="table-cell">Doctor's office/clinic</td>
                <td className="table-cell highlighted">At home</td>
              </tr>
              <tr>
                <td className="table-aspect">Convenience</td>
                <td className="table-cell">Requires regular clinic visits</td>
                <td className="table-cell highlighted">Take at home, no clinic visits</td>
              </tr>
              <tr>
                <td className="table-aspect">Side Effects</td>
                <td className="table-cell">Risk of severe reactions, injection site reactions</td>
                <td className="table-cell highlighted">Mild mouth itching, rare severe reactions</td>
              </tr>
              <tr>
                <td className="table-aspect">Treatment Duration</td>
                <td className="table-cell">3-5 years</td>
                <td className="table-cell highlighted">3-5 years</td>
              </tr>
              <tr>
                <td className="table-aspect">Effectiveness</td>
                <td className="table-cell">High effectiveness</td>
                <td className="table-cell highlighted">Comparable effectiveness</td>
              </tr>
              <tr>
                <td className="table-aspect">Active Ingredients</td>
                <td className="table-cell">Standard concentration</td>
                <td className="table-cell highlighted">Up to 30x more active ingredients</td>
              </tr>
              <tr>
                <td className="table-aspect">Age Suitability</td>
                <td className="table-cell">Usually 5+ years</td>
                <td className="table-cell highlighted">Safe for kids 5+ and adults</td>
              </tr>
              <tr>
                <td className="table-aspect">Cost</td>
                <td className="table-cell">Higher due to clinic visits</td>
                <td className="table-cell highlighted">More cost-effective</td>
              </tr>
            </tbody>
          </table>
        </div> */}

        {/* <div className="drops-vs-shots-conclusion">
          <div className="conclusion-card">
            <h3 className="conclusion-title">Why Choose Allergy Drops?</h3>
            <div className="conclusion-benefits">
              <div className="benefit-item">
                <span className="benefit-icon">🏠</span>
                <span className="benefit-text">Convenient at-home treatment</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">💊</span>
                <span className="benefit-text">Up to 30x more active ingredients</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">😊</span>
                <span className="benefit-text">Fewer side effects</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">💰</span>
                <span className="benefit-text">More cost-effective</span>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};
import './DropsVsShots.css';

const DropsVsShots: React.FC = () => {
  return (
    <div>
        <DropsVsShots1 />
        <div className="drops-vs-shots-container2">
      <div className="comparison-table2">
        <div className="header-row2">
          <div className="header-cell2 empty-header2"></div>
          <div className="header-cell2 curex-header2">
            <div className="header-content2">
              <div className="header-image2">
                <img src="" alt="Curex drops" className="curex-image2" />
              </div>
              <h2 className="header-title2">Curex</h2>
            </div>
          </div>
          <div className="header-cell2 shots-header2">
            <div className="header-content2">
              <div className="header-image2">
                <img src="" alt="Allergy shots" className="shots-image2" />
              </div>
              <h2 className="header-title2">Allergy Shots</h2>
            </div>
          </div>
        </div>

        <div className="feature-row2">
          <div className="feature-label2">At-home treatment</div>
          <div className="feature-value2 curex-value2">
            <div className="checkmark2">✓</div>
          </div>
          <div className="feature-value2 shots-value2">
            <div className="cross2">✕</div>
          </div>
        </div>

        <div className="feature-row2">
          <div className="feature-label2">Access to clinician via text/call/zoom</div>
          <div className="feature-value2 curex-value2">
            <div className="checkmark2">✓</div>
          </div>
          <div className="feature-value2 shots-value2">
            <div className="cross2">✕</div>
          </div>
        </div>

        <div className="feature-row2">
          <div className="feature-label2">Non-invasive application?</div>
          <div className="feature-value2 curex-value2">
            <div className="checkmark2">✓</div>
          </div>
          <div className="feature-value2 shots-value2">
            <div className="cross2">✕</div>
          </div>
        </div>

        <div className="feature-row2">
          <div className="feature-label2">No Scary Needles</div>
          <div className="feature-value2 curex-value2">
            <div className="checkmark2">✓</div>
          </div>
          <div className="feature-value2 shots-value2">
            <div className="cross2">✕</div>
          </div>
        </div>

        <div className="feature-row2">
          <div className="feature-label2">No Time Away From School</div>
          <div className="feature-value2 curex-value2">
            <div className="checkmark2">✓</div>
          </div>
          <div className="feature-value2 shots-value2">
            <div className="cross2">✕</div>
          </div>
        </div>

        <div className="feature-row2">
          <div className="feature-label2">No More Commutes to the Allergist</div>
          <div className="feature-value2 curex-value2">
            <div className="checkmark2">✓</div>
          </div>
          <div className="feature-value2 shots-value2">
            <div className="cross2">✕</div>
          </div>
        </div>

        <div className="feature-row2 time-row2">
          <div className="feature-label2">Time spent per year</div>
          <div className="feature-value2 curex-value2">
            <div className="time-text2">Less than 2 hours</div>
          </div>
          <div className="feature-value2 shots-value2">
            <div className="time-text2">Over 52 hours</div>
          </div>
        </div>

        <div className="price-row2">
          <div className="price-label2">Price</div>
          <div className="price-value2 curex-price2">
            <div className="price-text2">$59/month</div>
            <div className="price-subtext2">+ copay</div>
          </div>
          <div className="price-value2 shots-price2">
            <div className="price-text2">$2,000 - $5,000</div>
          </div>
        </div>

        <div className="cta-row2">
          <div className="cta-cell2 empty-cta2"></div>
          <div className="cta-cell2">
            <button className="cta-button2">Start a free Quiz Now</button>
          </div>
          <div className="cta-cell2 empty-cta2"></div>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default DropsVsShots;
