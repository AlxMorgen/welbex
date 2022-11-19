import React from "react";
import GetButton from "../../../UI/buttons/GetButton";
import ConsultationLeft from "./ConsultationLeft";
import ConsultationRight from "./ConsultationRight";

const Consultation = () => {
  return (
    <div className="consultation">
      <div className="consultation-title">
        <h2>
          Вместе с{" "}
          <span className="color-title">
            БЕСПЛАТНОЙ <br />
            КОНСУЛЬТАЦИЕЙ
          </span>{" "}
          мы дарим:
        </h2>{" "}
      </div>
      <div className="consultation-items">
        <ConsultationLeft />
        <ConsultationRight />
      </div>
      <GetButton />
    </div>
  );
};

export default Consultation;
