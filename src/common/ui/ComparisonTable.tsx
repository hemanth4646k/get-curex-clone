import React from 'react';
import './ComparisonTable.css';

import type { ReactNode } from 'react';
export interface ComparisonTableColumn {
  key: string;
  label: string | ReactNode;
  imageSrc?: string;
  imageAlt?: string;
}

export interface ComparisonTableRow {
  key: string;
  label: string;
  values: Array<React.ReactNode>;
  isPriceRow?: boolean;
  isCtaRow?: boolean;
}

interface ComparisonTableProps {
  columns: ComparisonTableColumn[];
  rows: ComparisonTableRow[];
  ctaButton?: React.ReactNode;
  className?: string;
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ columns, rows, ctaButton, className = '' }) => {
  return (
    <div className={`comparison-table2 ${className}`.trim()}>
      <div className="header-row2">
        <div className="header-cell2 empty-header2"></div>
        {columns.map((col) => (
          <div className={`header-cell2 ${col.key}-header2`} key={col.key}>
            <div className="header-content2">
              {col.imageSrc && (
                <div className="header-image2">
                  <img src={col.imageSrc} alt={col.imageAlt || ''} className={`${col.key}-image2`} />
                </div>
              )}
              <h2 className="header-title2">{col.label}</h2>
            </div>
          </div>
        ))}
      </div>
      {rows.map((row) =>
        row.isCtaRow ? (
          <div className="cta-row2" key={row.key}>
            <div className="cta-cell2 empty-cta2"></div>
            <div className="cta-cell2">{ctaButton}</div>
            <div className="cta-cell2 empty-cta2"></div>
          </div>
        ) : row.isPriceRow ? (
          <div className="price-row2" key={row.key}>
            <div className="price-label2">{row.label}</div>
            {row.values.map((val, i) => (
              <div className={`price-value2 ${columns[i]?.key}-price2`} key={columns[i]?.key || i}>{val}</div>
            ))}
          </div>
        ) : (
          <div className={`feature-row2${row.key.includes('time') ? ' time-row2' : ''}`} key={row.key}>
            <div className="feature-label2">{row.label}</div>
            {row.values.map((val, i) => (
              <div className={`feature-value2 ${columns[i]?.key}-value2`} key={columns[i]?.key || i}>{val}</div>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default ComparisonTable;
