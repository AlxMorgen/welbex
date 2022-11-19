import React from "react";
import NavLogo from "./NavLogo";
import { NavLinks } from "./NavLinks";
import Contacts from "./Contacts";

export const Navbar = () => {
  return (
    <div className="container container-header">
      <div className="navbar">
        <NavLogo />
        <NavLinks />
        <Contacts />
      </div>
    </div>
  );
};
