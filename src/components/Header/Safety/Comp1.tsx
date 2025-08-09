
import DescCard from '../../../common/ui/DescCard';
import ComparisonTable from '../../../common/ui/ComparisonTable';
import SafetyCard from './SafetyCard';
import InsurancePartnersCommon from '../../../common/InsurancePartners';

import EndPromo from '../../../common/EndPromo';
import Faq from '../../../common/ui/Faq';

function Comp1() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2.5rem",
        alignItems: "center",
        textAlign: "center"
      }}
    >

      

      <div style={{ backgroundColor: "#a1d9ff" }}>AT-HOME IMMUNOTHERAPY</div>
      <h1>What makes Curex the top choice</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}>
        <SafetyCard
          imgSrc="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/64f9e04594c3d020c9998ba7_Rectangle%201877.webp"
          heading="Over 50,000 Users Choose Curex"
          desc="Curex has more satisfied customers than any other telemedicine clinic. Our clinical team delivers great outcomes to allergy patients in every U.S. state."
        />
        <SafetyCard
          imgSrc="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/62273a15a1e4613ea10c1d35_61c5f0edff51f019b65e8098_Rectangle%2053%20(3).webp"
          heading="Curex is the only online allergy clinic accepting insurance"
          desc="Our insurance network is growing everyday so you can get the most affordable treatment available."
        />
        <SafetyCard
          imgSrc="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/63d28d24ba70d63f87bb63a3_how-it-works-1.webp"
          heading="High quality testing"
          desc="Curex uses hospital-grade allergy tests that are covered by insurance. This means better treatment, lower costs and no need to re-test!"
        />
      </div>
      <h2>Sublingual Immunotherapy has a <br />
superior safety profile</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem", marginTop: '1rem' }}>
        <SafetyCard
          imgSrc="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/62c9c7076128097ff4c7fd50_image6.jpg"
          heading="Medical History and Clinical Review:"
          desc="Patients with high-risk profiles are carefully filtered based on their medical history and clinical reviews."
        />
        <SafetyCard
          imgSrc="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/629f7e905eabc4379a47eeed_image1.webp"
          heading="Gradual Dosage Increase:"
          desc="Prescription dosages step up gradually. This approach ensures that any potential allergic reactions don't occur immediately. This gradual training allows the body to adjust before reaching the full dose, making it more gentle than treatments that start with larger doses."
        />
        <SafetyCard
          imgSrc="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/654517eb68ab7a8f634dc077_EpiPen%20Provision.webp"
          heading="EpiPen Provision:"
          desc="Every patient is prescribed an EpiPen, ensuring safety even in the rare case of severe reactions. This is especially crucial for those with high-risk profiles."
        />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2rem", marginTop: '1rem' }}>
        <SafetyCard
          imgSrc="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/652e8cfb1c92a9349532d562_Rectangle%201943.webp"
          heading="Supervised Treatment:"
          desc="Treatments are prescribed and administered under the supervision of clinicians online. Additionally, patients have the option to schedule a first-drop appointment where a medical professional oversees the initiation of their treatment."
        />
        <SafetyCard
          imgSrc="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/654518aaeeedc8ea44dc2d14_curex%20meds.webp"
          heading="Impressive Safety Record:"
          desc="Statistics highlight the safety of Curex's approach. Millions have been treated with at-home immunotherapy safely. Notably, there hasn't been a single recorded fatality among the billions of doses administered. In the rare cases where allergic reactions have occurred, there are well-established protocols to minimize and manage such incidents."
        />
        <div style={{ marginBottom: '2rem', width: '100%' }}>
      </div>
      </div>
        <DescCard
          imgSrc="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/654517ebf0a32c22301aafb3_Woman%20curex%20outline.webp"
          heading={"Curex's Commitment to Safety:\nThe Science of At-Home Immunotherapy"}
          desc={
            <>
              <p>Navigating the world of allergy treatments can be overwhelming, especially when considering at-home solutions. Yet, Curex's at-home immunotherapy stands as a beacon of safety and efficacy. But what measures underpin this assurance?</p>
            </>
          }
          imagePosition="left"
        />
        <h2>Why is At-Home Immunotherapy Safe?</h2>
        <p>Sublingual immunotherapy offers superior safety</p>
        {/* here */}
      {/* Comparison Table Section */}
      <div style={{ marginTop: '3rem', width: '100%' }}>
        <ComparisonTable
          columns={[
            {
              key: 'sublingual',
              label: (
                <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  Sublingual immunotherapy
                </span>
              ),
              imageSrc: 'https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/664ed4b61927cf0588acef5b_image%201.webp',
              imageAlt: 'Curex user having an online consultation with a clinician.'
            },
            {
              key: 'shots',
              label: (
                <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  Allergy Shots
                </span>
              ),
              imageSrc: 'https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/629f7e905eabc4379a47eeed_image1.webp',
              imageAlt: 'doctor giving patient a shot'
            },
          ]}
          rows={[
            {
              key: 'gentle',
              label: 'Gentle Build-up',
              values: [
                <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/66795290a52ec565f12713c1_green-tick.svg" alt="Yes" style={{ width: 28 }} />, 
                <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/667952685a6e5c978eb80c14_red-x.svg" alt="No" style={{ width: 28 }} />
              ],
            },
            {
              key: 'reaction',
              label: 'Rate of Severe Reaction',
              values: [<div>&lt;0.03%</div>, <div>&lt;1%</div>],
            },
            {
              key: 'users',
              label: 'Millions of Users',
              values: [
                <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/66795290a52ec565f12713c1_green-tick.svg" alt="Yes" style={{ width: 28 }} />,
                <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/66795290a52ec565f12713c1_green-tick.svg" alt="Yes" style={{ width: 28 }} />
              ],
            },
            {
              key: 'epipen',
              label: 'EpiPen Prescribed',
              values: [
                <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/66795290a52ec565f12713c1_green-tick.svg" alt="Yes" style={{ width: 28 }} />,
                <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/66795290a52ec565f12713c1_green-tick.svg" alt="Yes" style={{ width: 28 }} />
              ],
            },
            {
              key: 'waiting',
              label: 'Post Use Waiting Period',
              values: [<div>Not necessary</div>, <div>30 mins</div>],
            },
            {
              key: 'home',
              label: 'Safe for Home Use',
              values: [
                <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/66795290a52ec565f12713c1_green-tick.svg" alt="Yes" style={{ width: 28 }} />,
                <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/667952685a6e5c978eb80c14_red-x.svg" alt="No" style={{ width: 28 }} />
              ],
            },
          ]}
        />
      </div>
      <h2>How does Curex ensure patient safety?</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '2rem',
        marginTop: '3rem',
        width: '100%'
      }}>
        <SafetyCard
          imgSrc="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/654517ebe168d5da13ef950f_Patient%20screening.webp"
          heading="Each patient goes through in-depth screening."
          desc="Before diving into treatment, Curex meticulously screens individuals based on their medical history, ensuring only the most suitable candidates proceed."
        />
        <SafetyCard
          imgSrc="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/652e8cfbb1b80741ea039757_Rectangle%201942.webp"
          heading="Sublingual immunotherapy dosage increases gradually, and gently."
          desc="Curex's methodology involves a gradual increase in dosage. This deliberate pacing ensures the body has time to adjust, reducing potential allergic reactions."
        />
        <SafetyCard
          imgSrc="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/654517eb68ab7a8f634dc077_EpiPen%20Provision.webp"
          heading="EpiPens are prescribed as a standard protocol."
          desc="Safety is paramount. Every patient, irrespective of their risk profile, is equipped with an EpiPen, guaranteeing immediate response capabilities for any severe allergic reactions."
        />
        <SafetyCard
          imgSrc="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/627e8226222f97ec7f4590fc_image.webp"
          heading="Curex Clinicians supervise treatment."
          desc="The at-home nature of the treatment is complemented by digital oversight from medical professionals. This marriage of convenience and expert supervision ensures an optimal balance."
        />
        <SafetyCard
          imgSrc="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/62273a15a1e4613ea10c1d35_61c5f0edff51f019b65e8098_Rectangle%2053%20(3).webp"
          heading="We Provide “First Drop Appointments”."
          desc="For those seeking an added layer of assurance, Curex offers a video drop appointment, providing a watchful eye during the treatment's initial stages."
        />
        <SafetyCard
          imgSrc="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/63d28d24ba70d63f87bb63a3_how-it-works-1.webp"
          heading="At-home Immunotherapy has an excellent track record."
          desc="A track record boasting over a billion doses without a single fatality speaks volumes. Curex's commitment to safety is not just a promise; it's proven."
        />
      </div>
      <p>Curex's at-home immunotherapy goes beyond mere convenience. With a rigorous, multi-faceted approach to safety, those seeking relief can trust they are in reliable hands.</p>
      <InsurancePartnersCommon/>
      <EndPromo/>
      {/* faqs here */}
      <Faq
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
            question: "What is Curex?",
            answer: (
              <>
                Curex is America’s #1 Online Allergy Clinic and the place to go for all your allergy questions and needs. We believe that true allergy care should have only one goal: zero allergies. We believe in a world without allergies, and we offer the easiest and most affordable treatment to get you to zero-allergies: sublingual immunotherapy.<br/>
                Sublingual immunotherapy is a form of allergy treatment that involves placing drops containing allergenic extracts under the tongue. This method helps build the body's tolerance to allergens over time, just like allergy shots. The treatment is customized based on an individual's specific allergies, as determined by allergy testing and medical history.<br/>
                Curex offers comprehensive services that include at-home allergy testing, online consultations, symptom management, and personalized sublingual immunotherapy plans. Our goal is to improve access to quality allergy care for anyone who needs it. If you’re ready to finally get rid of your allergies, you’re in the right place. Together with our partners we have treated more patients with allergy drops than anyone else in the U.S.
              </>
            ),
          },
          {
            question: "Is Curex legitimate?",
            answer: (
              <>
                Curex is the largest online allergy and asthma clinic in the U.S. We started because our clinicians wanted to offer more convenient and affordable allergy and asthma care for everyone. So far we have attracted more than 50,000 customers from every U.S. state. We are proud to have the highest patient satisfaction and loyalty rates in the industry. Our service has been audited and certified by <a href="http://legitscript.com/">LegitScript.com</a>.
              </>
            ),
          },
          {
            question: "What services do you offer?",
            answer: (
              <>
                Curex provides comprehensive care for those suffering from allergies, asthma and eczema. This includes customized <a href="https://getcurex.com/sublingual-immunotherapy">sublingual immunotherapy</a>, at-home concierge allergy testing, and symptom management. Our goal is to provide accessibility and quality of allergy care in the U.S.
              </>
            ),
          },
          {
            question: "Does Curex accept insurance?",
            answer: (
              <>
                We accept most commercial insurance plans and are likely in-network for yours. However, estimating the exact out-of-pocket costs prior to submitting the first insurance claim can be challenging. Each insurance plan varies in terms of deductibles, how telemedicine consultations are covered, and the treatment of payments related to your specific medical "complexity," which we will only be able to assess after your consultation with one of our doctors.<br/>
                Regardless of your insurance company's response, we are committed to working with you to find the most affordable path to obtaining allergy care. We believe we have the lowest price for allergy immunotherapy in the U.S., and our aim is to make this treatment accessible to everyone who needs it. Please note that an average patient responsibility is $200 per year and depends on your insurance plan (deductibles, coinsurance, telemedicine benefit).
              </>
            ),
          },
          {
            question: "What conditions do you treat?",
            answer: (
              <>
                We focus on food as well as indoor and outdoor allergies caused by environmental or inhalant allergies, like those caused by pollens, weeds, grasses, dust mites, molds and pets. We also treat allergic asthma and eczema, as these conditions are closely related to allergies.
              </>
            ),
          },
          {
            question: "What is immunotherapy?",
            answer: (
              <>
                <a href="https://getcurex.com/immunotherapy-101" target="_blank">Immunotherapy</a> is a longstanding form of treatment that aims to meaningfully reduce the underlying cause of indoor/outdoor allergies and related conditions. Immunotherapy is frequently practiced by using allergen extracts for allergy drops, allergy shots and allergy tablets.
              </>
            ),
          },
          {
            question: "Can my child use Curex?",
            answer: (
              <>
                Curex <a href="https://getcurex.com/kids-allergy-care">serves adults and children</a> as young as 5 years old. Certain tests and treatments may be limited for younger kids. Start by answering the quiz, so that our clinicians can recommend the best testing and treatment options.
              </>
            ),
          },
          {
            question: "Does Curex treat food allergies?",
            answer: (
              <>
                Absolutely! We treat more than 90 different food allergies, including the most common ones - peanuts, milk, tree nuts, wheat, eggs, fish, shellfish, soy, and sesame among others.<br/>
                You can learn about our food program <a href="/food">here</a>.
              </>
            ),
          },
          {
            question: "What is your cancellation policy?",
            answer: (
              <>
                You can cancel at any time. However, please note that if you received treatment recently, we will need to collect any remaining payments for that treatment on your account. Additionally, if you had any telehealth visits, it can take up to three months for insurance to process each claim. These may be billed to you after you cancel if they have not been processed already.
              </>
            ),
          },
          {
            question: "How does allergy testing work?",
            answer: (
              <>
                Depending on your location, we send a phlebotomist (medical assistant) to your home or office for a simple blood draw (not a finger prick). This sample is then processed using hospital-grade technology to produce accurate results. In some areas, you may need to go into a local lab for your blood draw. We work with LabCorp and Quest Diagnostics. This is an IgE blood test that results in more accurate results compared to finger prick tests that are available online through some companies. This is not a skin scratch test where an allergist spends 30+ minutes injecting you with small doses of allergens to see if any swelling or reaction occurs.
              </>
            ),
          },
          {
            question: "Is sublingual immunotherapy safe?",
            answer: (
              <>
                At-home sublingual immunotherapy is a safe alternative to allergy shots that can be done at the comfort of your home. Due to its gentle, gradual build-up phase, the risk of severe reactions is extremely low compared to allergy shots, which require monitoring post-injection.
              </>
            ),
          },
        ]}
        title="FAQs"
      />
    </div>
  );
}
export default Comp1;
