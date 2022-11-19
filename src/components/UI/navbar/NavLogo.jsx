import React from "react";
import { LogoWelbex } from "../../svg/LogoWelbex";

const NavLogo = () => {
  return (
    <div className="nav-logo">
      <div className="nav-logo_img">
        <LogoWelbex />
        <p className="nav-logo_disclaimer">
          крупный интегратор CRM <br></br> в Росcии и ещё 8 странах
        </p>
      </div>
    </div>
  );
};

export default NavLogo;
