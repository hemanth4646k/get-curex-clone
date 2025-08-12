import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ScrollToTop from './common/ScrollToTop'
import Home from './pages/home'
import Immunotherapy101 from './pages/Immunotherapy101'
import ImmunoScience from './pages/ImmunoScience'
import AllergyDrops from './pages/AllergyDrops'
import AllergyShots from './components/AllergyShots/AllergyShots'
import AllergyClinic from './pages/AllergyClinic'
import AllergyMedicine from './pages/AllergyMedicine'
import AllergyTesting from './pages/AllergyTesting'
import AllergyImmunotherapyBlog from './pages/Blogs/AllergyImmunoTherapy'
import AllergyImmunoCosts from './pages/Blogs/AllergyImmunoCosts'
import Food from './pages/Food'
import CatAllergyBlog from './pages/Blogs/CatAllergies'
import SubLingualImmunoTherapy from './pages/SubLingualImmunoTherapy'
import WyndlyReview from './pages/WindlyReview'
import Reviews from './pages/Reviews'
import About from './pages/About'
import Blogs from './pages/Blogs/BlogMain'
import BlogsRouter from './pages/RemainingFooter/BlogsRouter'
import PlansPrevention from './pages/header/PlansPrevention'
import InsuranceFaqs from './pages/header/InsuranceFaqs'
import KidsAllergyCare from './pages/header/KidsAllergyCare'
import Pets from './pages/header/Pets'
import Safety from './pages/header/Safety'
import AllergyTest from './pages/header/AllergyTest'
import GettingStarted from './pages/header/GettingStarted'
import Pricing from './pages/header/Pricing'
import ImmunoSciKids from './pages/header/ImmunoSciKids'
import KidsReviews from './pages/header/KidsReviews'
import GettingStartedKids from './pages/header/GettingStartedKids'
import Partners from './pages/header/Partners'
import FoodAnaphylaxis from './pages/header/FoodAnaphylaxis'
import FoodAllergiesAndSensitivities from './pages/header/FoodAllergiesAndSensitivities'
import Quickie from './pages/header/Quickie'
import WeightLoss from './pages/header/WeightLoss'
import CustomLayout from './common/Layouts/CustomLayout'
import CommonLayout from './common/Layouts/CommonLayout'

function App() {
  
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<CommonLayout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/immunotherapy101" element={<Immunotherapy101 />} />
        <Route path="/immuno-science" element={<ImmunoScience />} />
        <Route path="/allergy-drops" element={<AllergyDrops />} />
        <Route path="/allergy-shots" element={<AllergyShots />} />
        <Route path="/allergy-clinic" element={<AllergyClinic />} />
        <Route path="/allergy-medicine" element={<AllergyMedicine />} />
        <Route path="/allergy-testing" element={<AllergyTesting />} />
        <Route path="/blog-posts/allergy-immunotherapy" element={<AllergyImmunotherapyBlog />} />
        <Route path="/blog-posts/allergy-immunotherapy-costs" element={<AllergyImmunoCosts />} />
        <Route path="/blog-posts/cat-allergies" element={<CatAllergyBlog />} />
        <Route path="/food" element={<Food />} />
        <Route path="/wyndly-reviews" element={<WyndlyReview />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/*" element={<BlogsRouter />} />
        <Route path="/sublingual-immunotherapy" element={<SubLingualImmunoTherapy />} />
        <Route path="/plans/prevention-plus" element={<PlansPrevention />} />
        <Route path="/insurance-faqs" element={<InsuranceFaqs />} />
        <Route path="/kids-allergy-care" element={<KidsAllergyCare />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/safety" element={<Safety />} />
        <Route path="/allergy-test" element={<AllergyTest />} />
        <Route path="/getting-started" element={<GettingStarted />} />
        <Route path="/getting-started-kids" element={<GettingStartedKids />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/immunotherapy-science-kids" element={<ImmunoSciKids />} />
        <Route path="/see-our-reviews-kids" element={<KidsReviews />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/food-anaphylaxis" element={<FoodAnaphylaxis />} />
        <Route path="/food-allergies-and-sensitivities" element={<FoodAllergiesAndSensitivities />} />
      </Route>
      <Route element={<CustomLayout />}>
        <Route path="/quickie" element={<Quickie />} />
        <Route path="/weight-loss" element={<WeightLoss />} />
      </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
