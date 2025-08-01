import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './common/footer'
import Navbar from './common/Navbar'
import Home from './pages/home'
import Immunotherapy101 from './pages/Immunotherapy101'
import ImmunoScience from './pages/ImmunoScience'
import AllergyDrops from './pages/AllergyDrops'

function App() {
  
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/immunotherapy101" element={<Immunotherapy101 />} />
          <Route path="/immuno-science" element={<ImmunoScience />} />
          <Route path="/allergy-drops" element={<AllergyDrops />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
