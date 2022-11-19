import React from "react";
import AboutLinks from "./AboutLinks";

const FooterNav = () => {
  return (
    <div className="footer-nav">
      <div className="footer-nav-title">
        <h4 className="footer-title">МЕНЮ</h4>
        <div className="footer-nav-items">
          <AboutLinks
            arrLinks={[
              "Расчёт стоимости",
              "Услуги",
              "Виджеты",
              "Интеграции",
              "Наши клиенты",
            ]}
          />
          <AboutLinks
            arrLinks={[
              "Кейсы",
              "Благодарственные письма",
              "Сертификаты",
              "Блог на Youtube",
              "Вопрос / Ответ",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default FooterNav;
