import React from "react";

interface Review {
  name: string;
  review: string;
  position?: "left" | "right";
}

const StyledReviewGrid: React.FC = () => {
  const reviews: Review[] = [
    {
      name: "Dalton G.",
      review: "These drops have almost completely cured that problem (and I'm sure that with time, it will be 100% better.) If you have allergies and you're looking for relief, Curex is the answer!",
      position: "left"
    },
    {
      name: "Emile S.",
      review: "When I first heard about the Company from a friend who also has bad allergies and had found Curex — I thought it was too good to be true.\n\nThe results speak for themselves. I truly can't emphasize enough how incredible Curex is. I typically never write reviews on products or companies, but I feel as though so many people could benefit from Curex if they only knew it existed and/or actually works.",
      position: "right"
    },
    {
      name: "Steven D.",
      review: "Allergies were ruining my life. Over the counter medicine wasn't working, especially on bad days. I was desperate for relief, but short on time. I saw an ad for Curex and instantly flocked to the website. I was amazed and quickly signed up. I couldn't believe how quick and painless it was to sign up, get tested, and get the results!",
      position: "left"
    },
    {
      name: "Ken S.",
      review: "Been on a regiment for a few months....already feeling the positive effects. Take your drops every day and let the rest happen. My cat and dust allergies are already fading. This is NOT a paid post or a bot. I am a real human (in my 50's) who developed allergies late in life. Can't wait to get off allergy medicine in the next 24 months. :) Try Curex. It works!",
      position: "right"
    }
  ];

  return (
    <div style={{ 
      padding: "80px 0",
      backgroundColor: "#fff"
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "40px",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 20px"
      }}>
        {reviews.map((review, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#e8f5e8",
              borderRadius: "16px",
              padding: "40px",
              position: "relative",
              border: "2px solid #d4e5d4",
              ...(review.position === "right" ? { marginTop: "60px" } : {})
            }}
          >
            {/* Quote mark */}
            <div
              style={{
                position: "absolute",
                top: "-20px",
                left: review.position === "right" ? "auto" : "30px",
                right: review.position === "right" ? "30px" : "auto",
                fontSize: "60px",
                color: "#7dd87d",
                fontWeight: "bold",
                lineHeight: "1"
              }}
            >
              "
            </div>

            {/* Decorative icon */}
            <div
              style={{
                position: "absolute",
                top: "20px",
                right: review.position === "right" ? "auto" : "20px",
                left: review.position === "right" ? "20px" : "auto",
                width: "60px",
                height: "60px",
                opacity: 0.3
              }}
            >
              {review.position === "right" ? (
                // Pink decorative element for right cards
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <path d="M15 45C25 35 35 25 45 15" stroke="#ff69b4" strokeWidth="8" strokeLinecap="round"/>
                  <path d="M25 50C35 40 45 30 55 20" stroke="#ff69b4" strokeWidth="6" strokeLinecap="round"/>
                </svg>
              ) : (
                // Blue decorative element for left cards
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <path d="M15 15C25 25 35 35 45 45" stroke="#69b4ff" strokeWidth="8" strokeLinecap="round"/>
                  <path d="M10 25C20 35 30 45 40 55" stroke="#69b4ff" strokeWidth="6" strokeLinecap="round"/>
                </svg>
              )}
            </div>

            {/* Name */}
            <h3 style={{
              fontSize: "24px",
              fontWeight: "600",
              color: "#2d5a2d",
              marginBottom: "20px",
              marginTop: "20px"
            }}>
              {review.name}
            </h3>

            {/* Review text */}
            <p style={{
              fontSize: "16px",
              lineHeight: "1.6",
              color: "#4a4a4a",
              marginBottom: "30px",
              whiteSpace: "pre-line"
            }}>
              {review.review}
            </p>

            {/* Stars */}
            <div style={{ 
              display: "flex", 
              gap: "4px", 
              marginBottom: "20px",
              justifyContent: "center"
            }}>
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="#00d4aa">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              ))}
            </div>

            {/* Reviewed on Google */}
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              opacity: 0.8
            }}>
              <span style={{
                fontSize: "14px",
                color: "#666"
              }}>
                Reviewed on
              </span>
              <img 
                src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/628eff27a439cd53c2af6565_Google__G__Logo.svg.avif"
                alt="Google logo"
                style={{
                  width: "20px",
                  height: "20px"
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StyledReviewGrid;
