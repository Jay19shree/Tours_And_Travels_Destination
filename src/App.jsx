import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'

import Nav from './Components/Nav/Nav'
import Index from './Components/Page/Index'
import About from './Components/Page/About'
import Footer from './Components/Footer/Footer'
import Tours from './Components/Page/Tours'
import ToursDetails from './Components/Page/ToursDetails'
import Destination from './Components/Page/Destination'
import DestinationDetails from './Components/Page/DestinationDetails'
import Blog from './Components/Page/Blog'
import Contact from './Components/Page/Contact'

function App() {
  const location = useLocation();

  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/tour" element={<Tours />} />
        <Route path="/tour-details/:id" element={<ToursDetails />} />

        {/* ✅ FIXED missing slash */}
        <Route path="/destination" element={<Destination />} />
        <Route path="/destinationDetails" element={<DestinationDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* ✅ Hide footer on homepage only */}
      {location.pathname !== '/' && <Footer />}
    </>
  )
}

export default App
