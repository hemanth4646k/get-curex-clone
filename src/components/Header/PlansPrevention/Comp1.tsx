import { Link } from "react-router-dom";
import DescCard from "../../../common/ui/DescCard";
import Comp2 from "./Comp2";

import Comp4 from "./Comp4";
import InsurancePartnersCommon from "../../../common/InsurancePartners";
import Comp6 from "./Comp6";
import Testimonials from "./Testimonials";

function Comp1() {
  return (
    <div>
      <DescCard
        heading="Stop allergies at the source."
        desc="Curex is a convenient alternative to time-consuming allergy shots."
        imgSrc=""
        buttonEle={
          <button
            style={{
              width: "100%",
              padding: "12px 16px",
              backgroundColor: "#ff69b4",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Take A Free Allergy quiz
          </button>
        }
      />
    </div>
  );
}
function BundleComp() {
  return (
    <div style={{ padding: "2rem" }}>
      <Comp1 />
      <Comp2 />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "2rem 0",
        }}
      >
        <img src="/header-plans-prev.png" alt="graph of header-plan-prev" />
        <br />
        <h1>Answers to Allergies</h1>
        <img src="/header-plans-prev-2.png" alt="" />
      </div>
      <Comp4 />
      <div style={{ textAlign: "center", padding: "2rem 0" }}>
        <h1>Immunotherapy's Natural Ingredients: Farm to Pharmacy</h1>
        <DescCard
          heading=""
          desc={
            <>
              <h3 style={{ fontWeight: "bold", color: "#ff69b4" }}>
                Harvesting:
              </h3>
              <p>
                Plants (raw materials for pollen extracts) are grown on over 800
                acres of farm land under strict supervision of scientists,
                agronomists and horticulturists.
              </p>
            </>
          }
          imgSrc=""
          imagePosition="right"
        />

        <DescCard
          heading=""
          desc={
            <>
              <h3 style={{ fontWeight: "bold", color: "#ff69b4" }}>
                Preparation:{" "}
              </h3>
              <p>
                Pollen is processed in GMP compliant facilities that are
                routinely inspected by the FDA.
              </p>
            </>
          }
          imgSrc=""
        />
        <DescCard
          heading=""
          desc={
            <>
              <h3 style={{ fontWeight: "bold", color: "#ff69b4" }}>Testing:</h3>
              <p>
                {" "}
                All pollen batches undergo extensive testing, documentation, and
                quality control measures, including examination under a
                microscope to certify the identity, purity and integrity.
              </p>
            </>
          }
          imgSrc=""
          imagePosition="right"
        />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "2rem 0" }}
      >
        <Link
          to="/immuno-science"
          style={{
            marginRight: "20px",
            fontSize: "16px",
            color: "#ff69b4",
            fontWeight: "bold",
            textDecoration: "underline",
          }}
        >
          Read More Immunotherapy Science
        </Link>
        <Link
          to="/immuno-science"
          style={{
            marginRight: "20px",
            fontSize: "16px",
            color: "#ff69b4",
            fontWeight: "bold",
            textDecoration: "underline",
          }}
        >
          Read More Immunotherapy Science
        </Link>
      </div>
      <Comp5 />
      <Testimonials />
      <Comp6/>
    </div>
  );
}

function Comp5() {
  return (
    <div style={{ padding: "2rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h2>Why prevention is more effective than allergy medicine</h2>
      <br />
      <div style={{display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px", width:"80%"}}>
        <div style={{width:"60%", textAlign: "center", margin: "0 auto"}}>
          <b>Exposure therapy:</b>
          <p>Train your immune system to fight allergies rather than treat them with medications</p>
          <img src="" alt="person-svg" />
        </div>
        <div style={{width:"80%", textAlign: "center", margin: "0 auto"}}>
          <b>Desensitization:</b>
          <p>Symptoms subside as your body desensitized to allergies reducing or eliminating the need for daily medication</p>
          <img src="" alt="person-svg" />
        </div>
        <div style={{width:"60%", textAlign: "center", margin: "0 auto"}}>
          <b>Exposure Prevention:</b>
          <p> Immunotherapy helps prevent and fight allergies at the source</p>
          <img src="" alt="person-svg" />
        </div>
      </div>
      <InsurancePartnersCommon/>
      <HowCurexWorks/>
      <UnderstandingCurex/>
    </div>
  );
}

export function HowCurexWorks() {
  return (
    <div >
        <h1>How Curex works</h1>
        <br />
        <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          <img src="/YellowSyringes.avif" alt="Curex process" style={{width: "30%", borderRadius: "1rem"}} />
          <h2 style={{fontWeight: "lighter", margin: "0 1rem"}}>Get Your Allergy Test</h2>
        </div><br />
        <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          <h2 style={{fontWeight: "lighter", margin: "0 1rem"}}>Consult with an Expert Online</h2>
          <img src="/YellowSyringes.avif" alt="Curex process" style={{width: "30%", borderRadius: "1rem"}} />
        </div><br />
        <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          <img src="/YellowSyringes.avif" alt="Curex process" style={{width: "30%", borderRadius: "1rem"}} />
          <h2 style={{fontWeight: "lighter", margin: "0 1rem"}}>Start Treatment at Home</h2>
        </div>
      </div>
  );
}
function UnderstandingCurex(){
  return (
    <div style={{ padding: "2rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>Understanding Curex</h1>
      <br />
      <div style={{display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px", width:"80%"}}>
        <div style={{width:"60%", textAlign: "center", margin: "0 auto"}}>
          <b>Allergy Testing:</b>
          <p>Allows Curex clinicians to effectively prescribe personalized treatment plans based on specific allergy results.</p>
          <img src="" alt="person-svg" />
        </div>
        <div style={{width:"80%", textAlign: "center", margin: "0 auto"}}>
          <b>Desensitization:</b>
          <p>immunotherapy helps symptoms subside as you desensitizes to allergens reducing the need for medications</p>
          <img src="" alt="person-svg" />
        </div>
        <div style={{width:"60%", textAlign: "center", margin: "0 auto"}}>
          <b>Prevention:</b>
          <p>Continued immunotherapy helps prevent and fight allergies at the source providing long-term allergy relief.</p>
          <img src="" alt="person-svg" />
        </div>
      </div>
    </div>
  )
}
export { Comp1 };
export default BundleComp;
