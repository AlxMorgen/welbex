import React from "react";

const ConsultationDescription = (first, second) => {
  return (
    <div className="consultation-item-block-description">
      <p>
        {first.first} <br /> {first.second}
      </p>
    </div>
  );
};

export default ConsultationDescription;
