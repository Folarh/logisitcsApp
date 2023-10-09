import React from "react";
import Bulb from "../../assets/bulb.png";
import Clock from "../../assets/clock.png";
import Truck from "../../assets/truck.png";

import "./NavBelow.css";

const NavBelow = () => {
  return (
    <div className="nav_below">
      <div className="first_anime">
        <img src={Truck} alt="truck" className="icon" />
        <span>Send and Pickup any item with us</span>
      </div>
      <div className="first_anime">
        <img src={Clock} alt="clock" className="icon" />
        <span>Track your items and be in touch</span>
      </div>
      <div className="first_anime">
        <img src={Bulb} alt="bulb" className="icon" />
        <span>Get your items right on time</span>
      </div>
    </div>
  );
};

export default NavBelow;
