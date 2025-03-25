import React from "react";
import "../Styles/MenuHeader.css";

const MenuHeader = () => {
  return (
    <div className="menu-header">
      <div className="overlay">
        <div className="content">
          <h1 className="menu-title">MENU</h1>
          <p className="menu-description">
            Please take a look at our menu featuring food and drinks. If you'd like to place an order, click the "Order Online" button located below the menu.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuHeader;
