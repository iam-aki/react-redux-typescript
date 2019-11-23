import * as React from "react";
import { NavLink } from "react-router-dom";

const Header: React.SFC = () => {
  return (
    <header className="header">
      <h1 className="header-title">Book Store</h1>
      <nav>
        <NavLink to="/home" className="header-link">
          Home
        </NavLink>
        <NavLink to="/contactus" className="headerlink">
          Contact Us
        </NavLink>
      </nav>
    </header>
  );
};
export default Header;
