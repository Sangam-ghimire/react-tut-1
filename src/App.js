// import "./App.css";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Plants from "./pages/Plants";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/AboutUs" exact element={<AboutUs />} />
        <Route path="/ContactUs" exact element={<ContactUs />} />
        <Route path="/Plants" exact element={<Plants />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
