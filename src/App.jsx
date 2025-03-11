import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Hero } from "./pages/Hero"
import { About } from "./pages/About"
import { Portfolio } from "./pages/Portfolio"
import { Services } from "./pages/Services"
import { Testimonials } from "./pages/Testimonials"
import { Model } from "./components/Model"
import Contact from "./pages/Contact"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Hero/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/portfolio' element={<Portfolio/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/testimonial' element={<Testimonials/>} />
          <Route path='/model/:id' element={<Model/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
