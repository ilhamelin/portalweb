import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// Biblioteca Menu
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

// ICONS

// ICONS REACT}
import { MdOutlineSensors } from "react-icons/md";
import { RiEdit2Line } from "react-icons/ri";
import { GoVerified } from "react-icons/go";
import {
  RiAccountCircleFill,
  RiArrowUpLine,
  RiArrowDownLine,
} from "react-icons/ri";
import { HiLocationMarker, HiDotsHorizontal } from "react-icons/hi";
import { IoMdMail } from "react-icons/io";
import { BsPatchExclamationFill, BsPatchExclamation } from "react-icons/bs";

const Security = () => {
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
    </>
  );
};

export default Security;
