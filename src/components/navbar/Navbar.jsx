import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/FastX.png";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => {
    setToggle((toggle) => !toggle);
  };
  return (
    <nav>
      <div className="logo">
        <img src={Logo} alt="logo_text" className="logo_icon" />
      </div>
      <div className="nav_links">
        <ul className="nav_lists" id={toggle ? "toggle-on" : ""}>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="nav_buttons">
        <button className="login_btn">Login</button>
        <button className="signup-btn">Signup</button>
      </div>
      <div className="nav-harm" onClick={toggleHandler}>
        {toggle ? (
          <AiOutlineClose className="icon" />
        ) : (
          <CiMenuBurger className="icon" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
