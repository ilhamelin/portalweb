import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

// ICONS REACT}

import { GoVerified } from "react-icons/go";
import {
  RiAccountCircleFill,
  RiArrowUpLine,
  RiArrowDownLine,
} from "react-icons/ri";
import { HiLocationMarker, HiDotsHorizontal } from "react-icons/hi";
import { IoMdMail, IoMdClose } from "react-icons/io";
import { BsPatchExclamationFill } from "react-icons/bs";

const Billing = () => {
  // Logica Guardado de Imagen

  const [profileImage, setProfileImage] = useState("");

  useEffect(() => {
    const savedFormData = localStorage.getItem("formData");
    if (savedFormData) {
      const parsedFormData = JSON.parse(savedFormData);
      setProfileImage(parsedFormData.profileImage);
    }
  }, []);

  // Logica Formulario Tarjeta de Credito

  const [formData, setFormData] = useState({
    nombre: "",
    numeroTarjeta: "",
    Mes: "",
    Año: "",
    cvv: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Lógica específica para el número de tarjeta
    let updatedValue = value;

    if (name === "numeroTarjeta") {
      updatedValue = updatedValue.replace(/\D/g, ""); // Elimina caracteres no numéricos
      updatedValue = updatedValue.slice(0, 16); // Limita a 16 caracteres
    }

    setFormData((prevData) => ({ ...prevData, [name]: updatedValue }));
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
                className="flex items-center mr-[32.5px] py-[16.25px] text-left border-b-2 border-primary hover:border-primary transition-colors active:text-primary"
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

      {/* Estado de Pago */}

      <div className="flex flex-col h-[328px] mb-[32.6px] relative bg-secondary-100 rounded-lg">
        <div className="basis-auto flex-grow flex-shrink px-[26px] py-[29.25px] ">
          <div className="flex p-[19.5px] mb-[39px] rounded-md border-dashed border border-yellow-500 bg-yellow-200/5">
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
          <div className="flex flex-wrap ml-[-9.75px] mr-[-9.75px] mt-0">
            <div className="basis-auto flex-grow-0 flex-shrink-0 mt-0 mx-w-[100%] px-[9.75px] w-[700px]">
              <h3 className="mb-[9.5px] mt-0 text-[17.55px] font-semibold text-white">
                Activo hasta el 9 de Diciembre de 2023
              </h3>
              <p className="mb-[45px] text-[13px] mt-0 text-grisOscuroV2custom">
                Le enviaremos una notificacion cuando expire
              </p>
              <div className="mb-[6.5px]">
                <span className="mr-[3.25px] text-[14.99px] font-semibold text-grisCustom">
                  $29.99
                </span>
                <span className="text-[14.99px] font-medium text-grisCustom2">
                  Por Mes
                </span>
              </div>
              <div className="text-[13px] font-medium text-grisCustom2">
                Paquete Pro extendido. Hasta 100 agentes y 25 proyectos
              </div>
            </div>
            <div className="basis-auto flex-grow-0 flex-shrink-0 mt-0 max-w-full px-[9.75px] w-[500px]">
              <div className="flex mb-[9.75px] ">
                <span className="flex-grow text-[14.95px] font-semibold text-grisCustom">
                  Usuarios
                </span>
                <span className="text-[14.95px] font-semibold text-grisCustom">
                  86 de 100 Usuarios
                </span>
              </div>
              <div className="flex h-[8px] mb-[6.5px] overflow-x-hidden overflow-y-hidden bg-AzulOscuro rounded-md">
                <div
                  role="progressbar"
                  style={{ width: "86%" }}
                  aria-valuenow="86"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  className="flex flex-col justify-center overflow-x-hidden overflow-y-hidden w-[413.219px] bg-Azul"
                ></div>
              </div>
              <div className="mb-[32.5px] text-[13.975px] font-medium text-grisCustom2">
                Quedan 14 usuarios hasta que su plan requiera una actualización
              </div>
              <div className="flex justify-end pb-0 px-0">
                <a
                  href="#"
                  className="mr-[6.5px] px-[20.5px] py-[11.075px] bg-gray-500/10 rounded-lg"
                >
                  Cancelar Subscripcion
                </a>
                <button className="mx-0 my-0 px-[20.5px] py-[11.075px] bg-Azul text-white rounded-lg hover:bg-Azul/80 transition-colors">
                  Plan de Mejora
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metodo de Pago */}
      <div className="flex flex-col h-[466.047px] mb-[32.5px] min-w-0 relative bg-secondary-100 rounded-lg">
        <div className="items-stretch flex flex-wrap justify-between mb-0 min-h-[70px] py-[0px] px-[29.25px] border-gray-700/60 border-b-[1px]">
          <div className="items-center flex my-[6.5px] ml-0 mr-[6.5px] ">
            <h3 className="mb-0 mt-0 text-[17.55px] font-medium text-white">
              Resumen de seguridad
            </h3>
          </div>
          <div className="items-stretch flex flex-wrap mx-0 my-0 ">
            <ul className="items-stretch flex flex-wrap mb-0 mt-0 pl-0 pb-0 pt-0">
              <li className="items-center flex mr-[13px] py-[6.5px] px-0 text-grisOscuroV2custom text-[14.95px] font-semibold hover:border-b-2 hover:border-blue-500 hover:text-blue-500  ">
                Credir / Debit Card
              </li>

              <li className="items-center flex ml-[13px] py-[6.5px] px-0 text-grisOscuroV2custom text-[14.95px] font-semibold hover:border-b-2 hover:border-blue-500 hover:text-blue-500  ">
                PayPal
              </li>
            </ul>
          </div>
        </div>
        <div className="basis-auto flex-grow flex-shrink px-[29.25px] py-[26px]">
          <div className="block">
            <h3 className="mb-[16.25px] mt-0 text-[17.55px] font-semibold">
              Mis Tarjetas
            </h3>
            <div className="flex flex-wrap mx-[-14.625px] mt-[-19.5px]">
              <div className="basis-auto flex-grow-0 flex-shrink-0 mt-[19.5px] max-w-full px-[14.625px] w-[604.875px] ">
                <div className="items-center flex flex-row flex-wrap h-[142.625px] justify-between min-w-0 px-[19.5px] py-[19.5px] relative border-dashed border-[1px] border-grisOscuroCustom rounded-xl">
                  <div className="flex flex-col pb-[6.5px] pt-[6.5px]">
                    <div className="items-center flex mb-[16.25px] text-[16.25px] font-semibold ">
                      Marcus Morris
                    </div>
                    <div className="flex items-center">
                      <img
                        src="https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/card-logos/visa.svg"
                        className="mr-[13px] overflow-x-clip overflow-y-clip"
                      />
                      <div className="block">
                        <div className="text-[16.25px] font-semibold text-white">
                          Visa **** 1679
                        </div>
                        <div className="text-[13.975px] font-medium text-grisCustom2">
                          La tarjeta Expira el 03/24
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="items-center flex pb-[6.5px] pt-[6.5px]">
                    <button className="items-start my-0 ml-0 mr-[9.75px] py-[8.15px] px-[14px] text-[12.35px] font-medium bg-secondary-900 rounded-lg hover:bg-secondary-900/70 transition-colors text-grisCustom2">
                      Borrar
                    </button>
                    <button className="items-start my-0 ml-0 mr-[9.75px] py-[8.15px] px-[14px] text-[12.35px] font-medium bg-secondary-900 rounded-lg hover:bg-secondary-900/70 transition-colors text-grisCustom2">
                      Editar
                    </button>
                  </div>
                </div>
              </div>
              <div className="basis-auto flex-grow-0 flex-shrink-0 mt-[19.5px] max-w-full px-[14.625px] w-[604.875px] ">
                <div className="items-center flex flex-row flex-wrap h-[142.625px] justify-between min-w-0 px-[19.5px] py-[19.5px] relative border-dashed border-[1px] border-grisOscuroCustom rounded-xl">
                  <div className="flex flex-col pb-[6.5px] pt-[6.5px]">
                    <div className="items-center flex mb-[16.25px] text-[16.25px] font-semibold ">
                      Jacob Holder
                    </div>
                    <div className="flex items-center">
                      <img
                        src="https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/card-logos/american-express.svg"
                        className="mr-[13px] overflow-x-clip overflow-y-clip"
                      />
                      <div className="block">
                        <div className="text-[16.25px] font-semibold text-white">
                          Mastercard **** 2040
                        </div>
                        <div className="text-[13.975px] font-medium text-grisCustom2">
                          La tarjeta Expira el 10/22
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="items-center flex pb-[6.5px] pt-[6.5px]">
                    <button className="items-start my-0 ml-0 mr-[9.75px] py-[8.15px] px-[14px] text-[12.35px] font-medium bg-secondary-900 rounded-lg hover:bg-secondary-900/70 transition-colors text-grisCustom2">
                      Borrar
                    </button>
                    <button className="items-start my-0 ml-0 mr-[9.75px] py-[8.15px] px-[14px] text-[12.35px] font-medium bg-secondary-900 rounded-lg hover:bg-secondary-900/70 transition-colors text-grisCustom2">
                      Editar
                    </button>
                  </div>
                </div>
              </div>
              <div className="basis-auto flex-grow-0 flex-shrink-0 mt-[19.5px] max-w-full px-[14.625px] w-[604.875px] ">
                <div className="items-center flex flex-row flex-wrap h-[142.625px] justify-between min-w-0 px-[19.5px] py-[19.5px] relative border-dashed border-[1px] border-grisOscuroCustom rounded-xl">
                  <div className="flex flex-col pb-[6.5px] pt-[6.5px]">
                    <div className="items-center flex mb-[16.25px] text-[16.25px] font-semibold ">
                      Marcus Morris
                    </div>
                    <div className="flex items-center">
                      <img
                        src="https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/card-logos/mastercard.svg"
                        className="mr-[13px] overflow-x-clip overflow-y-clip"
                      />
                      <div className="block">
                        <div className="text-[16.25px] font-semibold text-white">
                          Mastercard **** 1290
                        </div>
                        <div className="text-[13.975px] font-medium text-grisCustom2">
                          La tarjeta Expira el 03/23
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="items-center flex pb-[6.5px] pt-[6.5px]">
                    <button className="items-start my-0 ml-0 mr-[9.75px] py-[8.15px] px-[14px] text-[12.35px] font-medium bg-secondary-900 rounded-lg hover:bg-secondary-900/70 transition-colors text-grisCustom2">
                      Borrar
                    </button>
                    <button className="items-start my-0 ml-0 mr-[9.75px] py-[8.15px] px-[14px] text-[12.35px] font-medium bg-secondary-900 rounded-lg hover:bg-secondary-900/70 transition-colors text-grisCustom2">
                      Editar
                    </button>
                  </div>
                </div>
              </div>
              <div className="basis-auto flex-grow-0 flex-shrink-0 mt-[19.5px] max-w-full px-[14.625px] w-[604.875px] ">
                <div className="items-center flex flex-row flex-wrap h-[142.625px] justify-between min-w-0 px-[19.5px] py-[19.5px] relative border-dashed border-[1px] border-Azul rounded-xl bg-Azul/10">
                  <div className="items-center flex flex-grow flex-nowrap justify-between">
                    <div className="block">
                      <h4 className="mb-[6.5px] mt-0 text-[16.5px] font-semibold">
                        Nota Importante
                      </h4>
                      <div className="pr-[22.75px] text-[13.975px] font-medium text-grisCustom2">
                        Por favor lea atentamente
                        <a
                          href="#"
                          className="mx-[3.25px] text-[13.975px] font-semibold text-Azul"
                        >
                          Los Términos del producto
                        </a>
                        agregando
                        <br />
                        tu nueva tarjeta de pago
                      </div>
                    </div>
                    <a
                      href="#"
                      className="text-center px-[10px] py-[11px] bg-Azul rounded-lg text-[11.2px] font-medium"
                    >
                      Agregar Tarjeta
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pestaña Emergente para Agregar una Tarjeta Nueva */}
      {/*
        <div className="block h-[959px] left-0 overflow-x-hidden overflow-y-auto fixed top-0 w-[1579px] z-[1055]">
          <div className="items-center flex my-[22.75px] mx-[464.5px] max-w-[650px] min-h-full h-full relative w-[650px] ">
            <div className="flex flex-col relative w-[650px] bg-secondary-100 border-gray-500 border-[1px] rounded-lg">
              <div className="items-center flex flex-shrink-0 justify-between px-[22.75px] py-[22.75px] border-b-[0.5px] border-grisOscuroCustom">
                <h2 className="mb-[6.5px] mt-0 text-[19.5px] font-semibold text-white">
                  Agregar Nueva Tarjeta
                </h2>
                <div className="items-center flex h-[34px] justify-center px-0 py-0 w-[34px] ">
                  <IoMdClose className="flex pr-0 relative text-[22.75px] font-normal" />
                </div>
              </div>
              <div className="basis-auto flex-grow flex-shrink overflow-y-scroll py-[22.75px] px-[22.75px] mx-[48.75px] my-[48.75px] relative">
                <form action="#" className="mt-0">
                  <div className="flex flex-col mb-[22.75px] relative">
                    <label htmlFor="#" className="items-center flex mb-[6.5px]">
                      <span className="text-[13.975px] font-medium text-grisCustom after:pl-[3.25px] after:relative after:text-[13.975px after:font-semibold after:text-RosaIntenso after:content-['*'] ]">
                        Nombre en la Tarjeta
                      </span>
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      className="my-0 mx-0 py-[10.075px] px-[13px] w-[502px] bg-secondary-900 rounded-lg"
                    ></input>
                    {formData.nombre === "" && (
                      <div className="p-1 text-RosaCoral text-[12px] font-normal">
                        El nombre es obligatorio.
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col mb-[22.75px] relative">
                    <label htmlFor="#" className="items-center flex mb-[6.5px]">
                      <span className="text-[13.975px] font-medium text-grisCustom after:pl-[3.25px] after:relative after:text-[13.975px after:font-semibold after:text-RosaIntenso after:content-['*'] ]">
                        Numero de Tarjeta
                      </span>
                    </label>
                    <input
                      type="text"
                      name="numeroTarjeta"
                      value={formData.numeroTarjeta}
                      onChange={handleInputChange}
                      maxLength="19" // Incluye espacios o cualquier otro carácter de separación
                      placeholder="**** **** **** ****"
                      className="my-0 mx-0 py-[10.075px] px-[13px] w-[502px] bg-secondary-900 rounded-lg"
                    ></input>
                    <div className="mr-16.25px absolute flex right-[10px] top-[37px]">
                      <img
                        src="https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/card-logos/visa.svg"
                        className="h-[25px] overflow-x-clip overflow-y-clip mx-[3px]"
                      />
                      <img
                        src="https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/card-logos/mastercard.svg"
                        className="h-[25px] overflow-x-clip overflow-y-clip mx-[3px]"
                      />
                      <img
                        src="https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/card-logos/american-express.svg"
                        className="h-[25px] overflow-x-clip overflow-y-clip mx-[3px]"
                      />
                    </div>
                    {formData.numeroTarjeta === "" && (
                      <div className=" p-1 text-RosaCoral text-[12px] font-normal">
                        El número de tarjeta es obligatorio.
                      </div>
                    )}
                  </div>
                  <div className="flex flex-wrap mb-[32.5px] mx-[-9.75px] mt-0 ">
                    <div className="basis-auto flex-grow-0 flex-shrink-0 mt-0 max-w-full px-[9.75px] w-[347.656px]">
                      <label className="inline-block mb-[6.5px] after:pl-[3.25px] after:relative after:text-[13.975px after:font-semibold after:text-RosaIntenso after:content-['*'] ]">
                        Datos de Expiracion
                      </label>
                      <div className="flex flex-wrap mx-[-9.75px] mt-0 relative">
                      

                        <div className="basis-auto flex-grow-0 flex-shrink-0 mt-0 max-w-full px-[9.75px] w-[173.828px]">
                          <select
                            name="Mes"
                            placeholder="Mes"
                            value={formData.mesExpiracion}
                            onChange={handleInputChange}
                            className=" p-2 bg-secondary-900 text-grisOscuroCustom rounded-lg "
                          >
                            <option value="" disabled>
                              Mes de Expiración
                            </option>
                            {[...Array(12)].map((_, index) => (
                              <option
                                key={index + 1}
                                value={(index + 1).toString().padStart(2, "0")}
                              >
                                {(index + 1).toString().padStart(2, "0")}
                              </option>
                            ))}
                          </select>
                          <span></span>
                        </div>

                        

                        <div className="basis-auto flex-grow-0 flex-shrink-0 mt-0 max-w-full px-[9.75px] w-[173.828px]">
                          <select
                            name="Año"
                            placeholder="Año"
                            value={formData.mesExpiracion}
                            onChange={handleInputChange}
                            className=" p-2 bg-secondary-900 text-grisOscuroCustom rounded-lg "
                          >
                            <option value="" disabled>
                              Año de Expiración
                            </option>
                            {[...Array(12)].map((_, index) => (
                              <option
                                key={index + 1}
                                value={(index + 1).toString().padStart(2, "0")}
                              >
                                {(index + 1).toString().padStart(2, "0")}
                              </option>
                            ))}
                          </select>
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <div></div>
                  </div>
                  <div></div>
                  <div></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      */}
    </>
  );
};

export default Billing;
