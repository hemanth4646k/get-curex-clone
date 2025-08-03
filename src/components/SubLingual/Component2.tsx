import { StartQuizButton } from "../../common/InsurancePartners";
import DescCard from "../../common/ui/DescCard";
import {
  SideEffectsHeader,
  SideEffectsTable,
} from "../AllergyDrops/SideEffects";

function FDAApproved() {
  return (
    <DescCard
      heading="Is Sublingual Immunotherapy FDA Approved?"
      desc={
        <>
          <p>
            Sublingual immunotherapy, known as allergy drops, has secured FDA
            approval for specific allergens, offering an effective remedy for
            allergic rhinitis and allergic asthma. FDA-endorsed formulations
            target allergens such as grass pollen, ragweed, and dust mites.
          </p>
          <br />
          <p>
            It's important to note that not all allergens or formulations may
            possess FDA approval for sublingual immunotherapy. Consulting
            healthcare professionals helps assess suitability for individual
            allergies and identifies FDA-endorsed formulations for specific
            allergens, ensuring informed treatment decisions.
          </p>
          <p>
            <br />
            While the FDA hasn't reviewed clinical studies for sublingual
            immunotherapy addressing multiple allergies, allergy drops, in use
            since the 1920s with established safety and efficacy, have been
            "grandfathered in." Conversely, despite being administered globally
            to millions since the 1990s, sublingual immunotherapy lacks FDA
            approval. Therefore, doctors prescribe allergy drops off-label, a
            legal yet common practice. However, due to this lack of FDA
            approval, pharmaceutical companies face restrictions in marketing
            their allergenic extracts for sublingual immunotherapy.
          </p>
        </>
      }
      imgSrc=""
      imagePosition="right"
      id="Is-Sublingual-Immunotherapy-FDA-Approved"
    />
  );
}
function SideEffects() {
  return (
    <div style={{ padding: "4rem" }} id="Sublingual-Immunotherapy-Side-Effects">
      <SideEffectsHeader
        title="Sublingual Immunotherapy Side Effects"
        paragraphs={[
          "Sublingual immunotherapy stands as a widely recognized safe and efficient allergy treatment. However, like any medical intervention, it may entail potential side effects. Commonly, minor and short-lived effects manifest as mouth or throat irritation, while less frequent occurrences may include gastrointestinal discomfort like nausea or vomiting, oral swelling, eye irritation, or ear discomfort, usually resolving within weeks. Healthcare providers might recommend continuing traditional allergy medications like Claritin to mitigate these effects.",
          "Severe reactions such as anaphylaxis or eosinophilic esophagitis are extremely rare, happening in less than 0.03% of cases. Allergy drops are often preferred over injections due to their gradual dosing and the body's adaptability over time, especially for individuals previously reacting negatively to allergy shots. Maintaining open dialogue with healthcare professionals is crucial to recognize potential risks and ensure a safe, effective treatment plan.",
        ]}
      ></SideEffectsHeader>
      <SideEffectsTable />
    </div>
  );
}

function DropsVsTablets() {
  return (
    <div>
      <DescCard
        heading="Sublingual Immunotherapy Drops vs. Tablets"
        desc="Sublingual immunotherapy tablets and drops are both forms of allergy treatment, yet they differ in administration and formulation. Tablets, such as Odactra, Grastek, Ragwitek, and Oralair, are FDA-approved and designed for sublingual use, where they dissolve under the tongue. These tablets contain precise doses of allergens for targeted treatment.On the other hand, allergy drops, also known as sublingual immunotherapy drops, involve liquid formulations placed under the tongue. These drops are custom-made to suit individual allergen sensitivities and are not FDA-approved as standardized treatments. They're often compounded by specialized pharmacies based on specific allergens identified in allergy testing."
        imgSrc="/public/YellowSyringes.avif"
        id="Sublingual-Immunotherapy-Drops-vs.-Tablets"
      />
      <DescCard
        heading=""
        desc={
          <>
            <p>
              While tablets offer standardized doses and FDA approval, drops are
              customized and may not have FDA endorsement. Both aim to
              desensitize individuals to allergens, but tablets follow a
              regulated dosage, while drops offer tailored formulations based on
              allergen sensitivity identified through testing. Consulting
              healthcare professionals helps determine the most suitable option
              based on individual allergy needs and treatment.
            </p>
            <p>
              Four single-allergy immunotherapy tablets intended for sublingual
              administration—Odactra, Grastek, Ragwitek, and Oralair—have
              garnered FDA approval. Demonstrating both efficacy and safety,
              these tablets establish the sublingual approach as a feasible
              treatment option. Intriguingly, in the EU, particularly in France,
              allergy drops serve as the predominant form of allergy
              immunotherapy.
            </p>
            <p>
              The FDA maintains the highest global standards for pharmaceutical
              approval, ensuring the safety and efficacy of approved treatments.
            </p>
          </>
        }
        imgSrc="/DropsVsTablets-Table.png"
        imagePosition="right"
      />
    </div>
  );
}
function ReallyWork() {
  return (
    <div>
      <DescCard
        heading="
Does Sublingual Immunotherapy Really Work?"
        desc={
          <>
            <p>
              Sublingual immunotherapy has demonstrated effectiveness in
              treating allergies for many individuals. Clinical studies and
              research have shown that this form of treatment can help reduce
              allergy symptoms by desensitizing the body to specific allergens
              over time. Numerous patients have experienced relief from allergic
              rhinitis, allergic asthma, and other allergic conditions through
              sublingual immunotherapy.
            </p>
            <p>
              However, individual responses to this treatment can vary, and its
              efficacy may differ based on factors such as the type and severity
              of allergies, the specific allergens targeted, and adherence to
              the prescribed regimen. Consulting healthcare professionals can
              provide personalized insights into whether sublingual
              immunotherapy is suitable and effective for managing specific
              allergic conditions.
            </p>
          </>
        }
        imgSrc=""
        buttonEle={<StartQuizButton />}
        id="Does-Sublingual-Immunotherapy-Really-Work"
      />
    </div>
  );
}

function HowLongToWork() {
  return (
    <DescCard
      heading="How Long Does it Take for Sublingual Immunotherapy to Start Working?"
      desc={<>
        <p>The timeline for experiencing results with sublingual immunotherapy (SLIT) varies individually. Typically, improvement is noticed after a few months of regular treatment, with the best results achieved in 1–2 years. However, it can take about three to five years for some individuals to notice significant relief.</p>
        <p>Consistency is everything for this therapy. Sticking with the prescribed program and never missing doses of allergy drops is the best way to achieve maximum benefit, especially for lasting or lifelong outcomes.</p>
        <p>Continue with conventional allergy medications during the first months of your program and always notify the necessary adjustments to the healthcare team, ensuring the best possible results and ongoing allergy care.</p>
      </>}
      imgSrc="/SublingualHowLong.png"
      imagePosition="right"
      id="How-Long-Does-it-Take-for-Sublingual-Immunotherapy-to-Start-Working"
    />
  );
}

function OverTheCounter() {
  return (
    <DescCard
      heading="Can You Get Sublingual Immunotherapy Over the Counter?"
      desc={<>
        <p>Sublingual immunotherapy treatments are available as doctor’s prescriptions or pharmacy preparations due to the necessity for proper dosing and diagnosis, rather than being available as true over-the-counter medications. Although sublingual immunotherapy tablets and drops exist and are growing in popularity, the FDA has not reviewed certain versions in the U.S. So, get tablets and solutions from a trusted, proven source that uses certified safe ingredients and evidence supporting their efficacy.</p>
      </>}
      imgSrc="/SublingualOTC.png"
      imagePosition="left"
      id="Can-You-Get-Sublingual-Immunotherapy-Over-the-Counter"
    />
  );
}

function NearMe() {
  return (
    <DescCard
      heading="Can I Get Sublingual Immunotherapy Near Me?"
      desc={<>
        <p>Allergy drops can be dispensed by an allergy doctor that specializes in allergy immunotherapy and allergy diagnosis. Some providers also provide telehealth visits and ship allergy drops directly after verifying insurance prescriptions. Curex offers a nationwide digital product of Sublingual “SLIT” drops. You can start care, receive prescriptions from a Curex allergy professional, and have your drops shipped nationwide.</p>
      </>}
      imgSrc="/SublingualNearMe.png"
      imagePosition="right"
      buttonEle={<StartQuizButton />}
      id="Sublingual-Immunotherapy-Near-Me"
    />
  );
}

export { FDAApproved, SideEffects, DropsVsTablets, ReallyWork, HowLongToWork, OverTheCounter, NearMe };
