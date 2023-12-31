import React, { useEffect } from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Conatact from "./Pages/Conatact";
import Blog from "./Pages/Blog";
import SingleBlog from "./Components/BlogComponent/Blogs/SingleBlog";
import PageNotFound from "./Components/Layout/PagenotFound/PageNotFound";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import DashBoard from "./Pages/DashBoard";
import { AuthanticateUser, GetAllBlogs } from "./Redux/Action/UserAction";

const App = () => {
  const isAuthanticated = useSelector((state) => state.user.isAuthanticated);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AuthanticateUser());
    dispatch(GetAllBlogs());
  }, []);

  const AdminRoute = () => {
    return !isAuthanticated ? <Navigate to="/" replace /> : <Outlet />;
  };

  return (
    <BrowserRouter>
      <ToastContainer position="top-right" theme="dark" />
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
        {/* ================= admin  */}
        <Route exact path="/admin/dashboard" element={<AdminRoute />}>
          <Route exact path="/admin/dashboard" element={<DashBoard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
