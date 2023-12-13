import React, { useState } from "react";
import { Link } from "react-router-dom";

//icons react
import {
  RiMenu3Fill,
  RiCloseLine,
  RiSpeakLine,
  RiCalendarTodoLine,
  RiLogoutBoxLine,
  RiEarthLine,
  RiArrowRightSLine,
} from "react-icons/ri";
import { MdSupportAgent, MdOutlineAnalytics } from "react-icons/md";
import { BsListTask } from "react-icons/bs";
import { useAuth } from "../context/AuthContext";

//icons

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);

  const [showSubmenu_2, setShowSubmenu_2] = useState(false);

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  const { logout } = useAuth();

  return (
    <>
      <div
        className={`flex-shrink-0  xl:h-[100vh] overflow-y-scroll fixed xl:static w-[90%] md:w-[40%] lg:w-[30%] xl:w-[300px] h-full top-0 bottom-0 bg-secondary-100 p-4 flex flex-col justify-between font-sans text-inter z-50 ${
          showMenu ? "left-0" : "-left-full"
        } transition-all `}
      >
        <div>
          <h1 className="text-center text-2xl font-bold text-white mb-10">
            Admin<span className="text-primary text-4xl">.</span>
          </h1>
          <ul>
            <li>
              <Link
                to="/"
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
              >
                <MdOutlineAnalytics className="text-primary" /> Analítica
              </Link>
            </li>
            <li>
              <button
                onClick={() => setShowSubmenu(!showSubmenu)}
                className="flex items-center justify-between gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
              >
                <span className="flex items-center gap-4">
                  <RiEarthLine className="text-primary" /> Ubicaciones
                </span>
                <RiArrowRightSLine
                  className={` mt-1 ${
                    showSubmenu && "rotate-90"
                  } transition-all `}
                />
              </button>
              <ul
                className={` ${
                  showSubmenu ? "h-auto" : "h-0"
                } overflow-y-hidden transition-all `}
              >
                <li>
                  <Link
                    to="/"
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors"
                  >
                    Zona 1
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors"
                  >
                    Zona 2
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors"
                  >
                    Zona 3
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors"
                  >
                    Zona 4
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900"
              >
                <MdSupportAgent className="text-primary" /> Soporte Tecnico
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900"
              >
                <RiCalendarTodoLine className="text-primary" /> Calendario
              </Link>
            </li>

            <li>
              <button
                onClick={() => setShowSubmenu_2(!showSubmenu_2)}
                className="flex items-center justify-between gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
              >
                <span className="flex items-center gap-4">
                  <BsListTask className="text-primary" /> Tareas
                </span>
                <RiArrowRightSLine
                  className={` mt-1 ${
                    showSubmenu_2 && "rotate-90"
                  } transition-all `}
                />
              </button>
              <ul
                className={` ${
                  showSubmenu_2 ? "h-auto" : "h-0"
                } overflow-y-hidden transition-all `}
              >
                <li>
                  <Link
                    to="/tasks"
                    onClick={() => handleItemClick(1)}
                    className={`py-2 px-4 border-l border-gray-500 ml-6 block relative ${
                      selectedItem === 1
                        ? "before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors"
                        : "before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors"
                    }`}
                  >
                    Ver Tareas
                  </Link>
                </li>
                <li>
                  <Link
                    to="/task/:id"
                    onClick={() => handleItemClick(2)}
                    className={`py-2 px-4 border-l border-gray-500 ml-6 block relative ${
                      selectedItem === 2
                        ? "before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors"
                        : "before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors"
                    }`}
                  >
                    Crear Tareas
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <nav>
          <Link
            to="/login"
            className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900"
            onClick={() => {
              logout();
            }}
          >
            <RiLogoutBoxLine className="text-primary" />
            Cerrar Sesion
          </Link>
        </nav>
      </div>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="fixed bottom-4 right-4 bg-primary text-black p-3 rounded-full z-50"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </>
  );
};

export default Sidebar;
