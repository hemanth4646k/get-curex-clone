import React from "react";
import "./TableOfContents.css";

export interface TocItem {
  text: string;
  href: string;
}

export interface TableOfContentsProps {
  toc: TocItem[][];
  title?: string;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ toc, title = "Table of Contents" }) => (
  <section className="toc-section">
    <div className="toc-header">
      <h2 className="toc-title">{title}</h2>
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
