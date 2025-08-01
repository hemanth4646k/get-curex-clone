
import Hero from '../components/home/Hero'
import Brands from '../components/home/Brands'
import HomeBenefits from '../components/home/HomeBenefits'
import HomeFeature from '../components/home/HomeFeature'
import HomeAllergyType from '../components/home/HomeAllergyType'
import PricingComponent1 from '../components/home/PricingComponent1'
import InsuranceProviders from '../components/home/InsuranceProviders'
import HomeComparisonTable from '../components/home/HomeComparisonTable'
import Testimonials1 from '../components/home/Testimonials1'
import HowItWorks from '../components/home/HowItWorks'
import FaqContainer from '../components/home/FaqContainer'
import WeightLossPricingComponent from '../components/home/WeightLossPricingComponent'

const Home = () => {
    return (
        <div>
            <Hero />
            <Brands />
            <HomeBenefits />
            <HomeFeature />
            <HomeAllergyType />
            <PricingComponent1 />
            <InsuranceProviders/>
            <HomeComparisonTable/>
            <Testimonials1 />
            <HowItWorks />
            <FaqContainer />




            <WeightLossPricingComponent/>
        </div>
    )
}

export default Home;
