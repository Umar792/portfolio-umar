import React from "react";
import Navebar from "./Components/Navebar/Navebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Navebar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
