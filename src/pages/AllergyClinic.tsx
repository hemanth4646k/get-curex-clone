
import AllergyAssociates from "../components/AllergyClinic/AllergyAssociates";
import AllergyPartners from "../components/AllergyClinic/AllergyPartners";
import AllervieHealth from "../components/AllergyClinic/AllervieHealth";
import AsthmaClinic from "../components/AllergyClinic/AsthamaClinic";
import FamilyAllergy from "../components/AllergyClinic/FamilyAllergy";
import Faqs from "../components/AllergyClinic/Faqs";
import Hero from "../components/AllergyClinic/Hero";
import Hero2 from "../components/AllergyClinic/Hero2";
import NectarReviews from "../components/AllergyClinic/NectarReviews";
import PediatricAllergy from "../components/AllergyClinic/PediatricAllergy";
import Review from "../components/AllergyClinic/Review";
import TableOfContents from "../components/AllergyClinic/TableOfContents";

export default function AllergyClinic() {
    return(
        <div>
            <Hero/>
            <Hero2/>
            <TableOfContents/>
            <Review/>
            <NectarReviews/>
            <AllergyPartners/>
            <AllergyAssociates/>
            <FamilyAllergy/>
            <AllervieHealth/>
            <AsthmaClinic/>
            <PediatricAllergy/>
            <Faqs/>
        </div>
    )
}