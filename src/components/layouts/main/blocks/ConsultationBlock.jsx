import React from "react";
import ConsultationDescription from "./ConsultationDescription";
import ConsultationTitle from "./ConsultationTitle";

const ConsultationBlock = (title, first, second) => {
  return (
    <div className="consultation-item-block">
      <ConsultationTitle title={title.title} />
      <ConsultationDescription first={title.first} second={title.second} />
    </div>
  );
};

export default ConsultationBlock;
