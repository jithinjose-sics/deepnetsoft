import React from "react";
import Footer from "../Components/Footer.jsx";
import MenuHeader from "./MenuHeader.jsx";
import MenuContents from "./MenuContents.jsx";

const Menu = () => {
  return <div className="menuContainer flex-fill">
    <MenuHeader/>
    <MenuContents/>
    <Footer/>
  </div>;
};

export default Menu;
