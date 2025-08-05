function HeroReviews() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "500px",
        backgroundImage: "url('https://via.placeholder.com/800x400')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "16px",
        overflow: "hidden",
      }}
    >
      {/* Yellow banner */}
      <div
        style={{
          position: "absolute",
          top: "32px",
          left: "32px",
          background: "#fff700",
          padding: "4px 16px",
          borderRadius: "6px",
          transform: "rotate(-2deg)",
          fontWeight: "bold",
          fontSize: "18px"
        }}
      >
        CUREX REVIEWS
      </div>

      {/* Content area */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: 32,
          color: "#fff",
          maxWidth: 520,
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <h1
          style={{
            fontSize: 32,
            margin: 0,
            fontWeight: 700,
            fontFamily: "Georgia, serif",
            lineHeight: 1.1,
            letterSpacing: "-1px",
            color: "#fff",
            textShadow: "0 2px 12px rgba(0,0,0,0.25)",
          }}
        >
          Allergy Sufferers{' '}
          <span
            style={{
              color: "transparent",
              textShadow: "0 0 #ffb4d2, 0 2px 8px #ffb4d2",
              fontSize: 36,
              verticalAlign: "middle",
              margin: "0 2px",
              display: "inline-block",
              fontFamily: "inherit",
            }}
            className="larger-heart"
          >
            ♥︎
          </span>
          {' '}Curex
        </h1>
        <div
          style={{
            fontSize: 15,
            margin: "10px 0 0 0",
            fontWeight: 400,
            textShadow: "0 2px 8px rgba(0,0,0,0.18)",
            color: "#fff",
            letterSpacing: 0.1,
          }}
          className="hero-subheader is-white"
        >
          Curex is the most c<span>on</span>venient way to t<span>re</span>at allergies.
        </div>
        {/* Senja embed */}
        <div style={{ width: "100%", margin: "10px 0 0 0" }}>
          <script src="https://widget.senja.io/widget/990f99aa-48e4-4380-be4c-2fb16e54c883/platform.js" type="text/javascript" async></script>
          <div className="senja-embed" data-id="990f99aa-48e4-4380-be4c-2fb16e54c883" data-mode="shadow" data-lazyload="false" style={{ display: "block", width: "100%" }}></div>
        </div>
        {/* Button */}
        <a
          id="Big-Header-Button"
          data-analytics-on="click"
          href="/checkout"
          className="alt-btn hero w-button"
          style={{
            marginTop: 14,
            background: "#14d964",
            color: "#fff",
            border: "none",
            borderRadius: 22,
            padding: "8px 22px",
            fontSize: 15,
            fontWeight: 600,
            cursor: "pointer",
            boxShadow: "0 2px 12px rgba(20,217,100,0.18)",
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          Start a Free Quiz
        </a>
      </div>
      
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 100%)",
        }}
      ></div>
    </div>
  );
}
export default HeroReviews;