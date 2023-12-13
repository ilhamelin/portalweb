import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Biblioteca Menu
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

// icons React
import {
  RiNotificationLine,
  RiArrowDownSLine,
  RiSettings3Line,
  RiLogoutCircleRLine,
  RiUser3Line,
  RiFileTextLine,
} from "react-icons/ri";

import { VscBell, VscCalendar } from "react-icons/vsc";
import { useAuth } from "../context/AuthContext";

//icons

const Header = () => {
  const [profileImage, setProfileImage] = useState("");

  useEffect(() => {
    const savedFormData = localStorage.getItem("formData");
    if (savedFormData) {
      const parsedFormData = JSON.parse(savedFormData);
      setProfileImage(parsedFormData.profileImage);
    }
  }, []);

  const { user } = useAuth();
  console.log(user);

  return (
    <header className=" h-[7vh] md:h-[10vh] border-b border-secondary-100 p-8 flex items-center justify-end font-sans text-inter">
      <nav className="flex items-center ">
        <Menu
          menuButton={
            <MenuButton className="relative  hover:bg-secondary-100 p-2  rounded-lg transition-colors">
              <RiNotificationLine />

              <span className="absolute -top-0.5 right-0 bg-primary py-0.5 px-[5px] box-content text-black rounded-full text-[8px] font-bold">
                3
              </span>
            </MenuButton>
          }
          align="end"
          transition
          menuClassName="bg-secondary-100 p-4"
        >
          <h1 className="text-gray-100 text-center font-medium">
            Notificaciones
            <hr className="my-4 border-gray-500" />
          </h1>

          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/"
              className="text-gray-300 flex flex-1 items-center gap-4 py-2 px-4 hover:bg-secondary-900  transition-colors rounded-lg"
            >
              <VscBell className="p-2 bg-blue-100 text-blue-700 box-content rounded-full" />
              <div className="text-sm felx flex-col">
                <div className="felx items-center justify-between gap-4">
                  <span>Carlos Reyes</span>{" "}
                  <span className="text-[8px]">06/11/2023</span>
                </div>
                <p className="text-gray-500 text-xs">
                  Lorem ipsum dolor sit...
                </p>
              </div>
            </Link>
          </MenuItem>
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/"
              className="text-gray-300 flex flex-1 items-center gap-4 py-2 px-4 hover:bg-secondary-900  transition-colors rounded-lg"
            >
              <RiFileTextLine className="p-2 bg-yellow-100 text-yellow-700 box-content rounded-full" />
              <div className="text-sm felx flex-col">
                <div className="felx items-center justify-between gap-4">
                  <span>Jorge Gonzales</span>{" "}
                  <span className="text-[8px]">06/11/2023</span>
                </div>
                <p className="text-gray-500 text-xs">
                  Lorem ipsum dolor sit...
                </p>
              </div>
            </Link>
          </MenuItem>
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/"
              className="text-gray-300 flex flex-1 items-center gap-4 py-2 px-4 hover:bg-secondary-900  transition-colors rounded-lg"
            >
              <VscCalendar className="p-2 bg-orange-100 text-orange-700 box-content rounded-full" />
              <div className="text-sm felx flex-col">
                <div className="felx items-center justify-between gap-4">
                  <span>Roberto mandela</span>{" "}
                  <span className="text-[8px]">06/11/2023</span>
                </div>
                <p className="text-gray-500 text-xs">
                  Lorem ipsum dolor sit...
                </p>
              </div>
            </Link>
          </MenuItem>
          <hr className="my-6 border-gray-500" />
          <MenuItem className="p-0 hover:bg-transparent text-center flex justify-center ">
            <Link
              to="/"
              className="text-gray-400 text-sm hover:text-primary transition-colors "
            >
              Todas las Notificaciones
            </Link>
          </MenuItem>
        </Menu>
        <Menu
          menuButton={
            <MenuButton className="flex items-center gap-x-2 hover:bg-secondary-100 py-2 px-4 rounded-lg transition-colors">
              <img
                src={profileImage}
                className="w-6 h-6 object-cover rounded-full"
              />
              <span>{user.username}</span>
              <RiArrowDownSLine />
            </MenuButton>
          }
          transition
          menuClassName="bg-secondary-100 p-3"
        >
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/Overview"
              className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
            >
              <img
                src={profileImage}
                className="w-8 h-8 object-cover rounded-full"
              />
              <div className="flex flex-col gap-1 text-sm">
                <span className="text-sm">{user.username}</span>
                <span className="text-xs text-gray-500">{user.email}</span>
              </div>
            </Link>
          </MenuItem>
          <hr className="my-4 border-gray-500" />
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/configuracion"
              className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
            >
              <RiSettings3Line className="text-primary" /> Configuracion
            </Link>
          </MenuItem>
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/Login"
              className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
            >
              <RiLogoutCircleRLine className="text-primary" /> Cerrar Sesion
            </Link>
          </MenuItem>
        </Menu>
      </nav>
    </header>
  );
};

export default Header;
