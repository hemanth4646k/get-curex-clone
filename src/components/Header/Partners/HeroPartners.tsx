import { Link } from "react-router-dom";
import Hero from "../../../common/ui/Hero";
import { Part2 } from "../../Reviews/Review2";
import React from "react";
import InsurancePartnersCommon from "../../../common/InsurancePartners";
import Testimonials from "../Pets/Testimonials";
import { OurTeam } from "../../../pages/header/KidsReviews";
import Faq from '../../../common/ui/Faq';

const statsData = [
  {
    value: "#1",
    label: "Reason for missing school or work",
    style: { background: "#ffffcc", color: "#1a1a1a" },
  },
  {
    value: "91%",
    label: "Endure reduced productivity",
    style: { background: "#b2d8ff", color: "#1a1a1a" },
  },
  {
    value: "83%",
    label: "Suffer reduced quality of life",
    style: { background: "#ffcce0", color: "#1a1a1a" },
  },
  {
    value: "$7,000",
    label: "Yearly spent on moderate & severe asthmatics",
    style: { background: "#ccffe0", color: "#1a1a1a" },
  },
  {
    value: "50 million",
    label: "Allergy Suffers",
    style: { background: "#b2d8ff", color: "#1a1a1a" },
  },
  {
    value: "25 million",
    label: "Asthma sufferers",
    style: { background: "#ffffcc", color: "#1a1a1a" },
  },
  {
    value: "32 million",
    label: "Food allergy sufferers",
    style: { background: "#ccffe0", color: "#1a1a1a" },
  },
];

const AllergiesAreABigProblem: React.FC = () => (
  <div
    style={{
      fontFamily: "Inter, Arial, sans-serif",
      padding: "32px 0",
      background: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <div
      style={{
        textAlign: "center",
        maxWidth: 700,
        margin: "0 auto 32px auto",
      }}
    >
      <div
        style={{
          color: "#555",
          textTransform: "uppercase",
          letterSpacing: 1,
          fontSize: 14,
          marginBottom: 8,
        }}
      >
        BENEFITS
      </div>
      <h2 style={{ fontSize: 36, fontWeight: 700, margin: "0 0 12px 0" }}>
        Allergies are a big problem.
      </h2>
    </div>
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 18,
        justifyContent: "center",
        marginBottom: 32,
      }}
    >
      {statsData.map(({ value, label, style }, i) => (
        <div
          key={i}
          style={{
            ...style,
            borderRadius: 22,
            padding: "32px 24px 24px 24px",
            width: 200,
            height: 150,
            boxShadow: "0 1px 8px rgba(100,100,100,0.03)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 22,
            fontWeight: 500,
            position: "relative",
            boxSizing: "border-box",
          }}
        >
          <div style={{ fontSize: 36, fontWeight: 600, marginBottom: 10,lineHeight: 0.8, wordBreak: "break-word" }}>
            {value}
          </div>
          <div style={{ fontSize: 15, color: "#3e3e3e", wordBreak: "break-word", whiteSpace: "normal" }}>{label}</div>
        </div>
      ))}
    </div>
    <div
      style={{
        borderTop: "1px solid #eee",
        width: "80%",
        maxWidth: 700,
        textAlign: "center",
        margin: "16px auto 0 auto",
        paddingTop: 18,
      }}
    >
      <div style={{ fontSize: 20, marginBottom: 6 }}>
        Partner with us to lead the change.
      </div>
      <div style={{ fontSize: 15, color: "#606060" }}>
        Our patients give us the highest satisfaction and retention scores in
        the industry.
      </div>
    </div>
    {/* Inline Image from provided info */}
    <div style={{ marginTop: 32 }}>
      <img
        src="image.jpg" // Replace with your actual image import path if needed
        alt="Allergies are a big problem"
        style={{
          maxWidth: 400,
          width: "100%",
          borderRadius: 16,
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        }}
      />
    </div>
  </div>
);

export { AllergiesAreABigProblem };

function HeroPartners() {
  return (
    <div style={{padding:"2rem 4rem"}}>
      <Hero
        heading={
          <>
            <div
              style={{
                backgroundColor: "#edffbaff",
                width: "fit-content",
                padding: "10px",
                borderRadius: "1rem",
                fontSize: "1rem",
                transform: "rotate(-5deg)",
              }}
            >
              BETTER ALLERGY CARE
            </div>
            <h2>
              <span style={{ color: "#96e5ffff" }}>#1</span> Allergy Clinic
            </h2>
          </>
        }
        subtitle="We partner with clinics to give patients access to quality allergy & asthma care."
        ctaText="Take The Free Quiz"
      />
      {/* <Leader/> */}
      <Part2 />
      <div style={{ textAlign: "center", padding: "2rem 0" }}>
        <h2>How can your clinic work with us?</h2>
        <br />
        <p>Grow your business. Help your patients.</p>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "2rem",
        }}
      >
        <div
          style={{
            padding: "1rem",
            border: "1px solid #eee",
            borderRadius: "1rem",
          }}
        >
          <div>Diagnostics</div>
          <h3>Allergy Testing</h3>
          <p>
            {
              "We enable you to provide skin scratch allergy testing in your clinic. Avg. revenue increase of >$5,000 per month."
            }
          </p>
          <br />
          <img
            src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/628bcde1304bd8e39b892f10_skin-prick-allergy-testing-2021-08-26-16-53-38-utc%20(1)-p-1600.jpeg"
            alt=""
            style={{
              aspectRatio: 1,
              objectFit: "cover",
              borderRadius: "1rem",
              width: "100%",
            }}
          />
          <br />
          <Link
            to="/plans/prevention-plus"
            style={{
              width: "100%",
              textAlign: "center",
              padding: "1rem 0",
              backgroundColor: "#ff32c5ff",
              borderRadius: "1rem",
              color: "#ffffff",
              fontWeight: "bold",
            }}
          >
            {" "}
            <button style={{ width: "100%" }}>Learn More</button>
          </Link>
        </div>
        <div
          style={{
            padding: "1rem",
            border: "1px solid #eee",
            borderRadius: "1rem",
          }}
        >
          <div>Referral</div>
          <h3>Allergy Care</h3>
          <p>
            {
              "Refer your patients to Curex. We provide allergy test review, at-home immunotherapy and asthma care."
            }
          </p>
          <br />
          <img
            src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/62273a15a1e4613ea10c1d35_61c5f0edff51f019b65e8098_Rectangle%2053%20(3).webp"
            alt=""
            style={{
              aspectRatio: 1,
              objectFit: "cover",
              borderRadius: "1rem",
              width: "100%",
            }}
          />
          <br />
          <Link
            to="/allergy-test"
            style={{
              width: "100%",
              textAlign: "center",
              padding: "1rem 0",
              backgroundColor: "#32ff40ff",
              borderRadius: "1rem",
              color: "#ffffff",
              fontWeight: "bold",
            }}
          >
            {" "}
            <button style={{ width: "100%" }}>Learn More</button>
          </Link>
        </div>
      </div>
      <AllergiesAreABigProblem/><InsurancePartnersCommon/>
      <Testimonials/>
      <OurTeam/>
      {/* FAQ Section */}
      <div style={{ maxWidth: 900, margin: '48px auto' }}>
        <Faq
          faqs={[
            {
              question: 'Sign up for Free Webinar',
              answer: (
                <>
                  <p>Learn how allergy immunotherapy can help you find lasting relief. Allergy experts discuss allergy shots, allergy drops and food OIT to help you reduce your environmental and/or food allergies. Reserve your spot here: </p>
                  <p><a target="_blank" href="https://calendly.com/webinar-curex/allergy-immunotherapy">https://calendly.com/webinar-curex/allergy-immunotherapy</a></p>
                </>
              ),
            },
            {
              question: 'Where does Curex operate?',
              answer: (
                <>
                  <p>Curex is the largest online allergy and asthma clinic in the U.S. We started because our clinicians wanted to offer more convenient and affordable allergy and asthma care for everyone. So far we have attracted more than 50,000 customers from every U.S. state. We are proud to have the highest patient satisfaction and loyalty rates in the industry. Our service has been audited and endorsed by <a href="http://legitscript.com/" target="_blank">LegitScript.com</a>.</p>
                </>
              ),
            },
            {
              question: 'How can I partner with Curex?',
              answer: (
                <>
                  <p>Curex partners with primary care, pediatric and pulmonology clinics. We help clinics introduce new services, such as allergy testing in the office. We also enable clinics to refer patients for at-home immunotherapy or remote asthma monitoring. By partnering with Curex, clinics can improve the level of care they provide and grow their business.</p>
                </>
              ),
            },
            {
              question: 'Does Curex accept insurance?',
              answer: (
                <>
                  <p>We accept most commercial insurance plans and are likely in-network for yours. However, estimating the exact out-of-pocket costs prior to submitting the first insurance claim can be challenging. Each insurance plan varies in terms of deductibles, how telemedicine consultations are covered, and the treatment of payments related to your specific medical "complexity," which we will only be able to assess after your consultation with one of our doctors.</p>
                  <p>Regardless of your insurance company's response, we are committed to working with you to find the most affordable path to obtaining allergy care. We believe we have the lowest price for allergy immunotherapy in the U.S., and our aim is to make this treatment accessible to everyone who needs it. Please note that an average patient responsibility is $200 per year and depends on your insurance plan (deductibles, coinsurance, telemedicine benefit).</p>
                </>
              ),
            },
            {
              question: 'How does my clinic grow its business?',
              answer: (
                <>
                  <p>We make it very easy for clinic partners to introduce new services for their patients. Offering allergy testing to existing patient population could increase business by 20% or more. Educating patients about Curex’s at-home immunotherapy or remote asthma monitoring programs could further increase business.</p>
                </>
              ),
            },
            {
              question: 'What do allergy drops contain?',
              answer: (
                <>
                  <p>The ingredients in sublingual allergy drops vary based on the specific allergens a person is sensitive to, as identified through allergy testing. Allergy drops can include the following components:</p>
                  <ol>
                    <li>Pollens: For individuals with seasonal allergies, allergy drops may contain pollen from trees, grasses, or weeds.</li>
                    <li>Dust mites: Extracts of allergens from dust mites are used in allergy drops for people who have allergies to these microscopic creatures commonly found in homes.</li>
                    <li>Pet dander: Allergy drops for those with pet allergies can include animal allergens, such as proteins found in the saliva, skin, or fur of cats and dogs.</li>
                    <li>Mold: For individuals with mold allergies, allergen extracts from specific mold species can be incorporated into allergy drops.</li>
                    <li>Glycerin: As a natural, vegetable-based preservative, glycerin (or glycerol) protects allergy drops from bacterial or fungal contamination. Although glycerin has a sweet taste, it does not affect blood sugar levels like common sugars, such as glucose or sucrose. Glycerin has a lower glycemic index and is metabolized differently than typical sugars, preventing rapid increases in blood sugar levels.</li>
                  </ol>
                </>
              ),
            },
            {
              question: 'What allergies does Curex treat?',
              answer: (
                <>
                  <p>Curex treats a wide range of environmental, airborne, and food allergies which include grasses, trees, weeds, pet allergies, dust mites, molds, peanuts, shellfish, milk, tree nuts, and among other allergens. Contact us to learn more.</p>
                </>
              ),
            },
            {
              question: "What's in my treatment?",
              answer: (
                <>
                  <p>Your sublingual (under-the-tongue) immunotherapy treatment contains clinical-grade allergen extracts of things you are allergic to, as well as plant-based glycerin to make the solution. The solution is gluten-free.</p>
                </>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
}
export default HeroPartners;
