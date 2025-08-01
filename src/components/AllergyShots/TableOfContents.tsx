import React from "react";
import "./TableOfContents.css";

const toc = [
  [
    { text: "How Do Allergy Shots Work?", href: "#how-do-allergy-shots-work" },
    { text: "Do Allergy Shots Really Work?", href: "#do-allergy-shots-really-work" },
    { text: "Allergy Shots Side Effects", href: "#allergy-shots-side-effects" },
    { text: "What Allergies Can Be Treated with Shots?", href: "#what-allergies-can-be-treated-with-shots" },
    { text: "How Much Do Allergy Shots Cost?", href: "#how-much-do-allergy-shots-cost" },
  ],
  [
    { text: "Are Allergy Shots Covered by Insurance?", href: "#are-allergy-shots-covered-by-insurance" },
    { text: "Are Shots Worth It?", href: "#are-shots-worth-it" },
    { text: "How Many Days Can You Go Between Allergy Shots?", href: "#how-many-days-can-you-go-between-allergy-shots" },
    { text: "How Long Do Allergy Injections Last?", href: "#how-long-do-allergy-injections-last" },
    { text: "At Home Allergy Shots", href: "#at-home-allergy-shots" },
  ],
  [
    { text: "Where to Get Allergy Shots Near Me?", href: "#where-to-get-allergy-shots-near-me" },
    { text: "Allergy Shots for Pollen", href: "#allergy-shots-for-pollen" },
    { text: "Cat Allergy Shots", href: "#cat-allergy-shots" },
    { text: "Dog Allergy Shots", href: "#dog-allergy-shots" },
    { text: "Are Allergy Shots Better than Drops?", href: "#are-allergy-shots-better-than-drops" },
  ]
];

const TableOfContents: React.FC = () => (
  <section className="toc-section">
    <div className="toc-header">
      <h2 className="toc-title">Table of Contents</h2>
    </div>
    <div className="toc-columns">
      {toc.map((col, idx) => (
        <div className="toc-col" key={idx}>
          {col.map((item, i) => (
            <a className="toc-link" key={i} href={item.href}>{item.text}</a>
          ))}
        </div>
      ))}
    </div>
  </section>
);

export default TableOfContents;
