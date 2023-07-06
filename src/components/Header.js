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
    <div className="flex justify-between shadow-md">
      <Link to="/">
        <div>
          <img className="w-32" src={LOGO_URL} />
        </div>
      </Link>
      <div className="flex items-center">
        <ul className="flex p-2 m-2">
          <li className="mr-2 p-3 text-lg">
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="mx-2 p-3 text-lg hover:cursor-pointer hover:text-blue-600">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-2 p-3 text-lg hover:cursor-pointer hover:text-blue-600">
            <Link to="/about">About us</Link>
          </li>
          <li className="mx-2 p-3 text-lg hover:cursor-pointer hover:text-blue-600">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="mx-2 p-3 text-lg hover:cursor-pointer hover:text-blue-600">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="mx-2 p-3 text-lg hover:cursor-pointer hover:text-blue-600">
            Cart
          </li>
          <button className="mx-2 p-3 text-lg" onClick={handleLoginState}>
            {loginText}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
