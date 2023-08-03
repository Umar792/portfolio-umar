import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './Component/Pages/Home/Home';
import About from './Component/Pages/About/About';

const App = () => {




  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' eaxct element={<Home />} />
        <Route path='/about' eaxct element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App