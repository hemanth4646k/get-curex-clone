import Hero from "../../common/ui/Hero";
import CommonBlogPage from "./CommonBlogPage";

const cardData: { title: string; description: string; link: string }[] = [
  {
    "title": "Is Anastasia Beverly Hills Modern Renaissance Palette hypoallergenic: Symptoms & Overview",
    "description": "Discover if the Anastasia Beverly Hills Modern Renaissance Palette is hypoallergenic. Learn about symptoms, relief tips, and alternative hypoallergenic eyeshadow options.",
    "link": "/beauty-product-allergy/is-anastasia-beverly-hills-modern-renaissance-palette-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Hourglass Vanish Airbrush Concealer hypoallergenic: Symptoms & Overview",
    "description": "Discover if Hourglass Vanish Airbrush Concealer is hypoallergenic, understand symptoms, relief tips, and explore alternative hypoallergenic concealers.",
    "link": "/beauty-product-allergy/is-hourglass-vanish-airbrush-concealer-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is MAC Pro Longwear Concealer hypoallergenic: Symptoms & Overview",
    "description": "Discover if MAC Pro Longwear Concealer is hypoallergenic. Learn symptoms, relief tips, and explore alternative hypoallergenic concealers.",
    "link": "/beauty-product-allergy/is-mac-pro-longwear-concealer-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is MAC Studio Fix Powder Plus Foundation hypoallergenic: Symptoms & Overview",
    "description": "Explore if MAC Studio Fix Powder Plus is hypoallergenic, symptoms to watch for, relief tips, and alternatives for sensitive skin in this comprehensive guide.",
    "link": "/beauty-product-allergy/is-mac-studio-fix-powder-plus-foundation-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Bobbi Brown Crushed Lip Color hypoallergenic: Symptoms & Overview",
    "description": "Explore if Bobbi Brown Crushed Lip Color is hypoallergenic, symptoms of allergies, relief tips, and discover alternative hypoallergenic lipsticks.",
    "link": "/beauty-product-allergy/is-bobbi-brown-crushed-lip-color-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Dior Skin Correct Concealer hypoallergenic: Symptoms & Overview",
    "description": "Discover if Dior Skin Correct Concealer is hypoallergenic. Learn about symptoms, relief tips, and explore alternative hypoallergenic concealers.",
    "link": "/beauty-product-allergy/is-dior-skin-correct-concealer-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Natasha Denona Glow Gold Highlighter hypoallergenic: Symptoms & Overview",
    "description": "Discover if Natasha Denona Glow Gold Highlighter is hypoallergenic. Learn symptoms, relief tips, and explore alternative hypoallergenic highlighters.",
    "link": "/beauty-product-allergy/is-natasha-denona-glow-gold-highlighter-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Pat McGrath Labs Sublime Perfection Foundation hypoallergenic: Symptoms & Overview",
    "description": "Discover if Pat McGrath Labs Sublime Perfection Foundation is hypoallergenic, potential symptoms, relief tips, and alternative hypoallergenic foundations.",
    "link": "/beauty-product-allergy/is-pat-mcgrath-labs-sublime-perfection-foundation-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Makeup Revolution Conceal & Define Concealer hypoallergenic: Symptoms & Overview",
    "description": "Discover if Makeup Revolution Conceal & Define Concealer is hypoallergenic. Learn symptoms, relief tips, emergencies, and find alternative hypoallergenic options.",
    "link": "/beauty-product-allergy/is-makeup-revolution-conceal-define-concealer-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is ColourPop Super Shock Highlighter hypoallergenic: Symptoms & Overview",
    "description": "Discover if ColourPop Super Shock Highlighter is hypoallergenic. Learn symptoms, relief tips, and explore safe alternatives for sensitive skin.",
    "link": "/beauty-product-allergy/is-colourpop-super-shock-highlighter-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Morphe Continuous Setting Mist hypoallergenic: Symptoms & Overview",
    "description": "Discover if Morphe Continuous Setting Mist is hypoallergenic. Learn symptoms, relief tips, and find alternative hypoallergenic setting sprays.",
    "link": "/beauty-product-allergy/is-morphe-continuous-setting-mist-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Dior Diorshow Iconic Overcurl Mascara hypoallergenic: Symptoms & Overview",
    "description": "Discover if Dior Diorshow Iconic Overcurl Mascara is hypoallergenic. Learn about allergy symptoms, relief tips, and explore hypoallergenic alternatives.",
    "link": "/beauty-product-allergy/is-dior-diorshow-iconic-overcurl-mascara-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Fenty Beauty Cheeks Out Freestyle Cream Blush hypoallergenic: Symptoms & Overview",
    "description": "Discover if Fenty Beauty Cheeks Out Cream Blush is hypoallergenic, symptoms of reactions, relief tips, and alternative hypoallergenic blush options.",
    "link": "/beauty-product-allergy/is-fenty-beauty-cheeks-out-freestyle-cream-blush-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Hourglass Ambient Lighting Powder hypoallergenic: Symptoms & Overview",
    "description": "Discover if Hourglass Ambient Lighting Powder is hypoallergenic. Learn symptoms, emergency relief, and explore alternative hypoallergenic setting powders.",
    "link": "/beauty-product-allergy/is-hourglass-ambient-lighting-powder-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Maybelline Dream Urban Cover Foundation hypoallergenic: Symptoms & Overview",
    "description": "Discover if Maybelline Dream Urban Cover Foundation is hypoallergenic. Learn about symptoms, relief tips, and explore alternative hypoallergenic foundations.",
    "link": "/beauty-product-allergy/is-maybelline-dream-urban-cover-foundation-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Revlon ColorStay Pressed Powder hypoallergenic: Symptoms & Overview",
    "description": "Discover if Revlon ColorStay Pressed Powder is hypoallergenic. Learn about symptoms, relief methods, and alternative hypoallergenic setting powders.",
    "link": "/beauty-product-allergy/is-revlon-colorstay-pressed-powder-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Dior Addict Lip Glow hypoallergenic: Symptoms & Overview",
    "description": "Discover if Dior Addict Lip Glow is hypoallergenic. Learn symptoms, relief tips, and explore hypoallergenic lipstick alternatives today.",
    "link": "/beauty-product-allergy/is-dior-addict-lip-glow-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is CoverGirl Clean Fresh Skin Milk Foundation hypoallergenic: Symptoms & Overview",
    "description": "Discover if CoverGirl Clean Fresh Skin Milk Foundation is hypoallergenic. Learn about allergy symptoms, treatments, and hypoallergenic alternatives.",
    "link": "/beauty-product-allergy/is-covergirl-clean-fresh-skin-milk-foundation-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Urban Decay All Nighter Setting Spray hypoallergenic: Symptoms & Overview",
    "description": "Discover if Urban Decay All Nighter Setting Spray is hypoallergenic. Learn about symptoms, treatment, and safe alternatives for sensitive skin.",
    "link": "/beauty-product-allergy/is-urban-decay-all-nighter-setting-spray-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Anastasia Beverly Hills Contour Kit hypoallergenic: Symptoms & Overview",
    "description": "Discover if the Anastasia Beverly Hills Contour Kit is hypoallergenic. Learn about symptoms, relief tips, and hypoallergenic contour alternatives.",
    "link": "/beauty-product-allergy/is-anastasia-beverly-hills-contour-kit-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Charlotte Tilbury Filmstar Bronze & Glow hypoallergenic: Symptoms & Overview",
    "description": "Discover if Charlotte Tilbury Filmstar Bronze & Glow is hypoallergenic. Learn symptoms, relief tips, and explore safe alternative bronzers.",
    "link": "/beauty-product-allergy/is-charlotte-tilbury-filmstar-bronze-glow-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is CeraVe Hydrating Cleanser hypoallergenic: Symptoms & Overview",
    "description": "Discover if CeraVe Hydrating Cleanser is hypoallergenic. Explore symptoms, relief tips, and alternative cleansing options for sensitive skin.",
    "link": "/beauty-product-allergy/is-cerave-hydrating-cleanser-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Charlotte Tilbury Hollywood Flawless Filter hypoallergenic: Symptoms & Overview",
    "description": "Discover if Charlotte Tilbury Hollywood Flawless Filter is hypoallergenic. Learn symptoms, relief tips, emergencies, and alternative hypoallergenic primers.",
    "link": "/beauty-product-allergy/is-charlotte-tilbury-hollywood-flawless-filter-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Huda Beauty Faux Filter Foundation hypoallergenic: Symptoms & Overview",
    "description": "Discover if Huda Beauty Faux Filter Foundation is hypoallergenic, learn symptoms, relief tips, and explore alternative hypoallergenic foundations.",
    "link": "/beauty-product-allergy/is-huda-beauty-faux-filter-foundation-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Glossier Cloud Paint Blush hypoallergenic: Symptoms & Overview",
    "description": "Discover if Glossier Cloud Paint Blush is hypoallergenic. Learn symptoms, relief tips, and find alternative hypoallergenic blush options today.",
    "link": "/beauty-product-allergy/is-glossier-cloud-paint-blush-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Too Faced Peach Perfect Foundation hypoallergenic: Symptoms & Overview",
    "description": "Discover if Too Faced Peach Perfect Foundation is hypoallergenic. Learn symptoms, relief tips, and explore alternative hypoallergenic foundations.",
    "link": "/beauty-product-allergy/is-too-faced-peach-perfect-foundation-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Smashbox Always On Liquid Lipstick hypoallergenic: Symptoms & Overview",
    "description": "Discover if Smashbox Always On Liquid Lipstick is hypoallergenic. Learn symptoms, relief tips, and explore alternative hypoallergenic lipsticks.",
    "link": "/beauty-product-allergy/is-smashbox-always-on-liquid-lipstick-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is NARS Natural Radiant Longwear Foundation hypoallergenic: Symptoms & Overview",
    "description": "Discover if NARS Natural Radiant Longwear Foundation is hypoallergenic, recognize symptoms, learn relief techniques, and explore alternative hypoallergenic foundations.",
    "link": "/beauty-product-allergy/is-nars-natural-radiant-longwear-foundation-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Wet n Wild Megaglo Highlighting Powder hypoallergenic: Symptoms & Overview",
    "description": "Discover if Wet n Wild Megaglo Highlighting Powder is hypoallergenic. Learn symptoms, relief tips, and explore alternative hypoallergenic highlighters.",
    "link": "/beauty-product-allergy/is-wet-n-wild-megaglo-highlighting-powder-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Pixi Glow Tonic hypoallergenic: Symptoms & Overview",
    "description": "Explore if Pixi Glow Tonic is hypoallergenic, symptoms, relief tips, and find alternative hypoallergenic toners for sensitive skin.",
    "link": "/beauty-product-allergy/is-pixi-glow-tonic-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is E.l.f. Cosmetics Camo Concealer hypoallergenic: Symptoms & Overview",
    "description": "Discover if E.l.f. Camo Concealer is hypoallergenic. Learn symptoms, relief tips, and explore alternatives. Stay informed for your skin's health.",
    "link": "/beauty-product-allergy/is-e-l-f-cosmetics-camo-concealer-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Fresh Rose Deep Hydration Facial Toner hypoallergenic: Symptoms & Overview",
    "description": "Discover if Fresh Rose Deep Hydration Facial Toner is hypoallergenic. Learn symptoms, relief tips, and find alternative hypoallergenic toners.",
    "link": "/beauty-product-allergy/is-fresh-rose-deep-hydration-facial-toner-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Verb Hydrating Shampoo hypoallergenic: Symptoms & Overview",
    "description": "Discover if Verb Hydrating Shampoo is hypoallergenic. Learn about symptoms, emergencies, relief tips, and alternative hypoallergenic shampoos.",
    "link": "/beauty-product-allergy/is-verb-hydrating-shampoo-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Christophe Robin Cleansing Purifying Scrub with Sea Salt hypoallergenic: Symptoms & Overview",
    "description": "Discover if Christophe Robin Cleansing Purifying Scrub with Sea Salt is hypoallergenic, its allergy symptoms, relief tips, and alternative scrubs.",
    "link": "/beauty-product-allergy/is-christophe-robin-cleansing-purifying-scrub-with-sea-salt-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Drunk Elephant Protini Polypeptide Cream hypoallergenic: Symptoms & Overview",
    "description": "Discover if Drunk Elephant Protini Cream is hypoallergenic. Learn symptoms, relief tips, and find alternative hypoallergenic moisturizers.",
    "link": "/beauty-product-allergy/is-drunk-elephant-protini-polypeptide-cream-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is NARS Soft Matte Complete Concealer hypoallergenic: Symptoms & Overview",
    "description": "Discover if NARS Soft Matte Complete Concealer is hypoallergenic. Learn symptoms, relief tips, and explore alternative hypoallergenic concealers.",
    "link": "/beauty-product-allergy/is-nars-soft-matte-complete-concealer-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Milk Makeup Hydro Grip Primer hypoallergenic: Symptoms & Overview",
    "description": "Discover if Milk Makeup Hydro Grip Primer is hypoallergenic. Learn symptoms, relief, and explore alternative hypoallergenic primers in our detailed overview.",
    "link": "/beauty-product-allergy/is-milk-makeup-hydro-grip-primer-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Pat McGrath Labs MatteTrance Lipstick hypoallergenic: Symptoms & Overview",
    "description": "Discover if Pat McGrath Labs MatteTrance Lipstick is hypoallergenic. Learn symptoms, relief tips, and find alternative hypoallergenic lipsticks.",
    "link": "/beauty-product-allergy/is-pat-mcgrath-labs-mattetrance-lipstick-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Shiseido Synchro Skin Self-Refreshing Foundation hypoallergenic: Symptoms & Overview",
    "description": "Discover if Shiseido Synchro Skin Foundation is hypoallergenic. Learn about symptoms, relief tips, and explore hypoallergenic alternatives.",
    "link": "/beauty-product-allergy/is-shiseido-synchro-skin-self-refreshing-foundation-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Yves Saint Laurent Rouge Volupté Shine hypoallergenic: Symptoms & Overview",
    "description": "Discover if Yves Saint Laurent Rouge Volupté Shine is hypoallergenic. Learn symptoms, relief tips, and explore hypoallergenic lipstick alternatives.",
    "link": "/beauty-product-allergy/is-yves-saint-laurent-rouge-volupte-shine-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Lancôme Teint Idole Ultra Wear Foundation hypoallergenic: Symptoms & Overview",
    "description": "Discover if Lancôme Teint Idole Ultra Wear Foundation is hypoallergenic. Learn symptoms, relief tips, and find alternative hypoallergenic foundations.",
    "link": "/beauty-product-allergy/is-lancome-teint-idole-ultra-wear-foundation-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is KVD Beauty Everlasting Liquid Lipstick hypoallergenic: Symptoms & Overview",
    "description": "Discover if KVD Beauty Everlasting Liquid Lipstick is hypoallergenic. Learn symptoms, relief tips, and explore alternative hypoallergenic lipsticks.",
    "link": "/beauty-product-allergy/is-kvd-beauty-everlasting-liquid-lipstick-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Dior Diorskin Forever Undercover Foundation hypoallergenic: Symptoms & Overview",
    "description": "Discover if Dior Diorskin Forever Undercover Foundation is hypoallergenic. Learn symptoms, emergency tips, relief, and find alternative hypoallergenic options.",
    "link": "/beauty-product-allergy/is-dior-diorskin-forever-undercover-foundation-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is BareMinerals Original Loose Powder Foundation hypoallergenic: Symptoms & Overview",
    "description": "Discover if BareMinerals Original Loose Powder Foundation is hypoallergenic. Learn about symptoms, emergencies, relievers, and alternative hypoallergenic options.",
    "link": "/beauty-product-allergy/is-bareminerals-original-loose-powder-foundation-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Bobbi Brown Vitamin Enriched Face Base hypoallergenic: Symptoms & Overview",
    "description": "Find out if Bobbi Brown Face Base is hypoallergenic. Learn symptoms, relief tips, and explore alternative primers for sensitive skin.",
    "link": "/beauty-product-allergy/is-bobbi-brown-vitamin-enriched-face-base-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Nexxus Keraphix Damage Healing Shampoo hypoallergenic: Symptoms & Overview",
    "description": "Discover if Nexxus Keraphix Shampoo is hypoallergenic, recognize allergy symptoms, get tips on relief, and explore alternative hypoallergenic shampoos.",
    "link": "/beauty-product-allergy/is-nexxus-keraphix-damage-healing-shampoo-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Tarte Big Ego Mascara hypoallergenic: Symptoms & Overview",
    "description": "Discover if Tarte Big Ego Mascara is hypoallergenic. Learn symptoms, relief, and alternative mascaras for sensitive eyes in this comprehensive guide.",
    "link": "/beauty-product-allergy/is-tarte-big-ego-mascara-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Garnier Fructis Pure Clean Shampoo hypoallergenic: Symptoms & Overview",
    "description": "Is Garnier Fructis Pure Clean Shampoo hypoallergenic? Learn about allergy symptoms, relief tips, and discover alternative hypoallergenic shampoos.",
    "link": "/beauty-product-allergy/is-garnier-fructis-pure-clean-shampoo-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Charlotte Tilbury Magic Away Liquid Concealer hypoallergenic: Symptoms & Overview",
    "description": "Discover if Charlotte Tilbury Magic Away Liquid Concealer is hypoallergenic. Learn symptoms, relief tips, and find alternative hypoallergenic concealers.",
    "link": "/beauty-product-allergy/is-charlotte-tilbury-magic-away-liquid-concealer-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is OGX Renewing Argan Oil of Morocco Shampoo hypoallergenic: Symptoms & Overview",
    "description": "Explore if OGX Renewing Argan Oil of Morocco Shampoo is hypoallergenic, learn symptoms, relief tips, and find alternative hypoallergenic shampoos.",
    "link": "/beauty-product-allergy/is-ogx-renewing-argan-oil-of-morocco-shampoo-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Physicians Formula Butter Bronzer hypoallergenic: Symptoms & Overview",
    "description": "Discover if Physicians Formula Butter Bronzer is hypoallergenic. Learn about symptoms, relief tips, and alternative hypoallergenic bronzer options.",
    "link": "/beauty-product-allergy/is-physicians-formula-butter-bronzer-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Cetaphil Daily Facial Cleanser hypoallergenic: Symptoms & Overview",
    "description": "Discover if Cetaphil Daily Facial Cleanser is hypoallergenic. Learn symptoms, relief tips, when to seek help, and explore alternative gentle cleansers.",
    "link": "/beauty-product-allergy/is-cetaphil-daily-facial-cleanser-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Aveeno Scalp Soothing Fresh Greens Blend Shampoo hypoallergenic: Symptoms & Overview",
    "description": "Discover if Aveeno Scalp Soothing Fresh Greens Blend Shampoo is hypoallergenic. Learn about symptoms, relief tips, and alternative hypoallergenic shampoos.",
    "link": "/beauty-product-allergy/is-aveeno-scalp-soothing-fresh-greens-blend-shampoo-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is La Roche-Posay Toleriane Hydrating Gentle Cleanser hypoallergenic: Symptoms & Overview",
    "description": "Discover if La Roche-Posay Toleriane Cleanser is hypoallergenic. Learn symptoms, relief tips, emergency info, and explore alternative cleansers.",
    "link": "/beauty-product-allergy/is-la-roche-posay-toleriane-hydrating-gentle-cleanser-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Living Proof Perfect Hair Day (PhD) Dry Shampoo hypoallergenic: Symptoms & Overview",
    "description": "Discover if Living Proof PhD Dry Shampoo is hypoallergenic. Learn about symptoms, relief options, and alternative hypoallergenic dry shampoos.",
    "link": "/beauty-product-allergy/is-living-proof-perfect-hair-day-phd-dry-shampoo-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Benefit Cosmetics Hoola Bronzer hypoallergenic: Symptoms & Overview",
    "description": "Discover if Benefit Cosmetics Hoola Bronzer is hypoallergenic. Learn about symptoms, relief tips, and explore alternative hypoallergenic bronzers.",
    "link": "/beauty-product-allergy/is-benefit-cosmetics-hoola-bronzer-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Natasha Denona Bronze Eyeshadow Palette hypoallergenic: Symptoms & Overview",
    "description": "Discover if Natasha Denona Bronze Eyeshadow Palette is hypoallergenic. Learn symptoms, relief options, and explore safer alternatives.",
    "link": "/beauty-product-allergy/is-natasha-denona-bronze-eyeshadow-palette-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Farsali Unicorn Essence hypoallergenic: Symptoms & Overview",
    "description": "Discover if Farsali Unicorn Essence is hypoallergenic, understand symptoms, relief methods, and explore alternative hypoallergenic primers.",
    "link": "/beauty-product-allergy/is-farsali-unicorn-essence-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is John Frieda Frizz Ease Extra Strength Serum hypoallergenic: Symptoms & Overview",
    "description": "Explore if John Frieda Frizz Ease Serum is hypoallergenic, symptoms of reactions, emergency tips, and hypoallergenic alternatives.",
    "link": "/beauty-product-allergy/is-john-frieda-frizz-ease-extra-strength-serum-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is NYX Soft Matte Lip Cream hypoallergenic: Symptoms & Overview",
    "description": "Explore if NYX Soft Matte Lip Cream is hypoallergenic. Learn symptoms, relief tips, when it's a medical emergency, and discover hypoallergenic alternatives.",
    "link": "/beauty-product-allergy/is-nyx-soft-matte-lip-cream-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Not Your Mother's Beach Babe Texturizing Sea Salt Spray hypoallergenic: Symptoms & Overview",
    "description": "Discover if Not Your Mother's Beach Babe Texturizing Sea Salt Spray is hypoallergenic. Learn about symptoms, relief tips, and alternative hypoallergenic options.",
    "link": "/beauty-product-allergy/is-not-your-mother-s-beach-babe-texturizing-sea-salt-spray-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is DevaCurl SuperCream Coconut Curl Styler hypoallergenic: Symptoms & Overview",
    "description": "Discover if DevaCurl SuperCream is hypoallergenic. Learn about symptoms, relief options, and explore alternative hypoallergenic hair creams.",
    "link": "/beauty-product-allergy/is-devacurl-supercream-coconut-curl-styler-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is ColourPop Lippie Stix hypoallergenic: Symptoms & Overview",
    "description": "Discover if ColourPop Lippie Stix is hypoallergenic. Learn about allergy symptoms, relief methods, and explore alternative hypoallergenic lipsticks.",
    "link": "/beauty-product-allergy/is-colourpop-lippie-stix-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Lancôme Monsieur Big Mascara hypoallergenic: Symptoms & Overview",
    "description": "Discover if Lancôme Monsieur Big Mascara is hypoallergenic. Learn symptoms, relief, emergencies, and find alternative hypoallergenic mascaras.",
    "link": "/beauty-product-allergy/is-lancome-monsieur-big-mascara-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Glossier Boy Brow hypoallergenic: Symptoms & Overview",
    "description": "Discover if Glossier Boy Brow is hypoallergenic. Learn symptoms, relief tips, and explore alternative hypoallergenic eyebrow products.",
    "link": "/beauty-product-allergy/is-glossier-boy-brow-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Drunk Elephant C-Firma Fresh Vitamin C Day Serum hypoallergenic: Symptoms & Overview",
    "description": "Discover if Drunk Elephant C-Firma Serum is hypoallergenic, identify allergy symptoms, manage reactions & explore alternative serums in our comprehensive guide.",
    "link": "/beauty-product-allergy/is-drunk-elephant-c-firma-fresh-vitamin-c-day-serum-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Pureology Hydrate Shampoo hypoallergenic: Symptoms & Overview",
    "description": "Discover if Pureology Hydrate Shampoo is hypoallergenic. Learn about symptoms, relief tips, and find alternative hypoallergenic shampoos.",
    "link": "/beauty-product-allergy/is-pureology-hydrate-shampoo-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Suave Professionals Keratin Infusion Smoothing Shampoo hypoallergenic: Symptoms & Overview",
    "description": "Discover if Suave Keratin Shampoo is hypoallergenic. Learn symptoms, relief tips, and explore alternative hypoallergenic shampoos in this detailed guide.",
    "link": "/beauty-product-allergy/is-suave-professionals-keratin-infusion-smoothing-shampoo-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Moroccanoil Hydrating Shampoo hypoallergenic: Symptoms & Overview",
    "description": "Discover if Moroccanoil Hydrating Shampoo is hypoallergenic, symptoms to watch for, emergency tips, relief methods, and alternative hypoallergenic shampoos.",
    "link": "/beauty-product-allergy/is-moroccanoil-hydrating-shampoo-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Morphe High Impact Highlighter hypoallergenic: Symptoms & Overview",
    "description": "Discover if Morphe High Impact Highlighter is hypoallergenic. Learn symptoms, relief tips, and alternative hypoallergenic highlighters in our detailed guide.",
    "link": "/beauty-product-allergy/is-morphe-high-impact-highlighter-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Fenty Beauty Sun Stalk’r Bronzer hypoallergenic: Symptoms & Overview",
    "description": "Explore if Fenty Beauty Sun Stalk’r Bronzer is hypoallergenic. Learn about allergy symptoms, relief tips, and discover alternative hypoallergenic bronzers.",
    "link": "/beauty-product-allergy/is-fenty-beauty-sun-stalk-r-bronzer-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Clinique Even Better Foundation hypoallergenic: Symptoms & Overview",
    "description": "Discover if Clinique Even Better Foundation is hypoallergenic. Learn symptoms, relief tips, and explore alternative hypoallergenic foundation options.",
    "link": "/beauty-product-allergy/is-clinique-even-better-foundation-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Milani Conceal + Perfect 2-in-1 Foundation + Concealer hypoallergenic: Symptoms & Overview",
    "description": "Discover if Milani Conceal + Perfect is hypoallergenic. Learn symptoms, relief tips, when to seek help, and explore alternative hypoallergenic foundations.",
    "link": "/beauty-product-allergy/is-milani-conceal-perfect-2-in-1-foundation-concealer-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Rare Beauty Liquid Touch Weightless Foundation hypoallergenic: Symptoms & Overview",
    "description": "Discover if Rare Beauty Liquid Touch Foundation is hypoallergenic. Learn symptoms, relief tips, and explore alternative hypoallergenic foundations.",
    "link": "/beauty-product-allergy/is-rare-beauty-liquid-touch-weightless-foundation-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Living Proof Restore Repair Leave-In Conditioner hypoallergenic: Symptoms & Overview",
    "description": "Discover if Living Proof Restore Repair Leave-In Conditioner is hypoallergenic, symptoms of allergies, relief tips, and alternative conditioners.",
    "link": "/beauty-product-allergy/is-living-proof-restore-repair-leave-in-conditioner-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is L'Oréal Paris Elvive Total Repair 5 Damage-Erasing Balm hypoallergenic: Symptoms & Overview",
    "description": "Discover if L'Oréal Paris Elvive Total Repair 5 Balm is hypoallergenic, its symptoms, emergency tips, and hypoallergenic alternatives.",
    "link": "/beauty-product-allergy/is-l-oreal-paris-elvive-total-repair-5-damage-erasing-balm-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Makeup Forever Ultra HD Invisible Cover Foundation hypoallergenic: Symptoms & Overview",
    "description": "Discover if Makeup Forever Ultra HD Foundation is hypoallergenic. Learn symptoms, relief tips, when to seek help, and explore alternative options.",
    "link": "/beauty-product-allergy/is-makeup-forever-ultra-hd-invisible-cover-foundation-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is SkinCeuticals C E Ferulic Serum hypoallergenic: Symptoms & Overview",
    "description": "Discover if SkinCeuticals C E Ferulic Serum is hypoallergenic. Learn symptoms, relief tips, and explore alternative hypoallergenic serums.",
    "link": "/beauty-product-allergy/is-skinceuticals-c-e-ferulic-serum-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is CoverGirl LashBlast Volume Mascara hypoallergenic: Symptoms & Overview",
    "description": "Discover if CoverGirl LashBlast Volume Mascara is hypoallergenic. Learn symptoms, relief tips, and explore alternative hypoallergenic mascara options.",
    "link": "/beauty-product-allergy/is-covergirl-lashblast-volume-mascara-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Dove Nutritive Solutions Intensive Repair Shampoo hypoallergenic: Symptoms & Overview",
    "description": "Discover if Dove Nutritive Solutions Intensive Repair Shampoo is hypoallergenic, its symptoms, remedies, and explore alternative hypoallergenic shampoos.",
    "link": "/beauty-product-allergy/is-dove-nutritive-solutions-intensive-repair-shampoo-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is L'Oréal Paris Infallible Full Wear Concealer hypoallergenic: Symptoms & Overview",
    "description": "Discover if L'Oréal Infallible Concealer is hypoallergenic, learn about symptoms, relief tips, and explore alternative hypoallergenic concealers.",
    "link": "/beauty-product-allergy/is-l-oreal-paris-infallible-full-wear-concealer-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is L'Oréal Paris Elvive Extraordinary Oil Deep Nourishing Conditioner hypoallergenic: Symptoms & Overview",
    "description": "Discover if L'Oréal Paris Elvive Conditioner is hypoallergenic. Learn to identify symptoms, manage reactions, and find alternative hypoallergenic options.",
    "link": "/beauty-product-allergy/is-l-oreal-paris-elvive-extraordinary-oil-deep-nourishing-conditioner-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Revlon Super Lustrous Lipstick hypoallergenic: Symptoms & Overview",
    "description": "Discover if Revlon Super Lustrous Lipstick is hypoallergenic. Learn about symptoms, relief tips, medical emergencies, and hypoallergenic alternatives.",
    "link": "/beauty-product-allergy/is-revlon-super-lustrous-lipstick-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Benefit Gimme Brow+ Volumizing Gel hypoallergenic: Symptoms & Overview",
    "description": "Discover if Benefit Gimme Brow+ is hypoallergenic, allergy symptoms, relief tips, and explore alternative hypoallergenic eyebrow products.",
    "link": "/beauty-product-allergy/is-benefit-gimme-brow-volumizing-gel-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Joico Moisture Recovery Shampoo hypoallergenic: Symptoms & Overview",
    "description": "Discover if Joico Moisture Recovery Shampoo is hypoallergenic. Learn symptoms, relief tips, and explore alternative hypoallergenic shampoos for sensitive skin.",
    "link": "/beauty-product-allergy/is-joico-moisture-recovery-shampoo-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is The Ordinary Hyaluronic Acid 2% + B5 Serum hypoallergenic: Symptoms & Overview",
    "description": "Discover if The Ordinary Hyaluronic Acid 2% + B5 Serum is hypoallergenic. Learn symptoms, emergency relief, and explore alternative hypoallergenic serums.",
    "link": "/beauty-product-allergy/is-the-ordinary-hyaluronic-acid-2-b5-serum-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Maui Moisture Heal & Hydrate Shea Butter Shampoo hypoallergenic: Symptoms & Overview",
    "description": "Discover if Maui Moisture Shea Butter Shampoo is hypoallergenic. Learn to identify allergy symptoms, relief tips, and explore alternative hypoallergenic shampoos.",
    "link": "/beauty-product-allergy/is-maui-moisture-heal-hydrate-shea-butter-shampoo-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is L’Oréal True Match Super-Blendable Foundation hypoallergenic: Symptoms & Overview",
    "description": "Discover if L’Oréal True Match Foundation is hypoallergenic. Learn about symptoms, relief, and alternative foundations to protect sensitive skin.",
    "link": "/beauty-product-allergy/is-l-oreal-true-match-super-blendable-foundation-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Redken All Soft Shampoo hypoallergenic: Symptoms & Overview",
    "description": "Discover if Redken All Soft Shampoo is hypoallergenic. Learn symptoms, relief tips, and explore alternative shampoos for sensitive scalps.",
    "link": "/beauty-product-allergy/is-redken-all-soft-shampoo-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Urban Decay Eyeshadow Primer Potion hypoallergenic: Symptoms & Overview",
    "description": "Discover if Urban Decay Eyeshadow Primer Potion is hypoallergenic. Learn about symptoms, relief methods, and alternative hypoallergenic primers.",
    "link": "/beauty-product-allergy/is-urban-decay-eyeshadow-primer-potion-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Glamglow Supermud Clearing Treatment hypoallergenic: Symptoms & Overview",
    "description": "Explore if Glamglow Supermud Clearing Treatment is hypoallergenic. Discover symptoms, relief tips, and alternative hypoallergenic masks.",
    "link": "/beauty-product-allergy/is-glamglow-supermud-clearing-treatment-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Maui Moisture Curl Quench + Coconut Oil Shampoo hypoallergenic: Symptoms & Overview",
    "description": "Explore if Maui Moisture Curl Quench + Coconut Oil Shampoo is hypoallergenic. Learn about symptoms, relief tips, and alternative hypoallergenic shampoos.",
    "link": "/beauty-product-allergy/is-maui-moisture-curl-quench-coconut-oil-shampoo-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Mielle Organics Babassu Oil & Mint Deep Conditioner hypoallergenic: Symptoms & Overview",
    "description": "Discover if Mielle Organics Babassu Oil & Mint Deep Conditioner is hypoallergenic. Learn symptoms, relief tips, and explore hypoallergenic alternatives.",
    "link": "/beauty-product-allergy/is-mielle-organics-babassu-oil-mint-deep-conditioner-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is SheaMoisture Jamaican Black Castor Oil Strengthen & Restore Shampoo hypoallergenic: Symptoms & Overview",
    "description": "Discover if SheaMoisture Jamaican Black Castor Oil Shampoo is hypoallergenic. Learn symptoms, relief tips, and explore alternative hypoallergenic shampoos.",
    "link": "/beauty-product-allergy/is-sheamoisture-jamaican-black-castor-oil-strengthen-restore-shampoo-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Vaseline Petroleum Jelly hypoallergenic: Symptoms & Overview",
    "description": "Discover if Vaseline Petroleum Jelly is hypoallergenic, signs of allergy, relief tips, and alternative ointments for sensitive skin in our detailed guide.",
    "link": "/beauty-product-allergy/is-vaseline-petroleum-jelly-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Kristin Ess Weightless Shine Leave-In Conditioner hypoallergenic: Symptoms & Overview",
    "description": "Discover if Kristin Ess Weightless Shine Leave-In Conditioner is hypoallergenic. Learn symptoms, relief tips, and explore alternative options.",
    "link": "/beauty-product-allergy/is-kristin-ess-weightless-shine-leave-in-conditioner-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Moroccanoil Treatment hypoallergenic: Symptoms & Overview",
    "description": "Discover if Moroccanoil Treatment is hypoallergenic. Learn about symptoms, emergencies, relief tips, and explore alternative hypoallergenic hair treatments.",
    "link": "/beauty-product-allergy/is-moroccanoil-treatment-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is YSL Touche Éclat Radiant Touch hypoallergenic: Symptoms & Overview",
    "description": "Explore if YSL Touche Éclat is hypoallergenic. Learn symptoms, relief tips, and discover alternative hypoallergenic concealers.",
    "link": "/beauty-product-allergy/is-ysl-touche-eclat-radiant-touch-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is Pantene Gold Series Hydrating Butter-Creme hypoallergenic: Symptoms & Overview",
    "description": "Discover if Pantene Gold Series Hydrating Butter-Creme is hypoallergenic. Learn symptoms, relief tips, and explore alternative hypoallergenic hair creams.",
    "link": "/beauty-product-allergy/is-pantene-gold-series-hydrating-butter-creme-hypoallergenic-symptoms-overview"
  },
  {
    "title": "Is It's a 10 Miracle Leave-In Product hypoallergenic: Symptoms & Overview",
    "description": "Discover if It's a 10 Miracle Leave-In is hypoallergenic. Learn symptoms, emergency tips, and explore hypoallergenic alternatives.",
    "link": "/beauty-product-allergy/is-it-s-a-10-miracle-leave-in-product-hypoallergenic-symptoms-overview"
  }
];

function BeautyProductsAllergens() {
  return (
    <CommonBlogPage
      cardData={cardData}
      HeroComponent={
        <Hero
          heading="Ultimate Beauty Products Directory: Hypoallergenic Products, Symptoms, and Alternatives"
          subtitle="Curex is the easiest way to treat allergies at-home without allergy shots."
          ctaText="Take the Free Quiz"
          imageSrc=""
        />
      }
      FaqComponent={null}
    />
  );
}

export default BeautyProductsAllergens;
