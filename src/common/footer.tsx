import React from 'react';

// Extracted Footer component (and its helper components) from NewHome.tsx

export const Footer: React.FC = () => (
  <section className="footer_component">
    <div className="footer_wrapper">
      <div className="footer-row">
        <a
          href="/"
          aria-current="page"
          className="w-inline-block w--current"
        >
          <img
            src="/HomePage_files/66f641850d56b153c380c52b_curex-logo-white.svg"
            loading="lazy"
            alt="Curex"
            className="footer-brand-logo"
          />
        </a>
        <div className="social-icons-grid">
          <SocialIcon href="https://www.crunchbase.com/organization/curex-allergy" src="/HomePage_files/6594870296737d016b73b932_cb.avif" alt="Crunchbase" />
          <SocialIcon href="https://www.linkedin.com/company/curex/" src="/HomePage_files/658da7f846e668ae22f51857_linkendin.avif" alt="LinkedIn" />
          <SocialIcon href="https://www.facebook.com/getcurex/" src="/HomePage_files/61bd1b71233cbf38da6f4e85_fb-white.svg" alt="Facebook" />
          <SocialIcon href="https://www.instagram.com/getcurex/" src="/HomePage_files/61bd1b7148425e0f11e635f3_instagram-white.svg" alt="Instagram" />
          <SocialIcon href="https://twitter.com/GetCurex" src="/HomePage_files/61bd1b719036ba854ec850cf_twitter-white.svg" alt="Twitter" />
            <SocialIcon href="https://www.youtube.com/@getcurex" src="/HomePage_files/65948a637bc577f0c80237f1_ttt.avif" alt="YouTube" />
          <SocialIcon href="https://www.tiktok.com/@getcurex?_t=8ihxGwRAdKC&_r=1" src="/HomePage_files/659489d71110eb75f1a75ba3_tiktok.avif" alt="TikTok" />
        </div>
      </div>
      <div className="footer-row">
        <div className="footer-grid">
          <div className="footer-grid-col footer-logo-col">
            <div className="certified_logo">
              <a
                href="/quiz"
                className="footer-link button-footer w-inline-block"
              >
                <div className="text-button">Start With a Free Quiz</div>
              </a>
              <a href="/services" className="footer-link w-inline-block">
                <div>Curex for Doctors</div>
              </a>
              <a href="/affiliate" className="footer-link w-inline-block">
                <div>Curex for Affiliate Partners</div>
              </a>
              <a href="/employers" className="footer-link w-inline-block">
                <div>Curex for Employers</div>
              </a>
              <a
                href="https://www.legitscript.com/websites/?checker_keywords=getcurex.com"
                className="footer-link w-inline-block"
              >
                <div className="footer_badge-legitscript w-embed w-script" />
              </a>
            </div>
          </div>
          <div className="footer-grid-col">
            <div className="footer-label">Learn</div>
            <FooterLink href="/immunotherapy101" text="Immunotherapy 101" />
            <FooterLink href="/immuno-science" text="Allergy Immunotherapy Science" />
            <FooterLink href="/allergy-drops" text="Allergy Drops" />
            <FooterLink href="/allergy-shots" text="Allergy Shots" />
            <FooterLink href="/allergy-clinic" text="Allergy Clinic" />
            <FooterLink href="/allergy-medicine" text="Allergy Medicine" />
            <FooterLink href="/allergy-testing" text="Allergy Testing" />
          </div>
          <div className="footer-grid-col">
            <FooterLink href="/blog-posts/allergy-immunotherapy" text="Allergy Immunotherapy" />
            <FooterLink href="/blog-posts/allergy-immunotherapy-costs" text="Allergy Immunotherapy Costs" />
            <FooterLink href="/food" text="Food Allergy Immunotherapy" />
            <FooterLink href="/blog-posts/cat-allergies" text="Cat Allergy Immunotherapy" />
            <FooterLink href="/sublingual-immunotherapy" text="Sublingual Immunotherapy" />
            <FooterLink href="/wyndly-reviews" text="Wyndly Reviews" />
            <FooterLink href="/reviews" text="Online Reviews" />
            <FooterLink href="/about" text="About Curex" />
            <FooterLink href="/blogs" text="Blog" />
            <FooterLink href="/blogs/cities" text="Cities" />
            <FooterLink href="/blogs/allergens" text="Allergens" />
            <FooterLink href="/blogs/faqs" text="FAQ" />
            <FooterLink href="/blogs/allergy-immunotherapy-insights-research" text="Allergy Immunotherapy Insights & Research" />
            <FooterLink href="/blogs/insurance-directory" text="Insurance Directory" />
            <FooterLink href="/blogs/drug-reviews" text="Drug reviews" />
            <FooterLink href="/blogs/food-allergens" text="Food Allergens" />
            <FooterLink href="/blogs/allergy-symptoms" text="Allergy Symptoms" />
            <FooterLink href="/blogs/weight-loss-drugs" text="Weight Loss Drugs" />
            <FooterLink href="/blogs/diabetes-blog" text="Diabetes Blog" />
            <FooterLink href="/blogs/beauty-products-allergens" text="Beauty Products Allergens" />
            <FooterLink href="/blogs/pet-allergy-drugs-101" text="Pet Allergy Drugs 101" />
            <FooterLink href="/blogs/exercises-for-weight-loss" text="Exercises for Weight Loss" />
          </div>
          <div className="footer-grid-col">
            <div className="footer-label">Contact</div>
            <p className="footer-text">Call/text us at:</p>
            <a href="tel:(857)240-1080" className="text-style-link text-color-white">
              (857) 240-1080
            </a>
            <p className="footer-text second">Email us at:</p>
            <a href="mailto:hi@getcurex.com" className="text-style-link text-color-white">
              hi@getcurex.com
            </a>
            <p className="footer-text second">
              777 Brickell Ave #500-95053
              <br />
              Miami, FL 33131
            </p>
          </div>
        </div>
      </div>
      <div className="footer-row m-b-0">
        <div className="text-footer">
          Curex provides{" "}
          <a href="https://getcurex.com/plans/prevention" className="text-style-link text-color-white">
            allergy care plans
          </a>{" "}
          for{" "}
          <a href="https://getcurex.com/conditions/allergies" className="text-style-link text-color-white">
            allergies
          </a>,{" "}
          <a href="https://getcurex.com/conditions/asthma" className="text-style-link text-color-white">
            asthma
          </a>,{" "}
          <a href="https://getcurex.com/conditions/eczema" className="text-style-link text-color-white">
            eczema
          </a>{" "}
          and{" "}
          <a href="https://getcurex.com/pets" className="text-style-link text-color-white">
            pet allergies
          </a>. <br />
          <br />
          Curex providers may prescribe{" "}
          <a href="https://getcurex.com/blog-posts/allergy-drops-a-complete-guide-to-sublingual-immunotherapy" className="text-style-link text-color-white">
            sublingual allergy drops
          </a>{" "}
          that contain the same ingredients as allergy shots but are more convenient &amp; affordable.
          <br />‍<br />
          Curex-affiliated medical practices are independently owned and operated by licensed physicians who provide services using the Curex telehealth platform.
          <br />
          <br />
          Compounded medications have not been approved by the FDA and the FDA has not evaluated their safety or efficacy.
          <br />
          <br />
          <span className="footer-credits-year">2024</span> Curex, Inc. All rights reserved.
        </div>
      </div>
    </div>
  </section>
);

interface SocialIconProps {
  href: string;
  src: string;
  alt: string;
}
const SocialIcon: React.FC<SocialIconProps> = ({ href, src, alt }) => (
  <div className="social-icon-item">
    <a href={href} className="social-link w-inline-block">
      <img
        src={src}
        loading="lazy"
        alt={alt}
        className="social-icon"
      />
    </a>
  </div>
);

interface FooterLinkProps {
  href: string;
  text: string;
  hidden?: boolean;
}
const FooterLink: React.FC<FooterLinkProps> = ({ href, text, hidden }) => (
  <a href={href} className={`footer-link${hidden ? ' hidden' : ''}`}>
    <div>{text}</div>
  </a>
);

export default Footer;
