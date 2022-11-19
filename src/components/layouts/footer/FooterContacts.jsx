import Adress from "components/UI/contacts/Adress";
import PhoneNumber from "components/UI/contacts/PhoneNumber";
import SocialLinks from "components/UI/social-links/SocialLinks";
import React from "react";

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
