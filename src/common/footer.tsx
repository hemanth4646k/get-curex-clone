import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = {
    column1: [
      { text: 'Start With A FREE CALL', href: '#', highlight: true },
      { text: 'Curex for Employers', href: '#' },
      { text: 'Curex for Affiliate Partners', href: '#' },
      { text: 'Curex for Employers', href: '#' }
    ],
    column2: [
      { text: 'Learn', href: '#' },
      { text: 'Immunotherapy 101', href: '/immunotherapy101', isInternal: true },
      { text: 'Allergy Immunotherapy Science', href: '/immuno-science', isInternal: true },
      { text: 'Allergy Drops', href: '/allergy-drops', isInternal: true },
      { text: 'Allergy Shots', href: '/allergy-shots', isInternal: true },
      { text: 'Allergy Clinic', href: '/allergy-clinic', isInternal: true },
      { text: 'Allergy Medicine', href: '/allergy-medicine', isInternal: true },
      { text: 'Allergy Testing', href: '/allergy-testing', isInternal: true }
    ],
    column3: [
      { text: 'Allergy Immunotherapy', href: '/blog-posts/allergy-immunotherapy', isInternal: true },
      { text: 'Allergy Immunotherapy Costs', href: '/blog-posts/allergy-immunotherapy-costs', isInternal: true },
      { text: 'Food Allergy Immunotherapy', href: '#' },
      { text: 'Cat Allergy Immunotherapy', href: '/blog-posts/cat-allergies', isInternal: true },
      { text: 'Sublingual Immunotherapy', href: '/sublingual-immunotherapy', isInternal: true },
      { text: 'Wyndly Reviews', href: '/wyndly-reviews', isInternal: true },
      { text: 'Online Reviews', href: '#' },
      { text: 'About Curex', href: '#' },
      { text: 'Blog', href: '#' },
      { text: 'Clinic', href: '#' },
      { text: 'Allergens', href: '#' },
      { text: 'FAQ', href: '#' },
      { text: 'Allergy Immunotherapy Insights & Research', href: '#' },
      { text: 'Insurance Directory', href: '#' },
      { text: 'Drug wellness', href: '#' },
      { text: 'Food Allergens', href: '#' },
      { text: 'Allergy Symptoms', href: '#' },
      { text: 'Weight Loss Drugs', href: '#' },
      { text: 'Diabetes Blog', href: '#' },
      { text: 'Healthy Products Allergens', href: '#' },
      { text: 'Allergy Drugs 101', href: '#' },
      { text: 'Exercises for Weight Loss', href: '#' }
    ],
    column4: [
      { text: 'Contact', href: '#' },
      { text: 'Contact us at:', href: '#' },
      { text: '833-Get-CUREX', href: 'tel:833-438-2873' },
      { text: 'Email at:', href: '#' },
      { text: 'hello@getcurex.com', href: 'mailto:hello@getcurex.com' },
      { text: '77 Grand Ave #945 #6483', href: '#' },
      { text: 'Miami, FL 33101', href: '#' }
    ]
  };

  const legalLinks = [
    { text: 'PRIVACY POLICY', href: '#' },
    { text: 'TERMS OF USE', href: '#' },
    { text: 'INFORMED CONSENT', href: '#' },
    { text: 'WE COVID ALL EVENTS', href: '#' }
  ];

  const socialIcons = [
    { name: 'Discord', href: '#', icon: '🎮' },
    { name: 'Facebook', href: '#', icon: '📘' },
    { name: 'Instagram', href: '#', icon: '📷' },
    { name: 'Twitter', href: '#', icon: '🐦' },
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'YouTube', href: '#', icon: '📺' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Logo and First Column */}
          <div className="footer-column">
            <div className="footer-logo">
              <img src="/curex-logo-white.svg" alt="Curex" className="logo-image" />
            </div>
            <div className="footer-links">
              {footerLinks.column1.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  className={`footer-link ${link.highlight ? 'highlight' : ''}`}
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>

          {/* Learn Column */}
          <div className="footer-column">
            <div className="footer-links">
              {footerLinks.column2.map((link, index) => (
                link.isInternal ? (
                  <Link 
                    key={index} 
                    to={link.href} 
                    className="footer-link"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    {link.text}
                  </Link>
                ) : (
                  <a key={index} href={link.href} className="footer-link">
                    {link.text}
                  </a>
                )
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div className="footer-column">
            <div className="footer-links">
              {footerLinks.column3.map((link, index) => (
                <a key={index} href={link.href} className="footer-link">
                  {link.text}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div className="footer-column">
            <div className="footer-links">
              {footerLinks.column4.map((link, index) => (
                <a key={index} href={link.href} className="footer-link">
                  {link.text}
                </a>
              ))}
            </div>
            
            {/* Social Media Icons */}
            <div className="social-icons">
              {socialIcons.map((social, index) => (
                <a key={index} href={social.href} className="social-icon" aria-label={social.name}>
                  <span>{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="footer-legal">
          {legalLinks.map((link, index) => (
            <a key={index} href={link.href} className="legal-link">
              {link.text}
            </a>
          ))}
        </div>

        {/* Footer Bottom Text */}
        <div className="footer-bottom">
          <p className="footer-text">
            Curex provides SPECIALIZED SERVICES for allergy drops, personalized allergic medicines.
          </p>
          <p className="footer-text">
            Curex provides non personalized allergy drops that include the same ingredients as allergy shots but under a convenient at-home schedule.
          </p>
          <p className="footer-text">
            Curex receives consulting, licenses and investments and revenue, sponsored by the FDA and the FDA licensed medicines for adults and military.
          </p>
          <p className="footer-text">
            Personalized medicine related benefits sponsored by the FDA and the FDA licensed medicines for military.
          </p>
          <p className="footer-text">
            © 2024 Curex, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
