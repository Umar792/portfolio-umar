import React from "react";
import Navebar from "./Components/Layout/Navebar/Navebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Components/Layout/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navebar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
