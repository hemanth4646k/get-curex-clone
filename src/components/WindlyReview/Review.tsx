import React from "react";
import "./Review.css";
import DescCard from "../../common/ui/DescCard";

const Review: React.FC = () => {
  return (
    <div className="reviews-container">
      {/* Decorative quotation marks */}
      <div className="quote-mark quote-mark-top-left"></div>
      <div className="quote-mark quote-mark-top-right"></div>
      <div className="quote-mark quote-mark-bottom-left"></div>
      <div className="quote-mark quote-mark-bottom-right"></div>

      {/* Review Cards */}
      <div className="reviews-grid">
        {/* Jessi's Review */}
        <div className="review-card review-card-blue">
          <div className="reviewer-info">
            <img src="" alt="Jessi profile" className="reviewer-photo" />
            <h3 className="reviewer-name">Jessi</h3>
          </div>
          <p className="review-text">
            "Curex has been so easy to work with. After taking allergy shots for
            years, drops are so much more convenient. The pricing is also so
            affordable (including the non-insurance option) compared to
            traditional shots and it's super conveniently all online. I
            recommend checking them out if you have allergies!"
          </p>
        </div>

        {/* Helen's Review */}
        <div className="review-card review-card-pink">
          <h3 className="reviewer-name">Helen</h3>
          <p className="review-text">
            "Curex has been so easy to work with. After taking allergy shots for
            years, drops are so much more convenient. The pricing is also so
            affordable (including the non-insurance option) compared to
            traditional shots and it's super conveniently all online. I
            recommend checking them out if you have allergies!"
          </p>
        </div>

        {/* Olyesa's Review (Left) */}
        <div className="review-card review-card-yellow">
          <h3 className="reviewer-name">Olyesa</h3>
          <p className="review-text">
            "I was amazed by the convenience and effectiveness of Curex online
            treatment. The best part was that there was no need for physical
            visits to the clinic. It is painless and hassle-free alternative to
            allergy shots. The customized online treatment plan helped me manage
            my allergies effectively and I see improvements already. I can
            highly recommend Curex for anyone who values their time and money
            and wants to get rid of their allergies."
          </p>
        </div>

        {/* Olyesa's Review (Right) */}
        <div className="review-card review-card-green">
          <div className="reviewer-info">
            <img src="" alt="Olyesa profile" className="reviewer-photo" />
            <h3 className="reviewer-name">Olyesa</h3>
          </div>
          <p className="review-text">
            "Allergies were ruining my life. Over the counter medicine wasn't
            working, especially on bad days. I was desperate for relief, but
            short on time. I saw an ad for Curex and instantly flocked to the
            website. I was amazed and quickly signed up. I couldn't believe how
            quick and painless it was to sign up, get tested, and get the
            results!"
          </p>
        </div>
      </div>

      {/* Read More Link */}
      <div className="read-more-container">
        <a href="#" className="read-more-link">
          Read More Verified Reviews
        </a>
      </div>
      <h1>How is Curex different from Wyndly and Others?</h1>
      <DescCard
        heading="Expert Specialized Care"
        desc={
          <>
            <p>
              Curex has the largest clinical team to serve all of our patients
              with care and personal attention. With board-certified allergists
              and medical professionals specializing in allergy & immunology,
              our expert providers are able to truly understand the extent of
              your allergies and recommend treatments that can treat them at the
              source.
            </p>
            <p>
              Another benefit of choosing Curex is the ability to reach your
              provider anytime you need via text, email, or phone. Questions
              about your treatment? Your assigned Curex provider is always a tap
              away!
            </p>
          </>
        }
        imgSrc=""
        imagePosition="right"
      />
      <DescCard
        heading="Curex Accepts Insurance"
        desc="With a growing network of insurance providers, Curex is the first online allergy clinic helping patients save money on their treatment. We have the most affordable immunotherapy options available in the market today as we try to make allergy care more accessible in the United States."
        imgSrc=""
      />
      <DescCard
        heading="Our Mission"
        imgSrc=""
        desc="We are not just another allergy clinic. Our goal since day one has been providing exceptional allergy care and making immunotherapy more accessible and convenient than ever. If you’ve tried shots or considered them, Curex will provide a much superior experience that is a lot more convenient than shots."
        imagePosition="right"
      />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '48px 0' }}>
        <div style={{ maxWidth: 900, width: '100%', textAlign: 'center' }}>
          <h1 style={{ marginBottom: 32 }}>Curex vs. Wyndly: Frequently Asked Questions</h1>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
            {/* FAQ Item 1 */}
            <div style={{ marginBottom: 8, fontWeight: 600, fontSize: 18 }}>Are allergy drops personalized?</div>
            <p style={{ marginTop: 0, marginBottom: 16 }}>
              Curex uses fully personalized treatment plans, customized to work for you. Wyndly uses premixed formulas that can be effective but do not take into account your specific symptoms history, geography and allergy test results.
            </p>
            <hr style={{ width: '100%', maxWidth: 700, margin: '16px auto' }} />
            {/* FAQ Item 2 */}
            <div style={{ marginBottom: 8, fontWeight: 600, fontSize: 18 }}>Are allergy drops natural?</div>
            <p style={{ marginTop: 0, marginBottom: 16 }}>
              Curex uses allergenic extracts <a href="https://getcurex.com/what-is-fda-approval">approved by the FDA</a> for <a href="https://getcurex.com/immunotherapy-101">allergy immunotherapy</a>. These allergenic extracts are natural and produced under supervision of botanists, farmers, scientists and medical professionals. The final products are evaluated by inspectors and regulators. Curex uses high quality supplier that doesn’t store allergenic extracts in phenol, a common preservative. Curex’s prescriptions are normally diluted in a natural glycerin preservative, which is safe and ensures stability of treatment for 6-12 months. Wyndly uses a supplier that uses phenol in treatments.
            </p>
            <hr style={{ width: '100%', maxWidth: 700, margin: '16px auto' }} />
            {/* FAQ Item 3 */}
            <div style={{ marginBottom: 8, fontWeight: 600, fontSize: 18 }}>Are there any differences between how Curex and Wyndly test for allergies?</div>
            <p style={{ marginTop: 0, marginBottom: 16 }}>
              Curex offers a much more accurate test at a lower price. We use a hospital-grade allergy testing technology ImmunoCAP that has been approved by the FDA for detection of IgE proteins and diagnosis of allergies. This technology is covered by most insurance plans and can be as little as $20 with Curex. Wyndly uses very cheap, non-FDA approved finger prick technology that has been self validated to receive CLIA certification. Because of the technology’s low sensitivity, test results are often inaccurate and either require retesting or result in inappropriate treatment. In addition, Wyndly charges $249 for this unreliable form of allergy test.
            </p>
            <hr style={{ width: '100%', maxWidth: 700, margin: '16px auto' }} />
            {/* FAQ Item 4 */}
            <div style={{ marginBottom: 8, fontWeight: 600, fontSize: 18 }}>How much are allergy drops?</div>
            <p style={{ marginTop: 0, marginBottom: 16 }}>
              Curex offers the most <a href="https://getcurex.com/blog-posts/allergy-immunotherapy-costs">affordable allergy immunotherapy</a> treatment in the U.S., currently just $59/month + copays for clinical visits. We are able to do that by aggregating demand from more than 50,000 users to reduce pharmacy costs, by using technology to make our clinical team much more efficient, and by working with insurance companies to cover allergy testing and consultation costs.
            </p>
            <hr style={{ width: '100%', maxWidth: 700, margin: '16px auto' }} />
            {/* FAQ Item 5 */}
            <div style={{ marginBottom: 8, fontWeight: 600, fontSize: 18 }}>Why customers pick Curex over Wyndly?</div>
            <p style={{ marginTop: 0, marginBottom: 16 }}>
              Curex is serving hundreds of patients who have started with Wyndly. These patients have picked Curex as the leader in allergy immunotherapy in the U.S. for our personalized treatment plans and most affordable prices.
            </p>
            <hr style={{ width: '100%', maxWidth: 700, margin: '16px auto' }} />
            {/* FAQ Item 6 */}
            <div style={{ marginBottom: 8, fontWeight: 600, fontSize: 18 }}>Are allergy drops covered by insurance?</div>
            <p style={{ marginTop: 0, marginBottom: 16 }}>
              Curex accepts most insurance plans and is growing its coverage every week. By using insurance to cover the cost of allergy testing and clinical consultations, Curex offers the most affordable allergy immunotherapy program in the U.S.
            </p>
            <hr style={{ width: '100%', maxWidth: 700, margin: '16px auto' }} />
            {/* FAQ Item 7 */}
            <div style={{ marginBottom: 8, fontWeight: 600, fontSize: 18 }}>How many allergies can allergy drops treat?</div>
            <p style={{ marginTop: 0, marginBottom: 16 }}>
              On average, patients are treated for 5-7 allergies at a time. However, Curex protocol can incorporate more than 10 allergens in a treatment. Please note, that for a clinical dosage to be effective — as supported by evidence based medicine — certain dosages are required, which limit how many go in.
            </p>
            <hr style={{ width: '100%', maxWidth: 700, margin: '16px auto' }} />
            {/* FAQ Item 8 */}
            <div style={{ marginBottom: 8, fontWeight: 600, fontSize: 18 }}>What are the best allergy drops?</div>
            <p style={{ marginTop: 0, marginBottom: 16 }}>
              Curex is the largest telemedicine provider of allergy immunotherapy in the U.S., with over 50,000 users. Not only do customers pick Curex over other allergy clinics, they give Curex rave reviews and stay through the full course of treatment at 3x the rate of the industry. The reason people are picking Curex is the convenience of using telemedicine/mail pharmacy service and lowest prices in the U.S.
            </p>
            <hr style={{ width: '100%', maxWidth: 700, margin: '16px auto' }} />
            {/* FAQ Item 9 */}
            <div style={{ marginBottom: 8, fontWeight: 600, fontSize: 18 }}>Do allergy drops really work?</div>
            <p style={{ marginTop: 0, marginBottom: 16 }}>
              <a href="https://getcurex.com/allergy-drops">Allergy drops</a> are standard of care in many countries around the world. In France, Italy and Spain, allergy drops account for as much as 90% of allergy immunotherapy treatments. This is a testament of decades of clinical studies that support high efficacy and low risk of such treatment.
            </p>
            <hr style={{ width: '100%', maxWidth: 700, margin: '16px auto' }} />
            {/* FAQ Item 10 */}
            <div style={{ marginBottom: 8, fontWeight: 600, fontSize: 18 }}>Are allergy drops FDA approved?</div>
            <p style={{ marginTop: 0, marginBottom: 16 }}>
              Allergy drops use the same allergenic extracts as <a href="https://getcurex.com/allergy-shots">allergy shots</a>. These allergenic extracts are indicated for allergy shots and certain single allergy sublingual tablets (e.g. Odactra, Grastek, Ragwitek, Oralair, etc.) Currently allergenic extracts have not been approved for personalized allergy drops and are prescribed off-label. Off-label prescriptions account for about 50% of all U.S. prescriptions and can be an effective treatment for patients who can’t use allergy shots or single-allergy tablets for their allergy immunotherapy needs.
            </p>
            <hr style={{ width: '100%', maxWidth: 700, margin: '16px auto' }} />
            {/* FAQ Item 11 */}
            <div style={{ marginBottom: 8, fontWeight: 600, fontSize: 18 }}>What allergies do allergies drops treat?</div>
            <p style={{ marginTop: 0, marginBottom: 16 }}>
              Immunotherapy is a custom treatment formulated based on your allergy profile, along with allergens you are exposed to where you live.<br /><br />This approach allows immunotherapy to treat a wide array of allergies. The most common ones we treat are: Tree Pollen, Dust Mites, Mold, Weed Pollen, Grass Pollen, Cockroaches, Cat Allergies, Dog Allergies. We do not prescribe immunotherapy for food allergies or food insensitivity.
            </p>
            <hr style={{ width: '100%', maxWidth: 700, margin: '16px auto' }} />
            {/* FAQ Item 12 */}
            <div style={{ marginBottom: 8, fontWeight: 600, fontSize: 18 }}>How long do you stay on allergy drops?</div>
            <p style={{ marginTop: 0, marginBottom: 16 }}>
              Training your immune system to stop overreacting to allergens is a relatively long process. The recommended treatment length is 3-5 years in order to achieve long-term relief. Studies have shown that this treatment length is optimal to help you stay symptom-free long after treatment is done.
            </p>
            <hr style={{ width: '100%', maxWidth: 700, margin: '16px auto' }} />
            {/* FAQ Item 13 */}
            <div style={{ marginBottom: 8, fontWeight: 600, fontSize: 18 }}>How long does it take for allergy drops to work?</div>
            <p style={{ marginTop: 0, marginBottom: 16 }}>
              Allergy immunotherapy starts working within the first 3-6 months in most people. If after the first 6 months you do not feel a noticeable improvement, our clinicians may reformulate your prescription to increase the strength or add new allergens for better performance.
            </p>
            <hr style={{ width: '100%', maxWidth: 700, margin: '16px auto' }} />
            {/* FAQ Item 14 */}
            <div style={{ marginBottom: 8, fontWeight: 600, fontSize: 18 }}>Are allergy drops safe?</div>
            <p style={{ marginTop: 0, marginBottom: 16 }}>
              Allergy drops are extremely safe with a superior safety profile compared to SCIT (Allergy Shots). The World Health Organization endorsed allergy drops as a safe alternative to allergy shots.<br /><br />While allergy shots can frequently cause systemic reactions such as anaphylaxis, most reactions with SLIT (allergy drops) are mild to moderate. With over a billion doses administered to date, there have been 0 fatalities.
            </p>
            <hr style={{ width: '100%', maxWidth: 700, margin: '16px auto' }} />
            {/* FAQ Item 15 */}
            <div style={{ marginBottom: 8, fontWeight: 600, fontSize: 18 }}>What is the success rate of allergy drops?</div>
            <p style={{ marginTop: 0, marginBottom: 16 }}>
              The success rate of immunotherapy is very high with 85% of patients reporting that their allergies were either eliminated or significantly reduced.
            </p>
            <hr style={{ width: '100%', maxWidth: 700, margin: '16px auto' }} />
            {/* FAQ Item 16 */}
            <div style={{ marginBottom: 8, fontWeight: 600, fontSize: 18 }}>Which allergy drops are best?</div>
            <p style={{ marginTop: 0, marginBottom: 16 }}>
              There are a few key considerations when it comes to where you get your allergy drops treatment from.<br /><br />1) Personalization: With Curex, as opposed to using standard mixes that may or may not include your specific allergens, we build and formulate your treatment from scratch. This means each formula is uniquely made for you and your allergies.<br /><br />2) Ingredients: Unlike most other providers such as Wyndly, Curex does not use phenol (a toxic compound used as a preservative). As a result, all Curex formulations include ingredients that are 100% natural, including the allergen extracts as well as the plant-based glycerin to make the solution.<br /><br />3) Affordability: Curex offers the most affordable immunotherapy treatment in the market. In addition, we accept insurance helping patients save up to 50% on their treatment costs, bringing the monthly price down to only $59/month + copay for each required visit. Our self-pay plan is priced at $99/month with no additional charges or copays.<br />‍<br />Patients can save another 20% by taking advantage of our annual pricing options.
            </p>
            <hr style={{ width: '100%', maxWidth: 700, margin: '16px auto' }} />
            {/* FAQ Item 17 */}
            <div style={{ marginBottom: 8, fontWeight: 600, fontSize: 18 }}>Why are allergy drops cheaper than allergy shots?</div>
            <p style={{ marginTop: 0, marginBottom: 16 }}>
              Allergy shots require as many as 50 in-person visits per year, making them extremely inconvenient and expensive. Because of their superior safety profile, allergy drops do not require in-person doctor visits. With telemedicine, allergy drops require only up to 6 online visits with your provider per year, making them significantly cheaper.<br /><br />In addition, allergy shots are prepared by the individual allergists who do not have the scale to formulate them cost-effectively. Curex aggregates demand from more than 50,000 users in the United States, which results in a very efficient cost structure for allergy immunotherapy. Curex passes on the savings directly to the patients.<br /><br />Researchers who compared allergy shots to allergy drops found that drops are the more cost-effective option when looking at success rates, how well the patients stuck with the treatments as well as insurance costs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
