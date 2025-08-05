import React from "react";

interface BlogItemProps {
  image: string;
  category: string;
  title: string;
  date: string;
  link: string;
}

const BlogItem: React.FC<BlogItemProps> = ({ image, category, title, date, link }) => {
  return (
    <div style={{ width: 300, textAlign: "center", margin: "0 auto" }}>
      <a
        href={link}
        style={{
          display: "block",
          width: "100%",
          height: 180,
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: 6,
          marginBottom: 12
        }}
        className="blog-item-image"
      />
      <div
        style={{
          backgroundColor: "#83eea9",
          display: "inline-block",
          borderRadius: 8,
          marginBottom: 10,
          padding: "2px 16px"
        }}
        className="badge-block-2 blog"
      >
        <div
          style={{
            color: "#1a4d2e",
            fontWeight: 600,
            fontSize: 14,
            letterSpacing: 1,
            textTransform: "uppercase"
          }}
          className="badge blog filter-category"
        >
          {category}
        </div>
      </div>
      <a href={link} style={{ textDecoration: "none", color: "inherit" }} className="blog-heading-link">
        <h2 style={{ fontFamily: "serif", fontWeight: 400, fontSize: 22, margin: "10px 0 0 0" }}>
          {title}
        </h2>
        <h2 style={{ fontFamily: "serif", fontWeight: 400, fontSize: 18, margin: "6px 0 0 0" }}>
          {date}
        </h2>
      </a>
    </div>
  );
};

export default BlogItem;
