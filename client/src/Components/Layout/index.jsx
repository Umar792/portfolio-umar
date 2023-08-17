import React from "react";
import Navebar from "./Navebar/Navebar";
import { ScrollToTop } from "react-router-scroll-to-top";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <ScrollToTop />
      <ToastContainer position="top-right" theme="dark" />
      <Navebar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
