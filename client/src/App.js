import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Conatact from "./Pages/Conatact";
import Blog from "./Pages/Blog";
import SingleBlog from "./Components/BlogComponent/Blogs/SingleBlog";
import PageNotFound from "./Components/Layout/PagenotFound/PageNotFound";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Conatact />} />
        <Route path="/blogs" element={<Blog />} />
        {/* <Route path="/toturials" element={<Toturial />} /> */}
        {/* ------------------------ language route  */}
        {/* <Route path="/toturial/:name" element={<Index />} /> */}
        <Route path="/blogs/:id" element={<SingleBlog />} />
        {/* ------------------------ not found route  */}
        <Route path="/*" element={<PageNotFound />} />
        {/* ---------------------------------------------------  */}
        <Route path="/signup" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
