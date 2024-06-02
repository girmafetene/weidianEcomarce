import React, { useState } from "react";
import { NavList } from "../constant";
import { AiFillContainer } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../asset/logo.png";
const MegaMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [MenuList, setMenuList] = useState([]);
  const MenuClick = (name) => {
    const menu = NavList.filter((c) => c.name == name)[0]?.Children;
    setMenuList(menu);
    setIsOpen(!isOpen);
  };
  return (
    <header className="fixed flex justify-between bg-white shadow items-center w-full px-2 h-[55px] z-50">
      <div>
        <a
          className="text-xs font-semibold cursor-pointer px-28 flex items-start text-start justify-start"
          href="/Product"
          target="_blank"
        >
          <img
            src={logo}
            alt="logo"
            className="flex w-12 mr-2 text-start justify-start"
          />
        </a>
      </div>

      <div className="hidden md:block">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <a
              className="text-xs font-semibold cursor-pointer"
              href="/Product"
              target="_blank"
            >
              WeChat Store Manager Edition
            </a>
          </div>
          <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
            {NavList.map((item, index) => (
              <div
                onClick={() => MenuClick(item.name)}
                key={index}
                className="border-b-2 border-transparent cursor-pointer   text-black hover:border-blue-600 hover:text-blue-600 hover:font-medium   items-center  text-xs py-2 "
              >
                {item.name}
              </div>
            ))}
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-2">
            <a
              className="text-gray-500 hover:text-gray-700 border px-4   border-red-600 rounded"
              href="Login"
              target="_blank"
            >
              Log in
            </a>
            <a
              className="text-gray-500 hover:text-gray-700 border px-4 py-0  border-red-600 rounded"
              href="Register"
              target="_blank"
            >
              Register
            </a>
          </div>
        </div>
      </div>
      <div className="block md:hidden ">
        <AiOutlineMenu />
      </div>
      {isOpen && MenuList.length > 0 && (
        <div className="absolute top-16 inset-x-0 bg-white shadow-lg duration-700 translate-x-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-3  gap-6">
              {MenuList.map((item, i) => (
                <ul className="mt-4 " key={i}>
                  <a
                    href={item.name}
                    target="_blank"
                    className="text-gray-500 hover:text-blue-600"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <div className="flex space-x-2 items-center">
                      <div>
                        <AiFillContainer size={34} color={item.color} />
                      </div>
                      <div>
                        <p className="font-semibold"> {item.Title}</p>
                        <p className="text-sm font-extralight"> {item.name}</p>
                      </div>
                    </div>
                  </a>
                </ul>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default MegaMenu;
