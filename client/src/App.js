import React from "react";
import Navebar from "./Components/Layout/Navebar/Navebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Components/Layout/Footer/Footer";
import About from "./Pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <Navebar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
