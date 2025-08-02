import './Hero2.css';
import './TextContent.css';

const TextContent: React.FC = () => {
  return (
    <section className="text-content">
      <div className="text-content-container">
        <div className="text-content-body">
          <p className="text-content-paragraph">
            Now, let's talk about treatments. Allergy shots, or immunotherapy, are one way to tackle those pesky allergies. These shots slowly get your body used to the allergen, making your reactions less severe over time. If shots aren't your thing, there's also Sublingual Immunotherapy (SLIT). This is a newer, easier method where you just put allergen drops under your tongue. It's way less hassle and not as scary as getting a shot.
          </p>
          
          <p className="text-content-paragraph">
            But it's not just about tests and treatments at these clinics. They're also awesome at teaching you about your allergies. They'll show you how to dodge triggers, manage symptoms, and use medications the right way. Speaking of meds, they can hook you up with the right ones, like antihistamines and decongestants, to keep those annoying symptoms at bay. So, if you're sneezing up a storm, have itchy eyes, or just can't seem to catch your breath, it's a good idea to pop into an allergy clinic. They'll help you get your allergies under control and make life a whole lot more comfortable.
          </p>
          
          <p className="text-content-paragraph">
            Below is a comprehensive review of the leading allergy clinics in the U.S.
          </p>
        </div>
      </div>
    </section>
  );
};


const Hero2: React.FC = () => {
  return (
    <div>
    <section className="hero2">
      <div className="hero2-container">
        <div className="hero2-content">
          <div className="hero2-text">
            <h1 className="hero2-title">
              The Best Allergy Clinic Near Me: Wyndly, Aspire Allergy or Nectar?
            </h1>
            <p className="hero2-description">
              Allergy clinics are your go-to places for anything allergy-related. These clinics 
              have expert allergists who know all about pinpointing the allergens that set off 
              your symptoms and crafting a plan to keep them in check. They offer a bunch 
              of services, starting with allergy testing. There are two main ways they do this: 
              skin prick tests and blood tests. Both are super helpful in figuring out exactly 
              what's bugging you.
            </p>
          </div>
          <div className="hero2-image">
            <img 
              src="" 
              alt="Hands holding essential oil bottles on yellow background" 
              className="hero2-img"
            />
          </div>
        </div>
      </div>
    </section>
      <TextContent />
    </div>
  );
};

export default Hero2;
