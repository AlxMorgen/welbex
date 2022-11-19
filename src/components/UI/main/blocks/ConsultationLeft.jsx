import React from "react";
import ConsultationBlock from "./ConsultationBlock";

const ConsultationLeft = () => {
  return (
    <div className="consultation-item">
      <ConsultationBlock title="Виджеты" first="30 готовых" second="решений" />
      <ConsultationBlock
        title="Skype Аудит"
        first="отдела продаж"
        second="и CRM системы"
      />
    </div>
  );
};

export default ConsultationLeft;
