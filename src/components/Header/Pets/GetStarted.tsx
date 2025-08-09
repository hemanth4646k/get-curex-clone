import ComparisonTable from '../../../common/ui/ComparisonTable';
// Table data for ComparisonTable
const columns = [
  {
    key: 'curex',
    label: 'Curex',
    imageSrc: 'https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/61e0365c68893c40d582eee6_Curex-144-2.webp',
    imageAlt: 'Curex packaging',
  },
  {
    key: 'shots',
    label: 'Allergy Shots',
    imageSrc: 'https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/629f7e905eabc4379a47eeed_image1.webp',
    imageAlt: 'doctor giving patient a shot',
  },
];

const check = <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/627e7faff6d387845aec8e3e_check.svg" alt="check icon" style={{height: 24}} />;
const xmark = <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/627956027a90d37ea75d5060_x.svg" alt="x icon" style={{height: 24}} />;

const rows = [
  { key: 'athome', label: 'At-home treatment', values: [check, xmark] },
  { key: 'access', label: 'Access to clinician via text/call/zoom', values: [check, xmark] },
  { key: 'noninvasive', label: 'Non-invasive application?', values: [check, xmark] },
  { key: 'efficacy', label: 'Efficacy Studies', values: [check, check] },
  { key: 'price', label: 'Price', values: [
    <>
      <div>$59/month-$99/month</div>
    </>,
    <span>$1,500-$4,000 per year</span>
  ], isPriceRow: true },
];
export  function Compsec() {
  return (
    <div>
      <div style={{width: '100%', maxWidth: 900, margin: '0 auto', marginBottom: '3rem'}}>
        <ComparisonTable columns={columns} rows={rows} />
      </div>
    </div>
  );
}
import "../PlansPrevention/Comp4.css";
function GetStarted() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="getting-started-container">
        <h1 className="main-title">Getting Started is Easy!</h1>
        <p className="subtitle">
          Curex makes it easier than ever to treat allergies, even if you need
          an allergy test or have existing results!
        </p>

        <div className="steps-container">
          {/* Step One Card */}
          <div className="step-card step-one">
            <div className="pricing-section">
              <div className="due-today">DUE TODAY:</div>
              <div className="original-price">$49</div>
              <div className="discounted-price">$4.99</div>
              <div className="sign-up-fee">
                Sign-up fee
                <br />
                (refundable)
              </div>
            </div>

            <div className="step-content">
              <div className="step-header">Treat Pet Allergies</div>

              <div className="features-list">
                <div
                  style={{
                    border: "1px solid pink",
                    padding: "1rem",
                    borderRadius: "1rem",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyItems: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src="" alt="" />
                    <img src="" alt="" />
                  </div>
                  <div>+ any other allergy</div>
                </div>
                <div className="feature-item">
                  <span className="checkmark">✓</span>
                  Prescription for medication or immunotherapy
                </div>
                <div className="feature-item">
                  <span className="checkmark">✓</span>
                  Cancel Anytime
                </div>
              </div>

              <button className="start-quiz-btn">Start with a free quiz</button>
            </div>
          </div>

          {/* Step Two Card */}
          <div className="step-card step-two">
            <div className="step-header-two">STEP TWO:</div>

            <h2 className="immunotherapy-title">Immunotherapy Delivered</h2>

            <div className="pricing-info">
              <div className="monthly-price">$59/month</div>
              <div className="copay">+ copay</div>
            </div>

            <div className="package-image">
              <img
                src=""
                alt="Curex delivery package"
                className="package-img"
              />
            </div>

            <div className="features-list">
              <div className="feature-item">
                <span className="checkmark">✓</span>
                Free shipping
              </div>
              <div className="feature-item">
                <span className="checkmark">✓</span>
                Ongoing access to allergist
              </div>
            </div>

            <div className="insurance-note">
              High deductible plan? No insurance? No problem!
            </div>
          </div>
        </div>
      </div>
      <Immunotherapy />
      <CompT/>
    </div>
  );
}
function Immunotherapy() {
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding:"2rem 4rem",
        backgroundColor:"#ffffec"
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
        IMMUNOTHERAPY
      </div>
      <h1 style={{ fontWeight: "normal" }}>
        Immunotherapy targets the source of your pet allergies
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1rem",
          gridColumnGap: "40px",
          gridRowGap: "40px",
          maxWidth: "1200px",
          marginTop: "20px",
          marginLeft: "auto",
          marginRight: "auto",

        }}
      >
        <div>
          <img
            src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/628c5fa72a8d34448942714b_img_8837.jpg"
            loading="lazy"
            sizes="(max-width: 600px) 100vw, 600px"
            srcSet="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/628c5fa72a8d34448942714b_img_8837-p-500.jpeg 500w, https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/628c5fa72a8d34448942714b_img_8837.jpg 600w"
            alt="laboratory testing"
            style={{
              objectFit: "cover",
              borderRadius: "10px",
              width: "100%",
              height: "400px",
              marginBottom: "20px",
              display: "block",
            }}
          />
          <p>
            Small doses of medical-grade pet allergens train your immune system.
          </p>
        </div>
        <div>
          <img
            src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/61d34a7c6fffa17283588ded_Rectangle%208%20(4).avif"
            alt=""
            style={{
              objectFit: "cover",
              borderRadius: "10px",
              width: "100%",
              height: "400px",
              marginBottom: "20px",
              display: "block",
            }}
          />
          <p>Over time your body becomes desensitized to pet dander.</p>
        </div>
        <div>
          <img
            src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/61e1d93617825638efe96b78_Curex-243%20(1).avif"
            alt=""
            style={{
              objectFit: "cover",
              borderRadius: "10px",
              width: "100%",
              height: "400px",
              marginBottom: "20px",
              display: "block",
            }}
          />
          <p>
            After regular use,{" "}
            <a href="/immuno-101">immunotherapy provides long term relief</a>{" "}
            from pet allergies & reduces your risk of asthma.
          </p>
        </div>
      </div>
    </div>
  );
}
function CompT(){
    return (
        <div>
            <h2 style={{fontWeight:"normal"}}>Curex is a convenient alternative to allergy shots</h2>
            <Compsec/>
        </div>
    );
}
export default GetStarted;
