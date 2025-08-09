import { Link } from "react-router-dom";
import DescCard from "../../common/ui/DescCard";
import Hero from "../../common/ui/Hero";
import { KidsTestimonials } from "../../components/Header/KidsAllergyCare/HeroKAC";
import Testimonials from "../../components/Header/Pets/Testimonials";
import { UnderstandingCurex } from "../../components/Header/PlansPrevention/Comp1";
import { TreatmentDelivered } from "../../components/Header/Pricing/HeroPricing";
import React from "react";
import Faq from '../../common/ui/Faq';

type TeamMember = {
  name: string;
  role: string;
  quote: string;
  badgeColor: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Dr. Neeta Ogden, MD",
    role: "",
    quote:
      "Curex is poised to revolutionize the way allergies are treated in America, expanding access to clinical care and treatments that can meaningfully improve patients quality of life.",
    badgeColor: "#98ecad",
  },
  {
    name: "Dr. Ravi Patel, VP Telemedicine",
    role: "",
    quote:
      "At Curex, our mission is to help people improve their health and quality of life by understanding their allergies and treating them at their source. We provide more than individualized prescription treatments; we provide individualized care.",
    badgeColor: "#fff86a",
  },
  {
    name: "Jill Hamburg, PA - C",
    role: "",
    quote:
      "Immunotherapy made simple. We enable patients to receive personalized allergy care on their own time. No more waiting rooms.",
    badgeColor: "#6ddafd",
  },
  {
    name: "Dr. Chet Tharpe, Medical Director",
    role: "",
    quote:
      "Curex has set the standard for the virtual allergy experience. From the comfort of their home, patients nationwide are able to receive a personalized treatment plan from an experienced clinician, aimed at treating the source of their allergies, not just the symptoms.",
    badgeColor: "#98ecad",
  },
];

const OurTeam: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "24px",
        padding: "24px",
        justifyContent: "center",
      }}
    >
      {teamMembers.map((member, idx) => (
        <div
          key={idx}
          style={{
            background: "white",
            borderRadius: "24px",
            boxShadow: "0 0 0 2px #e1e1e1",
            maxWidth: "490px",
            width: "100%",
            padding: "24px",
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "row",
            minWidth: "360px",
            minHeight: "220px",
            boxSizing: "border-box",
            margin: "12px",
          }}
        >
          {/* Left Avatar Side */}
          <div
            style={{
              minWidth: "100px",
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              overflow: "hidden",
              marginRight: "24px",
              flexShrink: 0,
              background: "#eb599b",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // This is a placeholder for the member image
            }}
          >
            <img
              src=""
              alt="team member portrait"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          {/* Right Content Side */}
          <div style={{ flex: 1, position: "relative" }}>
            <div
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                color: "#222",
                lineHeight: "18px",
                marginBottom: "8px",
                marginLeft: "-8px",
              }}
            >
              &ldquo;
            </div>
            <p
              style={{
                fontSize: "17px",
                color: "#222",
                margin: "0 0 16px 0",
                fontFamily: "Arial, sans-serif",
                minHeight: "78px",
              }}
            >
              {member.quote}
            </p>
            {/* Badge */}
            <div
              style={{
                display: "inline-block",
                background: member.badgeColor,
                color: "#222",
                fontWeight: "bold",
                fontSize: "16px",
                borderRadius: "8px",
                padding: "8px 18px 8px 12px",
                position: "absolute",
                bottom: "0",
                left: "0",
                boxShadow: "0 4px 10px 0 rgba(0,0,0,.02)",
              }}
            >
              {member.name}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export {OurTeam};

function KidsReviews() {
  return (
    <div style={{ padding: "2rem 4rem" }}>
      <Hero
        heading="Hear how Curex helped parents give their children an allergy-free future!"
        subtitle="#1 Alternative to allergy shots."
        ctaText="Take The Free Quiz"
      />
      <KidsTestimonials />
      <Testimonials />
      <TreatmentDelivered />
      <DescCard
        heading="Learn more about how Curex compares to allergy shots"
        imgSrc="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/640072aad2ba87ba396d6637_Web%20flow%20to%20Curex-vs-shots%202-p-1600.webp"
        desc={
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.7rem",
              margin: "1.5rem 0 0 0",
            }}
          >
            {/* 1 */}
            <div
              style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}
            >
              <img
                src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/6253452ae8b006b845a5c355_ic_product_icon_192px_I%20am%20ok.avif"
                loading="lazy"
                alt="smiley face icon"
                style={{ width: 40, height: 40, flexShrink: 0 }}
              />
              <span
                style={{
                  fontSize: "1.08rem",
                  color: "#181818",
                  fontWeight: 400,
                  lineHeight: 1.35,
                }}
              >
                Save up to $3,000 compared to allergy shots
              </span>
            </div>
            {/* 2 */}
            <div
              style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}
            >
              <img
                src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/64007353ddce171dc2721b0e_icon-no-injection.svg"
                loading="lazy"
                alt="no injection icon"
                style={{ width: 40, height: 40, flexShrink: 0 }}
              />
              <span
                style={{
                  fontSize: "1.08rem",
                  color: "#181818",
                  fontWeight: 400,
                  lineHeight: 1.35,
                }}
              >
                Save over 52 hours of time from not having shots appointments
              </span>
            </div>
            {/* 3 */}
            <div
              style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}
            >
              <img
                src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/62534526f7c1886b63e0bcd6_ic_product_icon_192px_drop-08.avif"
                loading="lazy"
                alt="dropper icon"
                style={{ width: 40, height: 40, flexShrink: 0 }}
              />
              <span
                style={{
                  fontSize: "1.08rem",
                  color: "#181818",
                  fontWeight: 400,
                  lineHeight: 1.35,
                }}
              >
                Treatment is significantly safer than allergy shots
              </span>
            </div>
          </div>
        }
        imagePosition="right"
      />
      <UnderstandingCurex />
      <div
        style={{
          textAlign: "center",
          display: "flex",
          fontSize: "2rem",
          color: "#181818",
          justifyContent: "space-evenly",
          fontWeight: 400,
          lineHeight: 1.35,
          padding: "2rem 1rem",
          backgroundColor: "#ffe9f6ff",
          borderRadius: "10px",
          alignItems: "center",
        }}
      >
        <p style={{ marginRight: "1rem" }}>
          Ready to help your kids conquer their allergies?{" "}
        </p>
        <Link to="/quiz">
          <button
            style={{
              padding: "0.7rem 2rem",
              backgroundColor: "#ff69b4",
              color: "#fff",
              border: "none",
              borderRadius: "1rem",
              cursor: "pointer",
            }}
          >
            Start with Free Quiz
          </button>
        </Link>
      </div>
        <OurTeam/>
          {/* Clinician Testimonial Card - Centered */}
          <div style={{ display: "flex", justifyContent: "center", width: "100%", margin: "24px 0" }}>
            <div
              style={{
                background: "white",
                borderRadius: "24px",
                boxShadow: "0 0 0 2px #e1e1e1",
                maxWidth: "490px",
                width: "100%",
                padding: "24px",
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "row",
                minWidth: "360px",
                minHeight: "220px",
                boxSizing: "border-box",
                margin: "12px",
              }}
            >
              {/* Left Avatar Side */}
              <div
                style={{
                  minWidth: "100px",
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  marginRight: "24px",
                  flexShrink: 0,
                  background: "#eb599b",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/62217a7b4dd6bfc48ef9c281_61e036bf25358710fa34bef4_Curex%20clinician%20headshots-08-1.jpg"
                  alt="Kayla Mardaga, NP"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              {/* Right Content Side */}
              <div style={{ flex: 1, position: "relative" }}>
                <div
                  style={{
                    fontSize: "32px",
                    fontWeight: "bold",
                    color: "#222",
                    lineHeight: "18px",
                    marginBottom: "8px",
                    marginLeft: "-8px",
                  }}
                >
                  &ldquo;
                </div>
                <p
                  style={{
                    fontSize: "17px",
                    color: "#222",
                    margin: "0 0 16px 0",
                    fontFamily: "Arial, sans-serif",
                    minHeight: "78px",
                  }}
                >
                  Curex offers convenient at-home allergy testing options. Our goal is to determine if a patient would benefit from immunotherapy and then customize a treatment plan that can reduce both the symptoms and the reliance on allergy medications.
                </p>
                {/* Badge */}
                <div
                  style={{
                    display: "inline-block",
                    background: "#f3a7ffff",
                    color: "#222",
                    fontWeight: "bold",
                    fontSize: "16px",
                    borderRadius: "8px",
                    padding: "8px 18px 8px 12px",
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    boxShadow: "0 4px 10px 0 rgba(0,0,0,.02)",
                  }}
                >
                  Kayla Mardaga, NP
                </div>
              </div>
            </div>
          </div>
      {/* FAQ Section */}
      <div style={{ maxWidth: 900, margin: '0 auto', marginTop: 48, marginBottom: 48 }}>
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
              question: 'What is Curex?',
              answer: (
                <>
                  <p>Curex is America’s #1 online allergy clinic, dedicated to helping you manage and eliminate your allergies. We believe that true allergy care should have one goal: zero allergies. Our vision is a world without allergies, and we offer the most convenient and affordable path to get there—sublingual immunotherapy.</p>
                  <p>Sublingual immunotherapy involves placing allergy drops under the tongue, helping your body build tolerance to allergens over time, similar to allergy shots. This treatment is tailored to your specific allergies, based on results from allergy testing and your medical history.</p>
                  <p>Curex offers comprehensive services that include at-home allergy testing, online consultations, symptom management, and personalized sublingual immunotherapy plans. Our goal is to improve access to quality allergy care for anyone who needs it. If you’re ready to finally get rid of your allergies, you’re in the right place. Together with our partners we have treated more than 300,000 patients with allergy drops – more than anyone else in the U.S.</p>
                  <p>Our services are audited and certified by <a href="http://LegitScript.com" target="_blank">LegitScript.com</a>.</p>
                </>
              ),
            },
            {
              question: 'Is Curex legitimate?',
              answer: (
                <>
                  <p>Curex is the largest online allergy and asthma clinic in the U.S. We started because our clinicians wanted to offer more convenient and affordable allergy and asthma care for everyone. So far we have attracted more than 50,000 customers from every U.S. state. We are proud to have the highest patient satisfaction and loyalty rates in the industry. Our service has been audited and certified by <a href="http://legitscript.com/" target="_blank">LegitScript.com</a>.</p>
                </>
              ),
            },
            {
              question: 'Is Curex safe?',
              answer: (
                <>
                  <p>Allergy immunotherapy is very safe, with mild side effects including redness, itching and swelling. Severe reactions are extremely rare. Most common form of allergy immunotherapy in the United States is allergy shots, which are administered in person. Curex clinicians prescribe a different form of immunotherapy called “sublingual immunotherapy” (SLIT), which is applied under the tongue instead of injections. This form is shown to be even safer, and people with more severe allergies are usually pointed in this direction.</p>
                </>
              ),
            },
            {
              question: 'What services do you offer?',
              answer: (
                <>
                  <p>Curex provides comprehensive care for those suffering from allergies, asthma and eczema. This includes customized <a href="https://getcurex.com/sublingual-immunotherapy">sublingual immunotherapy</a>, at-home concierge allergy testing, and symptom management. Our goal is to provide accessibility and quality of allergy care in the U.S.</p>
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
              question: "Should I use insurance if I'm not sure about my deductibles or copays?",
              answer: (
                <>
                  <p>If you pick an insurance plan, we will bill your insurance for each quarterly visit (required). However, this does not guarantee payment, as your health insurance company may deny payment for any service, even if you are eligible or in-network with us. If your insurance company denies payment, you will be personally and fully responsible for payment after services are rendered, including any co-payment, non-covered portions, deductible amount, or coinsurance that applies. Curex is unable to provide an accurate estimate of how much your insurance will pay and how much you will be responsible for paying. The average patient responsibility is $200/year and depends on your plan (deductibles, coinsurance, telemedicine benefit). We encourage you to call the number on the back of your insurance card and ask your member representative about your ‘allergy, asthma, and telemedicine visit’ benefits. Once a claim is submitted, we are unable to take it back. By proceeding, you agree to pay any additional charges that may be incurred that are not covered by your insurance policy.</p>
                </>
              ),
            },
            {
              question: 'What conditions do you treat?',
              answer: (
                <>
                  <p>We focus on food as well as indoor and outdoor allergies caused by environmental or inhalant allergies, like those caused by pollens, weeds, grasses, dust mites, molds and pets. We also treat allergic asthma and eczema, as these conditions are closely related to allergies.</p>
                </>
              ),
            },
            {
              question: 'What is immunotherapy?',
              answer: (
                <>
                  <p><a href="https://getcurex.com/immunotherapy-101" target="_blank">Immunotherapy</a> is a longstanding form of treatment that aims to meaningfully reduce the underlying cause of indoor/outdoor allergies and related conditions. Immunotherapy is frequently practiced by using allergen extracts for allergy drops, allergy shots and allergy tablets.</p>
                </>
              ),
            },
            {
              question: 'Can my child use Curex?',
              answer: (
                <>
                  <p>Curex <a href="https://getcurex.com/kids-allergy-care">serves adults and children</a> as young as 5 years old. Certain tests and treatments may be limited for younger kids. Start by answering the quiz, so that our clinicians can recommend the best testing and treatment options.</p>
                </>
              ),
            },
            {
              question: 'How old does my child have to be to start their treatment?',
              answer: (
                <>
                  <p>In order for your child to start their allergy testing and treatment, they must be 5 years old and older.</p>
                </>
              ),
            },
            {
              question: 'Does Curex treat food allergies?',
              answer: (
                <>
                  <p>Absolutely! We treat more than 90 different food allergies, including the most common ones - peanuts, milk, tree nuts, wheat, eggs, fish, shellfish, soy, and sesame among others.</p>
                  <p>You can learn about our food program <a href="/food">here</a>.</p>
                </>
              ),
            },
            {
              question: 'What is your cancellation policy?',
              answer: (
                <>
                  <p>You can cancel at any time. However, please note that if you received treatment recently, we will need to collect any remaining payments for that treatment on your account. Additionally, if you had any telehealth visits, it can take up to three months for insurance to process each claim. These may be billed to you after you cancel if they have not been processed already.</p>
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

export default KidsReviews;
