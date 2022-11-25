import React from "react";
import logo from "../../assets/images/logo.png";
import { FaUserCircle } from "react-icons/fa";
import "./header.css";
const HeaderTop = () => {
  return (
    <div className="container">
      <div className="header_top smargin">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="user_btn">
          <FaUserCircle />
          <span>Sign in</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
