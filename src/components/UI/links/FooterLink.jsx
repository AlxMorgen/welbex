import React from "react";

const FooterLink = (linkText) => {
  return (
    <a className="footer-link" href="/">
      {linkText.linkText}
    </a>
  );
};

export default FooterLink;
