import NavLink from "components/UI/links/NavLink";
import React from "react";

export const NavLinks = () => {
  const navLinks = ["Услуги", "Виджеты", "Интеграции", "Кейсы", "Сертификаты"];
  const navigation = navLinks.map((elem) => (
    <NavLink key={elem} linkText={elem} />
  ));

  return <div className="nav-links">{navigation}</div>;
};
