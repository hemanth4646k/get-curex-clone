
import Faq from '../../common/ui/Faq';

const faqs = [
  {
    question: 'Sign up for Free Webinar',
    answer: (
      <>
        Learn how allergy immunotherapy can help you find lasting relief. Allergy experts discuss allergy shots, allergy drops and food OIT to help you reduce your environmental and/or food allergies. Reserve your spot here:
        <br />
        <a target="_blank" href="https://calendly.com/webinar-curex/allergy-immunotherapy">https://calendly.com/webinar-curex/allergy-immunotherapy</a>
      </>
    ),
  },
  {
    question: 'Are over-the-counter antihistamines safe for children?',
    answer: (
      <>
        Over-the-counter antihistamines like cetirizine, loratadine, and fexofenadine are generally safe for children. However, it's crucial to follow recommended dosages and consult with a pediatrician before starting any medication for children. Curex is a safe and effective allergy solution for children 5+.
      </>
    ),
  },
  {
    question: 'Can I use nasal corticosteroids for a prolonged period?',
    answer: (
      <>
        Nasal corticosteroids, such as fluticasone and budesonide, are safe for long-term use under medical supervision. Consult with a healthcare provider to determine the appropriate duration and dosage for your specific condition. If you are looking for long term allergy solutions, try Curex to tackle the root cause of your allergies.
      </>
    ),
  },
  {
    question: 'How effective is sublingual immunotherapy (allergy shots or SLIT)?',
    answer: (
      <>
        Sublingual immunotherapy, offered as allergy shots, sublingual tablets, or drops, can be effective for severe allergies. It involves controlled exposure to allergens to build tolerance. Consult with an allergist to assess if this long-term treatment is suitable for you.
      </>
    ),
  },
  {
    question: 'Are natural remedies a substitute for medical treatments?',
    answer: (
      <>
        Natural remedies like saline nasal sprays and dietary changes can complement medical treatments but should not replace them, especially in severe cases. Consult with a healthcare professional to create a holistic treatment plan.
      </>
    ),
  },
  {
    question: `Is Curex's sublingual immunotherapy suitable for all ages?`,
    answer: (
      <>
        Curex offers personalized sublingual immunotherapy for both adults and children. Consult with our healthcare professionals through online consultations to determine the suitability for your specific age group.
      </>
    ),
  },
  {
    question: 'How does sublingual immunotherapy differ from traditional medications?',
    answer: (
      <>
        Sublingual immunotherapy addresses the root cause of allergies by gradually desensitizing the immune system. Unlike some traditional medications that manage symptoms, sublingual immunotherapy aims for long-term relief and can be conveniently self-administered at home.
      </>
    ),
  },
  {
    question: 'Can I combine different allergy medications for better relief?',
    answer: (
      <>
        It's essential to consult with a healthcare professional before combining different allergy medications to avoid potential interactions or adverse effects. They can guide you on the most effective and safe treatment plan for your specific needs.
      </>
    ),
  },
  {
    question: 'How do I choose the best allergy medicine for my situation?',
    answer: (
      <>
        The choice of the best allergy medicine depends on factors like the type and severity of allergies, convenience, and individual response. Consult with a healthcare professional to determine the most suitable option for your specific situation.
      </>
    ),
  },
  {
    question: 'Can you take allergy medications every day?',
    answer: (
      <>
        Yes, you can take allergy medications daily, but it depends on the type. Corticosteroid nasal sprays are recommended for daily use and may take a couple of weeks to reach maximum effect. Antihistamines can be taken daily for mild symptoms like itching, sneezing, and a runny nose; newer generation antihistamines are preferred to avoid drowsiness. Decongestants should only be used as needed: nasal decongestants for up to 3 days and oral decongestants for up to 7 days. Always consult with a healthcare provider for personalized advice.
      </>
    ),
  },
  {
    question: 'How long does it typically take for allergy medications to start managing symptoms of allergies?',
    answer: (
      <>
        The time it takes for allergy medications to manage symptoms varies. Corticosteroid nasal sprays may take a few days to a couple of weeks to reach maximum effect and should be used consistently. Antihistamines usually start working within 1 to 2 hours, providing quick relief for symptoms like itching, sneezing, and a runny nose. Decongestants offer rapid relief, with nasal sprays working within minutes and oral decongestants taking about 30 minutes to an hour. For personalized advice, consult with a healthcare provider.
      </>
    ),
  },
  {
    question: 'What are some common symptoms of pet allergies caused by cats and dogs?',
    answer: (
      <>
        Common symptoms of pet allergies caused by cats and dogs include allergic rhinitis, which can manifest as sneezing, a runny or itchy nose, as well as allergic conjunctivitis, characterized by symptoms such as itchy, red, and watery eyes.
      </>
    ),
  },
];

export default function FaqAM() {
  return <Faq faqs={faqs} title="FAQs" id="faqs" />;
}
