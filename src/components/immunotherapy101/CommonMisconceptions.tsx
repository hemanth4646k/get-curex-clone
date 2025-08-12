
import "./CommonMisconceptions.css";

const CommonMisconceptions = () => {
  return (
    <section id="common-misconceptions" className="new--section">
      <div className="new--container is--flex-center smaller faq">
        <div className="faq-wrapper">
          <h2 id="what-is-immunotherapy" className="section--heading misconceptions-heading">
            Common Misconceptions
          </h2>

          <div className="misconception-yellow-box">
            <p className="misconception-myth">
              <strong>Myth: “Immunotherapy is not any different than allergy meds.”</strong>
            </p>
            <hr className="misconception-divider" />
            <p className="misconception-fact">
              <strong>Fact:</strong> Allergy meds are advertised to provide relief for up to 24 hours, but they only mask the symptoms. Allergy immunotherapy on the other hand, treats the source of allergies for long-term relief.<br /><br />
              Another key difference is, immunotherapy utilizes clinical-grade allergen extracts unlike common medications which make use of chemical compounds to temporarily mask symptoms.
            </p>
          </div>

          <div className="misconception-yellow-box">
            <p className="misconception-myth">
              <strong>Myth: Allergy immunotherapy is considered a “homeopathic treatment”.</strong>
            </p>
            <hr className="misconception-divider" />
            <p className="misconception-fact">
              <strong>Fact: </strong>
              Immunotherapy has been studied rigorously with many clinical trials and peer-reviewed research proving its efficacy.
            </p>
          </div>

          <div className="misconception-yellow-box">
            <p className="misconception-myth">
              <strong>Myth: “It’s okay to suffer from allergies. I don’t really need a treatment THAT much.”</strong>
            </p>
            <hr className="misconception-divider" />
            <p className="misconception-fact">
              <strong>Fact: </strong>
              Allergies, if untreated, can lead to chronic respiratory health issues such as asthma, or skin disorders like eczema.<br /><br />
              It’s also been shown that allergies are the #1 reason people miss work or school. Studies have also shown that students who suffer from allergies receive worse grades than their peers.<br /><br />
              Treating the source of allergies can not only improve the quality of life, but help your professional and academic performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonMisconceptions;
