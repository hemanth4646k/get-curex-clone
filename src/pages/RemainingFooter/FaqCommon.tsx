import Faq from "../../common/ui/Faq";

const faqsCont = [
  {
    question: "Is Curex legitimate?",
    answer:
      "Curex is the largest online allergy and asthma clinic in the U.S. We started because our clinicians wanted to offer more convenient and affordable allergy and asthma care for everyone. So far we have attracted more than 50,000 customers from every U.S. state. We are proud to have the highest patient satisfaction and loyalty rates in the industry. Our service has been audited and certified by LegitScript.com.",
  },
  {
    question: "Does Curex accept insurance?",
    answer:
      "Curex accepts the majority of insurance plans across the United States, including Aetna, Anthem, BlueCross BlueShield, United, Humana and others. While it is difficult to estimate out-of-pocket costs prior to a claim being submitted, our team will work with you to make sure your treatment is as affordable as possible. For that purpose, we also cap copays at $400/year. In addition, Curex accepts HSA and FSA. Please note that insurance covers clinical consultations, while subscription fee ($59/month, not billed to insurance) covers immunotherapy, shipping & related costs.",
  },
  {
    question: "What conditions do you treat?",
    answer:
      "We focus on indoor and outdoor allergies caused by environmental or inhalant allergies, like those caused by pollens, weeds, grasses, dust mites, molds and pets. We also treat allergic asthma and eczema, as these conditions are closely related to allergies.",
  },
  {
    question: "Does Curex treat food allergies?",
    answer:
      "Curex currently treats allergies to tree, weed, grass pollens, pet allergies, dust mites, mold and cockroach. We do not treat food, metal, venom or flower allergies.",
  },
  {
    question: "Can my child use Curex?",
    answer:
      "Curex serves adults and children as young as 5 years old. Certain tests and treatments may be limited for younger kids. Start by answering the quiz, so that our clinicians can recommend the best testing and treatment options.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Treatments are shipped in 3 month installments in all plans. Cancellations are accepted prior to the next refill being compounded by the pharmacy (so you can get a partial refund on a prepayment plan). To cancel or pause subscriptions, please email our team at hi@getcurex.com.",
  },
  {
    question: "What are the ingredients?",
    answer:
      "The composition of sublingual allergy drops depends on the specific allergens a person is sensitive to, as determined by allergy testing. Allergy drops may contain pollens, dust mites, pet dander, mold, and glycerin. Extracts are FDA approved medications produced in a highly controlled environment. A licensed pharmacy prepared the formulation for each patient after receiving a doctor’s prescription.",
  },
  {
    question: "How does allergy testing work?",
    answer:
      "Depending on your location, we send a phlebotomist (medical assistant) to your home or office for a simple blood draw (not a finger prick). This sample is then processed using hospital-grade technology to produce accurate results. In some areas, you may need to go into a local lab for your blood draw. We work with LabCorp and Quest Diagnostics. This is an IgE blood test that results in more accurate results compared to finger prick tests that are available online through some companies. This is not a skin scratch test where an allergist spends 30+ minutes injecting you with small doses of allergens to see if any swelling or reaction occurs.",
  },
  {
    question: "Is sublingual immunotherapy safe?",
    answer:
      "At-home sublingual immunotherapy is a safe alternative to allergy shots that can be done at the comfort of your home. Due to its gentle, gradual build-up phase, the risk of severe reactions is extremely low compared to allergy shots, which require monitoring post-injection.",
  },
];
function FaqCommon() {
  return (
    <div style={{ width: "100%", maxWidth: 800, margin: "40px auto 0" }}>
      <Faq faqs={faqsCont} />
    </div>
  );
}
export default FaqCommon;
