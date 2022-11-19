import React from "react";
import ConsultationBlock from "./ConsultationBlock";

const ConsultationRight = () => {
  return (
    <div className="consultation-item">
      <ConsultationBlock
        title="Dashboard"
        first="с показателями"
        second="вашего бизнеса"
      />
      <ConsultationBlock title="35 дней" first="использования" second="CRM" />
    </div>
  );
};

export default ConsultationRight;
