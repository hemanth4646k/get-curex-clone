import InsurancePartnersCommon from "../../../common/InsurancePartners";
import DescCard from "../../../common/ui/DescCard";

 function CurexComparison() {
  return (
    <section
      style={{
        background: "#fff6fa",
        padding: "3.5rem 1rem 4.5rem 1rem",
        textAlign: "center",
        fontFamily: "Inter, Arial, sans-serif",
        color: "#181936",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          fontSize: "0.95rem",
          fontWeight: 600,
          color: "#adc8e6",
          letterSpacing: "1.2px",
          marginBottom: "0.4rem",
          textTransform: "uppercase",
          background: "#e7f6fa",
          display: "inline-block",
          padding: "3px 12px",
          borderRadius: "8px",
        }}
      >
        COMPARISON
      </div>
      <h2 style={{ fontSize: "2.5rem", fontWeight: 700, margin: "0.3rem 0 1.3rem 0" }}>
        Reunite with your furry friend!
      </h2>
      <p style={{ color: "#4B507A", fontSize: "1rem", marginBottom: "3.7rem" }}>
        (Or your roommate's cat that knocks your coffee over every morning)
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "3.3rem",
          flexWrap: "wrap",
          alignItems: "flex-start",
        }}
      >
        {/* WITH CUREX */}
        <div
          style={{
            width: "50%",
            height: "100%",
            background: "#fff",
            borderRadius: "20px",
            boxShadow: "0 4px 34px rgba(70,18,86,0.09)",
            textAlign: "left",
            padding: "2.1rem 2rem 1.75rem 2rem",
            minWidth: 285,
            flex: "0 1 355px",
          }}
        >
          <div
            style={{
              fontWeight: 700,
              fontSize: "1.23rem",
              marginBottom: "1rem",
              color: "#222",
            }}
          >
            With Curex:
          </div>
          <div
            style={{
              width: "100%",
              height: 185,
              borderRadius: "14px",
              background: "#dbeafe",
              overflow: "hidden",
              marginBottom: "1.7rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "14px",
                display: "block",
              }}
              src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/61f2ed67945c4f8383541d95_Curex%20cat%20allergies-1.avif"
              alt="Person holding cat outdoors, blue sky"
            />
          </div>
          <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
            <li style={{ display: "flex", alignItems: "center", marginBottom: "1.23rem" }}>
              <span
                style={{
                  color: "#7bdd8b",
                  fontSize: "1.36rem",
                  marginRight: "0.85rem",
                  lineHeight: "0",
                  fontWeight: 600,
                  display: "inline-block",
                }}
                aria-label="check"
              >✔</span>
              <span style={{ fontSize: "1.07rem" }}>
                Spend time around pets without the symptoms.
              </span>
            </li>
            <li style={{ display: "flex", alignItems: "center", marginBottom: "1.23rem" }}>
              <span
                style={{
                  color: "#7bdd8b",
                  fontSize: "1.36rem",
                  marginRight: "0.85rem",
                  lineHeight: "0",
                  fontWeight: 600,
                  display: "inline-block",
                }}
                aria-label="check"
              >✔</span>
              <span style={{ fontSize: "1.07rem" }}>
                Become less dependent on allergy meds.
              </span>
            </li>
            <li style={{ display: "flex", alignItems: "center" }}>
              <span
                style={{
                  color: "#7bdd8b",
                  fontSize: "1.36rem",
                  marginRight: "0.85rem",
                  lineHeight: "0",
                  fontWeight: 600,
                  display: "inline-block",
                }}
                aria-label="check"
              >✔</span>
              <span style={{ fontSize: "1.07rem" }}>
                Treat outdoor &amp; indoor allergies along with pet allergies.
              </span>
            </li>
          </ul>
        </div>

        {/* WITHOUT CUREX */}
        <div
          style={{
            width: 355,
            height: "100%",
            background: "#fff",
            borderRadius: "20px",
            boxShadow: "0 4px 34px rgba(70,18,86,0.09)",
            textAlign: "left",
            padding: "2.1rem 2rem 1.75rem 2rem",
            minWidth: 285,
            flex: "0 1 355px",
          }}
        >
          <div
            style={{
              fontWeight: 700,
              fontSize: "1.23rem",
              marginBottom: "1rem",
              color: "#222",
            }}
          >
            Without Curex:
          </div>
          <div
            style={{
              width: "100%",
              height: 185,
              borderRadius: "14px",
              background: "#fed7e0",
              overflow: "hidden",
              marginBottom: "1.7rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "14px",
                display: "block",
              }}
              src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/61f2ef0c2643780655d1ecbb_Triggers-curex.avif"
              alt="Person holding cat, bright pink background"
            />
          </div>
          <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
            <li style={{ display: "flex", alignItems: "center", marginBottom: "1.23rem" }}>
              <span
                style={{
                  color: "#f96479",
                  fontWeight: 700,
                  fontSize: "1.45rem",
                  marginRight: "0.72rem",
                  lineHeight: "0",
                  display: "inline-block",
                }}
                aria-label="x"
              >✗</span>
              <span style={{ fontSize: "1.07rem" }}>
                Practice avoidance around pets.
              </span>
            </li>
            <li style={{ display: "flex", alignItems: "center", marginBottom: "1.23rem" }}>
              <span
                style={{
                  color: "#f96479",
                  fontWeight: 700,
                  fontSize: "1.45rem",
                  marginRight: "0.72rem",
                  lineHeight: "0",
                  display: "inline-block",
                }}
                aria-label="x"
              >✗</span>
              <span style={{ fontSize: "1.07rem" }}>
                Frequent use of meds, drops and sprays.
              </span>
            </li>
            <li style={{ display: "flex", alignItems: "center" }}>
              <span
                style={{
                  color: "#f96479",
                  fontWeight: 700,
                  fontSize: "1.45rem",
                  marginRight: "0.72rem",
                  lineHeight: "0",
                  display: "inline-block",
                }}
                aria-label="x"
              >✗</span>
              <span style={{ fontSize: "1.07rem" }}>
                Risk of developing chronic health problems.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Comp1() {
  return (
    <div>
      <DescCard
        heading="The Science of Immunotherapy to the Rescue!"
        desc="Curex helps reduce your pet allergies over time through immunotherapy - Our clinicians will formulate a treatment for you to develop immunity to cats, dogs or other allergens."
        imgSrc="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/61bcf0c424785479fdefedb3_feature-3.svg"
        imagePosition="right"
      />
      <InsurancePartnersCommon/>
      <CurexComparison/>
    </div>
  );
}
export default Comp1;