import React from "react";
import Navebar from "./Navebar/Navebar";
import { ScrollToTop } from "react-router-scroll-to-top";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <ScrollToTop />
      <Navebar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
