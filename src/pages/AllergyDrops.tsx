import DoDropsReallyWork from "../components/AllergyDrops/DoDropsReallyWork";
import DropCost from "../components/AllergyDrops/DropCost";
import DropsForCats from "../components/AllergyDrops/DropsForCats";
import DropsForFoodAllergies from "../components/AllergyDrops/DropsForFoodAllergies";
import DropsVsShots from "../components/AllergyDrops/DropsVsShots";
import EndPromo from "../common/EndPromo";
import FAQ from "../components/AllergyDrops/Faq";
import FDAApproved from "../components/AllergyDrops/FDAApproved";
import AllergyDropsHero from "../components/AllergyDrops/Hero";
import Hero2 from "../components/AllergyDrops/Hero2";
import HowLongToWork from "../components/AllergyDrops/HowLongToWork";
import HowOften from "../components/AllergyDrops/HowOften";
import InsurancePartners from "../components/AllergyDrops/InsurancePartners";
import SideEffects from "../components/AllergyDrops/SideEffects";
import TableOfContents from "../components/AllergyDrops/TableOfContent";
import WhereToGetDrops from "../components/AllergyDrops/WhereToGetDrops";

export default function AllergyDrops()  {
  return (
    <div>
      <AllergyDropsHero />
      <Hero2/>
      <TableOfContents />
      <HowOften />
      <DropsVsShots />
      <DropCost/>
      <InsurancePartners/>
      <FDAApproved/>
      <SideEffects/>
      <DoDropsReallyWork/>
      <HowLongToWork/>
      <WhereToGetDrops/>
      <DropsForCats/>
      <DropsForFoodAllergies/>
      <FAQ/>
      <EndPromo/>
    </div>
  )
};