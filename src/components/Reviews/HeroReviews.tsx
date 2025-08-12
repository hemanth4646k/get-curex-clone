function HeroReviews() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "600px",
        backgroundColor: "#fff",
        backgroundPosition: "center",
        overflow: "hidden",
        display: "flex",
        padding: "0 40px",
      }}
    >
      {/* Left Content */}
      <div
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          paddingRight: "40px",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <img
            src="/public/icons/pink_spring.png"
            alt="Pink spring"
            style={{
              width: "60px",
              position: "absolute",
              top: "80px",
              left: "0",
            }}
          />
        </div>
        <h1
          style={{
            fontSize: "64px",
            lineHeight: "1.1",
            fontWeight: "700",
            color: "#000",
            marginBottom: "20px",
            maxWidth: "600px",
          }}
        >
          50,000+ users who LOVE Curex and have said goodbye to their allergies!
        </h1>
        <p
          style={{
            fontSize: "18px",
            color: "#666",
            marginBottom: "30px",
          }}
        >
          #1 Alternative to allergy shots.
        </p>
        <button
          style={{
            backgroundColor: "#FF69B4",
            color: "white",
            border: "none",
            borderRadius: "30px",
            padding: "15px 30px",
            fontSize: "18px",
            fontWeight: "600",
            cursor: "pointer",
            width: "fit-content",
          }}
        >
          Take the Free Quiz
        </button>
      </div>

      {/* Right Content */}
      <div
        style={{
          flex: "1",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "90%",
              height: "80%",
              backgroundColor: "#FFB6C1",
              borderRadius: "20px",
            }}
          />
          <img
            src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/63b5516226e16f63b9b1674b_image2.avif"
            alt="Happy person"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "90%",
              height: "80%",
              objectFit: "cover",
              borderRadius: "20px",
            }}
          />
        </div>
      </div>
    </div>
  );
}
export default HeroReviews;