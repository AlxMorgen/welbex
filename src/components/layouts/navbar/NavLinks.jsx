import React from "react";
import NavLink from "../links/NavLink";

export const NavLinks = () => {
  const navLinks = ["Услуги", "Виджеты", "Интеграции", "Кейсы", "Сертификаты"];
  const navigation = navLinks.map((elem) => (
    <NavLink key={elem} linkText={elem} />
  ));

  return <div className="nav-links">{navigation}</div>;
};
