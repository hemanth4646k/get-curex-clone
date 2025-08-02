import React from 'react';
import './TableOfContents.css';

const TableOfContents: React.FC = () => {
  return (
    <section className="table-of-contents">
      <div className="toc-container">
        <div className="toc-header">
          <h1 className="toc-title">Table of Contents</h1>
        </div>
        <div className="toc-grid">
          <div className="toc-column">
            <a href="#curex-allergy-review" className="toc-link">Curex Allergy Review</a>
            <a href="#wyndly-review" className="toc-link">Wyndly Review</a>
            <a href="#aspire-allergy" className="toc-link">Aspire Allergy</a>
            <a href="#nectar-allergy" className="toc-link">Nectar Allergy</a>
          </div>
          <div className="toc-column">
            <a href="#allergy-partners" className="toc-link">Allergy Partners</a>
            <a href="#allergy-associates" className="toc-link">Allergy Associates</a>
            <a href="#family-allergy" className="toc-link">Family Allergy</a>
            <a href="#allervie-health" className="toc-link">Allervie Health</a>
          </div>
          <div className="toc-column">
            <a href="#astma-allergy-clinic" className="toc-link">Asthma & Allergy Clinic</a>
            <a href="#allergy-clinic-near-me" className="toc-link">Allergy Clinic Near me</a>
            <a href="#pediatric-allergy" className="toc-link">Pediatric Allergy</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TableOfContents;
