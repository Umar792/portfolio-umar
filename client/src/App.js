import React, { useEffect } from 'react';
import alanBtn from "@alan-ai/alan-sdk-web";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './Component/Pages/Home/Home';
import About from './Component/Pages/About/About';

const App = () => {

  const AlanKey = "6df7b4783a35781fcb85f478c92531e62e956eca572e1d8b807a3e2338fdd0dc/stage"
  const mvetopage = () => {
    alert("hello")

  }
  useEffect(() => {
    // Set up Alan Button configuration
    alanBtn({
      key: AlanKey,
      onCommand: ({ command }) => {
        if (command === "welcome") {
          alanBtn().playCommand("welcome")
        }
        if (command === "pagemove") {
          alert("hello")
          // mvetopage()

        }
      }
    })



  }, [])



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