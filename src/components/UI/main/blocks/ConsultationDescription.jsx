import React from "react";

const ConsultationDescription = (first, second) => {
  console.log(first.first);
  console.log(first.second);
  return (
    <div className="consultation-item-block-description">
      <p>
        {first.first} <br /> {first.second}
      </p>
    </div>
  );
};

export default ConsultationDescription;
