import InsurancePartnersCommon from '../common/InsurancePartners';
import CompTable from '../components/food/CompTable';
import FoodFaqs from '../components/food/FoodFaqs';
import FoodHero from '../components/food/FoodHero';
import FoodHero2 from '../components/food/FoodHero2';
import TypeOfFoodAllergies from '../components/food/TypeOfFoodAllergies';
import Brands from '../components/home/Brands';
import PricingComponent1 from '../components/home/PricingComponent1';
import Testimonials1 from '../components/home/Testimonials1';

const Food = () => {
    return (
        <div>
            <FoodHero />
            <Brands />
            <FoodHero2/>
            <TypeOfFoodAllergies/>
            <Testimonials1/>
            <PricingComponent1/>
            <CompTable/>
            <InsurancePartnersCommon/>
            <FoodFaqs/>
        </div>
    )
}

export default Food;
