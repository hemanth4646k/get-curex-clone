import DescCard from "../../common/ui/DescCard";

function PetAllergies() {
  return (
    <div id="Sublingual-Immunotherapy-for-Pet-Allergies">
      <h1>Sublingual Immunotherapy for Pet Allergies</h1>
      <div style={{ display: "flex" }}>
        <img
          src="/YellowSyringes.avif"
          alt="imgx"
          style={{ width: "50%", padding: "1rem", borderRadius: "2rem" }}
        />
        <img
          src="/YellowSyringes.avif"
          alt="imgy"
          style={{ width: "50%", padding: "1rem", borderRadius: "2rem" }}
        />
      </div>
      <div
        style={{
          marginTop: "2rem",
          fontSize: "1.1rem",
          lineHeight: 1.6,
          padding: "0 4rem",
        }}
      >
        <p>
          Allergy drops, also known as sublingual immunotherapy drops, can be
          used to treat{" "}
          <a
            href="https://getcurex.com/blog-posts/8-important-things-to-know-about-allergy-shots-for-dog-allergies"
            target="_blank"
            rel="noopener noreferrer"
          >
            dog allergies
          </a>
          . This treatment works by gradually exposing the immune system to
          small, controlled doses of dog Sublingual immunotherapy is a method
          utilized to manage{" "}
          <a
            href="https://getcurex.com/pets"
            target="_blank"
            rel="noopener noreferrer"
          >
            pet allergies
          </a>{" "}
          by desensitizing the body's immune response to pet dander, saliva, or
          urine. It involves administering small amounts of these allergens
          under the tongue, gradually training the immune system to tolerate
          them without triggering an allergic reaction. This approach aims to
          reduce allergic symptoms, such as sneezing, itching, or nasal
          congestion, associated with exposure to pets.
        </p>
        <br />
        <p>
          Individuals suffering from pet allergies can benefit from sublingual
          immunotherapy, which is a convenient and less invasive alternative to
          traditional allergy shots. This treatment is typically prescribed by
          allergists and involves a personalized treatment plan designed to
          address specific pet allergens.
        </p>
        <br />
        <p>
          By consistently exposing the body to small, controlled amounts of pet
          allergens, sublingual immunotherapy helps the immune system build
          tolerance over time. Patients can conveniently self-administer the
          treatment at home, following the prescribed dosage and schedule.
        </p>
        <br />
        <p>
          It's important to consult with a healthcare professional to determine
          if sublingual immunotherapy is suitable for managing pet allergies, as
          its effectiveness can vary based on individual factors. Nonetheless,
          this method has shown promise in reducing the severity of allergic
          reactions to pets, offering potential relief to allergy sufferers.
        </p>
      </div>
      <DescCard
        heading="Does Sublingual Immunotherapy Treat Food Allergies?"
        desc={
          <>
            <p>
              Sublingual immunotherapy (SLIT) is a treatment approach for food
              allergies involving the placement of a small amount of liquid
              containing food allergens under the tongue for a few minutes. This
              exposure aims to help the body develop tolerance to specific foods
              by introducing these allergens to cells in the lining of the
              mouth.
            </p>
            <p>
              Effective for various food allergies such as kiwi, peanut,
              hazelnut, milk, and peach, SLIT is a viable option. However,
            </p>
          </>
        }
        imgSrc={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              borderRadius: "2rem",
              overflow: "hidden",
            }}
          >
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/sy50XD_1gNA?si=1JTFzmcHz65nzQ6f"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        }
        imagePosition="right"
        id="Does-Sublingual-Immunotherapy-Treat-Food-Allergies"
      />
      <div
        id="Does-Sublingual-Immunotherapy-Treat-Food-Allergies-desc"
        style={{
          marginTop: "2rem",
          fontSize: "1.1rem",
          lineHeight: 1.6,
          padding: "0 4rem",
        }}
      >
        <p>
          it's not as widely used as treatments for airborne allergies, and
          there's comparatively less research supporting its effectiveness when
          compared to oral immunotherapy (OIT). While SLIT hasn't received
          official approval in the United States for food allergies, ongoing
          research continues in this area. The FDA has approved Palforzia, an
          OIT tablet for peanut allergies, but its administration is limited to
          medical facilities due to higher dosage and frequent allergic
          reactions.
        </p>
        <br />
        <p>
          In contrast, evidence suggests that SLIT for food allergies may offer
          a safer and more gradual tolerance build-up than OIT. However, the
          trade-off is a longer treatment duration, typically spanning 18-24
          months, compared to the 9-month timeline for OIT.
        </p>
      </div>
      <DescCard
        heading="Sublingual Immunotherapy Reviews"
        desc={
          <>
            <p>
              Clients commonly appreciate sublingual immunotherapy for its
              convenience, user-friendliness, and portability. The process
              usually encompasses an initial build-up stage and later
              transitions into a maintenance phase. Although some individuals
              might encounter mild and transient side effects, these are
              generally temporary and of mild intensity.
            </p><br />
            <p>
              The majority of users notice positive effects within 3-6 months of
              commencing treatment. They maintain collaboration with their
              allergist to optimize the treatment's effectiveness progressively.
            </p>
          </>
        }
        imgSrc=""
        id="Sublingual-Immunotherapy-Reviews"
      />
    </div>
  );
}

export { PetAllergies };
