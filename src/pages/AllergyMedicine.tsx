import EndPromo from "../common/EndPromo";
import FaqAM from "../components/AllergyMedicine/FaqAM";
import ForWhom from "../components/AllergyMedicine/ForWhom";
import HeroAllergyMedicine from "../components/AllergyMedicine/Hero";
import QA1 from "../components/AllergyMedicine/QA1";
import QA2 from "../components/AllergyMedicine/QA2";
import RidAllergies from "../components/AllergyMedicine/RidAllergies";
import TableOfContentsAM from "../components/AllergyMedicine/TableOfContentsAM";

function AllergyMedicinePage() {
  return (
    <div>
      <HeroAllergyMedicine />
      <ForWhom/>
      <TableOfContentsAM/>
      <QA1/>
      <RidAllergies/>
      <QA2/>
      <FaqAM/>
      <EndPromo/>
    </div>
  );
}
export default AllergyMedicinePage;
