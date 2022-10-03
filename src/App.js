import "./App.css";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Plants from "./pages/Plants";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <nav>Our NavBar</nav>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Plants" element={<Plants />} />
      </Routes>

      <footer>Our Footer</footer>
    </div>
  );
}

export default App;
