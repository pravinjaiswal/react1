import React from "react";
import { NavLink } from "react-router-dom";
const Menu = () => {
  return (
    <>
      <div className="menu_style">
        <NavLink to="/" className="tp">
          About Us
        </NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
        <NavLink to="/contact/name">Service</NavLink>
        <br />
        <br />
        <a href="/">About Us</a>
        <a href="/contact">Contact</a>
      </div>
    </>
  );
};
export default Menu;
