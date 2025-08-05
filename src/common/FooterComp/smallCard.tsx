
import React from "react";

interface SmallCardProps {
  title: string;
  description: string;
  link: string;
}

const SmallCard: React.FC<SmallCardProps> = ({ title, description, link }) => (
  <div className="div-block-295" style={{
    background: "#fff",
    borderRadius: 16,
    boxShadow: "0 1px 8px 0 rgba(60,72,88,.08)",
    padding: 24,
    margin: 8,
    maxWidth: 400,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: 260
  }}>
    <h4 className="heading-89" style={{ fontWeight: 700, fontSize: 22, marginBottom: 12 }}>{title}</h4>
    <p className="paragraph-9" style={{ fontSize: 16, color: "#222", marginBottom: 24 }}>{description}</p>
    <a
      href={link}
      id="checkoutRedirect"
      data-analytics-on="click"
      className="button is-pink directory w-button"
      style={{
        background: "#f73fa3",
        color: "#fff",
        border: "none",
        borderRadius: 24,
        padding: "12px 0",
        fontWeight: 600,
        fontSize: 16,
        textAlign: "center",
        textDecoration: "none",
        width: "100%",
        display: "block",
        marginTop: "auto"
      }}
    >
      Learn More
    </a>
  </div>
);

export default SmallCard;
