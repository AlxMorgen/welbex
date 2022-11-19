import FooterLink from "components/UI/links/FooterLink";
import React from "react";

const AboutLinks = (arrLinks) => {
  const navigation = arrLinks.arrLinks.map((elem) => (
    <FooterLink key={elem} linkText={elem} />
  ));
  return <div className="footer-nav-block">{navigation}</div>;
};

export default AboutLinks;
