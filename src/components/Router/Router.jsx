import { HashRouter, Routes, Route } from "react-router-dom"
import { Home } from "../Pages/Home/Home"
import { Contact } from "../Pages/Contact/Contact"
import { Apidata } from "../Pages/Apidata/Apidata";


const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api-data" element={<Apidata />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </HashRouter>
  )
}

export { Router }