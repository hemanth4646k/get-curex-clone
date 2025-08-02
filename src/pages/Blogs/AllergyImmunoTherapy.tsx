
import React from 'react';
import './BlogContent.css';
import BlogHero from '../../common/ui/BlogHero';

const AllergyImmunotherapyBlog: React.FC = () => {
  return (
    <div>
      <BlogHero
        imgSrc="/dandelion.avif" // Update with actual image path in public folder
        imgAlt="Close-up of a dandelion seedhead with delicate white seeds ready to be blown away, representing allergy triggers in nature"
        date="May 9, 2022"
        title="Allergy immunotherapy: Everything you Need to Know"
      />
      {/* Main Content */}
      <section className="blog-main-content">
        <div className="blog-content-block">
          <p>Allergy immunotherapy treats the root cause of seasonal allergies by reducing the body's reactivity to allergens.</p>
          <p>Immunotherapy introduces small amounts of allergens to the system, allowing the body to build a tolerance to pollen, ragweed, <a href="https://getcurex.com/allergy/how-to-reduce-your-pet-allergies" target="_blank" rel="noopener noreferrer">pet dander</a> and more.</p>
          <p>Find out how to treat your allergies using immunotherapy, the different types of immunotherapy and how immunotherapy differs from other types of allergy treatments.</p>
        </div>

        <h2 className="blog-section-title">What is allergy immunotherapy?</h2>
        <div className="blog-content-block">
          <p>Allergy immunotherapy is the repeated introduction of medical-grade allergens into the system, building the body's tolerance and decreasing its reactivity to allergens.</p>
          <p>The goal is to provide long-term relief of symptoms and improve the quality of life during natural allergen exposure. Treatment is customized to each patient's needs based on medical history, test results and lifestyle needs.</p>
          <p>Two types of immunotherapy are available, including subcutaneous allergy injections and sublingual oral allergy therapy. Both address the symptoms of <a href="https://getcurex.com/allergy/what-are-allergies-and-how-to-get-relief" target="_blank" rel="noopener noreferrer">seasonal allergies</a> and environmental allergies; yet, both are administered very differently.</p>
        </div>

        <h3 className="blog-subsection-title">Subcutaneous Immunotherapy</h3>
        <div className="blog-content-block">
          <p>Possibly the most “well-known” type of immunotherapy is subcutaneous immunotherapy — otherwise known as allergy shots or allergy injections.</p>
          <p>This type of allergen immunotherapy is offered at a doctor's office, as injection allergy treatments aren't available for at-home use.</p>
          <p>Instead, you'll need to head to a doctor's office once a week to get your allergy shot. The good news is that <a href="https://yalehealth.yale.edu/more/allergy-shots-what-you-need-know" target="_blank" rel="noopener noreferrer">many subcutaneous immunotherapy patients start to feel relief from allergy symptoms within 6 to 10 months of beginning treatment</a>. This phase is called the “build-up phase,” as your body is starting to build up a tolerance for specific allergens.</p>
          <p>Generally, patients will need to continue to visit their doctor for shots for up to three to five years. Even if symptoms have dissipated (or even disappeared), most medical professionals recommend continuing treatments to ensure symptoms don't return.</p>
        </div>

        <h3 className="blog-subsection-title">Sublingual Oral Immunotherapy</h3>
        <div className="blog-content-block">
          <p>In the U.S., sublingual oral immunotherapy isn't a household phrase. Unlike allergy shots, oral allergy immunotherapy isn't as popular (though this form of treatment has been popular throughout Europe for many years).</p>
          <p>Sublingual oral immunotherapy is effective, convenient, affordable and accessible. Unlike subcutaneous immunotherapy, sublingual immunotherapy can be taken either at home or in a doctor's office, as it's administered underneath the tongue — and not by injection.</p>
        </div>

        <h2 className="blog-section-title">Immunotherapy Vs Other Allergy Medications</h2>
        <div className="blog-content-block">
          <p>Immunotherapy works differently from other allergy medications.</p>
          <p>The biggest difference between the two types of treatment is that allergy medications generally treat the <em>symptoms</em> of allergies, while immunotherapy treats the <em>root cause</em> of allergy symptoms.</p>
          <p>While it doesn't promise to banish allergy symptoms altogether, <a href="https://www.sciencedirect.com/science/article/abs/pii/S0091674913002595" target="_blank" rel="noopener noreferrer">immunotherapy has proven effective in reducing symptoms in allergy sufferers by addressing the cause of allergic reactions</a>.</p>
          <p>The most common types of allergy medications include antihistamines, nasal steroids and saline sprays.</p>
        </div>

        <h3 className="blog-subsection-title">Antihistamines</h3>
        <div className="blog-content-block">
          <p>Allergy medications such as antihistamines (e.g. Benadryl, Zyrtec, Claritin, etc.) treat the symptoms of allergic reactions — but don't address the cause of allergy symptoms.</p>
          <p>These drugs block histamines, a substance the body releases to protect itself from potentially harmful substances. In most cases, the body is doing exactly what it should! Antihistamines regulate pain management, mood and <a href="https://getcurex.com/allergy/allergies-and-sleep" target="_blank" rel="noopener noreferrer">sleep</a> cycles (amongst other bodily functions).</p>
          <p>Yet, too much antihistamine release can also cause inflammation, itching, redness, swelling and other uncomfortable symptoms related to allergic reactions.</p>
          <p>While antihistamines are relatively effective at reducing the symptoms of allergies, they themselves come with a long list of side effects, including drowsiness, dry mouth, increased heart rate and low blood pressure.</p>
          <p>Plus, you need to continue to take antihistamines indefinitely (depending on the severity of your allergies).</p>
        </div>

        <h3 className="blog-subsection-title">Nasal Steroids</h3>
        <div className="blog-content-block">
          <p>Another class of allergy medications, nasal steroids (e.g., Flonase, etc.), can provide short-term relief in symptoms by treating the body's response to the allergic reaction.</p>
          <p>Steroids are essentially chemically engineered adrenal hormones. Instead of blocking histamines, these medications simply reduce inflammation in the nasal passages.</p>
          <p>Steroids are convenient (and in many cases don't require a prescription). But just as with antihistamines, steroid effectiveness and side effects vary from patient to patient.</p>
        </div>

        <h3 className="blog-subsection-title">Immunotherapy</h3>
        <div className="blog-content-block">
          <p>Immunotherapy is a prescription treatment — supervised by a clinician — that aims to avoid an immune response to allergens in the first place.</p>
          <p>This type of prescription medication trains the immune system to respond to specific allergens as it would any other non-harmful airborne particle.</p>
          <p>Thus, it improves symptoms by treating the source of the problem and can decrease the need for ongoing medication. In some cases, patients may no longer need ongoing medication at all (though results vary from person to person).</p>
          <p>It has been used by physicians in the U.S. and Europe for more than 100 years and has helped millions of patients.</p>
        </div>

        <h2 className="blog-section-title">How does immunotherapy work?</h2>
        <div className="blog-content-block">
          <p>Like many prescription treatments, <a href="https://acaai.org/allergies/allergy-treatment/allergy-immunotherapy" target="_blank" rel="noopener noreferrer">allergy immunotherapy</a> is a three-step process that includes diagnosis, prescription and treatment.</p>
          <p>The biggest difference between subcutaneous and sublingual allergy therapy is the way the treatments are administered. Allergy shots are administered in person by a doctor, whereas some sublingual therapies may be administered at home.</p>
        </div>

        <h3 className="blog-subsection-title">Diagnosis</h3>
        <div className="blog-content-block">
          <p>Before a medical professional can provide a treatment plan for patients, the exact allergies should be diagnosed. Many allergies share symptoms with other medical conditions, so it's important to know which symptoms are caused by specific allergies before doctors can make a clear diagnosis.</p>
          <p>Patients can get tested at a doctor's office, allergist, or testing lab. <a href="https://getcurex.com/allergy-treatment/allergy-test" target="_blank" rel="noopener noreferrer">At-home allergy testing</a> is now also available through Curex.</p>
          <p>Our at-home kit can test for up to 40 indoor and outdoor allergens and requires only a small finger prick and an online consultation to complete the analysis.</p>
          <p>Simply follow the instructions included in the kit, mail your sample to the lab and chat with a clinician from your mobile device or laptop.</p>
          <p>Regardless of whether you opt for an at-home testing kit or an in-person blood test or skin scratch test, a clinician will need to evaluate your medical history and symptoms before making a diagnosis.</p>
        </div>

        <h3 className="blog-subsection-title">Prescription</h3>
        <div className="blog-content-block">
          <p>If you're opting for allergy shots, you'll need to make weekly appointments with a doctor or allergist for ongoing rounds of subcutaneous therapy.</p>
          <p>Patients receiving at-home sublingual therapy will receive a customized prescription to target specific allergies each month. Oral immunotherapy needs to be administered every day (often in the morning after brushing). Through the Curex platform, you will receive prescriptions on a quarterly basis.</p>
          <p>The first treatment is administered via a telehealth appointment so the clinician can offer instruction and answer any questions on how oral immunotherapy works. Clinicians may monitor patients throughout the first treatment to keep an eye out for any side effects.</p>
        </div>

        <h3 className="blog-subsection-title">Treatment</h3>
        <div className="blog-content-block">
          <p>Immunotherapy is exposure therapy in which the patient is exposed to tiny medical-grade allergens over a long period of time. The immune system is thus trained not to overreact to the allergen.</p>
          <p>Essentially, the patient gets inoculated, similar to a vaccination.</p>
        </div>

        <h2 className="blog-section-title">Allergy Immunotherapy Benefits</h2>
        <div className="blog-content-block">
          <p>Allergy immunotherapy offers two main benefits, including reducing allergy symptoms and decreasing the amount of allergy medication needed to treat symptoms.</p>
        </div>

        <h3 className="blog-subsection-title">Reduce Allergy Symptoms</h3>
        <div className="blog-content-block">
          <p>The main benefit of immunotherapy is to reduce allergy symptoms — at the root cause of the symptoms.</p>
          <p>Most other allergy medications treat symptoms only after such symptoms arise, meaning patients still experience itchy, swelling, redness and other issues.</p>
          <p>85% of patients that receive immunotherapy treatments for the recommended time frame (three to five years) find their allergies are reduced by 65%.</p>
          <p>Since immunotherapy treats the condition before symptoms arise, patients aren't constantly reaching for a short-term solution. This is by far the biggest benefit of this type of treatment.</p>
        </div>

        <h3 className="blog-subsection-title">Decrease Allergy Medication Use</h3>
        <div className="blog-content-block">
          <p>Another major benefit of immunotherapy is that most patients may be able to lower their dosages of allergy medication. And some patients may discover they don't need their antihistamines or nasal sprays at all anymore.</p>
          <p>While it's common for some patients to still use antihistamines and nasal sprays after starting immunotherapy treatments, they often find they're able to cut back on dosages.</p>
          <p>This means fewer side effects from antihistamines and steroids. Fewer medications can also lead to bigger savings, as the need for pricey prescriptions and OTC medications decreases.</p>
        </div>

        <h2 className="blog-section-title">Allergies Treated by Immunotherapy</h2>
        <div className="blog-content-block">
          <p>Immunotherapy is available through both in-person doctors and online medical professionals. If you prefer an allergy shot, you'll need to schedule an in-person appointment with an allergist.; if you want to try oral immunotherapy, you can connect with a physician through the Curex telehealth platform.</p>
        </div>

        <h3 className="blog-subsection-title">Allergies Treated by Online Medical Professionals</h3>
        <div className="blog-content-block">
          <p>Immunotherapy has a long history of successfully treating allergic rhinitis and conjunctivitis caused by environmental allergies.</p>
          <p>It can also improve allergy-triggered asthma, eczema and a variety of other allergy-related conditions. Commonly treated allergies include <a href="https://getcurex.com/allergy/what-are-pollen-allergies-and-how-do-you-treat-them" target="_blank" rel="noopener noreferrer">pollen</a>, dust, weeds, pets and mold.</p>
        </div>

        <h3 className="blog-subsection-title">Allergies Treated by In-Person Clinicians</h3>
        <div className="blog-content-block">
          <p>Allergies to food, bee and insect venom, medicine and chemicals can also be treated with immunotherapy but normally require in-person observation by a clinician.</p>
        </div>

        <h2 className="blog-section-title">Allergy Immunotherapy Side Effects</h2>
        <div className="blog-content-block">
          <p>Like many prescription treatments, allergy immunotherapy has a few side effects.</p>
          <p>The most common side effects of allergy shots are redness and swelling around the injection sites. Other side effects may include hives or the rate of anaphylaxis.</p>
          <p>All of these side effects are also shared by sublingual therapy — but, the odds of anaphylaxis with sublingual therapy are much lower. According to one 2017 study, “<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5644500/" target="_blank" rel="noopener noreferrer">Sublingual immunotherapy has a more favorable safety profile than subcutaneous immunotherapy</a>.”</p>
        </div>

        <h2 className="blog-section-title">Can I treat all of my allergies at once?</h2>
        <div className="blog-content-block">
          <p>Subcutaneous and Curex's sublingual immunotherapy allow the treatment of several allergens at once. Experienced clinicians combine the allergens in a treatment vial customized for each patient.</p>
          <p>Sublingual tablets treat one allergen at a time. The tablets that are currently FDA approved to treat dust mite (Odactra), ragweed (Ragwitek), Timothy grass (Grastek) and a 5-Grass Mixture (Oralair).</p>
        </div>

        <h2 className="blog-section-title">How much does immunotherapy cost?</h2>
        <div className="blog-content-block">
          <p>Immunotherapy treatment costs vary by location, provider and health insurance coverage. They start at around $900 per year and may rise up to $3,000 per year (depending on the type of treatment).</p>
        </div>

        <h3 className="blog-subsection-title">Subcutaneous Allergy Immunotherapy</h3>
        <div className="blog-content-block">
          <p>Costs vary depending on your location, doctor and health insurance carrier, but frequently patients pay about $2,000 per year for allergy injections.</p>
          <p>Allergy shots treatment coverage includes cat, dog, mold, dust mite, cockroach and pollen (trees, weeds, grasses) allergies.</p>
        </div>

        <h3 className="blog-subsection-title">Sublingual Allergy Immunotherapy</h3>
        <div className="blog-content-block">
          <p>Patients pay approximately $3,000 per year for most sublingual allergy immunotherapy treatments, (though again, this estimate may vary depending on location, doctor and health insurance carriers).</p>
          <p>Treatment coverage includes the Oralair-Pooideae grass subfamily (sweet vernal, orchard, perennial rye, Timothy and Kentucky bluegrass), grastek (Timothy grass), Ragwitek (ragweed) and Odactra (dust mite) allergies.</p>
        </div>

        <h3 className="blog-subsection-title">Curex Allergy Immunotherapy</h3>
        <div className="blog-content-block">
          <p>Curex has negotiated the following discounts for its patients (regardless of health insurance coverage or location) for <a href="https://getcurex.com/allergy-treatment/allergy-immunotherapy" target="_blank" rel="noopener noreferrer">allergy immunotherapy</a>:</p>
          <ul>
            <li>Quarterly Plan ($95/month): $285 billed every 3 months</li>
            <li>Annual Plan ($75/month or 20% off): $900 billed once per year</li>
            <li>3-Year Plan ($65/month or 30% off): $2,340 billed when treatment begins</li>
          </ul>
          <p>Curex plans include consultations with a Curex Medical provider, pharmacy fulfillment and Curex Inc. platform fees.</p>
          <p>Allergy treatment coverage includes cat, dog, mold, dust mite, cockroach and pollen (trees, weeds, grasses) allergies.</p>
        </div>

        <h2 className="blog-section-title">Is sublingual immunotherapy as effective as shots?</h2>
        <div className="blog-content-block">
          <p>Sublingual and subcutaneous immunotherapy are both proven to be effective ways to target the source of allergies. <a href="https://acaai.org/news/facts-statistics/allergies" target="_blank" rel="noopener noreferrer">They can reduce hay fever symptoms in 85% of allergic rhinitis patients</a>.</p>
          <p>Studies have shown the sublingual method to have a lower risk for anaphylaxis, allowing you to take them at home or while traveling. As a result, they are more convenient and generally more affordable.</p>
        </div>

        <h2 className="blog-section-title">Why haven't I heard of sublingual immunotherapy before?</h2>
        <div className="blog-content-block">
          <p><a href="https://www.worldallergyorganizationjournal.org/article/S1939-4551(19)30238-8/fulltext" target="_blank" rel="noopener noreferrer">Sublingual immunotherapy is prevalent in many countries</a>.</p>
          <p>For example, nearly <a href="https://www.worldallergyorganizationjournal.org/article/S1939-4551(19)30238-8/fulltext" target="_blank" rel="noopener noreferrer">90% of immunotherapy treatments in France are administered sublingually</a>. In the U.S., sublingual immunotherapy has existed for almost 40 years. It has historically had low adoption due to limited insurance coverage and no clear FDA approval. This changed recently when the FDA cleared several sublingual tablets after reviewing clinical data on efficacy and safety.</p>
          <p>In addition, most allergy clinics are highly experienced with in-person care required for allergy shots, but are less well suited to provide telemedicine supervision appropriate for sublingual immunotherapy.</p>
          <p>If you have seasonal allergies, you're in the right place. At Curex, we're committed to helping people who suffer from allergies with information, resources, best-in-class clinical care and allergy immunotherapy.</p>
        </div>
      </section>
    </div>
  );
};

export default AllergyImmunotherapyBlog;
