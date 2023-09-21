import React from "react";
import { useLocation, useNavigate } from "react-router";

const Header = () => {
  const location = useLocation();
  // console.log(location.pathname);
  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };
  const Navigate = useNavigate();
  return (
    <div className=" bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="Realtour logo"
            className=" h-5 cursor-pointer"
            onClick={()=> Navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-10 cursor-pointer">
            <li
              className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/") && "text-black border-b-red-500"
              }`}
              onClick={()=> Navigate("/")}
            >
              Home
            </li>
            <li
              className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/offers") && "text-black border-b-red-500"
              }`}
              onClick={()=> Navigate("/offers")}
            >
              Offers
            </li>
            <li
              className={`py-3 font-semibold text-sm text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/signin") && "text-black border-b-red-400"
              }`}
              onClick={()=> Navigate("/signin")}
            >
              Sign In
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};
export default Header;
