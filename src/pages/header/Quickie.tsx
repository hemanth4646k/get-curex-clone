function Quickie() {
  return (
    <div className="quickie-container">
      <h2>Quickie</h2>
      <p>Your quick guide to allergy care.</p>
    </div>
  );
}
export default Quickie;
// import React, { useState, useEffect } from 'react';
// import './Quickie.css';

// // SVG Icons
// const CheckIcon = () => (
//   <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M19.2731 5.21025C19.8589 4.62463 20.8085 4.62452 21.3942 5.21025C21.9798 5.796 21.9798 6.7456 21.3942 7.33135L9.93522 18.7894C9.34943 19.3751 8.39991 19.3751 7.81413 18.7894L2.60612 13.5813C2.02033 12.9956 2.02033 12.046 2.60612 11.4603C3.15514 10.9112 4.0238 10.8766 4.61295 11.3567L4.72721 11.4603L8.87467 15.6077L19.2731 5.21025Z" fill="currentColor"/>
//   </svg>
// );

// const CartIcon = () => (
//   <svg width="100%" height="100%" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <g clipPath="url(#clip0_254_350)">
//       <path d="M5.13672 17.5003C5.13672 16.5799 5.88241 15.8335 6.80273 15.8333C7.72321 15.8333 8.46973 16.5798 8.46973 17.5003C8.46957 18.4207 7.72311 19.1663 6.80273 19.1663C5.88251 19.1661 5.13687 18.4205 5.13672 17.5003ZM14.3027 17.5003C14.3027 16.5799 15.0484 15.8335 15.9688 15.8333C16.8892 15.8333 17.6357 16.5798 17.6357 17.5003C17.6356 18.4207 16.8891 19.1663 15.9688 19.1663C15.0485 19.1661 14.3029 18.4205 14.3027 17.5003ZM3.51172 0.875309L3.65625 0.888004C3.98534 0.945945 4.2541 1.19758 4.32617 1.53351L5.07715 5.04132H18.5449C18.7976 5.04138 19.0362 5.15674 19.1943 5.35382C19.3525 5.55096 19.4132 5.80924 19.3584 6.05597L17.9834 12.2474L17.9824 12.2464C17.86 12.8017 17.5523 13.2989 17.1094 13.6556C16.6662 14.0123 16.1147 14.2074 15.5459 14.2083H7.39453V14.2073C6.81971 14.2158 6.25902 14.0268 5.80762 13.6702C5.35146 13.3098 5.03503 12.8012 4.91309 12.2327L2.83691 2.54132H1.84473C1.38449 2.54132 1.01172 2.16855 1.01172 1.70832C1.01172 1.24808 1.38449 0.875309 1.84473 0.875309H3.51172ZM6.54297 11.8831L6.58496 12.0218C6.63888 12.1549 6.72688 12.2726 6.84082 12.3626C6.99286 12.4827 7.18226 12.5466 7.37598 12.5423C7.38209 12.5422 7.38842 12.5413 7.39453 12.5413H15.543C15.7325 12.541 15.9168 12.4765 16.0645 12.3577C16.2122 12.2388 16.3147 12.0722 16.3555 11.887L16.3564 11.8861L17.5059 6.70832H5.43457L6.54297 11.8831Z" fill="currentColor"/>
//     </g>
//     <defs>
//       <clipPath id="clip0_254_350">
//         <rect width="20" height="20" fill="currentColor" transform="translate(0.134766 3.8147e-06)"/>
//       </clipPath>
//     </defs>
//   </svg>
// );

// const MenuIcon = () => (
//   <div className="menu-icon3">
//     <div className="menu-icon3_line-top"></div>
//     <div className="menu-icon3_line-middle">
//       <div className="menu-icon2_line-middle-inner"></div>
//     </div>
//     <div className="menu-icon3_line-bottom"></div>
//   </div>
// );

// const FAQIcon = () => (
//   <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M20 25.6667L10 15.6667L11.9721 13.6946L20 21.7221L28.0279 13.6946L30 15.6667L20 25.6667Z" fill="currentColor"/>
//   </svg>
// );

// // Image Slider Component
// const GallerySlider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const images = [
//     "https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/68751a543187b600191a9e7d_quickie-image0.avif",
//     "https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/68751a34a9e60b61d5b0a195_quickie-image1.avif",
//     "https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/68751a33cae2577fe52fab4b_quickie-image2.avif",
//     "https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/68751a33a3be8865c09a556f_quickie-image3.avif",
//     "https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/68751a332fc894e8927a50b1_quickie-image4.avif"
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % images.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <div className="gallery_slider-wrapper">
//       <div className="gallery_slider">
//         <div className="gallery_mask">
//           {images.map((image, index) => (
//             <div 
//               key={index}
//               className={`gallery_slide ${index === currentSlide ? 'active' : ''}`}
//             >
//               <div className="gallery_image-wrapper">
//                 <img src={image} alt="" className="gallery_image" />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="gallery_nav is-absolute">
//         {images.map((image, index) => (
//           <div 
//             key={index}
//             className={`gallery_thumb-wrapper ${index === currentSlide ? 'active' : ''}`}
//             onClick={() => setCurrentSlide(index)}
//           >
//             <img src={image} alt="" className="gallery_thumb" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // FAQ Component
// const FAQAccordion = ({ question, answer }: { question: string; answer: string }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="weight-loss_faq_accordion">
//       <div className="weight-loss_faq_question" onClick={() => setIsOpen(!isOpen)}>
//         <div className="text-size-medium2 text-weight-semibold">{question}</div>
//         <div className="weight-loss_faq_icon-wrapper">
//           <div className={`weight-loss_faq_icon ${isOpen ? 'open' : ''}`}>
//             <FAQIcon />
//           </div>
//         </div>
//       </div>
//       <div className={`weight-loss_faq_answer ${isOpen ? 'open' : ''}`}>
//         <div className="weight-loss_faq_answer-wrapper">
//           <div className="text-rich-text2">
//             <p>{answer}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const QuickieComponent = () => {
//   return (
//     <div className="page-wrapper font-v2">
//       {/* Navbar */}
//       <div className="navbar6_component">
//         <div className="padding-global">
//           <div className="navbar6_container">
//             <a href="#" className="navbar6_logo-link">
//               <div className="logo_global">
//                 <img 
//                   loading="eager" 
//                   src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/66f64184a30e0919d28c5316_curex-logo.svg" 
//                   alt="Curex logo black" 
//                   className="logo_primary"
//                 />
//               </div>
//             </a>
//             <nav className="navbar6_menu">
//               <a href="#what-we-treat" className="navbar6_link">What We Treat</a>
//               <a href="#how-it-works" className="navbar6_link">How It Works</a>
//               <a href="#faq" className="navbar6_link">FAQ</a>
//               <a href="/quiz" className="navbar6_link">Contact</a>
//             </nav>
//             <div className="navbar6_button-wrapper">
//               <div className="hide-tablet">
//                 <div className="btn2_main_wrap is-nav">
//                   <div className="btn2_main_layout is-nav">
//                     <div className="btn_main_text">Order Now</div>
//                     <div className="btn2_main_icon is-nav">
//                       <div className="icon-arrow">
//                         <CartIcon />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="btn_clickable_wrap">
//                     <a href="/quiz" className="btn_clickable_link is-nav">
//                       <span className="btn_clickable_text">Order Now</span>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <div className="navbar6_menu-button">
//                 <MenuIcon />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

// const Header = () => {
//     const includedItems = [
//         "<strong>Personalized formula</strong> for congestion, runny nose, itching, sneezing, post nasal drip.",
//         "<strong>Clinical review</strong> of your medical history and a personalized prescription.",
//         "Nasal spray. <strong>Up to 30 days supply</strong> when used twice per day. Use daily for best results.",
//         "Nasal application ensures it starts <strong>working within 20 mins and provides 12 hour relief</strong>.",
//         "For <strong>best long-term results</strong> combine with allergy immunotherapy.",
//     ];

//     const galleryImages = [
//         "https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/68751a543187b600191a9e7d_quickie-image0.avif",
//         "https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/68751a34a9e60b61d5b0a195_quickie-image1.avif",
//         "https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/68751a33cae2577fe52fab4b_quickie-image2.avif",
//         "https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/68751a33a3be8865c09a556f_quickie-image3.avif",
//         "https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/68751a332fc894e8927a50b1_quickie-image4.avif",
//     ];

//     const [activeImage, setActiveImage] = useState(galleryImages[0]);

//     return (
//         <header className="bg-white font-montserrat">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
//                 <div className="grid lg:grid-cols-2 gap-12 items-start">
//                     <div className="w-full">
//                         <img src={activeImage} alt="Quickie Nasal Spray" className="w-full rounded-lg shadow-lg mb-4" />
//                         <div className="grid grid-cols-5 gap-2">
//                             {galleryImages.map((src, index) => (
//                                 <img key={index} src={src} alt={`Thumbnail ${index + 1}`} 
//                                      className={`rounded-md cursor-pointer border-2 ${activeImage === src ? 'border-curex-blue' : 'border-transparent'}`}
//                                      onMouseEnter={() => setActiveImage(src)}
//                                 />
//                             ))}
//                         </div>
//                     </div>
                    
//                     <div>
//                         <div className="flex flex-wrap gap-x-8 gap-y-4 mb-4">
//                             <div className="flex items-center gap-2"><img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/685e8eb7ea6f5dc465250dfb_Icon_nr_1.avif" alt="#1 Clinic" className="w-7 h-7"/><p className="font-semibold text-sm"><strong>#1</strong> Online Allergy Clinic</p></div>
//                             <div className="flex items-center gap-2"><img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/685e903f9d913c88b47fbca7_Users.avif" alt="Users" className="w-7 h-7"/><div className="flex flex-col"><img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/685e907dc7e20f0db1f948ca_stars2.svg" alt="5 stars" className="h-4 w-auto"/><p className="font-semibold text-sm">Trusted by <strong>50,000+</strong> Users</p></div></div>
//                         </div>

//                         <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900"><span className="text-curex-pink">Quickie</span> Nasal Spray</h1>
//                         <div className="mt-4 text-gray-700 space-y-2 text-lg">
//                            <p><strong>Get fast-acting prescription relief for allergies and congestion.</strong></p>
//                            <p>This advanced, allergist-prescribed formula is designed for people who haven’t found sufficient relief with over-the-counter medications.</p>
//                         </div>
                        
//                         <div className="mt-6 flex gap-4">
//                            <div className="flex items-center gap-2 text-sm font-semibold bg-gray-100 p-2 rounded-md"><img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/68751505a3865b3824a7fcce_icon-guarantee.svg" alt="" className="w-5 h-5"/> Curex Guarantee</div>
//                            <div className="flex items-center gap-2 text-sm font-semibold bg-gray-100 p-2 rounded-md"><img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/68751505a3865b3824a7fcce_icon-guarantee.svg" alt="" className="w-5 h-5"/> HSA / FSA eligible</div>
//                         </div>
                        
//                         <div className="mt-8">
//                             <Button href="" variant="hero">Order Now $49</Button>
//                             <p className="text-center sm:text-left mt-2 text-sm text-gray-500 italic">Only pay if prescribed. 30-day money back guarantee</p>
//                         </div>
                        
//                         <div className="mt-10 pt-6 border-t border-gray-200">
//                             <h3 className="font-bold text-lg mb-4">What’s Included?</h3>
//                             <ul className="space-y-4">
//                                 {includedItems.map((item, index) => (
//                                     <li key={index} className="flex items-start gap-3">
//                                         <CheckIcon />
//                                         <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: item }}></p>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </header>
//     );
// };

// const Logos = () => {
//     const logos = [
//         "https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/685eb33c7f86ba35e8910258_OCBS.svg", "https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/685eb33cd411c8412e6332ea_Healthline.svg", "https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/685eb33ca8e91546677e4da5_AXIOS.svg", "https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/685eb33cf652c752dc1564ae_MensHealth.svg", "https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/685eb33cab4472680ef07c97_FOX.svg", "https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/685eb33cdc7b6e1282401fc3_USA_TODAY.svg"
//     ];

//     return (
//         <section className="bg-gray-50 py-8 sm:py-12">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 md:gap-x-12">
//                     {logos.map((logo, index) => <img key={index} className="h-8 w-auto object-contain" src={logo} alt={`Client logo ${index + 1}`} />)}
//                 </div>
//             </div>
//         </section>
//     );
// };

// const CompareTable = () => (
//     <section className="bg-white py-16 md:py-24 font-montserrat">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-12">
//                 <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
//                     Formulated for <span className="text-curex-pink">Your Body.</span> Clinically Backed Quickie is a <span className="text-curex-pink">5-in-1</span> Nasal Spray
//                 </h2>
//             </div>
//             {/* The table structure can be complex to make responsive. A div-based grid is often better. */}
//             <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-px bg-gray-200 border border-gray-200 rounded-lg overflow-hidden text-center">
//                 {/* Headers */}
//                 <div className="bg-white p-4 font-semibold"></div>
//                 {['Quickie', 'AstePro', 'Nasonex', 'Afrin', 'Atrovent', 'NeilMed NasoGel'].map(h => 
//                     <div key={h} className={`p-4 font-bold ${h === 'Quickie' ? 'bg-curex-pink text-white' : 'bg-gray-100 text-gray-800'}`}>{h}</div>
//                 )}
//                 {/* Rows */}
//                 {['Antihistamine', 'Corticosteroid', 'Decongestant', 'Anticholinergic', 'Hyaluronic'].map((feature, idx) => (
//                     <React.Fragment key={feature}>
//                         <div className={`p-4 font-semibold text-left ${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>{feature}</div>
//                         {[1, 2, 3, 4, 5, 6].map(col => {
//                             const hasCheck = 
//                                 (col === 1) || 
//                                 (col === 2 && feature === 'Antihistamine') ||
//                                 (col === 3 && feature === 'Corticosteroid') ||
//                                 (col === 4 && feature === 'Decongestant') ||
//                                 (col === 5 && feature === 'Anticholinergic') ||
//                                 (col === 6 && feature === 'Hyaluronic');
//                             return (
//                                 <div key={col} className={`flex items-center justify-center p-4 ${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
//                                     {hasCheck && <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/6875213b82d8eea5e147187e_check_icon_white.svg" className={`w-6 h-6 rounded-full p-1 ${col === 1 ? 'bg-curex-pink' : 'bg-gray-400'}`} alt="Checkmark"/>}
//                                 </div>
//                             )
//                         })}
//                     </React.Fragment>
//                 ))}
//             </div>

//             <div className="mt-12 grid md:grid-cols-3 gap-8">
//                 <div className="text-center p-6 bg-gray-50 rounded-lg">
//                     <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/6875261b7bd2e25aebde698c_quickie_compare-1.png" alt="" className="mx-auto mb-4"/>
//                     <p>It’s a physician-prescribed, <strong>custom-compounded formula designed to target all your nasal symptoms at once</strong> — congestion, runny nose, post-nasal drip, sneezing, and more.</p>
//                 </div>
//                 <div className="text-center p-6 bg-gray-50 rounded-lg">
//                     <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/6875261b4bcf27c4fd622e81_quickie_compare-2.png" alt="" className="mx-auto mb-4"/>
//                     <p><strong>Formulated by doctors</strong> and pharmacologists and backed by clinical research, <strong>Quickie combines five powerful ingredients into one easy spray.</strong></p>
//                 </div>
//                 <div className="text-center p-6 bg-gray-50 rounded-lg">
//                     <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/6875261b84767b52ec3d5e3f_quickie_compare-3.png" alt="" className="mx-auto mb-4"/>
//                     <p><strong>Typical prescription may include the following ingredients:</strong> Azelastine HCL 0.15%, Mometasone Furoate 0.05%, Oxymetazoline HCL 0.0125%, Ipratroprium 0.06%, Sodium Hyaluronate 0.04%.</p>
//                 </div>
//             </div>
//         </div>
//     </section>
// );

// const UnlockScience = () => (
//     <section className="bg-gray-50 py-16 md:py-24 font-montserrat">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-16">
//                 <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900"><span className="text-curex-pink">Unlock the Power</span> of Science</h2>
//                 <p className="mt-4 text-lg text-gray-600">Backed by published clinical studies on Quickie’s active ingredients</p>
//             </div>
//             {/* The unique grid layout requires careful setup */}
//             <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                 <div className="lg:col-span-2 p-8 bg-white rounded-lg shadow-lg">
//                     <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/6875fff08fc06f03ff765fcc_quickie-research-image1.png" alt="Research chart" className="mb-4"/>
//                     <h3 className="font-bold text-xl">Immediate Relief. Improvement within Days.</h3>
//                     <p className="mt-2 text-gray-600">91% of patients using a steroid + antihistamine combo reported <strong>significant symptom improvement within 7 days.</strong></p>
//                 </div>
//                 <div className="p-8 bg-white rounded-lg shadow-lg text-center flex flex-col items-center justify-center">
//                     <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/68752619d993b092fe3f68ea_icon-breathe.svg" alt="Breathe icon" className="w-16 h-16 mb-2"/>
//                     <p className="text-5xl font-bold text-curex-blue">45%</p>
//                     <p className="mt-2 text-gray-600">Breathe 45% easier with decongestant + steroid combo. Less rebound, more relief!</p>
//                 </div>
//                 <div className="p-8 bg-white rounded-lg shadow-lg text-center flex flex-col items-center justify-center">
//                     <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/6875261924e1220c612ff8ee_icon-stopwatch.svg" alt="Stopwatch icon" className="w-16 h-16 mb-2"/>
//                     <h3 className="font-bold text-xl">Quick Relief.<br/>Real Results.</h3>
//                     <p className="mt-2 text-gray-600"><strong>Faster relief:</strong> Patients reported feeling improvement <strong>within 10–30 minutes of use.</strong></p>
//                 </div>
//                 <div className="lg:col-span-4 grid md:grid-cols-3 gap-6">
//                     <div className="p-8 bg-white rounded-lg shadow-lg flex flex-col justify-between">
//                          <div>
//                             <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/6875261c3d94983064f406b1_quickie_research1.png" alt="Relief diagram" className="rounded-md mb-4"/>
//                             <h3 className="font-bold text-xl">Powerful Relief from Rhinorrhea</h3>
//                          </div>
//                         <p className="mt-2 text-gray-600"><strong>60–80% reduction in rhinorrhea</strong> with ipratropium bromide, including in nonallergic and cold-related cases.</p>
//                     </div>
//                      <div className="p-8 bg-white rounded-lg shadow-lg flex flex-col justify-between">
//                          <div>
//                             <div className="relative mb-4">
//                                 <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/6875261b934d16f582a8a194_quickie-research3.png" alt="5 in 1" className="rounded-md"/>
//                                 <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-extrabold bg-black/30 rounded-md">5<span className="text-4xl mt-2 mx-1">in</span>1</div>
//                             </div>
//                          </div>
//                         <p className="mt-2 text-gray-600"><strong>5-in-1 formulation improves adherence and convenience</strong>, helping patients stay consistent and feel better faster.</p>
//                     </div>
//                      <div className="p-8 bg-white rounded-lg shadow-lg text-center flex flex-col items-center justify-center">
//                          <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/6875261a224fe30c6ab215bf_icon-heart.svg" alt="Heart icon" className="w-16 h-16 mb-4"/>
//                         <h3 className="font-bold text-xl">Hyaluronic Acid Heals & Hydrates</h3>
//                         <p className="mt-2 text-gray-600">Hyaluronic acid keeps nasal passages moistured and supports healing of the nasal lining in 90% of patients.</p>
//                     </div>
//                 </div>
//             </div>
//             <div className="text-center mt-16">
//                  {/* TODO: Add link */}
//                 <Button href="" variant="hero">Order Now $49</Button>
//             </div>
//         </div>
//     </section>
// );


// const HowItWorksSteps = () => (
//     <section className="relative bg-curex-blue text-white py-16 md:py-24 font-montserrat">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//             <h2 className="text-3xl md:text-4xl font-extrabold mb-16">How It Works</h2>
//             <div className="grid md:grid-cols-3 gap-8">
//                 <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm relative">
//                     <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-white text-curex-blue rounded-full flex items-center justify-center text-2xl font-bold">1</div>
//                     <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/68752619ed34a81237e791f8_icon-online-yellow.svg" alt="" className="w-16 h-16 mx-auto mb-4"/>
//                     <p className="text-xl font-semibold">Medical Survey & Online Consultation</p>
//                 </div>
//                 <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm relative">
//                     <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-white text-curex-blue rounded-full flex items-center justify-center text-2xl font-bold">2</div>
//                     <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/68752619e853b2f5b75df2b8_icon-person-yellow.svg" alt="" className="w-16 h-16 mx-auto mb-4"/>
//                     <p className="text-xl font-semibold">Custom Quickie Spray delivered to your door</p>
//                 </div>
//                 <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm relative">
//                     <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-white text-curex-blue rounded-full flex items-center justify-center text-2xl font-bold">3</div>
//                     <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/687526197bd2e25aebde6845_icon-heart-handshake.svg" alt="" className="w-16 h-16 mx-auto mb-4"/>
//                     <p className="text-xl font-semibold">Continuous Care by Text or Video</p>
//                 </div>
//             </div>
//             <div className="mt-16">
//                  {/* TODO: Add link */}
//                 <Button href="" variant="secondary">Order Now $49</Button>
//                 <p className="mt-4 text-white/80">Quick Relief. Real Results.</p>
//             </div>
//         </div>
//     </section>
// );


// const Testimonials = () => {
//     // Testimonial data updated for the Quickie page
//     const testimonialsData = [
//          {
//             quote: "Quickie cleared me up in minutes! Finally something that actually works!",
//             name: "Anna M.",
//             location: "Boston, MA",
//             image: "https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/68627da5413119d9c6dae89f_Profile_picture-3.avif"
//         },
//         {
//             quote: "I've gotten more relief from Quickie then anything else I've tried. And fast, too!",
//             name: "Ines L.",
//             location: "Austin, TX",
//             image: "https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/68627da5b17fb1cdb78453b3_Profile_picture-2.avif"
//         },
//         {
//             quote: "Quickie gives me fast relief without the crash. Love it.",
//             name: "Monica S.",
//             location: "Los Angeles, CA",
//             image: "https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/687916cbeb71f8176115cf9a_Monica%20S.%20review.jpg"
//         },
//          {
//             quote: "No more stuffy mornings. Curex is now part of my daily routine.",
//             name: "Lars T.",
//             location: "Seattle, WA",
//             image: "https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/68627da5240107238724f244_Profile_picture-6.avif"
//         },

//     ];

//     return (
//         <section className="bg-gray-50 py-16 md:py-24 font-montserrat">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="text-center mb-12">
//                     <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
//                         Join over <span className="text-curex-pink">50,000</span> Curex users!
//                     </h2>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                     {testimonialsData.map((testimonial, index) => (
//                         <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
//                             <p className="text-gray-600 mb-4 text-lg">“{testimonial.quote}”</p>
//                             <div>
//                                 <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/685e907dc7e20f0db1f948ca_stars2.svg" alt="5 stars" className="h-5 mb-4"/>
//                                 <div className="flex items-center">
//                                     <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 object-cover"/>
//                                     <div>
//                                         <p className="font-bold text-gray-900">{testimonial.name}</p>
//                                         <p className="text-sm text-gray-500">{testimonial.location}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                  <div className="text-center mt-12">
//                    {/* TODO: Add link */}
//                     <a href="" className="font-semibold text-curex-blue hover:underline">Read more</a>
//                 </div>
//             </div>
//         </section>
//     );
// };

// const Pricing = () => {
//     // Reusable list item component for pricing cards
//     const PriceListItem = ({ children }: { children: React.ReactNode }) => (
//         <li className="flex items-start gap-3">
//             <CheckIcon />
//             <p className="text-gray-600">{children}</p>
//         </li>
//     );

//     return (
//         <section className="bg-white py-16 md:py-24 font-montserrat">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="text-center mb-12">
//                     <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Choose Your <span className="text-curex-pink">Quickie</span> Plan</h2>
//                     <p className="mt-4 text-lg text-gray-600">Allergy relief, your way—flexible, affordable, and built for real life.</p>
//                 </div>

//                 <div className="grid lg:grid-cols-3 gap-8 items-start">
//                     {/* Plan 1: Pay as You Go */}
//                     <div className="border border-gray-200 rounded-lg p-8">
//                         <h3 className="text-2xl font-bold">Pay as You Go</h3>
//                         <p className="italic text-gray-500 mb-4">No commitment. Full flexibility.</p>
//                         <p className="text-4xl font-extrabold">$59 <span className="text-lg font-medium text-gray-500">/ One payment</span></p>
//                         <hr className="my-6"/>
//                         <ul className="space-y-4">
//                            <PriceListItem>Free Shipping</PriceListItem>
//                            <PriceListItem>Free online consult</PriceListItem>
//                            <PriceListItem>Personalized Formula Tailored to Your Symptoms</PriceListItem>
//                            <PriceListItem>Up to 5 Prescription-Strength Ingredients</PriceListItem>
//                         </ul>
//                     </div>
//                     {/* Plan 2: Monthly (Most Popular) */}
//                     <div className="border-2 border-curex-pink rounded-lg p-8 relative shadow-2xl">
//                         <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-curex-pink text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</div>
//                          <h3 className="text-2xl font-bold">Monthly</h3>
//                         <p className="italic text-gray-500 mb-4">Ongoing support, monthly convenience.</p>
//                         <p className="text-4xl font-extrabold">$49 <span className="text-lg font-medium text-gray-500">/ Month</span></p>
//                         <p className="text-green-600 font-bold">17% SAVINGS</p>
//                         <hr className="my-6"/>
//                          <ul className="space-y-4">
//                            <PriceListItem>Free Shipping</PriceListItem>
//                            <PriceListItem>Unlimited Online Consults</PriceListItem>
//                            <PriceListItem>Personalized Formula Tailored to Your Symptoms</PriceListItem>
//                            <PriceListItem>Up to 5 Prescription-Strength Ingredients</PriceListItem>
//                             <PriceListItem>Change or Cancel Anytime</PriceListItem>
//                         </ul>
//                     </div>
//                     {/* Plan 3: Annual (Best Value) */}
//                     <div className="border border-gray-200 rounded-lg p-8 relative">
//                          <div className="absolute -top-4 right-4 bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">Best Value</div>
//                          <h3 className="text-2xl font-bold">Annual</h3>
//                         <p className="italic text-gray-500 mb-4">One year. Maximum savings. Total care.</p>
//                         <p className="text-4xl font-extrabold">$490 <span className="text-lg font-medium text-gray-500">/ Year</span></p>
//                         <p className="text-green-600 font-bold">41% SAVINGS</p>
//                         <hr className="my-6"/>
//                          <ul className="space-y-4">
//                            <PriceListItem>Free Shipping on 12 Monthly Sets</PriceListItem>
//                            <PriceListItem>Unlimited Online Consults</PriceListItem>
//                            <PriceListItem>Personalized Formula Tailored to Your Symptoms</PriceListItem>
//                            <PriceListItem>Up to 5 Prescription-Strength Ingredients</PriceListItem>
//                             <PriceListItem>Change or Cancel Anytime</PriceListItem>
//                         </ul>
//                     </div>
//                 </div>

//                 <div className="text-center mt-12">
//                      {/* TODO: Add link */}
//                     <Button href="" variant="hero">Order Now</Button>
//                     <p className="mt-4 text-gray-600">Quickie Spray trial is included for free with your subscription to Curex allergy immunotherapy.</p>
//                 </div>
//             </div>
//         </section>
//     );
// };


// const FAQ = () => {
//     const [openIndex, setOpenIndex] = useState<number | null>(0);

//     const faqs = [
//         { q: "How fast does the Quickie Nasal Spray work?", a: "Most patients feel relief within 15 minutes. We have both short-term relief ingredients as well as longer-term relief to keep you feeling better, longer. Some say it’s like turning off their allergies." },
//         { q: "What symptoms does the Nasal Spray treat?", a: "Sneezing runny nose, nasal congestion, post-nasal drip, sinus pressure, itchy nose. Great for outdoor allergies, indoor dust, or when pollen spikes unexpectedly." },
//         { q: "Will it cause rebound congestion like Afrin?", a: "No, this formula uses a microdose of oxymetazoline, balanced with anti-inflammatory and moisturizing ingredients to reduce the risk of rebound congestion. Clinical studies over the last decade show that when oxymetazoline is combined with a corticosteroid, it can be used safely over the long term without causing rebound symptoms." },
//         { q: "What’s the difference between this and over-the-counter sprays?", a: "Quickie Spray combines up to five prescription-strength ingredients into a single, personalized formula — targeting multiple symptoms like congestion, post-nasal drip, and inflammation. OTC sprays typically address just one symptom and lack the synergy of a customized blend." },
//         { q: "Does it have a bad taste or drip down the throat?", a: "Some ingredients like azelastine may cause a slight taste, but many patients find it milder than traditional OTC sprays. Proper spray technique (head forward, not tilted back) helps minimize drip.We also offer an alternative formulation with olopatadine, which has a gentler taste profile and may be preferred by taste-sensitive patients." },
//         { q: "Can I use it with my other allergy meds?", a: "Quickie is designed to replace most other allergy medications. But it is designed to compliment allergy immunotherapy for long-term relief. If you’re currently taking other antihistamines or nasal sprays, tell your Curex provider, so we can adjust your formula to avoid overlap or interactions." }
//     ];

//     return (
//         <section className="bg-gray-50 py-16 md:py-24 font-montserrat">
//             <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">FAQ</h2></div>
//                 <div className="space-y-4">
//                     {faqs.map((faq, index) => (
//                         <div key={index} className="border-b border-gray-200">
//                             <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full flex justify-between items-center text-left p-6">
//                                 <span className="text-lg font-semibold text-gray-800">{faq.q}</span>
//                                 <div className={`w-6 h-6 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>{/* Arrow placeholder */}</div>
//                             </button>
//                             {openIndex === index && <div className="px-6 pb-6 text-gray-600">{faq.a}</div>}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// const Footer = () => (
//     <footer className="bg-gray-900 text-white font-montserrat">
//         <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
//                 <div className="space-y-4"><a href=""><img className="h-8 w-auto" src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/66f641850d56b153c380c52b_curex-logo-white.svg" alt="Curex Logo" /></a></div>
//                 <div>
//                     <h3 className="text-lg font-semibold">Contact</h3>
//                     <ul className="mt-4 space-y-2 text-gray-300 text-sm">
//                         <li>Call/text us at:<br /><a href="tel:(857)240-1080" className="hover:underline">(857) 240-1080</a></li>
//                         <li>Email us at:<br /><a href="mailto:hi@getcurex.com" className="hover:underline">hi@getcurex.com</a></li>
//                         <li>777 Brickell Ave #500-95053<br />Miami, FL 33131</li>
//                     </ul>
//                 </div>
//                 <div>
//                     <h3 className="text-lg font-semibold">Follow us</h3>
//                     <div className="flex space-x-4 mt-4">{/* Social Icons Placeholder */}</div>
//                 </div>
//                  <div>
//                     <h3 className="text-lg font-semibold">Legal</h3>
//                      <ul className="mt-4 space-y-2 text-gray-300 text-sm">
//                         <li><a href="" className="hover:underline">Privacy Policy</a></li>
//                         <li><a href="" className="hover:underline">Terms of Use</a></li>
//                         <li><a href="" className="hover:underline">Informed Consent</a></li>
//                          <li><a href="" className="hover:underline">We Cover All States</a></li>
//                     </ul>
//                 </div>
//             </div>
//             <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
//                 <p>&copy; {new Date().getFullYear()} Curex, Inc. All rights reserved.</p>
//             </div>
//         </div>
//     </footer>
// );


// // --- Main App Component ---
// export default function App() {
//   return (
//     <div className="bg-white font-montserrat">
//       <Navbar />
//       <main>
//         <Header />
//         <Logos />
//         <CompareTable />
//         <UnlockScience />
//         <HowItWorksSteps />
//         <Testimonials />
//         <Pricing />
//         <FAQ />
//       </main>
//       <Footer />
//     </div>
//   );
// }