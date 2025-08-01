import { useState } from 'react';
import './faq.css';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen?: boolean;
}

const FaqItem = ({ question, answer, isOpen = false }: FaqItemProps) => {
  const [isExpanded, setIsExpanded] = useState(isOpen);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="faq_accordion">
      <div 
        className={`faqs_accordion-header ${isExpanded ? 'w--open' : ''}`}
        onClick={toggleExpanded}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleExpanded();
          }
        }}
      >
        <div className="faqs_accordion-header-text">{question}</div>
        <div className={`accordion-icon ${isExpanded ? 'expanded' : ''}`}>
          <svg width="26" height="13" viewBox="0 0 26 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M1 1.17578L10.78 11.1191C11.935 12.2934 13.825 12.2934 14.98 11.1191L24.76 1.17578" 
              stroke="black" 
              strokeWidth="1.5" 
              strokeMiterlimit="10" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className={`accordion-body ${isExpanded ? 'w--open' : ''}`}>
        <div 
          className="text-rich-text-faqs"
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      </div>
    </div>
  );
};

const Faq = () => {
  const faqData = [
    {
      question: "Sign up for Free Webinar",
      answer: `<p>Learn how allergy immunotherapy can help you find lasting relief. Allergy experts discuss allergy shots, allergy drops and food OIT to help you reduce your environmental and/or food allergies. Reserve your spot here:</p><p><a target="_blank" href="https://calendly.com/webinar-curex/allergy-immunotherapy">https://calendly.com/webinar-curex/allergy-immunotherapy</a></p>`,
      isOpen: true
    },
    {
      question: "What is Curex?",
      answer: `<p>Curex is America's #1 online allergy clinic, dedicated to helping you manage and eliminate your allergies. We believe that true allergy care should have one goal: zero allergies. Our vision is a world without allergies, and we offer the most convenient and affordable path to get there—sublingual immunotherapy.</p><p>Sublingual immunotherapy involves placing allergy drops under the tongue, helping your body build tolerance to allergens over time, similar to allergy shots. This treatment is tailored to your specific allergies, based on results from allergy testing and your medical history.</p><p>Curex offers comprehensive services that include at-home allergy testing, online consultations, symptom management, and personalized sublingual immunotherapy plans. Our goal is to improve access to quality allergy care for anyone who needs it. If you're ready to finally get rid of your allergies, you're in the right place. Together with our partners we have treated more than 300,000 patients with allergy drops – more than anyone else in the U.S.</p><p>Our services are audited and certified by <a href="http://LegitScript.com" target="_blank">LegitScript.com</a>.</p>`
    },
    {
      question: "What conditions do you treat?",
      answer: `<p>We specialize in treating a wide range of allergies, including food allergies and both indoor and outdoor environmental or inhalant allergies. This encompasses allergies caused by pollens, weeds, grasses, dust mites, molds, and pets. Additionally, we treat allergic asthma and eczema, as these conditions are closely related to allergies.</p>`
    },
    {
      question: "Do you treat food allergies?",
      answer: `<p>Absolutely! We treat more than 90 different food allergies, including the most common ones—peanuts, milk, tree nuts, wheat, eggs, fish, shellfish, soy, sesame, and many others.</p><p>Note that we generally do not treat food sensitivities and intolerances. If you're unsure, our clinical team can help with diagnosis and determine if we can assist you.</p><p>You can learn about our food program <a href="/food">here</a>.</p>`
    },
    {
      question: "Do you treat my allergy?",
      answer: `<p>We specialize in treating a wide range of allergies, including food allergies and both indoor and outdoor environmental or inhalant allergies. This includes allergies caused by pollens, weeds, grasses, dust mites, molds, and pets. However, we don't treat allergies to metals or venoms.</p><p>Treatment is typically determined by the availability of clinical-grade allergenic extracts. While some allergens may not be commercially available, they might be treatable through related allergens that share similar protein structures—a concept known as cross-reactivity. If you're unsure whether we can treat your specific allergy, we recommend signing up to receive a clinical recommendation from our medical team.</p>`
    },
    {
      question: "What is the treatment?",
      answer: `<p>We're transforming allergy care by offering 100% online allergy immunotherapy in the form of allergy drops. Immunotherapy gradually exposes your immune system to allergens, reducing allergic reactions. It's the only treatment that addresses the root cause of allergies, potentially making you allergy-free.</p><p>Traditionally, immunotherapy involved allergy shots—painful, expensive, and time-consuming due to frequent doctor visits. Allergy drops can be taken at home and offer the same benefits. They're the preferred treatment in Europe and are now becoming more common in the United States.</p><p><strong>What's in the allergy drops?</strong></p><p>The composition of sublingual allergy drops is personalized based on your specific allergens identified through testing. They may include:</p><ul><li>Pollens: From trees, grasses, or weeds for seasonal allergies.</li><li>Dust mites: For those allergic to these common household organisms.</li><li>Pet dander: Proteins from the saliva, skin, or fur of cats and dogs.</li><li>Mold: Extracts from specific mold species.</li><li>Food extracts: From pharmaceutical manufacturers. Note that food allergy drops are not mixed with environmental allergy drops and are usually more expensive.</li><li>Glycerin: A natural, vegetable-based preservative that protects the drops from contamination. While glycerin tastes sweet, it doesn't significantly affect blood sugar levels.</li></ul><p>All extracts are FDA-approved medications produced in highly controlled environments. A licensed pharmacy prepares each patient's formulation after receiving a doctor's prescription.</p>`
    },
    {
      question: "How long is the treatment?",
      answer: `<p>Allergy immunotherapy is typically recommended for a duration of 3 to 5 years. Most patients begin to experience positive results within the first 6 months. If there are no noticeable improvements within 12 months, our clinical team will order follow-up testing and may adjust your dosage.</p><p>Allergy drop immunotherapy is a long-term treatment designed to provide lasting results. Most patients who complete the therapy experience reduced symptoms and can stop relying on allergy medications for over 10 years. Some choose to continue with maintenance treatment to ensure their allergy symptoms never return.</p>`
    },
    {
      question: "How does it all work?",
      answer: `<p><strong>Start with the Eligibility Quiz:</strong> Begin by taking our quiz to determine if our program is right for you.</p><p><strong>Sign Up and Medical History:</strong> Sign up and complete your medical history form.</p><p><strong>Allergy Testing:</strong> Depending on your situation, you may need an allergy test, which our doctors will order for you. This can be done at home or at a local lab. Or you can bring your prior results.</p><p><strong>Consultation with a Clinician:</strong> You'll have a consultation with a clinician who will recommend a personalized treatment plan.</p><p><strong>Receive Your Allergy Drops:</strong> If you choose to subscribe, a leading compounding pharmacy will prepare your personalized allergy drops and ship them to you quarterly.</p><p><strong>Ongoing Support:</strong> Every two months, you'll check in with our clinical team to ensure your treatment is progressing well and your formulation is effective.</p>`
    },
    {
      question: "Can my child use it?",
      answer: `<p>Yes, your child can use Curex! We prescribe sublingual drops for children as young as 5 years old, provided the clinician believes the patient will benefit and can follow the treatment plan with the help of their parent or guardian.</p><p>Curex <a href="/kids-allergy-care">serves adults and children</a> as young as 5 years old. Certain tests and treatments may be limited for younger kids. Start by answering the quiz, so that our clinicians can recommend the best testing and treatment options.</p>`
    },
    {
      question: "Is it safe?",
      answer: `<p>At Curex, your safety is our top priority. Systemic reactions, including anaphylaxis, are extremely rare with allergy drops compared to allergy shots, making allergy drops a widely recognized safer alternative.</p><p>While the risk of experiencing a severe allergic reaction from allergy drops is exceptionally low, we believe in being prepared for any possibility. Therefore, as a precautionary measure, our providers prescribe an Epinephrine auto-injector (EpiPen) to every patient. Patients with a history of anaphylaxis or those being treated for food allergies are required to have an EpiPen available every time they take their drops.</p><p>For most patients, the initial one or two shipments consist of a buildup dosage, which is more diluted to help your immune system adjust before reaching the full dose—usually by the second or third shipment. It's advisable to have an Epinephrine auto-injector on hand when starting a new dosage. Additionally, situations such as strenuous exercise or significant exposure to allergens warrant having an epinephrine device readily available.</p><p>Certain patients, particularly those with a history of anaphylactic reactions, will be required to have an Epinephrine auto-injector before they start allergy drops.</p>`
    },
    {
      question: "Is it FDA approved?",
      answer: `<p>Allergy drops are made using allergenic extracts that have received FDA approval—the same extracts found in allergy shots and single-allergy tablets. However, because these drops are compounded specifically for each patient, they are not individually reviewed by the FDA for safety or efficacy. As a result, while clinicians may prescribe allergy drops off-label when medically indicated, this practice is both legal and common. In fact, U.S. ENTs and European allergists consider allergy drops a standard of care, a view supported by decades of research following their surge in popularity in Europe during the 1990s.</p>`
    },
    {
      question: "How much does it cost?",
      answer: `<p>Curex offers the most affordable allergy immunotherapy program in the U.S. The subscription is $59/month for allergy drops (not covered by insurance) and copay for consultations (billed to insurance). An average patient responsibility for consultations is $200 per year and depends on your insurance plan (deductibles, coinsurance, telemedicine benefit). Please note that our food allergy subscription plan is $149/month for allergy drops plus copay for consultations.</p><p>We also offer attractive self-pay rates of $99/month for environmental and $199/month for food allergy subscriptions; these rates include all consultations, and do not have any copays.</p><p>In case you require an allergy test, our lab partners will bill your insurance, and there may be a standard copay. If you prefer to self pay for the test, we have negotiated an attractive $199 self-pay price.</p><p>Here is more information: <a href="https://getcurex.com/pricing">https://getcurex.com/pricing</a></p>`
    },
    {
      question: "Do you accept HSA/FSA?",
      answer: `<p>Yes. If you need a detailed invoice, please email us at <a href="mailto:hi@getcurex.com">hi@getcurex.com</a> after the payment and we'll supply it to you.</p>`
    },
    {
      question: "Do you accept my insurance?",
      answer: `<p>We accept most commercial insurance plans and are likely in-network for yours. However, estimating the exact out-of-pocket costs prior to submitting the first insurance claim can be challenging. Each insurance plan varies in terms of deductibles, how telemedicine consultations are covered, and the treatment of payments related to your specific medical "complexity," which we will only be able to assess after your consultation with one of our doctors.</p><p>Regardless of your insurance company's response, we are committed to working with you to find the most affordable path to obtaining allergy care. We believe we have the lowest price for allergy immunotherapy in the U.S., and our aim is to make this treatment accessible to everyone who needs it. Please note that an average patient responsibility is $200 per year and depends on your insurance plan (deductibles, coinsurance, telemedicine benefit).</p><p>We also accept Medicare and Tricare.</p>`
    },
    {
      question: "Are clinical visits required?",
      answer: `<p>Yes. Allergy immunotherapy is a complex and personalized treatment program that necessitates a clinical diagnosis and a customized treatment plan. By conducting initial and follow-up consultations, our medical team ensures you receive the most effective care and the best possible outcomes.</p>`
    },
    {
      question: "What states do you serve?",
      answer: `<p>We serve patients everywhere in the U.S. We currently do not offer services outside of the U.S.</p>`
    },
    {
      question: "Allergy testing options.",
      answer: `<p>As part of your treatment, you may be required to provide allergy test results. You can either upload your previous results (IgE or skin scratch) or we can order a new test for you, either at home or in a local lab.</p><p>Depending on your location, we can send a phlebotomist (medical assistant) to your home or office for a simple blood draw (not a finger prick). A phlebotomist may have a small convenience fee. This sample is then processed using hospital-grade technology to produce accurate results. In some areas, you may need to go into a local lab for your blood draw. We work with LabCorp and Quest Diagnostics. This is an IgE blood test using FDA-cleared ImmunoCAP technology that results in more accurate results compared to finger prick tests that are available online through some companies. This is not a skin scratch test where an allergist spends 30+ minutes injecting you with small doses of allergens to see if any swelling or reaction occurs.</p><p>The labs bill your insurance for the test. If you prefer, we have also negotiated an attractive self-pay rate of $199 for the test.</p><p>In some instances, we may recommend a home self-collection test kit. This test is then processed with CLIA-certified self-validated technology. While the results may have lower sensitivity, this test may be more convenient for some patients. It's only available as a self-pay option for $199.</p><p>We strive to make the testing process as convenient and affordable as possible to ensure you receive accurate diagnoses and effective treatment.</p>`
    },
    {
      question: "Which allergy test is best?",
      answer: `<p>Our medical team uses allergy testing in conjunction with your symptom history, so test results are not absolute but serve as a supporting tool in your diagnosis and treatment plan.</p><p>Both skin testing and IgE ImmunoCAP blood testing are considered standards of care and are widely accepted by practicing allergists:</p><p><strong>Skin Testing:</strong></p><ul><li>Advantages: Faster procedure with immediate results.</li><li>Considerations: Requires you to avoid antihistamines for a week prior to the test. It may not be suitable for everyone, especially those with skin conditions like eczema.</li></ul><p><strong>IgE ImmunoCAP Blood Testing:</strong></p><ul><li>Advantages: Offers more accurate, consistent, and detailed results, especially for food component testing.</li><li>Considerations: No need to stop taking antihistamines. It's often easier for children and patients with eczema.</li></ul><p>Some at-home IgE blood tests may provide more convenience but generally have lower sensitivity and accuracy. Our medical team recommends these only when other options are not readily available.</p><p>The best allergy test depends on your specific situation. Our clinicians will work with you to determine the most appropriate testing method to ensure accurate results and effective treatment.</p>`
    },
    {
      question: "Cancellation policy",
      answer: `<p>You can cancel your subscription at any time. However, if you've recently received treatment, any remaining payments for that treatment will still be due. Remember, treatments are shipped in 3-month supplies and are covered by your monthly subscription fee. Additionally, insurance claims for any telehealth visits can take up to three months to process. These claims may be billed to you after you cancel if they have not been processed yet.</p>`
    }
  ];

  return (
    <div className="faqs_list-wrapper">
      {faqData.map((faq, index) => (
        <FaqItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={faq.isOpen}
        />
      ))}
    </div>
  );
};

export default Faq;
