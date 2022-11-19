import React from "react";

const NavLink = (linkText) => {
  return (
    <a className="nav-links_item" href="/">
      {linkText.linkText}
    </a>
  );
};

export default NavLink;
