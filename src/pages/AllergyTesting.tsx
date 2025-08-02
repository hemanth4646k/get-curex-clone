import EndPromo from "../common/EndPromo";
import FaqAT from "../components/AllergyTesting/FaqAT";
import HeroAT from "../components/AllergyTesting/HeroAT";
import InsurancePartners from "../components/AllergyTesting/InsurancePartners";
import ReviewsAndSteps from "../components/AllergyTesting/ReviewAndSteps";
import Table1 from "../components/AllergyTesting/Table1";
import WhyCurex from "../components/AllergyTesting/WhyCurex";

function AllergyTesting() {
  return (
    <div>
      <HeroAT></HeroAT>
      <InsurancePartners/>
      <WhyCurex/>
      <Table1/>
      <ReviewsAndSteps/>
      <EndPromo/>
      <FaqAT/>
    </div>
  );
}

export default AllergyTesting;
