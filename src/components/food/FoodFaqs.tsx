import Faq from '../../common/ui/Faq';

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
    question: 'What is the treatment?',
    answer: (
      <>
        <p>Food SLIT (Sublingual Immunotherapy), also known as sublingual allergy drops, helps desensitize patients to the foods they are allergic to by administering highly diluted quantities of the food allergen daily. Over time, this gradual exposure helps the body build resistance to the allergen. These allergy drops are placed under the tongue and taken every day.</p>
        <p>Food allergy drops are made using clinical-grade allergenic extracts prepared by pharmaceutical manufacturers. The high purity of these extracts allows the pharmacy to compound precise dosages that deliver a gentle, gradual desensitization process, which is considered safer than other alternatives, such as Oral Immunotherapy (OIT).</p>
        <p>While the SLIT protocol is gentle and safe, it typically requires a longer treatment period than OIT to achieve the desired effectiveness. The ultimate goal of food SLIT treatment is to enable you or your child to safely tolerate accidental exposure to the allergen and, eventually, to pass a food challenge. Reaching this point usually requires 3 to 5 years of consistent food allergy drop treatment. Every patient is different, therefore, some patients may need more than 5 years to reach the goal.</p>
      </>
    ),
  },
  {
    question: 'How long is the treatment?',
    answer: (
      <>
        <p>The duration of treatment varies for each individual. Curex clinicians will work closely with you to determine the right time to complete your treatment based on your progress.</p>
        <p>Typically, the recommended treatment lasts 3-5 years. This period is usually sufficient to desensitize the patient and allow them to safely tolerate accidental exposure to the allergen. At the end of this period, providers may recommend undergoing an in-person food challenge, supervised by a clinician, if the patient is interested in confirming their tolerance.</p>
      </>
    ),
  },
  {
    question: 'The science of allergy drops',
    answer: (
      <>
        <p>Our clinical team together with Allergychoices, the leading allergy immunotherapy pharmacy in the U.S., follow protocols that have successfully treated over 50,000 patients with food SLIT.</p>
        <p>Sublingual immunotherapy (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9707371/">SLIT</a>) involves placing small amounts of an allergen under the tongue, a method that has proven successful in treating allergic rhinitis (hay fever). Over the last few decades, some practitioners have expanded the use of SLIT to treat food allergies. According to the <a href="https://www.niaid.nih.gov/diseases-conditions/food-allergy-treatment-research">National Institutes of Health</a>, clinical trials have shown that SLIT tends to have fewer side effects than oral immunotherapy (OIT) and becomes more effective with continued use.</p>
        <p>The European Journal of Allergy and Clinical Immunology <a href="https://onlinelibrary.wiley.com/doi/10.1111/all.13319">guidelines</a> highlight that food SLIT offers significant benefits in desensitizing patients to their allergens.</p>
        <p>Due to SLIT's gentler formulations and fewer side effects, it boasts a higher completion rate—87% in <a href="https://pubmed.ncbi.nlm.nih.gov/36828080/">one study</a>—compared to OIT. While OIT may achieve faster results, the lower incidence of side effects with SLIT allows more patients to successfully complete the program and reach their tolerance goals.</p>
      </>
    ),
  },
  {
    question: 'What allergies do you treat?',
    answer: (
      <>
        <p>We treat more than 90 different food allergies, including the most common ones - peanuts, milk, tree nuts, wheat, eggs, fish, shellfish, soy, and sesame among others.</p>
      </>
    ),
  },
  {
    question: 'What is in food allergy drops?',
    answer: (
      <>
        <p>Curex clinicians prescribe food allergy drops that are prepared at a leading allergy immunotherapy pharmacy, Allergychoices, specifically for you and shipped to you every three months. The composition of sublingual food allergy drops (SLIT) varies depending on an individual's specific allergies, as determined by allergy testing.</p>
        <p>Sublingual food immunotherapy (SLIT) involves medical-grade allergen extracts and glycerin in its formulation. Each treatment is tailored to the patient's unique food allergies and allergy history. Our formulation is phenol-free, ensuring a natural treatment experience. Moreover, it can be self-administered at home.</p>
      </>
    ),
  },
  {
    question: 'Do you treat food sensitivities?',
    answer: (
      <>
        <p>At Curex we treat food allergies which are caused by your immune system reacting to the food when it doesn't need to.</p>
        <p>With a food intolerance or sensitivity, your immune system isn't responsible for the symptoms. Most of the time it's an inability to digest the food proteins or carbohydrates. We do not treat food sensitivities.</p>
        <p>For example, a milk allergy is different from lactose intolerance. A milk allergy can cause anaphylaxis and involves allergic proteins (antibodies) targeting a protein in milk. On the other hand, lactose intolerance causes digestion issues and involves a reduced level of lactase, an enzyme needed to digest lactose, the common sugar found in milk.</p>
        <p>Generally food allergies can be life threatening, whereas sensitivities or intolerances can cause discomfort but they are rarely life threatening.</p>
        <p>Curex clinicians will help you to determine if your food reaction is caused by allergies or intolerances / sensitivities.</p>
      </>
    ),
  },
  {
    question: 'Do you treat lactose intolerance?',
    answer: (
      <>
        <p>At Curex we are focusing on treating allergic reactions to food. Being allergic to milk is different from not being able to digest it properly because of lactose intolerance.</p>
        <p>Curex clinicians will help you to determine if you are allergic to milk or not being able to digest it properly because of lactose intolerance.</p>
      </>
    ),
  },
  {
    question: 'Difference between SLIT and OIT?',
    answer: (
      <>
        <p>Sublingual Immunotherapy (SLIT) and Oral Immunotherapy (OIT) are both treatments for allergies, but they differ in their methods of administration and their safety profiles.</p>
        <p>SLIT is administered under the tongue, while OIT involves oral ingestion.</p>
        <p>OIT carries a higher risk of allergic reactions, including severe reactions (anaphylaxis), because the patient is consuming a much larger percentage of the allergenic food compared with SLIT. It requires careful monitoring by healthcare professionals during the initial phases.</p>
        <p>SLIT has a lower risk of severe reactions compared to OIT, again, because there is exposure to a much smaller percentage of allergen (food).</p>
      </>
    ),
  },
  {
    question: 'Are food allergy drops safe?',
    answer: (
      <>
        <p>Sublingual allergy drops (SLIT) are widely regarded as having a superior safety profile compared to Oral Immunotherapy (OIT), primarily due to the method of administration and the significantly lower dosage used in SLIT.</p>
        <p>A recent <a href="https://pubmed.ncbi.nlm.nih.gov/36828080/">study</a> found that patients undergoing food SLIT treatment rarely experience side effects, and when they do, these are typically mild and limited to temporary itching in the mouth and/or throat. If these symptoms are really bothersome, our clinicians can adjust the strength of the extract to mitigate the problem.</p>
        <p>While severe adverse reactions, such as anaphylactic shock, are extremely rare, there have been documented cases in individuals with a history of anaphylaxis. Patients with a known history of anaphylaxis will be carefully evaluated by our clinical team to determine if food SLIT is a safe and appropriate option for them.</p>
        <p>Our clinical team, together with our pharmacy partner, Allergychoices, follow protocols that have successfully treated over 50,000 patients with food SLIT.</p>
        <p>Although the safety record is excellent, our providers carefully evaluate the risk profile of each patient to ensure SLIT is appropriate and safe. As a precaution, we prescribe and require epinephrine to every patient to have on hand in case of an emergency.</p>
        <p>We strongly recommend having another adult with an EpiPen available when you take your allergy drops for the first time and when increasing the dosage. This ensures added safety and immediate support in case of any unexpected reactions.</p>
      </>
    ),
  },
  {
    question: 'Is an EpiPen required?',
    answer: (
      <>
        <p>All patients who are prescribed allergy drops for foods through Curex are required to have an epinephrine device. Although extremely rare, a severe allergic reaction is possible and epinephrine can be life-saving. Anaphylaxis action plans which include instructions on correct epinephrine use will be provided to all patients starting on food allergy drops.</p>
        <p>We strongly recommend having another adult with an EpiPen available when you take your allergy drops for the first time and when increasing the dosage. This ensures added safety and immediate support in case of any unexpected reactions.</p>
      </>
    ),
  },
  {
    question: 'How does allergy testing work?',
    answer: (
      <>
        <p>Once you sign up and complete your medical history form, you will have your first clinical consultation with a Curex clinician. During this call, we will prepare and finalize your test order. The process is designed to be straightforward and convenient.</p>
        <p>The test requires a simple and easy blood draw. We utilize ImmunoCAP IgE, sIgE and component testing to confirm the diagnosis. If you choose to have your test conducted at a local lab, you can typically expect to receive your results within 5-7 business days. If you opt for other testing methods, the timing may vary slightly due to scheduling and logistical factors.</p>
        <p>If you have food test results from another clinic you should upload it as well during the medical onboarding questionnaire. We will retest you after one year on the food allergy drops to check if your food IgE levels have decreased. It is important to monitor these levels as a measure of treatment success.</p>
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
    question: 'Can my child use Curex?',
    answer: (
      <>
        <p>Absolutely! In fact, food allergy drops (SLIT) are safer and easier to use for children than Oral Immunotherapy (OIT).</p>
        <p>At Curex, we prescribe sublingual drops for children as young as 2 years old, provided the clinician believes the patient will benefit and can follow the treatment plan with the help of their parent or guardian.</p>
      </>
    ),
  },
  {
    question: 'What is Curex?',
    answer: (
      <>
        <p>Curex is an online allergy clinic that focuses on sublingual immunotherapy, offering a convenient and affordable solution for those seeking long-term relief from allergies. Often seen as a favorable alternative to Oral Immunotherapy (OIT), we provide comprehensive services that include at-home allergy testing, online consultations, symptom management, and personalized sublingual immunotherapy plans. Our goal is to improve access to quality allergy care for anyone who needs it.</p>
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
];

const FoodFaqs = () => <Faq faqs={faqs} title="FAQs" />;

export default FoodFaqs;
