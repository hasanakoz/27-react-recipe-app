import React from "react";
import StyledNav, { NavbarRight } from "./NavbarStyle";

const Navbar = () => {
  return (
    <StyledNav>
      <div>
        <h4>RECIPE</h4>
      </div>

      <NavbarRight>
        <li>ABOUT</li>
        <li>GITHUB</li>
        <li>LOGOUT</li>
      </NavbarRight>
    </StyledNav>
  );
};

export default Navbar;
