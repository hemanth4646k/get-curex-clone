// import Hero from '../components/home/Hero'
// import Brands from '../components/home/Brands'
// import HomeBenefits from '../components/home/HomeBenefits'
// import HomeFeature from '../components/home/HomeFeature'
// import HomeAllergyType from '../components/home/HomeAllergyType'
// import PricingComponent1 from '../components/home/PricingComponent1'
// import InsuranceProviders from '../components/home/InsuranceProviders'
// import HomeComparisonTable from '../components/home/HomeComparisonTable'
// import Testimonials1 from '../components/home/Testimonials1'
// import HowItWorks from '../components/home/HowItWorks'
// import FaqContainer from '../components/home/FaqContainer'
// import WeightLossPricingComponent from '../components/home/WeightLossPricingComponent'

// const Home = () => {
//     return (
//         <div>
//             <Hero />
//             <Brands />
//             <HomeBenefits />
//             <HomeFeature />
//             <HomeAllergyType />
//             <PricingComponent1 />
//             <InsuranceProviders/>
//             <HomeComparisonTable/>
//             <Testimonials1 />
//             <HowItWorks />
//             <FaqContainer />




//             <WeightLossPricingComponent/>
//         </div>
//     )
// }

// export default Home;
//------------------------------------------------------------------------------
// React types not needed here after FAQ refactor
import "../styles/curex-shared.css"; // consolidated shared styles
import Faq, { type FaqItem } from "../common/ui/Faq";

// Extracted FAQ data for shared Faq component
const homeFaqs: FaqItem[] = [
  {
    question: "Sign up for Free Webinar",
    answer: (
      <p>
        Learn how allergy immunotherapy can help you find lasting relief. Allergy experts discuss allergy shots, allergy drops and food OIT to help you reduce your environmental and/or food allergies. Reserve your spot here: {" "}
        <a target="_blank" href="https://calendly.com/webinar-curex/allergy-immunotherapy">
          https://calendly.com/webinar-curex/allergy-immunotherapy
        </a>
      </p>
    ),
  },
  {
    question: "What is Curex?",
    answer: (
      <>
        <p>
          Curex is America’s #1 online allergy clinic, dedicated to helping you manage and eliminate your allergies. We believe that true allergy care should have one goal: zero allergies. Our vision is a world without allergies, and we offer the most convenient and affordable path to get there—sublingual immunotherapy.
        </p>
        <p>
          Sublingual immunotherapy involves placing allergy drops under the tongue, helping your body build tolerance to allergens over time, similar to allergy shots. This treatment is tailored to your specific allergies, based on results from allergy testing and your medical history.
        </p>
        <p>
          Curex offers comprehensive services that include at-home allergy testing, online consultations, symptom management, and personalized sublingual immunotherapy plans. Our goal is to improve access to quality allergy care for anyone who needs it. If you’re ready to finally get rid of your allergies, you’re in the right place. Together with our partners we have treated more than 300,000 patients with allergy drops – more than anyone else in the U.S.
        </p>
        <p>
          Our services are audited and certified by {" "}
          <a href="http://LegitScript.com" target="_blank">
            LegitScript.com
          </a>
          .
        </p>
      </>
    ),
  },
  {
    question: "What conditions do you treat?",
    answer: (
      <p>
        We specialize in treating a wide range of allergies, including food allergies and both indoor and outdoor environmental or inhalant allergies. This encompasses allergies caused by pollens, weeds, grasses, dust mites, molds, and pets. Additionally, we treat allergic asthma and eczema, as these conditions are closely related to allergies.
      </p>
    ),
  },
  {
    question: "Do you treat food allergies?",
    answer: (
      <>
        <p>
          Absolutely! We treat more than 90 different food allergies, including the most common ones—peanuts, milk, tree nuts, wheat, eggs, fish, shellfish, soy, sesame, and many others.
        </p>
        <p>
          Note that we generally do not treat food sensitivities and intolerances. If you're unsure, our clinical team can help with diagnosis and determine if we can assist you.
        </p>
        <p>
          You can learn about our food program {" "}
          <a href="/food">here</a>.
        </p>
      </>
    ),
  },
  {
    question: "How long is the treatment?",
    answer: (
      <>
        <p>
          Allergy immunotherapy is typically recommended for a duration of 3 to 5 years. Most patients begin to experience positive results within the first 6 months. If there are no noticeable improvements within 12 months, our clinical team will order follow-up testing and may adjust your dosage.
        </p>
        <p>
          Allergy drop immunotherapy is a long-term treatment designed to provide lasting results. Most patients who complete the therapy experience reduced symptoms and can stop relying on allergy medications for over 10 years. Some choose to continue with maintenance treatment to ensure their allergy symptoms never return.
        </p>
      </>
    ),
  },
  {
    question: "How much does it cost?",
    answer: (
      <>
        <p>
          Curex offers the most affordable allergy immunotherapy program in the U.S. The subscription is $59/month for allergy drops (not covered by insurance) and copay for consultations (billed to insurance). An average patient responsibility for consultations is $200 per year and depends on your insurance plan (deductibles, coinsurance, telemedicine benefit). Please note that our food allergy subscription plan is $149/month for allergy drops plus copay for consultations.
        </p>
        <p>
          We also offer attractive self-pay rates of $99/month for environmental and $199/month for food allergy subscriptions; these rates include all consultations, and do not have any copays.
        </p>
        <p>
          In case you require an allergy test, our lab partners will bill your insurance, and there may be a standard copay. If you prefer to self pay for the test, we have negotiated an attractive $199 self-pay price.
        </p>
        <p>
          Here is more information: {" "}
          <a href="https://getcurex.com/pricing">https://getcurex.com/pricing</a>
        </p>
      </>
    ),
  },
  {
    question: "Do you accept HSA/FSA?",
    answer: (
      <p>
        Yes. If you need a detailed invoice, please email us at {" "}
        <a href="mailto:hi@getcurex.com">hi@getcurex.com</a> {" "}
        after the payment and we’ll supply it to you.
      </p>
    ),
  },
  {
    question: "Do you accept my insurance?",
    answer: (
      <>
        <p>
          We accept most commercial insurance plans and are likely in-network for yours. However, estimating the exact out-of-pocket costs prior to submitting the first insurance claim can be challenging. Each insurance plan varies in terms of deductibles, how telemedicine consultations are covered, and the treatment of payments related to your specific medical "complexity," which we will only be able to assess after your consultation with one of our doctors.
        </p>
        <p>
          Regardless of your insurance company's response, we are committed to working with you to find the most affordable path to obtaining allergy care. We believe we have the lowest price for allergy immunotherapy in the U.S., and our aim is to make this treatment accessible to everyone who needs it. Please note that an average patient responsibility is $200 per year and depends on your insurance plan (deductibles, coinsurance, telemedicine benefit).
        </p>
        <p>We also accept Medicare and Tricare.</p>
      </>
    ),
  },
  {
    question: "Are clinical visits required?",
    answer: (
      <p>
        Yes. Allergy immunotherapy is a complex and personalized treatment program that necessitates a clinical diagnosis and a customized treatment plan. By conducting initial and follow-up consultations, our medical team ensures you receive the most effective care and the best possible outcomes.
      </p>
    ),
  },
  {
    question: "What states do you serve?",
    answer: (
      <p>
        We serve patients everywhere in the U.S. We currently do not offer services outside of the U.S.
      </p>
    ),
  },
  {
    question: "Allergy testing options.",
    answer: (
      <>
        <p>
          As part of your treatment, you may be required to provide allergy test results. You can either upload your previous results (IgE or skin scratch) or we can order a new test for you, either at home or in a local lab.
        </p>
        <p>
          Depending on your location, we can send a phlebotomist (medical assistant) to your home or office for a simple blood draw (not a finger prick). A phlebotomist may have a small convenience fee. This sample is then processed using hospital-grade technology to produce accurate results. In some areas, you may need to go into a local lab for your blood draw. We work with LabCorp and Quest Diagnostics. This is an IgE blood test using FDA-cleared ImmunoCAP technology that results in more accurate results compared to finger prick tests that are available online through some companies. This is not a skin scratch test where an allergist spends 30+ minutes injecting you with small doses of allergens to see if any swelling or reaction occurs.
        </p>
        <p>
          The labs bill your insurance for the test. If you prefer, we have also negotiated an attractive self-pay rate of $199 for the test.
        </p>
        <p>
          In some instances, we may recommend a home self-collection test kit. This test is then processed with CLIA-certified self-validated technology. While the results may have lower sensitivity, this test may be more convenient for some patients. It’s only available as a self-pay option for $199.
        </p>
        <p>
          We strive to make the testing process as convenient and affordable as possible to ensure you receive accurate diagnoses and effective treatment.
        </p>
      </>
    ),
  },
  {
    question: "Which allergy test is best?",
    answer: (
      <>
        <p>
          Our medical team uses allergy testing in conjunction with your symptom history, so test results are not absolute but serve as a supporting tool in your diagnosis and treatment plan.
        </p>
        <p>
          Both skin testing and IgE ImmunoCAP blood testing are considered standards of care and are widely accepted by practicing allergists:
        </p>
        <p>Skin Testing:</p>
        <ul role="list">
          <li>Advantages: Faster procedure with immediate results.</li>
          <li>
            Considerations: Requires you to avoid antihistamines for a week prior to the test. It may not be suitable for everyone, especially those with skin conditions like eczema.
          </li>
          <li>
            IgE ImmunoCAP Blood Testing:
            <ul role="list">
              <li>
                Advantages: Offers more accurate, consistent, and detailed results, especially for food component testing.
              </li>
              <li>
                Considerations: No need to stop taking antihistamines. It's often easier for children and patients with eczema.
              </li>
            </ul>
          </li>
        </ul>
        <p>
          Some at-home IgE blood tests may provide more convenience but generally have lower sensitivity and accuracy. Our medical team recommends these only when other options are not readily available.
        </p>
        <p>
          The best allergy test depends on your specific situation. Our clinicians will work with you to determine the most appropriate testing method to ensure accurate results and effective treatment.
        </p>
      </>
    ),
  },
  {
    question: "Is it safe?",
    answer: (
      <>
        <p>
          At Curex, your safety is our top priority. Systemic reactions, including anaphylaxis, are extremely rare with allergy drops compared to allergy shots, making allergy drops a widely recognized safer alternative.
        </p>
        <p>
          While the risk of experiencing a severe allergic reaction from allergy drops is exceptionally low, we believe in being prepared for any possibility. Therefore, as a precautionary measure, our providers prescribe an Epinephrine auto-injector (EpiPen) to every patient. Patients with a history of anaphylaxis or those being treated for food allergies are required to have an EpiPen available every time they take their drops.
        </p>
        <p>
          For most patients, the initial one or two shipments consist of a buildup dosage, which is more diluted to help your immune system adjust before reaching the full dose—usually by the second or third shipment. It's advisable to have an Epinephrine auto-injector on hand when starting a new dosage. Additionally, situations such as strenuous exercise or significant exposure to allergens warrant having an epinephrine device readily available.
        </p>
        <p>
          Certain patients, particularly those with a history of anaphylactic reactions, will be required to have an Epinephrine auto-injector before they start allergy drops.
        </p>
      </>
    ),
  },
  {
    question: "Cancellation policy",
    answer: (
      <p>
        You can cancel your subscription at any time. However, if you've recently received treatment, any remaining payments for that treatment will still be due. Remember, treatments are shipped in 3-month supplies and are covered by your monthly subscription fee. Additionally, insurance claims for any telehealth visits can take up to three months to process. These claims may be billed to you after you cancel if they have not been processed yet.
      </p>
    ),
  },
];
export default function NewHome() {
  return (
    <>
      <meta charSet="utf-8" />
      <title>Allergy Care &amp; Weight Loss | Curex</title>
      <meta
        content="The #1 online at-home allergy clinic that offers the most affordable and convenient allergy treatment including sublingual allergy drops & immunotherapy."
        name="description"
      />
      <meta content="Allergy Care & Weight Loss | Curex" property="og:title" />
      <meta
        content="The #1 online at-home allergy clinic that offers the most affordable and convenient allergy treatment including sublingual allergy drops & immunotherapy."
        property="og:description"
      />
      <meta
        content="Allergy Care & Weight Loss | Curex"
        property="twitter:title"
      />
      <meta
        content="The #1 online at-home allergy clinic that offers the most affordable and convenient allergy treatment including sublingual allergy drops & immunotherapy."
        property="twitter:description"
      />
      <meta property="og:type" content="website" />
      <meta content="summary_large_image" name="twitter:card" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        content="1xHN0hg3C5CqwNIKryBFli66wm3M8oB03I4o4B35CwE"
        name="google-site-verification"
      />
      {/* Favicon assets (kept) */}
      <link href="/HomePage_files/67288789da292934f510c88d_favicon.png" rel="shortcut icon" type="image/x-icon" />
      <link href="/HomePage_files/67288790f1c7020921ee463d_webclip.png" rel="apple-touch-icon" />
      {/* begin Convert Experiences code */}
      {/* end Convert Experiences code */}
      <meta
        name="ahrefs-site-verification"
        content="3b8a7b31073afc29a4425b7694728bf7d489881dd28f9d5d06c6fefdbcdd89bf"
      />
      <div className="page-wrapper is-relative">
        <GlobalBanner />
        <main className="main-wrapper">
          <HeaderSection />
          <BenefitsSection />
          <FeatureSection />
          <AllergyTypesSection />
          <PricingSection />
          <InsuranceSection />
          <ComparisonTableSection />
          <TestimonialsSection />
          <HowItWorksSection />
          {/* Replaced local FAQ implementation with shared component */}
          <Faq faqs={homeFaqs} title="FAQs" id="home-faqs" />
        </main>
        {/* <Footer /> */}
      </div>
    </>
  );
}

// --- Component Definitions ---

const GlobalBanner = () => (
  <section className="global-banner_component">
    <div className="padding-global">
      <div className="global-banner_content-wrapper">
        <div className="global-banner_content">
          <div className="global-banner_promo-text">
            Flash Sale. Use Coupon <strong>CUREX19</strong> to get started for $19.99 instead of $49. Ending this week.
          </div>
        </div>
      </div>
    </div>
  </section>
);


// const Navbar = () => (
//   <article className="navbar5_component">
//     <div className="navbar5_top">
//       <div className="padding-global is-navbar">
//         <div className="navbar5_container-top">
//           <div className="navbar4_content-left">
//             <a
//               href="/"
//               aria-current="page"
//               className="navbar4_logo-link w-nav-brand w--current"
//             >
//               <div className="logo_global">
//                 <img
//                   loading="eager"
//                   src="/HomePage_files/66f64184a30e0919d28c5316_curex-logo.svg"
//                   alt="Curex logo black"
//                   className="logo_primary"
//                 />
//               </div>
//             </a>
//             <div className="navbar4_menu">
//               <div className="navbar4_text-wrapper">
//                 <div className="navbar4_link-icon w-embed">
//                   <svg
//                     width="100%"
//                     height="100%"
//                     viewBox="0 0 24 24"
//                     fill="currentColor"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       clipRule="evenodd"
//                       d="M21.42 3.125H2.5V16.8487H11.335V19.6088H12.585V16.8487H21.42V3.125ZM3.75 15.5987V4.375H20.17V15.5987H16.2713V14.7587C16.2713 13.6203 15.819 12.5285 15.014 11.7235C14.6719 11.3814 14.278 11.103 13.8507 10.8959C14.4874 10.3631 14.8925 9.56367 14.8925 8.66876C14.8925 7.06175 13.586 5.76251 11.9788 5.76251C10.3715 5.76251 9.065 7.06175 9.065 8.66876C9.065 9.56368 9.47016 10.3631 10.1068 10.8959C9.67953 11.103 9.28563 11.3814 8.94352 11.7235C8.13852 12.5285 7.68628 13.6203 7.68628 14.7587V15.5987H3.75ZM8.93628 15.5987H15.0213V14.7587C15.0213 13.9518 14.7007 13.178 14.1302 12.6074C13.5596 12.0368 12.7857 11.7162 11.9788 11.7162C11.1719 11.7162 10.398 12.0368 9.82741 12.6074C9.25683 13.178 8.93628 13.9518 8.93628 14.7587V15.5987ZM11.9788 7.01251C11.058 7.01251 10.315 7.75597 10.315 8.66876C10.315 9.58155 11.058 10.325 11.9788 10.325C12.8996 10.325 13.6425 9.58155 13.6425 8.66876C13.6425 7.75597 12.8996 7.01251 11.9788 7.01251Z"
//                       fill="currentColor"
//                     />
//                     <path
//                       d="M7.88251 20.875H16.2575V19.625H7.88251V20.875Z"
//                       fill="currentColor"
//                     />
//                   </svg>
//                 </div>
//                 <div>A modern clinic for at-home treatments</div>
//               </div>
//               <a
//                 href="tel:+18572401080"
//                 className="navbar4_link hide-mobile-landscape w-inline-block"
//               >
//                 <img
//                   src="/HomePage_files/672caeabab8adf9b817b998a_icon_phone.svg"
//                   loading="lazy"
//                   alt=""
//                   className="navbar4_link-icon"
//                 />
//                 <div>(857) 240-1080</div>
//               </a>
//             </div>
//           </div>
//           <div className="navbar5_content-right is-fixed">
//             <a
//               href="/"
//               aria-current="page"
//               className="btn_main_wrap is-nav-text w-inline-block w--current"
//             >
//               <div aria-hidden="true" className="btn_main_layout">
//                 <div className="btn_main_text">Allergy Care</div>
//               </div>
//               <div className="btn_main_underline" />
//               <div className="btn_main_link-indicator">
//                 <div className="w-embed">
//                   <svg
//                     width="100%"
//                     height="100%"
//                     viewBox="0 0 19 14"
//                     fill="currentColor"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M8.69551 1.08993C9.0952 0.548147 9.90525 0.548147 10.3049 1.08993L18.2838 11.9055C18.7709 12.5657 18.2995 13.4991 17.4791 13.4991H1.52133C0.700922 13.4991 0.229569 12.5657 0.716613 11.9055L8.69551 1.08993Z"
//                       fill="currentColor"
//                     />
//                   </svg>
//                 </div>
//               </div>
//             </a>
//             <a
//               href="/weightloss"
//               className="btn_main_wrap is-nav-text is-inactive w-inline-block"
//             >
//               <div aria-hidden="true" className="btn_main_layout">
//                 <div className="btn_main_text">Weight Loss</div>
//               </div>
//             </a>
//             <div className="navbar5_btn-container is-fixed">
//               <div className="navbar5_btn-desktop is-fixed">
//                 <div
//                   data-trigger=""
//                   className="btn_main_wrap is-nav hide-tablet"
//                 >
//                   <div aria-hidden="true" className="btn_main_layout">
//                     <div className="btn_main_text">Am I eligible?</div>
//                   </div>
//                   <div className="btn_clickable_wrap">
//                     <a
//                       href="/quiz"
//                       className="btn_clickable_link is-nav w-inline-block"
//                     >
//                       <span className="btn_clickable_text">
//                         Am I eligible?
//                       </span>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="navbar5_bot">
//       <div className="padding-global is-navbar">
//         <div className="navbar5_container">
//           <div
//             fs-scrolldisable-element="when-visible"
//             className="navbar5_bg-mobile"
//           />
//           <div className="navbar5_menu">
//             <div
//               id="w-node-_0d73cac2-a03e-c036-4c86-0ed0ce78d2de-5aa317fa"
//               className="navbar5_menu-dropdown-list"
//             >
//               <DropdownMenu
//                 title="Immunotherapy"
//                 links={[
//                   { href: "/plans/prevention-plus", text: "How it works" },
//                   { href: "/insurance-faqs", text: "Insurance" },
//                   { href: "/immunotherapy-science", text: "Science" },
//                   { href: "/kids-allergy-care", text: "Kids" },
//                   { href: "/pets", text: "Pets" },
//                   { href: "/immunotherapy-101", text: "FAQ" },
//                   { href: "/safety", text: "Safety" },
//                   { href: "/allergy-test", text: "Allergy Testing" },
//                   { href: "/getting-started", text: "Getting Started" },
//                   { href: "/pricing", text: "Prices" },
//                 ]}
//               />
//               <DropdownMenu
//                 title="Kids"
//                 links={[
//                   { href: "/kids-allergy-care", text: "Immunotherapy for Kids" },
//                   { href: "/immunotherapy-science-kids", text: "Science" },
//                   { href: "/see-our-reviews-kids", text: "Reviews" },
//                   { href: "/safety", text: "Safety" },
//                   { href: "/getting-started-kids", text: "Getting Started" },
//                 ]}
//               />
//               <DropdownMenu
//                 title="Learn"
//                 links={[
//                   {
//                     href: "https://calendly.com/webinar-curex/allergy-immunotherapy",
//                     text: "Sign Up for a Free Webinar",
//                     target: "_blank",
//                   },
//                   { href: "/see-our-reviews", text: "Reviews" },
//                   { href: "/immunotherapy-101", text: "Immunotherapy 101" },
//                   { href: "/immunotherapy-science", text: "Science" },
//                   { href: "https://getcurex.com/allergy-drops", text: "Allergy Drops" },
//                   { href: "/allergy-shots", text: "Allergy Shots" },
//                   { href: "/best-allergy-clinic", text: "Allergy Clinic" },
//                   { href: "/allergy-medicine", text: "Allergy Medicine" },
//                   { href: "/blog", text: "Blog" },
//                   { href: "/partners", text: "For Doctors" },
//                 ]}
//               />
//               <DropdownMenu
//                 title="Food Allergies"
//                 links={[
//                   { href: "/food", text: "Treatment" },
//                   { href: "/blog", text: "Blog" },
//                   { href: "/food-anaphylaxis", text: "Anaphylaxis" },
//                   { href: "/food-allergies-and-sensitivities", text: "Food Sensitivities" },
//                 ]}
//               />
//               <NavLink id="NavQuickie" href="/quickie" text="Quickie" iconSrc="" />
//               <NavLink id="NavPricing" href="/pricing" text="Pricing" iconSrc="" />
//               <a href="/quiz" className="button is-navbar is-mobile w-button">
//                 Am I eligible?
//               </a>
//             </div>
//             <div className="navbar5_top-button-wrapper">
//               <NavLink id="NavRefer" href="/my-curex" text="Refer a friend" iconSrc="" />
//               <NavLink id="NavMyCurex" href="/my-curex" text="MyCurex" iconSrc="/HomePage_files/64c17b8e3cbd24158cdc2484_user.svg" />
//               <NavLink id="NavLogin" href="/login" text="Login" iconSrc="/HomePage_files/64c17b8e3cbd24158cdc2484_user.svg" />
//               <NavLink id="NavLogout" href="/logout" text="Logout" iconSrc="/HomePage_files/64c17b8e3cbd24158cdc2484_user.svg" />
//             </div>
//             <div className="navbar5_contact-wrapper-mobile">
//               <div className="navbar2_button-wrapper">
//                 <a href="/quiz" className="button is-navbar w-button">
//                   Am I eligible?
//                 </a>
//               </div>
//               <a
//                 href="tel:+18572401080"
//                 className="navbar2_link w-inline-block"
//               >
//                 <img
//                   loading="lazy"
//                   src="/HomePage_files/64c17b9b123cb959069d53bd_Group 2017.svg"
//                   alt=""
//                   className="icon-1x1-custom1"
//                 />
//                 <div className="text-style-link">(857) 240-1080</div>
//               </a>
//             </div>
//             <div
//               fs-scrolldisable-element="enable"
//               data-w-id="0d73cac2-a03e-c036-4c86-0ed0ce78d34c"
//               className="navbar5_button-close-wrapper"
//             >
//               <div className="menu-icon-close2">
//                 <div className="menu-icon2_line-x1" />
//                 <div className="menu-icon2_line-x2" />
//               </div>
//             </div>
//           </div>
//           <div
//             data-w-id="0d73cac2-a03e-c036-4c86-0ed0ce78d350"
//             className="navbar5_menu-button"
//           >
//             <div className="menu-icon5">
//               <div className="menu-icon5_line-top" />
//               <div className="menu-icon5_line-middle">
//                 <div className="menu-icon_line-middle-inner" />
//               </div>
//               <div className="menu-icon5_line-bottom" />
//             </div>
//           </div>
//           <div className="navbar5_links-wrapper">
//             <a
//               href="tel:+18572401080"
//               className="navbar5_link show-mobile-landscape w-inline-block"
//             >
//               <img
//                 loading="lazy"
//                 src="/HomePage_files/64c17b9b123cb959069d53bd_Group 2017.svg"
//                 alt=""
//                 className="icon-1x1-custom1"
//               />
//               <div>(857) 240-1080</div>
//             </a>
//             <div className="navbar5_btn-mobile is-fixed">
//               <div
//                 data-trigger=""
//                 className="btn_main_wrap is-nav hide-desktop"
//               >
//                 <div aria-hidden="true" className="btn_main_layout">
//                   <div className="btn_main_text">Am I eligible?</div>
//                 </div>
//                 <div className="btn_clickable_wrap">
//                   <a
//                     href="/quiz"
//                     className="btn_clickable_link is-nav w-inline-block"
//                   >
//                     <span className="btn_clickable_text">
//                       Am I eligible?
//                     </span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="navbar5_banner">
//       <div className="text-display-inline">
//         <div className="text-display-inline">
//           Sale! Get started today for only{" "}
//         </div>
//         <p className="pricing-global">
//           <span className="price-old">$49</span>
//           <span className="text-weight-semibold">$4.99</span>
//         </p>
//       </div>
//       <a href="/quiz" className="navbar5_banner_link">
//         Get started today
//       </a>
//     </div>
//   </article>
// );

// type DropdownMenuLink = {
//   href: string;
//   text: string;
//   target?: string;
//   className?: string;
// };
// type DropdownMenuProps = {
//   title: string;
//   links: DropdownMenuLink[];
// };
// const DropdownMenu = ({ title, links }: DropdownMenuProps) => (
//   <div
//     data-delay={200}
//     data-hover="true"
//     className="navbar2_menu-dropdown w-dropdown"
//   >
//     <div className="navbar2_dropdown-toggle w-dropdown-toggle">
//       <div>{title}</div>
//       <div className="nav-dropdown-icon w-embed">
//         <svg
//           width="100%"
//           height="100%"
//           viewBox="0 0 11 8"
//           fill="currentColor"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             fillRule="evenodd"
//             clipRule="evenodd"
//             d="M0.32302 1.0808C0.695866 0.706891 1.30123 0.706032 1.67513 1.07888L5.50004 4.89295L9.32494 1.07888C9.69884 0.706032 10.3042 0.706891 10.6771 1.0808C11.0499 1.4547 11.049 2.06007 10.6751 2.43291L6.17513 6.92016C5.80198 7.29226 5.19809 7.29226 4.82494 6.92016L0.324937 2.43291C-0.0489685 2.06007 -0.0498271 1.4547 0.32302 1.0808Z"
//             fill="currentColor"
//           />
//         </svg>
//       </div>
//     </div>
//     <nav className="navbar2_dropdown-list w-dropdown-list">
//       {links.map((link, index) => (
//         <a
//           key={index}
//           href={link.href}
//           target={link.target}
//           className={`navbar2_dropdown-link w-dropdown-link${link.className ? " " + link.className : ""}`}
//         >
//           {link.text}
//         </a>
//       ))}
//     </nav>
//   </div>
// );

// type NavLinkProps = {
//   id?: string;
//   href: string;
//   text: string;
//   iconSrc?: string;
// };
// const NavLink = ({ id, href, text, iconSrc }: NavLinkProps) => (
//   <a
//     id={id}
//     href={href}
//     className="navbar2_link w-inline-block"
//   >
//     {iconSrc && (
//       <img
//         loading="lazy"
//         src={iconSrc}
//         alt=""
//         className="icon-1x1-custom1"
//       />
//     )}
//     <div>{text}</div>
//   </a>
// );

const HeaderSection = () => (
  <div className="section_home_header">
    <div className="home_header_component">
      <div
        id="w-node-_27e900d1-136e-39cf-ee8f-ef43c109781f-c109781e"
        className="home_header_contents-right"
      >
        <div className="margin-bottom margin-small">
          <h1 className="home_header_heading">Goodbye Allergies!</h1>
        </div>
        <div className="margin-bottom margin-large">
          <div className="home_header_description">
            Curex is the easiest way to treat allergies at home without
            allergy shots.
          </div>
        </div>
        <div className="home_header_button-wrapper">
          <a
            href="/quiz"
            id="checkoutRedirect"
            data-analytics-on="click"
            target="_blank"
            className="button w-button is-pink"
          >
            Am I eligible?
          </a>
          <link rel="prefetch" href="/quiz" />
        </div>
        <div className="stats2-wrapper">
          <div className="stats2-item is-wide">
            <div className="stats2_image-wrapper">
              <img
                src="/HomePage_files/64be9b8f052089fb35eb989e_chart.svg"
                loading="lazy"
                alt=""
              />
            </div>
            <div>#1 Online Allergy &amp; Asthma Clinic</div>
          </div>
          <div className="stats2-item">
            <div className="stats2_avatar-wrapper">
              <img
                src="/HomePage_files/64be9b90ce56126260163aec_image 116.webp"
                loading="lazy"
                alt=""
                className="stats2_avatar"
              />
              <img
                src="/HomePage_files/64be9b906187686e97a89913_image 114.webp"
                loading="lazy"
                alt=""
                className="stats2_avatar"
              />
              <img
                src="/HomePage_files/64be9b904a0d016b3506d5c6_image 115.webp"
                loading="lazy"
                alt=""
                className="stats2_avatar"
              />
            </div>
            <div>
              50,000+
              <br />
              users
            </div>
          </div>
        </div>
      </div>
      <div
        id="w-node-_27e900d1-136e-39cf-ee8f-ef43c1097838-c109781e"
        className="home_header_contents-left"
      >
        <div className="home_header_image-wrapper">
          <img
            src="/HomePage_files/672267d43cbc4da2aede4c98_curex-bottle (2).avif"
            loading="eager"
            srcSet="/HomePage_files/672267d43cbc4da2aede4c98_curex-bottle (2)-p-500.avif 500w, /HomePage_files/672267d43cbc4da2aede4c98_curex-bottle (2).avif 1256w"
            alt="Treat allergies without allergy shots"
            sizes="(max-width: 1256px) 100vw, 1256px"
            className="home_header_image"
          />
        </div>
      </div>
    </div>
    <div className="section_header_logos">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-small">
            <div className="home_header_logo-list">
              <HeaderLogo src="/HomePage_files/66aba17ed623087564f23b54_usa-today-logo-black.avif" alt="USA Today logo" />
              <HeaderLogo src="/HomePage_files/627c747931085a5af19acdd7_MensHealth_Logo_Black.svg" alt="men's health logo" />
              <HeaderLogo src="/HomePage_files/627c7478ebeb9e147525a23e_CBS_logo.svg.avif" alt="cbs logo" />
              <HeaderLogo src="/HomePage_files/627c7478dc46ea2ca941347a_Fox_Logo_black.avif" alt="fox logo" />
              <HeaderLogo src="/HomePage_files/627c7477dc46eaf20b413479_2560px-Axios_logo_(2020).svg.avif" alt="AXIOS logo" />
              <HeaderLogo src="/HomePage_files/627c7476438a954f2c1f6324_1200px-Healthline_logo.svg.avif" alt="healthline logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

type HeaderLogoProps = {
  src: string;
  alt: string;
};
const HeaderLogo = ({ src, alt }: HeaderLogoProps) => (
  <img
    loading="lazy"
    src={src}
    alt={alt}
    className="home_header_logo"
  />
);

const BenefitsSection = () => (
  <section className="section_home_benefits">
    <div className="padding-global">
      <div className="container-medium">
        <div className="padding-section-large">
          <div className="w-layout-grid home_benefits_component">
            <div className="home_benefits_content">
              <div className="margin-bottom margin-medium">
                <h2 className="home_benefits_heading heading-style-h3">
                  Permanent Allergy Relief Is Possible
                </h2>
              </div>
              <div className="margin-bottom margin-small">
                <div className="text-size-large">
                  With prescription allergy drops, getting rid of
                  allergies has never been easier.
                </div>
              </div>
              <div className="home_benefits_list">
                <BenefitItem text="100% at-home treatment customized for you" />
                <BenefitItem text="Prescribed and supervised by clinicians" />
                <BenefitItem text="Lowest prices in the U.S." />
              </div>
            </div>
            <div className="home_benefits_image-wrapper">
              <img
                src="/HomePage_files/64be9b91698341d25a47b45b_image 112.webp"
                alt=""
                sizes="(max-width: 1041px) 100vw, 1041px"
                srcSet="/HomePage_files/64be9b91698341d25a47b45b_image 112-p-500.webp 500w, /HomePage_files/64be9b91698341d25a47b45b_image 112-p-800.webp 800w, /HomePage_files/64be9b91698341d25a47b45b_image 112.webp 1041w"
                className="home_benefits_image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

type BenefitItemProps = {
  text: string;
};
const BenefitItem = ({ text }: BenefitItemProps) => (
  <div
    id="w-node-_40889440-c803-eebe-51a0-4c032904ab00-a68497f5"
    className="home_benefits_list-item"
  >
    <div className="home_benefits_icon-wrapper">
      <div className="home_benefits_icon w-embed">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group 2440">
            <circle
              id="Ellipse 16"
              cx="15.6477"
              cy="15.6477"
              r="15.6477"
              fill="white"
            />
            <g id="Group 1975">
              <rect
                id="Rectangle 1843"
                x="8.53906"
                y="22.2637"
                width="21.8119"
                height="4.74172"
                rx="2.37086"
                transform="rotate(-47.1991 8.53906 22.2637)"
                fill="#0DCE52"
              />
              <rect
                id="Rectangle 1844"
                x="11.5625"
                y="25.3462"
                width="11.5531"
                height="4.74172"
                rx="2.37086"
                transform="rotate(-137.199 11.5625 25.3462)"
                fill="#0DCE52"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
    <div className="home_benefits_item-text-wrapper">
      <p>{text}</p>
    </div>
  </div>
);

const FeatureSection = () => (
  <section className="section_home_feature">
    <div className="padding-global">
      <div className="container-medium-2">
        <div className="padding-section-small">
          <div className="w-layout-grid home_feature_component">
            <div className="home_feature_image-wrapper">
              <img
                src="/HomePage_files/67817e89381ee9519a06cfd1_curex-drops-5.avif"
                loading="lazy"
                sizes="(max-width: 1080px) 100vw, 1080px"
                srcSet="/HomePage_files/67817e89381ee9519a06cfd1_curex-drops-5-p-500.avif 500w, /HomePage_files/67817e89381ee9519a06cfd1_curex-drops-5.avif 1080w"
                alt=""
                className="home_feature_image"
              />
              <div className="home_feature_image-bg" />
            </div>
            <div
              id="w-node-_73f68526-4119-ef47-48ab-697ebb9bdca4-bb9bdc9c"
              className="home_feature_content"
            >
              <div className="margin-bottom margin-small">
                <h2 className="home_feature_heading heading-style-h3">
                  Easier than brushing your teeth
                </h2>
              </div>
              <p>
                Allergy drops contain clinical allergenic extracts to
                desensitize your immune system over time, just like
                allergy shots.
                <br />
                <br />
                Simply place them under your tongue for 2 minutes a day
                and start seeing relief in as little as 3-6 months!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const AllergyTypesSection = () => (
  <div className="section_home3-types">
    <div className="container-medium">
      <div className="padding-section-medium">
        <div className="home-allergy-type_component">
          <div className="text-align-center">
            <div className="margin-bottom margin-xlarge">
              <h2 className="heading-h2">We Treat Allergies</h2>
            </div>
            <div className="home-allergy-type_content">
              <div className="home-allergy-type_list no-scrollbar">
                <AllergyTypeItem
                  className="is-yellow2"
                  src="/HomePage_files/66e2ccad22a848c4f1eb26ff_Frame 2141.svg"
                  text="Food Allergies"
                />
                <AllergyTypeItem
                  className=""
                  src="/HomePage_files/625345282bdc46e21b1c008b_ic_product_icon_192px_fall.avif"
                  text="Weed Pollens"
                />
                <AllergyTypeItem
                  className="is-blue2"
                  src="/HomePage_files/64870bd8ddeff466f2495e70_ic-cat.svg"
                  text="Cat Allergies"
                />
                <AllergyTypeItem
                  className="is-green2"
                  src="/HomePage_files/62534526b211f35c5663f624_ic_product_icon_192px_dog.avif"
                  text="Dog Allergies"
                />
                <AllergyTypeItem
                  className="is-pink"
                  src="/HomePage_files/6253452886621e842a596556_ic_product_icon_192px_dust mites.avif"
                  text="Dust Mites"
                />
                <AllergyTypeItem
                  className="is-yellow"
                  src="/HomePage_files/6253452c1e8e97b5fe7eafbe_ic_product_icon_192px_mold.avif"
                  text="Molds"
                />
                <AllergyTypeItem
                  className=""
                  src="/HomePage_files/6253453a2bdc4679ee1c00ac_ic_product_icon_192px-tree@4x.avif"
                  text="Tree Pollens"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

type AllergyTypeItemProps = {
  className: string;
  src: string;
  text: string;
};
const AllergyTypeItem = ({ className, src, text }: AllergyTypeItemProps) => (
  <div className={`home-allergy-type_item ${className}`}>
    <img
      loading="lazy"
      src={src}
      alt=""
      className="home-allergy-type_icon"
    />
    <div className="home-allergy-type_text">
      {text}
    </div>
  </div>
);

const PricingSection = () => (
  <section
    data-wf--pricing-simple-table--variant="base-pricing"
    className="section_pricing"
  >
    <div className="padding-global">
      <div className="container-large">
        <div className="padding-section-large">
          <div className="w-layout-grid pricing_component">
            <div
              id="w-node-_5e4a0fbc-b068-5bb3-eab1-d8f5e08032bc-e08032b7"
              className="pricing_content"
            >
              <div className="margin-bottom margin-small">
                <h2 className="pricing_heading heading-style-h3">
                  The most affordable allergy drops
                </h2>
              </div>
              <div className="margin-bottom margin-small">
                <div className="pricing_description-component">
                  <p className="pricing_description">
                    As America’s #1 Online Allergy Clinic, we can offer
                    you the best price on allergy immunotherapy drops.
                  </p>
                  <div className="pricing_description-wrapper">
                    <p className="pricing_description">
                      Start today for only{" "}
                    </p>
                    <div className="pricing-description-slot">
                      <p className="pricing-global">
                        <span className="">$4.99</span>
                      </p>
                    </div>
                    <p className="pricing_description"> (normally </p>
                    <div className="pricing-description-slot">
                      <p className="pricing-global">
                        <span className="price-old no-strikethrough text-weight-normal no-margin">
                          $49
                        </span>
                      </p>
                    </div>
                    <p className="pricing_description">
                      ). You can cancel anytime.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pricing_button-wrapper">
                <a
                  href="/quiz"
                  id="checkoutRedirect"
                  data-analytics-on="click"
                  target="_blank"
                  className="button is-pink w-button"
                >
                  Am I eligible?
                </a>
                <link rel="prefetch" href="/quiz" />
              </div>
            </div>
            <div className="pricing_content-right">
              <table className="pricing_table">
                <tbody>
                  <PricingRow
                    iconSrc="/HomePage_files/66aba10d776b3ded2930fee5_sign-up-icon.svg"
                    label="Sign up"
                    price="$4.99"
                    oldPrice="$49"
                    isTop={true}
                    isBottom={false}
                    isFoodPrice={false}
                    foodPrice={undefined}
                    suffix={undefined}
                  />
                  <PricingRow
                    iconSrc="/HomePage_files/66aba10d5b813bcf353727ea_allergy-drops-icon.svg"
                    label="Allergy Drops Treatment"
                    price="$59"
                    isFoodPrice={true}
                    foodPrice="$149"
                    suffix="/ Month"
                    oldPrice={undefined}
                    isTop={false}
                    isBottom={false}
                  />
                  <PricingRow
                    iconSrc="/HomePage_files/66aba10d04e665e894414538_online-doctors-icon.svg"
                    label="Online Doctor Consults"
                    price="Billed to insurance"
                    oldPrice={undefined}
                    isFoodPrice={false}
                    foodPrice={undefined}
                    suffix={undefined}
                    isTop={false}
                    isBottom={false}
                  />
                  <PricingRow
                    iconSrc="/HomePage_files/66aba10dbf43ae315d23c32b_allergy-testing-icon.svg"
                    label="Allergy Testing"
                    price="Billed to insurance"
                    isBottom={true}
                    isTop={false}
                    oldPrice={undefined}
                    isFoodPrice={false}
                    foodPrice={undefined}
                    suffix={undefined}
                  />
                </tbody>
              </table>
              <div className="pricing-insurance-steps_hover-contents">
                <div className="w-embed">
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n#dashed {\n  text-decoration-line: underline;\n  text-decoration-style: dashed;\n  text-decoration-color: inherit;\n}\n\n#solid {\n  text-decoration-line: underline;\n  text-decoration-style: solid;  \n  text-decoration-color: inherit;\n}\n",
                    }}
                  />
                </div>
                <div
                  data-w-id="b54306fc-0ae1-36af-d81b-a87fa76056bf"
                  className="pricing-insurance-steps_contents-wrapper black"
                >
                  <div
                    id="solid"
                    className="pricing-insurance-steps_tooltip"
                  >
                    High deductible plan? No insurance? No problem!
                    <br />
                  </div>
                </div>
                <div className="pricing-insurance-steps_hover-wrapper">
                  <div className="text-size-small">
                    From $99/month. No copays or surprise fees. HSA/FSA
                    eligible. Discounts available with our annual plan.
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

type PricingRowProps = {
  iconSrc: string;
  label: string;
  price: string;
  oldPrice?: string;
  isFoodPrice?: boolean;
  foodPrice?: string;
  suffix?: string;
  isTop?: boolean;
  isBottom?: boolean;
};
const PricingRow = ({ iconSrc, label, price, oldPrice, isFoodPrice, foodPrice, suffix, isTop, isBottom }: PricingRowProps) => (
  <tr className="pricing_row">
    <td className={`pricing_row-header ${isTop ? "is-top" : ""} ${isBottom ? "is-bottom" : ""}`}>
      {iconSrc && (
        <div className="pricing_row-content">
          <img
            src={iconSrc}
            loading="lazy"
            alt=""
            className="pricing_icon"
          />
          <div>{label}</div>
        </div>
      )}
    </td>
    <td className={`pricing_cell ${isTop ? "is-top" : ""} ${isBottom ? "is-bottom" : ""}`}>
      {oldPrice && (
        <div>
          <p className="pricing-global">
            <span className="price-old">{oldPrice}</span>
            <span className="">{price}</span>
          </p>
        </div>
      )}
      {isFoodPrice && (
        <div className="text-display-inline">From </div>
      )}
      {isFoodPrice && (
        <div className="pricing_cell-pricing is-food">
          <div className="pricing-global">{foodPrice}</div>
        </div>
      )}
      <div className="pricing_cell-pricing">
        <div className="pricing-global">{price}</div>
      </div>
      {suffix && (
        <div className="text-display-inline">
          {" "}
          {suffix}
        </div>
      )}
    </td>
  </tr>
);

const InsuranceSection = () => (
  <div className="section-insurance">
    <div className="padding-global">
      <div className="padding-section-medium">
        <div className="container-large">
          <div className="margin-bottom margin-xsmall">
            <h2
              data-w-id="048fc0ae-a351-1cb9-b30a-879a125db5d4"
              className="insurance-network_title"
            >
              We accept all major insurance providers
            </h2>
          </div>
          <div className="insurance-network_contents">
            <div className="insurance-network_list">
              <div className="insurance-network_logo-list">
                <InsuranceLogo src="/HomePage_files/628e508ce87c24a18f60b486_images.avif" alt="united healthcare logo" />
                <InsuranceLogo src="/HomePage_files/628e504fe1f79d915b9436fd_download.avif" alt="aetna logo" />
                <InsuranceLogo src="/HomePage_files/628e50a63a11a19a6024c27d_download.avif" alt="blue cross blue shield logo" />
                <InsuranceLogo src="/HomePage_files/628e50e99a5e4531e8c6dc12_download.avif" alt="anthem insurance logo" />
                <InsuranceLogo src="/HomePage_files/628e510dd9b30693aa78cd06_2560px-Centene_Corporation_Logo.svg.webp" alt="centene corporation logo" />
                <InsuranceLogo src="/HomePage_files/628e51275c662cfb0e0cc40a_Humana.avif" alt="humana logo" />
              </div>
            </div>
            <div className="margin-top margin-small" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

type InsuranceLogoProps = {
  src: string;
  alt: string;
};
const InsuranceLogo = ({ src, alt }: InsuranceLogoProps) => (
  <img
    src={src}
    loading="lazy"
    alt={alt}
    className="insurance-network_logo"
  />
);

const ComparisonTableSection = () => (
  <div
    data-wf--main-comparison-table--variant="custom-mobile-text-pricing"
    className="section_home-comparison"
  >
    <div className="padding-global">
      <div className="container-medium">
        <div className="padding-section-medium">
          <div className="margin-bottom margin-large">
            <div className="text-align-center">
              <div className="margin-bottom margin-small">
                <h2 className="price-comparison_title">
                  The Better Alternative to Allergy Shots
                </h2>
              </div>
            </div>
          </div>
          <div className="comparison-table_wrapper">
            <div className="comparison-table_title-rows">
              <div className="comparison-table_item-title-wrapper comparison-table_row-title-wrapper comparison-table_first-row-wrapper">
                <div className="example-icon-wrap" />
                <h4 className="example-heading black"> </h4>
              </div>
              <ComparisonRowTitle text="Backed by science" isEnd={false} />
              <ComparisonRowTitle text="Long-term relief" isEnd={false} />
              <ComparisonRowTitle text="Painless" isEnd={false} />
              <ComparisonRowTitle text="At-home treatment" isEnd={false} />
              <ComparisonRowTitle text="Access to clinician via text/call/zoom" isEnd={false} />
              <ComparisonRowTitle text="Total cost/year" isEnd={true} />
            </div>
            <ComparisonColumn
              title="Curex Plans"
              imageSrc="/HomePage_files/6645cb8f7c4ffc007c31f4c3_Image 3 - Edited.webp"
              isHighlighted={true}
            />
            <ComparisonColumn
              title="Allergy Shots"
              imageSrc="/HomePage_files/629f7e905eabc4379a47eeed_image1.webp"
              isHighlighted={false}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

type ComparisonRowTitleProps = {
  text: string;
  isEnd?: boolean;
};
const ComparisonRowTitle = ({ text, isEnd }: ComparisonRowTitleProps) => (
  <div className={`comparison-table_item-row-title-wrapper${isEnd ? " is-end" : ""}`}>
    <div>{text}</div>
  </div>
);

type ComparisonColumnProps = {
  title: string;
  imageSrc: string;
  isHighlighted?: boolean;
};
const ComparisonColumn = ({ title, imageSrc, isHighlighted }: ComparisonColumnProps) => (
  <div className="comparison-table_col">
    <div className={`comparison-table_item-title-wrapper${isHighlighted ? " is-highlighted" : ""}`}>
      <h3 className="comparison-table_item-title">
        {title}
      </h3>
      <img
        src={imageSrc}
        loading="lazy"
        alt=""
        sizes="(max-width: 479px) 27vw, (max-width: 767px) 26vw, (max-width: 991px) 25vw, (max-width: 1439px) 29vw, 384px"
  srcSet="/HomePage_files/6645cb8f7c4ffc007c31f4c3_Image 3 - Edited-p-500.webp 500w, /HomePage_files/6645cb8f7c4ffc007c31f4c3_Image 3 - Edited.webp 800w"
        className="comparison-table_item-image"
      />
    </div>
    <ComparisonItem isHighlighted={isHighlighted} isGreen />
    <ComparisonItem isHighlighted={isHighlighted} isGreen />
    <ComparisonItem isHighlighted={isHighlighted} isGreen />
    <ComparisonItem isHighlighted={isHighlighted} isGreen />
    <ComparisonItem isHighlighted={isHighlighted} isGreen />
    <div className={`comparison-table_item-wrapper is-end${isHighlighted ? "-green" : ""}`}>
      {isHighlighted ? (
        <div>
          From $59/month
          <br />+ copay
        </div>
      ) : (
        <>
          <div className="comparison-table_text-desktop w-variant-44a551ab-93e6-01e7-31ef-5d61826c764b">
            $1,500-$4,000
          </div>
          <div className="comparison-table_text-mobile w-variant-44a551ab-93e6-01e7-31ef-5d61826c764b">
            $1,500-
            <br />
            $4,000
          </div>
        </>
      )}
    </div>
  </div>
);

type ComparisonItemProps = {
  isHighlighted?: boolean;
  isGreen?: boolean;
};
const ComparisonItem = ({ isHighlighted, isGreen }: ComparisonItemProps) => (
  <div className={`comparison-table_item-wrapper${isHighlighted ? " is-highlighted" : ""}`}>
    <img
  src={isGreen ? "/HomePage_files/66795290a52ec565f12713c1_green-tick.svg" : "/HomePage_files/667952685a6e5c978eb80c14_red-x.svg"}
      loading="lazy"
      alt=""
      className="comparison-table_icon-image"
    />
  </div>
);

const TestimonialsSection = () => (
  <div className="section_testimonials7">
    <div className="padding-section-medium">
      <div className="testimonials7_component">
        <div className="padding-global no-padding-right">
          <div className="container-large">
            <div className="text-align-center">
              <div className="margin-bottom margin-large">
                <h2 className="testimonials7_heading heading-style-h3">
                  Join over 50,000 Curex users!
                  <br />
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonials7_image-wrapper">
          <img
            src="/HomePage_files/6628f28f3ed557ee298ea27d_Group 2454.webp"
            loading="lazy"
            sizes="(max-width: 2308px) 100vw, 2308px"
            srcSet="/HomePage_files/6628f28f3ed557ee298ea27d_Group 2454-p-500.webp 500w, /HomePage_files/6628f28f3ed557ee298ea27d_Group 2454-p-800.webp 800w, /HomePage_files/6628f28f3ed557ee298ea27d_Group 2454-p-1080.webp 1080w, /HomePage_files/6628f28f3ed557ee298ea27d_Group 2454-p-1600.webp 1600w, /HomePage_files/6628f28f3ed557ee298ea27d_Group 2454-p-2000.webp 2000w, /HomePage_files/6628f28f3ed557ee298ea27d_Group 2454.webp 2308w"
            alt=""
            className="testimonials7_image"
          />
        </div>
        <div className="padding-global">
          <div className="container-large">
            <div className="testimonials7_content">
              <div className="text-align-center">
                <div className="max-width-small align-center">
                  <div className="margin-bottom margin-small">
                    <div className="testimonials7_quote-icon w-embed">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        viewBox="0 0 48 40"
                        fill="none"
                        preserveAspectRatio="xMidYMid meet"
                        aria-hidden="true"
                        role="img"
                      >
                        <path
                          d="M36.2175 39.9805C42.951 39.9805 45.0553 34.5095 45.0553 31.5636C45.0553 28.6177 45.897 26.5134 40.0051 23.9884C34.1133 21.4633 34.1121 18.5174 34.1121 17.2549C34.1121 15.9923 36.6372 7.57543 48 5.05036L47.1583 0.000221179C40.1442 1.12247 25.9477 7.32292 25.2744 23.1467C24.9946 28.7579 26.7915 39.9805 36.2175 39.9805Z"
                          fill="currentColor"
                        />
                        <path
                          d="M10.9714 39.9805C17.7049 39.9805 19.8092 34.5095 19.8092 31.5636C19.8092 28.6177 20.6509 26.5134 14.759 23.9884C8.86721 21.4633 8.86603 18.5174 8.86603 17.2549C8.86603 15.9923 11.3911 7.57543 22.7539 5.05036L21.9122 0.000221179C14.8981 1.12247 0.701646 7.32292 0.0282932 23.1467C-0.251485 28.7579 1.54545 39.9805 10.9714 39.9805Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="margin-bottom margin-small">
                    <p className="testimonials7_quote">
                      “Curex WORKS! The drops are custom to your
                      specific allergies and are super easy to take.”
                    </p>
                  </div>
                  <div className="margin-bottom margin-medium">
                    <div className="testimonials7_badge">
                      <div>Nicole</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const HowItWorksSection = () => (
  <section className="section_how1">
    <div className="padding-global">
      <div className="container-large">
        <div className="padding-section-large">
          <div className="how1_component">
            <div className="text-align-center">
              <h2 className="home_how_heading heading-style-h2">
                How it works
              </h2>
            </div>
            <div className="w-layout-grid how1_list">
              <HowItWorksStep
                imageSrc="/HomePage_files/66b9fd72cb72c02d4d2810ed_epipen1.avif"
                title="Fill out Form"
                text="It only takes a few minutes to answer a few questions about your medical history"
              />
              <HowItWorksStep
                imageSrc="/HomePage_files/65ad248dac59849f59005629_hero-image.webp"
                title="Connect With Provider"
                text="Curex providers can connect with you via Zoom or text"
              />
              <HowItWorksStep
                imageSrc="/HomePage_files/66fef2899ecbb64fabf23b0f_Ellipse 403.avif"
                title="Start Treatment"
                text="Get your allergy treatment delivered to your door"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

type HowItWorksStepProps = {
  imageSrc: string;
  title: string;
  text: string;
};
const HowItWorksStep = ({ imageSrc, title, text }: HowItWorksStepProps) => (
  <div className="how1_item">
    <div className="margin-bottom margin-medium">
      <div className="epipen_hiw_image-wrapper">
        <img
          src={imageSrc}
          loading="lazy"
          alt=""
          className="epipen_hiw_image"
        />
      </div>
    </div>
    <div className="margin-bottom margin-xsmall">
      <h3 className="how1_subheading">{title}</h3>
    </div>
    <p className="how1_text-wrap">
      {text}
    </p>
  </div>
);


