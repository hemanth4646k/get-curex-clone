import React, { useState } from 'react';
import './BlogMainHero.css';
import BlogsContainer from "../../components/BlogMain/BlogsContainer";
interface BlogMainHeroProps {
  onFiltersChange?: (filters: string[]) => void;
}

const BlogMainHero: React.FC<BlogMainHeroProps> = ({ onFiltersChange }) => {
  const [activeFilters, setActiveFilters] = useState<string>('All');
  const [isCollapsed, setIsCollapsed] = useState(false);

  const filterCategories = [
    { name: 'All', color: 'gray' },
    { name: 'Asthma', color: 'yellow' },
    { name: 'Curex for Kids', color: 'yellow' },
    { name: 'Allergy Testing', color: 'green' },
    { name: 'Immunotherapy', color: 'yellow' },
    { name: 'Allergy Care', color: 'blue' },
    { name: 'Seasonal Allergies', color: 'pink' },
    { name: 'Doctor Advice', color: 'green' },
    { name: 'Pets', color: 'yellow' },
    { name: 'Outdoor Allergies', color: 'blue' },
    { name: 'Indoor Allergies', color: 'pink' }
  ];

  const toggleFilter = (filterName: string) => {
              console.log(filterName);

    setActiveFilters(filterName)
  };

  const resetFilters = () => {
    setActiveFilters('All');
    onFiltersChange?.(['All']);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="blog-main">
      {/* Header Section */}
      <div className="blog-header">
        <div className="background-image">
          <img src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Wildflower meadow with purple, pink, and white flowers" />
        </div>
        <div className="header-content">
          <h1 className="blog-title">Curex Weekly</h1>
        </div>
      </div>

      {/* Filter Section */}
      <div className="filter-section">
        <div className="filter-header">
          <span className="filter-label">FILTER BY</span>
          <button 
            className={`collapse-btn ${isCollapsed ? 'collapsed' : ''}`} 
            onClick={toggleCollapse}
            aria-label="Toggle filters"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <div className={`filter-tags ${isCollapsed ? 'collapsed' : ''}`}>
          {filterCategories.map((category) => (
            <button
              key={category.name}
              className={`filter-tag ${category.color} ${activeFilters.includes(category.name) ? 'active' : ''}`}
              onClick={() => toggleFilter(category.name)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {!isCollapsed && (
          <button className="reset-filters" onClick={resetFilters}>
            RESET FILTERS
          </button>
        )}
      </div>
      <BlogsContainer activeFilters={activeFilters} />
    </div>
  );
};

export default BlogMainHero;
