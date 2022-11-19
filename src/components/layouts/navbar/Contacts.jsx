import PhoneNumber from "components/UI/contacts/PhoneNumber";
import SocialLinks from "components/UI/social-links/SocialLinks";
import React from "react";

const Contacts = () => {
  return (
    <div className="contacts">
      <PhoneNumber />
      <SocialLinks />
    </div>
  );
};

export default Contacts;
