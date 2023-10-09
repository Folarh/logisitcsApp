import React from "react";
import Lady from "../../assets/lady.png";
import "./GetItems.css";

const GetItems = () => {
  return (
    <main className="get-items">
      <div className="get-items_left">
        <img src={Lady} alt="man" />
      </div>
      <div className="get-items_right">
        <div className="get-item_content">
          <h3>
            Get your items,
            <br /> <span>Fast</span> and
            <span>Safe</span>
          </h3>
          <p>
            Be rest assured that your package are in safe hands and would surely
            <br />
            get to you on time.
          </p>
        </div>
      </div>
    </main>
  );
};

export default GetItems;
