import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

// Biblioteca Menu

// SLIDERS
import Carousel_1 from "../../Export/Carousel_1";
import Carousel_2 from "../../Export/Carousel_2";

// CHART
import Grafico_1 from "../../Export/Grafico_1";
import Grafico_3 from "../../Export/Grafico_3";

// ICONS REACT}
import { BiSolidCopy } from "react-icons/bi";

import { GoVerified } from "react-icons/go";
import {
  RiAccountCircleFill,
  RiArrowUpLine,
  RiArrowDownLine,
} from "react-icons/ri";
import { HiLocationMarker, HiDotsHorizontal } from "react-icons/hi";
import { IoMdMail } from "react-icons/io";

const Security = () => {
  const [profileImage, setProfileImage] = useState("");

  useEffect(() => {
    const savedFormData = localStorage.getItem("formData");
    if (savedFormData) {
      const parsedFormData = JSON.parse(savedFormData);
      setProfileImage(parsedFormData.profileImage);
    }
  }, []);

  //COPIAR

  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    const tempInput = document.createElement("textarea");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // CAMBIO DE GRAFICOS

  const initialGrafico = localStorage.getItem("selectedGrafico") || "agentes";

  const [graficoActual, setGraficoActual] = useState(initialGrafico);

  const cambiarGrafico = (grafico) => {
    setGraficoActual(grafico);
  };

  // Almacena el estado seleccionado en localStorage cada vez que cambia
  useEffect(() => {
    localStorage.setItem("selectedGrafico", graficoActual);
  }, [graficoActual]);

  // SUBMENU

  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleButtonClick = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsSubMenuOpen(false);
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
                className="flex items-center mr-[32.5px] py-[16.25px] text-left border-b-2 border-primary hover:border-primary transition-colors active:text-primary"
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

      {/* Graficos */}

      <div className="flex flex-wrap mx-[-14.625px] mt-[-29.25px]">
        <div className="block basis-auto flex-grow-0 flex-shrink-0 mt-[29.25px] max-w-[100%] px-[14.625px] w-[878px] ">
          <div className="flex flex-col h-[611.928px] mb-[32.5px] min-w-0 relative bg-secondary-100 rounded-xl ">
            <div className="items-stretch flex flex-wrap justify-between mb-0 min-h-[70px] py-[0px] px-[29.25px] border-gray-700/60 border-b-[1px]">
              <div className="items-center flex my-[6.5px] ml-0 mr-[6.5px] ">
                <h3 className="mb-0 mt-0 text-[17.55px] font-medium text-white">
                  Resumen de seguridad
                </h3>
              </div>
              <div className="items-stretch flex flex-wrap mx-0 my-0 ">
                <ul className="items-stretch flex flex-wrap mb-0 mt-0 pl-0 pb-0 pt-0">
                  <li className="items-center flex mr-[13px] py-[6.5px] px-0 text-grisOscuroV2custom text-[14.95px] font-semibold hover:border-b-2 hover:border-blue-500 hover:text-blue-500  ">
                    12 Horas
                  </li>
                  <li className="items-center flex mr-[13px] ml-[13px] py-[6.5px] px-0 text-grisOscuroV2custom text-[14.95px] font-semibold hover:border-b-2 hover:border-blue-500 hover:text-blue-500  ">
                    Dia
                  </li>
                  <li className="items-center flex ml-[13px] py-[6.5px] px-0  text-[14.95px] font-semibold border-b-2 border-blue-500 text-blue-500  ">
                    Mes
                  </li>
                </ul>
              </div>
            </div>

            {/* Opcion Mes */}
            <div className="basis-auto flex-grow flex-shrink pt-[22.75px] pb-0 pl-0 pr-0">
              <div className=" flex flex-wrap mb-[16.25px] mx-[-9.75px] mt-0 pb-0 px-[29.25px] pt-0">
                <div className="  w-[263.078px] max-w-full px-[13px] flex-grow flex-shrink-0 basis-[0%]">
                  <div className=" border border-gray-300/30 border-dashed rounded mb-[9.75px] my-[9.75px] min-w-[125px] pb-[6.5px] pt-[13px]">
                    <div className="items-center text-center text-[16.25px] font-medium text-VerdeCustom">
                      Registro de usuario
                    </div>
                    <div className="text-center font-semibold text-[32.5px] text-white">
                      1988
                    </div>
                  </div>
                </div>
                <div className="  w-[263.078px] max-w-full px-[13px] flex-grow flex-shrink-0 basis-[0%]">
                  <div className=" border border-gray-300/30 border-dashed rounded mb-[9.75px] my-[9.75px] min-w-[125px] pb-[6.5px] pt-[13px]">
                    <div className="items-center text-center text-[16.25px] font-medium text-blue-500">
                      Acceso de administrador
                    </div>
                    <div className="text-center font-semibold text-[32.5px] text-white">
                      72
                    </div>
                  </div>
                </div>
                <div className="  w-[263.078px] max-w-full px-[13px] flex-grow flex-shrink-0 basis-[0%]">
                  <div className=" border border-gray-300/30 border-dashed rounded mb-[9.75px] my-[9.75px] min-w-[125px] pb-[6.5px] pt-[13px]">
                    <div className="items-center text-center text-[16.25px] font-medium text-RojoCustom">
                      Intentos fallidos
                    </div>
                    <div className="text-center font-semibold text-[32.5px] text-white">
                      291
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-[6.5px]">
                <div className="items-center flex px-[29.25px] pb-[19.5px]">
                  <h3 className="flex-grow mx-0 my-0 text-[17.55px] font-semibold text-white">
                    Tabla de actividades
                  </h3>
                  <ul className="flex flex-wrap mb-0 mt-0 px-[3.25px] py-[3.25px] border-[1px] rounded-md border-gray-700/50">
                    <li className="mr-[6.5px]">
                      <a
                        href="#"
                        className={`text-[13.975px] block py-[6.5px] px-[16.25px] rounded-md hover:bg-gray-700/75 ${
                          graficoActual === "agentes" ? "bg-gray-700/50" : ""
                        }`}
                        onClick={() => cambiarGrafico("agentes")}
                      >
                        Agentes
                      </a>
                    </li>
                    <li className="mr-0">
                      <a
                        href="#"
                        className={`text-[13.975px] block py-[6.5px] px-[16.25px] rounded-md hover:bg-gray-700/75 ${
                          graficoActual === "clientes" ? "bg-gray-700/50" : ""
                        }`}
                        onClick={() => cambiarGrafico("clientes")}
                      >
                        Clientes
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="px-[9.75px]">
                  {graficoActual === "agentes" && <Grafico_1 />}{" "}
                  {/* Renderiza Grafico_1 si es el gráfico actual */}
                  {graficoActual === "clientes" && <Grafico_3 />}{" "}
                  {/* Renderiza Graficos_2 si es el gráfico actual */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" basis-auto flex-shrink-0 flex-grow-0 mt-[29.25px] max-w-full px-[14.625px] w-[429.75px] ">
          <div className="flex flex-col mb-[32.5px] min-w-0 relative bg-secondary-100 rounded-lg">
            <div className="basis-auto flex-grow flex-shrink pb-[29.25px] px-[29.25px] pt-[16.25px]">
              <Carousel_1 />
            </div>
          </div>
          <div className="flex flex-col mb-[12.5px] min-w-0 relative bg-secondary-100 rounded-lg">
            <div className="basis-auto flex-grow flex-shrink pb-[29.25px] px-[29.25px] pt-[16.25px]">
              <Carousel_2 />
            </div>
          </div>
        </div>
      </div>

      {/* Cuerpo Login Sessions */}

      <div className="flex flex-col h-[410px] mb-[32.5px] min-w-0 relative bg-secondary-100 rounded-xl">
        <div className="items-stretch flex flex-wrap justify-between mb-0 min-h-[70px] py-[0px] px-[29.25px] border-gray-700/60 border-b-[1px]">
          <div className="items-center flex my-[6.5px] ml-0 mr-[6.5px] ">
            <h3 className="mb-0 mt-0 text-[17.55px] font-medium text-white">
              Registros de inicio de sesión
            </h3>
          </div>
          <div className="items-center flex flex-wrap mx-0 my-[6.5px] ">
            <a
              href=""
              className="block mb-[3.25px] mt-[3.25px] px-[14px] py-[8.15px] text-[12.32px] font-medium bg-secondary-900 rounded-lg hover:bg-secondary-900/60 transition-colors"
            >
              Ver todos
            </a>
          </div>
        </div>

        <div className="basis-auto flex-grow flex-shrink overflow-x-auto">
          <div className="block ">
            <table className="mb-[13px] w-full ">
              <thead className="border-gray-700/60 border-b-[1px] ">
                <tr className="h-[49px] min-h-0 px-0 text-[14.95px] font-medium ">
                  <th className="h-[49px] min-h-0 min-w-[250px] py-[13px] pl-[29.25px] pr-[9.75px] text-start">
                    Localizacion
                  </th>
                  <th className="h-[49px] min-h-0 min-w-[100px] py-[13px]  px-[9.75px] text-start">
                    Estado
                  </th>
                  <th className="h-[49px] min-h-0 min-w-[150px] py-[13px]  px-[9.75px] text-start">
                    Dispositivo
                  </th>
                  <th className="h-[49px] min-h-0 min-w-[150px] py-[13px]  px-[9.75px] text-start">
                    Dirección IP
                  </th>
                  <th className="h-[49px] min-h-0 min-w-[150px] py-[13px] pr-[29.25px] pl-[9.75px] text-start">
                    Tiempo
                  </th>
                </tr>
              </thead>
              <tbody className="text-grisOscuroCustom">
                <tr className="h-[47.7812px] min-h-0 pl-0 border-gray-700/60 border-b-[1px]">
                  <td className="py-[13px] pl-[29.25px] pr-[9.75px] text-[13px] font-medium">
                    <a href="">USA(5)</a>
                  </td>
                  <td className="py-[13px] px-[9.75px] text-[13px] font-medium">
                    <span className="items-center inline-flex px-[6.5px] py-[4.225px] text-[12.35px] font-semibold text-VerdeCustom bg-VerdeCustom/10 rounded-lg">
                      OK
                    </span>
                  </td>
                  <td className="py-[13px] px-[9.75px] text-[13px] font-medium">
                    Chrome - Windows
                  </td>
                  <td className="py-[13px] px-[9.75px] text-[13px] font-medium">
                    236.125.56.78
                  </td>
                  <td className="py-[13px] pr-[29.25px] pl-[9.75px] text-[13px] font-medium">
                    0 mins ago
                  </td>
                </tr>
                <tr className="h-[47.7812px] min-h-0 pl-0 border-gray-700/60 border-b-[1px]">
                  <td className="py-[13px] pl-[29.25px] pr-[9.75px] text-[13px] font-medium">
                    <a href="">USA(5)</a>
                  </td>
                  <td className="py-[13px] px-[9.75px] text-[13px] font-medium">
                    <span className="items-center inline-flex px-[6.5px] py-[4.225px] text-[12.35px] font-semibold text-VerdeCustom bg-VerdeCustom/10 rounded-lg">
                      OK
                    </span>
                  </td>
                  <td className="py-[13px] px-[9.75px] text-[13px] font-medium">
                    Chrome - Windows
                  </td>
                  <td className="py-[13px] px-[9.75px] text-[13px] font-medium">
                    236.125.56.78
                  </td>
                  <td className="py-[13px] pr-[29.25px] pl-[9.75px] text-[13px] font-medium">
                    1 mins ago
                  </td>
                </tr>
                <tr className="h-[47.7812px] min-h-0 pl-0 border-gray-700/60 border-b-[1px]">
                  <td className="py-[13px] pl-[29.25px] pr-[9.75px] text-[13px] font-medium">
                    <a href="">USA(5)</a>
                  </td>
                  <td className="py-[13px] px-[9.75px] text-[13px] font-medium">
                    <span className="items-center inline-flex px-[6.5px] py-[4.225px] text-[12.35px] font-semibold text-RojoCustom bg-RojoCustom/10 rounded-lg">
                      ERR
                    </span>
                  </td>
                  <td className="py-[13px] px-[9.75px] text-[13px] font-medium">
                    Chrome - Windows
                  </td>
                  <td className="py-[13px] px-[9.75px] text-[13px] font-medium">
                    236.125.56.50
                  </td>
                  <td className="py-[13px] pr-[29.25px] pl-[9.75px] text-[13px] font-medium">
                    10 mins ago
                  </td>
                </tr>
                <tr className="h-[47.7812px] min-h-0 pl-0 border-gray-700/60 border-b-[1px]">
                  <td className="py-[13px] pl-[29.25px] pr-[9.75px] text-[13px] font-medium">
                    <a href="">USA(5)</a>
                  </td>
                  <td className="py-[13px] px-[9.75px] text-[13px] font-medium">
                    <span className="items-center inline-flex px-[6.5px] py-[4.225px] text-[12.35px] font-semibold text-AmarilloCustom bg-AmarilloCustom/10 rounded-lg">
                      WRN
                    </span>
                  </td>
                  <td className="py-[13px] px-[9.75px] text-[13px] font-medium">
                    Chrome - Windows
                  </td>
                  <td className="py-[13px] px-[9.75px] text-[13px] font-medium">
                    236.125.56.01
                  </td>
                  <td className="py-[13px] pr-[29.25px] pl-[9.75px] text-[13px] font-medium">
                    23 mins ago
                  </td>
                </tr>
                <tr className="h-[47.7812px] min-h-0 pl-0 border-gray-700/60 border-b-[1px]">
                  <td className="py-[13px] pl-[29.25px] pr-[9.75px] text-[13px] font-medium">
                    <a href="">USA(5)</a>
                  </td>
                  <td className="py-[13px] px-[9.75px] text-[13px] font-medium">
                    <span className="items-center inline-flex px-[6.5px] py-[4.225px] text-[12.35px] font-semibold text-VerdeCustom bg-VerdeCustom/10 rounded-lg">
                      OK
                    </span>
                  </td>
                  <td className="py-[13px] px-[9.75px] text-[13px] font-medium">
                    Chrome - Windows
                  </td>
                  <td className="py-[13px] px-[9.75px] text-[13px] font-medium">
                    236.125.56.98
                  </td>
                  <td className="py-[13px] pr-[29.25px] pl-[9.75px] text-[13px] font-medium">
                    30 mins ago
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Cuerpo Uso de licencia */}

      <div className="flex flex-col h-[538.047px] min-w-0 relative bg-secondary-100 rounded-xl mb-4">
        <div className="items-stretch flex flex-wrap justify-between mb-0 min-h-[70px] py-[0px] px-[29.25px] border-gray-700/60 border-b-[1px]">
          <div className="items-center flex my-[6.5px] ml-0 mr-[6.5px] ">
            <h3 className="mb-0 mt-0 text-[17.55px] font-medium text-white">
              Uso de licencia
            </h3>
          </div>
          <div className="items-center flex flex-wrap mx-0 my-[6.5px] ">
            <a
              href=""
              className="block mb-[3.25px] mt-[3.25px] px-[14px] py-[8.15px] text-[12.32px] font-medium bg-secondary-900 rounded-lg hover:bg-secondary-900/60 transition-colors"
            >
              Ver todos
            </a>
          </div>
        </div>
        <div className="basis-auto flex-grow flex-shrink px-0 py-0 overflow-x-auto">
          <div className="">
            <table className="mb-[13px] w-[1259px]">
              <thead className="border-gray-700/60 border-b-[1px] align-bottom">
                <tr className="h-[48.9219] min-h-0 px-0">
                  <th className="py-[13px] text-left pl-[29.25px] pr-[9.75px] w-[150px] h-[49px] text-[14.95px] font-medium text-white">
                    {" "}
                    Estado{" "}
                  </th>
                  <th className="py-[13px] text-left min-w-[250px] h-[49px] text-[14.95px] font-medium text-white ">
                    {" "}
                    Operador{" "}
                  </th>
                  <th className="py-[13px] text-left  px-[9.75px] min-w-[150px] h-[49px] text-[14.95px] font-medium text-white">
                    {" "}
                    Direccion IP{" "}
                  </th>
                  <th className="py-[13px] text-left px-[9.75px] min-w-[150px] h-[49px] text-[14.95px] font-medium text-white">
                    {" "}
                    Creado{" "}
                  </th>
                  <th className="py-[13px] text-left pl-[9.75px] min-w-[150px] text-[14.95px] font-medium text-white">
                    {" "}
                    API Keys{" "}
                  </th>
                  <th className="py-[13px] text-left pl-[9.75px] min-w-[50px]">
                    {" "}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="h-[61.8125px] min-h-0 pl-0 border-gray-700/60 border-b-[1px]">
                  <td className="h-[61.8125px] min-h-0 py-[13px] pl-[29.25px] pr-[9.75px]">
                    <span className="py-[4.225px] px-[6.5px] text-[13px] text-VerdeCustom bg-VerdeCustom/10 rounded-lg">
                      License
                    </span>
                  </td>
                  <td className="h-[61.8125px] min-h-0 py-[13px] pl-0 pr-[9.75px] text-gray-500 text-[13px]">
                    DSI: Workstation 2
                  </td>
                  <td className="h-[61.8125px} min-h-0 py-[13px] px-[9.75px] text-grisOscuroCustom text-[13px]">
                    23.125.56.78
                  </td>
                  <td className="h-[61.8125px} min-h-0 py-[13px] px-[9.75px] text-grisOscuroCustom text-[13px]">
                    2 mins ago
                  </td>
                  <td
                    className={
                      copied ? "copied" : "text-grisOscuroCustom text-[13px]"
                    }
                    onClick={() => copyToClipboard("aD7sF1hJ8kL3mN6")}
                  >
                    aD7sF1hJ8kL3mN6
                  </td>{" "}
                  <td className="h-[61.8125px] min-h-0 py-[5px] pl-[9px] pr-0 text-grisOscuroCustom  transition-colors hover:text-blue-500 ">
                    <button
                      className="items-center inline-block h-[34px] justify-center mx-0 my-0 px-[8px] py-[8px] w-[34px] hover:bg-white rounded-lg"
                      type="button"
                      onClick={() => copyToClipboard("aD7sF1hJ8kL3mN6")}
                    >
                      <BiSolidCopy />
                    </button>
                  </td>
                </tr>
                <tr className="h-[61.8125px] min-h-0 pl-0 border-gray-700/60 border-b-[1px]">
                  <td className="h-[61.8125px] min-h-0 py-[13px] pl-[29.25px] pr-[9.75px]">
                    <span className="py-[4.225px] px-[6.5px]  text-[13px] text-RojoCustom bg-RojoCustom/10 rounded-lg">
                      Unknown
                    </span>
                  </td>
                  <td className="h-[61.8125px] min-h-0 py-[13px] pl-0 pr-[9.75px] text-gray-500 text-[13px]">
                    DSI: Workstation 2
                  </td>
                  <td className="h-[61.8125px} min-h-0 py-[13px] px-[9.75px] text-grisOscuroCustom text-[13px]">
                    203.45.67.89
                  </td>
                  <td className="h-[61.8125px} min-h-0 py-[13px] px-[9.75px] text-grisOscuroCustom text-[13px]">
                    2 mins ago
                  </td>
                  <td
                    className={
                      copied ? "copied" : "text-grisOscuroCustom text-[13px]"
                    }
                    onClick={() => copyToClipboard("5kL8mN3pQ7rT1")}
                  >
                    5kL8mN3pQ7rT1
                  </td>{" "}
                  <td className="h-[61.8125px] min-h-0 py-[5px] pl-[9.25px] pr-0 text-gray-500  transition-colors hover:text-blue-500 ">
                    <button
                      className="items-center inline-block h-[34px] justify-center mx-0 my-0 px-[8px] py-[8px] w-[34px] hover:bg-white rounded-lg"
                      type="button"
                      onClick={() => copyToClipboard("5kL8mN3pQ7rT1")}
                    >
                      <BiSolidCopy />
                    </button>
                  </td>
                </tr>
                <tr className="h-[61.8125px] min-h-0 pl-0 border-gray-700/60 border-b-[1px]">
                  <td className="h-[61.8125px] min-h-0 py-[13px] pl-[29.25px] pr-[9.75px]">
                    <span className="py-[4.225px] px-[6.5px]  text-[13px] text-VerdeCustom bg-VerdeCustom/10 rounded-lg">
                      License
                    </span>
                  </td>
                  <td className="h-[61.8125px] min-h-0 py-[13px] pl-0 pr-[9.75px] text-gray-500 text-[13px]">
                    DSI: Workstation 2
                  </td>
                  <td className="h-[61.8125px} min-h-0 py-[13px] px-[9.75px] text-grisOscuroCustom text-[13px]">
                    172.31.54.78
                  </td>
                  <td className="h-[61.8125px} min-h-0 py-[13px] px-[9.75px] text-grisOscuroCustom text-[13px]">
                    2 mins ago
                  </td>
                  <td
                    className={
                      copied ? "copied" : "text-grisOscuroCustom text-[13px]"
                    }
                    onClick={() => copyToClipboard("aD7sF1hJ8kL3mN6")}
                  >
                    9pR5tO2vQ8xW1zY4
                  </td>{" "}
                  <td className="h-[61.8125px] min-h-0 py-[5px] pl-[9.25px] pr-0 text-gray-500  transition-colors hover:text-blue-500 ">
                    <button
                      className="items-center inline-block h-[34px] justify-center mx-0 my-0 px-[8px] py-[8px] w-[34px] hover:bg-white rounded-lg"
                      type="button"
                      onClick={() => copyToClipboard("aD7sF1hJ8kL3mN6")}
                    >
                      <BiSolidCopy />
                    </button>
                  </td>
                </tr>
                <tr className="h-[61.8125px] min-h-0 pl-0 border-gray-700/60 border-b-[1px]">
                  <td className="h-[61.8125px] min-h-0 py-[13px] pl-[29.25px] pr-[9.75px]">
                    <span className="py-[4.225px] px-[6.5px]  text-[13px] text-VerdeCustom bg-VerdeCustom/10 rounded-lg">
                      License
                    </span>
                  </td>
                  <td className="h-[61.8125px] min-h-0 py-[13px] pl-0 pr-[9.75px] text-gray-500 text-[13px]">
                    DSI: Workstation 2
                  </td>
                  <td className="h-[61.8125px} min-h-0 py-[13px] px-[9.75px] text-grisOscuroCustom text-[13px]">
                    98.215.43.76
                  </td>
                  <td className="h-[61.8125px} min-h-0 py-[13px] px-[9.75px] text-grisOscuroCustom text-[13px]">
                    2 mins ago
                  </td>
                  <td
                    className={
                      copied ? "copied" : "text-grisOscuroCustom text-[13px]"
                    }
                    onClick={() => copyToClipboard("aD7sF1hJ8kL3mN6")}
                  >
                    cV2bN5mP9qS3wE6
                  </td>{" "}
                  <td className="h-[61.8125px] min-h-0 py-[5px] pl-[9.25px] pr-0 text-gray-500  transition-colors hover:text-blue-500 ">
                    <button
                      className="items-center inline-block h-[34px] justify-center mx-0 my-0 px-[8px] py-[8px] w-[34px] hover:bg-white rounded-lg"
                      type="button"
                      onClick={() => copyToClipboard("aD7sF1hJ8kL3mN6")}
                    >
                      <BiSolidCopy />
                    </button>
                  </td>
                </tr>
                <tr className="h-[61.8125px] min-h-0 pl-0 border-gray-700/60 border-b-[1px]">
                  <td className="h-[61.8125px] min-h-0 py-[13px] pl-[29.25px] pr-[9.75px]">
                    <span className="py-[4.225px] px-[6.5px] text-[13px] text-RojoCustom bg-RojoCustom/10 rounded-lg">
                      Unknown
                    </span>
                  </td>
                  <td className="h-[61.8125px] min-h-0 py-[13px] pl-0 pr-[9.75px] text-gray-500 text-[13px]">
                    DSI: Workstation 2
                  </td>
                  <td className="h-[61.8125px} min-h-0 py-[13px] px-[9.75px] text-grisOscuroCustom text-[13px]">
                    120.67.89.23
                  </td>
                  <td className="h-[61.8125px} min-h-0 py-[13px] px-[9.75px] text-grisOscuroCustom text-[13px]">
                    2 mins ago
                  </td>
                  <td
                    className={
                      copied ? "copied" : "text-grisOscuroCustom text-[13px]"
                    }
                    onClick={() => copyToClipboard("aD7sF1hJ8kL3mN6")}
                  >
                    4hT7jK2lM5nQ8pR1
                  </td>{" "}
                  <td className="h-[61.8125px] min-h-0 py-[5px] pl-[9.25px] pr-0 text-gray-500  transition-colors hover:text-blue-500 ">
                    <button
                      className="items-center inline-block h-[34px] justify-center mx-0 my-0 px-[8px] py-[8px] w-[34px] hover:bg-white rounded-lg"
                      type="button"
                      onClick={() => copyToClipboard("aD7sF1hJ8kL3mN6")}
                    >
                      <BiSolidCopy />
                    </button>
                  </td>
                </tr>
                <tr className="h-[61.8125px] min-h-0 pl-0 border-gray-700/60 border-b-[1px]">
                  <td className="h-[61.8125px] min-h-0 py-[13px] pl-[29.25px] pr-[9.75px]">
                    <span className="py-[4.225px] px-[6.5px] text-[13px] text-VerdeCustom bg-VerdeCustom/10 rounded-lg">
                      License
                    </span>
                  </td>
                  <td className="h-[61.8125px] min-h-0 py-[13px] pl-0 pr-[9.75px] text-gray-500 text-[13px]">
                    DSI: Workstation 2
                  </td>
                  <td className="h-[61.8125px} min-h-0 py-[13px] px-[9.75px] text-grisOscuroCustom text-[13px]">
                    192.168.1.100
                  </td>
                  <td className="h-[61.8125px} min-h-0 py-[13px] px-[9.75px] text-grisOscuroCustom text-[13px]">
                    2 mins ago
                  </td>
                  <td
                    className={
                      copied ? "copied" : "text-grisOscuroCustom text-[13px]"
                    }
                    onClick={() => copyToClipboard("aD7sF1hJ8kL3mN6")}
                  >
                    oU6rI3gY7zX9vW4
                  </td>{" "}
                  <td className="h-[61.8125px] min-h-0 py-[5px] pl-[9.25px] pr-0 text-gray-500  transition-colors hover:text-blue-500 ">
                    <button
                      className="items-center inline-block h-[34px] justify-center mx-0 my-0 px-[8px] py-[8px] w-[34px] hover:bg-white rounded-lg"
                      type="button"
                      onClick={() => copyToClipboard("aD7sF1hJ8kL3mN6")}
                    >
                      <BiSolidCopy />
                    </button>
                  </td>
                </tr>
                <tr className="h-[61.8125px] min-h-0 pl-0 border-gray-700/60 border-b-[1px]">
                  <td className="h-[61.8125px] min-h-0 py-[13px] pl-[29.25px] pr-[9.75px]">
                    <span className="py-[4.225px] px-[6.5px]  text-[13px] text-AmarilloCustom bg-AmarilloCustom/10 rounded-lg">
                      To be Paid
                    </span>
                  </td>
                  <td className="h-[61.8125px] min-h-0 py-[13px] pl-0 pr-[9.75px] text-gray-500 text-[13px]">
                    DSI: Workstation 2
                  </td>
                  <td className="h-[61.8125px} min-h-0 py-[13px] px-[9.75px] text-grisOscuroCustom text-[13px]">
                    10.20.30.40
                  </td>
                  <td className="h-[61.8125px} min-h-0 py-[13px] px-[9.75px] text-grisOscuroCustom text-[13px]">
                    2 mins ago
                  </td>
                  <td
                    className={
                      copied ? "copied" : "text-grisOscuroCustom text-[13px]"
                    }
                    onClick={() => copyToClipboard("aD7sF1hJ8kL3mN6")}
                  >
                    8sH3uE6iO1mN7rP2
                  </td>{" "}
                  <td className="h-[61.8125px] min-h-0 py-[5px] pl-[9.25px] pr-0 text-gray-500  transition-colors hover:text-blue-500 ">
                    <button
                      className="items-center inline-block h-[34px] justify-center mx-0 my-0 px-[8px] py-[8px] w-[34px] hover:bg-white rounded-lg"
                      type="button"
                      onClick={() => copyToClipboard("aD7sF1hJ8kL3mN6")}
                    >
                      <BiSolidCopy />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Security;
