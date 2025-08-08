import { Part2 } from "../../Reviews/Review2";
import ComparisonTable from "../../../common/ui/ComparisonTable";
import DescCard from "../../../common/ui/DescCard";
import Comp4 from "../PlansPrevention/Comp4";
function Comp1() {
  // Define columns and rows for the ComparisonTable
  const columns = [
    {
      key: "curex",
      label: "Curex",
      imageSrc:
        "https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/61e0365c68893c40d582eee6_Curex-144-2.webp",
      imageAlt: "Curex packaging",
    },
    {
      key: "allergyshots",
      label: "Allergy Shots",
      imageSrc:
        "https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/64782705bc34f2bd42bdc165_allergyshots.webp",
      imageAlt: "Allergy Shots",
    },
  ];

  const check = (
    <img
      src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/64833678fd31c7c8e03372ff_checkmark.svg"
      alt=""
      style={{ height: 24 }}
    />
  );
  const xmark = (
    <img
      src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/64833678fdc5dc4cf2a4d57d_x-mark.svg"
      alt=""
      style={{ height: 24 }}
    />
  );

  const rows = [
    { key: "athome", label: "At-home treatment", values: [check, xmark] },
    {
      key: "access",
      label: "Access to clinician via text/call/zoom",
      values: [check, xmark],
    },
    {
      key: "noninvasive",
      label: "Non-invasive application?",
      values: [check, xmark],
    },
    { key: "noneedles", label: "No Scary Needles", values: [check, xmark] },
    {
      key: "noschool",
      label: "No Time Away From School",
      values: [check, xmark],
    },
    {
      key: "nocommute",
      label: "No More Commutes to the Allergist",
      values: [check, xmark],
    },
    {
      key: "time",
      label: "Time spent per year",
      values: [<span>Less than 2 hours</span>, <span>Over 52 hours</span>],
    },
    {
      key: "price",
      label: "Price",
      values: [
        <span>
          $59/month
          <br />
          <span style={{ fontSize: "0.9em", fontStyle: "italic" }}>
            + copay
          </span>
        </span>,
        <span>$2,000 - $5,000</span>,
      ],
      isPriceRow: true,
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <div
        style={{
          backgroundColor: "#86c1e9ff",
          padding: "1px 5px",
          borderRadius: "0.5rem",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          fontWeight: "semi-bold",
        }}
      >
        AT-HOME IMMUNOTHERAPY
      </div>
      <br />
      <h1>Choose Curex, Skip the Painful Allergy Shots.</h1>
      <br />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          marginTop: "20px",
          padding: "0rem 4rem",
        }}
      >
        <div
          style={{
            textAlign: "center",
            backgroundColor: "#f6f6f6",
            padding: "20px",
            borderRadius: "1rem",
          }}
        >
          <img src="" alt="" />
          <h3>No In-Person Visits</h3>
          <p>
            Take treatment at-home. See your clinician online & stop wasting
            time in waiting rooms.
          </p>
        </div>
        <div
          style={{
            textAlign: "center",
            backgroundColor: "#f6f6f6",
            padding: "20px",
            borderRadius: "1rem",
          }}
        >
          <img src="" alt="" />
          <h3>No missed school days</h3>
          <p>
            Your kids no longer have to miss out on important school time due to
            weekly visits to the allergist.
          </p>
        </div>
        <div
          style={{
            textAlign: "center",
            backgroundColor: "#f6f6f6",
            padding: "20px",
            borderRadius: "1rem",
          }}
        >
          <img src="" alt="" />
          <h3>Superior safety profile</h3>
          <p>
            Even people suffering from severe reactions choose sublingual
            treatment over allergy shots!
          </p>
        </div>
        <div
          style={{
            textAlign: "center",
            backgroundColor: "#f6f6f6",
            padding: "20px",
            borderRadius: "1rem",
          }}
        >
          <img src="" alt="" />
          <h3>No painful injections.</h3>
          <p>
            Treatment is applied under-the-tongue daily, no needles or painful
            injections involved.
          </p>
        </div>
      </div>
      <br />
      <br />
      <div style={{ marginBottom: "5rem" }}>
        <Part2></Part2>
      </div>
      <h2 style={{ fontWeight: "normal", marginBottom: "5rem" }}>
        A More Convienient Way to an Allergy Free Future
      </h2>
      {/* Comparison Table */}
      <div
        style={{
          width: "100%",
          maxWidth: 900,
          margin: "0 auto",
          marginBottom: "3rem",
        }}
      >
        <ComparisonTable columns={columns} rows={rows} />
      </div>
      <DescCard
        heading="How does it work?"
        desc={
          <>
            <p>
              Curex under-the-tongue Immunotherapy is the most <b>affordable</b>{" "}
              and <b>convenient</b> alternative to allergy shots. By taking the
              same <b>clinical-grade extracts</b> and applying them at the
              comfort of your own home, thousands of allergy sufferers are
              upgrading to a better treatment.
            </p>
          </>
        }
        imgSrc={""}
        imagePosition="right"
      />
      <Comp4 />
      <GetStarted />
      <br />
      <div style={{backgroundColor: "#f9f9f9", padding: "2rem", width: "100%"}}>
        <h2
          style={{
            fontWeight: "lighter",
            margin: "0 2rem",
            textAlign: "center",
          }}
        >
          Don't Take Our Word for It, Take Theirs
        </h2>
        <br />
        <br />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "60px",
            padding: "0 2rem",
          }}
        >
            
          <iframe
            width="458"
            height="257"
            src="https://www.youtube.com/embed/MUDkEfJ-E-A"
            title="Curex is the easiest way to treat your child&#39;s allergies!"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <iframe
            width="458"
            height="257"
            src="https://www.youtube.com/embed/KXb13aftOsc"
            title="What&#39;s better for your child: Curex or Allergy Shots?"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
function GetStarted() {
  return (
    <div>
      <h1>How Curex works</h1>
      <br />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="/YellowSyringes.avif"
          alt="Curex process"
          style={{ width: "30%", borderRadius: "1rem" }}
        />
        <h3
          style={{
            fontWeight: "lighter",
            margin: "0 2rem",
            textAlign: "center",
            width: "30%",
          }}
        >
          Take quiz and sign up for an at-home or in-lab allergy test
        </h3>
      </div>
      <br />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h3
          style={{
            fontWeight: "lighter",
            margin: "0 2rem",
            textAlign: "center",
            width: "30%",
          }}
        >
          Consult with Curex clinician online
        </h3>
        <img
          src="/YellowSyringes.avif"
          alt="Curex process"
          style={{ width: "30%", borderRadius: "1rem" }}
        />
      </div>
      <br />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="/YellowSyringes.avif"
          alt="Curex process"
          style={{ width: "30%", borderRadius: "1rem" }}
        />
        <h3
          style={{
            fontWeight: "lighter",
            margin: "0 2rem",
            textAlign: "center",
            width: "30%",
          }}
        >
          Get your child's allergy treatment delivered
        </h3>
      </div>
    </div>
  );
}
export default Comp1;
