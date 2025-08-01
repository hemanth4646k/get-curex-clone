import React from 'react';
import './QuesAndAns.css';

interface QAItem {
  heading: string;
  id: string;
  content: React.ReactNode;
  imgAlt: string;
  imgPosition: 'left' | 'right';
}

const qaItems: QAItem[] = [
  {
    heading: 'How Do Allergy Shots Work',
    id: 'how-do-allergy-shots-work',
    content: (
      <>
        <p>
          Allergy shots function by introducing small amounts of allergens into the body with the goal of desensitizing the immune system. This process involves a series of injections containing small amounts of allergens that trigger an allergic response. Over time, these injections stimulate the immune system to develop tolerance, ultimately reducing the severity of allergic reactions.
        </p>
      </>
    ),
    imgAlt: 'Medical professional administering allergy shot injection to patient’s arm',
    imgPosition: 'left',
  },
  {
    heading: 'Do Allergy Shots Really Work',
    id: 'do-allergy-shots-really-work',
    content: (
      <>
        <p>
          Allergy shots have proven to be highly effective in alleviating allergic reactions for many individuals. These shots work by gradually exposing the immune system to small doses of allergens, helping the body build tolerance over time. As a result, patients often experience a significant reduction in allergy symptoms. It’s essential to note that the effectiveness of allergy shots can vary from person to person, but numerous studies and patient testimonials attest to their success.
        </p>
      </>
    ),
    imgAlt: 'Hand showing a box with allergy shot vials',
    imgPosition: 'right',
  },
];

const QuesAndAns: React.FC = () => (
  <>
  <section className="qna-section">
    <div className="qna-grid">
      {qaItems.map((item) => (
        <div
          key={item.heading}
          id={item.id}
          className="qna-item"
        >
          <div className={`qna-image qna-image-${item.imgPosition}`}>
            <img src="" alt={item.imgAlt} />
          </div>
          <div className="qna-content">
            <h2 className="qna-heading">{item.heading.replace(/([A-Z])/g, ' $1').trim()}</h2>
            <div className="qna-text">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
  <section className="allergy-shots-sections">
  <div className="allergy-shots-row">
    {/* LEFT: Side Effects */}
    <div className="allergy-shots-col" id='allergy-shots-side-effects'>
      <img
        src=""
        alt="Person's arm with visible localized allergic reaction redness"
        className="allergy-shots-img"
      />
      <h2 className="allergy-shots-heading">Allergy Shots Side Effects</h2>
      <p className="allergy-shots-text">
        While generally well-tolerated, some individuals may experience mild side effects, such as itching or swelling in the mouth, as the body adjusts to the allergens being exposed. These reactions are typically temporary and subside on their own. Serious side effects are rare but may include difficulty breathing or severe allergic reactions.
      </p>
    </div>
    {/* RIGHT: What Allergies Can Be Treated */}
    <div className="allergy-shots-col" id='what-allergies-can-be-treated-with-shots'>
      <img
        src=""
        alt="Person with tissues next to happy dog, showing pet allergy context"
        className="allergy-shots-img"
      />
      <h2 className="allergy-shots-heading">What Allergies Can Be Treated with Shots?</h2>
      <p className="allergy-shots-text">
        Allergy shots offer a comprehensive solution for a range of allergic conditions. These shots are particularly effective in treating allergies triggered by airborne substances, such as pollen, dust mites, mold, and pet dander. Seasonal allergies, like hay fever, respond well to immunotherapy, providing long-term relief by desensitizing the immune system to specific allergens. Additionally, allergy shots can be beneficial for individuals with allergic asthma, insect sting allergies, and certain allergic skin conditions.
      </p>
    </div>
  </div>
</section>
</>
);

export default QuesAndAns;
