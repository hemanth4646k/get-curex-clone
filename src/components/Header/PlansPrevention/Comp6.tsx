import Faq from "../../../common/ui/Faq";

const faqs = [
  {
    question: "Sign up for Free Webinar",
    answer: (
      <>
        <p>Learn how allergy immunotherapy can help you find lasting relief. Allergy experts discuss allergy shots, allergy drops and food OIT to help you reduce your environmental and/or food allergies. Reserve your spot here: </p>
        <p><a target="_blank" href="https://calendly.com/webinar-curex/allergy-immunotherapy">https://calendly.com/webinar-curex/allergy-immunotherapy</a></p>
      </>
    ),
  },
  {
    question: "What is Curex?",
    answer: (
      <>
        <p>Curex is the place to go for all your allergy questions and needs. Led by healthcare entrepreneurs and allergy clinicians, Curex is an integrated, online telemedicine clinic for people who suffer from environmental allergies (e.g., indoor, outdoor or pet), asthma, and eczema.</p>
      </>
    ),
  },
  {
    question: "Is Curex legitimate?",
    answer: (
      <>
        <p>Curex is the largest online allergy and asthma clinic in the U.S. We started because our clinicians wanted to offer more convenient and affordable allergy and asthma care for everyone. So far we have attracted more than 50,000 customers from every U.S. state. We are proud to have the highest patient satisfaction and loyalty rates in the industry. Our service has been audited and certified by LegitScript.com.</p>
      </>
    ),
  },
  {
    question: "What services do you offer?",
    answer: (
      <>
        <p>Curex provides comprehensive care for those suffering from allergies, asthma and eczema. This includes customized sublingual immunotherapy, at-home concierge allergy testing, and symptom management. Our goal is to provide accessibility and quality of allergy care in the U.S.</p>
      </>
    ),
  },
  {
    question: "Does Curex accept insurance?",
    answer: (
      <>
        <p>Curex accepts the majority of insurance plans across the United States, including Aetna, Anthem, United, Humana and others. While it is difficult to estimate out-of-pocket costs prior to a claim being submitted, our team will work with you to make sure your treatment is as affordable as possible.</p>
        <p>The average patient responsibility is $200/year and depends on your plan (deductibles, coinsurance, telemedicine benefit).</p>
        <p>In addition, Curex accepts HSA and FSA.</p>
      </>
    ),
  },
  {
    question: "Should I use insurance if I'm not sure about my deductibles or copays?",
    answer: (
      <>
        <p>If you pick an insurance plan, we will bill your insurance for each quarterly visit (required). However, this does not guarantee payment, as your health insurance company may deny payment for any service, even if you are eligible or in-network with us. If your insurance company denies payment, you will be personally and fully responsible for payment after services are rendered, including any co-payment, non-covered portions, deductible amount, or coinsurance that applies.</p>
        <p>Curex is unable to provide an accurate estimate of how much your insurance will pay and how much you will be responsible for paying.</p>
        <p>We encourage you to call the number on the back of your insurance card and ask your member representative about your ‘allergy, asthma, and telemedicine visit’ benefits. Once a claim is submitted, we are unable to take it back. By proceeding, you agree to pay any additional charges that may be incurred that are not covered by your insurance policy.</p>
      </>
    ),
  },
  {
    question: "What conditions do you treat?",
    answer: (
      <>
        <p>We focus on indoor and outdoor allergies caused by environmental or inhalant allergies, like those caused by pollens, weeds, grasses, dust mites, molds and pets. We also treat allergic asthma and eczema, as these conditions are closely related to allergies.</p>
      </>
    ),
  },
  {
    question: "What is immunotherapy?",
    answer: (
      <>
        <p>Immunotherapy is a longstanding form of treatment that aims to meaningfully reduce the underlying cause of indoor/outdoor allergies and related conditions. Immunotherapy is frequently practiced by using allergen extracts for shots or allergy tablets. Treatment plans are customized to the individual patient based on medical profile, test results, and lifestyle needs.</p>
      </>
    ),
  },
  {
    question: "Can my child use Curex?",
    answer: (
      <>
        <p>Curex serves adults and children as young as 5 years old. Certain tests and treatments may be limited for younger kids. Start by answering the quiz, so that our clinicians can recommend the best testing and treatment options.</p>
      </>
    ),
  },
  {
    question: "Does Curex treat food allergies?",
    answer: (
      <>
        <p>Curex currently treats allergies to food, tree, weed, grass pollens, pet allergies, dust mites, mold and cockroach. We do not treat metal, or venom allergies.</p>
      </>
    ),
  },
  {
    question: "What is your cancellation policy?",
    answer: (
      <>
        <p>Treatments are shipped in 3 month installments in all plans. Cancellations are accepted prior to the next refill being compounded by the pharmacy (so you can get a partial refund on a prepayment plan). To cancel or pause subscriptions, please email our team at hi@getcurex.com.</p>
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
  {
    question: "How does allergy testing work?",
    answer: (
      <>
        <p>Depending on your location, we send a phlebotomist (medical assistant) to your home or office for a simple blood draw (not a finger prick). This sample is then processed using hospital-grade technology to produce accurate results.</p>
        <p>In some areas, you may need to go into a local lab for your blood draw. We work with LabCorp and Quest Diagnostics.</p>
        <p>This is an IgE blood test that results in more accurate results compared to finger prick tests that are available online through some companies.</p>
        <p>This is <strong>not</strong> a skin scratch test where an allergist spends 30+ minutes injecting you with small doses of allergens to see if any swelling or reaction occurs.</p>
      </>
    ),
  },
  {
    question: "Is sublingual immunotherapy safe?",
    answer: (
      <>
        <p>Studies have shown a significantly lower risk for anaphylaxis relative to allergy shots, allowing you to take them in the comfort of your own home.</p>
      </>
    ),
  },
];

function WhatPeopleSay() {
  return (
    <div style={{ padding: "2rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <iframe
        width="673"
        height="451"
        src="https://www.youtube.com/embed/6Y7tv1EFleI"
        title="Here's How Cooper Overcame Cat Allergies with Curex!"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div style={{ maxWidth: 800, width: "100%", marginTop: 40 }}>
        <Faq faqs={faqs} />
      </div>
    </div>
  );
}

export default WhatPeopleSay;