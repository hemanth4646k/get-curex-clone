import Hero from "../../common/ui/Hero";
import CommonBlogPage from "./CommonBlogPage";

const cardData: { title: string; description: string; link: string }[] = [
  {
    "title": "Itchy Lower Eyelids",
    "description": "Explore causes, allergy relief, and home remedies to soothe itchy lower eyelids. Learn safe self-care and prevention tips today.",
    "link": "/symptom/itchy-lower-eyelids"
  },
  {
    "title": "Itchy Calves",
    "description": "Find tips for relieving and preventing itchy calves—learn causes, home remedies, and when to seek medical help.",
    "link": "/symptom/itchy-calves"
  },
  {
    "title": "Redness Around Tear Ducts",
    "description": "Unlock expert insights on redness around tear ducts—discover causes, symptoms, home remedies, and prevention tips for effective relief.",
    "link": "/symptom/redness-around-tear-ducts"
  },
  {
    "title": "Rash on Lower Back",
    "description": "Uncover causes, symptoms, prevention tips and home remedies for lower back rash. Get essential advice for quick relief and care.",
    "link": "/symptom/rash-on-lower-back"
  },
  {
    "title": "Swollen Upper Eyelids",
    "description": "Relieve swollen upper eyelids with expert at-home tips. Learn about symptoms, causes, and prevention for lasting relief.",
    "link": "/symptom/swollen-upper-eyelids"
  },
  {
    "title": "Rash on Calves",
    "description": "Explore causes, symptoms, and home remedies for calf rashes while learning when to seek urgent care and prevent allergy triggers.",
    "link": "/symptom/rash-on-calves"
  },
  {
    "title": "Swollen Under Eyes",
    "description": "Explore causes, symptoms, and home remedies for swollen under eyes. Learn prevention tips and when to seek help.",
    "link": "/symptom/swollen-under-eyes"
  },
  {
    "title": "Itchy Soles",
    "description": "Discover causes, symptoms, and home remedies for itchy soles while learning when to seek urgent foot care and allergy advice.",
    "link": "/symptom/itchy-soles-a19d8"
  },
  {
    "title": "Redness on Collarbone Area",
    "description": "Discover causes, symptoms, and home remedies for collarbone redness. Get allergy tips and learn when to seek emergency care.",
    "link": "/symptom/redness-on-collarbone-area"
  },
  {
    "title": "Redness on Knuckles",
    "description": "Explore causes, symptoms, and home remedies for redness on knuckles while learning tips to prevent flare-ups and manage allergies.",
    "link": "/symptom/redness-on-knuckles"
  },
  {
    "title": "Rash on Forearms",
    "description": "Discover causes, symptoms, home remedies, and when to seek help for rash on forearms. Expert tips for relief and prevention.",
    "link": "/symptom/rash-on-forearms"
  },
  {
    "title": "Rash on Fingertips",
    "description": "Get expert tips on identifying, treating, and preventing rash on fingertips. Discover causes, remedies, and when to seek help.",
    "link": "/symptom/rash-on-fingertips"
  },
  {
    "title": "Swollen Calves",
    "description": "Learn causes, symptoms, home remedies and prevention tips for swollen calves. Get expert guidance to manage discomfort quickly.",
    "link": "/symptom/swollen-calves"
  },
  {
    "title": "Rash on Back of Neck",
    "description": "Explore causes, symptoms, home remedies & prevention tips for rash on back of neck. Get relief and know when to seek help.",
    "link": "/symptom/rash-on-back-of-neck"
  },
  {
    "title": "Redness Under Eyes",
    "description": "Explore causes, symptoms, and home remedies for redness under eyes. Find prevention tips and guidance on when to seek help.",
    "link": "/symptom/redness-under-eyes"
  },
  {
    "title": "Swollen Tear Ducts",
    "description": "Explore swollen tear ducts: learn symptoms, causes, home relief tips, prevention strategies and when to seek help for lasting comfort.",
    "link": "/symptom/swollen-tear-ducts"
  },
  {
    "title": "Itchy Back of Neck",
    "description": "Discover effective home remedies, symptom tips, allergy insights and prevention techniques for managing itchy back of neck discomfort.",
    "link": "/symptom/itchy-back-of-neck"
  },
  {
    "title": "Rash on Shins",
    "description": "Discover expert insights on rash on shins symptoms, causes, home remedies, and prevention tips for lasting relief.",
    "link": "/symptom/rash-on-shins"
  },
  {
    "title": "Swollen Shins",
    "description": "Discover symptoms, causes, relief tips, and prevention strategies for swollen shins to manage pain and recognize emergencies quickly.",
    "link": "/symptom/swollen-shins"
  },
  {
    "title": "Swollen Fingertips",
    "description": "Explore symptoms, causes, and home remedies for swollen fingertips, including allergy triggers, treatments, and when to seek emergency care.",
    "link": "/symptom/swollen-fingertips"
  },
  {
    "title": "Rash on Upper Eyelids",
    "description": "Find effective home remedies & prevention tips for rash on upper eyelids. Learn about symptoms, causes & when to seek medical help.",
    "link": "/symptom/rash-on-upper-eyelids"
  },
  {
    "title": "Swollen Soles of Feet",
    "description": "Find expert tips for alleviating swollen soles of feet. Understand causes, symptoms, home remedies & when to seek urgent care.",
    "link": "/symptom/swollen-soles-of-feet"
  },
  {
    "title": "Swollen Underarms",
    "description": "Discover causes, symptoms, home remedies, and prevention tips for swollen underarms. Learn when to seek urgent care.",
    "link": "/symptom/swollen-underarms"
  },
  {
    "title": "Itchy Upper Eyelids",
    "description": "Discover causes, symptoms, home remedies, and allergy tips to relieve itchy upper eyelids and prevent flare-ups efficiently.",
    "link": "/symptom/itchy-upper-eyelids"
  },
  {
    "title": "Rash Between Toes",
    "description": "Discover causes, symptoms, remedies and prevention tips for rash between toes to find quick relief and care.",
    "link": "/symptom/rash-between-toes"
  },
  {
    "title": "Itchy Collarbone Area",
    "description": "Explore causes, symptoms, and home remedies for an itchy collarbone area. Get allergy tips, prevention, and treatment advice.",
    "link": "/symptom/itchy-collarbone-area"
  },
  {
    "title": "Swollen Forearms",
    "description": "Explore causes, symptoms, and home treatments for swollen forearms. Discover prevention tips and learn when to seek medical help.",
    "link": "/symptom/swollen-forearms"
  },
  {
    "title": "Swollen Lower Back",
    "description": "Explore causes, symptoms & home remedies for swollen lower back. Learn prevention tips, emergency signs & allergy-trigger insights.",
    "link": "/symptom/swollen-lower-back"
  },
  {
    "title": "Itchy Palms",
    "description": "Uncover causes, symptoms, and home remedies for itchy palms while learning allergy care and when to seek help.",
    "link": "/symptom/itchy-palms-07022"
  },
  {
    "title": "Itchy Fingertips",
    "description": "Learn causes, remedies, and prevention tips for itchy fingertips. Find advice on allergy relief and spotting emergencies.",
    "link": "/symptom/itchy-fingertips"
  },
  {
    "title": "Rash on Soles of Feet",
    "description": "Expert tips on causes, symptoms, and home remedies for rash on soles of feet. Fast relief and allergy management advice.",
    "link": "/symptom/rash-on-soles-of-feet"
  },
  {
    "title": "Swollen Upper Arms",
    "description": "Discover expert tips on causes, symptoms, and home remedies for swollen upper arms. Get advice on prevention and relief.",
    "link": "/symptom/swollen-upper-arms"
  },
  {
    "title": "Itchy Knuckles",
    "description": "Discover natural remedies, allergy insights, and expert tips to ease itchy knuckles. Your guide to fast relief and smart care.",
    "link": "/symptom/itchy-knuckles"
  },
  {
    "title": "Itchy Forearms",
    "description": "Learn causes, symptoms, and home remedies for itchy forearms. Get expert allergy and prevention tips for lasting relief.",
    "link": "/symptom/itchy-forearms"
  },
  {
    "title": "Itchy Shins",
    "description": "Discover itchy shins: learn symptoms, causes, home remedies & prevention tips. Know when to seek help now.",
    "link": "/symptom/itchy-shins"
  },
  {
    "title": "Swollen Knuckles",
    "description": "Explore swollen knuckles causes, symptoms, home relief tips, and prevention strategies. Find expert advice and allergy care insights.",
    "link": "/symptom/swollen-knuckles"
  },
  {
    "title": "Itchy Lower Back",
    "description": "Discover causes and relief for itchy lower back with tips on symptoms, home remedies, and allergy-related treatment for lasting comfort.",
    "link": "/symptom/itchy-lower-back"
  },
  {
    "title": "Itchy Underarms",
    "description": "Explore causes and natural remedies for itchy underarms. Find tips on allergy care, prevention, and knowing when to seek help.",
    "link": "/symptom/itchy-underarms"
  },
  {
    "title": "Itchy Under Eyes",
    "description": "Discover causes, symptoms, remedies, and prevention tips for itchy under eyes. Learn when to seek help and get lasting relief.",
    "link": "/symptom/itchy-under-eyes"
  },
  {
    "title": "Rash on Lower Eyelids",
    "description": "Explore causes, symptoms & home remedies for lower eyelid rash. Get expert tips on prevention, allergy care & emergency signs.",
    "link": "/symptom/rash-on-lower-eyelids"
  },
  {
    "title": "Swollen Collarbone Area",
    "description": "Learn causes, symptoms, home relief tips, and prevention for a swollen collarbone. Find guidance on emergency care and allergy triggers.",
    "link": "/symptom/swollen-collarbone-area"
  },
  {
    "title": "Rash on Underarms",
    "description": "Explore causes, symptoms, home remedies, & prevention tips for underarm rash. Learn quick relief and when to seek help.",
    "link": "/symptom/rash-on-underarms"
  },
  {
    "title": "Itchy Tear Ducts",
    "description": "Discover causes, symptoms, and home remedies for itchy tear ducts. Get expert tips on relief, prevention, and urgent care.",
    "link": "/symptom/itchy-tear-ducts"
  },
  {
    "title": "Swollen Back of Neck",
    "description": "Discover what causes a swollen back of neck and learn home relief tips, allergy treatments, and when to seek urgent care.",
    "link": "/symptom/swollen-back-of-neck"
  },
  {
    "title": "Itchy Temples",
    "description": "Discover itchy temples: causes, symptoms, and home remedies. Get allergy insights, prevention tips, and know when to seek help.",
    "link": "/symptom/itchy-temples"
  },
  {
    "title": "Painful Swallowing",
    "description": "Explore causes, symptoms, and relief tips for painful swallowing. Find home remedies, prevention advice, and when to seek care.",
    "link": "/symptom/painful-swallowing"
  },
  {
    "title": "Persistent Itchy Nose",
    "description": "Combat persistent itchy nose with relief tips, symptom insights, home remedies and allergy treatment advice. Prevent discomfort now!",
    "link": "/symptom/persistent-itchy-nose"
  },
  {
    "title": "Redness Under Eyebrows",
    "description": "Explore causes and care tips for redness under eyebrows, from home remedies to recognizing urgent symptoms.",
    "link": "/symptom/redness-under-eyebrows"
  },
  {
    "title": "Swollen Forehead",
    "description": "Discover causes, symptoms, and effective home remedies for swollen forehead. Prevent, treat allergies, and know when to seek help.",
    "link": "/symptom/swollen-forehead"
  },
  {
    "title": "Tongue Blisters",
    "description": "Explore tongue blister causes, symptoms, relief tips, and prevention advice for a healthier, happier mouth.",
    "link": "/symptom/tongue-blisters"
  },
  {
    "title": "Sore Spots Inside the Mouth",
    "description": "Discover symptoms, causes, and home remedies for sore mouth spots. Learn prevention tips and when to seek medical help.",
    "link": "/symptom/sore-spots-inside-the-mouth"
  },
  {
    "title": "Itchy Upper Arms",
    "description": "Uncover causes, symptoms, home treatments, and prevention tips for itchy upper arms. Learn when to seek care.",
    "link": "/symptom/itchy-upper-arms"
  },
  {
    "title": "Redness on Temples",
    "description": "Discover causes, treatments, and prevention for temple redness to ease discomfort and protect your skin.",
    "link": "/symptom/redness-on-temples"
  },
  {
    "title": "Red, Itchy Earlobes",
    "description": "Find effective tips for treating red, itchy earlobes: learn about triggers, home remedies, and when to seek urgent care.",
    "link": "/symptom/red-itchy-earlobes"
  },
  {
    "title": "Swollen Soft Palate",
    "description": "Explore causes, symptoms, and at-home relief tips for a swollen soft palate. Get expert advice for throat health.",
    "link": "/symptom/swollen-soft-palate"
  },
  {
    "title": "Itchy Earlobes",
    "description": "Uncover causes, symptoms, and home remedies for itchy earlobes. Get expert advice to ease discomfort and prevent flare-ups.",
    "link": "/symptom/itchy-earlobes"
  },
  {
    "title": "Itchy Cheeks",
    "description": "Explore causes, symptoms, and home remedies for itchy cheeks. Get expert tips for prevention and when to seek urgent care.",
    "link": "/symptom/itchy-cheeks"
  },
  {
    "title": "Rash on Forehead",
    "description": "Find causes, symptoms, home remedies, and allergy tips to manage a rash on your forehead and know when to seek help.",
    "link": "/symptom/rash-on-forehead"
  },
  {
    "title": "Earache Triggered by Allergies",
    "description": "Earache from allergies? Discover symptoms, home remedies, prevention tips, and emergency signs for fast relief and expert treatment guidance.",
    "link": "/symptom/earache-triggered-by-allergies"
  },
  {
    "title": "Swollen Eyebrows",
    "description": "Uncover causes, symptoms and home remedies for swollen eyebrows. Learn prevention tips and know when to seek medical help.",
    "link": "/symptom/swollen-eyebrows"
  },
  {
    "title": "Redness on Cheeks",
    "description": "Discover causes, symptoms, and home remedies for cheek redness with expert tips on allergy relief and prevention for lasting comfort.",
    "link": "/symptom/redness-on-cheeks"
  },
  {
    "title": "Itchy Throat",
    "description": "Soothe your itchy throat fast with expert advice on symptoms, causes, home remedies, and allergy care. Find lasting relief today.",
    "link": "/symptom/itchy-throat-526c2"
  },
  {
    "title": "Swollen Cheeks",
    "description": "Expert tips on swollen cheeks: learn its symptoms, causes, home remedies, and warning signs for timely care.",
    "link": "/symptom/swollen-cheeks"
  },
  {
    "title": "Itchy Forehead",
    "description": "Explore itchy forehead insights including causes, symptoms, home remedies, allergy relief and prevention tips for healthier skin.",
    "link": "/symptom/itchy-forehead"
  },
  {
    "title": "Itchy Chin",
    "description": "Find out causes, symptoms, and effective home remedies for itchy chin. Learn allergy triggers and prevention tips to ease discomfort.",
    "link": "/symptom/itchy-chin"
  },
  {
    "title": "Swollen Chin",
    "description": "Comprehensive guide on swollen chin: causes, symptoms, home remedies, prevention tips and recognizing emergencies.",
    "link": "/symptom/swollen-chin"
  },
  {
    "title": "Swollen Uvula",
    "description": "Discover causes, symptoms and home remedies for swollen uvula, with expert tips on allergy triggers and urgent care recognition.",
    "link": "/symptom/swollen-uvula-15297"
  },
  {
    "title": "Itchy Lower Lip",
    "description": "Uncover causes, symptoms & effective home remedies for itchy lower lip. Learn allergy relief tips and when to seek urgent care.",
    "link": "/symptom/itchy-lower-lip"
  },
  {
    "title": "Burning Sensation on the Tongue",
    "description": "Uncover causes, symptoms, and home remedies for burning tongue. Find prevention tips and learn when to seek emergency care.",
    "link": "/symptom/burning-sensation-on-the-tongue"
  },
  {
    "title": "Itchy Upper Lip",
    "description": "Discover causes, symptoms, prevention tips, and home remedies for itchy upper lip, plus allergy insights for improved relief and care.",
    "link": "/symptom/itchy-upper-lip"
  },
  {
    "title": "Rash on Chin",
    "description": "Discover causes, symptoms, and effective home remedies for chin rash. Find expert tips for relief, prevention, and allergy care.",
    "link": "/symptom/rash-on-chin"
  },
  {
    "title": "Swollen Hard Palate",
    "description": "Find expert advice on swollen hard palate: uncover causes, recognize symptoms, try home remedies, and know when to seek help.",
    "link": "/symptom/swollen-hard-palate"
  },
  {
    "title": "Redness on Jawline",
    "description": "Discover causes and treatments for jawline redness. Expert advice on symptoms, prevention, home remedies, and when to seek help.",
    "link": "/symptom/redness-on-jawline"
  },
  {
    "title": "Redness on Upper Arms",
    "description": "Discover tips to soothe upper arm redness. Learn about causes, home treatments, and when medical care is needed.",
    "link": "/symptom/redness-on-upper-arms"
  },
  {
    "title": "Redness Along Hairline",
    "description": "Discover the causes, symptoms, and simple home remedies for hairline redness, plus tips for allergy relief and emergency care.",
    "link": "/symptom/redness-along-hairline"
  },
  {
    "title": "Itchy Gums",
    "description": "Find relief from itchy gums. Discover causes, symptoms, home remedies, and prevention tips for quick, effective comfort.",
    "link": "/symptom/itchy-gums"
  },
  {
    "title": "Itchy Uvula",
    "description": "Discover causes, symptoms and home remedies for itchy uvula. Learn prevention tips and when to seek urgent care.",
    "link": "/symptom/itchy-uvula"
  },
  {
    "title": "Itchy Jawline",
    "description": "Uncover itchy jawline causes, symptoms, and home remedies. Learn prevention tips and know when to seek emergency care now.",
    "link": "/symptom/itchy-jawline"
  },
  {
    "title": "Redness Inside the Mouth",
    "description": "Discover causes, symptoms, and home tips for relieving mouth redness. Learn prevention strategies and when to seek urgent care.",
    "link": "/symptom/redness-inside-the-mouth"
  },
  {
    "title": "Itchy Eyebrows",
    "description": "Discover home remedies for itchy eyebrows. Learn about causes, symptoms, prevention tips, and when to seek help.",
    "link": "/symptom/itchy-eyebrows"
  },
  {
    "title": "Swollen Gums",
    "description": "Explore causes, symptoms, home remedies and prevention tips for swollen gums. Get expert advice for relief and when to seek help.",
    "link": "/symptom/swollen-gums"
  },
  {
    "title": "Itchy Hairline",
    "description": "Explore itchy hairline causes, symptoms and home remedies. Get prevention tips and know when professional care is needed.",
    "link": "/symptom/itchy-hairline"
  },
  {
    "title": "Mood Swings",
    "description": "Navigate mood swings with expert insights on symptoms, causes, home relief and emergency signs. Take control today.",
    "link": "/symptom/mood-swings"
  },
  {
    "title": "Heartburn",
    "description": "Discover effective heartburn relief tips, causes, and prevention techniques. Learn when to seek help and manage allergy triggers.",
    "link": "/symptom/heartburn"
  },
  {
    "title": "Itchy Nostrils",
    "description": "Discover causes, symptoms and home remedies for itchy nostrils. Get vital allergy relief and prevention tips to ease irritation.",
    "link": "/symptom/itchy-nostrils"
  },
  {
    "title": "Weakness",
    "description": "Explore weakness with expert insights on symptoms, home remedies, prevention tips and emergency signs for better health.",
    "link": "/symptom/weakness"
  },
  {
    "title": "Restless Legs",
    "description": "Discover effective home remedies, prevention tips & treatment guides for Restless Legs, including allergy-related relief.",
    "link": "/symptom/restless-legs"
  },
  {
    "title": "Nightmares",
    "description": "Explore nightmare causes, symptoms, and prevention tips. Get home remedies and advice for a peaceful, restorative sleep.",
    "link": "/symptom/nightmares"
  },
  {
    "title": "Seizures",
    "description": "Learn about seizure signs, causes, home relief tips, prevention methods and emergency care options, plus info on allergy triggers.",
    "link": "/symptom/seizures"
  },
  {
    "title": "Pelvic Pain",
    "description": "Discover pelvic pain symptoms, causes, and at-home relief tips plus when to seek urgent care.",
    "link": "/symptom/pelvic-pain"
  },
  {
    "title": "Ringing in Ears",
    "description": "Discover what triggers ringing in ears and learn about symptoms, home relief tips, allergy links, prevention strategies, and emergency signs.",
    "link": "/symptom/ringing-in-ears"
  },
  {
    "title": "Frequent Sneezing Fits",
    "description": "Discover causes and home remedies for frequent sneezing fits along with allergy treatments and essential tips on when to seek help.",
    "link": "/symptom/frequent-sneezing-fits"
  },
  {
    "title": "Slurred Speech",
    "description": "Learn how to spot, treat, and prevent slurred speech with symptoms, causes, home remedies and tips for emergencies now.",
    "link": "/symptom/slurred-speech"
  },
  {
    "title": "Constipation",
    "description": "Discover causes, symptoms, and effective home remedies to manage and prevent constipation for a healthier gut.",
    "link": "/symptom/constipation"
  },
  {
    "title": "Persistent Nasal Drip",
    "description": "Discover causes, symptoms and home remedies for persistent nasal drip, plus allergy insights for lasting relief.",
    "link": "/symptom/persistent-nasal-drip"
  },
  {
    "title": "Nasal Itching",
    "description": "Explore causes, symptoms, home relief, and emergency signs for nasal itching. Learn allergy treatments and prevention tips.",
    "link": "/symptom/nasal-itching"
  },
  {
    "title": "Rib Pain",
    "description": "Discover rib pain causes, symptoms and home remedies. Learn prevention tips and when to seek urgent care.",
    "link": "/symptom/rib-pain"
  },
  {
    "title": "Gas",
    "description": "Discover causes, symptoms, home remedies, and expert tips to safely relieve gas while learning when prompt medical attention is needed.",
    "link": "/symptom/gas"
  },
  {
    "title": "Sneezing Triggered by Sunlight",
    "description": "Discover causes, symptoms, and remedies for sneezing triggered by sunlight. Prevent flare-ups and know when to seek help.",
    "link": "/symptom/sneezing-triggered-by-sunlight"
  }
];

function AllergySymptoms() {
  return (
    <CommonBlogPage
      cardData={cardData}
      HeroComponent={
        <Hero
          heading="Navigating Allergy Symptoms: A Comprehensive Guide to Common Allergy Symptoms"
          subtitle="Curex is the easiest way to treat allergies at-home without allergy shots."
          ctaText="Get Notified"
          imageSrc=""
        />
      }
      FaqComponent={null}
    />
  );
}

export default AllergySymptoms;
