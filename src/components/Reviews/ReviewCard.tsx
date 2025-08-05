import React from "react";

// Utility to pick a random pastel background color
function getRandomBgColor() {
  const colors = [
    "#ffe0f0", // pink
    "#e0f7fa", // light blue
    "#f9fbe7", // light green
    "#fff3e0", // light orange
    "#f3e5f5", // light purple
    "#e1f5fe", // sky blue
    "#fce4ec", // blush
    "#f1f8e9", // mint
    "#fffde7", // pale yellow
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

type ReviewCardProps = {
  name: string;
  date: string;
  review: string;
  imageUrl: string;
  rating?: number; // default 5
  sourceIconUrl?: string; // e.g. Google icon
  bgColor?: string; // optional override
};

const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  date,
  review,
  imageUrl,
  rating = 5,
  sourceIconUrl = "https://www.gstatic.com/images/branding/product/1x/googleg_32dp.png",
  bgColor,
}) => {
  const background = bgColor || getRandomBgColor();
  return (
    <div
      style={{
        background,
        borderRadius: 8,
        padding: 16,
        width: "100%",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        fontFamily: "Inter, Arial, sans-serif",
        color: "#222",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        // No minHeight or fixed height, let content dictate height
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: "#bbb",
            marginRight: 10,
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Optionally, could show initials or a placeholder */}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 600, fontSize: 16 }}>{name}</div>
        </div>
        {sourceIconUrl && (
          <img src={sourceIconUrl} alt="source" style={{ width: 22, height: 22, marginLeft: 6 }} />
        )}
      </div>
      {/* Stars */}
      <div style={{ color: "#111", fontSize: 22, marginBottom: 8 }}>
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>
      {/* Review text */}
      <div style={{ fontSize: 15, lineHeight: 1.5, marginBottom: 12, whiteSpace: "pre-line" }}>{review}</div>
      {/* Image */}
      <div style={{ width: "100%", marginBottom: 8 }}>
        <img
          src={imageUrl}
          alt="review"
          style={{ width: "100%", borderRadius: 8, objectFit: "cover", maxHeight: 180 }}
        />
      </div>
      {/* Date */}
      <div style={{ fontSize: 13, color: "#444", marginTop: 2 }}>{date}</div>
      <div>
        
      </div>
    </div>
  );
};

export default ReviewCard;
