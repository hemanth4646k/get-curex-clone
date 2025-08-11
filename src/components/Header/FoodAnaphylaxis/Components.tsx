import DescCard from "../../../common/ui/DescCard";
import React from "react";
import KeyPoints from "../../../common/ui/KeyPoints";
import Faq from "../../../common/ui/Faq";
function C1() {
  return (
    <div>
      <DescCard
        heading="Common Food Allergens"
        desc="Food allergens are specific proteins found in certain foods that trigger allergic reactions in sensitive individuals. While over 170 foods have been identified as potential allergens, the majority of food allergies are caused by a smaller subset of foods commonly referred to as the 'Big 9.' These allergens are responsible for most severe allergic reactions and are required to be clearly labeled on packaged food products in many countries."
        imgSrc="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/678f449deb9da490e7371615_image-4.avif"
        imagePosition="right"
      />
    </div>
  );
}


// Interface for one allergen
interface Allergen {
  iconSrc: string;
  title: string;
  description: string;
}

// Reusable allergen card component
const AllergenCard: React.FC<Allergen> = ({ iconSrc, title, description }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: 20,
      borderRadius: 18,
      boxShadow: "0 2px 12px rgba(60,60,60,0.07)",
      background: "#fff",
      minHeight: 232,
      textAlign: "center",
    }}
  >
    <div style={{ marginBottom: 16 }}>
      <img
        src={iconSrc}
        alt={`${title} icon`}
        loading="lazy"
        style={{ width: 52, height: 52, objectFit: "contain" }}
      />
    </div>
    <h4
      style={{
        fontSize: "1.2rem",
        fontWeight: 700,
        margin: 0,
        marginBottom: 8,
      }}
    >
      {title}
    </h4>
    <p style={{ fontSize: "1rem", color: "#333", margin: 0 }}>{description}</p>
  </div>
);

// Main allergens component
interface AllergenListProps {
  data: Allergen[];
}
const AllergenList: React.FC<AllergenListProps> = ({ data }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: 32,
      maxWidth: 1020,
      margin: "0 auto",
      padding: 24,
    }}
  >
    {data.map((item, idx) => (
      <AllergenCard key={idx} {...item} />
    ))}
  </div>
);

// Example usage in a page/component:
const allergens: Allergen[] = [
  {
    iconSrc:
      "https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/66e2ccad0d837588b366970d_milk-icon.svg",
    title: "Milk",
    description:
      "Common in children, though many outgrow it by adulthood. Found in dairy products like cheese, yogurt, and butter.",
  },
  {
    iconSrc:
      "https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/66e2ccaed1e36ddd74867983_eggs-icon.svg",
    title: "Eggs",
    description:
      "Often present in baked goods, mayonnaise, and some vaccines. Egg allergy is also frequently outgrown in childhood.",
  },
  {
    iconSrc:
      "https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/66e2ccad22a848c4f1eb26ff_Frame%202141.svg",
    title: "Peanuts",
    description:
      "One of the leading causes of severe allergic reactions, often found in snacks, candies, and sauces.",
  },
  {
    iconSrc:
      "https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/678f6a1d3d037a87f0c27b9e_tree-nuts-icon.svg",
    title: "Tree Nuts",
    description:
      "Includes almonds, walnuts, cashews, pistachios, and hazelnuts. Tree nut allergies are usually lifelong.",
  },
  {
    iconSrc:
      "https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/678f6a99ba465c8aae56c58e_soy2-icon.svg",
    title: "Soy",
    description:
      "Found in soy milk, tofu, edamame, and processed foods. Commonly used as a food additive or emulsifier.",
  },
  {
    iconSrc:
      "https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/66e2ccad33abfe264f264bdd_wheat-icon.svg",
    title: "Wheat",
    description:
      "Linked to many processed foods, wheat allergies differ from celiac disease, which involves gluten intolerance.",
  },
  {
    iconSrc:
      "https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/66e2ccadd425738b24099f25_fish-icon.svg",
    title: "Fish",
    description:
      "Includes species like salmon, tuna, and cod. Fish allergies often develop in adulthood and are usually lifelong.",
  },
  {
    iconSrc:
      "https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/678f6a998f4f01ed7b2be684_shellfish2-icon.svg",
    title: "Shellfish",
    description:
      "Includes crustaceans (e.g., shrimp, crab, lobster) and mollusks (e.g., clams, mussels, squid). Shellfish allergies are common and often persist throughout life.",
  },
  {
    iconSrc:
      "https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/678f6a9907a3b0d5c521d680_sesame2-icon.svg",
    title: "Sesame",
    description:
      "A rising allergen globally, found in sesame seeds, oil, tahini, and some bread products.",
  },
];

// In your page/component:
export function FoodAllergensSection() {
  return (
    <section style={{ background: "#fcf7f0", padding: "48px 0" }}>
      <div style={{ textAlign: "center", margin: "0 0 48px 0" }}>
        <h3
          style={{
            fontSize: 32,
            fontWeight: 700,
            margin: 0,
            letterSpacing: "-0.5px",
          }}
        >
          The Big 9 <span style={{ color: "#fa58b6" }}>Food Allergens</span>
        </h3>
      </div>
      <AllergenList data={allergens} />
    </section>
  );
}

function C3() {
  return (
    <div>
      <DescCard
        heading="Other Notable Allergens"
        desc={
          <>
            <p>
              While not part of the "Big 9," certain foods like mustard, celery,
              lupin, and corn can also trigger allergies in some individuals.
              <br />
              <h3>Cross-Reactivity</h3>
              <br />
              Some individuals may experience cross-reactivity, where proteins
              in certain foods resemble those in other allergens. For instance,
              people allergic to birch pollen might also react to raw apples or
              carrots, a condition known as Oral Allergy Syndrome (OAS).
              <br />
              Understanding these common allergens and their potential presence
              in food products is essential for individuals with food allergies
              and their caregivers. For those unsure of their specific triggers,
              local allergy clinics or online specialists like Curex can perform
              testing and guide you toward safe dietary choices.
            </p>
          </>
        }
        imgSrc="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/678f449d155f4d0ca2d68842_5.avif"
        imagePosition="right"
      />
    </div>
  );
}
function C4() {
  return (
    <div
      style={{
        padding: "1rem 2rem",
        background: "linear-gradient(180deg, #fef5cc 0%, #ffe7fa 100%)",
      }}
    >
      <h3>Causes and Symptoms of Anaphylactic Allergy</h3>
      <p>
        A food allergy occurs when the body's immune system mistakenly perceives
        a particular food (or a substance within it) as harmful and mounts an
        immune response. In people with a food allergy, the immune system
        creates Immunoglobulin E (IgE) antibodies that target specific proteins
        in the offending food. When these individuals consume, touch, or even
        inhale the allergenic food, these antibodies recognize the food proteins
        and trigger the release of chemicals—histamine being a prime
        example—which then bring about the symptoms of an allergic reaction.
      </p>
      <DescCard
        heading=""
        noPadding={true}
        desc={
          <>
            <p>
              Food allergy symptoms vary in severity and often emerge within
              minutes to a couple of hours after exposure. These symptoms may
              include:
            </p>
            <br />
            <ul role="list" style={{ listStyle: "none", padding: 0 }}>
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginBottom: 8,
                }}
              >
                <span
                  style={{ color: "#2ecc40", marginRight: 8, fontSize: 20 }}
                >
                  ✔️
                </span>
                <span>
                  <strong>Skin reactions:</strong> Hives, eczema flare-ups
                </span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginBottom: 8,
                }}
              >
                <span
                  style={{ color: "#2ecc40", marginRight: 8, fontSize: 20 }}
                >
                  ✔️
                </span>
                <span>
                  <strong>Gastrointestinal issues:</strong> Nausea, vomiting,
                  diarrhea
                </span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginBottom: 8,
                }}
              >
                <span
                  style={{ color: "#2ecc40", marginRight: 8, fontSize: 20 }}
                >
                  ✔️
                </span>
                <span>
                  <strong>Respiratory problems:</strong> Nasal congestion,
                  coughing, shortness of breath
                </span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginBottom: 8,
                }}
              >
                <span
                  style={{ color: "#2ecc40", marginRight: 8, fontSize: 20 }}
                >
                  ✔️
                </span>
                <span>
                  <strong>Oral symptoms:</strong> Swelling or itching of the
                  lips or tongue
                </span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginBottom: 8,
                }}
              >
                <span
                  style={{ color: "#2ecc40", marginRight: 8, fontSize: 20 }}
                >
                  ✔️
                </span>
                <span>
                  <strong>Cardiovascular signs:</strong> Dizziness, rapid
                  heartbeat tongue
                </span>
              </li>
            </ul>
          </>
        }
        imgSrc="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/678f78dc3dd06645549dfd77_630390.avif"
        imagePosition="right"
      />
      <br />
      <p>
        If you notice two or more of these symptom types occurring together,
        this may indicate anaphylaxis, requiring immediate treatment (e.g., an
        epinephrine injection) and a call to emergency services.
        <br />
        If you suspect a mild food allergy, seek guidance from a local allergist
        or an online provider like Curex. Curex can help identify the specific
        allergen(s) and recommend an appropriate management plan.
      </p>
    </div>
  );
}

function C5() {
  return (
    <div style={{ padding: "2rem 4rem" }}>
      <h2 style={{ fontSize: "2rem" }}>
        Why are Food Allergies Becoming More Prevalent?
      </h2>
      <br />
      <p>
        Experts continue to investigate the reasons behind the apparent rise in
        food allergies, and current research points to a variety of contributing
        factors:
      </p>
      <div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "2rem",
            justifyItems: "stretch",
            alignItems: "stretch",
            margin: "2rem 0",
          }}
        >
          {/* Hygiene Hypothesis */}
          <div
            style={{
              background: "#fff",
              borderRadius: 16,
              boxShadow: "0 2px 12px rgba(60,60,60,0.07)",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                marginBottom: 6,
                color: "#fa58b6",
              }}
            >
              Hygiene Hypothesis
            </h3>
            <p style={{ marginBottom: 12, fontSize: "0.92rem" }}>
              According to this theory, today's cleaner environments may lead to
              less exposure to everyday germs, thereby causing the immune system
              to overreact to harmless substances, including food proteins.
            </p>
            <div
              style={{
                fontSize: "0.75rem",
                color: "#888",
                borderLeft: "3px solid #fa58b6",
                paddingLeft: 10,
                marginTop: "auto",
                opacity: 0.85,
              }}
            >
              Bloomfield SF, Rook GA, Scott EA, Shanahan F, Stanwell-Smith R.
              Time to abandon the hygiene hypothesis. Nature Reviews Immunology.
              2016; 16: 659.
            </div>
          </div>

          {/* Dietary Changes and Industrialization */}
          <div
            style={{
              background: "#fff",
              borderRadius: 16,
              boxShadow: "0 2px 12px rgba(60,60,60,0.07)",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                marginBottom: 6,
                color: "#fa58b6",
              }}
            >
              Dietary Changes and Industrialization
            </h3>
            <p style={{ marginBottom: 12, fontSize: "0.92rem" }}>
              Shifts in eating patterns, lack of dietary diversity, and the rise
              in industrialized food production may be increasing our exposure
              to potential allergens. Modern eating patterns and reduced dietary
              variety weaken our microbiome and immune defenses. Additionally,
              pediatric guidance that once recommended avoiding allergens has
              limited the development of natural immunity.
            </p>
            <div
              style={{
                fontSize: "0.75rem",
                color: "#888",
                borderLeft: "3px solid #fa58b6",
                paddingLeft: 10,
                marginTop: "auto",
                opacity: 0.85,
              }}
            >
              Sicherer SH, Sampson HA. Food allergy: A review and update on
              epidemiology, pathogenesis, diagnosis, prevention, and management.
              Journal of Allergy and Clinical Immunology. 2018; 141(1): 41-58.
            </div>
          </div>

          {/* Increased Use of Antibiotics */}
          <div
            style={{
              background: "#fff",
              borderRadius: 16,
              boxShadow: "0 2px 12px rgba(60,60,60,0.07)",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                marginBottom: 6,
                color: "#fa58b6",
              }}
            >
              Increased Use of Antibiotics
            </h3>
            <p style={{ marginBottom: 12, fontSize: "0.92rem" }}>
              Growing evidence indicates that the widespread use of antibiotics
              can disrupt the gut microbiome. This disruption may contribute to
              immune dysregulation and a higher risk of developing food
              allergies.
            </p>
            <div
              style={{
                fontSize: "0.75rem",
                color: "#888",
                borderLeft: "3px solid #fa58b6",
                paddingLeft: 10,
                marginTop: "auto",
                opacity: 0.85,
              }}
            >
              Stokholm J, Sevelsted A, Bønnelykke K, Bisgaard H. Maternal
              propensity for infections and risk of childhood asthma. Pediatr
              Allergy Immunol. 2017; 28(8): 779-784. (Though focused on asthma,
              studies on microbiome health echo similar concerns for food
              allergies.)
            </div>
          </div>

          {/* Improved Awareness and Diagnostic Tools */}
          <div
            style={{
              background: "#fff",
              borderRadius: 16,
              boxShadow: "0 2px 12px rgba(60,60,60,0.07)",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                marginBottom: 6,
                color: "#fa58b6",
              }}
            >
              Improved Awareness and Diagnostic Tools
            </h3>
            <p style={{ marginBottom: 12, fontSize: "0.92rem" }}>
              Better access to allergy testing and heightened awareness among
              both healthcare professionals and the public have led to more
              frequent, accurate diagnoses.
            </p>
            <div
              style={{
                fontSize: "0.75rem",
                color: "#888",
                borderLeft: "3px solid #fa58b6",
                paddingLeft: 10,
                marginTop: "auto",
                opacity: 0.85,
              }}
            >
              Turner PJ, Gowland MH, Sharma V, et al. Increase in
              anaphylaxis-related hospitalizations but no increase in
              fatalities: an analysis of United Kingdom national anaphylaxis
              data, 1992–2012. J Allergy Clin Immunol. 2015; 135(4): 956–963.
            </div>
          </div>
        </div>
      </div>
      <p>
        When considered together, these factors—cleaner living conditions,
        dietary changes, rising antibiotic use, and improved diagnostics—help
        explain the growing prevalence of food allergies worldwide.
      </p>
    </div>
  );
}

interface TestingOption {
  imgSrc: string;
  alt: string;
  title: string;
  description: string;
}

const options: TestingOption[] = [
  {
    imgSrc:
      "https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/678f449d76753460f3a5166e_image-3.avif",
    alt: "SPT",
    title: "In-Office Skin Prick Testing (SPT):",
    description: `Skin prick testing involves placing a small amount of the suspected allergen on the skin and then lightly pricking it to introduce the allergen. If an individual is allergic, a localized reaction (e.g., redness, itching, swelling) typically appears within minutes. Although this method offers quick results and the ability to test multiple allergens in one session, there is a potential risk of anaphylaxis, so it must be done in a medical setting equipped to handle emergencies.`,
  },
  {
    imgSrc:
      "https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/678f449d9474291552b2db60_3.avif",
    alt: "IgE Blood Test",
    title: "IgE Blood Testing:",
    description: `Measuring IgE levels against specific allergens is another reliable way to identify food allergies, with three common options for sample collection: visiting a local lab where a professional will draw your blood, using an at-home phlebotomy service where a certified provider collects a sample in the comfort of your home, or utilizing a self-collection device for a finger-prick test that you mail to a testing center. Each approach offers unique benefits—such as convenience, flexibility, or professional oversight—and can help confirm a food allergy diagnosis so you can take appropriate steps to manage your condition.`,
  },
  {
    imgSrc:
      "https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/678f449d6b7f4bad39e0e6aa_630391.avif",
    alt: "Oral Food Challenge",
    title: "Oral Food Challenge (OFC):",
    description: `Often considered the gold standard for diagnosing food allergies, an oral food challenge involves consuming gradually increasing amounts of a suspected allergen under close medical supervision. Healthcare professionals carefully monitor for any signs of an allergic reaction, ready to intervene if necessary. Although this method provides definitive confirmation, it carries a higher risk of anaphylaxis and should only be performed in a properly equipped clinic.`,
  },
];

export function FoodAllergyTestingTimeline() {
  return (
    <section style={{ background: "#fcf7f0", padding: "48px 0" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 24px" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: 34,
            fontWeight: 700,
            margin: "0 0 48px 0",
            letterSpacing: "-0.5px",
          }}
        >
          Food Allergy <span style={{ color: "#fa58b6" }}>Testing Options</span>
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "40% 10% 50%",
            columnGap: 32,
          }}
        >
          {/* Images column */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {options.map(({ imgSrc, alt }, idx) => (
              <div
                key={idx}
                style={{
                  flex: "1 1 0",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: idx !== options.length - 1 ? 64 : 0,
                }}
              >
                <img
                  src={imgSrc}
                  alt={alt}
                  style={{
                    width: "100%",
                    borderRadius: 16,
                    objectFit: "cover",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
                  }}
                />
              </div>
            ))}
          </div>

          {/* Timeline column */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {options.map((_, idx) => (
              <div
                key={idx}
                style={{
                  flex: "1 1 0",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  marginBottom: idx !== options.length - 1 ? 64 : 0,
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    backgroundColor: "#fa58b6",
                    border: "3px solid white",
                    boxShadow: "0 0 0 3px #fa58b6",
                    zIndex: 2,
                  }}
                />
                {idx !== options.length - 1 && (
                  <div
                    style={{
                      flex: 1,
                      width: 2,
                      marginTop: 8,
                      background:
                        "repeating-linear-gradient(to bottom, #fa58b6 0, #fa58b6 8px, transparent 8px, transparent 16px)",
                      minHeight: 120,
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Content column */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {options.map(({ title, description }, idx) => (
              <div
                key={idx}
                style={{
                  flex: "1 1 0",
                  backgroundColor: "white",
                  borderRadius: 16,
                  boxShadow: "0 3px 16px rgba(250,88,182,0.08)",
                  padding: 24,
                  marginBottom: idx !== options.length - 1 ? 64 : 0,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontSize: 20,
                    fontWeight: 700,
                    marginBottom: 12,
                    color: "#2a2a2a",
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: 16,
                    color: "#555",
                    lineHeight: 1.6,
                  }}
                >
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function C6() {
  return (
    <div style={{ backgroundColor: "#faf1dc", padding: "2rem" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr" }}>
        <div>
          <h2>
            Difference between{" "}
            <span style={{ color: "#ff5c9e" }}>food allergies</span> and{" "}
            <span style={{ color: "#ff5c9e" }}>sensitivity</span>
          </h2>
          <p>
            While the terms “food allergy” and “food sensitivity” are sometimes
            used interchangeably, they refer to different types of adverse
            reactions and involve distinct physiological mechanisms.
            <br />A food allergy is an overreaction of the immune system—often,
            but not always, IgE-mediated—to a specific protein in a food. Common
            triggers include peanuts, tree nuts, shellfish, and dairy. Can
            include hives, swelling, vomiting, difficulty breathing, and in
            severe cases, anaphylaxis. Because of the immune system's
            involvement, even small amounts of the allergen can cause serious
            reactions.
          </p>
        </div>
        <div
          style={{
            width: "90%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: "2rem",
          }}
        >
          <img
            style={{ width: "100%", borderRadius: "16px", overflow: "hidden" }}
            src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/678f9371106e9d80210cda68_image-2.avif"
            alt=""
          />
        </div>
      </div>
      <br />
      <p>
        A food sensitivity is typically used to describe non-immunologic
        reactions. These responses are not driven by IgE or other immune
        pathways but can still cause symptoms. Examples include lactose
        intolerance (due to lactase enzyme deficiency) and certain reactions to
        food additives.
        <br />
        <br />
        Symptoms may include bloating, gas, headaches, or fatigue. Symptoms are
        usually not life-threatening and often dose-dependent, meaning larger
        quantities of the offending food are needed to trigger a reaction.
        Unlike allergies, food sensitivities generally do not involve a systemic
        immune response and do not carry a risk of anaphylaxis.
      </p>
    </div>
  );
}
function C7() {
  const emergencyPreparednessPoints = [
    {
      title: "Epinephrine Auto-Injector",
      description:
        "Individuals at risk of severe reactions (anaphylaxis) are typically prescribed an epinephrine auto-injector (e.g., EpiPen). They should carry it at all times and know how to use it.",
    },
    {
      title: "Action Plan",
      description:
        "Patients, family members, and caregivers should be familiar with signs of anaphylaxis (e.g., hives, wheezing, throat swelling) and be prepared to administer epinephrine and call emergency services when necessary.",
    },
    {
      title: "Antihistamines and Bronchodilators",
      description:
        "While these medications (e.g., Zyrtec, Albuterol) can help alleviate mild symptoms or additional breathing issues, they are not substitutes for epinephrine in a true anaphylactic emergency.",
    },
  ];

  const xolairPoints = [
    {
      title: "Biologics",
      description:
        "Xolair (omalizumab) is an FDA-approved injectable treatment that reduces the severity of food-allergic reactions by targeting IgE, the antibody responsible for allergic responses.",
    },
  ];

  const immunotherapyPoints = [
    {
      title: "Oral Immunotherapy (OIT)",
      description:
        "Under close medical supervision, patients consume gradually increasing amounts of the allergen to build tolerance. Although effective, frequent side effects—including anaphylaxis—lead many to discontinue treatment. Those who continue typically need in-person visits every two weeks.",
    },
    {
      title: "Sublingual Immunotherapy (SLIT)",
      description:
        "A small dose of allergen extract is placed under the tongue daily to desensitize the immune system over time. Compared to OIT, SLIT generally has a superior safety profile and can be administered at home. Its highly diluted doses often result in fewer side effects, and studies report high completion rates alongside significant improvements in tolerance.",
    },
    {
      title: "Epicutaneous Immunotherapy (EPIT)",
      description:
        "A skin patch containing small amounts of the allergen is applied to modulate the immune response. This approach has less real-world data and remains the least studied option.",
    },
  ];

  return (
    <div>
      <DescCard
        heading={
          <>
            Food Sensitivity{" "}
            <span style={{ color: "#ff5c9e" }}>Testing& Diagnosis</span>
          </>
        }
        desc="IgG testing has gained popularity in recent years as a way to detect potential food sensitivities. However, most experts and major allergy organizations caution against relying on IgG test results due to high rates of false positives. The presence of IgG antibodies often reflects exposure to a specific food rather than a genuine sensitivity or intolerance.

Instead, the gold standard for diagnosing food sensitivities is an elimination diet. Under medical supervision, individuals remove suspected foods from their daily meals and carefully monitor any changes in symptoms. After a set period, they gradually reintroduce each food item to determine whether it triggers a reaction. This method provides more accurate, individualized insight into true food sensitivities than current IgG-based testing approaches."
        imgSrc="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/678f449d061c4271d0d2a663_image-1.avif"
      />
      <h2>
        Treatment Options for{" "}
        <span style={{ color: "#ff5c9e" }}>Food Sensitivities</span>
      </h2>
      <br />
      <p>
        Treatments for food sensitivities aim to manage symptoms by identifying
        triggers, modifying the diet, and addressing any underlying issues with
        digestion or gut health.
      </p>
      <br />
      <p>
        Once sensitivities have been diagnosed (see above), it is generally
        recommended to avoid the food in question. While strict avoidance (as in
        food allergy) is not always necessary, limiting problematic foods to a
        level that doesn't trigger symptoms can help maintain a balanced diet.
        For lactose intolerance, you can take lactase enzyme supplements.
        Sometimes symptom medications may help provide relief, like
        antispasmodic medications may be recommended to help control digestive
        symptoms.
      </p>
      <br />
      <p>
        Lastly, there is some evidence suggesting that improving the diversity
        of gut bacteria can help reduce sensitivity symptoms. That may be
        accomplished with probiotics and prebiotics. Also, because stress can
        exacerbate gastrointestinal issues, interventions such as mindfulness,
        cognitive behavioral therapy (CBT), or yoga may be beneficial.
      </p>
      <br />
      Reference: Ford AC, Lacy BE, Talley NJ. Irritable bowel syndrome. Lancet.
      2017; 389(10066): 1288-1298.
      <br />
      <div
        style={{
          background: "linear-gradient(180deg, #fff 0%, #fef5cc 100%)",
        }}
      >
        <DescCard
          heading={
            <>
              Treatment Options for{" "}
              <span style={{ color: "#ff5c9e" }}>Food Allergies</span>
            </>
          }
          desc="Managing food allergies typically involves a combination of strict avoidance, emergency preparedness (particularly with epinephrine), the use of biologics like Xolair, and, for those seeking a potential cure, immunotherapy."
          imgSrc="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/67908f6f33a397947ddf896d_DSCF4050.avif"
          imagePosition="right"
        />
        <KeyPoints
          backgroundColor=""
          title="Emergency Preparedness"
          items={emergencyPreparednessPoints}
        />
        <KeyPoints
          backgroundColor=""
          title="Xolair for food allergy"
          items={xolairPoints}
        />
        <KeyPoints
          backgroundColor=""
          title="Immunotherapy"
          items={immunotherapyPoints}
        />
        <p
          style={{
            fontSize: "0.75rem",
            color: "#888",
            borderLeft: "3px solid #fa58b6",
            paddingLeft: 10,
            marginTop: "auto",
            opacity: 0.85,
            marginLeft: 50,
          }}
        >
          Reference: Chang Y-S, Trenga CA. Treatment of Food Allergy: An
          Overview of Immunotherapy Approaches. Curr Allergy Asthma Rep.
          2019;19(6):29.
        </p>
        <br />
        <br />
        <p style={{ padding: "3rem" }}>
          Children may outgrow certain allergies and adults can develop new
          ones. So it may be helpful to conduct periodic retesting and carefully
          monitor symptoms during exposure.
        </p>
      </div>
    </div>
  );
}
function Smcard({ heading, desc }: { heading: string; desc: string }) {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#ffe780",
          marginTop: 0,
          marginBottom: 0,
          fontSize: "1.75rem",
          fontWeight: 500,
          lineHeight: 1.3,
          height: "5.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "1rem 1rem 0 0",
        }}
      >
        {heading}
      </div>
      <div
        style={{
          backgroundColor: "#fef5cc",
          padding: "1rem",
          borderRadius: "0 0 1rem 1rem",
          height: "70%",
        }}
      >
        {desc}
      </div>
    </div>
  );
}

function C8() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ fontSize: "2rem", fontWeight: "lighter" }}>
        Epinephrine Options: EpiPen, Auvi-Q, Adrenaclick, Neffy, and Compounded
        Epinephrine
      </h2>
      <p>
        Carrying an epinephrine option is essential for anyone at risk of
        anaphylaxis. Below are some common choices:
      </p>
      <br />
      <br />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "1rem",
        }}
      >
        <Smcard
          heading="EpiPen"
          desc="The most widely recognized auto-injector, featuring a straightforward, single-step design."
        />
        <Smcard
          heading="Auvi-Q"
          desc="Notable for its compact size and voice instructions, which can make it easier to administer."
        />
        <Smcard
          heading="Adrenaclick"
          desc="Functions similarly to other auto-injectors, though insurance coverage and availability may differ."
        />
        <Smcard
          heading="Neffy"
          desc="A nasally administered form of epinephrine."
        />
        <Smcard
          heading="Compounded Epinephrine"
          desc="Specially prepared by certain pharmacies to meet specific patient needs."
        />
      </div>
      <br />
      A 2022 review in Pediatric Allergy and Immunology underscores how
      immediate use of epinephrine significantly reduces complications from
      anaphylaxis—highlighting why it's crucial to keep an epinephrine device
      readily available.
      <br />
    </div>
  );
}

function C9() {
  return (
    <div style={{marginTop: "2rem"}}>
      <h2 style={{fontSize: "2rem", fontWeight: "normal"}}>Xolair (Omalizumab) for <span style={{color: "#ff5c9e"}}>Food Allergy</span></h2>
      <br />
      <p>
        Xolair (omalizumab) is an injectable medication indicated for use in
        individuals aged 1 and older to help manage food allergies. It does so
        by blocking a key component of the body's allergic response, thereby
        lowering the likelihood of severe reactions. This makes Xolair
        especially beneficial for individuals undergoing oral or sublingual
        immunotherapy as they work on gradually increasing their tolerance.
        <br />
        <br />
        However, it's important to note that Xolair is not a cure for food
        allergies. It is often quite expensive—up to $60,000 per year—and
        requires biweekly injections. Furthermore, Xolair does not alter the
        underlying disease process, meaning long-term use may be necessary
        unless the patient undergoes allergy immunotherapy. Lastly, Xolair
        should not be used as an emergency treatment: patients must still carry
        an epinephrine auto-injector (e.g., EpiPen) for acute allergic
        reactions.
      </p>
      <DescCard
        heading={<>
          Oral Immunotherapy (OIT) for <span style={{color: "#ff5c9e"}}>Food Allergy</span>
        </>}
        desc="Oral immunotherapy typically involves consuming small, gradually increasing amounts of the allergen under medical supervision. Over weeks or months, the immune system may become more tolerant to the allergen. A recent clinical trial in the New England Journal of Medicine showed that OIT can help reduce the likelihood of severe reactions in children with peanut allergies. While highly effective for some, OIT does require strict adherence to the regimen and ongoing maintenance doses.  In most practices, OIT treatment is prepared on-site by healthcare providers using off-the-shelf ingredients (such as peanut flour), which can introduce inconsistencies and limit quality control."
        imgSrc="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/678f449dc397ad0a8b335b7a_image.avif"
      />
      <DescCard heading={
        <>
        Sublingual Immunotherapy (SLIT) for <span style={{color: "#ff5c9e"}}>Food Allergy</span>
      </>
      }
      desc={
        <p>
          Sublingual immunotherapy (SLIT) involves placing a small dose of allergen extract under the tongue daily, allowing it to be absorbed into the bloodstream through the oral mucosa. Over time, this gradual exposure helps desensitize the immune system to the allergen, reducing the severity of allergic reactions.
<br /><br />
Unlike OIT, SLIT is prepared by specialized pharmacies (e.g., Allergychoices) using pharmaceutical-grade allergenic extracts to create highly precise treatment sets, ensuring greater accuracy and quality control.
        </p>
      }
      imgSrc="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/6790a128a023bac17c8dadb7_DSCF4058.avif"
      imagePosition="right"
      />
    </div>
  );
}
function C10() {
  const slitAdvantagesPoints = [
    {
      title: "Superior Safety Profile",
      description:
        "SLIT generally has fewer and less severe side effects compared to OIT. The risk of anaphylaxis, a major concern with OIT, is significantly lower with SLIT because the allergen doses are much smaller and delivered in a controlled manner. This makes SLIT a safer option for individuals who may not tolerate the higher doses used in OIT.",
    },
    {
      title: "Convenience and At-Home Administration",
      description:
        "Unlike OIT, which often requires frequent in-clinic visits (every 1–2 weeks) for dose escalation and monitoring, SLIT can be administered at home after an initial consultation and training. This flexibility is particularly appealing for patients with busy schedules or limited access to an allergy clinic.",
    },
    {
      title: "Reduced Gastrointestinal Side Effects",
      description:
        "OIT is associated with gastrointestinal issues, such as abdominal pain, nausea, or vomiting, as patients consume increasing amounts of the allergen. SLIT bypasses the digestive system, minimizing these side effects while still effectively desensitizing the immune system.",
    },
    {
      title: "Lower Risk of Dropout",
      description:
        "Studies show that SLIT has higher completion rates compared to OIT. The less invasive nature of SLIT, combined with its safety and convenience, makes patients more likely to adhere to the treatment plan.",
    },
    {
      title: "Applicable to a Broader Population",
      description:
        "SLIT has been used extensively with adults but is also well suited for children, individuals with severe allergies, or those who have experienced adverse reactions during OIT. Its gentle approach allows a wider range of patients to participate in immunotherapy.",
    },
    {
      title: "Fewer Lifestyle Restrictions",
      description:
        "OIT requires careful timing of doses, often necessitating patients to remain at rest for several hours post-dose to avoid triggering a reaction during physical activity. SLIT does not impose these restrictions, offering greater flexibility in daily life.",
    },
  ];

  return (
    <div style={{ backgroundColor: "#f7f4e8", padding: "2rem", borderRadius: "8px", margin: "2rem 0" }}>
      <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1.5rem", color: "#333" }}>
        Advantages of <span style={{ color: "#fa58b6" }}>SLIT</span> over Oral Immunotherapy (OIT)
      </h3>
      
      <div style={{ marginBottom: "2rem" }}>
        {slitAdvantagesPoints.map((point, index) => (
          <div key={index} style={{ display: "flex", alignItems: "flex-start", marginBottom: "1rem" }}>
            <span style={{ color: "#28a745", fontSize: "16px", fontWeight: "bold", marginRight: "10px", marginTop: "2px", flexShrink: 0 }}>
              ✓
            </span>
            <div>
              <span style={{ fontWeight: "bold", color: "#333" }}>{point.title}:</span>{" "}
              <span style={{ color: "#333", fontSize: "14px" }}>{point.description}</span>
            </div>
          </div>
        ))}
      </div>

      <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem", color: "#333" }}>
        Clinical Evidence Supporting <span style={{ color: "#fa58b6" }}>SLIT</span>
      </h3>
      <p style={{ fontSize: "14px", color: "#333", marginBottom: "1rem", lineHeight: "1.5" }}>
        Research published in JAMA Network Open and other leading journals has shown that SLIT is effective in increasing allergen tolerance, particularly for children and adults with peanut, milk, egg, and other common food allergies. Participants in these studies reported fewer severe reactions and a higher quality of life compared to those undergoing OIT.
      </p>
      <p style={{ fontSize: "14px", color: "#333", fontStyle: "italic" }}>
        Kim EH, et al. <strong>Open-label study of the efficacy, safety, and durability of peanut sublingual immunotherapy in peanut-allergic children.</strong> J Allergy Clin Immunol. Published online February 17, 2023.
      </p>
    </div>
  );
}

function C11() {
  const slitSteps = [
    {
      title: "Initial Consultation",
      description: "Patients consult with an allergist to identify their specific allergens through testing. Curex can use existing test results or order new in-lab or at-home tests.",
      imgSrc: "https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/664ed4b61927cf0588acef5b_image%201.webp", // You will add this later
    },
    {
      title: "Customized Treatment Plan",
      description: "A personalized allergen extract is prepared in a highly diluted by #1 allergy immunotherapy pharmacy Allergychoices",
      imgSrc: "https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/653b62cc299ab4a113513b49_DSCF4043%201.webp", // You will add this later
    },
    {
      title: "Daily Dosing",
      description: "The patient places the extract under the tongue and holds it there for 1-2 minutes before swallowing. This process is repeated daily.",
      imgSrc: "https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/66be8c7db1bfcd8891e78c8d_allergy-drops.avif", // You will add this later
    },
    {
      title: "Gradual Desensitization",
      description: "Over time, the immune system becomes less reactive to the allergen, reducing the risk of severe allergic reactions during accidental exposure.",
      imgSrc: "https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/66e2ccad363127b67ef270d9_food-reviews1.avif", // You will add this later
    },
  ];

  return (
    <div style={{ padding: "3rem 0", backgroundColor: "#f8f9fa" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        <h2 style={{ 
          textAlign: "center", 
          fontSize: "1.5rem", 
          fontWeight: "bold", 
          marginBottom: "3rem",
          color: "#333"
        }}>
          How <span style={{ color: "#fa58b6" }}>SLIT</span> Works With Curex
        </h2>
        
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(4, 1fr)", 
          gap: "1rem" 
        }}>
          {slitSteps.map((step, index) => (
            <div
              key={index}
              style={{
                
                height: "100%",
                fontSize: "0.7rem"
              }}
            >
              <div style={{ 
                height: "200px", 
                backgroundColor: "#f0f0f0", 
                borderRadius: "8px", 
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#999"
              }}>
                {step.imgSrc ? (
                  <img 
                    src={step.imgSrc} 
                    alt={step.title}
                    style={{ 
                      width: "100%", 
                      height: "100%", 
                      objectFit: "cover", 
                      borderRadius: "8px" 
                    }}
                  />
                ) : (
                  "Image placeholder"
                )}
              </div>
              <h3 style={{ 
                fontSize: "1.3rem", 
                fontWeight: "bold", 
                marginBottom: "1rem",
                color: "#333"
              }}>
                {step.title}
              </h3>
              <p style={{ 
                fontSize: "1rem", 
                lineHeight: "1.5", 
                color: "#666",
                margin: 0,
                flexGrow: 1
              }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
function C12(){
  return(
    <div>
      <h2>Ideal Candidates for <span style={{ color: "#fa58b6" }}>SLIT</span></h2>
      <DescCard
        heading=""
        desc={
          <div style={{ padding: "1rem 0" }}>
            <h4 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "1.5rem", color: "#333" }}>
              SLIT is especially suited for:
            </h4>
            <div style={{ position: "relative", paddingLeft: "2rem" }}>
              {/* Vertical line */}
              <div style={{
                position: "absolute",
                left: "1rem",
                top: "1rem",
                bottom: "1rem",
                width: "2px",
                background: "linear-gradient(to bottom, #28a745 0%, #28a745 33%, #28a745 66%, #28a745 100%)",
                backgroundSize: "2px 8px",
                backgroundRepeat: "repeat-y"
              }}></div>
              
              <div style={{ marginBottom: "1.5rem", position: "relative" }}>
                <div style={{
                  position: "absolute",
                  left: "-1.5rem",
                  top: "0.2rem",
                  width: "12px",
                  height: "12px",
                  backgroundColor: "#28a745",
                  borderRadius: "50%",
                  border: "2px solid white",
                  boxShadow: "0 0 0 2px #28a745"
                }}></div>
                <p style={{ margin: 0, fontSize: "1rem", lineHeight: "1.5", color: "#333" }}>
                  Patients seeking a safer, less invasive alternative to OIT.
                </p>
              </div>
              
              <div style={{ marginBottom: "1.5rem", position: "relative" }}>
                <div style={{
                  position: "absolute",
                  left: "-1.5rem",
                  top: "0.2rem",
                  width: "12px",
                  height: "12px",
                  backgroundColor: "#28a745",
                  borderRadius: "50%",
                  border: "2px solid white",
                  boxShadow: "0 0 0 2px #28a745"
                }}></div>
                <p style={{ margin: 0, fontSize: "1rem", lineHeight: "1.5", color: "#333" }}>
                  Individuals with a history of severe reactions to allergens.
                </p>
              </div>
              
              <div style={{ marginBottom: "0", position: "relative" }}>
                <div style={{
                  position: "absolute",
                  left: "-1.5rem",
                  top: "0.2rem",
                  width: "12px",
                  height: "12px",
                  backgroundColor: "#28a745",
                  borderRadius: "50%",
                  border: "2px solid white",
                  boxShadow: "0 0 0 2px #28a745"
                }}></div>
                <p style={{ margin: 0, fontSize: "1rem", lineHeight: "1.5", color: "#333" }}>
                  Those who prefer at-home treatment to minimize clinic visits.
                </p>
              </div>
            </div>
          </div>
        }
        imgSrc={"https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/6790b6c79d60d75588ddd21e_curex-box.avif"}
        imagePosition="right"
      />
      <div style={{padding: "0 4rem"}}>

      <DescCard
      heading="SLIT at Curex"
      desc="At Curex, we offer personalized SLIT treatment plans tailored to your specific allergies and lifestyle. Our board-certified allergists provide ongoing support to ensure your safety and progress throughout the program. If you’re interested in learning more, sign up for our Free Webinar, where a clinical expert will explain SLIT in detail and answer your questions."
      imgSrc={"https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/6790bb097ea3912fb5d53e55_man-with-box-food2.avif"}
      imagePosition="right"
      />
      </div>
  </div>
)
}

function C13() {
  return (
    <div style={{ 
      backgroundColor: "#f5f0e8", 
      padding: "3rem 2rem", 
      textAlign: "center" 
    }}>
      <div style={{ 
        maxWidth: "800px", 
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "2rem"
      }}>
        <div style={{ textAlign: "left", flex: 1 }}>
          <h2 style={{ 
            fontSize: "2.5rem", 
            fontWeight: "bold", 
            marginBottom: "1.5rem",
            color: "#333"
          }}>
            Next Steps
          </h2>
          <p style={{ 
            fontSize: "1rem", 
            lineHeight: "1.6", 
            color: "#666",
            margin: 0
          }}>
            If you're unsure of the best course of action for managing your food allergy, consider joining 
            Curex's free Food Allergy Webinar hosted by our team of clinical allergists. This session will cover 
            available treatment options, including those offered through Curex, and help you determine the 
            best path forward. To sign up, simply fill out the form below.
          </p>
        </div>
        <div>
          <button style={{
            backgroundColor: "#fa58b6",
            color: "white",
            padding: "1rem 2rem",
            fontSize: "1.1rem",
            fontWeight: "bold",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            whiteSpace: "nowrap",
            boxShadow: "0 4px 12px rgba(250, 88, 182, 0.3)",
            transition: "all 0.3s ease"
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "#e91e63";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "#fa58b6";
            e.currentTarget.style.transform = "translateY(0)";
          }}
          onClick={() => window.open("https://calendly.com/webinar-curex/allergy-immunotherapy")}
          >
            Sign up for Free Webinar
          </button>
        </div>
      </div>
    </div>
  );
}

function C14() {
  const faqData = [
    {
      question: "Sign up for Free Webinar",
      answer: (
        <div>
          <p>Learn how allergy immunotherapy can help you find lasting relief. Allergy experts discuss allergy shots, allergy drops and food OIT to help you reduce your environmental and/or food allergies. Reserve your spot here:</p>
          <p><a target="_blank" href="https://calendly.com/webinar-curex/allergy-immunotherapy">https://calendly.com/webinar-curex/allergy-immunotherapy</a></p>
        </div>
      )
    },
    {
      question: "Is SLIT covered by insurance?",
      answer: "Coverage varies by provider. Some insurers cover part of SLIT therapy, but it's best to check with your plan or consult our billing department for details."
    },
    {
      question: "How quickly does immunotherapy work?",
      answer: "Timelines differ based on individual factors. OIT might show results in a few months, while SLIT may take longer. A personalized treatment plan is the best way to gauge realistic expectations."
    },
    {
      question: "Are these treatments safe for children?",
      answer: "Many immunotherapy studies focus on pediatric patients because early intervention can reduce allergy severity later in life. However, any therapy for children should be closely supervised by a specialist."
    },
    {
      question: "Can I switch from one epinephrine auto-injector to another?",
      answer: "Yes. You may need a new prescription, and it's wise to practice with the trainer device to become comfortable with the different mechanisms."
    },
    {
      question: "What is the treatment?",
      answer: (
        <div>
          <p>Food SLIT (Sublingual Immunotherapy), also known as sublingual allergy drops, helps desensitize patients to the foods they are allergic to by administering highly diluted quantities of the food allergen daily. Over time, this gradual exposure helps the body build resistance to the allergen. These allergy drops are placed under the tongue and taken every day.</p>
          <p>Food allergy drops are made using clinical-grade allergenic extracts prepared by pharmaceutical manufacturers. The high purity of these extracts allows the pharmacy to compound precise dosages that deliver a gentle, gradual desensitization process, which is considered safer than other alternatives, such as Oral Immunotherapy (OIT).</p>
          <p>While the SLIT protocol is gentle and safe, it typically requires a longer treatment period than OIT to achieve the desired effectiveness. The ultimate goal of food SLIT treatment is to enable you or your child to safely tolerate accidental exposure to the allergen and, eventually, to pass a food challenge. Reaching this point usually requires 3 to 5 years of consistent food allergy drop treatment. Every patient is different, therefore, some patients may need more than 5 years to reach the goal.</p>
        </div>
      )
    },
    {
      question: "How long is the treatment?",
      answer: (
        <div>
          <p>The duration of treatment varies for each individual. Curex clinicians will work closely with you to determine the right time to complete your treatment based on your progress.</p>
          <p>Typically, the recommended treatment lasts 3-5 years. This period is usually sufficient to desensitize the patient and allow them to safely tolerate accidental exposure to the allergen. At the end of this period, providers may recommend undergoing an in-person food challenge, supervised by a clinician, if the patient is interested in confirming their tolerance.</p>
        </div>
      )
    },
    {
      question: "The science of allergy drops",
      answer: (
        <div>
          <p>Our clinical team together with Allergychoices, the leading allergy immunotherapy pharmacy in the U.S., follow protocols that have successfully treated over 50,000 patients with food SLIT.</p>
          <p>Sublingual immunotherapy (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9707371/">SLIT</a>) involves placing small amounts of an allergen under the tongue, a method that has proven successful in treating allergic rhinitis (hay fever). Over the last few decades, some practitioners have expanded the use of SLIT to treat food allergies. According to the <a href="https://www.niaid.nih.gov/diseases-conditions/food-allergy-treatment-research">National Institutes of Health</a>, clinical trials have shown that SLIT tends to have fewer side effects than oral immunotherapy (OIT) and becomes more effective with continued use.</p>
          <p>The European Journal of Allergy and Clinical Immunology <a href="https://onlinelibrary.wiley.com/doi/10.1111/all.13319">guidelines</a> highlight that food SLIT offers significant benefits in desensitizing patients to their allergens.</p>
          <p>Due to SLIT's gentler formulations and fewer side effects, it boasts a higher completion rate—87% in <a href="https://pubmed.ncbi.nlm.nih.gov/36828080/">one study</a>—compared to OIT. While OIT may achieve faster results, the lower incidence of side effects with SLIT allows more patients to successfully complete the program and reach their tolerance goals.</p>
        </div>
      )
    },
    {
      question: "What allergies do you treat?",
      answer: "We treat more than 90 different food allergies, including the most common ones - peanuts, milk, tree nuts, wheat, eggs, fish, shellfish, soy, and sesame among others."
    },
    {
      question: "What is in food allergy drops?",
      answer: (
        <div>
          <p>Curex clinicians prescribe food allergy drops that are prepared at a leading allergy immunotherapy pharmacy, Allergychoices, specifically for you and shipped to you every three months. The composition of sublingual food allergy drops (SLIT) varies depending on an individual's specific allergies, as determined by allergy testing.</p>
          <p>Sublingual food immunotherapy (SLIT) involves medical-grade allergen extracts and glycerin in its formulation. Each treatment is tailored to the patient's unique food allergies and allergy history. Our formulation is phenol-free, ensuring a natural treatment experience. Moreover, it can be self-administered at home.</p>
        </div>
      )
    },
    {
      question: "Do you treat food sensitivities?",
      answer: (
        <div>
          <p>At Curex we treat food allergies which are caused by your immune system reacting to the food when it doesn't need to.</p>
          <p>With a food intolerance or sensitivity, your immune system isn't responsible for the symptoms. Most of the time it's an inability to digest the food proteins or carbohydrates. We do not treat food sensitivities.</p>
          <p>For example, a milk allergy is different from lactose intolerance. A milk allergy can cause anaphylaxis and involves allergic proteins (antibodies) targeting a protein in milk. On the other hand, lactose intolerance causes digestion issues and involves a reduced level of lactase, an enzyme needed to digest lactose, the common sugar found in milk.</p>
          <p>Generally food allergies can be life threatening, whereas sensitivities or intolerances can cause discomfort but they are rarely life threatening.</p>
          <p>Curex clinicians will help you to determine if your food reaction is caused by allergies or intolerances / sensitivities.</p>
        </div>
      )
    },
    {
      question: "Do you treat lactose intolerance?",
      answer: "At Curex we are focusing on treating allergic reactions to food. Being allergic to milk is different from not being able to digest it properly because of lactose intolerance."
    },
    {
      question: "Difference between SLIT and OIT?",
      answer: (
        <div>
          <p>Sublingual Immunotherapy (SLIT) and Oral Immunotherapy (OIT) are both treatments for allergies, but they differ in their methods of administration and their safety profiles.</p>
          <p>SLIT is administered under the tongue, while OIT involves oral ingestion.</p>
          <p>OIT carries a higher risk of allergic reactions, including severe reactions (anaphylaxis), because the patient is consuming a much larger percentage of the allergenic food compared with SLIT. It requires careful monitoring by healthcare professionals during the initial phases.</p>
          <p>SLIT has a lower risk of severe reactions compared to OIT, again, because there is exposure to a much smaller percentage of allergen (food).</p>
        </div>
      )
    },
    {
      question: "Are food allergy drops safe?",
      answer: (
        <div>
          <p>Sublingual allergy drops (SLIT) are widely regarded as having a superior safety profile compared to Oral Immunotherapy (OIT), primarily due to the method of administration and the significantly lower dosage used in SLIT.</p>
          <p>A recent <a href="https://pubmed.ncbi.nlm.nih.gov/36828080/">study</a> found that patients undergoing food SLIT treatment rarely experience side effects, and when they do, these are typically mild and limited to temporary itching in the mouth and/or throat. If these symptoms are really bothersome, our clinicians can adjust the strength of the extract to mitigate the problem.</p>
          <p>While severe adverse reactions, such as anaphylactic shock, are extremely rare, there have been documented cases in individuals with a history of anaphylaxis. Patients with a known history of anaphylaxis will be carefully evaluated by our clinical team to determine if food SLIT is a safe and appropriate option for them.</p>
          <p>Our clinical team, together with our pharmacy partner, Allergychoices, follow protocols that have successfully treated over 50,000 patients with food SLIT.</p>
          <p>Although the safety record is excellent, our providers carefully evaluate the risk profile of each patient to ensure SLIT is appropriate and safe. As a precaution, we prescribe and require epinephrine to every patient to have on hand in case of an emergency.</p>
          <p>We strongly recommend having another adult with an EpiPen available when you take your allergy drops for the first time and when increasing the dosage. This ensures added safety and immediate support in case of any unexpected reactions.</p>
        </div>
      )
    },
    {
      question: "Is an EpiPen required?",
      answer: (
        <div>
          <p>All patients who are prescribed allergy drops for foods through Curex are required to have an epinephrine device. Although extremely rare, a severe allergic reaction is possible and epinephrine can be life-saving. Anaphylaxis action plans which include instructions on correct epinephrine use will be provided to all patients starting on food allergy drops.</p>
          <p>We strongly recommend having another adult with an EpiPen available when you take your allergy drops for the first time and when increasing the dosage. This ensures added safety and immediate support in case of any unexpected reactions.</p>
        </div>
      )
    },
    {
      question: "How does allergy testing work?",
      answer: (
        <div>
          <p>Once you sign up and complete your medical history form, you will have your first clinical consultation with a Curex clinician. During this call, we will prepare and finalize your test order. The process is designed to be straightforward and convenient.</p>
          <p>The test requires a simple and easy blood draw. We utilize ImmunoCAP IgE, sIgE and component testing to confirm the diagnosis. If you choose to have your test conducted at a local lab, you can typically expect to receive your results within 5-7 business days. If you opt for other testing methods, the timing may vary slightly due to scheduling and logistical factors.</p>
          <p>If you have food test results from another clinic you should upload it as well during the medical onboarding questionnaire. We will retest you after one year on the food allergy drops to check if your food IgE levels have decreased. It is important to monitor these levels as a measure of treatment success.</p>
        </div>
      )
    },
    {
      question: "Does Curex accept insurance?",
      answer: (
        <div>
          <p>We accept most commercial insurance plans and are likely in-network for yours. However, estimating the exact out-of-pocket costs prior to submitting the first insurance claim can be challenging. Each insurance plan varies in terms of deductibles, how telemedicine consultations are covered, and the treatment of payments related to your specific medical "complexity," which we will only be able to assess after your consultation with one of our doctors.</p>
          <p>Regardless of your insurance company's response, we are committed to working with you to find the most affordable path to obtaining allergy care. We believe we have the lowest price for allergy immunotherapy in the U.S., and our aim is to make this treatment accessible to everyone who needs it. Please note that an average patient responsibility is $200 per year and depends on your insurance plan (deductibles, coinsurance, telemedicine benefit).</p>
        </div>
      )
    },
    {
      question: "Can my child use Curex?",
      answer: (
        <div>
          <p>Absolutely! In fact, food allergy drops (SLIT) are safer and easier to use for children than Oral Immunotherapy (OIT).</p>
          <p>At Curex, we prescribe sublingual drops for children as young as 2 years old, provided the clinician believes the patient will benefit and can follow the treatment plan with the help of their parent or guardian.</p>
        </div>
      )
    },
    {
      question: "What is Curex?",
      answer: "Curex is an online allergy clinic that focuses on sublingual immunotherapy, offering a convenient and affordable solution for those seeking long-term relief from allergies. Often seen as a favorable alternative to Oral Immunotherapy (OIT), we provide comprehensive services that include at-home allergy testing, online consultations, symptom management, and personalized sublingual immunotherapy plans. Our goal is to improve access to quality allergy care for anyone who needs it."
    },
    {
      question: "What is your cancellation policy?",
      answer: "You can cancel at any time. However, please note that if you received treatment recently, we will need to collect any remaining payments for that treatment on your account. Additionally, if you had any telehealth visits, it can take up to three months for insurance to process each claim. These may be billed to you after you cancel if they have not been processed already."
    }
  ];

  return (
    <div style={{ padding: "3rem 0" }}>
      <Faq faqs={faqData} title="FAQs" id="faq" />
    </div>
  );
}

function Components() {
  return (
    <div style={{ padding: "2rem 4rem" }}>
      <C1 />
      <FoodAllergensSection />
      <C3 />
      <C4 />
      <C5 />
      <FoodAllergyTestingTimeline />
      <C6></C6>
      <C7></C7>
      <C8></C8>
      <C9></C9>
      <C10></C10>
      <C11></C11>
      <C12></C12>
      <C13></C13>
      <C14></C14>
    </div>
  );
}
export default Components;
