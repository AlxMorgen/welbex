import React from "react";
import Adress from "../contacts/Adress";
import PhoneNumber from "../contacts/PhoneNumber";
import SocialLinks from "../social-links/SocialLinks";
import FooterTitle from "./FooterTitle";

const FooterContacts = () => {
  return (
    <div className="footer-contacts">
      <FooterTitle title="Контакты" />

      <PhoneNumber />
      <SocialLinks />
      <Adress adress="Москва, Путевой проезд 3с1, к 902" />
    </div>
  );
};

export default FooterContacts;
