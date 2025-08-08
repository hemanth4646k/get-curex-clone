import { Link } from "react-router-dom";
import Hero from "../../../common/ui/Hero";

function HeroKAC() {
  return (
    <div style={{ padding: "2rem 4rem" }}>
      <Hero
        heading="#1 Pediatrician-Approved Alternative to Allergy Shots"
        subtitle="Control your child's allergies without the hassle of shots."
        ctaText="Take out Free quiz"
        imageSrc="/YellowSyringes.avif"
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr 1fr",
          gap: "20px",
          padding: "2rem 4rem",
        }}
      >
        <img src="/YellowSyringes.avif" alt="" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
          }}
        >
          <div
            style={{
              backgroundColor: "#dbe36cff",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              minWidth: "14rem",
              paddingTop: ".5rem",
              paddingBottom: ".5rem",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              fontFamily: "Lausanne",
              fontSize: "20px",
              fontWeight: 500,
              lineHeight: 1.5,
              transform: "rotate(-5deg)",
            }}
          >
            CJ Morgan
          </div>
          <br />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.25fr 1fr",
              gap: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                textAlign: "center",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#a7e3ffff",
                padding: "1rem 1.5rem",
                paddingBottom: "2.5rem",
                borderRadius: "0.5rem",
              }}
            >
              “My kids and I were sick of the weekly allergy shot appointments,
              and the thousands of dollars we were paying for treatment.”
            </div>
            <div
              style={{
                display: "flex",
                textAlign: "center",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#f3a7ffff",
                padding: "1rem 1.5rem",
                borderRadius: "0.5rem",
                paddingBottom: "2.5rem",
              }}
            >
              “The drops are quick and easy”
            </div>
          </div>
          <br />
          <div
            style={{
              backgroundColor: "#76f194ff",
              padding: "1rem 1.5rem",
              paddingBottom: "2.5rem",
              borderRadius: "0.5rem",
              width: "60%",
            }}
          >
            “The price is much lower, everything was handled online- even the
            consultation with the allergist!”
          </div>
        </div>
        <img src="/YellowSyringes.avif" alt="" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 24,
        }}
      >
        <div style={{ display: "flex", gap: 2, marginBottom: 2 }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="#1ea7fd"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2l2.917 6.26L22 9.27l-5 4.87L18.834 22 12 18.27 5.166 22 7 14.14l-5-4.87 7.083-1.01z" />
            </svg>
          ))}
        </div>
        <span style={{ fontSize: 16, fontWeight: 400, marginTop: 2 }}>
          Reviewed on
          <img src="/GoogleLogo.svg" alt="Google Logo" />
        </span>
      </div>
      <br />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Link to="/reviews" style={{
            textDecoration: "underline",
            color: "#fd1ebeff",
            fontWeight: 500,
            fontSize: 16,
          }}>Read More Verified Reviews</Link>
      </div>
    </div>
  );
}
export default HeroKAC;
