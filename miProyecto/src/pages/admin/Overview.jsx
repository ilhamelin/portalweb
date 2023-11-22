import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// Biblioteca Menu
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

// ICONS

import sensor from "../../assets/Views/SENSOR.png";
import app from "../../assets/Views/App Movil.png";

// ICONS REACT}

import { GoVerified } from "react-icons/go";
import {
  RiAccountCircleFill,
  RiArrowUpLine,
  RiArrowDownLine,
} from "react-icons/ri";
import { HiLocationMarker, HiDotsHorizontal } from "react-icons/hi";
import { IoMdMail } from "react-icons/io";
import { BsPatchExclamationFill, BsPatchExclamation } from "react-icons/bs";

// FUNCIONES
const Overview = () => {
  const [profileImage, setProfileImage] = useState("");

  useEffect(() => {
    const savedFormData = localStorage.getItem("formData");
    if (savedFormData) {
      const parsedFormData = JSON.parse(savedFormData);
      setProfileImage(parsedFormData.profileImage);
    }
  }, []);

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
                    <button className="bg-secondary-900 cursor-pointer rounded-md inline-flex items-center h-[37.75px] w-[34.8125px] justify-center py-0 pl-0 pr-0 ">
                      <HiDotsHorizontal className="flex " />
                    </button>
                    <div></div>
                  </div>
                </div>
              </div>
              <div className=" flex flex-wrap justify-between items-center">
                <div className="flex flex-col flex-grow pr-8 ">
                  <div className=" flex flex-wrap">
                    <div className="border border-gray-300/30 border-dashed rounded min-w-[125px] py-[9.75px] px-[13px] me-6 mb-[9.75px] mr-[19.5px]">
                      <div className="flex items-center ">
                        <RiArrowUpLine className="text-base text-green-500 me-2" />
                        <div
                          className="text-xl"
                          data-kt-countup="true"
                          data-kt-countup-value="4500"
                          data-kt-countup-prefix="$"
                        >
                          $4.500
                        </div>
                      </div>
                      <div className="font-semibold text-inter text-gray-500/75">
                        Ganancias
                      </div>
                    </div>
                    <div className="border border-gray-300/30 border-dashed rounded min-w-[125px] py-[9.75px] px-[13px] me-6 mb-[9.75px] mr-[19.5px]">
                      <div className="flex items-center ">
                        <RiArrowDownLine className="text-base text-red-500 me-2" />
                        <div
                          className="text-xl"
                          data-kt-countup="true"
                          data-kt-countup-value="4500"
                          data-kt-countup-prefix="$"
                        >
                          $4.500
                        </div>
                      </div>
                      <div className="font-semibold text-inter text-gray-500/75">
                        Ganancias
                      </div>
                    </div>
                    <div className="border border-gray-300/30 border-dashed rounded min-w-[125px] py-[9.75px] px-[13px] me-6 mb-[9.75px] mr-[19.5px]">
                      <div className="flex items-center ">
                        <RiArrowUpLine className="text-base text-green-500 me-2" />
                        <div
                          className="text-xl"
                          data-kt-countup="true"
                          data-kt-countup-value="4500"
                          data-kt-countup-prefix="$"
                        >
                          %60
                        </div>
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
                    <span className="font-bold text-inter">100%</span>
                  </div>
                  <div className="h-[5px] mx-3 w-full bg-light mb-3">
                    <div
                      className="bg-green-400 rounded h-[5px]"
                      role="progressbar"
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
                className="flex items-center mr-[32.5px] py-[16.25px] text-left border-b-2 border-primary hover:border-primary transition-colors active:text-primary"
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
              <a className="flex items-center mr-[32.5px] py-[16.25px] text-gray-500 hover:text-gray-300 text-left border-transparent border-b-2 hover:border-primary transition-colors active:text-primary">
                Actividad
              </a>
            </li>
            <li className="items-stretch mb-[-2px] mt-[6.2px] ">
              <a className="flex items-center mr-[32.5px] py-[16.25px] text-gray-500 hover:text-gray-300 text-left border-transparent border-b-2 hover:border-primary transition-colors active:text-primary">
                Facturacion
              </a>
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

      {/* Perfil */}
      <div className="relative bg-secondary-100 flex flex-col mb-[32.5px] h-[534.125px] min-w-0 rounded-xl font-normal">
        <div className="flex flex-wrap justify-between items-stretch  min-h-[75px] py-0 pl-[29.25px] pr-[29.25px] bg-transparent text-start cursor-pointer">
          <div className="text-gray-500 flex items-center m-0 font-medium text-xl hover:text-gray-400/40">
            <h3 className=" text-white text-[17.55px]">Detalles de Perfil</h3>
          </div>
          <Link
            to="/Settings"
            className="block py-[8.15px] pl-[14px] pr-[14px] font-medium text-[12.35px] shadow-none bg-blue-500  self-center outline-0 border-blue-500 rounded-lg "
          >
            Editar Perfil
          </Link>
        </div>
        <hr className=" border-gray-700" />
        <div className="flex-auto py-[29.25px] pl-[29.25px] pr-[29.25px]">
          <div className="flex flex-wrap mb-[22.75px] ml-[-9.75px] mr-[-9.75px]">
            <label className="block basis-auto flex-grow-0 flex-shrink-0 mt-0 max-w-[100%] pl-[9.75px] pr-[9.75px] w-[375px] text-gray-500 text-[13px] font-medium">
              Nombre Completo
            </label>
            <div className="max-w-[100%] pl-[9.75px] pr-[9.75px] w-[752px]">
              <span className="text-[13.975px] font-semibold">
                Benjamin Ignacio Reyes Valdes
              </span>
            </div>
          </div>
          <div className="flex flex-wrap mb-[22.75px] ml-[-9.75px] mr-[-9.75px]">
            <label className="block basis-auto flex-grow-0 flex-shrink-0 mt-0 max-w-[100%] pl-[9.75px] pr-[9.75px] w-[375px] text-gray-500 text-[13px] font-medium">
              Nombre de la Empresa
            </label>
            <div className="max-w-[100%] pl-[9.75px] pr-[9.75px] w-[752px]">
              <span className="text-[13.975px] font-semibold">
                Ibrea Company
              </span>
            </div>
          </div>
          <div className="flex flex-wrap mb-[22.75px] ml-[-9.75px] mr-[-9.75px]">
            <label className="block basis-auto flex-grow-0 flex-shrink-0 mt-0 max-w-[100%] pl-[9.75px] pr-[9.75px] w-[375px] text-gray-500 text-[13px] font-medium">
              Numero de Contacto
            </label>
            <div className="max-w-[100%] pl-[9.75px] pr-[9.75px] w-[752px]">
              <span className="text-[13.975px] font-semibold mr-[6.5px]">
                +569 5824 3917
              </span>
              <span className="bg-green-600 inline-flex items-center text-center py-[4.225px] px-[6.5px] text-text-xs font-semibold leading-none whitespace-nowrap align-baseline rounded-md">
                Verificado
              </span>
            </div>
          </div>
          <div className="flex flex-wrap mb-[22.75px] ml-[-9.75px] mr-[-9.75px]">
            <label className="block basis-auto flex-grow-0 flex-shrink-0 mt-0 max-w-[100%] pl-[9.75px] pr-[9.75px] w-[375px] text-gray-500 text-[13px] font-medium">
              Pagina Web
            </label>
            <div className="max-w-[100%] pl-[9.75px] pr-[9.75px] w-[752px]">
              <span className="text-[13.975px] font-semibold">
                www.ibreaCompany.com
              </span>
            </div>
          </div>
          <div className="flex flex-wrap mb-[22.75px] ml-[-9.75px] mr-[-9.75px]">
            <label className="block basis-auto flex-grow-0 flex-shrink-0 mt-0 max-w-[100%] pl-[9.75px] pr-[9.75px] w-[375px] text-gray-500 text-[13px] font-medium">
              Pais
            </label>
            <div className="max-w-[100%] pl-[9.75px] pr-[9.75px] w-[752px]">
              <span className="text-[13.975px] font-semibold ">Chile</span>
            </div>
          </div>
          <div className="flex flex-wrap mb-[32.5px] ml-[-9.75px] mr-[-9.75px]">
            <label className="block basis-auto flex-grow-0 flex-shrink-0 mt-0 max-w-[100%] pl-[9.75px] pr-[9.75px] w-[376px] text-gray-500 text-[13px] font-medium">
              Ciudad
            </label>
            <div className="max-w-[100%] pl-[9.75px] pr-[9.75px] w-[752px]">
              <span className="text-[13.975px] font-semibold ">Santiago</span>
            </div>
          </div>
          <div className="flex p-[19.5px] rounded-md border-dashed border border-yellow-500 bg-yellow-200/10">
            <BsPatchExclamationFill className="relative text-yellow-400 text-[35.75px] mr-[13px]" />
            <div className="flex flex-grow justify-between items-center ">
              <div className=" font-medium">
                <h4 className="text-white mb-[6.5px] font-semibold text-[16.25px]">
                  We need your attention!
                </h4>
                <div className=" text-gray-400 text-[13.975px]">
                  Your payment was declined. To start using tools, please
                  <a
                    className="text-blue-500 font-semibold hover:text-blue-400 transition-[.2s] pl-1 "
                    href=""
                  >
                    Add Payment Methot
                  </a>
                  <span>.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Categorias  */}

      <div className=" flex flex-wrap ml-[-16.25px] mr-[-16.25px] mt-[-32.5px] min-w-0 ">
        <div className=" block basis-auto flex-grow-0 flex-shrink-0 my-[32.5px] max-w-[100%] px-[16.25px] w-[801px]">
          <div className="bg-secondary-100 relative flex flex-col h-[467.094px] rounded-xl">
            <div className="flex flex-nowrap justify-between mb-0 min-h-[70px] pb-0 px-[29.25px] pt-[16.25px]">
              <h3 className="items-start flex flex-col justify-center my-[6.5px] mr-[6.5px] ml-0">
                <span className="flex-wrap my-0 ml-0 mr-[9.75px] text-[16.575px] font-semibold ">
                  Top Categorias
                </span>
                <span className="text-gray-500 pt-[8px] text-[13.975px] font-medium">
                  8k de Reportes
                </span>
              </h3>
              <div>Qui tiene que expresarse el ChartComponent</div>
            </div>
            <div className="basis-auto flex-grow flex-shrink pb-[26px] pl-[19.5px] pr-[29.25px] pt-[16.25px]">
              <div className="min-h-0">
                <div className="relative h-[350px] w-[718px]"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-secondary-100 basis-auto flex-grow-0 flex-shrink-0 my-[32.5px] max-w-[100%] px-[16.25px] w-[495px] rounded-xl">
          <div className="relative flex flex-col h-[477.422] min-w-0">
            <div className="flex basis-auto flex-col flex-grow flex-shrink justify-center py-[26px] px-[29.25px]">
              <div className="mb-[6.5px]">
                <h1 className="mb-[6.5px] mt-0 font-medium text-[22.75px] text-center text-gray-400">
                  Has probado
                  <br /> la nueva
                  <span className="text-gray-300 font-bold ml-2">
                    Aplicacion Movil?
                  </span>
                </h1>
                <div></div>
              </div>
              <div className="block py-[32.5px] text-center">
                <img
                  src={app}
                  className=" h-[200px] overflow-x-clip overflow-y-clip align-middle pl-[85px] pr-[85px]"
                />
              </div>
            </div>
            <div className="block mt-[3.25px] text-center">
              <a
                href="#"
                className="inline-block bg-blue-500 hover:bg-blue-500/70 cursor-pointer rounded-md mr-[6.5px] py-[8.15px] pl-[14px] pr-[14px] font-medium text-center text-[12.35px] transition-colors"
              >
                Try now
              </a>
              <a
                href=""
                className="inline-block bg-secondary-900 hover:bg-secondary-900/70 cursor-pointer rounded-md py-[8.15px] pl-[14px] pr-[14px] font-medium text-center text-[13.35px] transition-colors"
              >
                {" "}
                Learn more{" "}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Producto */}

      <div className="flex flex-wrap ml-[-16.25px] mr-[-16.25px] mt-[-32.5px] mb-4">
        <div className=" block basis-auto flex-grow-0 flex-shrink-0 mt-[32.5px] max-w-[100%] px-[16.25px] w-[450.828px]">
          <div className="bg-secondary-100 relative flex flex-col h-[592.438px] min-w-0 rounded-xl">
            <div className="flex flex-wrap items-stretch justify-between mb-0 min-h-[70px] pb-[0px] px-[29.25px] pt-[22.75px]">
              <h3 className="items-start flex flex-col justify-center my-[6.5px] mr-[6.5px] ml-[0px] font-medium">
                <span className="flex-wrap my-0 mr-[9.75px] ml-[0px] text-[16.575px] font-semibold text-white text-start">
                  Sensores Asignados
                </span>
                <span className="mt-[3.25px] font-medium text-[13.975px] text-gray-500">
                  6 sensores activos
                </span>
              </h3>
              <div className="flex flex-wrap mb-[10.5px] mt-[10.5px] ml-0 mr-0 ">
                <a className="flex items-center px-[14px] py-[8px] text-[12.35px] font-medium box-border bg-secondary-900/60 rounded-lg hover:bg-secondary-900/25 transition-colors">
                  Ver Todo
                </a>
              </div>
            </div>

            {/* BODY */}

            <div className="basis-auto flex-grow flex-shrink px-[29.25px] py-[26px]">
              <div className="relative h-[415px] mr-[-19.5px] overflow-y-scroll pr-[19.5px]">
                <div className="relative flex flex-col h-[592.438px] min-w-0">
                  <div className="block border-dotted border-2 mb-[19.5px] py-[9.75px] px-[22.75px] border-gray-500">
                    <div className="flex items-center justify-between mb-[9.75px]">
                      <div className="flex mr-[9.37px]">
                        <img
                          src={sensor}
                          className="mr-[5.37px] ml[-3.25px] overflow-x-clip overflow-y-clip w-[50px] h-[50px]"
                        />
                        <span className="block text-[13px] font-semibol ">
                          Sensor de Presión Diferencial
                        </span>
                      </div>
                      <div>
                        <button className="bg-secondary-900 cursor-pointer rounded-md inline-flex items-center h-[30px] w-[34px] justify-center py-0 pl-0 pr-0 ">
                          <HiDotsHorizontal className="flex " />
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-[13px] font-semibold justify-center">
                        Tipo:
                        <a className="text-gray-400 ml-1">
                          Honeywell ASDX Series
                        </a>
                      </span>
                      <span className="flex items-center px-[6.5px] py-[4.225px] text-[11.05px] font-semibold box-border bg-green-600/20 text-green-500 rounded-lg ">
                        Funcionando
                      </span>
                    </div>
                  </div>
                  <div className="block border-dotted border-2 mb-[19.5px] py-[9.75px] px-[22.75px] border-gray-500">
                    <div className="flex items-center justify-between mb-[9.75px]">
                      <div className="flex mr-[9.37px]">
                        <img
                          src={sensor}
                          className="mr-[5.37px] ml[-3.25px] overflow-x-clip overflow-y-clip w-[50px] h-[50px]"
                        />
                        <span className="block text-[13px] font-semibol ">
                          Transmisor de Presión Absoluta
                        </span>
                      </div>
                      <div>
                        <button className="bg-secondary-900 cursor-pointer rounded-md inline-flex items-center h-[30px] w-[34px] justify-center py-0 pl-0 pr-0 ">
                          <HiDotsHorizontal className="flex " />
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-[13px] font-semibold justify-center">
                        Tipo:
                        <a className="text-gray-400 ml-1">
                          Rosemount 3051S Series
                        </a>
                      </span>
                      <span className="flex items-center px-[6.5px] py-[4.225px] text-[11.05px] font-semibold box-border bg-green-600/20 text-green-500 rounded-lg ">
                        Funcionando
                      </span>
                    </div>
                  </div>
                  <div className="block border-dotted border-2 mb-[19.5px] py-[9.75px] px-[22.75px] border-gray-500">
                    <div className="flex items-center justify-between mb-[9.75px]">
                      <div className="flex mr-[9.37px]">
                        <img
                          src={sensor}
                          className="mr-[5.37px] ml[-3.25px] overflow-x-clip overflow-y-clip w-[50px] h-[50px]"
                        />
                        <span className="block text-[13px] font-semibol ">
                          Transductor de Presión Piezorresistivo
                        </span>
                      </div>
                      <div>
                        <button className="bg-secondary-900 cursor-pointer rounded-md inline-flex items-center h-[30px] w-[34px] justify-center py-0 pl-0 pr-0 ">
                          <HiDotsHorizontal className="flex " />
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-[13px] font-semibold justify-center">
                        Tipo:
                        <a className="text-gray-400 ml-1">BMP180</a>
                      </span>
                      <span className="flex items-center px-[6.5px] py-[4.225px] text-[11.05px] font-semibold box-border bg-green-600/20 text-green-500 rounded-lg ">
                        Funcionando
                      </span>
                    </div>
                  </div>
                  <div className="block border-dotted border-2 mb-[19.5px] py-[9.75px] px-[22.75px] border-gray-500">
                    <div className="flex items-center justify-between mb-[9.75px]">
                      <div className="flex mr-[9.37px]">
                        <img
                          src={sensor}
                          className="mr-[5.37px] ml[-3.25px] overflow-x-clip overflow-y-clip w-[50px] h-[50px]"
                        />
                        <span className="block text-[13px] font-semibol ">
                          Sensor de Presión de Silicona
                        </span>
                      </div>
                      <div>
                        <button className="bg-secondary-900 cursor-pointer rounded-md inline-flex items-center h-[30px] w-[34px] justify-center py-0 pl-0 pr-0 ">
                          <HiDotsHorizontal className="flex " />
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-[13px] font-semibold justify-center">
                        Tipo:
                        <a className="text-gray-400 ml-1">
                          Freescale MPX Series
                        </a>
                      </span>
                      <span className="flex items-center px-[6.5px] py-[4.225px] text-[11.05px] font-semibold box-border bg-green-600/20 text-green-500 rounded-lg ">
                        Funcionando
                      </span>
                    </div>
                  </div>
                  <div className="block border-dotted border-2 mb-[19.5px] py-[9.75px] px-[22.75px] border-gray-500">
                    <div className="flex items-center justify-between mb-[9.75px]">
                      <div className="flex mr-[9.37px]">
                        <img
                          src={sensor}
                          className="mr-[5.37px] ml[-3.25px] overflow-x-clip overflow-y-clip w-[50px] h-[50px]"
                        />
                        <span className="block text-[13px] font-semibol ">
                          Transmisor de Presión Submarino
                        </span>
                      </div>
                      <div>
                        <button className="bg-secondary-900 cursor-pointer rounded-md inline-flex items-center h-[30px] w-[34px] justify-center py-0 pl-0 pr-0 ">
                          <HiDotsHorizontal className="flex " />
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-[13px] font-semibold justify-center">
                        Tipo:
                        <a className="text-gray-400 ml-1">Keller Series 30</a>
                      </span>
                      <span className="flex items-center px-[6.5px] py-[4.225px] text-[11.05px] font-semibold box-border bg-green-600/20 text-green-500 rounded-lg ">
                        Funcionando
                      </span>
                    </div>
                  </div>
                  <div className="block border-dotted border-2 mb-[19.5px] py-[9.75px] px-[22.75px] border-gray-500">
                    <div className="flex items-center justify-between mb-[9.75px]">
                      <div className="flex mr-[9.37px]">
                        <img
                          src={sensor}
                          className="mr-[5.37px] ml[-3.25px] overflow-x-clip overflow-y-clip w-[50px] h-[50px]"
                        />
                        <span className="block text-[13px] font-semibol ">
                          Sensor de Presión Capacitivo
                        </span>
                      </div>
                      <div>
                        <button className="bg-secondary-900 cursor-pointer rounded-md inline-flex items-center h-[30px] w-[34px] justify-center py-0 pl-0 pr-0 ">
                          <HiDotsHorizontal className="flex " />
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-[13px] font-semibold justify-center">
                        Tipo:
                        <a className="text-gray-400 ml-1">Omega PX309 Series</a>
                      </span>
                      <span className="flex items-center px-[6.5px] py-[4.225px] text-[11.05px] font-semibold box-border bg-green-600/20 text-green-500 rounded-lg ">
                        Funcionando
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* BODY */}
          </div>
        </div>
        <div className="block basis-auto flex-grow-0 flex-shrink-0 mt-[32.5px] max-w-[100%] px-[16.25px] w-[861.656px]">
          <div className="bg-secondary-100 relative flex flex-col h-[592.439px] min-w-0 rounded-xl">
            <div className="flex flex-wrap items-stretch justify-between mb-0  pb-0 pt-[22.75px] px-[29.25px]">
              <h3 className="items-start flex flex-col justify-center my-[6.5px] mr-[6.5px] ml-[0px]">
                <span className="flex-wrap my-0 mr-[9.75px] ml-0 text-[16px] font-semibold text-white">
                  Reportes
                </span>
                <span className="mt-[3.25px] text-[13px] font-medium text-gray-500">
                  Total de Reportes: 200
                </span>
              </h3>
              <div className="flex flex-wrap items-center py-[6.5px] px-0">
                <div className="flex flex-wrap items-center justify-between">
                  <div className="items-center flex text-[13px] pr-2">
                    <div className="mr-[6.5px] text-gray-500">Categorias</div>
                    <select
                      name="categoria"
                      id="categoria"
                      className="w-full py-2 px-4 outline-none bg-secondary-900 appearance-none bg-transparent"
                    >
                      <option value="">Todas</option>
                      <option value="categoria1">Categoría 1</option>
                      <option value="categoria2">Categoría 2</option>
                      {/* Agrega más opciones según tus necesidades */}
                    </select>
                  </div>
                  <div className="items-center flex text-[13px]">
                    <div className="mr-[6.5px] text-gray-500">Estados</div>
                    <select
                      name="estado"
                      id="estado"
                      className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 appearance-none bg-transparent "
                    >
                      <option value="" className="bg-secondary-900">
                        Todos
                      </option>
                      <option value="Funcionando" className="bg-secondary-900">
                        Funcionando
                      </option>
                      <option
                        value="En reparación"
                        className="bg-secondary-900"
                      >
                        En reparación
                      </option>
                      <option value="Suspendido" className="bg-secondary-900">
                        Suspendido
                      </option>
                    </select>
                  </div>
                  <a className="flex items-center px-[14px] py-[8.15px] text-[12.35px] font-medium box-border bg-secondary-900/60 rounded-lg hover:bg-secondary-900/25 transition-colors">
                    Ver Todo
                  </a>
                </div>
              </div>
            </div>
            <div className="basis-auto flex-grow flex-shrink py-[26px] px-[29.25px] ">
              <div className="relative ">
                <div className="relative overflow-x-auto overflow-y-auto h-[455px] mr-[-19.5px] pr-[19.5px]">
                  <table className="my-0 mx-0 max-w-none  ">
                    <thead className="text-start border-b-[1px] border-dashed border-gray-500 ">
                      <tr className="h-[39.0156px] min-h-0 px-0 text-left">
                        <th className="h-[18.5156px] min-h-0 min-w-[150px] py-[9.75px] px-0 relative w-[150px] text-[12.35px] font-semibold text-gray-500 hover:text-gray-400/80 transition-colors ">
                          NOMBRE
                        </th>
                        <th className="h-[18.5156px] min-h-0 min-w-[150px] py-[9.75px] px-0 relative w-[150px] text-[12.35px] font-semibold text-gray-500 hover:text-gray-400/80 transition-colors ">
                          IDENTIFICADOR
                        </th>
                        <th className="h-[18.5156px] min-h-0 min-w-[150px] py-[9.75px] px-0 relative w-[150px] text-[12.35px] font-semibold text-gray-500 hover:text-gray-400/80 transition-colors ">
                          FECHA/HORA DE REPORTE
                        </th>
                        <th className="h-[18.5156px] min-h-0 min-w-[150px] py-[9.75px] px-0 relative w-[150px] text-[12.35px] font-semibold text-gray-500 hover:text-gray-400/80 transition-colors ">
                          BATERIA (%)
                        </th>
                        <th className="h-[18.5156px] min-h-0 min-w-[150px] py-[9.75px] px-0 relative w-[150px] text-[12.35px] font-semibold text-gray-500 hover:text-gray-400/80 transition-colors ">
                          ESTADO
                        </th>
                      </tr>
                    </thead>
                    <tbody></tbody>
                    <tbody>
                      <tr className="h-[52.3438px] min-h-0 pl-0 border-b-[1px] border-dashed border-gray-500">
                        <td className="h-[31.8434px] min-h-0 py-[9.75px] pr-[9.75px] pl-0 text-[12px] font-semibold">
                          <a href="">Sensor: [Honeywell ASDX Series]</a>
                        </td>
                        <td className="h-[31.8434px] min-h-0 py-[9.75px] pr-[9.75px] pl-0 text-[12px] font-semibold text-gray-500 hover:text-gray-300/70 transition-colors">
                          ID_PD_001
                        </td>
                        <td className="h-[31.8434px] min-h-0 py-[9.75px] pr-[9.75px] pl-0 text-[12px] font-semibold text-gray-500 hover:text-gray-300/70 transition-colors">
                          11/05/2022 13:34 PM
                        </td>
                        <td className="h-[31.8434px] min-h-0 py-[9.75px] pr-[9.75px] pl-0 text-[12px] font-semibold text-gray-500 hover:text-gray-300/70 transition-colors">
                          60%
                        </td>
                        <td className="h-[31.8434px] min-h-0 py-[9.75px] pr-[9.75px] pl-0">
                          <span className="items-center inline-flex px-[14px] py-[8.15px] text-[12px] font-semibold rounded-lg  bg-green-500 text-gray-600">
                            Funcionando
                          </span>
                        </td>
                      </tr>
                      <tr className="h-[52.3438px] min-h-0 pl-0 border-b-[1px] border-dashed border-gray-500">
                        <td className="h-[31.8434px] min-h-0 py-[9.75px] pr-[9.75px] pl-0 text-[12px] font-semibold">
                          <a href="">Sensor: [Honeywell ASDX Series]</a>
                        </td>
                        <td className="h-[31.8434px] min-h-0 py-[9.75px] pr-[9.75px] pl-0 text-[12px] font-semibold text-gray-500 hover:text-gray-300/70 transition-colors">
                          ID_PD_001
                        </td>
                        <td className="h-[31.8434px] min-h-0 py-[9.75px] pr-[9.75px] pl-0 text-[12px] font-semibold text-gray-500 hover:text-gray-300/70 transition-colors">
                          11/05/2022 8:00 AM
                        </td>
                        <td className="h-[31.8434px] min-h-0 py-[9.75px] pr-[9.75px] pl-0 text-[12px] font-semibold text-gray-500 hover:text-gray-300/70 transition-colors">
                          40%
                        </td>
                        <td className="h-[31.8434px] min-h-0 py-[9.75px] pr-[9.75px] pl-0">
                          <span className="items-center inline-flex px-[14px] py-[8.15px] text-[12px] font-semibold rounded-lg  bg-green-500 text-gray-600">
                            Funcionando
                          </span>
                        </td>
                        <td></td>
                      </tr>
                      <tr className="h-[52.3438px] min-h-0 pl-0 border-b-[1px] border-dashed border-gray-500">
                        <td className="h-[31.8434px] min-h-0 py-[9.75px] pr-[9.75px] pl-0 text-[12px] font-semibold">
                          <a href="">Sensor: [Rosemount 3051S Series]</a>
                        </td>
                        <td className="h-[31.8434px] min-h-0 py-[9.75px] pr-[9.75px] pl-0 text-[12px] font-semibold text-gray-500 hover:text-gray-300/70 transition-colors">
                          ID_PA_002
                        </td>
                        <td className="h-[31.8434px] min-h-0 py-[9.75px] pr-[9.75px] pl-0 text-[12px] font-semibold text-gray-500 hover:text-gray-300/70 transition-colors">
                          08/05/2022 15:40 PM
                        </td>
                        <td className="h-[31.8434px] min-h-0 py-[9.75px] pr-[9.75px] pl-0 text-[12px] font-semibold text-gray-500 hover:text-gray-300/70 transition-colors">
                          10%
                        </td>
                        <td className="h-[31.8434px] min-h-0 py-[9.75px] pr-[9.75px] pl-0">
                          <span className="items-center inline-flex px-[14px] py-[8.15px] text-[12px] font-semibold rounded-lg  bg-yellow-500 text-gray-600 ">
                            En Reparacion
                          </span>
                        </td>
                        <td></td>
                      </tr>
                      <tr className="h-[52.3438px] min-h-0 pl-0 border-b-[1px] border-dashed border-gray-500">
                        <td className="h-[31.8434px] min-h-0 py-[9.75px] pr-[9.75px] pl-0 text-[12px] font-semibold">
                          <a href="">Sensor [Modelo]</a>
                        </td>
                        <td className="h-[31.8434px] min-h-0 py-[9.75px] pr-[9.75px] pl-0 text-[12px] font-semibold text-gray-500 hover:text-gray-300/70 transition-colors">
                          ID del Sensor
                        </td>
                        <td className="h-[31.8434px] min-h-0 py-[9.75px] pr-[9.75px] pl-0 text-[12px] font-semibold text-gray-500 hover:text-gray-300/70 transition-colors">
                          Feche Instalacion
                        </td>
                        <td className="h-[31.8434px] min-h-0 py-[9.75px] pr-[9.75px] pl-0 text-[12px] font-semibold text-gray-500 hover:text-gray-300/70 transition-colors">
                          Bateria
                        </td>
                        <td className="h-[31.8434px] min-h-0 py-[9.75px] pr-[9.75px] pl-0">
                          <span className="items-center inline-flex px-[14px] py-[8.15px] text-[12px] font-semibold rounded-lg  bg-red-500 text-gray-600">
                            Suspendido
                          </span>
                        </td>
                        <td></td>
                      </tr>
                      <tr className="h-[52.3438px] min-h-0 pl-0 border-b-[1px] border-dashed border-gray-500">
                        <td className="h-[31.8434px] min-h-0 py-[9.75px] pr-[9.75px] pl-0 text-[12px] font-semibold">
                          <a href="">Sensor [Modelo]</a>
                        </td>
                        <td className="h-[31.8434px] min-h-0 py-[9.75px] pr-[9.75px] pl-0 text-[12px] font-semibold text-gray-500 hover:text-gray-300/70 transition-colors">
                          ID del Sensor
                        </td>
                        <td className="h-[31.8434px] min-h-0 py-[9.75px] pr-[9.75px] pl-0 text-[12px] font-semibold text-gray-500 hover:text-gray-300/70 transition-colors">
                          Feche Instalacion
                        </td>
                        <td className="h-[31.8434px] min-h-0 py-[9.75px] pr-[9.75px] pl-0 text-[12px] font-semibold text-gray-500 hover:text-gray-300/70 transition-colors">
                          Bateria
                        </td>
                        <td className="h-[31.8434px] min-h-0 py-[9.75px] pr-[9.75px] pl-0">
                          <span className="items-center inline-flex px-[14px] py-[8.15px] text-[12px] font-semibold rounded-lg  bg-green-500 text-gray-600">
                            Funcionando
                          </span>
                        </td>
                        <td></td>
                      </tr>
                      <tr className="h-[52.3438px] min-h-0 pl-0 border-b-[1px] border-dashed border-gray-500">
                        <td className="h-[31.8434px] min-h-0 py-[9.75px] pr-[9.75px] pl-0 text-[12px] font-semibold">
                          <a href="">Sensor [Modelo]</a>
                        </td>
                        <td className="h-[31.8434px] min-h-0 py-[9.75px] pr-[9.75px] pl-0 text-[12px] font-semibold text-gray-500 hover:text-gray-300/70 transition-colors">
                          ID del Sensor
                        </td>
                        <td className="h-[31.8434px] min-h-0 py-[9.75px] pr-[9.75px] pl-0 text-[12px] font-semibold text-gray-500 hover:text-gray-300/70 transition-colors">
                          Feche Instalacion
                        </td>
                        <td className="h-[31.8434px] min-h-0 py-[9.75px] pr-[9.75px] pl-0 text-[12px] font-semibold text-gray-500 hover:text-gray-300/70 transition-colors">
                          Bateria
                        </td>
                        <td className="h-[31.8434px] min-h-0 py-[9.75px] pr-[9.75px] pl-0">
                          <span className="items-center inline-flex px-[14px] py-[8.15px] text-[12px] font-semibold rounded-lg  bg-yellow-500 text-gray-600">
                            En Reparacion
                          </span>
                        </td>
                        <td></td>
                      </tr>
                      <tr className="h-[52.3438px] min-h-0 pl-0 border-b-[1px] border-dashed border-gray-500">
                        <td className="h-[31.8434px] min-h-0 py-[9.75px] pr-[9.75px] pl-0 text-[12px] font-semibold">
                          <a href="">Sensor [Modelo]</a>
                        </td>
                        <td className="h-[31.8434px] min-h-0 py-[9.75px] pr-[9.75px] pl-0 text-[12px] font-semibold text-gray-500 hover:text-gray-300/70 transition-colors">
                          ID del Sensor
                        </td>
                        <td className="h-[31.8434px] min-h-0 py-[9.75px] pr-[9.75px] pl-0 text-[12px] font-semibold text-gray-500 hover:text-gray-300/70 transition-colors">
                          Feche Instalacion
                        </td>
                        <td className="h-[31.8434px] min-h-0 py-[9.75px] pr-[9.75px] pl-0 text-[12px] font-semibold text-gray-500 hover:text-gray-300/70 transition-colors">
                          Bateria
                        </td>
                        <td className="h-[31.8434px] min-h-0 py-[9.75px] pr-[9.75px] pl-0">
                          <span className="items-center inline-flex px-[14px] py-[8.15px] text-[12px] font-semibold rounded-lg  bg-yellow-500 text-gray-600">
                            En Reparacion
                          </span>
                        </td>
                        <td></td>
                      </tr>
                      <tr className="h-[52.3438px] min-h-0 pl-0 border-b-[1px] border-dashed border-gray-500">
                        <td className="h-[31.8434px] min-h-0 py-[9.75px] pr-[9.75px] pl-0 text-[12px] font-semibold">
                          <a href="">Sensor [Modelo]</a>
                        </td>
                        <td className="h-[31.8434px] min-h-0 py-[9.75px] pr-[9.75px] pl-0 text-[12px] font-semibold text-gray-500 hover:text-gray-300/70 transition-colors">
                          ID del Sensor
                        </td>
                        <td className="h-[31.8434px] min-h-0 py-[9.75px] pr-[9.75px] pl-0 text-[12px] font-semibold text-gray-500 hover:text-gray-300/70 transition-colors">
                          Feche Instalacion
                        </td>
                        <td className="h-[31.8434px] min-h-0 py-[9.75px] pr-[9.75px] pl-0 text-[12px] font-semibold text-gray-500 hover:text-gray-300/70 transition-colors">
                          Bateria
                        </td>
                        <td className="h-[31.8434px] min-h-0 py-[9.75px] pr-[9.75px] pl-0">
                          <span className="items-center inline-flex px-[14px] py-[8.15px] text-[12px] font-semibold rounded-lg  bg-green-500 text-gray-600">
                            Funcionando
                          </span>
                        </td>
                        <td></td>
                      </tr>
                      <tr className="h-[52.3438px] min-h-0 pl-0 border-b-[1px] border-dashed border-gray-500">
                        <td className="h-[31.8434px] min-h-0 py-[9.75px] pr-[9.75px] pl-0 text-[12px] font-semibold">
                          <a href="">Sensor [Modelo]</a>
                        </td>
                        <td className="h-[31.8434px] min-h-0 py-[9.75px] pr-[9.75px] pl-0 text-[12px] font-semibold text-gray-500 hover:text-gray-300/70 transition-colors">
                          ID del Sensor
                        </td>
                        <td className="h-[31.8434px] min-h-0 py-[9.75px] pr-[9.75px] pl-0 text-[12px] font-semibold text-gray-500 hover:text-gray-300/70 transition-colors">
                          Feche Instalacion
                        </td>
                        <td className="h-[31.8434px] min-h-0 py-[9.75px] pr-[9.75px] pl-0 text-[12px] font-semibold text-gray-500 hover:text-gray-300/70 transition-colors">
                          Bateria
                        </td>
                        <td className="h-[31.8434px] min-h-0 py-[9.75px] pr-[9.75px] pl-0">
                          <span className="items-center inline-flex px-[14px] py-[8.15px] text-[12px] font-semibold rounded-lg  bg-yellow-500 text-gray-600">
                            En Reparacion
                          </span>
                        </td>
                        <td></td>
                      </tr>
                      <tr className="h-[52.3438px] min-h-0 pl-0 border-b-[1px] border-dashed border-gray-500">
                        <td className="h-[31.8434px] min-h-0 py-[9.75px] pr-[9.75px] pl-0 text-[12px] font-semibold">
                          <a href="">Sensor [Modelo]</a>
                        </td>
                        <td className="h-[31.8434px] min-h-0 py-[9.75px] pr-[9.75px] pl-0 text-[12px] font-semibold text-gray-500 hover:text-gray-300/70 transition-colors">
                          ID del Sensor
                        </td>
                        <td className="h-[31.8434px] min-h-0 py-[9.75px] pr-[9.75px] pl-0 text-[12px] font-semibold text-gray-500 hover:text-gray-300/70 transition-colors">
                          Feche Instalacion
                        </td>
                        <td className="h-[31.8434px] min-h-0 py-[9.75px] pr-[9.75px] pl-0 text-[12px] font-semibold text-gray-500 hover:text-gray-300/70 transition-colors">
                          Bateria
                        </td>
                        <td className="h-[31.8434px] min-h-0 py-[9.75px] pr-[9.75px] pl-0">
                          <span className="items-center inline-flex px-[14px] py-[8.15px] text-[12px] font-semibold rounded-lg  bg-red-500 text-gray-600">
                            Suspendido
                          </span>
                        </td>
                        <td></td>
                      </tr>
                      <tr className="h-[52.3438px] min-h-0 pl-0">
                        <td className="h-[31.8434px] min-h-0 py-[9.75px] pr-[9.75px] pl-0 text-[12px] font-semibold">
                          <a href="">Sensor [Modelo]</a>
                        </td>
                        <td className="h-[31.8434px] min-h-0 py-[9.75px] pr-[9.75px] pl-0 text-[12px] font-semibold text-gray-500 hover:text-gray-300/70 transition-colors">
                          ID del Sensor
                        </td>
                        <td className="h-[31.8434px] min-h-0 py-[9.75px] pr-[9.75px] pl-0 text-[12px] font-semibold text-gray-500 hover:text-gray-300/70 transition-colors">
                          Feche Instalacion
                        </td>
                        <td className="h-[31.8434px] min-h-0 py-[9.75px] pr-[9.75px] pl-0 text-[12px] font-semibold text-gray-500 hover:text-gray-300/70 transition-colors">
                          Bateria
                        </td>
                        <td className="h-[31.8434px] min-h-0 py-[9.75px] pr-[9.75px] pl-0">
                          <span className="items-center inline-flex px-[14px] py-[8.15px] text-[12px] font-semibold rounded-lg  bg-red-500 text-gray-600">
                            Suspendido
                          </span>
                        </td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="flex flex-wrap mx-[-9.75px] mt-[0px]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
