import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './common/footer'
import Navbar from './common/Navbar'
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

function App() {
  
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
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
        <Route path="/sublingual-immunotherapy" element={<SubLingualImmunoTherapy />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
