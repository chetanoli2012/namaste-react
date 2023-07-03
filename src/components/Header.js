import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [loginState, setLoginState] = useState(false);

  const handleLoginState = () => {
    setLoginState((prevState) => !prevState);
  };

  useEffect(() => {
    console.log("UseEffect called");
  }, []);

  const loginText = loginState ? "Log in" : "Log out";
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
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
