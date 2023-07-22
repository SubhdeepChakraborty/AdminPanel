import React, { useEffect } from "react";
import "./home.scss";
import { Navbar, Footer, Menu } from "../../components";
import AnimatedRoutes from "./AnimatedRoutes";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="w-[100%] flex ">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
