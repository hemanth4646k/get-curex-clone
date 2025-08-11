import React from 'react';

// --- Reusable SVG Icon Components ---

const ArrowIcon = ({ style = {} }: { style?: React.CSSProperties }) => (
  <svg 
    style={{ width: '20px', height: '20px', ...style }} 
    viewBox="0 0 30 30" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.1406 5.14164C14.6148 4.66748 15.3832 4.66746 15.8574 5.14164L24.833 14.1172C25.0672 14.3386 25.2139 14.6513 25.2139 14.9991C25.2139 15.2703 25.1239 15.5196 24.9736 15.7217C24.9613 15.7383 24.9498 15.7555 24.9365 15.7715C24.9115 15.8018 24.8842 15.8298 24.8564 15.8575L24.8574 15.8584L15.8574 24.8584C15.3832 25.3326 14.6148 25.3326 14.1406 24.8584C13.6664 24.3842 13.6664 23.6158 14.1406 23.1416L21.0693 16.2129H6C5.3294 16.2129 4.78616 15.6697 4.78613 14.9991C4.78613 14.3285 5.32939 13.7852 6 13.7852H21.0674L14.1406 6.85844L14.0566 6.76664C13.6677 6.28972 13.6961 5.58619 14.1406 5.14164Z" fill="currentColor" />
  </svg>
);

const CheckIcon = ({ style = {} }: { style?: React.CSSProperties }) => (
  <svg 
    style={{ width: '24px', height: '24px', ...style }} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.2731 5.21025C19.8589 4.62463 20.8085 4.62452 21.3942 5.21025C21.9798 5.796 21.9798 6.7456 21.3942 7.33135L9.93522 18.7894C9.34943 19.3751 8.39991 19.3751 7.81413 18.7894L2.60612 13.5813C2.02033 12.9956 2.02033 12.046 2.60612 11.4603C3.15514 10.9112 4.0238 10.8766 4.61295 11.3567L4.72721 11.4603L8.87467 15.6077L19.2731 5.21025Z" fill="currentColor" />
  </svg>
);

// --- Reusable UI Components ---

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'yellow';
  style?: React.CSSProperties;
};

const Button = ({ children, href = "#", variant = 'primary', style = {} }: ButtonProps) => {
  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px 32px',
    fontWeight: '600',
    borderRadius: '50px',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    lineHeight: '1.5',
    fontFamily: 'Montserrat, sans-serif',
    ...style
  };

  const variantStyles = {
    primary: {
      backgroundColor: '#0573be',
      color: 'white',
    },
    secondary: {
      backgroundColor: 'transparent',
      color: '#0573be',
      border: '2px solid #0573be',
    },
    yellow: {
      backgroundColor: '#f7c32e',
      color: '#000',
    }
  };

  return (
    <a 
      href={href} 
      style={{
        ...baseStyle,
        ...variantStyles[variant]
      }}
      onMouseEnter={(e) => {
        if (variant === 'primary') {
          e.currentTarget.style.backgroundColor = '#0461a0';
        } else if (variant === 'yellow') {
          e.currentTarget.style.backgroundColor = '#f0b90b';
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = variantStyles[variant].backgroundColor;
      }}
    >
      <span style={{ marginRight: '8px' }}>{children}</span>
      <ArrowIcon />
    </a>
  );
};

// --- Page Section Components ---

// const Navbar = () => (
//   <nav style={{
//     background: 'white',
//     position: 'sticky',
//     top: 0,
//     zIndex: 50,
//     fontFamily: 'Montserrat, sans-serif',
//     borderBottom: '1px solid #e5e7eb'
//   }}>
//     <div style={{
//       maxWidth: '1280px',
//       margin: '0 auto',
//       padding: '0 16px'
//     }}>
//       <div style={{
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         height: '80px'
//       }}>
//         <div style={{ flexShrink: 0 }}>
//           <img 
//             style={{ height: '32px', width: 'auto' }} 
//             src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/66f64184a30e0919d28c5316_curex-logo.svg" 
//             alt="Curex logo black" 
//           />
//         </div>
//         <div style={{ display: 'none' }}>
//           <div style={{
//             marginLeft: '40px',
//             display: 'flex',
//             alignItems: 'baseline',
//             gap: '16px'
//           }}>
//             <a href="#what-we-treat" style={{
//               color: '#374151',
//               padding: '8px 12px',
//               borderRadius: '6px',
//               fontSize: '14px',
//               fontWeight: '500',
//               textDecoration: 'none'
//             }}>What We Treat</a>
//             <a href="#how-it-works" style={{
//               color: '#374151',
//               padding: '8px 12px',
//               borderRadius: '6px',
//               fontSize: '14px',
//               fontWeight: '500',
//               textDecoration: 'none'
//             }}>How It Works</a>
//             <a href="#faq" style={{
//               color: '#374151',
//               padding: '8px 12px',
//               borderRadius: '6px',
//               fontSize: '14px',
//               fontWeight: '500',
//               textDecoration: 'none'
//             }}>FAQ</a>
//             <a href="/quiz" style={{
//               color: '#374151',
//               padding: '8px 12px',
//               borderRadius: '6px',
//               fontSize: '14px',
//               fontWeight: '500',
//               textDecoration: 'none'
//             }}>Contact</a>
//           </div>
//         </div>
//         <div style={{ display: 'block' }}>
//           <Button href="/quiz">Start a Free Quiz</Button>
//         </div>
//       </div>
//     </div>
//   </nav>
// );

const Header = () => (
  <header style={{
    background: 'white',
    fontFamily: 'Montserrat, sans-serif',
    overflow: 'hidden'
  }}>
    <div style={{
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '64px 16px'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '48px',
        alignItems: 'center'
      }}>
        <div style={{ order: 2 }}>
          <h1 style={{
            fontSize: '48px',
            fontWeight: '800',
            color: '#111827',
            lineHeight: '1.1',
            marginBottom: '24px'
          }}>
            Finally, a <span style={{ color: '#e91e63' }}>Real Treatment</span> for Food Allergies & Sensitivities
          </h1>
          <p style={{
            marginBottom: '24px',
            fontSize: '16px',
            color: '#6b7280'
          }}>
            Our expert allergists guide your at-home therapy to help you safely build long-term tolerance. From bloating and diarrhea to anaphylaxis, we can treat you with gentle, affordable treatment.
          </p>
          <div style={{
            marginBottom: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <img 
                src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/685e8eb7ea6f5dc465250dfb_Icon_nr_1.avif" 
                alt="#1 icon" 
                style={{ width: '32px', height: '32px' }}
              />
              <div style={{ fontWeight: '600' }}>
                <strong>#1</strong> Online Allergy Clinic
              </div>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <img 
                src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/685e903f9d913c88b47fbca7_Users.avif" 
                alt="Users icon" 
                style={{ width: '32px', height: '32px' }}
              />
              <div>
                <img 
                  src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/685e907dc7e20f0db1f948ca_stars2.svg" 
                  alt="5 stars" 
                  style={{ height: '20px', width: 'auto', marginBottom: '4px' }}
                />
                <div style={{ fontWeight: '600' }}>
                  Trusted by <strong>50,000+</strong> Users
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: '40px' }}>
            <Button href="/quiz">Start a Free Quiz</Button>
          </div>
        </div>
        <div style={{ order: 1 }}>
          <div style={{ position: 'relative' }}>
            <img 
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
              }}
              src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/685e91a2e22d0e83314a62c7_Girl_with_product.avif" 
              alt="Woman holding Curex product" 
            />
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, rgba(229, 30, 99, 0.1) 0%, rgba(5, 115, 190, 0.1) 100%)',
              borderRadius: '8px'
            }}></div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

const Logos = () => {
  const logos = [
    "https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/685eb33c7f86ba35e8910258_OCBS.svg",
    "https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/685eb33cd411c8412e6332ea_Healthline.svg",
    "https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/685eb33ca8e91546677e4da5_AXIOS.svg",
    "https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/685eb33cf652c752dc1564ae_MensHealth.svg",
    "https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/685eb33cab4472680ef07c97_FOX.svg",
    "https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/685eb33cdc7b6e1282401fc3_USA_TODAY.svg"
  ];

  return (
    <section style={{
      background: 'white',
      padding: '48px 0'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 16px'
      }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '32px'
        }}>
          {logos.map((logo, index) => (
            <img 
              key={index} 
              style={{
                height: '32px',
                width: 'auto',
                objectFit: 'contain',
                opacity: 0.7
              }} 
              src={logo} 
              alt={`Client logo ${index + 1}`} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const WhatWeTreat = () => {
  const allergens = [
    { name: 'Wheat', icon: 'https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/685e8eb66cd0106f651ffaf5_Ellipse 21928.avif' },
    { name: 'Milk', icon: 'https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/685e8eb6414ca1ec85f64e0b_Ellipse 21929.avif' },
    { name: 'Nuts', icon: 'https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/685e8eb6a92deafb11ab4ea3_Ellipse 21930.avif' },
    { name: 'Fish', icon: 'https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/685e8eb79204d699e9602164_Ellipse 21931.avif' },
    { name: 'Shellfish', icon: 'https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/685e8eb7259708221417eae6_Ellipse 21932.avif' },
    { name: 'Eggs', icon: 'https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/685e8eb6e9ddc978ebfda6b5_Ellipse 21927.avif' }
  ];

  return (
    <section id="what-we-treat" style={{
      background: 'white',
      padding: '96px 0',
      fontFamily: 'Montserrat, sans-serif'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 16px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '64px',
          alignItems: 'center'
        }}>
          <div>
            <img 
              style={{
                width: '100%',
                height: 'auto'
              }}
              src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/685f8f96097e343a1519be29_what-we-treat-food-s2.avif" 
              alt="What we treat" 
            />
          </div>
          <div>
            <h2 style={{
              fontSize: '48px',
              fontWeight: '700',
              color: '#111827',
              marginBottom: '24px'
            }}>
              What We Treat
            </h2>
            <p style={{
              marginBottom: '32px',
              fontSize: '16px',
              color: '#6b7280',
              lineHeight: '1.6'
            }}>
              We can help with <span style={{ color: '#e91e63', fontWeight: '600' }}>bloating, diarrhea, fatigue, skin rashes</span> and other symptoms caused by allergic reaction to food. Curex treats food allergies and sensitivities to all common food allergens, including.
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px',
              marginBottom: '32px'
            }}>
              {allergens.map((allergen, index) => (
                <div key={index} style={{
                  textAlign: 'center'
                }}>
                  <div style={{ marginBottom: '8px' }}>
                    <img 
                      src={allergen.icon} 
                      alt={allergen.name} 
                      style={{
                        width: '48px',
                        height: '48px',
                        margin: '0 auto'
                      }}
                    />
                  </div>
                  <h3 style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#111827'
                  }}>
                    {allergen.name}
                  </h3>
                </div>
              ))}
            </div>
            <div style={{ marginBottom: '32px' }}>
              <a href="/allergy-care-direct-checkout" style={{
                color: '#111827',
                textDecoration: 'underline'
              }}>
                Check complete list
              </a>
            </div>
            <p style={{
              marginBottom: '32px',
              fontSize: '16px',
              color: '#6b7280',
              lineHeight: '1.6'
            }}>
              We can diagnose but not treat lactose intolerance, Celiac disease and alpha-gal syndrome. Take a free quiz to find out if we can help.
            </p>
            <div>
              <Button href="/quiz">Start a Free Quiz</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => (
  <section id="how-it-works" style={{
    background: '#f9fafb',
    padding: '128px 0',
    fontFamily: 'Montserrat, sans-serif'
  }}>
    <div style={{
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 16px'
    }}>
      <div style={{
        textAlign: 'center',
        marginBottom: '96px'
      }}>
        <h2 style={{
          fontSize: '48px',
          fontWeight: '700',
          color: '#111827',
          marginBottom: '16px'
        }}>
          How It Works
        </h2>
        <p style={{
          fontSize: '18px',
          color: '#6b7280',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          We can help with bloating, diarrhea, fatigue, skin rashes and other symptoms caused by allergic reaction to food.
        </p>
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '64px',
        alignItems: 'center'
      }}>
        <div>
          <h3 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#111827',
            marginBottom: '32px'
          }}>
            3 <span style={{ color: '#e91e63' }}>Easy steps</span> to feeling better
          </h3>
          
          <div style={{ position: 'relative' }}>
            {/* Step 1 */}
            <div style={{
              display: 'flex',
              gap: '24px',
              marginBottom: '48px'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                backgroundColor: '#0573be',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '700',
                fontSize: '20px',
                flexShrink: 0
              }}>
                1
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{
                  fontSize: '24px',
                  fontWeight: '600',
                  color: '#111827',
                  marginBottom: '8px'
                }}>
                  Diagnosis
                </h4>
                <p style={{
                  color: '#6b7280',
                  lineHeight: '1.6',
                  marginBottom: '16px'
                }}>
                  Start with a painless, at-home test to uncover the root cause of your symptoms. We use clinical-grade diagnostics—no guesswork, no outdated food journals.
                </p>
                <img 
                  src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/685e8eb76bb8d616d82496c_dr_img_moible.avif" 
                  alt="Mobile phone" 
                  style={{ width: '120px', height: 'auto' }}
                />
              </div>
            </div>

            {/* Step 2 */}
            <div style={{
              display: 'flex',
              gap: '24px',
              marginBottom: '48px'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                backgroundColor: '#0573be',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '700',
                fontSize: '20px',
                flexShrink: 0
              }}>
                2
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{
                  fontSize: '24px',
                  fontWeight: '600',
                  color: '#111827',
                  marginBottom: '8px'
                }}>
                  Clinical consultation and prescription.
                </h4>
                <p style={{
                  color: '#6b7280',
                  lineHeight: '1.6',
                  marginBottom: '16px'
                }}>
                  Your results are reviewed by a licensed, board-certified clinician who will meet with you virtually to walk through your results and prescribe a personalized treatment plan.
                </p>
                <img 
                  src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/685e8eb794722e6d366b6172_dr_img_dektop.avif" 
                  alt="Doctor consultation" 
                  style={{ width: '120px', height: 'auto' }}
                />
              </div>
            </div>

            {/* Step 3 */}
            <div style={{
              display: 'flex',
              gap: '24px',
              marginBottom: '32px'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                backgroundColor: '#0573be',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '700',
                fontSize: '20px',
                flexShrink: 0
              }}>
                3
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{
                  fontSize: '24px',
                  fontWeight: '600',
                  color: '#111827',
                  marginBottom: '8px'
                }}>
                  At home treatment with drops.
                </h4>
                <p style={{
                  color: '#6b7280',
                  lineHeight: '1.6',
                  marginBottom: '16px'
                }}>
                  Receive your sublingual drops (SLIT) at home. Just 3 drops a day—designed to retrain your immune system with minimal side effects and maximum convenience.
                </p>
                <img 
                  src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/685e8eb8fc98995100bc149d_Small_product_img.avif" 
                  alt="Product" 
                  style={{ width: '120px', height: 'auto' }}
                />
              </div>
            </div>
          </div>
          
          <div style={{ marginTop: '32px' }}>
            <Button href="/quiz">Start a Free Quiz</Button>
          </div>
        </div>
        
        <div>
          <img 
            style={{
              width: '100%',
              height: 'auto'
            }}
            src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/685e8eb9a33be855f21f8bb1_Box_img.avif" 
            alt="Curex box" 
          />
        </div>
      </div>
    </div>
  </section>
);

const EasyTreatment = () => (
  <section style={{
    background: 'white',
    padding: '96px 0',
    fontFamily: 'Montserrat, sans-serif'
  }}>
    <div style={{
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 16px'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '64px',
        alignItems: 'center'
      }}>
        <div>
          <img 
            style={{
              width: '100%',
              height: 'auto'
            }}
            src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/685e8eb9c4a281eec323eab8_Girl_image_take_Curex.avif" 
            alt="Girl taking Curex" 
          />
        </div>
        <div>
          <h2 style={{
            fontSize: '48px',
            fontWeight: '700',
            color: '#111827',
            marginBottom: '32px'
          }}>
            <span style={{ color: '#e91e63' }}>Easier</span> than Brushing Your Teeth
          </h2>
          <div style={{ marginBottom: '32px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '16px',
              marginBottom: '24px'
            }}>
              <CheckIcon style={{
                color: '#10b981',
                flexShrink: 0,
                marginTop: '4px'
              }} />
              <p style={{
                color: '#6b7280',
                lineHeight: '1.6'
              }}>
                Allergy drops contain allergenic food extracts that desensitize your immune system over time.
              </p>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '16px'
            }}>
              <CheckIcon style={{
                color: '#10b981',
                flexShrink: 0,
                marginTop: '4px'
              }} />
              <p style={{
                color: '#6b7280',
                lineHeight: '1.6'
              }}>
                Simply place them under your tongue for 2 minutes a day and start seeing relief within the first year of treatment.
              </p>
            </div>
          </div>
          <div>
            <Button href="/quiz">Start a Free Quiz</Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Additional SVG Icons needed for new sections
const ClipboardIcon = ({ style = {} }: { style?: React.CSSProperties }) => (
  <svg 
    style={{ width: '24px', height: '24px', ...style }} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6.5 3C6.10218 3 5.72076 3.15815 5.43945 3.43945C5.15815 3.72076 5 4.10218 5 4.5V16.3379C5.46445 16.1176 5.97614 16 6.5 16H19V3H6.5ZM14.293 6.79297C14.6835 6.40244 15.3165 6.40244 15.707 6.79297C16.0976 7.18349 16.0976 7.81651 15.707 8.20703L11.707 12.207C11.3165 12.5976 10.6835 12.5976 10.293 12.207L8.29297 10.207L8.22461 10.1309C7.90426 9.73809 7.92685 9.15908 8.29297 8.79297C8.65908 8.42685 9.23809 8.40426 9.63086 8.72461L9.70703 8.79297L11 10.0859L14.293 6.79297ZM5 19.5C5 19.8978 5.15815 20.2792 5.43945 20.5605C5.72076 20.8419 6.10218 21 6.5 21H19V18H6.5C6.10218 18 5.72076 18.1581 5.43945 18.4395C5.15815 18.7208 5 19.1022 5 19.5ZM21 21C21 21.5304 20.7891 22.039 20.4141 22.4141C20.039 22.7891 19.5304 23 19 23H6.5C5.57174 23 4.68177 22.631 4.02539 21.9746C3.36901 21.3182 3 20.4283 3 19.5V4.5C3 3.57174 3.36901 2.68177 4.02539 2.02539C4.68177 1.36901 5.57174 1 6.5 1H19C19.5304 1 20.039 1.21086 20.4141 1.58594C20.7891 1.96101 21 2.46957 21 3V21Z" fill="currentColor"/>
  </svg>
);

const TestTubeIcon = ({ style = {} }: { style?: React.CSSProperties }) => (
  <svg 
    style={{ width: '24px', height: '24px', ...style }} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.5 17H10.5V19.5C10.5 20.3477 11.1523 21 12 21C12.8477 21 13.5 20.3477 13.5 19.5V17ZM10.5 15H13.5V3H10.5V15ZM15.5 19.5C15.5 21.4523 13.9523 23 12 23C10.0477 23 8.5 21.4523 8.5 19.5V3C7.94772 3 7.5 2.55228 7.5 2C7.5 1.44772 7.94772 1 8.5 1H15.5C16.0523 1 16.5 1.44772 16.5 2C16.5 2.55228 16.0523 3 15.5 3V19.5Z" fill="currentColor"/>
  </svg>
);

const HeartIcon = ({ style = {} }: { style?: React.CSSProperties }) => (
  <svg 
    style={{ width: '24px', height: '24px', ...style }} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.335 2.32233C20.1652 2.37189 20.949 2.72448 21.5371 3.31256C22.125 3.90058 22.4768 4.68374 22.5264 5.51373C22.5616 6.10315 22.4395 6.68583 22.1836 7.20904C22.3064 7.47288 22.3963 7.75178 22.4482 8.0401C22.5425 8.56353 22.5129 9.10257 22.3613 9.61237C22.2097 10.122 21.94 10.5888 21.5752 10.9756C21.5329 11.0204 21.4888 11.0632 21.4443 11.1055C21.5405 11.1533 21.6297 11.2157 21.707 11.293C21.8946 11.4806 22 11.7348 22 12.0001C22 14.6522 20.9467 17.196 19.0713 19.0714C18.6335 19.5091 18.1578 19.8999 17.6543 20.2452C17.8657 20.4285 18 20.6983 18 21.0001C18 21.5523 17.5523 22.0001 17 22.0001H7C6.44772 22.0001 6 21.5523 6 21.0001C6 20.6986 6.13369 20.4285 6.34473 20.2452C5.8415 19.9 5.36629 19.5089 4.92871 19.0714C3.05335 17.196 2 14.6522 2 12.0001C2 11.7348 2.10543 11.4806 2.29297 11.293C2.48051 11.1055 2.73478 11.0001 3 11.0001H3.10156C3.03494 10.6773 3 10.342 3 9.99811C2.99604 8.99737 3.29303 8.01836 3.85254 7.18854C4.41307 6.35723 5.21119 5.71404 6.14258 5.34283C7.07394 4.97165 8.09557 4.88964 9.07422 5.10748C9.4474 5.19056 9.80738 5.31686 10.1484 5.48053C10.3485 4.9604 10.6721 4.49584 11.0947 4.12994C11.56 3.72718 12.1263 3.45804 12.7324 3.35162C13.0889 3.28906 13.4516 3.28564 13.8066 3.33697C13.9597 3.18462 14.1275 3.04703 14.3076 2.92584C14.6969 2.66392 15.136 2.48528 15.5977 2.40143C16.0594 2.3176 16.5336 2.33018 16.9902 2.43854C17.2148 2.49183 17.4325 2.56817 17.6406 2.6651C18.1636 2.40941 18.7459 2.28718 19.335 2.32233ZM4.06543 13.0001C4.28631 14.7529 5.08023 16.3947 6.34277 17.6573C7.84306 19.1576 9.87827 20.0001 12 20.0001C14.1217 20.0001 16.1569 19.1576 17.6572 17.6573C18.9198 16.3947 19.7137 14.7529 19.9346 13.0001H4.06543ZM19.2158 4.3194C18.8742 4.29901 18.5367 4.40388 18.2676 4.61529C17.9109 4.89563 17.4102 4.90097 17.0479 4.62799C16.8935 4.5117 16.7163 4.42848 16.5283 4.38385C16.3404 4.33929 16.1451 4.3347 15.9551 4.3692C15.765 4.40373 15.5841 4.47717 15.4238 4.58502C15.2635 4.6929 15.1271 4.83304 15.0234 4.99615C14.7683 5.3975 14.2654 5.56385 13.8213 5.39362C13.5847 5.30292 13.3277 5.27755 13.0781 5.32135C12.8287 5.36516 12.5958 5.47598 12.4043 5.64166C12.2127 5.80753 12.0694 6.02297 11.9902 6.26373C11.9112 6.50434 11.8993 6.76182 11.9551 7.00885C12.016 7.27833 11.9625 7.56131 11.8076 7.7901C11.6609 8.00673 11.4349 8.15482 11.1797 8.20709C11.1327 8.22075 11.0852 8.23074 11.0371 8.23737C10.7282 8.30989 10.4518 8.48505 10.2549 8.73639C10.0371 9.01448 9.9324 9.36485 9.96191 9.71686C9.99149 10.0688 10.153 10.3969 10.4141 10.6348C10.6752 10.8727 11.0169 11.0034 11.3701 11.0001H12.5859L16.293 7.29303C16.6835 6.90251 17.3165 6.90251 17.707 7.29303C18.0976 7.68355 18.0976 8.31657 17.707 8.70709L15.4141 11.0001H18.9248C18.879 10.5507 19.1428 10.1171 19.5791 9.95904C19.7848 9.88448 19.97 9.76271 20.1201 9.60358C20.2704 9.44425 20.3819 9.25197 20.4443 9.04205C20.5067 8.83215 20.5183 8.61011 20.4795 8.39459C20.4406 8.1792 20.3523 7.9757 20.2207 7.80084C19.9479 7.43852 19.9532 6.93768 20.2334 6.58112C20.4448 6.31194 20.5507 5.97455 20.5303 5.63287C20.5098 5.29108 20.3642 4.96874 20.1221 4.72662C19.8799 4.48455 19.5576 4.3398 19.2158 4.3194ZM8.63965 7.05963C8.05324 6.92911 7.44088 6.97881 6.88281 7.20123C6.32484 7.42368 5.84655 7.80865 5.51074 8.3067C5.17492 8.80477 4.99701 9.39253 5 9.99322V9.99811C5 10.3489 5.0627 10.6853 5.17578 11.0001H8.26172C8.10329 10.6499 8.00144 10.2735 7.96875 9.88385C7.89705 9.02887 8.15155 8.1784 8.68066 7.50299C8.77594 7.38137 8.88056 7.26867 8.99023 7.16217C8.87582 7.12153 8.75904 7.08621 8.63965 7.05963Z" fill="currentColor"/>
  </svg>
);

const PeopleIcon = ({ style = {} }: { style?: React.CSSProperties }) => (
  <svg 
    style={{ width: '24px', height: '24px', ...style }} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14 8C14 5.79086 12.2091 4 10 4C7.79086 4 6 5.79086 6 8C6 10.2091 7.79086 12 10 12C12.2091 12 14 10.2091 14 8ZM21.001 19.999C21.0009 16.9883 19.1864 14.1383 17.4004 12.7988C17.1489 12.61 17.001 12.3136 17.001 11.999C17.001 11.6844 17.1488 11.388 17.4004 11.1992C17.9263 10.8046 18.347 10.2863 18.625 9.69043C18.9029 9.09464 19.0297 8.43965 18.9941 7.7832C18.9585 7.12667 18.7617 6.48907 18.4209 5.92676C18.1227 5.43468 17.7224 5.0137 17.248 4.69141L17.041 4.55957L16.9551 4.50293C16.5477 4.20172 16.4266 3.6347 16.6904 3.18945C16.9546 2.74407 17.5108 2.57772 17.9707 2.79102L18.0605 2.83887L18.3721 3.03711C19.0836 3.52055 19.6845 4.1525 20.1318 4.89062C20.6428 5.73394 20.9378 6.69023 20.9912 7.6748C21.0446 8.65959 20.8544 9.64237 20.4375 10.5361C20.1935 11.0591 19.8743 11.5404 19.4951 11.9697C21.3674 13.7926 23.0009 16.7763 23.001 19.999C23.001 20.5512 22.5532 20.9989 22.001 20.999C21.4487 20.999 21.001 20.5513 21.001 19.999ZM16 8C16 9.94598 15.0726 11.6742 13.6367 12.7705C14.6434 13.2154 15.571 13.8424 16.3643 14.6357C18.0521 16.3236 19 18.6131 19 21C19 21.5523 18.5523 22 18 22C17.4477 22 17 21.5523 17 21C17 19.1435 16.2629 17.3626 14.9502 16.0498C13.7194 14.819 12.077 14.0945 10.3467 14.0088L10 14C8.14348 14 6.36256 14.7371 5.0498 16.0498C3.73705 17.3626 3 19.1435 3 21C3 21.5523 2.55228 22 2 22C1.44772 22 1 21.5523 1 21C1 18.6131 1.94791 16.3236 3.63574 14.6357C4.42882 13.8427 5.35593 13.2153 6.3623 12.7705C4.92681 11.6742 4 9.9457 4 8C4 4.68629 6.68629 2 10 2C13.3137 2 16 4.68629 16 8Z" fill="currentColor"/>
  </svg>
);

const DiagnosticsSimple = () => (
  <section style={{
    background: 'white',
    padding: '128px 0',
    fontFamily: 'Montserrat, sans-serif'
  }}>
    <div style={{
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 16px'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '64px',
        alignItems: 'center'
      }}>
        <div>
          <div style={{ position: 'relative', marginBottom: '32px' }}>
            <h2 style={{
              fontSize: '48px',
              fontWeight: '700',
              color: '#111827',
              position: 'relative',
              zIndex: 1
            }}>
              Diagnostics Made <span style={{ color: '#e91e63' }}>Simple</span>
            </h2>
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '80px',
              height: '80px',
              background: '#e91e63',
              borderRadius: '50%',
              opacity: 0.1,
              zIndex: 0
            }}></div>
          </div>
          
          <div style={{ marginBottom: '32px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '16px',
              marginBottom: '24px'
            }}>
              <ClipboardIcon style={{
                color: '#0573be',
                flexShrink: 0,
                marginTop: '4px'
              }} />
              <p style={{
                color: '#6b7280',
                lineHeight: '1.6'
              }}>
                After you sign up, our clinical <span style={{ fontWeight: '600' }}>team reviews your symptom history and orders the right tests</span>—IgE for allergies, IgG for sensitivities. If you have previous test results you can just upload them!
              </p>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '16px'
            }}>
              <TestTubeIcon style={{
                color: '#0573be',
                flexShrink: 0,
                marginTop: '4px'
              }} />
              <p style={{
                color: '#6b7280',
                lineHeight: '1.6'
              }}>
                Most patients collect a small blood sample at home with a Tasso device that <span style={{ fontWeight: '600' }}>we provide and ship it to the lab. Prefer a local lab? That works too.</span> We make it easy to get the answers you need.
              </p>
            </div>
          </div>
          
          <div>
            <Button href="/quiz">Start a Free Quiz</Button>
          </div>
        </div>
        
        <div>
          <img 
            style={{
              width: '100%',
              height: 'auto'
            }}
            src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/685e8ee1538a7e614940f583_Girl_with_device_img.avif" 
            alt="Girl with device" 
          />
        </div>
      </div>
    </div>
  </section>
);

const ExpertCare = () => (
  <section style={{
    background: 'white',
    padding: '96px 0',
    fontFamily: 'Montserrat, sans-serif'
  }}>
    <div style={{
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 16px'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '64px',
        alignItems: 'center'
      }}>
        <div style={{ position: 'relative' }}>
          <img 
            style={{
              width: '100%',
              height: 'auto'
            }}
            src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/685e8eb79204d699e96021dc_Dr_Chet_Tharpe_img.avif" 
            alt="Dr. Chet Tharpe" 
          />
          <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            background: 'white',
            padding: '16px 20px',
            borderRadius: '8px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            <div>
              <span style={{ fontWeight: '600' }}>Dr. Chet Tharpe</span><br/>
              Medical Director
            </div>
          </div>
        </div>
        
        <div>
          <h2 style={{
            fontSize: '48px',
            fontWeight: '700',
            color: '#111827',
            marginBottom: '24px'
          }}>
            Expert care, <span style={{ color: '#111827' }}>thoughtful consultations</span>
          </h2>
          <p style={{
            fontSize: '18px',
            fontStyle: 'italic',
            color: '#6b7280',
            marginBottom: '24px'
          }}>
            At Curex, clinical excellence isn't a tagline—it's the foundation of everything we do.
          </p>
          <p style={{
            color: '#6b7280',
            lineHeight: '1.6',
            marginBottom: '32px'
          }}>
            When you schedule a visit, <span style={{ fontWeight: '600' }}>you're connecting with seasoned clinicians who prioritize evidence-based care, diagnostic precision</span>, and your long-term well-being.
          </p>
          <div>
            <Button href="/quiz" variant="yellow">Connect with a provider</Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const BackedByScience = () => (
  <section style={{
    background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
    color: 'white',
    padding: '128px 0',
    fontFamily: 'Montserrat, sans-serif',
    position: 'relative',
    overflow: 'hidden'
  }}>
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 'url("https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/685e8eb9e0cebfa56319c493_Back_by_sience_BG.avif")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: 0.1
    }}></div>
    
    <div style={{
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 16px',
      position: 'relative',
      zIndex: 1
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '24px',
        padding: '64px',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <h2 style={{
          fontSize: '48px',
          fontWeight: '700',
          marginBottom: '48px',
          textAlign: 'center'
        }}>
          Backed by <span style={{ color: '#e91e63' }}>Science</span>
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '32px',
          marginBottom: '48px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '16px'
          }}>
            <HeartIcon style={{
              color: '#e91e63',
              flexShrink: 0,
              marginTop: '4px'
            }} />
            <p style={{
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: '1.6'
            }}>
              Your health deserves <span style={{ fontWeight: '600' }}>cutting edge research. Immunotherapy is a proven treatment</span> for severe food allergies. Curex extends this approach to food sensitivities using sublingual immunotherapy (SLIT).
            </p>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '16px'
          }}>
            <HeartIcon style={{
              color: '#e91e63',
              flexShrink: 0,
              marginTop: '4px'
            }} />
            <p style={{
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: '1.6'
            }}>
              Unlike avoidance or unproven supplements, <span style={{ fontWeight: '600' }}>SLIT aims to retrain the immune system and build lasting tolerance.</span> SLIT for food sensitivities is clinically backed but still considered experimental.
            </p>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '16px'
          }}>
            <PeopleIcon style={{
              color: '#e91e63',
              flexShrink: 0,
              marginTop: '4px'
            }} />
            <p style={{
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: '1.6'
            }}>
              With the <span style={{ fontWeight: '600' }}>guidance of our clinical team we've been helping patients reduce symptoms</span> and reintroduce foods safely into their diet.
            </p>
          </div>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <Button href="/quiz">Start a Free Quiz</Button>
        </div>
        
        <div style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          background: 'rgba(255, 255, 255, 0.1)',
          padding: '12px',
          borderRadius: '8px'
        }}>
          <img 
            style={{ height: '24px', width: 'auto' }} 
            src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/66f64184a30e0919d28c5316_curex-logo.svg" 
            alt="Curex logo" 
          />
        </div>
      </div>
    </div>
  </section>
);

const MostAffordable = () => (
  <section style={{
    background: 'white',
    padding: '96px 0',
    fontFamily: 'Montserrat, sans-serif'
  }}>
    <div style={{
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 16px'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <div style={{
          position: 'relative',
          display: 'inline-block',
          marginBottom: '32px'
        }}>
          <img 
            src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/686265af053e2d49ad6cdfd5_Curex_logo_BG.avif" 
            alt="Background logo" 
            style={{
              position: 'absolute',
              top: '-50px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '200px',
              height: 'auto',
              opacity: 0.05,
              zIndex: 0
            }}
          />
          <h2 style={{
            fontSize: '48px',
            fontWeight: '700',
            color: '#111827',
            position: 'relative',
            zIndex: 1
          }}>
            <span style={{ color: '#e91e63' }}>Most Affordable</span> Allergy Program in the U.S.
          </h2>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '32px',
          maxWidth: '800px',
          margin: '0 auto',
          marginBottom: '48px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          }}>
            <img 
              src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/685e8eb7ea6f5dc465250dfb_Icon_nr_1.avif" 
              alt="#1 icon" 
              style={{ width: '48px', height: '48px' }}
            />
            <p style={{
              color: '#6b7280',
              textAlign: 'left'
            }}>
              As <span style={{ fontWeight: '600' }}>America's #1 Allergy Clinic</span>, we can offer the best price on allergy immunotherapy program.
            </p>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          }}>
            <img 
              src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/685e8eb789e48fd4192048d8_Happy_icon.avif" 
              alt="Happy icon" 
              style={{ width: '48px', height: '48px' }}
            />
            <p style={{
              color: '#6b7280',
              textAlign: 'left'
            }}>
              Start today for only <span style={{ fontWeight: '600' }}>$4.99</span> (normally $49).<br/>
              <span style={{ textDecoration: 'underline', fontStyle: 'italic' }}>You can cancel anytime!</span>
            </p>
          </div>
        </div>
        
        <div style={{
          background: '#f9fafb',
          borderRadius: '16px',
          padding: '32px',
          marginBottom: '32px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '24px',
            paddingBottom: '16px',
            borderBottom: '1px solid #e5e7eb'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }}>
              <img 
                src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/685e8eb7e2c3d045b60a5698_Click_icon.avif" 
                alt="Click icon" 
                style={{ width: '32px', height: '32px' }}
              />
              <span style={{ fontWeight: '600', color: '#111827' }}>Sign-Up</span>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <div style={{ position: 'relative' }}>
                <span style={{
                  color: '#9ca3af',
                  textDecoration: 'line-through'
                }}>$49.99</span>
              </div>
              <span style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#111827'
              }}>$4.99</span>
            </div>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '24px',
            paddingBottom: '16px',
            borderBottom: '1px solid #e5e7eb'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }}>
              <img 
                src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/685e8eb5b16cc95606ba7159_Clipboard_cion.avif" 
                alt="Clipboard icon" 
                style={{ width: '32px', height: '32px' }}
              />
              <span style={{ fontWeight: '600', color: '#111827' }}>Allergy Testing</span>
            </div>
            <div style={{ color: '#6b7280', fontSize: '14px' }}>
              Upload for free or we can order one for you
            </div>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }}>
              <img 
                src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/685e8eb75f6d95bbb76dfe35_Hands_heart_icon.avif" 
                alt="Heart icon" 
                style={{ width: '32px', height: '32px' }}
              />
              <span style={{ fontWeight: '600', color: '#111827' }}>Treatment & Clinical Supervision</span>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#111827'
              }}>$149.99</div>
              <div style={{
                color: '#6b7280',
                fontSize: '14px'
              }}>per month</div>
            </div>
          </div>
        </div>
        
        <div>
          <Button href="/quiz" variant="yellow">Start a Free Quiz</Button>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => {
  
  return (
    <section style={{
      background: 'white',
      fontFamily: 'Montserrat, sans-serif'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 16px'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '96px'
        }}>
          <h2 style={{
            fontSize: '5rem',
            fontWeight: '700',
            color: '#111827',
            marginBottom: '16px'
          }}>
            Join over <span style={{ color: '#e91e63' }}>50,000</span> Curex users!
          </h2>
        </div>
        
        
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "Is this safe for anaphylactic allergies?",
      answer: "Yes, our food sensitivity drops are custom-formulated for each patient and diluted to a level that is highly unlikely to trigger an anaphylactic reaction. At the same time, the dosage remains clinically meaningful to help gradually build tolerance to the specific foods you are sensitive to."
    },
    {
      question: "How long until I can reintroduce foods?",
      answer: "The duration of treatment varies for everyone. Curex clinicians will work closely with you to determine the right time to complete your treatment based on your progress. Typically, the recommended treatment lasts 3-5 years. This period is usually sufficient to desensitize the patient and allow them to safely reintroduce foods in question."
    },
    {
      question: "What if I miss a dose?",
      answer: "If you miss a dose, simply resume with your next scheduled dose as soon as possible. There's no need to double up—just continue with your regular dosing schedule."
    },
    {
      question: "Can children enroll?",
      answer: "Absolutely. Children can enroll in the program, and in many cases, earlier intervention leads to faster and more effective outcomes, as their immune systems are still in key stages of development and adaptation. At Curex, we prescribe sublingual drops for children as young as 2 years old, provided the clinician believes the patient will benefit and can follow the treatment plan with the help of their parent or guardian."
    }
  ];

  return (
    <section id="faq" style={{
      background: 'white',
      padding: '128px 0',
      fontFamily: 'Montserrat, sans-serif'
    }}>
      <div style={{
        maxWidth: '768px',
        margin: '0 auto',
        padding: '0 16px'
      }}>
        <h2 style={{
          fontSize: '48px',
          fontWeight: '700',
          color: '#111827',
          textAlign: 'center',
          marginBottom: '64px'
        }}>
          Got questions? We have <span style={{ color: '#e91e63' }}>answers</span>.
        </h2>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px'
        }}>
          {faqs.map((faq, index) => (
            <details key={index} style={{
              background: '#f9fafb',
              borderRadius: '12px',
              border: '1px solid #e5e7eb'
            }}>
              <summary style={{
                padding: '24px',
                fontWeight: '600',
                fontSize: '18px',
                color: '#111827',
                cursor: 'pointer',
                listStyle: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                {faq.question}
                <span style={{
                  fontSize: '20px',
                  transform: 'rotate(0deg)',
                  transition: 'transform 0.3s ease'
                }}>▼</span>
              </summary>
              <div style={{
                padding: '0 24px 24px 24px',
                color: '#6b7280',
                lineHeight: '1.6'
              }}>
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main App Component
const FoodAllergiesAndSensitivities = () => {
  return (
    <div style={{
      fontFamily: 'Montserrat, sans-serif',
      minHeight: '100vh',
      background: 'white'
    }}>
      <Header />
      <Logos />
      <WhatWeTreat />
      <HowItWorks />
      <EasyTreatment />
      <DiagnosticsSimple />
      <ExpertCare />
      <BackedByScience />
      <MostAffordable />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default FoodAllergiesAndSensitivities;
