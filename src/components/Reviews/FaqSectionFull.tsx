import React from "react";
import Faq from "../../common/ui/Faq";

const faqs = [
  {
    question: "What is Curex?",
    answer: (
      <>
        <p>Curex is America’s #1 Online Allergy Clinic and the place to go for all your allergy questions and needs. We believe that true allergy care should have only one goal: zero allergies. We believe in a world without allergies, and we offer the easiest and most affordable treatment to get you to zero-allergies: sublingual immunotherapy.</p>
        <p>Sublingual immunotherapy is a form of allergy treatment that involves placing drops containing allergenic extracts under the tongue. This method helps build the body's tolerance to allergens over time, just like allergy shots. The treatment is customized based on an individual's specific allergies, as determined by allergy testing and medical history.</p>
        <p>Curex offers comprehensive services that include at-home allergy testing, online consultations, symptom management, and personalized sublingual immunotherapy plans. Our goal is to improve access to quality allergy care for anyone who needs it. If you’re ready to finally get rid of your allergies, you’re in the right place. Together with our partners we have treated more patients with allergy drops than anyone else in the U.S.</p>
      </>
    )
  },
  {
    question: "Is Curex legitimate?",
    answer: (
      <>
        <p>Curex is the largest online allergy and asthma clinic in the U.S. We started because our clinicians wanted to offer more convenient and affordable allergy and asthma care for everyone. So far we have attracted more than 50,000 customers from every U.S. state. We are proud to have the highest patient satisfaction and loyalty rates in the industry. Our service has been audited and certified by <a href="http://legitscript.com/" target="_blank" rel="noopener noreferrer">LegitScript.com</a>.</p>
      </>
    )
  },
  {
    question: "What services do you offer?",
    answer: (
      <>
        <p>Curex provides comprehensive care for those suffering from allergies, asthma and eczema. This includes customized <a href="https://getcurex.com/sublingual-immunotherapy" target="_blank" rel="noopener noreferrer">sublingual immunotherapy</a>, at-home concierge allergy testing, and symptom management. Our goal is to provide accessibility and quality of allergy care in the U.S.</p>
      </>
    )
  },
  {
    question: "What conditions do you treat?",
    answer: (
      <>
        <p>We focus on food as well as indoor and outdoor allergies caused by environmental or inhalant allergies, like those caused by pollens, weeds, grasses, dust mites, molds and pets. We also treat allergic asthma and eczema, as these conditions are closely related to allergies.</p>
      </>
    )
  },
  {
    question: "What is immunotherapy?",
    answer: (
      <>
        <p><a href="https://getcurex.com/immunotherapy-101" target="_blank" rel="noopener noreferrer">Immunotherapy</a> is a longstanding form of treatment that aims to meaningfully reduce the underlying cause of indoor/outdoor allergies and related conditions. Immunotherapy is frequently practiced by using allergen extracts for allergy drops, allergy shots and allergy tablets.</p>
      </>
    )
  },
  {
    question: "What is your cancellation policy?",
    answer: (
      <>
        <p>You can cancel at any time. However, please note that if you received treatment recently, we will need to collect any remaining payments for that treatment on your account. Additionally, if you had any telehealth visits, it can take up to three months for insurance to process each claim. These may be billed to you after you cancel if they have not been processed already.</p>
      </>
    )
  },
  {
    question: "Can my child use Curex?",
    answer: (
      <>
        <p>Curex <a href="https://getcurex.com/kids-allergy-care" target="_blank" rel="noopener noreferrer">serves adults and children</a> as young as 5 years old. Certain tests and treatments may be limited for younger kids. Start by answering the quiz, so that our clinicians can recommend the best testing and treatment options.</p>
      </>
    )
  },
  {
    question: "What do allergy drops contain?",
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
    )
  },
  {
    question: "What allergies does Curex treat?",
    answer: (
      <>
        <p>Curex treats a wide range of environmental, airborne, and food allergies which include grasses, trees, weeds, pet allergies, dust mites, molds, peanuts, shellfish, milk, tree nuts, and among other allergens. Contact us to learn more.</p>
      </>
    )
  },
  {
    question: "What's in my treatment?",
    answer: (
      <>
        <p>Your sublingual (under-the-tongue) immunotherapy treatment contains clinical-grade allergen extracts of things you are allergic to, as well as plant-based glycerin to make the solution. The solution is gluten-free.</p>
      </>
    )
  }
];

const FaqSectionFull: React.FC = () => (
  <div style={{ padding: "60px 0", background: "#fff" }}>
    <div style={{ maxWidth: 900, margin: "0 auto" }}>
      <Faq faqs={faqs} />
    </div>
  </div>
);

export default FaqSectionFull;
