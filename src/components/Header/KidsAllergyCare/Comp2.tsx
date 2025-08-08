

import './Comp2.css';
import Faq from '../../../common/ui/Faq';

function Comp2() {
  const faqs = [
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
          <p>Curex is America’s #1 Online Allergy Clinic and the place to go for all your allergy questions and needs. We believe that true allergy care should have only one goal: zero allergies. We believe in a world without allergies, and we offer the easiest and most affordable treatment to get you to zero-allergies: sublingual immunotherapy.</p>
          <p>Sublingual immunotherapy is a form of allergy treatment that involves placing drops containing allergenic extracts under the tongue. This method helps build the body's tolerance to allergens over time, just like allergy shots. The treatment is customized based on an individual's specific allergies, as determined by allergy testing and medical history.</p>
          <p>Curex offers comprehensive services that include at-home allergy testing, online consultations, symptom management, and personalized sublingual immunotherapy plans. Our goal is to improve access to quality allergy care for anyone who needs it. If you’re ready to finally get rid of your allergies, you’re in the right place. Together with our partners we have treated more patients with allergy drops than anyone else in the U.S.</p>
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
      question: 'Is Curex legitimate?',
      answer: (
        <>
          <p>Curex is the largest online allergy and asthma clinic in the U.S. We started because our clinicians wanted to offer more convenient and affordable allergy and asthma care for everyone. So far we have attracted more than 50,000 customers from every U.S. state. We are proud to have the highest patient satisfaction and loyalty rates in the industry. Our service has been audited and certified by <a href="http://legitscript.com/">LegitScript.com</a>.</p>
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
      question: `What's in my treatment?`,
      answer: (
        <>
          <p>Your sublingual (under-the-tongue) immunotherapy treatment contains clinical-grade allergen extracts of things you are allergic to, as well as plant-based glycerin to make the solution. The solution is gluten-free.</p>
        </>
      ),
    },
    {
      question: 'How does sublingual immunotherapy work for kids?',
      answer: (
        <>
          <p>Sublingual immunotherapy for kids works by gradually exposing their immune system to small, controlled doses of allergens through allergy drops placed under the tongue. Over time, this process helps build tolerance to the allergens, reducing the severity of allergic reactions.</p>
        </>
      ),
    },
    {
      question: 'Are allergy drops safe for children?',
      answer: (
        <>
          <p>Yes, allergy drops are safe for children. As a non-invasive alternative to allergy shots, they offer a strong safety profile. Allergy drop treatments are prescribed and closely monitored by physicians to ensure the best results for kids' allergy relief.</p>
        </>
      ),
    },
    {
      question: 'How effective are allergy drops for kids?',
      answer: (
        <>
          <p>Allergy drops can be highly effective for children, helping to reduce symptoms and improve quality of life. Many studies have shown significant benefits, including fewer allergy symptoms and reduced need for medications.</p>
        </>
      ),
    },
    {
      question: 'How long does it take to see results with allergy drops?',
      answer: (
        <>
          <p>Children may start to see improvements in their allergy symptoms within a few months of starting sublingual immunotherapy. However, the full benefits of the treatment are typically achieved after over a year of consistent use.</p>
        </>
      ),
    },
    {
      question: 'What are the common side effects of allergy drops?',
      answer: (
        <>
          <p>Common side effects of allergy drops for kids may include mild itching or tingling in the mouth. These side effects are usually temporary and decrease as the child's immune system adjusts to the treatment.</p>
        </>
      ),
    },
    {
      question: 'Can allergy drops be used for all types of allergies?',
      answer: (
        <>
          <p>Allergy drops are highly effective for treating common allergies such as pollen, dust mites, and pet dander. A healthcare provider will determine specific allergens through an allergy test tailored to your child's individual needs.</p>
        </>
      ),
    },
    {
      question: 'What age can children start using allergy drops?',
      answer: (
        <>
          <p>Children as young as five years old can start using allergy drops, depending on their specific allergy profile and the recommendation of their healthcare provider. Early treatment can help manage allergies more effectively.</p>
        </>
      ),
    },
    {
      question: 'How do allergy drops compare to allergy shots for kids?',
      answer: (
        <>
          <p>Allergy drops offer a convenient and less invasive alternative to allergy shots. They can be administered at home, which eliminates the need for frequent doctor's visits and injections, making them a preferred choice for many families.</p>
        </>
      ),
    },
    {
      question: 'Do allergy drops require a prescription for children?',
      answer: (
        <>
          <p>Yes, allergy drops require a prescription from a healthcare provider. A thorough evaluation and diagnosis are necessary to determine the appropriate allergens and dosage for the child's treatment.</p>
        </>
      ),
    },
    {
      question: 'Can allergy drops be used for food allergies in kids?',
      answer: (
        <>
          <p>While allergy drops are primarily used for environmental allergens, ongoing research is exploring their potential for treating food allergies.</p>
        </>
      ),
    },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "2rem" }}>
      <h2>How Immunotherapy Gradually Reduces Symptoms</h2>
      <img src="/header-child-allergy.png" alt="" />
      <br />
      <p style={{ width: "40%", textAlign: "center" }}>
        SLIT introduces small amounts of allergen over time, desensitizing the immune system via two mechanisms, including:
      </p>
      <div className="farm-pharm-steps_component">
        <div className="farm-pharm-steps_step-wrapper">
          <div className="farm-pharm-steps_top-content-wrapper">
            <div className="farm-pharm-steps_counter-wrapper-copy"><div>1</div></div>
            <div className="text-weight-medium">How Does Immunotherapy Gradually Reduce Symptoms?</div>
          </div>
          <div className="farm-pharm-steps_step-image-wrapper">
            <img
              src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/645b506dd2b6d18f8ca3036c_image%2096.avif"
              alt=""
              className="farm-pharm-steps_step-image"
            />
          </div>
          <div className="farm-pharm-steps_step-text-wrapper">
            <p>Continuous exposure to a personalized mix of medical-grade allergens trains your child’s immune system to get stronger.</p>
          </div>
        </div>
        <div className="kidsdropsshots-steps_arrow-wrapper">
          <img
            src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/627b38aeb3c1433208bf79a3_arrows%20slider-4.png"
            alt="right line icon"
          />
        </div>
        <div className="farm-pharm-steps_step-wrapper">
          <div className="farm-pharm-steps_top-content-wrapper">
            <div className="farm-pharm-steps_counter-wrapper-copy"><div>2</div></div>
            <div className="text-weight-medium">Strengthening Your Child’s Immune System.</div>
          </div>
          <div className="farm-pharm-steps_step-image-wrapper">
            <img
              src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/647831444db230ba450288dc_kids-drops-shots-step2.webp"
              alt=""
              className="farm-pharm-steps_step-image is-contain"
            />
          </div>
          <div className="farm-pharm-steps_step-text-wrapper">
            <p>Your child no longer has to rely on medications for allergy relief. SLIT lowers the chance of developing asthma, sinusitis, and other chronic conditions.</p>
          </div>
        </div>
      </div>
      <p style={{ textAlign: "center",width:"60%", marginTop: "2rem" }}>
        "The needle-free approach is a reasonable way to provide much-needed relief to millions of children who suffer from asthma or seasonal allergies.”
      </p>
      <a style={{color:"#ff0c92ff"}} href="https://www.hopkinsmedicine.org/news/media/releases/oral_drops_can_give_kids_needle_free_relief_from_asthma_allergies">Dr Julia Kim, Johns Hopkins Children's Center</a>
      <div style={{width: '100%', maxWidth: 800, margin: '0 auto', marginTop: '3rem'}}>
        <Faq faqs={faqs} title="FAQs" />
      </div>
    </div>
  );
}

export default Comp2;
