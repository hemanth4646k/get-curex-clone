import InsurancePartnersCommon from "../../common/InsurancePartners";
import DescCard from "../../common/ui/DescCard";
import Hero from "../../common/ui/Hero";
import React from "react";
import Table1, { ReviewsTest } from "../../components/Header/AllergyTest/Table1";
import { HowCurexWorks } from "../../components/Header/PlansPrevention/Comp1";
import EndPromo from "../../common/EndPromo";


// Reusable SmallCard component
type SmallCardProps = {
  imageAlt: string;
  imageSrc?: string;
  logoGroup?: { src?: string; alt: string }[];
  heading: string;
  children: React.ReactNode;
};

function SmallCard({
  imageAlt,
  imageSrc,
  logoGroup,
  heading,
  children,
}: SmallCardProps) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "18px",
        boxShadow: "0 2px 20px rgba(55,60,87,0.10)",
        minHeight: 284,
        width: 315,
        padding: "24px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 16,
      }}
    >
      <div
        style={{
          width: "100%",
          minHeight: 110,
          marginBottom: 16,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={imageAlt}
            style={{
              width: 175,
              height: 110,
              objectFit: "cover",
              borderRadius: 12,
              background: "#eef2fa",
            }}
          />
        ) : logoGroup ? (
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            {logoGroup.map((logo, idx) => (
              <img
                key={idx}
                src={logo.src}
                alt={logo.alt}
                style={{
                  width: 82,
                  height: 32,
                  objectFit: "contain",
                  background: "#fff",
                  borderRadius: 6,
                }}
              />
            ))}
          </div>
        ) : null}
      </div>
      <div style={{ textAlign: "center" }}>
        <h3
          style={{
            margin: 0,
            fontSize: 20,
            fontWeight: 700,
            color: "#191D3A",
            letterSpacing: "-0.02em",
            marginBottom: 10,
          }}
        >
          {heading}
        </h3>
        <div
          style={{
            fontSize: 15,
            color: "#484C6B",
            lineHeight: 1.6,
            maxWidth: 260,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

// Main component assembling the three cards
export function AllergyTestingCards() {
  return (
    <div
      style={{
        display: "flex",
        gap: 22,
        justifyContent: "center",
        flexWrap: "wrap",
        background: "transparent",
        width: "100%",
        padding: "2.4rem 10px 2.8rem 10px",
      }}
    >
      <SmallCard
        imageAlt="person using at-home test kit"
        imageSrc="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/654c8ecb578e1e69395880f5_woman-using-test-p-500.jpg" // Add your image src here
        heading="At-Home Automatic Test Kit"
      >
        Receive a painless automatic blood collector at-home. Takes less than 5
        minutes. Ship it back when done
      </SmallCard>
      <SmallCard
        imageAlt="Quest and Labcorp logos"
        logoGroup={[
          { src: "https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/654c8ecc3dffee07f784f6d7_Quest-Diagnostics-logo%201.avif", alt: "Quest Diagnostics logo" }, // Add Quest logo src here
          { src: "https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/654c8ecb331d35a0650d43b2_Labcorp_Logo_updated_12-2020%201.avif", alt: "Labcorp logo" }, // Add Labcorp logo src here
        ]}
        heading="In-Lab Test"
      >
        Take your test at a local lab location. (often available same day)
      </SmallCard>
      <SmallCard
        imageAlt="nurse coming for in-home visit"
        imageSrc="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/62c739969e1e9f8047bdea7e_image20-p-500.jpeg" // Add your image src here
        heading="Concierge At-Home Test"
      >
        A medical professional comes to your home or office for a quick blood
        draw.(schedule 5-7 days in advance)
      </SmallCard>
    </div>
  );
}

import Faq from '../../common/ui/Faq';

function AllergyTest() {
  return (
    <div style={{ padding: "2rem 4rem", textAlign: "center" }}>
      <Hero
        heading="Allergy Testing Ensures Accurate Treatment"
        subtitle="Curex offers the most convenient ways to get tested."
        ctaText="Start with a Free Quiz"
        imageAlt=""
        imageSrc="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/652831ddda223f51800281d6_DSCF6125%201-p-1600.webp"
      />
      <InsurancePartnersCommon />
      <DescCard
        heading="Why get tested?"
        desc={
          <p>
            When it comes to allergy treatment, there is no one-size-fits-all
            approach.
            <br />
            Our doctors require test results to formulate the best treatment for
            your specific allergy triggers.
            <br />
            We accept prior allergy test results, if available.
          </p>
        }
        imgSrc={
          "https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/654c827c8627503eaa07bb2f_woman-with-dog.jpg"
        }
        imagePosition="right"
      />
      <h2>Curex offers convenient testing:</h2>
      <AllergyTestingCards />
      <Table1/>
      <ReviewsTest />
      <HowCurexWorks/>
      <EndPromo/>
      <Faq
        title="FAQs"
        faqs={[
          {
            question: "Sign up for Free Webinar",
            answer: (
              <>
                Learn how allergy immunotherapy can help you find lasting relief. Allergy experts discuss allergy shots, allergy drops and food OIT to help you reduce your environmental and/or food allergies. Reserve your spot here: <a target="_blank" href="https://calendly.com/webinar-curex/allergy-immunotherapy">https://calendly.com/webinar-curex/allergy-immunotherapy</a>
              </>
            ),
          },
          {
            question: "How much does an allergy test cost?",
            answer: (
              <>Testing services provided by our partners are typically covered by insurance. Total out-of-pocket responsibility depends on your copay and co-insurance. No insurance? No problem. We accept FSA/HSA payments and have partnerships with our labs for a discounted self-pay price of $199.</>
            ),
          },
          {
            question: "How soon can I schedule my test?",
            answer: (
              <>Once you sign-up, your test order is typically created within 1-2 days. You can either go to a LabCorp or Quest location right away or schedule your at-home concierge test 5-7 days in advance.</>
            ),
          },
          {
            question: "What happens after I get tested?",
            answer: (
              <>Curex allergists can use your test results to prescribe you with an effective treatment called Sublingual Immunotherapy. This personalized treatment, based on your medical history and allergy test results, treats your allergies at the source. Once our clinicians get your results back, we will connect you with a provider to discuss how you can overcome your allergies.</>
            ),
          },
          {
            question: "I have existing test results, do I need to get tested again?",
            answer: (
              <>If you have prior test results, please provide them when filling out medical history. You’ll be able to get started on immunotherapy even faster!</>
            ),
          },
          {
            question: "What allergens do you test for?",
            answer: (
              <>We test for all common indoor, outdoor and pet allergens. The test is customized for you based on your location and symptoms, and normally includes tree and weed pollens, dust mites, molds, cats and dogs. We do not test for food allergens.‍ Note that certain inferior testing technologies claim that they test for 100+ allergens. These test results are normally inaccurate. They are also unnecessary, since most frequent allergens have cross-reactivity with each other (e.g. birch and apple pollen).</>
            ),
          },
          {
            question: "Do I have to stop taking medication before my test?",
            answer: (
              <>No, our testing methods do not require you to be off of allergy meds before the test. You do not have to do anything differently, just show up at the Quest/LabCorp location of your choice or meet with your concierge testing provider at the location of your choice!</>
            ),
          },
          {
            question: "Why should I choose Curex for allergy testing vs. Finger prick test kits?",
            answer: (
              <>Curex uses the FDA-approved ImmunoCap technology to accurately assess allergic response to a wide range of allergens. Allergists feel very comfortable when presented with results processed with this technology. However, finger prick test kits are known for delivering inaccurate results, which may result in suboptimal treatment formulation for you. For best results, we recommend highest quality testing.</>
            ),
          },
        ]}
      />
    </div>
  );
}
export default AllergyTest;