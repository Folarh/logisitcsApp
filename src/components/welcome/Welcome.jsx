import React from "react";
import Man from "../../assets/man.png";
import "./Welcome.css";

const Welcome = () => {
  return (
    <main className="welcome">
      <div className="welcome_left">
        <div className="welcome_content">
          <h3>
            Choose <span>Fast</span>,<br /> <span>Flexible</span> and
            <span>Reliable</span>
          </h3>
          <p>
            Do you need a convenient
            <br /> and reliable way to book
            <br /> delivery services online?
          </p>
        </div>
      </div>
      <div className="welcome_right">
        <img src={Man} alt="man" />
      </div>
    </main>
  );
};

export default Welcome;
