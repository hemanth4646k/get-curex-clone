import React from 'react';
import './TableOfContent.css';

interface TOCItem {
  id: string;
  title: string;
  href: string;
}

interface TableOfContentsProps {
  title?: string;
  items?: TOCItem[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({
  title = "Table of Contents",
  items = [
    { id: "1", title: "How Often Do You Take Allergy Drops?", href: "#How-Often-Do-You-Take-Allergy-Drops" },
    { id: "2", title: "Allergy Drops vs. Shots", href: "#Allergy-Drops-vs.-Shots" },
    { id: "3", title: "Allergy Drops Cost", href: "#Allergy-Drops-Cost" },
    { id: "4", title: "Does Insurance Pay for Allergy Drops?", href: "#Does-Insurance-Pay-for-Allergy-Drops" },
    { id: "5", title: "Are Allergy Drops FDA Approved?", href: "#Are-Allergy-Drops-FDA-Approved" },
    { id: "6", title: "Allergy Drops Side Effects", href: "#Allergy-Drops-Side-Effects" },
    { id: "7", title: "Do Allergy Drops Really Work?", href: "#Do-Allergy-Drops-Really-Work" },
    { id: "8", title: "How Long Does it Take for Allergy Drops to Start Working?", href: "#How-Long-Does-it-Take-for-Allergy-Drops-to-Start-Working" },
    { id: "9", title: "Can You Get Allergy Drops Over the Counter?", href: "#Can-You-Get-Allergy-Drops-Over-the-Counter" },
    { id: "10", title: "Where Can I Get Allergy Drops?", href: "#Can-I-Get-Allergy-Drops-Near-Me" },
    { id: "11", title: "Allergy Drops For Dog Allergies", href: "#Allergy-Drops-For-Dog-Allergies" },
    { id: "12", title: "Allergy Drops For Cat Allergies", href: "#Allergy-Drops-For-Cat-Allergies" },
    { id: "13", title: "Can You Use Allergy Drops While Pregnant?", href: "#Can-You-Use-Allergy-Drops-While-Pregnant" },
    { id: "14", title: "Can You Treat Allergic Conjunctivitis With Allergy Drops?", href: "#Can-You-Treat-Allergic-Conjunctivitis-With-Allergy-Drops" },
    { id: "15", title: "Do Allergy Drops Treat Food Allergies?", href: "#Do-Allergy-Drops-Treat-Food-Allergies" },
    { id: "16", title: "Allergy Drops Reviews", href: "#Allergy-Drops-Reviews" }
  ]
}) => {
  return (
    <div className="w-layout-grid allergy-drops-content_toc">
      <div className="allergy-drops-content_toc-header">
        <h2 className="allergy-drops-content_toc-title">{title}</h2>
      </div>
      
      <div className="allergy-drops-content_toc-content">
        <div className="text-rich-text_toc w-richtext">
          {items.map((item) => (
            <p key={item.id}>
              <a href={item.href} className="">
                {item.title}
              </a>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableOfContents;
