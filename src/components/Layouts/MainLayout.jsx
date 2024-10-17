import React from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
