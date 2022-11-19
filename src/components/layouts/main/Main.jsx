import React from "react";
import Consultation from "./blocks/Consultation";
import MoreMoney from "./blocks/MoreMoney";

const Main = () => {
  return (
    <main>
      <div className="container container-main">
        <MoreMoney />
        <Consultation />
      </div>
    </main>
  );
};

export default Main;
