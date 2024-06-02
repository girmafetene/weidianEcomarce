import React from "react";
import { NavList } from "../constant";

const NavBar = () => {
  return (
    <nav className="flex fixed w-full justify-between bg-white shrink h-[55px] border-b items-center">
      <div></div>
      <div className="flex space-x-3 pr-3">
        {NavList.map((item, index) => (
          <div key={index} className="text-black  text-xs cursor-pointer">
            {item.name}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
