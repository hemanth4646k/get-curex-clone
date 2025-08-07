import React, { useState, useRef, useEffect } from 'react';
import './Dropdown.css';

interface DropdownItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface DropdownProps {
  title: string;
  items: DropdownItem[];
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ title, items, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  const handleItemClick = (item: DropdownItem) => {
    if (item.onClick) {
      item.onClick();
    }
    setIsOpen(false);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div 
      className={`dropdown-container ${className}`} 
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`dropdown-toggle ${isOpen ? 'dropdown-open' : ''}`}
        role="button"
        tabIndex={0}
        aria-haspopup="menu"
        aria-expanded={isOpen}
      >
        <div className="dropdown-title">{title}</div>
        <div className="dropdown-icon">
          <svg 
            width="100%" 
            height="100%" 
            viewBox="0 0 11 8" 
            fill="currentColor" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              fillRule="evenodd" 
              clipRule="evenodd" 
              d="M0.32302 1.0808C0.695866 0.706891 1.30123 0.706032 1.67513 1.07888L5.50004 4.89295L9.32494 1.07888C9.69884 0.706032 10.3042 0.706891 10.6771 1.0808C11.0499 1.4547 11.049 2.06007 10.6751 2.43291L6.17513 6.92016C5.80198 7.29226 5.19809 7.29226 4.82494 6.92016L0.324937 2.43291C-0.0489685 2.06007 -0.0498271 1.4547 0.32302 1.0808Z" 
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      {isOpen && (
        <div className="dropdown-menu">
          {items.map((item, index) => (
            <div key={index} className="dropdown-item">
              {item.href ? (
                <a 
                  href={item.href}
                  className="dropdown-link"
                  onClick={() => handleItemClick(item)}
                >
                  {item.label}
                </a>
              ) : (
                <button
                  className="dropdown-button"
                  onClick={() => handleItemClick(item)}
                >
                  {item.label}
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
