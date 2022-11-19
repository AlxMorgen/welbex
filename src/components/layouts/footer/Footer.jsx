import React from "react";
import About from "./About";
import FooterContacts from "./FooterContacts";
import FooterNav from "./FooterNav";

const Footer = () => {
  return (
    <footer>
      <div className="container container-footer">
        <About />
        <FooterNav />
        <FooterContacts />
      </div>
    </footer>
  );
};

export default Footer;
