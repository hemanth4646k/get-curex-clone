
import Faq from "../../common/ui/Faq";

const faqData = [
  {
    question: "What is Curex?",
    answer: (
      <>
        <p>Curex is America's #1 Online Allergy Clinic and the place to go for all your allergy questions and needs. We believe that true allergy care should have only one goal: zero allergies. We believe in a world without allergies, and we offer the easiest and most affordable treatment to get you to zero-allergies: sublingual immunotherapy.</p>
        <p>Sublingual immunotherapy is a form of allergy treatment that involves placing drops containing allergenic extracts under the tongue. This method helps build the body's tolerance to allergens over time, just like allergy shots. The treatment is customized based on an individual's specific allergies, as determined by allergy testing and medical history.</p>
        <p>Curex offers comprehensive services that include at-home allergy testing, online consultations, symptom management, and personalized sublingual immunotherapy plans. Our goal is to improve access to quality allergy care for anyone who needs it. If you're ready to finally get rid of your allergies, you're in the right place. Together with our partners we have treated more patients with allergy drops than anyone else in the U.S.</p>
      </>
    ),
  },
  {
    question: "Is Curex legitimate?",
    answer: (
      <p>Curex is the largest online allergy and asthma clinic in the U.S. We started because our clinicians wanted to offer more convenient and affordable allergy and asthma care for everyone. So far we have attracted more than 50,000 customers from every U.S. state. We are proud to have the highest patient satisfaction and loyalty rates in the industry. Our service has been audited and certified by <a href="http://legitscript.com/" target="_blank" rel="noopener noreferrer">LegitScript.com</a>.</p>
    ),
  },
  {
    question: "What services do you offer?",
    answer: (
      <p>Curex provides comprehensive care for those suffering from allergies, asthma and eczema. This includes customized <a href="https://getcurex.com/sublingual-immunotherapy" target="_blank" rel="noopener noreferrer">sublingual immunotherapy</a>, at-home concierge allergy testing, and symptom management. Our goal is to provide accessibility and quality of allergy care in the U.S.</p>
    ),
  },
  {
    question: "Does Curex accept insurance?",
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
      <p>If you pick an insurance plan, we will bill your insurance for each quarterly visit (required). However, this does not guarantee payment, as your health insurance company may deny payment for any service, even if you are eligible or in-network with us. If your insurance company denies payment, you will be personally and fully responsible for payment after services are rendered, including any co-payment, non-covered portions, deductible amount, or coinsurance that applies. Curex is unable to provide an accurate estimate of how much your insurance will pay and how much you will be responsible for paying. The average patient responsibility is $200/year and depends on your plan (deductibles, coinsurance, telemedicine benefit). We encourage you to call the number on the back of your insurance card and ask your member representative about your ‘allergy, asthma, and telemedicine visit' benefits. Once a claim is submitted, we are unable to take it back. By proceeding, you agree to pay any additional charges that may be incurred that are not covered by your insurance policy.</p>
    ),
  },
  {
    question: "What conditions do you treat?",
    answer: (
      <p>We focus on food as well as indoor and outdoor allergies caused by environmental or inhalant allergies, like those caused by pollens, weeds, grasses, dust mites, molds and pets. We also treat allergic asthma and eczema, as these conditions are closely related to allergies.</p>
    ),
  },
  {
    question: "What is immunotherapy?",
    answer: (
      <p><a href="https://getcurex.com/immunotherapy-101" target="_blank" rel="noopener noreferrer">Immunotherapy</a> is a longstanding form of treatment that aims to meaningfully reduce the underlying cause of indoor/outdoor allergies and related conditions. Immunotherapy is frequently practiced by using allergen extracts for allergy drops, allergy shots and allergy tablets.</p>
    ),
  },
  {
    question: "Can my child use Curex?",
    answer: (
      <p>Curex <a href="https://getcurex.com/kids-allergy-care" target="_blank" rel="noopener noreferrer">serves adults and children</a> as young as 5 years old. Certain tests and treatments may be limited for younger kids. Start by answering the quiz, so that our clinicians can recommend the best testing and treatment options.</p>
    ),
  },
  {
    question: "Does Curex treat food allergies?",
    answer: (
      <>
        <p>Absolutely! We treat more than 90 different food allergies, including the most common ones - peanuts, milk, tree nuts, wheat, eggs, fish, shellfish, soy, and sesame among others.</p>
        <p>You can learn about our food program <a href="/food">here</a>.</p>
      </>
    ),
  },
  {
    question: "What is your cancellation policy?",
    answer: (
      <p>You can cancel at any time. However, please note that if you received treatment recently, we will need to collect any remaining payments for that treatment on your account. Additionally, if you had any telehealth visits, it can take up to three months for insurance to process each claim. These may be billed to you after you cancel if they have not been processed already.</p>
    ),
  },
  {
    question: "How does allergy testing work?",
    answer: (
      <p>Depending on your location, we send a phlebotomist (medical assistant) to your home or office for a simple blood draw (not a finger prick). This sample is then processed using hospital-grade technology to produce accurate results. In some areas, you may need to go into a local lab for your blood draw. We work with LabCorp and Quest Diagnostics. This is an IgE blood test that results in more accurate results compared to finger prick tests that are available online through some companies. This is not a skin scratch test where an allergist spends 30+ minutes injecting you with small doses of allergens to see if any swelling or reaction occurs.</p>
    ),
  },
  {
    question: "Is sublingual immunotherapy safe?",
    answer: (
      <p>At-home sublingual immunotherapy is a safe alternative to allergy shots that can be done at the comfort of your home. Due to its gentle, gradual build-up phase, the risk of severe reactions is extremely low compared to allergy shots, which require monitoring post-injection.</p>
    ),
  },
];

const FaqWR = () => (
  <div className="padding-section-medium" style={{ padding: '48px 0' }}>
    <div className="max-width-large align-center" style={{ maxWidth: 900, margin: '0 auto' }}>
      <div className="margin-bottom margin-small">
        <div className="text-align-center">
          <h2>FAQs</h2>
        </div>
      </div>
      <Faq faqs={faqData} />
    </div>
  </div>
);

export default FaqWR;
