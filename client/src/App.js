import React from "react";
import Navebar from "./Components/Layout/Navebar/Navebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Components/Layout/Footer/Footer";
import About from "./Pages/About";
import Conatact from "./Pages/Conatact";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ScrollToTop } from 'react-router-scroll-to-top';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ToastContainer position="bottom-right" theme="dark" />
      <Navebar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Conatact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
