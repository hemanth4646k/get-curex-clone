import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './common/footer'
import Navbar from './common/Navbar'
import Home from './pages/home'
import Immunotherapy101 from './pages/Immunotherapy101'

function App() {
  
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/immunotherapy101" element={<Immunotherapy101 />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
