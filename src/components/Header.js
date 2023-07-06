import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginState, setLoginState] = useState(false);
  const { onlineStatus } = useOnlineStatus();

  const handleLoginState = () => {
    setLoginState((prevState) => !prevState);
  };

  const loginText = loginState ? "Log in" : "Log out";
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button className="login-btn" onClick={handleLoginState}>
            {loginText}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
