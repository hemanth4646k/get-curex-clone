import Faq from '../../common/ui/Faq';

const faqData = [
  {
    question: 'What is sublingual immunotherapy (SLIT), or allergy drops?',
    answer: `SLIT, also known as allergy drops, is a form of allergy treatment that involves placing a small amount of allergen extract under the tongue. It's an effective and convenient alternative to allergy shots.`
  },
  {
    question: 'How often do I need to take sublingual immunotherapy drops?',
    answer: `The frequency depends on factors like the severity of your allergies and the type of allergen extract. Typically, allergy drops are taken daily, but your doctor will prescribe a specific protocol for you.`
  },
  {
    question: 'How do sublingual immunotherapy drops compare to allergy shots?',
    answer: `Both are forms of immunotherapy, but allergy shots involve injecting allergen extract into the skin, usually once or twice a week. Allergy drops are placed under the tongue daily, with a different dosage approach. SLIT drops can contain up to 30 times the active ingredients of shots.`
  },
  {
    question: 'What is the cost of sublingual immunotherapy?',
    answer: `Traditionally more costly, advancements in compounding pharmacies are making SLIT more affordable. Prices can start as low as $59/month with options like Curex.`
  },
  {
    question: 'Does insurance cover sublingual immunotherapy?',
    answer: `Insurance coverage varies. While traditionally covering injections, some plans are now partnering with pharmacies to cover allergy drops. Curex accepts major insurance plans for clinical consultations and testing fees, offering starting prices as low as $59/month.`
  },
  {
    question: 'Is sublingual immunotherapy FDA approved?',
    answer: `The FDA has approved specific single-allergy immunotherapy tablets for sublingual administration. However, SLIT drops for multiple allergies remain off-label, relying on doctors' expertise and established guidelines.`
  },
  {
    question: 'What are the side effects of sublingual immunotherapy?',
    answer: `Generally safe, side effects may include minor and short-lived irritation in the mouth or throat. Severe reactions are exceedingly rare (less than 0.03%), making drops a preferred option for those with previous negative reactions to shots.`
  },
  {
    question: 'How long does it take for sublingual immunotherapy to work?',
    answer: `It takes several months for allergy drops to take effect, with full benefits potentially visible after a year. Improvement in symptoms is often experienced within 3-6 months, with over 80% reporting significant reduction after 1 year.`
  },
  {
    question: 'Can I get sublingual immunotherapy over the counter?',
    answer: `No, SLIT is prescription medications. While some retail stores offer homeopathic versions, these lack relevant active ingredients and evidence of efficacy.`
  },
  {
    question: 'Can sublingual immunotherapy treat food allergies?',
    answer: `Sublingual immunotherapy (SLIT) may be effective for food allergies, although it's not officially approved in the U.S. Research is ongoing, and SLIT might offer a safer and more gradual build-up of tolerance compared to oral immunotherapy.`
  },
  {
    question: 'How do I get sublingual immunotherapy for my pet allergies?',
    answer: `SLIT for pet allergies can be obtained through an allergy doctor or specialized pharmacies. Curex offers an affordable option with online consultations and $49/month plans.`
  },
  {
    question: 'What do customers say about sublingual immunotherapy?',
    answer: `Customers generally find SLIT convenient, easy to use, and portable. Benefits are often seen within 3-6 months, and working with an allergist helps maximize effectiveness over time.`
  },
];

export default function FaqSL() {
  return (
    <section style={{ padding: '3rem 0' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>FAQs</h2>
        <Faq faqs={faqData} />
      </div>
    </section>
  );
}
