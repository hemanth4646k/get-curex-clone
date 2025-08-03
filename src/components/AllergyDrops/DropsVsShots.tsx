
import ComparisonTable from '../../common/ui/ComparisonTable';
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

const DropsVsShots: React.FC = () => {
  return (
    <div>
        <DropsVsShots1 />
        <div className="drops-vs-shots-container2">
          {
            // ComparisonTable usage
          }
          {
            // ComparisonTable usage
          }
          <ComparisonTable
            columns={[
              { key: 'curex', label: 'Curex', imageSrc: '', imageAlt: 'Curex drops' },
              { key: 'shots', label: 'Allergy Shots', imageSrc: '', imageAlt: 'Allergy shots' },
            ]}
            rows={[
              { key: 'athome', label: 'At-home treatment', values: [<div className="checkmark2">✓</div>, <div className="cross2">✕</div>] },
              { key: 'clinician', label: 'Access to clinician via text/call/zoom', values: [<div className="checkmark2">✓</div>, <div className="cross2">✕</div>] },
              { key: 'noninvasive', label: 'Non-invasive application?', values: [<div className="checkmark2">✓</div>, <div className="cross2">✕</div>] },
              { key: 'noneedles', label: 'No Scary Needles', values: [<div className="checkmark2">✓</div>, <div className="cross2">✕</div>] },
              { key: 'noschool', label: 'No Time Away From School', values: [<div className="checkmark2">✓</div>, <div className="cross2">✕</div>] },
              { key: 'nocommute', label: 'No More Commutes to the Allergist', values: [<div className="checkmark2">✓</div>, <div className="cross2">✕</div>] },
              { key: 'time', label: 'Time spent per year', values: [<div className="time-text2">Less than 2 hours</div>, <div className="time-text2">Over 52 hours</div>] },
              { key: 'price', label: 'Price', values: [
                <><div className="price-text2">$59/month</div><div className="price-subtext2">+ copay</div></>,
                <div className="price-text2">$2,000 - $5,000</div>
              ], isPriceRow: true },
              { key: 'cta', label: '', values: ['', ''], isCtaRow: true },
            ]}
            ctaButton={<button className="cta-button2">Start a free Quiz Now</button>}
          />
        </div>
    </div>
    
  );
};

export default DropsVsShots;
