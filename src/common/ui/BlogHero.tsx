import React from 'react';
import './BlogHero.css';

interface BlogHeroProps {
  imgSrc: string;
  date: string;
  title: string;
  imgAlt?: string; // Optional alt text for the image
  className?: string; // Optional className for additional styling
}

const BlogHero: React.FC<BlogHeroProps> = ({ imgSrc, date, title, imgAlt, className }) => {
  return (
    <div className={`blog-hero ${className}`}>
      <div className="blog-hero__image">
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <div className="blog-hero__content">
        <div className="blog-hero__date">{date}</div>
        <h2 className="blog-hero__title">{title}</h2>
      </div>
    </div>
  );
};

export default BlogHero;