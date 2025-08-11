import React from 'react';
import './ComparisonTable.css';

import type { ReactNode } from 'react';
export interface ComparisonTableColumn {
  key: string;
  label: string | ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  isPreferred?: boolean; // New property for styling
  bgColor?: string; // Custom background color
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

const ComparisonTable: React.FC<ComparisonTableProps> = ({ 
  columns, 
  rows, 
  ctaButton, 
  className = '' 
}) => {
  return (
    <div className={`comparison-table-modern ${className}`.trim()}>
      <div className="header-row-modern">
        <div className="header-cell-modern empty-header-modern"></div>
        {columns.map((col) => (
          <div 
            className={`header-cell-modern ${col.key}-header-modern ${
              col.isPreferred ? 'preferred-column' : 'alternative-column'
            }`} 
            key={col.key}
          >
            <div className="header-content-modern">
              {col.imageSrc && (
                <div className="header-image-modern">
                  <img 
                    src={col.imageSrc} 
                    alt={col.imageAlt || ''} 
                    className={`${col.key}-image-modern`} 
                  />
                </div>
              )}
              <h2 className="header-title-modern">{col.label}</h2>
            </div>
          </div>
        ))}
      </div>
      
      {rows.map((row) =>
        row.isCtaRow ? (
          <div className="cta-row-modern" key={row.key}>
            <div className="cta-cell-modern empty-cta-modern"></div>
            <div className="cta-cell-modern">{ctaButton}</div>
            <div className="cta-cell-modern empty-cta-modern"></div>
          </div>
        ) : row.isPriceRow ? (
          <div className="price-row-modern" key={row.key}>
            <div className="price-label-modern">{row.label}</div>
            {row.values.map((val, i) => (
              <div 
                className={`price-value-modern ${columns[i]?.key}-price-modern ${
                  columns[i]?.isPreferred ? 'preferred-value' : 'alternative-value'
                }`} 
                key={columns[i]?.key || i}
              >
                {val}
              </div>
            ))}
          </div>
        ) : (
          <div className={`feature-row-modern${row.key.includes('time') ? ' time-row-modern' : ''}`} key={row.key}>
            <div className="feature-label-modern">{row.label}</div>
            {row.values.map((val, i) => (
              <div 
                className={`feature-value-modern ${columns[i]?.key}-value-modern ${
                  columns[i]?.isPreferred ? 'preferred-value' : 'alternative-value'
                }`} 
                key={columns[i]?.key || i}
              >
                {React.isValidElement(val) && (val.type === 'svg') ? (
                  <div className="icon-wrapper-modern">
                    {val}
                  </div>
                ) : (
                  val
                )}
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default ComparisonTable;