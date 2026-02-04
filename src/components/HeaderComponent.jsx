import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  const [btn,setbtn]=useState("login")
  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        
        </ul>
      </div>
      <button className="login-btn" onClick={()=>{
        btn==='login'?setbtn("logout"):setbtn("login")
      }}>{btn}</button>
    </div>
  );
};
export default HeaderComponent;
