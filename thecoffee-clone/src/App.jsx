import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import OurBean from './pages/OurBean'
import Locations from './pages/Locations'
import Franchise from './pages/Franchise'
import Contact from './pages/Contact'
import AboutUs from './pages/AboutUs'
import LegalMentions from './pages/LegalMentions'
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourbean" element={<OurBean />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/mentions-legales" element={<LegalMentions />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
