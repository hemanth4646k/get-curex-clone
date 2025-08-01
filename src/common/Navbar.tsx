
import './navbar.css';

const Navbar = () => {
  return (
    <div className="nav-container">
      {/* Main Header */}
      <header className="nav-header">
        <div className="nav-content">
          {/* Left side - Logo and Phone */}
          <div className="nav-left">
            <div className="nav-logo">
              <img src="/curex-logo.svg" alt="Curex" className="nav-logo-image" />
            </div>
            <div className="nav-phone">
              <span className="nav-phone-icon">📞</span>
              <span className="nav-phone-number">(857) 240-1080</span>
            </div>
          </div>

          {/* Right side - Services and CTA */}
          <div className="nav-right">
            <div className="nav-services">
              <span className="nav-service nav-service-active">Allergy Care</span>
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
            <div className="nav-menu-item nav-dropdown">
              <span>Immunotherapy</span>
              <span className="nav-dropdown-arrow">▼</span>
            </div>
            <div className="nav-menu-item nav-dropdown">
              <span>Kids</span>
              <span className="nav-dropdown-arrow">▼</span>
            </div>
            <div className="nav-menu-item nav-dropdown">
              <span>Learn</span>
              <span className="nav-dropdown-arrow">▼</span>
            </div>
            <div className="nav-menu-item nav-dropdown">
              <span>Food Allergies</span>
              <span className="nav-dropdown-arrow">▼</span>
            </div>
            <div className="nav-menu-item">
              <span>Quickie</span>
            </div>
            <div className="nav-menu-item">
              <span>Pricing</span>
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