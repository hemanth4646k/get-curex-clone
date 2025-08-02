
import Faq from '../../common/ui/Faq';

const faqs = [
  {
    question: 'How much does an allergy test cost?',
    answer: (
      <>Testing services provided by our partners are typically covered by insurance. Total out-of-pocket responsibility depends on your copay and co-insurance. No insurance? No problem. We accept FSA/HSA payments and have partnerships with our labs for a discounted self-pay price of $199.</>
    ),
  },
  {
    question: 'How soon can I schedule my test?',
    answer: (
      <>Once you sign-up, your test order is typically created within 1-2 days. You can either go to a LabCorp or Quest location right away or schedule your at-home concierge test 5-7 days in advance.</>
    ),
  },
  {
    question: 'What happens after I get tested?',
    answer: (
      <>Curex allergists can use your test results to prescribe you with an effective treatment called Sublingual Immunotherapy. This personalized treatment, based on your medical history and allergy test results, treats your allergies at the source. Once our clinicians get your results back, we will connect you with a provider to discuss how you can overcome your allergies.</>
    ),
  },
  {
    question: 'I have existing test results, do I need to get tested again?',
    answer: (
      <>If you have prior test results, please provide them when filling out medical history. You’ll be able to get started on immunotherapy even faster!</>
    ),
  },
  {
    question: 'What allergens do you test for?',
    answer: (
      <>We test for all common indoor, outdoor and pet allergens. The test is customized for you based on your location and symptoms, and normally includes tree and weed pollens, dust mites, molds, cats and dogs. We do not test for food allergens. Note that certain inferior testing technologies claim that they test for 100+ allergens. These test results are normally inaccurate. They are also unnecessary, since most frequent allergens have cross-reactivity with each other (e.g. birch and apple pollen).</>
    ),
  },
  {
    question: 'Do I have to stop taking medication before my test?',
    answer: (
      <>No, our testing methods do not require you to be off of allergy meds before the test. You do not have to do anything differently, just show up at the Quest/LabCorp location of your choice or meet with your concierge testing provider at the location of your choice!</>
    ),
  },
  {
    question: 'Why should I choose Curex for allergy testing vs. Finger prick test kits?',
    answer: (
      <>Curex uses the FDA-approved ImmunoCap technology to accurately assess allergic response to a wide range of allergens. Allergists feel very comfortable when presented with results processed with this technology. However, finger prick test kits are known for delivering inaccurate results, which may result in suboptimal treatment formulation for you. For best results, we recommend highest quality testing.</>
    ),
  },
];

export default function FaqAT() {
  return <Faq faqs={faqs} title="FAQs" id="faqs" />;
}
