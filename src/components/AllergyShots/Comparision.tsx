
import React from "react";
import ComparisonTable from '../../common/ui/ComparisonTable';
import type { ComparisonTableColumn, ComparisonTableRow } from '../../common/ui/ComparisonTable';
import "./Comparision.css";

const curexFeatures = [
  { label: "At-home treatment", checked: true },
  { label: "Access to clinician via text/call/zoom", checked: true },
  { label: "Non-invasive application?", checked: true },
  { label: "No Scary Needles", checked: true },
  { label: "No Time Away From School", checked: true },
  { label: "No More Commutes to the Allergist", checked: true },
  { label: "Time spent per year", value: "Less than 2 hours" },
  { label: "Price", value: "$69/month + copay" }
];

const allergyFeatures = [
  { label: "At-home treatment", checked: false },
  { label: "Access to clinician via text/call/zoom", checked: false },
  { label: "Non-invasive application?", checked: false },
  { label: "No Scary Needles", checked: false },
  { label: "No Time Away From School", checked: false },
  { label: "No More Commutes to the Allergist", checked: false },
  { label: "Time spent per year", value: "Over 52 hours" },
  { label: "Price", value: "$2,000 – $5,000" }
];

const columns: ComparisonTableColumn[] = [
  {
    key: 'curex',
    label: 'Curex',
    imageSrc: 'https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/61e0365c68893c40d582eee6_Curex-144-2-p-800.webp',
    imageAlt: 'Curex home test kit held by hands against pink background',
    isPreferred: true,
  },
  {
    key: 'shots',
    label: 'Allergy Shots',
    imageSrc: 'https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/64782705bc34f2bd42bdc165_allergyshots-p-800.webp',
    imageAlt: 'Child receiving an allergy shot injection',
    isPreferred: false,
  },
];

const featureRows: ComparisonTableRow[] = curexFeatures.map((curex, idx) => {
  const shots = allergyFeatures[idx];
  // For check/cross, use Unicode symbols
  const curexValue = curex.value ? (
    <span className="cmp-value">{curex.value}</span>
  ) : (
    <span className="cmp-check">✓</span>
  );
  const shotsValue = shots.value ? (
    <span className="cmp-value">{shots.value}</span>
  ) : (
    <span className="cmp-cross">✕</span>
  );
  return {
    key: curex.label,
    label: curex.label,
    values: [curexValue, shotsValue],
    isPriceRow: curex.label === 'Price',
    // You can add isCtaRow if needed
  };
});

const ctaButton = (
  <button className="cmp-cta-btn">Start a Free Quiz Now</button>
);

const Comparision: React.FC = () => (
  <section className="cmp-table-section" id="how-much-do-allergy-shots-cost">
    <h2 className="cmp-title">How Much Do Allergy Shots Cost?</h2>
    <p className="cmp-desc">
      The cost of allergy shots can vary depending on various factors, including the specific allergens being targeted, the duration of treatment, and geographic location. Generally, allergy shots are considered an investment in long-term allergy management, as they address the root cause of allergies and can lead to lasting relief. However, there is a more affordable option &ndash; Curex. Curex is a much better value compared to allergy shots.
    </p>
    <div className="cmp-table-container">
      <ComparisonTable columns={columns} rows={featureRows} ctaButton={ctaButton} className="allergy-shots-comparison" />
    </div>
  </section>
);

export default Comparision;
