import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { useAuth } from "../context/AuthContext";

// ICONS

import { GoVerified } from "react-icons/go";
import {
  RiAccountCircleFill,
  RiArrowUpLine,
  RiArrowDownLine,
} from "react-icons/ri";
import { HiLocationMarker, HiDotsHorizontal } from "react-icons/hi";
import { IoMdMail } from "react-icons/io";

function VistaPerfil() {
  // GUARDADO DE IMAGEN

  const [profileImage, setProfileImage] = useState(() => {
    const savedImage = localStorage.getItem("profileImage");
    return savedImage;
  });

  const [setHeaderProfileImage] = useState(profileImage);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setProfileImage(reader.result);
        setHeaderProfileImage(reader.result);
      };

      if (file.type.startsWith("image")) {
        reader.readAsDataURL(file);
      } else {
        setProfileImage(URL.createObjectURL(file));
        setHeaderProfileImage(URL.createObjectURL(file));
      }
    }
  };

  const handleSave = () => {
    const formData = {
      profileImage,
    };

    setProfileImage(profileImage);
    localStorage.setItem("formData", JSON.stringify(formData));
    alert("Datos guardados localmente");
  };

  useEffect(() => {
    const savedFormData = localStorage.getItem("formData");
    if (savedFormData) {
      const parsedFormData = JSON.parse(savedFormData);
      setProfileImage(parsedFormData.profileImage);
    }
  }, []);

  // SUBMENU

  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleButtonClick = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsSubMenuOpen(false);
  };

  // CAMBIO DE ESTADO EN UL > LINK

  // CONSULTA BACKEND BD

  const { user } = useAuth();
  console.log(user);

  return (
    <div>
      <div className="flex-1 basis-auto ">
        <div className=" flex flex-wrap sm:flex-nowrap ">
          <div className="mb-[13px] mr-[22.75px]">
            <div className="relative inline-block flex-shrink-0 w-100px lg:w-160px bg-fixed">
              <img
                src={profileImage}
                alt=""
                className="w-40 h-40 max-w-none object-contain rounded-lg"
                style={{ objectFit: "contain" }}
              />
              <div className="bg-green-500 absolute -translate-x-1/2 -translate-y-1/2 bottom-0 start-full mb-[19.5px] rounded-full border-4 border-secondary-100 h-5 w-5 "></div>
            </div>
          </div>
          <div className=" flex-grow font-normal text-start text-[13px]">
            <div className=" flex justify-between items-start flex-wrap mb-[6.5px] ">
              <div className=" flex flex-col">
                <div className="  flex items-center mb-[6.5px]">
                  <span className="text-gray-100 hover:text-blue-500 transition-colors mr-[3.25px] text-[19.5px] font-semibold no-underline decoration-solid decoration-auto">
                    {user.username}
                  </span>
                  <div>
                    <GoVerified className="relative text-blue-300 rounded-full inline-flex text-[22.75px] cursor-pointer" />
                  </div>
                </div>
                <div className="flex flex-wrap font-semibold text-sm mb-4">
                  <div className="flex items-center text-gray-500/50  hover:text-gray-300 transition-colors me-5 mb-2">
                    <RiAccountCircleFill className="text-base me-1  " />
                    Developer
                  </div>
                  <div className="flex items-center text-gray-500/50 hover:text-gray-300 transition-colors me-5 mb-2">
                    <HiLocationMarker className="text-base me-1 " />
                    Chile, Santiago
                  </div>
                  <div className="flex items-center text-gray-500/50 hover:text-gray-300 transition-colors mb-2">
                    <IoMdMail className="text-base me-1 " />
                    {user.email}
                  </div>
                </div>
              </div>
              <div className="flex my-[13px]">
                <a
                  href=""
                  className="bg-secondary-900 hover:bg-secondary-900/70 cursor-pointer rounded-md block mr-[6.5px] py-[8.15px] pl-[14px] pr-[14px] font-medium text-center"
                >
                  <span className="text-gray-500 text-[12.35px]">Seguir</span>
                </a>
                <a
                  href=""
                  className="bg-blue-500 hover:bg-blue-500/90 cursor-pointer rounded-md block mr-[9.75px] py-[8.15px] pl-[14px] pr-[14px] font-medium text-center align-middle"
                >
                  <span className="">Seguir</span>
                </a>

                <div className="">
                  <div className="relative inline-block">
                    <button
                      className="bg-secondary-900 cursor-pointer hover:text-Azul transition-colors rounded-md inline-flex items-center h-[37.75px] w-[34.8125px] justify-center py-0 pl-0 pr-0"
                      onClick={handleButtonClick}
                    >
                      <HiDotsHorizontal className="flex " />

                      {/* Flecha indicadora */}
                      {isSubMenuOpen && (
                        <div className="absolute top-[58px] left-1/2 transform -translate-x-1/2 -translate-y-1">
                          <div className="w-0 h-0 "></div>
                          <div className="w-6 h-6 bg-secondary-900 transform rotate-45 absolute -top-2 -left-3"></div>
                        </div>
                      )}
                    </button>

                    {isSubMenuOpen && (
                      <div className="absolute top-[45px] left-[-160px] mt-[5px] bg-secondary-900 w-[200px] h-auto rounded-lg ">
                        {/* Contenido del submenú */}
                        <div className="py-[5px]">
                          <div className="px-[9.75px] py-[1.95px] text-[12.35px] font-medium text-grisCustom2">
                            <div className="px-[9.75px] py-[6.5px]">
                              SubMenu
                            </div>
                          </div>
                          <div
                            className=" px-[9.75px] py-[1.95px] w-auto h-auto"
                            onClick={handleMenuItemClick}
                          >
                            <div className="px-[9.75px] py-[8.45px] hover:bg-Azul/10 text-grisCustom hover:text-Azul text-[13px] font-medium text-start rounded-md cursor-pointer">
                              Crear Reporte
                            </div>
                          </div>
                          <div
                            className="px-[9.75px] py-[1.95px] w-auto h-auto"
                            onClick={handleMenuItemClick}
                          >
                            <div className="px-[9.75px] py-[8.45px] hover:bg-Azul/10 text-grisCustom hover:text-Azul text-[13px] font-medium text-start rounded-md cursor-pointer">
                              Generar informe
                            </div>
                          </div>
                          <div
                            className="px-[9.75px] py-[1.95px] w-auto h-auto"
                            onClick={handleMenuItemClick}
                          >
                            <div className="px-[9.75px] py-[8.45px] hover:bg-Azul/10 text-grisCustom hover:text-Azul text-[13px] font-medium text-start rounded-md cursor-pointer">
                              Recursos Humanos
                            </div>
                          </div>
                          <div
                            className="px-[9.75px] py-[1.95px] w-auto h-auto"
                            onClick={handleMenuItemClick}
                          >
                            <div className="px-[9.75px] py-[8.45px] hover:bg-Azul/10 text-grisCustom hover:text-Azul text-[13px] font-medium text-start rounded-md cursor-pointer">
                              Configuraciones
                            </div>
                          </div>
                          {/* Agrega más elementos de menú según sea necesario */}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex flex-wrap justify-between items-center">
              <div className="flex flex-col flex-grow pr-8 ">
                <div className=" flex flex-wrap">
                  <div className="border border-gray-300/30 border-dashed rounded min-w-[125px] py-[9.75px] px-[13px] me-6 mb-[9.75px] mr-[19.5px]">
                    <div className="flex items-center ">
                      <RiArrowUpLine className="text-base text-green-500 me-2" />
                      <CountUp
                        start={0}
                        end={4000}
                        duration={2}
                        prefix="$"
                        className="text-xl"
                      />
                    </div>
                    <div className="font-semibold text-inter text-gray-500/75">
                      Ganancias
                    </div>
                  </div>
                  <div className="border border-gray-300/30 border-dashed rounded min-w-[125px] py-[9.75px] px-[13px] me-6 mb-[9.75px] mr-[19.5px]">
                    <div className="flex items-center ">
                      <RiArrowDownLine className="text-base text-red-500 me-2" />
                      <CountUp
                        start={0}
                        end={4500}
                        duration={2}
                        prefix="$"
                        className="text-xl"
                      />
                    </div>
                    <div className="font-semibold text-inter text-gray-500/75">
                      Ganancias
                    </div>
                  </div>
                  <div className="border border-gray-300/30 border-dashed rounded min-w-[125px] py-[9.75px] px-[13px] me-6 mb-[9.75px] mr-[19.5px]">
                    <div className="flex items-center ">
                      <RiArrowUpLine className="text-base text-green-500 me-2" />
                      <CountUp
                        start={0}
                        end={60}
                        duration={2}
                        prefix="%"
                        className="text-xl"
                      />
                    </div>
                    <div className="font-semibold text-inter text-gray-500/75">
                      Ganancias
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center w-[200px] min-w-[300px] flex-col mt-3 ">
                <div className="flex justify-between w-full mt-auto mb-2">
                  <span className="font-semibold text-inter text-gray-500">
                    Finalización del perfil
                  </span>
                  <span className="font-bold text-inter">50%</span>
                </div>
                <div className="h-[5px] mx-3 w-full bg-light rounded-md mb-3">
                  <div
                    className="bg-green-400 rounded h-[5px]"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul className="flex flex-wrap items-stretch border-b-2 border-transparent w-[941px] h-[63px] xl:h-auto xl:w-auto">
          <li className="items-stretch mb-[-2px] mt-[6.2px] ">
            <Link
              to="/Overview"
              className="flex items-center mr-[32.5px] py-[16.25px] text-gray-500 hover:text-gray-300 text-left border-transparent border-b-2 hover:border-primary transition-colors active:text-primary"
            >
              Descripcion
            </Link>
          </li>
          <li className="items-stretch mb-[-2px] mt-[6.2px] ">
            <Link
              to="/Settings"
              className="flex items-center mr-[32.5px] py-[16.25px] text-gray-500 hover:text-gray-300 text-left border-transparent border-b-2 hover:border-primary transition-colors active:text-primary"
            >
              Configuracion
            </Link>
          </li>
          <li className="items-stretch mb-[-2px] mt-[6.2px] ">
            <Link
              to="/Security"
              className="flex items-center mr-[32.5px] py-[16.25px] text-gray-500 hover:text-gray-300 text-left border-transparent border-b-2 hover:border-primary transition-colors active:text-primary"
            >
              Seguridad
            </Link>
          </li>
          <li className="items-stretch mb-[-2px] mt-[6.2px] ">
            <Link
              to="/Activity"
              className="flex items-center mr-[32.5px] py-[16.25px] text-gray-500 hover:text-gray-300 text-left border-transparent border-b-2 hover:border-primary transition-colors active:text-primary"
            >
              Actividad
            </Link>
          </li>
          <li className="items-stretch mb-[-2px] mt-[6.2px] ">
            <Link
              to="/Billing"
              className="flex items-center mr-[32.5px] py-[16.25px] text-gray-500 hover:text-gray-300 text-left border-transparent border-b-2 hover:border-primary transition-colors active:text-primary"
            >
              Facturacion
            </Link>
          </li>
          <li className="items-stretch mb-[-2px] mt-[6.2px] ">
            <a className="flex items-center mr-[32.5px] py-[16.25px] text-gray-500 hover:text-gray-300 text-left border-transparent border-b-2 hover:border-primary transition-colors active:text-primary">
              Declaraciones
            </a>
          </li>
          <li className="items-stretch mb-[-2px] mt-[6.2px] ">
            <a className="flex items-center mr-[32.5px] py-[16.25px] text-gray-500 hover:text-gray-300 text-left border-transparent border-b-2 hover:border-primary transition-colors active:text-primary">
              Referencias
            </a>
          </li>
          <li className="items-stretch mb-[-2px] mt-[6.2px] ">
            <a className="flex items-center mr-[32.5px] py-[16.25px] text-gray-500 hover:text-gray-300 text-left border-transparent border-b-2 hover:border-primary transition-colors active:text-primary">
              API Keys
            </a>
          </li>
          <li className="items-stretch mb-[-2px] mt-[6.2px] ">
            <a className="flex items-center mr-[32.5px] py-[16.25px] text-gray-500 hover:text-gray-300 text-left border-transparent border-b-2 hover:border-primary transition-colors active:text-primary">
              Logs
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default VistaPerfil;
