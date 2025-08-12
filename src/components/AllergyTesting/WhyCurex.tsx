import React from "react";
import "./WhyCurex.css";
import DescCard from "../../common/ui/DescCard";

const WhyCurex: React.FC = () => {
  return (
    <div>
      <DescCard
        heading="Why get tested?"
        desc={
          <>
            <p>
              When it comes to allergy treatment, there is no one-size-fits-all
              approach.
            </p>
            <br/>
            <p>
              Our doctors require test results to formulate the best treatment
              for your specific allergy triggers.
            </p>
            <br/>
            <p>We accept prior allergy test results, if available.</p>
          </>
        }
        imgSrc="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/654c827c8627503eaa07bb2f_woman-with-dog-p-800.jpg"
        imagePosition="right"
      ></DescCard>

      <section className="why-curex">
        <div className="why-curex-container">
          {/* Convenient Testing Section */}
          <div className="convenient-testing">
            <h2 className="convenient-testing-title">
              Curex offers convenient testing:
            </h2>

            <div className="testing-options">
              {/* At-Home Automatic Test Kit */}
              <div className="testing-card">
                <div className="card-image">
                  <img
                    src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/654c8ecb578e1e69395880f5_woman-using-test-p-1600.jpg"
                    alt="Woman using at-home test kit with automatic blood collection device"
                    className="card-image-img"
                  />
                </div>
                <div className="card-content">
                  <div className="card-badge most-convenient">
                    MOST CONVENIENT
                  </div>
                  <h3 className="card-title">At-Home Automatic Test Kit</h3>
                  <p className="card-description">
                    Receive a painless automatic blood collection at-home. Takes
                    less than 5 minutes. Ship it back when done.
                  </p>
                </div>
              </div>

              {/* In-Lab Test */}
              <div className="testing-card">
                <div className="card-image">
                  <img
                    src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/654c8ecc3dffee07f784f6d7_Quest-Diagnostics-logo%201.avif"
                    alt="Quest Diagnostics and Labcorp laboratory logos for in-lab testing"
                    className="card-image-img"
                  />
                </div>
                <div className="card-content">
                  <h3 className="card-title">In-Lab Test</h3>
                  <p className="card-description">
                    Take your test at a local lab location. (often available
                    same day)
                  </p>
                </div>
              </div>

              {/* Concierge At-Home Test */}
              <div className="testing-card">
                <div className="card-image">
                  <img
                    src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/62c739969e1e9f8047bdea7e_image20-p-1600.jpeg"
                    alt="Medical professional visiting patient at home for concierge blood draw service"
                    className="card-image-img"
                  />
                </div>
                <div className="card-content">
                  <h3 className="card-title">Concierge At-Home Test</h3>
                  <p className="card-description">
                    A medical professional comes to your home or office for a
                    quick blood draw (schedule 5-7 days in advance)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Hospital-Grade Testing Section */}
          <div className="hospital-grade-testing">
            <h2 className="hospital-grade-title">Hospital-Grade Testing</h2>
            <p className="hospital-grade-subtitle">
              Curex will order a hospital-grade test for you, to ensure the most
              accurate results.
            </p>

            <div className="comparison-chart">
              <div className="chart-item">
                <div className="chart-label">
                  <span className="label-icon at-home"></span>
                  <span className="label-text">At-Home Test Kit</span>
                </div>
                <div className="chart-bar">
                  <div
                    className="bar-fill at-home-bar"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>

              <div className="chart-item">
                <div className="chart-label">
                  <span className="label-icon at-home-concierge"></span>
                  <span className="label-text">At-Home Concierge Test</span>
                </div>
                <div className="chart-bar">
                  <div
                    className="bar-fill concierge-bar"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>

              <div className="chart-item">
                <div className="chart-label">
                  <span className="label-icon in-lab"></span>
                  <span className="label-text">In-Lab Test</span>
                </div>
                <div className="chart-bar">
                  <div
                    className="bar-fill in-lab-bar"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>

              <div className="chart-item">
                <div className="chart-label">
                  <span className="label-text">Doctors Office Screen Test</span>
                </div>
                <div className="chart-bar">
                  <div
                    className="bar-fill doctor-office-bar"
                    style={{ width: "25%" }}
                  ></div>
                </div>
              </div>

              <div className="chart-item">
                <div className="chart-label">
                  <span className="label-text">Finger Prick Test Kit</span>
                </div>
                <div className="chart-bar">
                  <div
                    className="bar-fill finger-prick-bar"
                    style={{ width: "15%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="chart-scale">
              <span className="scale-start">0%</span>
              <span className="scale-end">100%</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyCurex;
