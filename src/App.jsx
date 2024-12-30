import { Link, Route, Routes, Navigate } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css"

const App = () => {
  return(
    <div>
      <nav>
        <div className="logo">
        FOODIE
        </div>
        <ul>
          <li><Link to={"/"}><a href="">Home</a></Link></li>
          <li><Link to={"/about"}><a href="">About</a></Link></li>
          <li><Link to={"/login"}><a href="">Testimonials</a></Link></li>
          <li><Link to={"/Contact"}><a href="">Contact</a></Link></li>
        </ul>
      </nav>
      <div className="pages">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App;