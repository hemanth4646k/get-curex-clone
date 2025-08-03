import './SideEffects.css';
export function SideEffectsHeader({ title, paragraphs }: { title: string; paragraphs: string[] }) {
  return (
    <div className="header-section">
      <h1 className="main-title">{title}</h1>
      {paragraphs.map((text, idx) => (
        <p key={idx} className={idx === 0 ? 'subtitle' : idx === 1 ? 'warning-text' : ''}>
          {text}
        </p>
      ))}
    </div>
  );
}

export function SideEffectsTable() {
  return (
    <div className="comparison-table">
      <div className="table-header">
        <div className="header-cell empty-cell"></div>
        <div className="header-cell immunotherapy-header">
          <span className="header-title">Allergy Immunotherapy</span>
        </div>
        <div className="header-cell drugs-header">
          <span className="header-title">Allergy Drugs</span>
        </div>
      </div>

      <div className="table-row">
        <div className="feature-label">Natural Ingredients?</div>
        <div className="feature-cell immunotherapy-cell">
          <div className="checkmark">✓</div>
        </div>
        <div className="feature-cell drugs-cell">
          <div className="cross">✕</div>
        </div>
      </div>

      <div className="table-row">
        <div className="feature-label">Long-Term Relief?</div>
        <div className="feature-cell immunotherapy-cell">
          <div className="checkmark">✓</div>
        </div>
        <div className="feature-cell drugs-cell">
          <div className="cross">✕</div>
        </div>
      </div>

      <div className="table-row">
        <div className="feature-label">Immediate Results?</div>
        <div className="feature-cell immunotherapy-cell">
          <div className="cross">✕</div>
        </div>
        <div className="feature-cell drugs-cell">
          <div className="checkmark">✓</div>
        </div>
      </div>

      <div className="table-row side-effects-row">
        <div className="feature-label">Side effects</div>
        <div className="feature-cell immunotherapy-cell">
          <span className="side-effects-text">Rare and mild</span>
        </div>
        <div className="feature-cell drugs-cell">
          <span className="side-effects-text">Drowsiness, dementia, weight gain, etc.</span>
        </div>
      </div>

      <div className="table-row potency-row">
        <div className="feature-label">Potency over time</div>
        <div className="feature-cell immunotherapy-cell">
          <span className="potency-text">Improves</span>
        </div>
        <div className="feature-cell drugs-cell">
          <span className="potency-text">Diminishes</span>
        </div>
      </div>

      <div className="table-row">
        <div className="feature-label">Personalized</div>
        <div className="feature-cell immunotherapy-cell">
          <div className="checkmark">✓</div>
        </div>
        <div className="feature-cell drugs-cell">
          <div className="cross">✕</div>
        </div>
      </div>

      <div className="table-row">
        <div className="feature-label">Doctor-Approved</div>
        <div className="feature-cell immunotherapy-cell">
          <div className="checkmark">✓</div>
        </div>
        <div className="feature-cell drugs-cell">
          <div className="checkmark">✓</div>
        </div>
      </div>

      <div className="cta-section">
        <button className="cta-button">Start a Free Quiz Now</button>
      </div>
    </div>
  );
}

export default function SideEffects() {
  const title = 'Allergy Drops Side Effects';
  const paragraphs = [
    "Sublingual immunotherapy, commonly known as allergy drops, is a widely acknowledged safe and effective treatment for allergies. Nonetheless, as with any medical treatment, it may come with potential side effects. The most significant side effects are minor oral side effects. Often compared to allergy shots, individuals might experience gastrointestinal discomfort, such as mild swelling, eye irritation, or discomfort in the ears, typically resolving within a few weeks. Continuation of traditional allergy medications and Claritin may be advised by healthcare providers to limit such side effects.",
    "Severe reactions like anaphylaxis or eosinophilic esophagitis are exceedingly rare, with occurrences less than 0.02%. Allergy drops are often favored over injections due to their more gradual dosing and the body's ability to adapt over time. This is especially beneficial for those who have had negative reactions to allergy shots. It is crucial to maintain open communication with healthcare professionals to identify potential risks and ensure a safe and effective treatment plan."
  ];
  return (
    <div className="side-effects-container" id="Allergy-Drops-Side-Effects">
      <SideEffectsHeader title={title} paragraphs={paragraphs} />
      <SideEffectsTable />
    </div>
  );
}
