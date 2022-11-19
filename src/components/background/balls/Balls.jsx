import React from "react";
import LightPurple from "./LightPurple";
import LightRed from "./LightRed";
import PurpleBall from "./PurpleBall";
import RedBall from "./RedBall";
import RedBallSmall from "./RedBallSmall";

const Balls = () => {
  return (
    <div className="ball">
      <LightRed />
      <LightPurple />
      <PurpleBall />
      <RedBall />
      <RedBallSmall />
    </div>
  );
};

export default Balls;
