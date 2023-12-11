import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

// ICONS REACT}

import { GoVerified } from "react-icons/go";
import {
  RiAccountCircleFill,
  RiArrowUpLine,
  RiArrowDownLine,
} from "react-icons/ri";
import { HiLocationMarker, HiDotsHorizontal, HiFlag } from "react-icons/hi";
import { IoMdMail, IoIosLink } from "react-icons/io";
import { IoLayers } from "react-icons/io5";
import { FaRegCalendarAlt, FaPencilAlt, FaFileCode } from "react-icons/fa";
import { LiaComment } from "react-icons/lia";
import { BsFileEarmarkCodeFill } from "react-icons/bs";

const Activity = () => {
  // Cambio de Imagen Perfil
  const [profileImage, setProfileImage] = useState("");

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
    // Maneja la acción cuando se hace clic en un elemento del submenú
    // Puedes realizar alguna acción específica aquí
    setIsSubMenuOpen(false); // Cierra el submenú después de hacer clic en un elemento
  };

  return (
    <>
      {/* Encabesado */}
      <div className="flex flex-col bg-secondary-100 pl-[29.25px] pr-[29.25px] pt-[29.25px] pb-0 min-w-0 rounded-xl mb-5 xl:mb-10  text-[14.95px] font-semibold">
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
                    <span className="text-gray-100 transition-colors mr-[3.25px] text-[19.5px] font-semibold no-underline decoration-solid decoration-auto">
                      Benjamin Reyes
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
                      be.reyes@duocuc.cl
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
                className="flex items-center mr-[32.5px] py-[16.25px] text-left border-b-2 border-primary hover:border-primary transition-colors active:text-primary"
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

      {/* Linea de Actividades */}
      <div className="flex flex-col h-auto min-w-0 relative bg-secondary-100 rounded-xl mb-5">
        <div className="items-stretch flex flex-wrap justify-between mb-0 min-h-[70px] py-[0px] px-[29.25px]  border-gray-700/60 border-b-[1px]">
          <div className="items-center flex my-[6.5px] ml-0 mr-[6.5px] ">
            <FaRegCalendarAlt className="flex mr-[9.75px] relative text-blue-500 text-[22.75px] font-normal" />
            <h3 className="mb-0 mt-0 text-[17.55px] font-medium text-white">
              Junio 23, 2023
            </h3>
          </div>
          <div className="items-stretch flex flex-wrap mx-0 my-0 ">
            <ul className="items-stretch flex flex-wrap mb-0 mt-0 pl-0 pb-0 pt-0">
              <li className="items-center flex mr-[13px] py-[6.5px] px-0 text-grisOscuroV2custom text-[14.95px] font-semibold hover:border-b-2 hover:border-blue-500 hover:text-blue-500  ">
                Hoy
              </li>
              <li className="items-center flex mr-[13px] ml-[13px] py-[6.5px] px-0 text-grisOscuroV2custom text-[14.95px] font-semibold hover:border-b-2 hover:border-blue-500 hover:text-blue-500  ">
                Semana
              </li>
              <li className="items-center flex mr-[13px] ml-[13px] py-[6.5px] px-0 text-grisOscuroV2custom text-[14.95px] font-semibold hover:border-b-2 hover:border-blue-500 hover:text-blue-500">
                Mes
              </li>
              <li className="items-center flex mr-[13px] ml-[13px] py-[6.5px] px-0 text-grisOscuroV2custom text-[14.95px] font-semibold hover:border-b-2 hover:border-blue-500 hover:text-blue-500  ">
                2023
              </li>
            </ul>
          </div>
        </div>
        <div className="basis-auto flex-grow flex-shrink px-[29.25px] py-[26px]">
          <div className="block">
            <div className="basis-auto flex-grow flex-shrink px-0 py-0">
              <div className="block">
                <div className="items-start flex mx-0 my-0 px-0 py-0 relative">
                  <div className="bottom-0 justify-center left-[17px] mb-[4.55px] mt-[4.55px] absolute top-[38px] w-[38px] z-0 text-gray-200/40 border-l-[1px] border-dashed border-gray-500/60"></div>
                  <div className="items-center flex flex-shrink-0 h-[38px] justify-center mr-[13px] w-[38px] z-[1] text-gray-200/40 border border-dashed border-gray-500/60 rounded-full">
                    <LiaComment className="flex relative" />
                  </div>
                  <div className="mb-[32.5px] mt-[-3.25px] overflow-x-auto overflow-y-auto w-[1129.5px]">
                    <div className="mb-[16.25px] pr-[9.75px]">
                      <div className="mb-[6.5px] text-[14.95px] font-medium text-white">
                        Hay 2 nuevas tareas para usted en la “Aplicacion de
                        Monitoreo” proyecto:
                      </div>
                      <div className="items-center flex mt-[3.25px]">
                        <div className="mr-[6.5px] text-[12.35px] font-normal text-grisOscuroCustom">
                          Agregado a las 4:23 p. m. por
                        </div>
                        <div className="flex-shrink-0 relative">
                          <img
                            src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-14.jpg"
                            className=" inline-block flex-shrink-0 h-[25px] overflow-x-clip overflow-y-clip w-[25px] rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="overflow-x-auto overflow-y-auto pb-[16.25px]">
                      <div className="items-center flex mb-[16.25px] min-w-[750px] px-[22.75px] py-[9.75px] border-[1px] border-dashed border-gray-500/50 rounded-md">
                        <a
                          href="#"
                          className="min-w-[200px] w-[375px] text-[14.95px] font-medium text-white"
                        >
                          Reunión con el cliente
                        </a>
                        <div className="min-w-[175px] pr-[6.5px]">
                          <span className="items-center inline-block py-[4.225px] px-[6.5px] text-[11.05px] font-semibold text-grisOscuroCustom/100 bg-gray-500/5 rounded-lg">
                            Diseño de aplicaciones
                          </span>
                        </div>
                        <div className="items-center flex flex-grow flex-nowrap ml-[10px] min-w-[100px] pr-[6.5px] ">
                          <div className="flex-shrink-0 ml-[-10px] relative z-0">
                            <img
                              src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-2.jpg"
                              className="inline-block flex-shrink-0 h-[25px] overflow-x-clip overflow-y-clip w-[25px] rounded-full"
                            />
                          </div>
                          <div className="flex-shrink-0 ml-[-10px] relative z-0">
                            <img
                              src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-14.jpg"
                              className="inline-block flex-shrink-0 h-[25px] overflow-x-clip overflow-y-clip w-[25px] rounded-full"
                            />
                          </div>
                          <div className="flex-shrink-0 ml-[-10px] relative z-0">
                            <div className="items-center flex h-[25px] justify-center relative w-[25px] bg-blue-500 rounded-full border-[1px] cursor-pointer text-[11.05px] font-medium | after:bottom-0 after:left-0 after:absolute after:right-0 after:top-0 ">
                              A
                            </div>
                          </div>
                        </div>
                        <div className="min-w-[125px] pl-[6.5px] ">
                          <span className="items-center inline-block py-[4.225px] px-[6.5px] text-[11.05px] text-center font-semibold bg-blue-500/20 rounded-lg text-blue-500 ">
                            En progreso
                          </span>
                        </div>
                        <a
                          href="#"
                          className="py-[8.15px] px-[14px] text-[12.35px] font-normal bg-gray-500/10 rounded-lg text-white hover:bg-gray-500/20 transition-colors "
                        >
                          Ver
                        </a>
                      </div>
                      <div className="items-center flex mb-[16.25px] min-w-[750px] px-[22.75px] py-[9.75px] border-[1px] border-dashed border-gray-500/50 rounded-md">
                        <a
                          href="#"
                          className="min-w-[200px] w-[375px] text-[14.95px] font-medium text-white"
                        >
                          Preparación de la entrega del proyecto
                        </a>
                        <div className="min-w-[175px] pr-[6.5px]">
                          <span className="items-center inline-block py-[4.225px] px-[6.5px] text-[11.05px] font-semibold text-grisOscuroCustom/100 bg-gray-500/5 rounded-lg">
                            Desarrollo del sistema CRM
                          </span>
                        </div>
                        <div className="items-center flex flex-grow flex-nowrap ml-[10px] min-w-[100px] pr-[6.5px] ">
                          <div className="flex-shrink-0 ml-[-10px] relative z-0">
                            <img
                              src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-2.jpg"
                              className="inline-block flex-shrink-0 h-[25px] overflow-x-clip overflow-y-clip w-[25px] rounded-full"
                            />
                          </div>
                          <div className="flex-shrink-0 ml-[-10px] relative z-0">
                            <img
                              src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-14.jpg"
                              className="inline-block flex-shrink-0 h-[25px] overflow-x-clip overflow-y-clip w-[25px] rounded-full"
                            />
                          </div>
                          <div className="flex-shrink-0 ml-[-10px] relative z-0">
                            <div className="items-center flex h-[25px] justify-center relative w-[25px] bg-blue-500 rounded-full border-[1px] cursor-pointer text-[11.05px] font-medium | after:bottom-0 after:left-0 after:absolute after:right-0 after:top-0 ">
                              A
                            </div>
                          </div>
                        </div>
                        <div className="min-w-[125px] pl-[6.5px] ">
                          <span className="items-center inline-block py-[4.225px] px-[6.5px] text-[11.05px] text-center font-semibold bg-blue-500/20 rounded-lg text-blue-500 ">
                            En progreso
                          </span>
                        </div>
                        <a
                          href="#"
                          className="py-[8.15px] px-[14px] text-[12.35px] font-normal bg-gray-500/10 rounded-lg text-white hover:bg-gray-500/20 transition-colors "
                        >
                          Ver
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-start flex mx-0 my-0 px-0 py-0 relative">
                  <div className="bottom-0 justify-center left-[17px] mb-[4.55px] mt-[4.55px] absolute top-[38px] w-[38px] z-0 text-gray-200/40 border-l-[1px] border-dashed border-gray-500/60"></div>
                  <div className="items-center flex flex-shrink-0 h-[38px] justify-center mr-[13px] w-[38px] z-[1] text-gray-200/40 border border-dashed border-gray-500/60 rounded-full">
                    <HiFlag className="flex relative" />
                  </div>
                  <div className="mb-[32.5px] mt-[-3.25px] overflow-x-auto overflow-y-auto w-[1129.5px]">
                    <div className="mb-[16.25px] pr-[9.75px]">
                      <div className="mb-[6.5px] text-[14.95px] font-medium text-white">
                        Investigacion sobre el rendimiento de los tipos de
                        Tuberia en condiciones ambientales adversas
                      </div>
                      <div className="items-center flex mt-[3.25px]">
                        <div className="mr-[6.5px] text-[12.35px] font-normal text-grisOscuroCustom">
                          Agregado a las 4:23 PM por
                        </div>
                        <div className="flex-shrink-0 relative">
                          <img
                            src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-1.jpg"
                            className=" inline-block flex-shrink-0 h-[25px] overflow-x-clip overflow-y-clip w-[25px] rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-start flex mx-0 my-0 px-0 py-0 relative">
                  <div className="bottom-0 justify-center left-[17px] mb-[4.55px] mt-[4.55px] absolute top-[38px] w-[38px] z-0 text-gray-200/40 border-l-[1px] border-dashed border-gray-500/60"></div>
                  <div className="items-center flex flex-shrink-0 h-[38px] justify-center mr-[13px] w-[38px] z-[1] text-gray-300 border border-dashed border-gray-500/60 rounded-full">
                    <IoIosLink className="flex relative" />
                  </div>
                  <div className="mb-[32.5px] mt-[-3.25px] overflow-x-auto overflow-y-auto w-[1129.5px]">
                    <div className="mb-[16.25px] pr-[9.75px]">
                      <div className="mb-[6.5px] text-[14.95px] font-medium text-gray-300">
                        3 nuevos archivos de proyecto entrantes:
                      </div>
                      <div className="items-center flex mt-[3.25px]">
                        <div className="mr-[6.5px] text-[12.35px] font-normal text-grisOscuroCustom">
                          Agregado a las 10:30 PM por
                        </div>
                        <div className="flex-shrink-0 relative">
                          <img
                            src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-23.jpg"
                            className=" inline-block flex-shrink-0 h-[25px] overflow-x-clip overflow-y-clip w-[25px] rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="overflow-x-auto overflow-y-auto pb-[16.25px]">
                      <div className="items-center flex min-w-[700px] px-[16.25px] py-[16.25px] border-[1px] border-dashed border-gray-500/50 rounded-md">
                        <div className="flex pr-[65px]">
                          <img
                            className="mr-[9.75px] overflow-x-clip overflow-y-clip w-[30px]"
                            src="https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/files/pdf.svg"
                            alt=""
                          />
                          <div className="ml-[3.25px]">
                            <a
                              href="#"
                              className="text-[13.975px] text-blue-500 font-semibold"
                            >
                              Directrices de la aplicación KPI de finanzas
                            </a>
                            <div className="text-[13px] text-grisOscuroCustom font-medium">
                              1.9 MB
                            </div>
                          </div>
                        </div>
                        <div className="flex pr-[65px]">
                          <img
                            className="mr-[9.75px] overflow-x-clip overflow-y-clip w-[30px]"
                            src="https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/files/doc.svg"
                            alt=""
                          />
                          <div className="ml-[3.25px]">
                            <a
                              href="#"
                              className="text-[13.975px] text-blue-500 font-semibold"
                            >
                              Resultados de las pruebas UAT del cliente
                            </a>
                            <div className="text-[13px] text-grisOscuroCustom font-medium">
                              18 KB
                            </div>
                          </div>
                        </div>
                        <div className="flex pr-[65px]">
                          <img
                            className="mr-[9.75px] overflow-x-clip overflow-y-clip w-[30px]"
                            src="https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/files/css.svg"
                            alt=""
                          />
                          <div className="ml-[3.25px]">
                            <a
                              href="#"
                              className="text-[13.975px] text-blue-500 font-semibold"
                            >
                              Reporte de Finanzas
                            </a>
                            <div className="text-[13px] text-grisOscuroCustom font-medium">
                              20 MB
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-start flex mx-0 my-0 px-0 py-0 relative">
                  <div className="bottom-0 justify-center left-[17px] mb-[4.55px] mt-[4.55px] absolute top-[38px] w-[38px] z-0 text-gray-200/40 border-l-[1px] border-dashed border-gray-500/60"></div>
                  <div className="items-center flex flex-shrink-0 h-[38px] justify-center mr-[13px] w-[38px] z-[1] text-gray-400 border border-dashed border-gray-500/60 rounded-full">
                    <IoLayers className="flex relative" />
                  </div>
                  <div className="mb-[32.5px] mt-[-3.25px] overflow-x-auto overflow-y-auto w-[1129.5px]">
                    <div className="mb-[16.25px] pr-[9.75px]">
                      <div className="mb-[6.5px] text-[14.95px] font-medium text-gray-300">
                        Tarea
                        <a
                          href="#"
                          className="mr-[5.25px] ml-[5.25px] text-[14.95px] font-medium text-blue-500"
                        >
                          #45890
                        </a>
                        Fusión con
                        <a
                          href="#"
                          className="mr-[5.25px] ml-[5.25px] text-[14.95px] font-medium text-blue-500"
                        >
                          $45890
                        </a>
                        en “Proyecto de panel de administración de Ads Pro:
                      </div>
                      <div className="items-center flex mt-[3.25px]">
                        <div className="mr-[6.5px] text-[12.35px] font-normal text-grisOscuroCustom">
                          Agregado a las 4:23 PM por
                        </div>
                        <div className="flex-shrink-0 relative">
                          <img
                            src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-14.jpg"
                            className=" inline-block flex-shrink-0 h-[25px] overflow-x-clip overflow-y-clip w-[25px] rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-start flex mx-0 my-0 px-0 py-0 relative">
                  <div className="bottom-0 justify-center left-[17px] mb-[4.55px] mt-[4.55px] absolute top-[38px] w-[38px] z-0 text-gray-200/40 border-l-[1px] border-dashed border-gray-500/60"></div>
                  <div className="items-center flex flex-shrink-0 h-[38px] justify-center mr-[13px] w-[38px] z-[1] text-gray-400 border border-dashed border-gray-500/60 rounded-full">
                    <FaPencilAlt className="flex relative" />
                  </div>
                  <div className="mb-[32.5px] mt-[-3.25px] overflow-x-auto overflow-y-auto w-[1129.5px]">
                    <div className="mb-[16.25px] pr-[9.75px]">
                      <div className="mb-[6.5px] text-[14.95px] font-medium text-gray-300">
                        Se agregaron 3 nuevos conceptos de diseño de
                        aplicaciones:
                      </div>
                      <div className="items-center flex mt-[3.25px]">
                        <div className="mr-[6.5px] text-[12.35px] font-normal text-grisOscuroCustom">
                          Agregado a las 4:23 PM por
                        </div>
                        <div className="flex-shrink-0 relative">
                          <img
                            src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-2.jpg"
                            className=" inline-block flex-shrink-0 h-[25px] overflow-x-clip overflow-y-clip w-[25px] rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="overflow-x-auto overflow-y-auto pb-[16.25px]">
                      <div className="items-center flex min-w-[700px] py-[22.75px] px-[22.75px]  border-[1px] border-dashed border-gray-500/50 rounded-md">
                        <div className="mr-[32.5px] relative">
                          <img
                            src="https://preview.keenthemes.com/metronic8/demo1/assets/media/stock/600x400/img-29.jpg"
                            className="overflow-x-clip overflow-y-clip w-[150px] rounded-md"
                          />
                        </div>
                        <div className="mr-[32.5px] relative">
                          <img
                            src="https://preview.keenthemes.com/metronic8/demo1/assets/media/stock/600x400/img-31.jpg"
                            className="overflow-x-clip overflow-y-clip w-[150px] rounded-md"
                          />
                        </div>
                        <div className="relative">
                          <img
                            src="https://preview.keenthemes.com/metronic8/demo1/assets/media/stock/600x400/img-40.jpg"
                            className="overflow-x-clip overflow-y-clip w-[150px] rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-start flex mx-0 my-0 px-0 py-0 relative">
                  <div className="bottom-0 justify-center left-[17px] mb-[4.55px] mt-[4.55px] absolute top-[38px] w-[38px] z-0 text-gray-200/40 border-l-[1px] border-dashed border-gray-500/60"></div>
                  <div className="items-center flex flex-shrink-0 h-[38px] justify-center mr-[13px] w-[38px] z-[1] text-gray-400 border border-dashed border-gray-500/60 rounded-full">
                    <IoLayers className="flex relative" />
                  </div>
                  <div className="mb-[32.5px] mt-[-3.25px] overflow-x-auto overflow-y-auto w-[1129.5px]">
                    <div className="mb-[16.25px] pr-[9.75px]">
                      <div className="mb-[6.5px] text-[14.95px] font-medium text-gray-300">
                        Nuevo caso
                        <a
                          href="#"
                          className="mr-[5.25px] ml-[5.25px] text-[14.95px] font-medium text-blue-500"
                        >
                          #67890
                        </a>
                        se le asigna en el proyecto de Diseño de base de datos
                        multiplataforma
                      </div>
                      <div className="items-center flex mt-[3.25px]">
                        <div className="mr-[6.5px] text-[12.35px] font-normal text-grisOscuroCustom">
                          Agregado a las 4:23 PM por
                        </div>
                        <a
                          href="#"
                          className="mr-[3.25px] text-[13.975px] font-semibold text-blue-600"
                        >
                          Alice Tan
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-start flex mx-0 my-0 px-0 py-0 relative">
                  <div className="bottom-0 justify-center left-[17px] mb-[4.55px] mt-[4.55px] absolute top-[38px] w-[38px] z-0 text-gray-200/40 border-l-[1px] border-dashed border-gray-500/60"></div>
                  <div className="items-center flex flex-shrink-0 h-[38px] justify-center mr-[13px] w-[38px] z-[1] text-gray-400 border border-dashed border-gray-500/60 rounded-full">
                    <FaPencilAlt className="flex relative" />
                  </div>
                  <div className="mb-[32.5px] mt-[-3.25px] overflow-x-auto overflow-y-auto w-[1129.5px]">
                    <div className="mb-[16.25px] pr-[9.75px]">
                      <div className="mb-[6.5px] text-[14.95px] font-medium text-gray-300">
                        3 nuevos archivos de proyecto entrantes:
                      </div>
                      <div className="items-center flex mt-[3.25px]">
                        <div className="mr-[6.5px] text-[12.35px] font-normal text-grisOscuroCustom">
                          Agregado a las 10:30 PM por
                        </div>
                        <div className="flex-shrink-0 relative">
                          <img
                            src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-23.jpg"
                            className=" inline-block flex-shrink-0 h-[25px] overflow-x-clip overflow-y-clip w-[25px] rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="overflow-x-auto overflow-y-auto pb-[16.25px]">
                      <div className="flex p-[19.5px] rounded-md border-dashed border border-blue-500 bg-blue-600/10">
                        <BsFileEarmarkCodeFill className="relative text-blue-400/90  text-[35.75px] mr-[13px]" />
                        <div className="flex flex-grow justify-between items-center ">
                          <div className=" font-medium">
                            <h4 className="text-white mb-[6.5px] font-semibold text-[16.25px]">
                              ¡Proceso de copia de seguridad de la base de datos
                              completado!
                            </h4>
                            <div className=" text-gray-400 text-[13.975px]">
                              Inicie sesión en el Panel de administración para
                              asegurarse de que la integridad de los datos sea
                              correcta.
                            </div>
                          </div>
                          <a
                            href="#"
                            className="items-center bg-blue-500 py-[10px] px-[9px] rounded-md text-[15px] font-semibold hover:bg-blue-500/90"
                          >
                            Proceder
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-start flex mx-0 my-0 px-0 py-0 relative">
                  <div className="items-center flex flex-shrink-0 h-[38px] justify-center mr-[13px] w-[38px] z-[1] text-gray-400 border border-dashed border-gray-500/60 rounded-full">
                    <FaFileCode className="flex relative" />
                  </div>
                  <div className="mb-[32.5px] mt-[-3.25px] overflow-x-auto overflow-y-auto w-[1129.5px]">
                    <div className="mb-[16.25px] pr-[9.75px]">
                      <div className="mb-[6.5px] text-[14.95px] font-medium text-gray-300">
                        Nuevo Codigo
                        <a
                          href="#"
                          className="mr-[5.25px] ml-[5.25px] text-[14.95px] font-medium text-blue-500"
                        >
                          #52890
                        </a>
                        se le asigna en el proyecto de Diseño de base de datos
                        Tuberias con Power Bi
                      </div>
                      <div className="items-center flex mt-[3.25px]">
                        <div className="mr-[6.5px] text-[12.35px] font-normal text-grisOscuroCustom">
                          Agregado a las 11:23 PM por
                        </div>
                        <a
                          href="#"
                          className="mr-[3.25px] text-[13.975px] font-semibold text-blue-600"
                        >
                          Hideo Kojima
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Activity;
