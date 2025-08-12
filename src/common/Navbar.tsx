import { Link } from "react-router-dom";
import "./navbar.css";
import Dropdown from "./ui/Dropdown";

const Navbar = () => {
  // Define dropdown menu items
  const immunotherapyItems = [
    { label: 'How it works', href: '/plans/prevention-plus' },
    { label: 'Insurance', href: '/insurance-faqs' },
    { label: 'Science', href: '/immuno-science' },
    { label: 'Kids', href: '/kids-allergy-care' },
    { label: 'Pets', href: '/pets' },
    { label: 'Safety', href: '/safety' },
    { label: 'Allergy Testing', href: '/allergy-test' },
    { label: 'Getting Started', href: '/getting-started' },
    { label: 'Prices', href: '/pricing' }
  ];

  const kidsItems = [
    { label: 'Immunotherapy for Kids', href: '/kids-allergy-care' },
    { label: 'Science', href: '/immunotherapy-science-kids' },
    { label: 'Reviews', href: '/see-our-reviews-kids' },
    { label: 'Safety', href: '/safety' },
    { label: 'Getting Started', href: '/getting-started-kids' }
  ];

  const learnItems = [
    { label: 'Sign Up for a Free Webinar', href: 'https://calendly.com/webinar-curex/allergy-immunotherapy' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'Immunotherapy 101', href: '/immunotherapy-101' },
    { label: 'Science', href: '/immuno-science' },
    { label: 'Allergy Drops', href: '/allergy-drops' },
    { label: 'Allergy Shots', href: '/allergy-shots' },
    { label: 'Allergy Clinic', href: '/best-allergy-clinic' },
    { label: 'Allergy Medicine', href: '/allergy-medicine' },
    { label: 'Blog', href: '/blogs' },
    { label: 'For Doctors', href: '/partners' }
  ];

  const foodAllergiesItems = [
    { label: 'Treatment', href: '/food' },
    { label: 'Anaphylaxis', href: '/food-anaphylaxis' },
    { label: 'Food Sensitivities', href: '/food-allergies-and-sensitivities' }
  ];

  return (
    <div className="nav-container">
      {/* Main Header */}
      <header className="nav-header">
        <div className="nav-content">
          {/* Left side - Logo and Phone */}
          <div className="nav-left">
            <Link to="/">
              <div className="nav-logo">
                <img
                  src="/curex-logo.svg"
                  alt="Curex"
                  className="nav-logo-image"
                />
              </div>
            </Link>
            <div className="nav-phone">
              <span className="nav-phone-icon">📞</span>
              <span className="nav-phone-number">(857) 240-1080</span>
            </div>
          </div>

          {/* Right side - Services and CTA */}
          <div className="nav-right">
            <div className="nav-services">
              <span className="nav-service nav-service-active">
                Allergy Care
              </span>
              <span className="nav-service">Weight Loss</span>
            </div>
            <button className="nav-cta-button">Am I eligible?</button>
          </div>
        </div>
      </header>

      {/* Navigation Menu */}
      <nav className="nav-menu">
        <div className="nav-menu-content">
          <div className="nav-menu-left">
            <Dropdown title="Immunotherapy" items={immunotherapyItems} className="nav-menu-item" />
            <Dropdown title="Kids" items={kidsItems} className="nav-menu-item" />
            <Dropdown title="Learn" items={learnItems} className="nav-menu-item" />
            <Dropdown title="Food Allergies" items={foodAllergiesItems} className="nav-menu-item" />
            <div className="nav-menu-item">
              <Link to="/quickie">
                <span>Quickie</span>
              </Link>
            </div>
            <div className="nav-menu-item">
              <Link to="/pricing">
                <span>Pricing</span>
              </Link>
            </div>
          </div>

          <div className="nav-menu-right">
            <div className="nav-menu-item">
              <span>Refer a friend</span>
            </div>
            <div className="nav-menu-item nav-login">
              <span className="nav-login-icon">👤</span>
              <span>Login</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Promotional Banner */}
      <div className="nav-promo-banner">
        <div className="nav-promo-content">
          <span className="nav-promo-text">
            Sale! Get started today for only
            <span className="nav-promo-strike">$49</span>
            <span className="nav-promo-price">$4.99</span>
          </span>
          <button className="nav-promo-button">Get started today</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
