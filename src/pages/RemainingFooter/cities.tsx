import CommonBlogPage from "./CommonBlogPage";
import Hero from "../../common/ui/Hero";
import FaqCommon from "./FaqCommon";
interface SmallCardProps {
  title: string;
  description: string;
  link: string;
}

const cardData: SmallCardProps[] = [
  {
    title: "Allergy Testing and Immunotherapy in Cowley, Wyoming",
    description: "Discover how allergy immunotherapy can help you in Cowley, Wyoming. Learn about common allergens in this region like pollen, dust mites, and pet dander, and how immunotherapy can alleviate your symptoms.",
    link: "/allergy-states/allergy-testing-immunotherapy-wyoming-cowley"
  },
  {
    title: "Allergy Testing and Immunotherapy in Shoshoni, Wyoming",
    description: "Living in Shoshoni, Wyoming exposes you to allergens like ragweed, mold, and dust mites. Get to know how allergy immunotherapy can reduce your sensitivity to these common triggers and improve your quality of life.",
    link: "/allergy-states/allergy-testing-immunotherapy-wyoming-shoshoni"
  },
  {
    title: "Allergy Testing and Immunotherapy in Diamondville, Wyoming",
    description: "Discover crucial information about allergy immunotherapy in Diamondville, Wyoming. Learn about common allergens in your city like pollen, dust mites, or pet dander that may trigger your allergies and how immunotherapy can help manage them.",
    link: "/allergy-states/allergy-testing-immunotherapy-wyoming-diamondville"
  },
  {
    title: "Allergy Testing and Immunotherapy in Dayton, Wyoming",
    description: "Discover prevalent allergens in Dayton, Wyoming like pollen, dust mites, and pet dander. Learn how allergy immunotherapy can help in reducing your immune system's sensitivity to these allergens.",
    link: "/allergy-states/allergy-testing-immunotherapy-wyoming-dayton"
  },
  {
    title: "Allergy Testing and Immunotherapy in Hanna, Wyoming",
    description: "Experience the benefits of allergy immunotherapy in Hanna, Wyoming! Take control as we help you combat common allergens like pollen, dust mites, and pet dander prevalent in the city.",
    link: "/allergy-states/allergy-testing-immunotherapy-wyoming-hanna"
  },
  {
    title: "Allergy Testing and Immunotherapy in Bar Nunn, Wyoming",
    description: "Explore allergy immunotherapy in Bar Nunn, Wyoming. Understand the local allergens, from mountain cedar to ragweed, that may trigger your symptoms. Learn how immunotherapy can help increase your tolerance and improve your quality of life.",
    link: "/allergy-states/allergy-testing-immunotherapy-wyoming-bar-nunn"
  },
  {
    title: "Allergy Testing and Immunotherapy in Cokeville, Wyoming",
    description: "Explore allergy immunotherapy in Cokeville, Wyoming. Learn about common allergens such as pollen, dust mites, mold, and pet dander in our city, and how immunotherapy can help you lead an allergy-free life.",
    link: "/allergy-states/allergy-testing-immunotherapy-wyoming-cokeville"
  },
  {
    title: "Allergy Testing and Immunotherapy in Big Piney, Wyoming",
    description: "Discover the prevalent allergens in Big Piney, Wyoming and how allergy immunotherapy can help combat them. Learn about local allergens like ragweed, grasses, and mold, and the effectiveness of immunotherapy.",
    link: "/allergy-states/allergy-testing-immunotherapy-wyoming-big-piney"
  },
  {
    title: "Allergy Testing and Immunotherapy in Ranchester, Wyoming",
    description: "Discover the prevalent allergens in Ranchester, Wyoming and how allergy immunotherapy can help you. From dust mites to ragweed, we cover local allergens and provide personalized treatment plans for allergy sufferers.",
    link: "/allergy-states/allergy-testing-immunotherapy-wyoming-ranchester"
  },
  {
    title: "Allergy Testing and Immunotherapy in Evansville, Wyoming",
    description: "Living in Evansville, Wyoming can expose you to various common allergens like pollen, dust mites, and mold spores. Allergy immunotherapy can help you build up resistance to these allergens, making your life much more comfortable.",
    link: "/allergy-states/allergy-testing-immunotherapy-wyoming-evansville"
  },
  {
    title: "Allergy Testing and Immunotherapy in Thayne, Wyoming",
    description: "In Thayne, Wyoming, allergens like pollen, dust mites, and mold spores are commonplace. Discover how allergy immunotherapy can help your body build resistance and manage symptoms more effectively.",
    link: "/allergy-states/allergy-testing-immunotherapy-wyoming-thayne"
  },
  {
    title: "Allergy Testing and Immunotherapy in Dubois, Wyoming",
    description: "Living in Dubois, Wyoming exposes you to various allergens such as pollen, dust mites, and mold. Understand these common triggers and discover how allergy immunotherapy can alleviate your symptoms for a more comfortable life.",
    link: "/allergy-states/allergy-testing-immunotherapy-wyoming-dubois"
  },
  {
    title: "Allergy Testing and Immunotherapy in Moorcroft, Wyoming",
    description: "In Moorcroft, Wyoming, allergy sufferers have to deal with allergens such as pollen, mold, and dust mites. Through allergy immunotherapy, these common local triggers can be addressed effectively, improving your quality of life.",
    link: "/allergy-states/allergy-testing-immunotherapy-wyoming-moorcroft"
  },
  {
    title: "Allergy Testing and Immunotherapy in Upton, Wyoming",
    description: "Experiencing allergy symptoms in Upton, Wyoming? It might be due to common allergens like pollen, dust, or pet dander. Learn how allergy immunotherapy can help you live a symptom-free life in Upton.",
    link: "/allergy-states/allergy-testing-immunotherapy-wyoming-upton"
  },
  {
    title: "Allergy Testing and Immunotherapy in Pine Bluffs, Wyoming",
    description: "Pine Bluffs, Wyoming, is home to a variety of common allergens. From ragweed to mold, these can make life miserable for allergy sufferers. Discover how allergy immunotherapy can help combat these allergens effectively.",
    link: "/allergy-states/allergy-testing-immunotherapy-wyoming-pine-bluffs"
  },
  {
    title: "Allergy Testing and Immunotherapy in Guernsey, Wyoming",
    description: "Living in Guernsey, Wyoming, allergens like pollen, dust, and mold are common, potentially triggering allergic reactions. Discover how allergy immunotherapy can provide relief, by training your body to become less sensitive to these prevalent allergens.",
    link: "/allergy-states/allergy-testing-immunotherapy-wyoming-guernsey"
  },
  {
    title: "Allergy Testing and Immunotherapy in Sundance, Wyoming",
    description: "Suffering from allergies in Sundance, Wyoming? It could be due to common allergens like ragweed, mold, or dust mites. Learn how allergy immunotherapy can help alleviate your symptoms and improve your quality of life.",
    link: "/allergy-states/allergy-testing-immunotherapy-wyoming-sundance"
  },
  {
    title: "Allergy Testing and Immunotherapy in Basin, Wyoming",
    description: "Discover common allergens in Basin, Wyoming that can trigger allergic reactions. Allergy Immunotherapy can offer long-term relief, addressing the root cause by exposing your body to these allergens in a controlled manner.",
    link: "/allergy-states/allergy-testing-immunotherapy-wyoming-basin"
  },
  {
    title: "Allergy Testing and Immunotherapy in Wright, Wyoming",
    description: "Living in Wright, Wyoming and struggling with allergies? Immunotherapy could help! Our city is rife with allergens like pollen, dust mites and mold. Learn how immunotherapy could reduce your sensitivity to these local triggers.",
    link: "/allergy-states/allergy-testing-immunotherapy-wyoming-wright"
  },
  {
    title: "Allergy Testing and Immunotherapy in Mountain View, Wyoming",
    description: "Living in Mountain View, Wyoming and suffering from allergies? Know that local allergens like ragweed, mold, and dust mites are common triggers. Immunotherapy can help build tolerance and reduce your allergic reactions over time.",
    link: "/allergy-states/allergy-testing-immunotherapy-wyoming-mountain-view"
  },
  {
    title: "Allergy Testing and Immunotherapy in Wheatland, Wyoming",
    description: "In Wheatland, Wyoming, allergens such as pollen, mold, and dust mites are common. Discover how allergy immunotherapy can provide long-term relief from your allergic reactions to these common culprits.",
    link: "/allergy-states/allergy-testing-immunotherapy-wyoming-wheatland"
  },
  {
    title: "Allergy Testing and Immunotherapy in Lusk, Wyoming",
    description: "In Lusk, Wyoming, common allergens such as mold, pollen, and pet dander can make life hard. Allergy immunotherapy can help your body build resilience to these irritants, providing relief and enhancing your overall quality of life.",
    link: "/allergy-states/allergy-testing-immunotherapy-wyoming-lusk"
  },
  {
    title: "Allergy Testing and Immunotherapy in Saratoga, Wyoming",
    description: "Experience relief from common allergens in Saratoga, Wyoming through allergy immunotherapy. Our approach targets specific triggers like pollen, dust mites, and mold to reduce your symptoms and improve your overall health.",
    link: "/allergy-states/allergy-testing-immunotherapy-wyoming-saratoga"
  },
  {
    title: "Allergy Testing and Immunotherapy in Greybull, Wyoming",
    description: "Experience relief from common allergens like sagebrush, ragweed, and mold found in Greybull, Wyoming through allergy immunotherapy. Learn how this treatment can reduce your sensitivity to these allergens.",
    link: "/allergy-states/allergy-testing-immunotherapy-wyoming-greybull"
  },
  {
    title: "Allergy Testing and Immunotherapy in Pinedale, Wyoming",
    description: "Experience relief from allergens in Pinedale, Wyoming, with allergy immunotherapy. Uncover common local allergens like sagebrush, dust mites, and animals. Stand strong against these triggers and improve your quality of life.",
    link: "/allergy-states/allergy-testing-immunotherapy-wyoming-pinedale"
  },
  {
    title: "Allergy Testing and Immunotherapy in Afton, Wyoming",
    description: "In Afton, Wyoming, allergens like pollen, dust mites, and mold spores are common. Allergy immunotherapy can help your body build resistance to these allergens, reducing allergic symptoms significantly.",
    link: "/allergy-states/allergy-testing-immunotherapy-wyoming-afton"
  },
  {
    title: "Allergy Testing and Immunotherapy in Lovell, Wyoming",
    description: "In Lovell, Wyoming, common allergens such as dust mites, grass and tree pollens are prevalent. Allergy immunotherapy can help manage your body's reaction to these allergens, enhancing your quality of life.",
    link: "/allergy-states/allergy-testing-immunotherapy-wyoming-lovell"
  },
  {
    title: "Allergy Testing and Immunotherapy in Lyman, Wyoming",
    description: "Living in Lyman, Wyoming and struggling with allergies? Common allergens like pollen, dust, and mold can be especially prevalent here. Allergy immunotherapy could be the key to effectively managing your symptoms.",
    link: "/allergy-states/allergy-testing-immunotherapy-wyoming-lyman"
  },
  {
    title: "Allergy Testing and Immunotherapy in Glenrock, Wyoming",
    description: "Living in Glenrock, Wyoming and struggling with allergies? Local allergens such as ragweed, grass and tree pollen could be the cause. Allergy immunotherapy can help you build resistance and alleviate your symptoms. Explore more on this page.",
    link: "/allergy-states/allergy-testing-immunotherapy-wyoming-glenrock"
  },
  {
    title: "Allergy Testing and Immunotherapy in Kemmerer, Wyoming",
    description: "Discover the common allergens in Kemmerer, Wyoming, and take control of your allergies. Get to know your local allergens like ragweed, mold and dust mites. Request an allergy test to understand your triggers. Talk to a doctor about allergy immunotherapy and see if it is right for you.",
    link: "/allergy-states/allergy-testing-immunotherapy-wyoming-kemmerer"
  }
];

function Cities() {
  return (
    <CommonBlogPage
      cardData={cardData}
      HeroComponent={
        <Hero
          heading="Allergy Immunotherapy across the US"
          subtitle="Curex is the easiest way to treat allergies at-home without allergy shots."
          imageSrc=""
          ctaText="Take free Quiz"
        />
      }
      FaqComponent={<FaqCommon />}
    />
  );
}
export default Cities;
