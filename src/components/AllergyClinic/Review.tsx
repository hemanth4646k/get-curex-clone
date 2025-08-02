
import './Review.css';

const CurexReview: React.FC = () => {
  return (
    <section className="curex-review" id="curex-allergy-review">
      <div className="curex-container">
        {/* Title */}
        <h1 className="curex-title">
          Curex Allergy Review
        </h1>
        
        {/* Hero Image Section */}
        <div className="curex-hero">
          <div className="curex-decorative-element"></div>
          <img 
            src="" 
            alt="Hands holding Curex allergy product with yellow background and decorative elements" 
            className="curex-hero-image"
          />
        </div>
        
        {/* Content Paragraphs */}
        <div className="curex-content">
          <p className="curex-paragraph">
            Curex is your go-to online allergy clinic specializing in sublingual immunotherapy—revolutionizing allergy 
            management with affordable, convenient, and time-saving solutions. Join the 50,000 delighted users who've 
            experienced real relief through Curex Allergy Drops.
          </p>
          
          <p className="curex-paragraph">
            Curex prioritizes your budget with cost-effective alternatives to traditional allergy shots. Sublingual 
            immunotherapy seamlessly integrates into your schedule, eliminating the need for frequent clinic visits. 
            Convenience is key, allowing you to take allergy drops anytime, anywhere, without sacrificing efficacy.
          </p>
          
          <p className="curex-paragraph">
            Backed by medical experts, Curex is more than just a product; it's a trusted solution to allergies. Our team of 
            dedicated doctors supports our mission to provide accessible relief. Exceptional customer service is our 
            commitment, ensuring your journey to allergy freedom is guided and supported.
          </p>
        </div>
        
        {/* CTA Button */}
        <div className="curex-cta">
          <button className="curex-button">
            Explore Real Patient Stories
          </button>
        </div>
      </div>
    </section>
  );
};
const WyndlyReview: React.FC = () => {
  return (
    <section className="wyndly-review" id='wyndly-review'>
      <div className="wyndly-container" >
        {/* Title */}
        <h1 className="wyndly-title">
          Wyndly Review
        </h1>
        
        {/* Hero Image Section */}
        <div className="wyndly-hero">
          <img 
            src="" 
            alt="Wyndly allergy products - blue bottles with white droppers and white container with blue W logo" 
            className="wyndly-hero-image"
          />
        </div>
        
        {/* Content Paragraphs */}
        <div className="wyndly-content">
          <p className="wyndly-paragraph">
            In a world where millions struggle with seasonal and indoor allergies, finding the right allergy immunotherapy 
            solution is crucial. Curex emerges as the top choice for accessible and effective relief, offering a 
            comprehensive approach to allergy management.
          </p>
          
          <p className="wyndly-paragraph">
            While Wyndly positions itself as the premier at-home allergy treatment, Curex leads with a holistic range of 
            services, including allergy, asthma, eczema, and more.
          </p>
          
          <p className="wyndly-paragraph">
            Curex's approach extends beyond singular allergy care, addressing diverse health needs for a well-rounded 
            approach. Curex ensures inclusivity across various aspects of health specializing in immunotherapy.
          </p>
          
          <p className="wyndly-paragraph">
            While Wyndly emphasizes 24/7 expert doctor support, Curex speaks with a dedicated and committed 
            team of doctors and clinicians providing top-notch care for a holistic patient experience. Unlike Wyndly's 
            doctor-exclusive model, Curex combines expertise and empathy for comprehensive support.
          </p>
          
          <p className="wyndly-paragraph">
            Addressing FDA concerns, Wyndly claims they are FDA approved. However, no clinical studies have yet been 
            conducted on allergy drops or allergy shots with multiple allergies, allergy shots have been "grandfathered in" due to their 
            widespread use since the 1920s and have not established safety and efficacy. On the other hand, allergy 
            drops, introduced in the 1990s and despite being administered to millions of patients worldwide, remain 
            unapproved by the FDA. At Curex, we prioritize the safety and legitimacy of our allergy care, constantly striving 
            to meet and exceed healthcare standards.
          </p>
          
          <p className="wyndly-paragraph">
            In conclusion, while Wyndly positions itself as a Curex competitor, Curex stands out for its comprehensive and 
            inclusive approach to allergy management. Our commitment to user satisfaction, safety, and a diverse range 
            of wellness services makes Curex the preferred choice for those seeking lifelong relief from indoor and 
            outdoor allergy symptoms. Discover the Curex difference and schedule your allergy consultation today.
          </p>
        </div>
      </div>
    </section>
  );
};
const AspireReview: React.FC = () => {
  return (
    <section className="aspire-review" id="aspire-review">
      <div className="aspire-container">
        {/* Title */}
        <h1 className="aspire-title">
          Aspire Allergy Review
        </h1>
        
        {/* Two Column Layout */}
        <div className="aspire-content">
          {/* Left Column - Image */}
          <div className="aspire-image-column">
            <img 
              src="" 
              alt="Aspire Allergy clinic building exterior with modern architecture and signage" 
              className="aspire-building-image"
            />
          </div>
          
          {/* Right Column - Text Content */}
          <div className="aspire-text-column">
            <p className="aspire-paragraph">
              Both Curex and Aspire Allergy offer the convenience of allergy drops from the 
              comfort of your home, eliminating the time typically spent at doctor's offices. 
              However, price plays a pivotal role when choosing the right allergy relief 
              solution, and here Curex emerges as the standout choice. Curex accepts all 
              major insurance providers, ensuring accessibility for a wider audience. With 
              Curex, you benefit from a low-cost plan at just $59 per month, plus applicable 
              copays, ensuring affordability without sacrificing quality or dosing structure. On the other 
              hand, Aspire Allergy has offices across the country where it provides services 
              to patients in person. The pricing may vary depending on the complexity of the 
              patient's allergies. Curex proudly accepts all major insurance providers, 
              ensuring accessibility for a broader range of customers. At a thousand dollars per can 
              enjoy the benefits of our low-cost plan at just $59 per month, plus applicable 
              copays, providing an affordable and transparent pricing structure. At Curex, 
              our commitment extends beyond affordability, we prioritize phenomenal 
              customer support to guide you through your allergy relief journey. When 
              comparing Curex and Aspire Allergy, it's important to determine what's better 
              for you. Curex is committed to providing accessible and reliable allergy care 
              with outstanding customer support over telemedicine. Discover the Curex 
              advantage today for a seamless and affordable allergy treatment experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
const QuelloReview: React.FC = () => {
  return (
    <section className="quello-review">
      <h1 className="quello-title">Quello Reviews</h1>
      <div className="quello-container side-by-side">
        {/* Side-by-side layout: image left, content right */}
        <div className="quello-hero side-image">
          <img
            src=""
            alt="Three Quello allergy drops bottles - green containers with white droppers for Summer, Fall, and Winter seasons"
            className="quello-hero-image"
          />
        </div>
        <div className="quello-content side-content">
          <p className="quello-paragraph">
            Both Curex and Quello offer innovative sublingual allergy drops, providing a
            convenient alternative to traditional allergy shots. While both companies aim to
            simplify allergy management, there are significant differences in their services.
          </p>
          <p className="quello-paragraph">
            Curex distinguishes itself with transparent pricing, offering treatments at a low,
            fixed monthly rate. This clear pricing eliminates surprises and makes it
            easier for patients to budget for their allergy care. In contrast, Quello does not
            provide transparent pricing details upfront, which can be a concern for those
            who prefer knowing costs early in their treatment planning.
          </p>
          <p className="quello-paragraph">
            Moreover, Curex boasts broad insurance coverage and is accessible in all 50
            states, offering greater flexibility and accessibility regardless of your location.
            On the other hand, Curex currently operates in just 12 states, which may limit
            availability for many potential users.
          </p>
          <p className="quello-paragraph">
            Another area where Curex excels is in patient support. Curex provides a
            comprehensive support system, including regular follow-ups with allergists to
            ensure treatment plans are effective and adjusted as necessary. This proactive
            approach to patient care helps to foster better outcomes and a more
            personalized healthcare experience. For those seeking a reliable and
            expansive service in allergy treatment, Curex offers clear advantages over
            Quello, making it a preferred choice for many allergy sufferers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default function Review() {
  return (
    <div className="flex justify-center items-center ">
      <CurexReview/>
      <WyndlyReview/>
      <AspireReview/>
      <QuelloReview/>
    </div>
  );
}