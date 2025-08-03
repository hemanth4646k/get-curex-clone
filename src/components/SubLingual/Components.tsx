import { InsuranceLogos } from "../../common/InsurancePartners";
import DescCard from "../../common/ui/DescCard";
import TableOfContents from "../../common/ui/TableOfContents";
import "./idx.css";
function OverviewSection() {
  return (
    <div>
      <DescCard
        heading="Sublingual Immunotherapy: A Comprehensive Overview"
        desc="Sublingual immunotherapy (SLIT) is a groundbreaking treatment method for allergies that involves administering small amounts of allergens under the tongue to boost the body's tolerance. This innovative approach offers a convenient and non-invasive alternative to traditional allergy shots. By gradually exposing the immune system to specific allergens, SLIT helps desensitize individuals to these triggers, reducing allergic reactions over time. This therapy is particularly effective for managing allergic rhinitis (hay fever), allergic asthma, and certain insect sting allergies. With its ease of administration and proven effectiveness, sublingual immunotherapy stands as a promising solution for those seeking lasting relief from allergies. Sublingual immunotherapy (SLIT) stands out for its exceptional safety and convenience when compared to other allergy treatments. Unlike allergy shots (subcutaneous immunotherapy), SLIT doesn't involve needles or frequent visits to healthcare facilities, making it an ideal option for those with busy schedules or a fear of injections"
        imgSrc="/public/YellowSyringes.avif"
        imagePosition="right"
        id="Sublingual-Immunotherapy-A-Comprehensive-Overview"
      />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p style={{ width: "60%", fontSize: "16px", lineHeight: "1.5" }}>
          Moreover, its administration at home under medical supervision reduces
          the risk of severe allergic reactions, which can occasionally occur
          with allergy shots. SLIT's safety profile makes it suitable for a
          broader range of patients, including children and older individuals,
          offering a comfortable and manageable way to address allergies without
          the inconvenience or potential risks associated with other treatment
          methods.
        </p>
      </div>
    </div>
  );
}

function TableOfContentsSL() {
  const toc = [
    [
      {
        text: "Is Sublingual Immunotherapy Safe?",
        href: "#Is-Sublingual-Immunotherapy-Safe",
      },
      {
        text: "How Often is Sublingual Immunotherapy Treatment?",
        href: "#How-Often-is-Sublingual-Immunotherapy-Treatment",
      },
      {
        text: "Sublingual Immunotherapy Costs",
        href: "#Sublingual-Immunotherapy-Costs",
      },
      {
        text: "Does My Insurance Cover for Sublingual Immunotherapy?",
        href: "#Does-Insurance-Pay-for-Sublingual-Immunotherapy",
      },
      {
        text: "Are Sublingual Immunotherapy drops FDA Approved?",
        href: "#Is-Sublingual-Immunotherapy-FDA-Approved",
      },
      {
        text: "Sublingual Immunotherapy Side Effects",
        href: "#Sublingual-Immunotherapy-Side-Effects",
      },
    ],
    [
      {
        text: "Sublingual Immunotherapy Tablets vs. Drops",
        href: "#Sublingual-Immunotherapy-Drops-vs.-Tablets",
      },
      {
        text: "Does Sublingual Immunotherapy Really Work?",
        href: "#Does-Sublingual-Immunotherapy-Really-Work",
      },
      {
        text: "How Long Does it Take for Sublingual Immunotherapy to Start Working?",
        href: "#How-Long-Does-it-Take-for-Sublingual-Immunotherapy-to-Start-Working",
      },
      {
        text: "Can I get Sublingual Immunotherapy Over-the-Counter?",
        href: "#Can-You-Get-Sublingual-Immunotherapy-Over-the-Counter",
      },
      {
        text: "Does Sublingual Immunotherapy Treat Food Allergies?",
        href: "#Does-Sublingual-Immunotherapy-Treat-Food-Allergies",
      },
      {
        text: "Sublingual Immunotherapy for Pets",
        href: "#Sublingual-Immunotherapy-for-Pet-Allergies",
      },
    ],
  ];
  return (
    <section style={{ margin: "2rem 0" }}>
      <TableOfContents toc={toc} title="Table of Contents" />
    </section>
  );
}
function QnA() {
  return (
    <div>
      <DescCard
        heading="Is Sublingual Immunotherapy Safe?"
        desc="At-home sublingual immunotherapy is a safe alternative to allergy shots that can be done at the comfort of your home. Due to its gentle, gradual build-up phase, the risk of severe reactions is extremely low compared to allergy shots, which require monitoring post-injection."
        imgSrc="/public/YellowSyringes.avif"
        id="Is-Sublingual-Immunotherapy-Safe"
      />
      <div
        style={{
          padding: "3rem",
          backgroundColor: "#f9f9f9",
          borderRadius: "8px",
        }}
        id="How-Often-is-Sublingual-Immunotherapy-Treatment"
      >
        <h1>How Often is Sublingual Immunotherapy Treatment?</h1>
        <p>
          The frequency of sublingual immunotherapy administration varies based
          on factors such as the severity of your allergies, the type of
          allergen extract you're using, and your doctor's guidance. Normally,
          allergy drops are taken daily, while more diluted doses may be taken
          thrice daily. Your doctor will provide a tailored protocol for maximum
          effectiveness. Just like any medication, adherence to the prescribed
          regimen is crucial.
        </p>
      </div>
      <DescCard
        heading="Sublingual Immunotherapy Costs"
        desc={
          <>
            <p>
              Sublingual immunotherapy (SLIT) has historically been a pricier
              treatment due to various reasons, such as the cost of FDA-approved
              allergenic extracts, the necessity for precise dosing, and the
              notably higher dosage of extract in allergy drops compared to
              allergy shots.
            </p>
            <br />
            <p>
              Thankfully, the rise of efficient compounding pharmacies, working
              alongside specialized telemedicine providers like Curex, is
              changing the landscape by making allergy drops more cost-effective
              in the US. These pharmacies can mass-produce SLIT orders for
              numerous patients daily, standardizing the process and
              significantly lowering the cost per dose. Moreover, they benefit
              from buying allergen extracts in bulk, leveraging economies of
              scale to drive expenses down. These advancements are enhancing
              accessibility to allergy drops, especially for those unable to
              afford traditional allergy shots, which have typically been even
              more expensive than sublingual immunotherapy treatments.
            </p>
          </>
        }
        imgSrc="/public/YellowSyringes.avif"
        imagePosition="right"
        id="Sublingual-Immunotherapy-Costs"
      />
      <div className="flex flex-col items-center " style={{ padding: "5rem" }}>
        <h1 id="Does-Insurance-Pay-for-Sublingual-Immunotherapy">Does Insurance Pay for Sublingual Immunotherapy?</h1>
        <br />
        <br />
        <InsuranceLogos />
        <br />
        <p>
          The extent of insurance coverage for sublingual immunotherapy varies
          based on individual plans. Typically, insurance covers immunotherapy
          given via injections at the doctor's office. However, sublingual
          immunotherapy drops, categorized as a pharmacy product, might not be
          covered due to restrictions like the Stark Law, governing financial
          relationships between doctors and pharmacies.
        </p><br />
        <p>
          Nevertheless, certain insurance plans are collaborating with
          specialized pharmacies to include coverage for allergy drops. For
          example, Curex has partnered with a pharmacy linked to entities like
          the U.S. Navy, Mayo Clinic, and various large employer insurance
          plans. Curex is actively in talks with major pharmacy plans to extend
          coverage for allergy drops.
        </p><br />
        <p>
          Although comprehensive insurance coverage may take time to expand,
          Curex presently accepts all major insurance plans for clinical
          consultations and allergy testing fees, which make up about half the
          cost of allergy immunotherapy. This approach enables Curex to provide
          starting prices as low as $59 per month for allergy drops.
        </p>
      </div>
    </div>
  );
}
export { OverviewSection, TableOfContentsSL, QnA };
