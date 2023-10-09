import React from "react";
import "./Rider.css";
import RiderLOGO from "../../assets/rider.png";

const Rider = () => {
  return (
    <main className="rider">
      <div className="rider_left">
        <h2>
          Become a <span>Rider</span> today
        </h2>
        <button className="rider_left-signup">Signup</button>
      </div>
      <div className="rider_image">
        <img src={RiderLOGO} alt="rider_image" />
      </div>
    </main>
  );
};

export default Rider;
