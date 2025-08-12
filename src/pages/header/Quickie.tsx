import React, { useState, useCallback, useRef, useEffect } from "react";

// Restored rich button + icon components to match original design structure
const ArrowCartIcon: React.FC = () => (
  <svg
    width=" 100%"
    height=" 100%"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_btn_arrow)">
      <path
        d="M5.13672 17.5003C5.13672 16.5799 5.88241 15.8335 6.80273 15.8333C7.72321 15.8333 8.46973 16.5798 8.46973 17.5003C8.46957 18.4207 7.72311 19.1663 6.80273 19.1663C5.88251 19.1661 5.13687 18.4205 5.13672 17.5003ZM14.3027 17.5003C14.3027 16.5799 15.0484 15.8335 15.9688 15.8333C16.8892 15.8333 17.6357 16.5798 17.6357 17.5003C17.6356 18.4207 16.8891 19.1663 15.9688 19.1663C15.0485 19.1661 14.3029 18.4205 14.3027 17.5003ZM3.51172 0.875309L3.65625 0.888004C3.98534 0.945945 4.2541 1.19758 4.32617 1.53351L5.07715 5.04132H18.5449C18.7976 5.04138 19.0362 5.15674 19.1943 5.35382C19.3525 5.55096 19.4132 5.80924 19.3584 6.05597L17.9834 12.2474L17.9824 12.2464C17.86 12.8017 17.5523 13.2989 17.1094 13.6556C16.6662 14.0123 16.1147 14.2074 15.5459 14.2083H7.39453V14.2073C6.81971 14.2158 6.25902 14.0268 5.80762 13.6702C5.35146 13.3098 5.03503 12.8012 4.91309 12.2327L2.83691 2.54132H1.84473C1.38449 2.54132 1.01172 2.16855 1.01172 1.70832C1.01172 1.24808 1.38449 0.875309 1.84473 0.875309H3.51172ZM6.54297 11.8831L6.58496 12.0218C6.63888 12.1549 6.72688 12.2726 6.84082 12.3626C6.99286 12.4827 7.18226 12.5466 7.37598 12.5423C7.38209 12.5422 7.38842 12.5413 7.39453 12.5413H15.543C15.7325 12.541 15.9168 12.4765 16.0645 12.3577C16.2122 12.2388 16.3147 12.0722 16.3555 11.887L16.3564 11.8861L17.5059 6.70832H5.43457L6.54297 11.8831Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_btn_arrow">
        <rect width={20} height={20} fill="currentColor" />
      </clipPath>
    </defs>
  </svg>
);

interface ButtonWithArrowProps {
  text: string;
  href: string;
  variant?: 'nav' | 'hero';
}
const ButtonWithArrow: React.FC<ButtonWithArrowProps> = ({ text, href, variant = 'hero' }) => {
  const wrapClass = variant === 'nav' ? 'is-nav' : 'is-hero';
  return (
    <div data-trigger="" className={`btn2_main_wrap ${wrapClass}`}>
      <div aria-hidden="true" className={`btn2_main_layout ${wrapClass}`}>
        <div className="btn_main_text">{text}</div>
        <div className={`btn2_main_icon ${wrapClass}`}>
          <div className="icon-arrow w-embed">
            <ArrowCartIcon />
          </div>
        </div>
      </div>
      <div className="btn_clickable_wrap">
        <a href={href} className="btn_clickable_link is-nav w-inline-block">
          <span className="btn_clickable_text">{text}</span>
        </a>
      </div>
    </div>
  );
};

// Keep existing simplified QuickieHeaderItem (not part of order button styling)
type QuickieHeaderItemProps = React.PropsWithChildren<{ id?: string }>;
const QuickieHeaderItem: React.FC<QuickieHeaderItemProps> = ({ children, id }) => (
  <div id={id} className="quickie_header_list-item">
    <div className="quickie_header_list-icon">
      <img
        src="/Curex _ Quickie_files/6875213b82d8eea5e147187e_check_icon_white.svg"
        alt=""
        loading="lazy"
      />
    </div>
    <div>{children}</div>
  </div>
);

export default function Quickie(){
return <>
  {/* Last Published: Wed Aug 06 2025 17:33:17 GMT+0000 (Coordinated Universal Time) */}
  <meta charSet="utf-8" />
  <title>Curex | Quickie</title>
  <meta
    content="Understand what makes Curex different from traditional allergy shots. Curex is the most convenient and affordable allergy treatment available."
    name="description"
  />
  <meta content="Curex | Quickie" property="og:title" />
  <meta
    content="Understand what makes Curex different from traditional allergy shots. Curex is the most convenient and affordable allergy treatment available."
    property="og:description"
  />
  <meta content="Curex | Quickie" property="twitter:title" />
  <meta
    content="Understand what makes Curex different from traditional allergy shots. Curex is the most convenient and affordable allergy treatment available."
    property="twitter:description"
  />
  <meta property="og:type" content="website" />
  <meta content="summary_large_image" name="twitter:card" />
  <meta content="width=device-width, initial-scale=1" name="viewport" />
  <meta
    content="1xHN0hg3C5CqwNIKryBFli66wm3M8oB03I4o4B35CwE"
    name="google-site-verification"
  />
  <link
    href="/Curex _ Quickie_files/curex-dotcom.shared.e7fd9f0ba.min.css"
    rel="stylesheet"
    type="text/css"
  />
  <link href="https://fonts.googleapis.com" rel="preconnect" />
  <link
    href="https://fonts.gstatic.com"
    rel="preconnect"
    crossOrigin="anonymous"
  />
  <link
    href="/Curex _ Quickie_files/67288789da292934f510c88d_favicon.png"
    rel="shortcut icon"
    type="image/x-icon"
  />
  <link
    href="/Curex _ Quickie_files/67288790f1c7020921ee463d_webclip.png"
    rel="apple-touch-icon"
  />
  {/* begin Convert Experiences code */}
  {/* end Convert Experiences code */}
  <meta
    name="ahrefs-site-verification"
    content="3b8a7b31073afc29a4425b7694728bf7d489881dd28f9d5d06c6fefdbcdd89bf"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n  body {\n    overflow-wrap: anywhere;\n  }\n  .faqs {\n    counter-reset: faqIndex;\n  }\n\n  .faq-index::before {\n    counter-increment: faqIndex;\n    content: counter(faqIndex) ".";\n  }\n\n  .faq-group-header .faq-group-expander::before,\n  .faq-group-header .faq-group-expander::after {\n    content: "";\n    position: absolute;\n    transition: transform .33s ease;\n    width: 1.0625rem;\n    height: .1875rem;\n    background-color: #0573be;\n    transform: rotate(0);\n    top: 1rem;\n  }\n\n  .faq-group-header .faq-group-expander::before {\n    transform: rotate(90deg);\n  }\n\n  .faq-group-header.faq-group-header--expanded .faq-group-expander::before {\n    transform: rotate(0);\n  }\n\n  .cx-hidden {\n    display: none !important;\n  }\n\n  a.w-webflow-badge.w-webflow-badge {\n    display: none !important;\n    visibility: hidden !important;\n  }\n\n  {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-appearance: none;\n  }\n'
    }}
  />
  <div className="page-wrapper font-v2">
    <div className="global-styles w-embed">
      <style
        // Fixed: switched to template literal to avoid breaking on single quotes within CSS (e.g., url('...'))
        dangerouslySetInnerHTML={{
          __html: `
/* Get rid of top margin on first element in any rich text element */
.w-richtext > :not(div):first-child, .w-richtext > div:first-child > :first-child {
  margin-top: 0 !important;
}
/* Get rid of bottom margin on last element in any rich text element */
.w-richtext>:last-child, .w-richtext ol li:last-child, .w-richtext ul li:last-child {
  margin-bottom: 0 !important;
}
/* Typography inheritance reset */
a, p, .w-input, .w-select, .w-tab-link, .w-nav-link, .w-dropdown-btn, .w-dropdown-toggle, .w-dropdown-link {
  color: inherit;
  text-decoration: inherit;
  font-size: inherit;
}
.pointer-events-off { pointer-events: none; }
.pointer-events-on { pointer-events: auto; }
.div-square::after { content: ""; display: block; padding-bottom: 100%; }
main:focus-visible { outline: -webkit-focus-ring-color auto 0px; }
.container-medium, .container-small, .container-large { margin-right: auto !important; margin-left: auto !important; }
.w-input, .w-select, a { color: inherit; text-decoration: inherit; font-size: inherit; }
.text-style-3lines { display: -webkit-box; overflow: hidden; -webkit-line-clamp: 3; -webkit-box-orient: vertical; }
.text-style-2lines { display: -webkit-box; overflow: hidden; -webkit-line-clamp: 2; -webkit-box-orient: vertical; }
.truncate-width { width: 100%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.no-scrollbar { -ms-overflow-style: none; overflow: -moz-scrollbars-none; }
.no-scrollbar::-webkit-scrollbar { display: none; }
.display-inlineflex { display: inline-flex; }
.hide { display: none !important; }
@media screen and (max-width: 991px), screen and (max-width: 767px), screen and (max-width: 479px) { .hide, .hide-tablet { display: none !important; } }
@media screen and (max-width: 767px) { .hide-mobile-landscape { display: none !important; } }
@media screen and (max-width: 479px) { .hide-mobile { display: none !important; } }
.margin-0 { margin: 0 !important; }
.padding-0 { padding: 0 !important; }
.spacing-clean { padding:0 !important; margin:0 !important; }
.margin-top { margin-right:0 !important; margin-bottom:0 !important; margin-left:0 !important; }
.padding-top { padding-right:0 !important; padding-bottom:0 !important; padding-left:0 !important; }
.margin-right { margin-top:0 !important; margin-bottom:0 !important; margin-left:0 !important; }
.padding-right { padding-top:0 !important; padding-bottom:0 !important; padding-left:0 !important; }
.margin-bottom { margin-top:0 !important; margin-right:0 !important; margin-left:0 !important; }
.padding-bottom { padding-top:0 !important; padding-right:0 !important; padding-left:0 !important; }
.margin-left { margin-top:0 !important; margin-right:0 !important; margin-bottom:0 !important; }
.padding-left { padding-top:0 !important; padding-right:0 !important; padding-bottom:0 !important; }
.margin-horizontal { margin-top:0 !important; margin-bottom:0 !important; }
.padding-horizontal { padding-top:0 !important; padding-bottom:0 !important; }
.margin-vertical { margin-right:0 !important; margin-left:0 !important; }
.padding-vertical { padding-right:0 !important; padding-left:0 !important; }
.text-rich-text-legal ul li { list-style-image: url('/Curex _ Quickie_files/66fd697798d5c6da67325fa3_circle-disc.svg'); }
.text-rich-text-legal ol ol { list-style-type: lower-alpha; padding-left:20px; }
.text-rich-text-legal ol ul { padding-left:20px; margin-left:-30px; }
.btn_main_wrap.is-nav-text.w--current .btn_main_underline { opacity:1; }
.text-rich-text_bold-pink strong { color: var(--brand--peony); }
.text-rich-text_bold-pink2 h1 strong, .text-rich-text_bold-pink2 h2 strong, .text-rich-text_bold-pink2 h3 strong, .text-rich-text_bold-pink2 h4 strong { color: var(--brand--peony); font-weight:500; }
`
        }}
      />
    </div>
    <div
      data-animation="default"
      className="navbar6_component w-nav"
      data-easing2="ease"
      fs-scrolldisable-element="smart-nav"
      data-easing="ease"
      data-collapse="medium"
      data-w-id="5d23febe-29eb-e5a9-847a-f2e35aa617e1"
      role="banner"
      data-duration={400}
    >
      <div className="padding-global">
        <div className="navbar6_container">
          <a href="#" className="navbar6_logo-link w-nav-brand">
            <div className="logo_global">
              <img
                loading="eager"
                src="/Curex _ Quickie_files/66f64184a30e0919d28c5316_curex-logo.svg"
                alt="Curex logo black"
                className="logo_primary"
              />
            </div>
          </a>
          <nav
            role="navigation"
            id="w-node-_5d23febe-29eb-e5a9-847a-f2e35aa617e5-99ff2d34"
            className="navbar6_menu w-nav-menu"
          >
            <a href="#what-we-treat" className="navbar6_link w-nav-link">
              What We Treat
            </a>
            <a href="#how-it-works" className="navbar6_link w-nav-link">
              How It Works
            </a>
            <a href="#faq" className="navbar6_link w-nav-link">
              FAQ
            </a>
            <a href="/quiz" className="navbar6_link w-nav-link">
              Contact
            </a>
          </nav>
          <div
            id="w-node-_5d23febe-29eb-e5a9-847a-f2e35aa617f8-99ff2d34"
            className="navbar6_button-wrapper"
          >
            <div className="hide-tablet">
              <ButtonWithArrow variant="nav" text="Order Now" href="/quiz" />
            </div>
            <div className="navbar6_menu-button w-nav-button">
              <div className="menu-icon3">
                <div className="menu-icon3_line-top" />
                <div className="menu-icon3_line-middle">
                  <div className="menu-icon2_line-middle-inner" />
                </div>
                <div className="menu-icon3_line-bottom" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <main className="main-wrapper font-v2">
      <div className="section_quickie_header">
        <div className="padding-global">
          <div className="padding-section-medium2">
            <div className="quickie_header_component">
              <div
                id="w-node-_70462865-50b8-dbff-71ed-b1e1c6018d1a-99ff2d34"
                className="quickie_header_contents-left"
              >
                <div className="gallery_slider-wrapper">
                  <div
                    data-delay={4000}
                    data-animation="cross"
                    className="gallery_slider w-slider"
                    data-autoplay="false"
                    data-easing="ease"
                    data-hide-arrows="true"
                    data-disable-swipe="false"
                    data-autoplay-limit={0}
                    data-nav-spacing={0}
                    data-duration={500}
                    data-infinite="true"
                  >
                    <div className="gallery_mask w-slider-mask">
                      <div className="gallery_slide w-slide">
                        <div className="gallery_image-wrapper">
                          <img
                            alt=""
                            loading="eager"
                            src="/Curex _ Quickie_files/68751a543187b600191a9e7d_quickie-image0.avif"
                            className="gallery_image"
                          />
                        </div>
                      </div>
                      <div className="gallery_slide w-slide">
                        <div className="gallery_image-wrapper">
                          <img
                            alt=""
                            loading="eager"
                            src="/Curex _ Quickie_files/68751a34a9e60b61d5b0a195_quickie-image1.avif"
                            className="gallery_image"
                          />
                        </div>
                      </div>
                      <div className="gallery_slide w-slide">
                        <div className="gallery_image-wrapper">
                          <img
                            alt=""
                            loading="eager"
                            src="/Curex _ Quickie_files/68751a33cae2577fe52fab4b_quickie-image2.avif"
                            className="gallery_image"
                          />
                        </div>
                      </div>
                      <div className="gallery_slide w-slide">
                        <div className="gallery_image-wrapper">
                          <img
                            alt=""
                            loading="eager"
                            src="/Curex _ Quickie_files/68751a33a3be8865c09a556f_quickie-image3.avif"
                            className="gallery_image"
                          />
                        </div>
                      </div>
                      <div className="gallery_slide w-slide">
                        <div className="gallery_image-wrapper">
                          <img
                            alt=""
                            loading="eager"
                            src="/Curex _ Quickie_files/68751a332fc894e8927a50b1_quickie-image4.avif"
                            className="gallery_image"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="gallery_arrow w-slider-arrow-left" />
                    <div className="gallery_arrow w-slider-arrow-right" />
                    <div className="gallery_nav w-slider-nav w-slider-nav-invert" />
                  </div>
                  <div className="gallery_nav is-absolute">
                    <div className="gallery_thumb-wrapper">
                      <img
                        sizes="(max-width: 1200px) 100vw, 1200px"
                        /* removed srcSet (localized) */
                        alt=""
                        loading="eager"
                        src="/Curex _ Quickie_files/68751a543187b600191a9e7d_quickie-image0.avif"
                        className="gallery_thumb"
                      />
                    </div>
                    <div className="gallery_thumb-wrapper">
                      <img
                        sizes="(max-width: 1350px) 100vw, 1350px"
                        /* removed srcSet (localized) */
                        alt=""
                        loading="eager"
                        src="/Curex _ Quickie_files/68751a34a9e60b61d5b0a195_quickie-image1.avif"
                        className="gallery_thumb"
                      />
                    </div>
                    <div className="gallery_thumb-wrapper">
                      <img
                        sizes="(max-width: 1350px) 100vw, 1350px"
                        /* removed srcSet (localized) */
                        alt=""
                        loading="eager"
                        src="/Curex _ Quickie_files/68751a33cae2577fe52fab4b_quickie-image2.avif"
                        className="gallery_thumb"
                      />
                    </div>
                    <div className="gallery_thumb-wrapper">
                      <img
                        sizes="(max-width: 1351px) 100vw, 1351px"
                        /* removed srcSet (localized) */
                        alt=""
                        loading="eager"
                        src="/Curex _ Quickie_files/68751a33a3be8865c09a556f_quickie-image3.avif"
                        className="gallery_thumb"
                      />
                    </div>
                    <div className="gallery_thumb-wrapper">
                      <img
                        sizes="(max-width: 1350px) 100vw, 1350px"
                        /* removed srcSet (localized) */
                        alt=""
                        loading="eager"
                        src="/Curex _ Quickie_files/68751a332fc894e8927a50b1_quickie-image4.avif"
                        className="gallery_thumb"
                      />
                    </div>
                  </div>
                  <div className="w-embed">
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          "\n.gallery_nav .w-slider-dot {\n\twidth: 100%;\n  height: auto;\n  aspect-ratio: 1 / 1;\n  margin-left: 0px;\n  margin-right: 0px;\n  margin: 0 0;\n  opacity: 0;\n}\n\n.gallery_nav .w-slider-nav {\n height: auto;\n padding-top: 0px;\n position: static;\n}\n\n@media screen and (max-width:767px) { .gallery_nav .w-slider-dot { \n\t/* width: 1rem; */\n} }\n\n"
                      }}
                    />
                  </div>
                </div>
                <div className="quickie_header_list-wrapper is-tablet">
                  <div>
                    <strong>What’s Included?</strong>
                  </div>
                  <div className="quickie_header_list">
                    <QuickieHeaderItem id="w-node-d98e4688-bbdc-2428-91ea-e73957c467d7-99ff2d34">
                      <span className="text-weight-semibold">Personalized formula</span>{' '}for congestion, runny nose, itching, sneezing, post nasal drip.
                    </QuickieHeaderItem>
                    <QuickieHeaderItem id="w-node-_55ca4f41-4c8d-6ea1-2b54-a3551747d0bb-99ff2d34">
                      <span className="text-weight-semibold">Clinical review</span>{' '}of your medical history and a personalized prescription.
                    </QuickieHeaderItem>
                    <QuickieHeaderItem id="w-node-d98e4688-bbdc-2428-91ea-e73957c467bc-99ff2d34">
                      Nasal spray.{" "}<span className="text-weight-semibold">Up to 30 days supply</span>{' '}when used twice per day. Use daily for best results.
                    </QuickieHeaderItem>
                    <QuickieHeaderItem id="w-node-d98e4688-bbdc-2428-91ea-e73957c467ce-99ff2d34">
                      Nasal application ensures it starts{' '}<span className="text-weight-semibold">working within 20 mins and provides 12 hour relief</span>.
                    </QuickieHeaderItem>
                    <QuickieHeaderItem id="w-node-d98e4688-bbdc-2428-91ea-e73957c467df-99ff2d34">
                      For{' '}<span className="text-weight-semibold">best long-term results</span>{' '}combine with allergy immunotherapy.
                    </QuickieHeaderItem>
                  </div>
                </div>
              </div>
              <div
                id="w-node-_70462865-50b8-dbff-71ed-b1e1c6018d01-99ff2d34"
                className="quickie_header_contents-right"
              >
                <div className="margin-bottom margin-small">
                  <div className="stats3_wrapper">
                    <div className="stats3_left">
                      <img
                        src="/Curex _ Quickie_files/685e8eb7ea6f5dc465250dfb_Icon_nr_1.avif"
                        loading="eager"
                        alt=""
                        className="stats3_icon1"
                      />
                      <div>
                        <strong>#1</strong> Online Allergy Clinic
                      </div>
                    </div>
                    <div className="stats3_right">
                      <img
                        src="/Curex _ Quickie_files/685e903f9d913c88b47fbca7_Users.avif"
                        loading="eager"
                        alt=""
                        className="stats3_icon2"
                      />
                      <div className="stats3_text-wrapper">
                        <img
                          src="/Curex _ Quickie_files/685e907dc7e20f0db1f948ca_stars2.svg"
                          loading="lazy"
                          alt=""
                        />
                        <div>
                          Trusted by <strong>50,000+</strong> Users
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="margin-bottom margin-small">
                  <h1 className="heading-h1-v2">
                    <span className="text-color-pink3">Quickie</span> Nasal
                    Spray
                  </h1>
                </div>
                <div className="margin-bottom margin-small">
                  <div className="w-richtext">
                    <p>
                      <strong>
                        Get fast-acting prescription relief for allergies and
                        congestion.
                      </strong>
                    </p>
                    <p>
                      This advanced, allergist-prescribed formula is designed
                      for people who haven’t found sufficient relief with
                      over-the-counter medications.
                    </p>
                  </div>
                  <div className="quickie_header_badges-wrapper">
                    <div className="quickie_header_badge">
                      <img
                        src="/Curex _ Quickie_files/68751505a3865b3824a7fcce_icon-guarantee.svg"
                        loading="lazy"
                        alt=""
                      />
                      <div>Curex Guarantee</div>
                    </div>
                    <div className="quickie_header_badge">
                      <img
                        src="/Curex _ Quickie_files/68751505a3865b3824a7fcce_icon-guarantee.svg"
                        loading="lazy"
                        alt=""
                      />
                      <div>HSA / FSA eligible</div>
                    </div>
                  </div>
                </div>
                <div className="food-s2_header_button-wrapper">
                  <ButtonWithArrow text="Order Now $49" href="/quiz" />
                </div>
                <div>
                  <em>Only pay if prescribed. 30-day money back guarantee</em>
                </div>
                <div className="quickie_header_list-wrapper hide-tablet">
                  <div>
                    <strong>What’s Included?</strong>
                  </div>
                  <div className="quickie_header_list">
                    <QuickieHeaderItem id="w-node-_3ba51eb9-b9eb-c914-421f-b3f5a4504e56-99ff2d34">
                      <span className="text-weight-semibold">Personalized formula</span>{' '}for congestion, runny nose, itching, sneezing, post nasal drip.
                    </QuickieHeaderItem>
                    <QuickieHeaderItem id="w-node-ea64d3e0-2407-aaaa-ade9-2060db6ef7a4-99ff2d34">
                      <span className="text-weight-semibold">Clinical review</span>{' '}of your medical history and a personalized prescription.
                    </QuickieHeaderItem>
                    <QuickieHeaderItem id="w-node-_055a8453-7600-6ce5-6dcd-b89515ec20d3-99ff2d34">
                      Nasal spray.{" "}<span className="text-weight-semibold">Up to 30 days supply</span>{' '}when used twice per day. Use daily for best results.
                    </QuickieHeaderItem>
                    <QuickieHeaderItem id="w-node-_81597f37-da87-2c32-567c-de172e2f7a3f-99ff2d34">
                      Nasal application ensures it starts{' '}<span className="text-weight-semibold">working within 20 mins and provides 12 hour relief</span>.
                    </QuickieHeaderItem>
                    <QuickieHeaderItem id="w-node-b543af79-3427-7288-70f5-814af51f3975-99ff2d34">
                      For{' '}<span className="text-weight-semibold">best long-term results</span>{' '}combine with allergy immunotherapy.
                    </QuickieHeaderItem>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="section_logos2">
        <div className="logos2_component">
          <div className="logos2_list">
            <div
              id="w-node-a8c238c7-cebd-b1ef-8abe-004a53fb3bdb-99ff2d34"
              className="logos2_wrapper"
            >
              <img
                loading="eager"
                src="/Curex _ Quickie_files/685eb33c7f86ba35e8910258_OCBS.svg"
                alt=""
                className="logos2_logo"
              />
            </div>
            <div
              id="w-node-a8c238c7-cebd-b1ef-8abe-004a53fb3bdd-99ff2d34"
              className="logos2_wrapper"
            >
              <img
                loading="eager"
                src="/Curex _ Quickie_files/685eb33cd411c8412e6332ea_Healthline.svg"
                alt=""
                className="logos2_logo"
              />
            </div>
            <div
              id="w-node-a8c238c7-cebd-b1ef-8abe-004a53fb3bdf-99ff2d34"
              className="logos2_wrapper"
            >
              <img
                loading="eager"
                src="/Curex _ Quickie_files/685eb33ca8e91546677e4da5_AXIOS.svg"
                alt=""
                className="logos2_logo"
              />
            </div>
            <div
              id="w-node-a8c238c7-cebd-b1ef-8abe-004a53fb3be1-99ff2d34"
              className="logos2_wrapper"
            >
              <img
                loading="eager"
                src="/Curex _ Quickie_files/685eb33cf652c752dc1564ae_MensHealth.svg"
                alt=""
                className="logos2_logo"
              />
            </div>
            <div
              id="w-node-a8c238c7-cebd-b1ef-8abe-004a53fb3be3-99ff2d34"
              className="logos2_wrapper"
            >
              <img
                loading="eager"
                src="/Curex _ Quickie_files/685eb33cab4472680ef07c97_FOX.svg"
                alt=""
                className="logos2_logo"
              />
            </div>
            <div
              id="w-node-a8c238c7-cebd-b1ef-8abe-004a53fb3be5-99ff2d34"
              className="logos2_wrapper"
            >
              <img
                loading="eager"
                src="/Curex _ Quickie_files/685eb33cdc7b6e1282401fc3_USA_TODAY.svg"
                alt=""
                className="logos2_logo"
              />
            </div>
          </div>
          <div className="logos2_list">
            <div
              id="w-node-_7d2c1f40-afe1-586d-a141-f9b22dbf5f0b-99ff2d34"
              className="logos2_wrapper"
            >
              <img
                loading="eager"
                src="/Curex _ Quickie_files/685eb33c7f86ba35e8910258_OCBS.svg"
                alt=""
                className="logos2_logo"
              />
            </div>
            <div
              id="w-node-_7d2c1f40-afe1-586d-a141-f9b22dbf5f0d-99ff2d34"
              className="logos2_wrapper"
            >
              <img
                loading="eager"
                src="/Curex _ Quickie_files/685eb33cd411c8412e6332ea_Healthline.svg"
                alt=""
                className="logos2_logo"
              />
            </div>
            <div
              id="w-node-_7d2c1f40-afe1-586d-a141-f9b22dbf5f0f-99ff2d34"
              className="logos2_wrapper"
            >
              <img
                loading="eager"
                src="/Curex _ Quickie_files/685eb33ca8e91546677e4da5_AXIOS.svg"
                alt=""
                className="logos2_logo"
              />
            </div>
            <div
              id="w-node-_7d2c1f40-afe1-586d-a141-f9b22dbf5f11-99ff2d34"
              className="logos2_wrapper"
            >
              <img
                loading="eager"
                src="/Curex _ Quickie_files/685eb33cf652c752dc1564ae_MensHealth.svg"
                alt=""
                className="logos2_logo"
              />
            </div>
            <div
              id="w-node-_7d2c1f40-afe1-586d-a141-f9b22dbf5f13-99ff2d34"
              className="logos2_wrapper"
            >
              <img
                loading="eager"
                src="/Curex _ Quickie_files/685eb33cab4472680ef07c97_FOX.svg"
                alt=""
                className="logos2_logo"
              />
            </div>
            <div
              id="w-node-_7d2c1f40-afe1-586d-a141-f9b22dbf5f15-99ff2d34"
              className="logos2_wrapper"
            >
              <img
                loading="eager"
                src="/Curex _ Quickie_files/685eb33cdc7b6e1282401fc3_USA_TODAY.svg"
                alt=""
                className="logos2_logo"
              />
            </div>
          </div>
          <div className="logos2_list">
            <div
              id="w-node-_2fbbd429-0f1f-386c-48ff-e022775a292e-99ff2d34"
              className="logos2_wrapper"
            >
              <img
                loading="eager"
                src="/Curex _ Quickie_files/685eb33c7f86ba35e8910258_OCBS.svg"
                alt=""
                className="logos2_logo"
              />
            </div>
            <div
              id="w-node-_2fbbd429-0f1f-386c-48ff-e022775a2930-99ff2d34"
              className="logos2_wrapper"
            >
              <img
                loading="eager"
                src="/Curex _ Quickie_files/685eb33cd411c8412e6332ea_Healthline.svg"
                alt=""
                className="logos2_logo"
              />
            </div>
            <div
              id="w-node-_2fbbd429-0f1f-386c-48ff-e022775a2932-99ff2d34"
              className="logos2_wrapper"
            >
              <img
                loading="eager"
                src="/Curex _ Quickie_files/685eb33ca8e91546677e4da5_AXIOS.svg"
                alt=""
                className="logos2_logo"
              />
            </div>
            <div
              id="w-node-_2fbbd429-0f1f-386c-48ff-e022775a2934-99ff2d34"
              className="logos2_wrapper"
            >
              <img
                loading="eager"
                src="/Curex _ Quickie_files/685eb33cf652c752dc1564ae_MensHealth.svg"
                alt=""
                className="logos2_logo"
              />
            </div>
            <div
              id="w-node-_2fbbd429-0f1f-386c-48ff-e022775a2936-99ff2d34"
              className="logos2_wrapper"
            >
              <img
                loading="eager"
                src="/Curex _ Quickie_files/685eb33cab4472680ef07c97_FOX.svg"
                alt=""
                className="logos2_logo"
              />
            </div>
            <div
              id="w-node-_2fbbd429-0f1f-386c-48ff-e022775a2938-99ff2d34"
              className="logos2_wrapper"
            >
              <img
                loading="eager"
                src="/Curex _ Quickie_files/685eb33cdc7b6e1282401fc3_USA_TODAY.svg"
                alt=""
                className="logos2_logo"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="what-we-treat" className="section_quickie_compare">
        <div className="padding-global">
          <div className="container-large3">
            <div className="padding-section-medium">
              <div className="quickie_compare_component">
                <div className="margin-bottom margin-xxlarge">
                  <div className="text-align-center">
                    <div>
                      <div className="margin-bottom margin-small">
                        <h2 className="heading-h2-v2 quickie_compare_heading">
                          Formulated for{" "}
                          <span className="text-color-pink3">Your Body.</span>{" "}
                          Clinically Backed Quickie is a{" "}
                          <span className="text-color-pink3">5-in-1</span> Nasal
                          Spray
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="quickie_compare_table">
                  <div className="quickie_compare_table_row-header">
                    <div className="quickie_compare_table_row-header-first" />
                    <div className="quickie_compare_table_row-header-cell">
                      <div>Antihistamine</div>
                    </div>
                    <div className="quickie_compare_table_row-header-cell">
                      <div>Corticosteroid</div>
                    </div>
                    <div className="quickie_compare_table_row-header-cell">
                      <div>Decongestant</div>
                    </div>
                    <div className="quickie_compare_table_row-header-cell">
                      <div>Anticholinergic</div>
                    </div>
                    <div className="quickie_compare_table_row-header-cell">
                      <div>Hyaluronic</div>
                    </div>
                  </div>
                  <div className="quickie_compare_table_col">
                    <div className="quickie_compare_table_col-header-cell is-pink">
                      <div>Quickie</div>
                      <div className="quickie_compare_ring" />
                    </div>
                    <div className="quickie_compare_table_cell is-banded is-first">
                      <div className="quickie_compare_table_check-pink">
                        <img
                          src="/Curex _ Quickie_files/6875213b82d8eea5e147187e_check_icon_white.svg"
                          loading="lazy"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="quickie_compare_table_cell">
                      <div className="quickie_compare_table_check-pink">
                        <img
                          src="/Curex _ Quickie_files/6875213b82d8eea5e147187e_check_icon_white.svg"
                          loading="lazy"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="quickie_compare_table_cell is-banded is-first">
                      <div className="quickie_compare_table_check-pink">
                        <img
                          src="/Curex _ Quickie_files/6875213b82d8eea5e147187e_check_icon_white.svg"
                          loading="lazy"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="quickie_compare_table_cell">
                      <div className="quickie_compare_table_check-pink">
                        <img
                          src="/Curex _ Quickie_files/6875213b82d8eea5e147187e_check_icon_white.svg"
                          loading="lazy"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="quickie_compare_table_cell is-banded is-first">
                      <div className="quickie_compare_table_check-pink">
                        <img
                          src="/Curex _ Quickie_files/6875213b82d8eea5e147187e_check_icon_white.svg"
                          loading="lazy"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="quickie_compare_table_col">
                    <div className="quickie_compare_table_col-header-cell">
                      <div>AstePro</div>
                    </div>
                    <div className="quickie_compare_table_cell is-banded">
                      <div className="quickie_compare_table_check">
                        <img
                          src="/Curex _ Quickie_files/6875213b82d8eea5e147187e_check_icon_white.svg"
                          loading="lazy"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="quickie_compare_table_cell" />
                    <div className="quickie_compare_table_cell is-banded" />
                    <div className="quickie_compare_table_cell" />
                    <div className="quickie_compare_table_cell is-banded" />
                  </div>
                  <div className="quickie_compare_table_col">
                    <div className="quickie_compare_table_col-header-cell">
                      <div>Nasonex</div>
                    </div>
                    <div className="quickie_compare_table_cell is-banded" />
                    <div className="quickie_compare_table_cell">
                      <div className="quickie_compare_table_check">
                        <img
                          src="/Curex _ Quickie_files/6875213b82d8eea5e147187e_check_icon_white.svg"
                          loading="lazy"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="quickie_compare_table_cell is-banded" />
                    <div className="quickie_compare_table_cell" />
                    <div className="quickie_compare_table_cell is-banded" />
                  </div>
                  <div className="quickie_compare_table_col">
                    <div className="quickie_compare_table_col-header-cell">
                      <div>Afrin</div>
                    </div>
                    <div className="quickie_compare_table_cell is-banded" />
                    <div className="quickie_compare_table_cell" />
                    <div className="quickie_compare_table_cell is-banded">
                      <div className="quickie_compare_table_check">
                        <img
                          src="/Curex _ Quickie_files/6875213b82d8eea5e147187e_check_icon_white.svg"
                          loading="lazy"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="quickie_compare_table_cell" />
                    <div className="quickie_compare_table_cell is-banded" />
                  </div>
                  <div className="quickie_compare_table_col">
                    <div className="quickie_compare_table_col-header-cell">
                      <div>Atrovent</div>
                    </div>
                    <div className="quickie_compare_table_cell is-banded" />
                    <div className="quickie_compare_table_cell" />
                    <div className="quickie_compare_table_cell is-banded" />
                    <div className="quickie_compare_table_cell">
                      <div className="quickie_compare_table_check">
                        <img
                          src="/Curex _ Quickie_files/6875213b82d8eea5e147187e_check_icon_white.svg"
                          loading="lazy"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="quickie_compare_table_cell is-banded" />
                  </div>
                  <div className="quickie_compare_table_col">
                    <div className="quickie_compare_table_col-header-cell">
                      <div>
                        NeilMed
                        <br />
                        NasoGel
                      </div>
                    </div>
                    <div className="quickie_compare_table_cell is-banded is-last" />
                    <div className="quickie_compare_table_cell" />
                    <div className="quickie_compare_table_cell is-banded is-last" />
                    <div className="quickie_compare_table_cell" />
                    <div className="quickie_compare_table_cell is-banded is-last">
                      <div className="quickie_compare_table_check">
                        <img
                          src="/Curex _ Quickie_files/6875213b82d8eea5e147187e_check_icon_white.svg"
                          loading="lazy"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="quickie_compare_table-footer">
                  <p>
                    Quickie Nasal Spray isn’t your average over-the-counter
                    medication
                  </p>
                </div>
                <div className="quickie_compare_cards">
                  <div className="quickie_compare_card">
                    <img
                      src="/Curex _ Quickie_files/6875261b7bd2e25aebde698c_quickie_compare-1.png"
                      loading="lazy"
                      sizes="(max-width: 700px) 100vw, 700px"
                      /* removed srcSet (localized) */
                      alt=""
                      className="quickie_compare_image"
                    />
                    <p>
                      It’s a physician-prescribed,{" "}
                      <span className="text-weight-semibold">
                        custom-compounded formula designed to target all your
                        nasal symptoms at once{" "}
                      </span>
                      — congestion, runny nose, post-nasal drip, sneezing, and
                      more.
                    </p>
                  </div>
                  <div className="quickie_compare_card">
                    <img
                      src="/Curex _ Quickie_files/6875261b4bcf27c4fd622e81_quickie_compare-2.png"
                      loading="lazy"
                      sizes="(max-width: 700px) 100vw, 700px"
                      /* removed srcSet (localized) */
                      alt=""
                      className="quickie_compare_image"
                    />
                    <p>
                      <span className="text-weight-semibold">
                        Formulated by doctors
                      </span>{" "}
                      and pharmacologists and backed by clinical research,{" "}
                      <span className="text-weight-semibold">
                        Quickie combines five powerful ingredients into one easy
                        spray.
                      </span>
                    </p>
                  </div>
                  <div className="quickie_compare_card">
                    <img
                      src="/Curex _ Quickie_files/6875261b84767b52ec3d5e3f_quickie_compare-3.png"
                      loading="lazy"
                      sizes="(max-width: 700px) 100vw, 700px"
                      /* removed srcSet (localized) */
                      alt=""
                      className="quickie_compare_image"
                    />
                    <p>
                      <span className="text-weight-semibold">
                        Typical prescription may include the following
                        ingredients:
                      </span>{" "}
                      Azelastine HCL 0.15%, Mometasone Furoate 0.05%,
                      Oxymetazoline HCL 0.0125%, Ipratroprium 0.06%, Sodium
                      Hyaluronate 0.04%.
                    </p>
                  </div>
                </div>
                <div className="quickie_compare_css w-embed">
                  {/* Scroll bar styling*/}
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n/* Width */\n::-webkit-scrollbar {\n width: 8px;\n height: 8px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n background: #fff;\n border-radius: 10px;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n background: var(--_brand-v2---brand--pink);\n border-radius: 10px;\n}\n\n/* Handle Hover */\n::-webkit-scrollbar-thumb:hover {\n background: #555;\n}\n"
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="how-it-works" className="section_quickie_research">
        <div className="padding-global">
          <div className="container-large3">
            <div className="padding-section-xlarge2">
              <div className="margin-bottom margin-xxlarge">
                <div className="text-align-center">
                  <div className="max-width-xxlarge align-center">
                    <div className="margin-bottom margin-small">
                      <h2 className="heading-h2-v2">
                        <span className="text-color-pink3">
                          Unlock the Power
                        </span>{" "}
                        of Science
                      </h2>
                    </div>
                    <p>
                      Backed by published clinical studies on Quickie’s active
                      ingredients
                    </p>
                  </div>
                </div>
              </div>
              <div className="quickie_research_component">
                <div
                  id="w-node-f7d30660-c751-ca73-3f84-c7a3b730aa9b-99ff2d34"
                  className="quickie_research_card1"
                >
                  <div className="quickie_research_card1-content">
                    <div className="quickie_research_card1-image-wrapper">
                      <img
                        src="/Curex _ Quickie_files/6875fff08fc06f03ff765fcc_quickie-research-image1.png"
                        loading="lazy"
                        sizes="(max-width: 859px) 100vw, 859px"
                        /* removed srcSet (localized) */
                        alt=""
                        className="quickie_research_card1-image"
                      />
                    </div>
                    <p className="quickie_research_card-heading">
                      Immediate Relief. Improvement within Days.
                    </p>
                    <p>
                      91% of patients using a steroid + antihistamine combo
                      reported{" "}
                      <span className="text-weight-semibold">
                        significant symptom improvement within 7 days.
                      </span>
                    </p>
                  </div>
                  <div className="quickie_research_card1-decor1" />
                  <div className="quickie_research_card1-decor2" />
                </div>
                <div
                  id="w-node-_326e55b4-a0a0-93fb-5f0e-412284c0cafa-99ff2d34"
                  className="quickie_research_card2"
                >
                  <img
                    src="/Curex _ Quickie_files/68752619d993b092fe3f68ea_icon-breathe.svg"
                    loading="lazy"
                    alt=""
                    className="quickie_research_card2-image"
                  />
                  <div className="quickie_research_card2-number">45%</div>
                  <p>
                    Breathe 45% easier with decongestant + steroid combo. Less
                    rebound, more relief!
                  </p>
                </div>
                <div
                  id="w-node-_51888d49-772a-9602-723c-29f9c23daa93-99ff2d34"
                  className="quickie_research_card3"
                >
                  <img
                    src="/Curex _ Quickie_files/6875261924e1220c612ff8ee_icon-stopwatch.svg"
                    loading="lazy"
                    alt=""
                    className="quickie_research_card3-image"
                  />
                  <p className="quickie_research_card3-heading">
                    Quick Relief.
                    <br />
                    Real Results.
                  </p>
                  <p>
                    <span className="text-weight-semibold">Faster relief:</span>{" "}
                    Patients reported feeling improvement{" "}
                    <span className="text-weight-semibold">
                      within 10–30 minutes of use.
                    </span>
                  </p>
                </div>
                <div
                  id="w-node-bdbd0521-c0be-8e94-340e-a51748c38856-99ff2d34"
                  className="quickie_research_card4"
                >
                  <div className="quickie_research_card4-image-wrapper">
                    <img
                      src="/Curex _ Quickie_files/6875261b934d16f582a8a194_quickie-research3.png"
                      loading="lazy"
                      sizes="(max-width: 812px) 100vw, 812px"
                      /* removed srcSet (localized) */
                      alt=""
                      className="quickie_research_card4-image"
                    />
                    <div className="quickie_research_card4-overlay" />
                    <div className="quickie_research_card4-text">
                      5
                      <span className="quickie_research_card4-text-inner">
                        {" "}
                        in{" "}
                      </span>
                      1
                    </div>
                  </div>
                  <div className="quickie_research_card4-content">
                    <p>
                      <span className="text-weight-semibold">
                        5-in-1 formulation improves adherence and convenience
                      </span>
                      , helping patients stay consistent and feel better faster.
                    </p>
                  </div>
                </div>
                <div
                  id="w-node-_92328e9a-e342-5bc6-01e6-8a307070673e-99ff2d34"
                  className="quickie_research_card5"
                >
                  <div className="quickie_research_card5-image-wrapper">
                    <img
                      src="/Curex _ Quickie_files/6875261c3d94983064f406b1_quickie_research1.png"
                      loading="lazy"
                      sizes="(max-width: 1386px) 100vw, 1386px"
                      /* removed srcSet (localized) */
                      alt=""
                      className="quickie_research_card5-image"
                    />
                    <div className="quickie_research_card5-overlay" />
                  </div>
                  <div className="quickie_research_card5-content">
                    <div className="quickie_research_card5-heading">
                      Powerful Relief from Rhinorrhea
                    </div>
                    <p>
                      <span className="text-weight-semibold">
                        60–80% reduction in rhinorrhea
                      </span>{" "}
                      with ipratropium bromide, including in nonallergic and
                      cold-related cases.
                    </p>
                  </div>
                </div>
                <div
                  id="w-node-cc62bf78-ce97-71a5-63ec-307ab8129acd-99ff2d34"
                  className="quickie_research_card6"
                >
                  <div className="quickie_research_card6-content">
                    <img
                      src="/Curex _ Quickie_files/6875261a224fe30c6ab215bf_icon-heart.svg"
                      loading="lazy"
                      alt=""
                      className="quickie_research_card6-image"
                    />
                    <div className="quickie_research_card6-badge">
                      <div>Power of Healing</div>
                    </div>
                    <div className="quickie_research_card6-heading">
                      Hyaluronic Acid Heals &amp; Hydrates
                    </div>
                    <p className="no-margin-bottom">
                      Hyaluronic acid keeps nasal passages moistured and
                      supports healing of the nasal lining in 90% of patients.
                    </p>
                  </div>
                  <div className="quickie_research_card6-decor1" />
                  <div className="quickie_research_card6-decor2" />
                </div>
                <div className="quickie_research_decor" />
              </div>
              <div className="quickie_research_button-wrapper">
                <ButtonWithArrow text="Order Now $49" href="/quiz" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section_quickie_why">
        <div className="padding-global">
          <div className="container-large3">
            <div className="padding-section-xlarge2">
              <div className="margin-bottom margin-xxlarge">
                <div className="text-align-center">
                  <div className="max-width-xxlarge align-center">
                    <div className="margin-bottom margin-small">
                      <h2 className="heading-h2-v2">
                        Why <span className="text-color-pink3">Quickie</span>{" "}
                        Works
                      </h2>
                    </div>
                    <p>Straight to the source. That’s Curex</p>
                  </div>
                </div>
              </div>
              <div className="quickie_why_component">
                <div className="quickie_why_badge1">
                  <img
                    src="/Curex _ Quickie_files/68752619d4c792f998d2c1f0_icon-target.svg"
                    loading="lazy"
                    alt=""
                    className="quickie_why_badge-icon"
                  />
                  <div>Targets every major nasal symptom in one spray</div>
                </div>
                <div className="quickie_why_badge2">
                  <img
                    src="/Curex _ Quickie_files/68752619afa16bbc2efe3a8e_icon-search-person.svg"
                    loading="lazy"
                    alt=""
                    className="quickie_why_badge-icon"
                  />
                  <div>
                    Personalized to your symptoms by a licensed medical provider
                  </div>
                </div>
                <div className="quickie_why_badge3">
                  <img
                    src="/Curex _ Quickie_files/68763972a35009637b695606_icon-studies.svg"
                    loading="lazy"
                    alt=""
                    className="quickie_why_badge-icon"
                  />
                  <div>
                    Backed by real-world studies and physician experience
                  </div>
                </div>
                <div className="quickie_why_badge4">
                  <img
                    src="/Curex _ Quickie_files/68763971defa245c946feabb_icon-shield.svg"
                    loading="lazy"
                    alt=""
                    className="quickie_why_badge-icon"
                  />
                  <div>
                    Compounded by a specialty allergy pharmacy for quality and
                    safety
                  </div>
                </div>
                <div className="quickie_why_image-wrapper">
                  <img
                    src="/Curex _ Quickie_files/6875261bafcc9b4a7038c180_quickie_target_bg.png"
                    loading="lazy"
                    sizes="(max-width: 1558px) 100vw, 1558px"
                    /* removed srcSet (localized) */
                    alt=""
                    className="quickie_why_image"
                  />
                  <img
                    src="/Curex _ Quickie_files/6875261bf9380177ca2a0dcb_quickie_product.png"
                    loading="lazy"
                    alt=""
                    className="quickie_why_image2"
                  />
                </div>
                <div className="quickie_why_card">
                  <p className="no-margin-bottom">
                    Quickie is a compounded prescription medication, prepared by
                    a licensed pharmacy. It is not reviewed or approved by the
                    FDA. It is prepared based on your provider’s evaluation of
                    your symptoms and needs. Individual results may vary.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section_quickie_how">
        <div className="padding-global">
          <div className="container-large3">
            <div className="padding-section-xlarge2">
              <div className="margin-bottom margin-xxlarge">
                <div className="text-align-center">
                  <div className="max-width-xxlarge align-center">
                    <div className="margin-bottom margin-small">
                      <h2 className="heading-h2-v2">How It Works</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-layout-grid quickie_how_component">
                <div
                  id="w-node-_705cd092-4dbd-4262-7d05-c1a947e7786e-99ff2d34"
                  className="quickie_how_card"
                >
                  <div className="quickie_how_card-content">
                    <div className="margin-bottom margin-small">
                      <img
                        src="/Curex _ Quickie_files/68752619ed34a81237e791f8_icon-online-yellow.svg"
                        loading="lazy"
                        alt=""
                        className="quickie_how_icon"
                      />
                    </div>
                    <div>Medical Survey &amp; Online Consultation</div>
                  </div>
                  <div className="quickie_how_counter">1</div>
                </div>
                <div
                  id="w-node-_1a44b342-f7b4-4d8f-1be7-13910d2b230c-99ff2d34"
                  className="quickie_how_card"
                >
                  <div className="quickie_how_card-content">
                    <div className="margin-bottom margin-small">
                      <img
                        src="/Curex _ Quickie_files/68752619e853b2f5b75df2b8_icon-person-yellow.svg"
                        loading="lazy"
                        alt=""
                        className="quickie_how_icon"
                      />
                    </div>
                    <div>Custom Quickie Spray delivered to your door</div>
                  </div>
                  <div className="quickie_how_counter">2</div>
                </div>
                <div
                  id="w-node-_9be40f9e-34a0-4e45-69a4-983b954dfcab-99ff2d34"
                  className="quickie_how_card"
                >
                  <div className="quickie_how_card-content">
                    <div className="margin-bottom margin-small">
                      <img
                        src="/Curex _ Quickie_files/687526197bd2e25aebde6845_icon-heart-handshake.svg"
                        loading="lazy"
                        alt=""
                        className="quickie_how_icon"
                      />
                    </div>
                    <div>Continuous Care by Text or Video</div>
                  </div>
                  <div className="quickie_how_counter">3</div>
                </div>
              </div>
              <div className="quickie_how_button-wrapper">
                <ButtonWithArrow text="Order Now $49" href="/quiz" />
                <div>Quick Relief. Real Results.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="quickie_how_decor" />
      </section>
      <section className="section_food-s2_testimonials">
        <div className="padding-global">
          <div className="container-large3">
            <div className="padding-section-xlarge2">
              <div className="food-s2_testimonial_component">
                <div className="margin-bottom margin-xxlarge">
                  <div className="text-align-center">
                    <div className="margin-bottom margin-small">
                      <h2 className="heading-h2-v2">
                        Join over{" "}
                        <span className="text-color-pink3">50,000</span> Curex
                        users!
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="food-s2_testimonial_list">
                  <div className="food-s2_testimonial_col">
                    <div className="food-s2_testimonial_card">
                      <div>
                        Quickie cleared me up in minutes! Finally something that
                        actually works!”
                      </div>
                      <div className="food-s2_testimonial_rating-wrapper">
                        <img
                          loading="lazy"
                          src="/Curex _ Quickie_files/685e907dc7e20f0db1f948ca_stars2.svg"
                          alt=""
                          className="food-s2_testimonial_rating-image"
                        />
                      </div>
                      <div className="food-s2_testimonial_client">
                        <div className="food-s2_testimonial_client-image-wrapper">
                          <img
                            loading="lazy"
                            src="/Curex _ Quickie_files/68627da5413119d9c6dae89f_Profile_picture-3.avif"
                            alt=""
                            className="food-s2_testimonial_customer-image"
                          />
                        </div>
                        <div className="food-s2_testimonial_client-info">
                          <div className="text-weight-semibold">Anna M.</div>
                          <div className="quickie_testimonial_location">
                            Boston, MA
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="food-s2_testimonial_card">
                      <div>
                        “I've gotten more relief from Quickie then anything else
                        I've tried. And fast, too!”
                      </div>
                      <div className="food-s2_testimonial_rating-wrapper">
                        <img
                          loading="lazy"
                          src="/Curex _ Quickie_files/685e907dc7e20f0db1f948ca_stars2.svg"
                          alt=""
                          className="food-s2_testimonial_rating-image"
                        />
                      </div>
                      <div className="food-s2_testimonial_client">
                        <div className="food-s2_testimonial_client-image-wrapper">
                          <img
                            loading="lazy"
                            src="/Curex _ Quickie_files/68627da5b17fb1cdb78453b3_Profile_picture-2.avif"
                            alt=""
                            className="food-s2_testimonial_customer-image"
                          />
                        </div>
                        <div className="food-s2_testimonial_client-info">
                          <div className="text-weight-semibold">Ines L.</div>
                          <div className="quickie_testimonial_location">
                            Austin, TX
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="food-s2_testimonial_card">
                      <div>
                        “Quickie gives me fast relief without the crash. Love
                        it.”
                      </div>
                      <div className="food-s2_testimonial_rating-wrapper">
                        <img
                          loading="lazy"
                          src="/Curex _ Quickie_files/685e907dc7e20f0db1f948ca_stars2.svg"
                          alt=""
                          className="food-s2_testimonial_rating-image"
                        />
                      </div>
                      <div className="food-s2_testimonial_client">
                        <div className="food-s2_testimonial_client-image-wrapper">
                          <img
                            sizes="(max-width: 1024px) 100vw, 1024px"
                            /* removed srcSet (localized) */
                            alt=""
                            src="/Curex _ Quickie_files/687916cbeb71f8176115cf9a_Monica S. review.jpg"
                            loading="lazy"
                            className="food-s2_testimonial_customer-image"
                          />
                        </div>
                        <div className="food-s2_testimonial_client-info">
                          <div className="text-weight-semibold">Monica S.</div>
                          <div className="quickie_testimonial_location">
                            Los Angeles, CA
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="food-s2_testimonial_col">
                    <div className="food-s2_testimonial_card">
                      <div>
                        “No more stuffy mornings. Curex is now part of my daily
                        routine.”
                      </div>
                      <div className="food-s2_testimonial_rating-wrapper">
                        <img
                          loading="lazy"
                          src="/Curex _ Quickie_files/685e907dc7e20f0db1f948ca_stars2.svg"
                          alt=""
                          className="food-s2_testimonial_rating-image"
                        />
                      </div>
                      <div className="food-s2_testimonial_client">
                        <div className="food-s2_testimonial_client-image-wrapper">
                          <img
                            loading="lazy"
                            src="/Curex _ Quickie_files/68627da5240107238724f244_Profile_picture-6.avif"
                            alt=""
                            className="food-s2_testimonial_customer-image"
                          />
                        </div>
                        <div className="food-s2_testimonial_client-info">
                          <div className="text-weight-semibold">Lars T.</div>
                          <div className="quickie_testimonial_location">
                            Seattle, WA
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="food-s2_testimonial_card">
                      <img
                        loading="lazy"
                        src="/Curex _ Quickie_files/666024c3df67a1ac73af25cf_quote-image-2.webp"
                        alt=""
                        className="food-s2_testimonial_thumbnail"
                      />
                      <div className="food-s2_testimonial_rating-wrapper">
                        <img
                          loading="lazy"
                          src="/Curex _ Quickie_files/685e907dc7e20f0db1f948ca_stars2.svg"
                          alt=""
                          className="food-s2_testimonial_rating-image"
                        />
                      </div>
                      <div className="food-s2_testimonial_client">
                        <div className="food-s2_testimonial_client-image-wrapper">
                          <img
                            loading="lazy"
                            src="/Curex _ Quickie_files/666024c3df67a1ac73af25cf_quote-image-2.webp"
                            alt=""
                            className="food-s2_testimonial_customer-image"
                          />
                        </div>
                        <div className="food-s2_testimonial_client-info">
                          <div className="text-weight-semibold">
                            Stefanie K.
                          </div>
                          <div className="quickie_testimonial_location">
                            Austin, TX
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="food-s2_testimonial_col">
                    <div className="food-s2_testimonial_card">
                      <div>
                        “I used to rebound hard with Afrin. Not with Quickie.
                        Total game changer.”
                      </div>
                      <div className="food-s2_testimonial_rating-wrapper">
                        <img
                          loading="lazy"
                          src="/Curex _ Quickie_files/685e907dc7e20f0db1f948ca_stars2.svg"
                          alt=""
                          className="food-s2_testimonial_rating-image"
                        />
                      </div>
                      <div className="food-s2_testimonial_client">
                        <div className="food-s2_testimonial_client-image-wrapper">
                          <img
                            sizes="(max-width: 812px) 100vw, 812px"
                            /* removed srcSet (localized) */
                            alt=""
                            src="/Curex _ Quickie_files/6875261b934d16f582a8a194_quickie-research3.png"
                            loading="lazy"
                            className="food-s2_testimonial_customer-image"
                          />
                        </div>
                        <div className="food-s2_testimonial_client-info">
                          <div className="text-weight-semibold">Tanya B.</div>
                          <div className="quickie_testimonial_location">
                            Boston, MA
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="food-s2_testimonial_card">
                      <div>
                        “Allergies used to ruin my workouts. Curex keeps me
                        breathing easy.”
                      </div>
                      <div className="food-s2_testimonial_rating-wrapper">
                        <img
                          loading="lazy"
                          src="/Curex _ Quickie_files/685e907dc7e20f0db1f948ca_stars2.svg"
                          alt=""
                          className="food-s2_testimonial_rating-image"
                        />
                      </div>
                      <div className="food-s2_testimonial_client">
                        <div className="food-s2_testimonial_client-image-wrapper">
                          <img
                            sizes="(max-width: 1024px) 100vw, 1024px"
                            /* removed srcSet (localized) */
                            alt=""
                            src="/Curex _ Quickie_files/68791bea2b63d1522e56f5b5_3.jpg"
                            loading="lazy"
                            className="food-s2_testimonial_customer-image"
                          />
                        </div>
                        <div className="food-s2_testimonial_client-info">
                          <div className="text-weight-semibold">Philipp Z.</div>
                          <div className="quickie_testimonial_location">
                            Seattle, WA
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="food-s2_testimonial_card">
                      <div>
                        “It’s the only spray that doesn’t burn and still works
                        like magic.”
                      </div>
                      <div className="food-s2_testimonial_rating-wrapper">
                        <img
                          loading="lazy"
                          src="/Curex _ Quickie_files/685e907dc7e20f0db1f948ca_stars2.svg"
                          alt=""
                          className="food-s2_testimonial_rating-image"
                        />
                      </div>
                      <div className="food-s2_testimonial_client">
                        <div className="food-s2_testimonial_client-image-wrapper">
                          <img
                            sizes="(max-width: 1024px) 100vw, 1024px"
                            /* removed srcSet (localized) */
                            alt=""
                            src="/Curex _ Quickie_files/68791c11bc1e811073d752ec_2.jpg"
                            loading="lazy"
                            className="food-s2_testimonial_customer-image"
                          />
                        </div>
                        <div className="food-s2_testimonial_client-info">
                          <div className="text-weight-semibold">Kayla M.</div>
                          <div className="quickie_testimonial_location">
                            Charleston, SC
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="food-s2_testimonial_col">
                    <div className="food-s2_testimonial_card">
                      <img
                        loading="lazy"
                        src="/Curex _ Quickie_files/666024c37a2cfb614658290c_quote-image-1.webp"
                        alt=""
                        className="food-s2_testimonial_thumbnail"
                      />
                      <div className="food-s2_testimonial_rating-wrapper">
                        <img
                          loading="lazy"
                          src="/Curex _ Quickie_files/685e907dc7e20f0db1f948ca_stars2.svg"
                          alt=""
                          className="food-s2_testimonial_rating-image"
                        />
                      </div>
                      <div className="food-s2_testimonial_client">
                        <div className="food-s2_testimonial_client-image-wrapper">
                          <img
                            loading="lazy"
                            src="/Curex _ Quickie_files/666024c37a2cfb614658290c_quote-image-1.webp"
                            alt=""
                            className="food-s2_testimonial_customer-image"
                          />
                        </div>
                        <div className="food-s2_testimonial_client-info">
                          <div className="text-weight-semibold">Mark</div>
                          <div className="quickie_testimonial_location">
                            Boston, MA
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="food-s2_testimonial_card">
                      <div>
                        “I was skeptical, but Curex nailed it. No more
                        late-night congestion.”
                      </div>
                      <div className="food-s2_testimonial_rating-wrapper">
                        <img
                          loading="lazy"
                          src="/Curex _ Quickie_files/685e907dc7e20f0db1f948ca_stars2.svg"
                          alt=""
                          className="food-s2_testimonial_rating-image"
                        />
                      </div>
                      <div className="food-s2_testimonial_client">
                        <div className="food-s2_testimonial_client-image-wrapper">
                          <img
                            loading="lazy"
                            src="/Curex _ Quickie_files/68627da51f636c6fa4a329e0_Profile_picture-9.avif"
                            alt=""
                            className="food-s2_testimonial_customer-image"
                          />
                        </div>
                        <div className="food-s2_testimonial_client-info">
                          <div className="text-weight-semibold">Jordan P.</div>
                          <div className="quickie_testimonial_location">
                            Chicago, IL
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="food-s2_testimonial_button-wrapper">
                  <a
                    href="/see-our-reviews"
                    className="food-s2_testimonial_link"
                  >
                    Read more
                  </a>
                </div>
              </div>
              <div className="w-embed w-script">
                <div
                  className="senja-embed"
                  data-id="ecf4aa83-a985-4dff-99dc-bdc198596172"
                  data-mode="shadow"
                  data-lazyload="false"
                  style={{ display: "block", width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section_quickie_price">
        <div className="padding-global">
          <div className="padding-section-xlarge2">
            <div className="margin-bottom margin-xxlarge">
              <div className="text-align-center">
                <div className="max-width-xxlarge align-center">
                  <div className="margin-bottom margin-small">
                    <h2 className="heading-h2-v2">
                      Choose Your{" "}
                      <span className="text-color-pink3">Quickie</span> Plan
                    </h2>
                  </div>
                  <p>
                    Allergy relief, your way—flexible, affordable, and built for
                    real life.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-layout-grid quickie_price_component">
              <div
                id="w-node-d371629d-7b92-1543-5d2c-eb23b837cf5e-99ff2d34"
                className="quickie_price_card"
              >
                <div className="quickie_price_card-content is-1">
                  <div className="quickie_price_content-top">
                    <div className="quickie_price_heading">Pay as You Go</div>
                    <div>
                      <em>No commitment. Full flexibility.</em>
                    </div>
                    <div className="quickie_price_price-wrapper">
                      <span className="quickie_price_price">$59</span> / One
                      payment
                    </div>
                    <div className="quickie_price_divider" />
                  </div>
                  <div className="quickie_price_badges-wrapper">
                    <div className="quickie_price_badge">
                      <img
                        src="/Curex _ Quickie_files/68751505a3865b3824a7fcce_icon-guarantee.svg"
                        loading="lazy"
                        alt=""
                      />
                      <div>Curex Guarantee</div>
                    </div>
                    <div className="quickie_price_badge">
                      <img
                        src="/Curex _ Quickie_files/68751505a3865b3824a7fcce_icon-guarantee.svg"
                        loading="lazy"
                        alt=""
                      />
                      <div>HSA / FSA eligible</div>
                    </div>
                  </div>
                  <div className="quickie_price_list">
                    <div
                      id="w-node-_7ec84739-2c53-f3dd-bd29-193ce407ed58-99ff2d34"
                      className="quickie_price_item"
                    >
                      <div className="quickie_header_item-icon-wrapper">
                        <div className="quickie_header_item-icon w-embed">
                          <svg
                            width=" 100%"
                            height=" 100%"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M19.2731 5.21025C19.8589 4.62463 20.8085 4.62452 21.3942 5.21025C21.9798 5.796 21.9798 6.7456 21.3942 7.33135L9.93522 18.7894C9.34943 19.3751 8.39991 19.3751 7.81413 18.7894L2.60612 13.5813C2.02033 12.9956 2.02033 12.046 2.60612 11.4603C3.15514 10.9112 4.0238 10.8766 4.61295 11.3567L4.72721 11.4603L8.87467 15.6077L19.2731 5.21025Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="quickie_header_item-text-wrapper">
                        <p className="no-margin-bottom">Free Shipping</p>
                      </div>
                    </div>
                    <div
                      id="w-node-_7ec84739-2c53-f3dd-bd29-193ce407ed60-99ff2d34"
                      className="quickie_price_item"
                    >
                      <div className="quickie_header_item-icon-wrapper">
                        <div className="quickie_header_item-icon w-embed">
                          <svg
                            width=" 100%"
                            height=" 100%"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M19.2731 5.21025C19.8589 4.62463 20.8085 4.62452 21.3942 5.21025C21.9798 5.796 21.9798 6.7456 21.3942 7.33135L9.93522 18.7894C9.34943 19.3751 8.39991 19.3751 7.81413 18.7894L2.60612 13.5813C2.02033 12.9956 2.02033 12.046 2.60612 11.4603C3.15514 10.9112 4.0238 10.8766 4.61295 11.3567L4.72721 11.4603L8.87467 15.6077L19.2731 5.21025Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="quickie_header_item-text-wrapper">
                        <p className="no-margin-bottom">Free online consult</p>
                      </div>
                    </div>
                    <div
                      id="w-node-_7ec84739-2c53-f3dd-bd29-193ce407ed69-99ff2d34"
                      className="quickie_price_item"
                    >
                      <div className="quickie_header_item-icon-wrapper">
                        <div className="quickie_header_item-icon w-embed">
                          <svg
                            width=" 100%"
                            height=" 100%"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M19.2731 5.21025C19.8589 4.62463 20.8085 4.62452 21.3942 5.21025C21.9798 5.796 21.9798 6.7456 21.3942 7.33135L9.93522 18.7894C9.34943 19.3751 8.39991 19.3751 7.81413 18.7894L2.60612 13.5813C2.02033 12.9956 2.02033 12.046 2.60612 11.4603C3.15514 10.9112 4.0238 10.8766 4.61295 11.3567L4.72721 11.4603L8.87467 15.6077L19.2731 5.21025Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="quickie_header_item-text-wrapper">
                        <p className="no-margin-bottom">
                          Personalized Formula Tailored to Your Symptoms
                        </p>
                      </div>
                    </div>
                    <div
                      id="w-node-_7ec84739-2c53-f3dd-bd29-193ce407ed72-99ff2d34"
                      className="quickie_price_item"
                    >
                      <div className="quickie_header_item-icon-wrapper">
                        <div className="quickie_header_item-icon w-embed">
                          <svg
                            width=" 100%"
                            height=" 100%"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M19.2731 5.21025C19.8589 4.62463 20.8085 4.62452 21.3942 5.21025C21.9798 5.796 21.9798 6.7456 21.3942 7.33135L9.93522 18.7894C9.34943 19.3751 8.39991 19.3751 7.81413 18.7894L2.60612 13.5813C2.02033 12.9956 2.02033 12.046 2.60612 11.4603C3.15514 10.9112 4.0238 10.8766 4.61295 11.3567L4.72721 11.4603L8.87467 15.6077L19.2731 5.21025Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="quickie_header_item-text-wrapper">
                        <p className="no-margin-bottom">
                          Up to 5 Prescription-Strength Ingredients
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Monthly (Most Popular) Plan */}
              <div className="quickie_price_card is-popular">
                <div className="quickie_price_card-content">
                  <div className="quickie_price_content-top">
                    <div className="quickie_price_heading">Monthly</div>
                    <div>
                      <em>Ongoing support, monthly convenience.</em>
                    </div>
                    <div className="quickie_price_price-wrapper is-2">
                      <div className="quickie_price_price-old">
                        <div>$59</div>
                        <div className="quickie_price_strikethrough">‍<br />‍</div>
                      </div>
                      <div className="text-display-inline">
                        <span className="quickie_price_price">$49</span> / Month
                        <br />
                        <span className="quickie_price_discount">17% SAVINGS</span>
                      </div>
                    </div>
                    <div className="quickie_price_divider" />
                  </div>
                  <div className="quickie_price_badges-wrapper">
                    <div className="quickie_price_badge">
                      <img src="/Curex _ Quickie_files/68751505a3865b3824a7fcce_icon-guarantee.svg" loading="lazy" alt="" />
                      <div>Curex Guarantee</div>
                    </div>
                    <div className="quickie_price_badge">
                      <img src="/Curex _ Quickie_files/68751505a3865b3824a7fcce_icon-guarantee.svg" loading="lazy" alt="" />
                      <div>HSA / FSA eligible</div>
                    </div>
                  </div>
                  <div className="quickie_price_list">
                    <div className="quickie_price_item">
                      <div className="quickie_header_item-icon-wrapper">
                        <div className="quickie_header_item-icon w-embed">
                          <svg width=" 100%" height=" 100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.2731 5.21025C19.8589 4.62463 20.8085 4.62452 21.3942 5.21025C21.9798 5.796 21.9798 6.7456 21.3942 7.33135L9.93522 18.7894C9.34943 19.3751 8.39991 19.3751 7.81413 18.7894L2.60612 13.5813C2.02033 12.9956 2.02033 12.046 2.60612 11.4603C3.15514 10.9112 4.0238 10.8766 4.61295 11.3567L4.72721 11.4603L8.87467 15.6077L19.2731 5.21025Z" fill="currentColor" /></svg>
                        </div>
                      </div>
                      <div className="quickie_header_item-text-wrapper">
                        <p className="no-margin-bottom">Free Shipping</p>
                      </div>
                    </div>
                    <div className="quickie_price_item">
                      <div className="quickie_header_item-icon-wrapper">
                        <div className="quickie_header_item-icon w-embed">
                          <svg width=" 100%" height=" 100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.2731 5.21025C19.8589 4.62463 20.8085 4.62452 21.3942 5.21025C21.9798 5.796 21.9798 6.7456 21.3942 7.33135L9.93522 18.7894C9.34943 19.3751 8.39991 19.3751 7.81413 18.7894L2.60612 13.5813C2.02033 12.9956 2.02033 12.046 2.60612 11.4603C3.15514 10.9112 4.0238 10.8766 4.61295 11.3567L4.72721 11.4603L8.87467 15.6077L19.2731 5.21025Z" fill="currentColor" /></svg>
                        </div>
                      </div>
                      <div className="quickie_header_item-text-wrapper">
                        <p className="no-margin-bottom">Unlimited Online Consults</p>
                      </div>
                    </div>
                    <div className="quickie_price_item">
                      <div className="quickie_header_item-icon-wrapper">
                        <div className="quickie_header_item-icon w-embed">
                          <svg width=" 100%" height=" 100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.2731 5.21025C19.8589 4.62463 20.8085 4.62452 21.3942 5.21025C21.9798 5.796 21.9798 6.7456 21.3942 7.33135L9.93522 18.7894C9.34943 19.3751 8.39991 19.3751 7.81413 18.7894L2.60612 13.5813C2.02033 12.9956 2.02033 12.046 2.60612 11.4603C3.15514 10.9112 4.0238 10.8766 4.61295 11.3567L4.72721 11.4603L8.87467 15.6077L19.2731 5.21025Z" fill="currentColor" /></svg>
                        </div>
                      </div>
                      <div className="quickie_header_item-text-wrapper">
                        <p className="no-margin-bottom">Personalized Formula Tailored to Your Symptoms</p>
                      </div>
                    </div>
                    <div className="quickie_price_item">
                      <div className="quickie_header_item-icon-wrapper">
                        <div className="quickie_header_item-icon w-embed">
                          <svg width=" 100%" height=" 100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.2731 5.21025C19.8589 4.62463 20.8085 4.62452 21.3942 5.21025C21.9798 5.796 21.9798 6.7456 21.3942 7.33135L9.93522 18.7894C9.34943 19.3751 8.39991 19.3751 7.81413 18.7894L2.60612 13.5813C2.02033 12.9956 2.02033 12.046 2.60612 11.4603C3.15514 10.9112 4.0238 10.8766 4.61295 11.3567L4.72721 11.4603L8.87467 15.6077L19.2731 5.21025Z" fill="currentColor" /></svg>
                        </div>
                      </div>
                      <div className="quickie_header_item-text-wrapper">
                        <p className="no-margin-bottom">Up to 5 Prescription-Strength Ingredients</p>
                      </div>
                    </div>
                    <div className="quickie_price_item">
                      <div className="quickie_header_item-icon-wrapper">
                        <div className="quickie_header_item-icon w-embed">
                          <svg width=" 100%" height=" 100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.2731 5.21025C19.8589 4.62463 20.8085 4.62452 21.3942 5.21025C21.9798 5.796 21.9798 6.7456 21.3942 7.33135L9.93522 18.7894C9.34943 19.3751 8.39991 19.3751 7.81413 18.7894L2.60612 13.5813C2.02033 12.9956 2.02033 12.046 2.60612 11.4603C3.15514 10.9112 4.0238 10.8766 4.61295 11.3567L4.72721 11.4603L8.87467 15.6077L19.2731 5.21025Z" fill="currentColor" /></svg>
                        </div>
                      </div>
                      <div className="quickie_header_item-text-wrapper">
                        <p className="no-margin-bottom">Change or Cancel Anytime</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="quickie_price_popular">
                  <img src="/Curex _ Quickie_files/68752619a9e60b61d5bdd6b7_star-popular.svg" loading="lazy" alt="" />
                  <div>Most Popular</div>
                </div>
              </div>
              {/* Annual Plan (Best Value) */}
              <div className="quickie_price_card">
                <div className="quickie_price_card-content">
                  <div className="quickie_price_tag">
                    <div>Best Value</div>
                  </div>
                  <div className="quickie_price_content-top">
                    <div className="quickie_price_heading">Annual</div>
                    <div>
                      <em>One year. Maximum savings. Total care.</em>
                    </div>
                    <div className="quickie_price_price-wrapper is-2">
                      <div className="quickie_price_price-old">
                        <div>$708</div>
                        <div className="quickie_price_strikethrough">‍<br />‍</div>
                      </div>
                      <div className="text-display-inline">
                        <span className="quickie_price_price">$490</span> / Year
                        <br />
                        <span className="quickie_price_discount">41% SAVINGS</span>
                      </div>
                    </div>
                    <div className="quickie_price_divider" />
                  </div>
                  <div className="quickie_price_badges-wrapper">
                    <div className="quickie_price_badge">
                      <img src="/Curex _ Quickie_files/68751505a3865b3824a7fcce_icon-guarantee.svg" loading="lazy" alt="" />
                      <div>Curex Guarantee</div>
                    </div>
                    <div className="quickie_price_badge">
                      <img src="/Curex _ Quickie_files/68751505a3865b3824a7fcce_icon-guarantee.svg" loading="lazy" alt="" />
                      <div>HSA / FSA eligible</div>
                    </div>
                  </div>
                  <div className="quickie_price_list">
                    <div className="quickie_price_item">
                      <div className="quickie_header_item-icon-wrapper">
                        <div className="quickie_header_item-icon w-embed">
                          <svg width=" 100%" height=" 100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.2731 5.21025C19.8589 4.62463 20.8085 4.62452 21.3942 5.21025C21.9798 5.796 21.9798 6.7456 21.3942 7.33135L9.93522 18.7894C9.34943 19.3751 8.39991 19.3751 7.81413 18.7894L2.60612 13.5813C2.02033 12.9956 2.02033 12.046 2.60612 11.4603C3.15514 10.9112 4.0238 10.8766 4.61295 11.3567L4.72721 11.4603L8.87467 15.6077L19.2731 5.21025Z" fill="currentColor" /></svg>
                        </div>
                      </div>
                      <div className="quickie_header_item-text-wrapper">
                        <p className="no-margin-bottom">Free Shipping on 12 Monthly Sets</p>
                      </div>
                    </div>
                    <div className="quickie_price_item">
                      <div className="quickie_header_item-icon-wrapper">
                        <div className="quickie_header_item-icon w-embed">
                          <svg width=" 100%" height=" 100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.2731 5.21025C19.8589 4.62463 20.8085 4.62452 21.3942 5.21025C21.9798 5.796 21.9798 6.7456 21.3942 7.33135L9.93522 18.7894C9.34943 19.3751 8.39991 19.3751 7.81413 18.7894L2.60612 13.5813C2.02033 12.9956 2.02033 12.046 2.60612 11.4603C3.15514 10.9112 4.0238 10.8766 4.61295 11.3567L4.72721 11.4603L8.87467 15.6077L19.2731 5.21025Z" fill="currentColor" /></svg>
                        </div>
                      </div>
                      <div className="quickie_header_item-text-wrapper">
                        <p className="no-margin-bottom">Unlimited Online Consults</p>
                      </div>
                    </div>
                    <div className="quickie_price_item">
                      <div className="quickie_header_item-icon-wrapper">
                        <div className="quickie_header_item-icon w-embed">
                          <svg width=" 100%" height=" 100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.2731 5.21025C19.8589 4.62463 20.8085 4.62452 21.3942 5.21025C21.9798 5.796 21.9798 6.7456 21.3942 7.33135L9.93522 18.7894C9.34943 19.3751 8.39991 19.3751 7.81413 18.7894L2.60612 13.5813C2.02033 12.9956 2.02033 12.046 2.60612 11.4603C3.15514 10.9112 4.0238 10.8766 4.61295 11.3567L4.72721 11.4603L8.87467 15.6077L19.2731 5.21025Z" fill="currentColor" /></svg>
                        </div>
                      </div>
                      <div className="quickie_header_item-text-wrapper">
                        <p className="no-margin-bottom">Personalized Formula Tailored to Your Symptoms</p>
                      </div>
                    </div>
                    <div className="quickie_price_item">
                      <div className="quickie_header_item-icon-wrapper">
                        <div className="quickie_header_item-icon w-embed">
                          <svg width=" 100%" height=" 100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.2731 5.21025C19.8589 4.62463 20.8085 4.62452 21.3942 5.21025C21.9798 5.796 21.9798 6.7456 21.3942 7.33135L9.93522 18.7894C9.34943 19.3751 8.39991 19.3751 7.81413 18.7894L2.60612 13.5813C2.02033 12.9956 2.02033 12.046 2.60612 11.4603C3.15514 10.9112 4.0238 10.8766 4.61295 11.3567L4.72721 11.4603L8.87467 15.6077L19.2731 5.21025Z" fill="currentColor" /></svg>
                        </div>
                      </div>
                      <div className="quickie_header_item-text-wrapper">
                        <p className="no-margin-bottom">Up to 5 Prescription-Strength Ingredients</p>
                      </div>
                    </div>
                    <div className="quickie_price_item">
                      <div className="quickie_header_item-icon-wrapper">
                        <div className="quickie_header_item-icon w-embed">
                          <svg width=" 100%" height=" 100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.2731 5.21025C19.8589 4.62463 20.8085 4.62452 21.3942 5.21025C21.9798 5.796 21.9798 6.7456 21.3942 7.33135L9.93522 18.7894C9.34943 19.3751 8.39991 19.3751 7.81413 18.7894L2.60612 13.5813C2.02033 12.9956 2.02033 12.046 2.60612 11.4603C3.15514 10.9112 4.0238 10.8766 4.61295 11.3567L4.72721 11.4603L8.87467 15.6077L19.2731 5.21025Z" fill="currentColor" /></svg>
                        </div>
                      </div>
                      <div className="quickie_header_item-text-wrapper">
                        <p className="no-margin-bottom">Change or Cancel Anytime</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="quickie_price_button-wrapper">
              <div>
                Quickie Spray trial is included for free with your subscription
                to Curex allergy immunotherapy.
              </div>
              <ButtonWithArrow text="Order Now" href="/quiz" />
            </div>
          </div>
        </div>
      </section>
      <section id="faq" className="section_weight-loss_faq">
        <div className="padding-global">
          <div className="container-medium2" />
          <div className="padding-global">
            <div className="container-large2">
              <div className="padding-section-xlarge2">
                <div className="weight-loss_faq_component">
                  <div className="text-align-center">
                    <div className="max-width-xxlarge align-center">
                      <div className="margin-bottom margin-small">
                        <h2 className="heading-h2-v2">FAQ</h2>
                      </div>
                    </div>
                  </div>
                  {(() => {
                    // FAQ data kept outside of JSX mapping logic for readability
                    const faqs: { q: string; a: string }[] = [
                      {
                        q: "How fast does the Quickie Nasal Spray work?",
                        a: "Most patients feel relief within 15 minutes. We have both short-term relief ingredients as well as longer-term relief to keep you feeling better, longer. Some say it’s like turning off their allergies.",
                      },
                      {
                        q: "What symptoms does the Nasal Spray treat?",
                        a: "Sneezing runny nose, nasal congestion, post-nasal drip, sinus pressure, itchy nose. Great for outdoor allergies, indoor dust, or when pollen spikes unexpectedly.",
                      },
                      {
                        q: "Will it cause rebound congestion like Afrin?",
                        a: "No, this formula uses a microdose of oxymetazoline, balanced with anti-inflammatory and moisturizing ingredients to reduce the risk of rebound congestion. Clinical studies over the last decade show that when oxymetazoline is combined with a corticosteroid, it can be used safely over the long term without causing rebound symptoms.",
                      },
                      {
                        q: "What’s the difference between this and over-the-counter sprays?",
                        a: "Quickie Spray combines up to five prescription-strength ingredients into a single, personalized formula — targeting multiple symptoms like congestion, post-nasal drip, and inflammation. OTC sprays typically address just one symptom and lack the synergy of a customized blend.",
                      },
                      {
                        q: "Does it have a bad taste or drip down the throat?",
                        a: "Some ingredients like azelastine may cause a slight taste, but many patients find it milder than traditional OTC sprays. Proper spray technique (head forward, not tilted back) helps minimize drip. We also offer an alternative formulation with olopatadine, which has a gentler taste profile and may be preferred by taste-sensitive patients.",
                      },
                      {
                        q: "Can I use it with my other allergy meds?",
                        a: "Quickie is designed to replace most other allergy medications. But it is designed to compliment allergy immunotherapy for long-term relief. If you’re currently taking other antihistamines or nasal sprays, tell your Curex provider, so we can adjust your formula to avoid overlap or interactions.",
                      },
                      {
                        q: "Is this FDA-approved?",
                        a: "No, Quickie is a personalized compounded prescription prepared by licensed U.S. pharmacies based on your doctor’s evaluation. Compounded medications are not FDA-approved as commercial products, but they are regulated under federal and state pharmacy laws.",
                      },
                      {
                        q: "Are there any side effects?",
                        a: "Possible side effects include nasal dryness, mild irritation, or occasional nosebleeds. These are typically mild and manageable. Let your Curex provider know about any bothersome or serious effects, so we can fine-tune your prescription if needed.",
                      },
                      {
                        q: "How long should I use it for?",
                        a: "Quickie is safe for daily use, especially during the first 3–6 months of allergy immunotherapy, when symptoms are still active. Your Curex provider may adjust your dose or frequency as your immune system builds tolerance.",
                      },
                      {
                        q: "Will it make me drowsy?",
                        a: "Quickie is designed to be non-sedating, so you can use it before work, school, or exercise without feeling groggy or foggy. In rare cases where drowsiness is reported, let your Curex provider know—we can easily adjust the formula to better suit your needs.",
                      },
                      {
                        q: "Can my child use Quickie Nasal Spray?",
                        a: "Yes, Quickie Spray can be prescribed for children aged 6 and up, based on your provider’s clinical evaluation.",
                      },
                      {
                        q: "How often should I use it?",
                        a: "Follow the instructions from your Curex provider. Most patients are advised to use one spray per nostril, twice daily — morning and evening — for consistent relief.",
                      },
                    ];
                    const [openIndex, setOpenIndex] = useState<number | null>(0);
                    const answerRefs = useRef<(HTMLDivElement | null)[]>([]);
                    const [heights, setHeights] = useState<number[]>([]);
                    useEffect(() => {
                      const newHeights = answerRefs.current.map(el => el ? el.scrollHeight : 0);
                      setHeights(newHeights);
                    }, [faqs.length]);
                    const toggle = useCallback((i: number) => {
                      setOpenIndex(prev => prev === i ? null : i);
                    }, []);
                    const onKey = (e: React.KeyboardEvent, i: number) => {
                      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(i); }
                    };
                    return (
                      <div className="weight-loss_faq_list">
                        {faqs.map((item, i) => {
                          const open = openIndex === i;
                          return (
                            <div key={item.q} className="weight-loss_faq_accordion">
                              <div
                                className="weight-loss_faq_question"
                                role="button"
                                tabIndex={0}
                                aria-expanded={open}
                                aria-controls={`faq-answer-${i}`}
                                id={`faq-question-${i}`}
                                onClick={() => toggle(i)}
                                onKeyDown={(e) => onKey(e, i)}
                                style={{ cursor: 'pointer' }}
                              >
                                <div className="text-size-medium2 text-weight-semibold">{item.q}</div>
                                <div className="weight-loss_faq_icon-wrapper" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform .3s ease' }}>
                                  <div className="weight-loss_faq_icon w-embed">
                                    <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 25.6667L10 15.6667L11.9721 13.6946L20 21.7221L28.0279 13.6946L30 15.6667L20 25.6667Z" fill="currentColor" /></svg>
                                  </div>
                                </div>
                              </div>
                              <div
                                id={`faq-answer-${i}`}
                                role="region"
                                aria-labelledby={`faq-question-${i}`}
                                className="weight-loss_faq_answer"
                                style={{ width: '100%', overflow: 'hidden', height: open ? (heights[i] ?? 'auto') : 0, transition: 'height .35s ease' }}
                              >
                                <div
                                  className="weight-loss_faq_answer-wrapper"
                                  ref={(el) => { answerRefs.current[i] = el; }}
                                >
                                  <div className="text-rich-text2 w-richtext">
                                    <p>{item.a}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer className="footer3_component">
      <div className="padding-global">
        <div className="container-large3">
          <div className="padding-vertical padding-xxlarge">
            <div className="padding-bottom padding-xxlarge">
              <div className="w-layout-grid footer3_top-wrapper">
                <div className="footer3_left-wrapper">
                  <div className="margin-bottom margin-medium">
                    <a href="/" className="footer3_logo-link w-nav-brand">
                      <div className="logo_global">
                        <img
                          loading="eager"
                          src="/Curex _ Quickie_files/66f641850d56b153c380c52b_curex-logo-white.svg"
                          alt="Curex Logo white"
                          className="logo_secondary"
                        />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="footer3_details-wrapper">
                  <div className="margin-bottom margin-small">
                    <div className="text-weight-semibold">Contact</div>
                  </div>
                  <div className="margin-bottom margin-small">
                    <div>
                      <span className="text-weight-semibold">
                        Call/text us at:
                      </span>
                      <br />
                      <a href="tel:(857)240-1080">(857) 240-1080</a>
                    </div>
                  </div>
                  <div className="margin-bottom margin-small">
                    <div>
                      <span className="text-weight-semibold">Email us at:</span>
                      <br />
                      <a href="mailto:hi@getcurex.com">hi@getcurex.com</a>
                    </div>
                  </div>
                  <div className="margin-bottom margin-tiny">
                    <div>
                      777 Brickell Ave #500-95053
                      <br />
                      Miami, FL 33131
                    </div>
                  </div>
                </div>
                <div className="footer3_social-list-wrapper">
                  <div className="text-weight-semibold">Follow us</div>
                  <div className="w-layout-grid footer3_social-list">
                    <a
                      href="https://www.facebook.com/getcurex/"
                      target="_blank"
                      className="footer3_social-link w-inline-block"
                    >
                      <div className="footer3_social-icon w-embed">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22 12.0611C22 6.50451 17.5229 2 12 2C6.47715 2 2 6.50451 2 12.0611C2 17.0828 5.65684 21.2452 10.4375 22V14.9694H7.89844V12.0611H10.4375V9.84452C10.4375 7.32296 11.9305 5.93012 14.2146 5.93012C15.3088 5.93012 16.4531 6.12663 16.4531 6.12663V8.60261H15.1922C13.95 8.60261 13.5625 9.37822 13.5625 10.1739V12.0611H16.3359L15.8926 14.9694H13.5625V22C18.3432 21.2452 22 17.083 22 12.0611Z"
                            fill="CurrentColor"
                          />
                        </svg>
                      </div>
                    </a>
                    <a
                      href="https://www.instagram.com/getcurex/"
                      target="_blank"
                      className="footer3_social-link w-inline-block"
                    >
                      <div className="footer3_social-icon w-embed">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3ZM19.25 16C19.2445 17.7926 17.7926 19.2445 16 19.25H8C6.20735 19.2445 4.75549 17.7926 4.75 16V8C4.75549 6.20735 6.20735 4.75549 8 4.75H16C17.7926 4.75549 19.2445 6.20735 19.25 8V16ZM16.75 8.25C17.3023 8.25 17.75 7.80228 17.75 7.25C17.75 6.69772 17.3023 6.25 16.75 6.25C16.1977 6.25 15.75 6.69772 15.75 7.25C15.75 7.80228 16.1977 8.25 16.75 8.25ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5027 10.8057 16.0294 9.65957 15.1849 8.81508C14.3404 7.97059 13.1943 7.49734 12 7.5ZM9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12Z"
                            fill="CurrentColor"
                          />
                        </svg>
                      </div>
                    </a>
                    <a
                      href="https://www.tiktok.com/@getcurex?_t=8ihxGwRAdKC&_r=1"
                      target="_blank"
                      className="footer3_social-link w-inline-block"
                    >
                      <div className="footer3_social-icon w-embed">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          className="iconify iconify--ic"
                          width="100%"
                          height="100%"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"
                          />
                        </svg>
                      </div>
                    </a>
                    <a
                      href="https://twitter.com/GetCurex"
                      target="_blank"
                      className="footer3_social-link w-inline-block"
                    >
                      <div className="footer3_social-icon w-embed">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.1761 4H19.9362L13.9061 10.7774L21 20H15.4456L11.0951 14.4066L6.11723 20H3.35544L9.80517 12.7508L3 4H8.69545L12.6279 9.11262L17.1761 4ZM16.2073 18.3754H17.7368L7.86441 5.53928H6.2232L16.2073 18.3754Z"
                            fill="CurrentColor"
                          />
                        </svg>
                      </div>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/curex/"
                      target="_blank"
                      className="footer3_social-link w-inline-block"
                    >
                      <div className="footer3_social-icon w-embed">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.5 3C3.67157 3 3 3.67157 3 4.5V19.5C3 20.3284 3.67157 21 4.5 21H19.5C20.3284 21 21 20.3284 21 19.5V4.5C21 3.67157 20.3284 3 19.5 3H4.5ZM8.52076 7.00272C8.52639 7.95897 7.81061 8.54819 6.96123 8.54397C6.16107 8.53975 5.46357 7.90272 5.46779 7.00413C5.47201 6.15897 6.13998 5.47975 7.00764 5.49944C7.88795 5.51913 8.52639 6.1646 8.52076 7.00272ZM12.2797 9.76176H9.75971H9.7583V18.3216H12.4217V18.1219C12.4217 17.742 12.4214 17.362 12.4211 16.9819V16.9818V16.9816V16.9815V16.9812C12.4203 15.9674 12.4194 14.9532 12.4246 13.9397C12.426 13.6936 12.4372 13.4377 12.5005 13.2028C12.7381 12.3253 13.5271 11.7586 14.4074 11.8979C14.9727 11.9864 15.3467 12.3141 15.5042 12.8471C15.6013 13.1803 15.6449 13.5389 15.6491 13.8863C15.6605 14.9339 15.6589 15.9815 15.6573 17.0292V17.0294C15.6567 17.3992 15.6561 17.769 15.6561 18.1388V18.3202H18.328V18.1149C18.328 17.6629 18.3278 17.211 18.3275 16.7591V16.759V16.7588C18.327 15.6293 18.3264 14.5001 18.3294 13.3702C18.3308 12.8597 18.276 12.3563 18.1508 11.8627C17.9638 11.1286 17.5771 10.5211 16.9485 10.0824C16.5027 9.77019 16.0133 9.5691 15.4663 9.5466C15.404 9.54401 15.3412 9.54062 15.2781 9.53721L15.2781 9.53721L15.2781 9.53721C14.9984 9.52209 14.7141 9.50673 14.4467 9.56066C13.6817 9.71394 13.0096 10.0641 12.5019 10.6814C12.4429 10.7522 12.3852 10.8241 12.2991 10.9314L12.2991 10.9315L12.2797 10.9557V9.76176ZM5.68164 18.3244H8.33242V9.76733H5.68164V18.3244Z"
                            fill="CurrentColor"
                          />
                        </svg>
                      </div>
                    </a>
                    <a
                      href="https://www.youtube.com/@getcurex"
                      target="_blank"
                      className="footer3_social-link w-inline-block"
                    >
                      <div className="footer3_social-icon w-embed">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M20.5686 4.77345C21.5163 5.02692 22.2555 5.76903 22.5118 6.71673C23.1821 9.42042 23.1385 14.5321 22.5259 17.278C22.2724 18.2257 21.5303 18.965 20.5826 19.2213C17.9071 19.8831 5.92356 19.8015 3.40294 19.2213C2.45524 18.9678 1.71595 18.2257 1.45966 17.278C0.827391 14.7011 0.871044 9.25144 1.44558 6.73081C1.69905 5.78311 2.44116 5.04382 3.38886 4.78753C6.96561 4.0412 19.2956 4.282 20.5686 4.77345ZM9.86682 8.70227L15.6122 11.9974L9.86682 15.2925V8.70227Z"
                            fill="CurrentColor"
                          />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="divider-horizontal" />
            <div className="padding-top padding-medium">
              <div className="footer3_bottom-wrapper">
                <div className="footer3_credit-text">
                  <span className="footer-credits-year">2025</span> Curex, Inc.
                  All rights reserved.
                </div>
                <div className="w-layout-grid footer3_legal-list">
                  <a
                    href="https://getcurex.com/legal/privacy-policy"
                    className="footer3_legal-link"
                  >
                    Privacy Policy
                  </a>
                  <a
                    id="w-node-fe52a467-34c1-dd7a-e501-8fe6dbd6e0bd-99ff2d34"
                    href="https://getcurex.com/legal/terms"
                    className="footer3_legal-link"
                  >
                    Terms of Use
                  </a>
                  <a
                    href="https://getcurex.com/legal/informed-consent"
                    className="footer3_legal-link"
                  >
                    INFORMED CONSENT
                  </a>
                  <a
                    href="/legal/curex-dotcom.webflow.io/legal/states-where-we-operate"
                    className="footer3_legal-link"
                  >
                    WE COVER ALL STATES
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</>
}