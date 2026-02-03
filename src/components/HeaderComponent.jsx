import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const HeaderComponent = () => {
  const [btn,setbtn]=useState("login")
  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Cart</li>
          <li>contact</li>
          <li>About us</li>
        </ul>
      </div>
      <button className="login-btn" onClick={()=>{
        btn==='login'?setbtn("logout"):setbtn("login")
      }}>{btn}</button>
    </div>
  );
};
export default HeaderComponent;
