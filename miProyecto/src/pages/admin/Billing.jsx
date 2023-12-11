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
import { HiLocationMarker, HiDotsHorizontal } from "react-icons/hi";
import { IoMdMail, IoMdClose, IoIosArrowDown, IoIosCard } from "react-icons/io";
import { BsPatchExclamationFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

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

  //MENU AGREGAR TARJETA

  // Estado para el menú de agregar tarjeta
  const [isAddCardMenuOpen, setIsAddCardMenuOpen] = useState(false);

  // Estado para la información de la tarjeta
  const [nameCard, setNameCard] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvv, setCvv] = useState("");

  // Funciones para manejar eventos del menú de tarjeta
  const handleAddCardClick = () => {
    setIsAddCardMenuOpen(true);
  };

  const handleCloseClick = () => {
    setIsAddCardMenuOpen(false);
  };

  // Funciones para manejar el enfoque y desenfoque de los campos
  const [focoInputNumeroTarjeta, setFocoInputNumeroTarjeta] = useState(false);
  const [focoCvv, setFocoCvv] = useState(false);

  const handleInputFocusNumeroTarjeta = () => {
    setFocoInputNumeroTarjeta(true);
  };

  const handleInputBlurNumeroTarjeta = () => {
    setFocoInputNumeroTarjeta(false);
  };

  const handleCvvFocus = () => {
    setFocoCvv(true);
  };

  const handleCvvBlur = () => {
    setFocoCvv(false);
  };

  // Funciones para manejar cambios en los campos
  const handleCardNumberChange = (e) => {
    const inputVal = e.target.value;
    const sanitizedValue = inputVal.replace(/\D/g, "");
    setCardNumber(sanitizedValue);
  };

  const handleCvvChange = (e) => {
    const inputVal = e.target.value;
    const sanitizedValue = inputVal.replace(/\D/g, "");
    setCvv(sanitizedValue);
  };

  // Función para guardar la tarjeta
  const handleSaveCard = () => {
    console.log("Tarjeta guardada:", {
      nameCard,
      cardNumber,
      expiryMonth,
      expiryYear,
      cvv,
    });

    setIsAddCardMenuOpen(false); // Cerrar el menú después de guardar
  };

  // Estilos de enfoque para campos de entrada
  const [focoInput, setFocoInput] = useState(false);
  const [focoInput2, setFocoInput2] = useState(false);
  const [focoInput3, setFocoInput3] = useState(false);

  const handleInputFocus = () => {
    setFocoInput(true);
  };

  const handleInputBlur = () => {
    setFocoInput(false);
  };

  const handleInputFocus2 = () => {
    setFocoInput2(true);
  };

  const handleInputBlur2 = () => {
    setFocoInput2(false);
  };

  const handleInputFocus3 = () => {
    setFocoInput3(true);
  };

  const handleInputBlur3 = () => {
    setFocoInput3(false);
  };

  // LOGICA MESES

  const mesesDelAno = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

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
                  ¡Necesitamos tu atención!
                </h4>
                <div className=" text-gray-400 text-[13.975px]">
                  Su pago fue rechazado. Para comenzar a utilizar herramientas,
                  por favor
                  <a
                    className="text-blue-500 font-semibold hover:text-blue-400 transition-[.2s] pl-1 "
                    href=""
                  >
                    Añadir método de pago
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
                Se notificara cuando la fecha expire
              </p>
            </div>
            <div className="basis-auto flex-grow-0 flex-shrink-0 mt-0 max-w-full px-[9.75px] w-[500px]">
              <div className="flex mb-[9.75px] ">
                <span className="flex-grow text-[14.95px] font-semibold text-grisCustom">
                  Trabajadores
                </span>
                <span className="text-[14.95px] font-semibold text-grisCustom">
                  86 de 100 Trabajadores
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
                Quedan 14 Trabajadores hasta que su plan requiera una
                actualización
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
              <div
                className={`fixed top-0 left-0 w-full h-full bg-black/50 ${
                  isAddCardMenuOpen ? "block" : "hidden"
                }`}
              ></div>
              <div className="basis-auto flex-grow-0 flex-shrink-0 mt-[19.5px] max-w-full px-[14.625px] w-[604.875px] relative z-10">
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
                    <button
                      className="text-center px-[10px] py-[11px] bg-Azul rounded-lg text-[11.2px] font-medium"
                      onClick={handleAddCardClick}
                    >
                      Agregar Tarjeta
                    </button>
                  </div>
                </div>

                {isAddCardMenuOpen && (
                  <div className="fixed flex flex-col top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-secondary-900 p-8 rounded-lg shadow z-20 w-[650px] h-auto px-0 py-0">
                    <div className="items-center flex flex-shrink-0 justify-between px-[22.75px] py-[22.75px] mb-[20px] border-b-[1px] border-grisOscuroCustom">
                      <h2 className="mb-[6.5px] mt-0 text-[19.5px] leading-[23.4px] font-semibold">
                        Agregar una Nueva Tarjeta
                      </h2>
                      <div
                        className="items-center flex h-[34.8125px] justify-center px-0 py-0 w-[34.8125px]"
                        onClick={handleCloseClick}
                      >
                        <AiOutlineClose className="flex  pr-0 relative text-[22.75px] leading-[22.75px] font-normal" />
                      </div>
                    </div>
                    <div className="basis-auto flex-shrink flex-grow my-[22.75px] mx-[48.75px] overflow-y-scroll py-[22.75px] px-[22.75px] relative">
                      <form className="mt-0">
                        <div className="mb-[10px]">
                          <label
                            htmlFor="expiryDate"
                            className="items-center flex mb-[6.5px] "
                          >
                            <span className="text-[13.975px] font-medium leading-[20.9625px]  text-grisCustom after:pl-[3.25px] after:relative after:text-rosadoCustom after:content-['*']  ">
                              Nombre de la Tarjeta
                            </span>
                            <span></span>
                          </label>
                          <input
                            type="text"
                            id="expiryDate"
                            value={nameCard}
                            onChange={(e) => setNameCard(e.target.value)}
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                            className={`bg-secondary-100 rounded-md appearance-none border-none outline-none font-medium mx-0 my-0 px-[13px] py-[10.075px] w-[502px] text-[14.3px] leading-[21.45px] ${
                              focoInput
                                ? "input-foco bg-grisOscuroCustom/30"
                                : "input-normal "
                            }`}
                          />
                        </div>
                        <div className="mb-[10px]">
                          <label
                            htmlFor="cardNumber"
                            className="items-center flex mb-[6.5px] "
                          >
                            <span className="text-[13.975px] font-medium leading-[20.9625px]  text-grisCustom after:pl-[3.25px] after:relative after:text-rosadoCustom after:content-['*']  ">
                              Número de Tarjeta
                            </span>
                            <span></span>
                          </label>
                          <input
                            type="text"
                            id="cardNumber"
                            value={cardNumber}
                            onChange={handleCardNumberChange}
                            onFocus={handleInputFocusNumeroTarjeta}
                            onBlur={handleInputBlurNumeroTarjeta}
                            className={`bg-secondary-100 rounded-md appearance-none border-none outline-none font-medium mx-0 my-0 px-[13px] py-[10.075px] w-[502px] text-[14.3px] leading-[21.45px] ${
                              focoInputNumeroTarjeta
                                ? "input-foco bg-grisOscuroCustom/30"
                                : "input-normal "
                            }`}
                          />
                          <div className="mr-16.25px absolute flex right-[30px] top-[137px]">
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
                        </div>
                        <div className="flex flex-wrap mb-[32.5px] mx-[-9.75px] mt-0">
                          <div className="basis-auto flex-grow-0 flex-shrink-0 mb-0 max-w-full px-[9.75px] w-[347.656px]">
                            <label className="inline-block mb-[6.5px] text-[13.975px] text-grisCustom font-medium leading-[20.9625px] after:pl-[3.25px] after:relative after:text-rosadoCustom after:content-['*']">
                              Fecha de Vencimiento
                            </label>
                            <div className="flex flex-wrap mx-[-9.75px] mt-0 relative">
                              <div className="basis-auto flex-grow-0 flex-shrink-0 mt-0 max-w-full px-[9.75px] w-[173.828px] h-auto">
                                <select
                                  value={expiryMonth}
                                  onChange={(e) =>
                                    setExpiryMonth(e.target.value)
                                  }
                                  style={{
                                    // Estilos para el contenedor del select
                                    // Cambia el radio de borde
                                    paddingTop: "10px",
                                    paddingBottom: "10px",
                                    paddingRight: "13px", // Cambia el relleno interno
                                    paddingLeft: "13px",
                                    color: "white",
                                    alignItems: "center",
                                    position: "flex",
                                    width: "154.328px",
                                  }}
                                  className="inline-block  border-none outline-none mx-0 my-0 relative w-[154.328px] h-[40px] bg-secondary-100 rounded-md text-white"
                                >
                                  <option value="" disabled>
                                    Mes
                                  </option>
                                  {mesesDelAno.map((mes, index) => (
                                    <option key={index + 1} value={index + 1}>
                                      {mes}
                                    </option>
                                  ))}
                                </select>
                              </div>
                              <div className="basis-auto flex-grow-0 flex-shrink-0 mt-0 max-w-full px-[9.75px] w-[173.828px] h-auto">
                                <select
                                  value={expiryYear}
                                  onChange={(e) =>
                                    setExpiryYear(e.target.value)
                                  }
                                  style={{
                                    // Estilos para el contenedor del select
                                    // Cambia el radio de borde
                                    paddingTop: "10px",
                                    paddingBottom: "10px",
                                    paddingRight: "13px", // Cambia el relleno interno
                                    paddingLeft: "13px",
                                    color: "white",
                                    alignItems: "center",
                                    position: "flex",
                                    width: "154.328px",
                                  }}
                                  className="inline-block  border-none outline-none mx-0 my-0 relative w-[154.328px] h-[40px] bg-secondary-100 rounded-md text-white"
                                >
                                  <option value="" disabled>
                                    Año{" "}
                                  </option>

                                  {Array.from(
                                    { length: 34 },
                                    (_, index) => 2023 - index
                                  ).map((year) => (
                                    <option key={year} value={year}>
                                      {year}
                                    </option>
                                  ))}
                                  {/* ... */}
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="basis-auto flex-grow-0 flex-shrink-0 mt-0 max-w-full px-[9.75px] relative w-[173.828px]">
                            <label
                              htmlFor="cvv"
                              className="items-center flex mb-[6.5px]"
                            >
                              <span className="text-[13.975px] leading-[20.9625px] font-medium text-grisCustom after:pl-[3.25px] after:relative after:text-rosadoCustom after:content-['*']">
                                CVV
                              </span>
                            </label>
                            <div className="relative">
                              <input
                                type="text"
                                id="cvv"
                                value={cvv}
                                onChange={handleCvvChange}
                                onFocus={handleCvvFocus}
                                onBlur={handleCvvBlur}
                                className={`mx-0 my-0 border-none outline-none py-[10.075px] px-[13px] w-[154.328px] text-[14.3px] leading-[21.45px] font-medium text-white bg-secondary-100 rounded-lg ${
                                  focoCvv ? "input-foco" : "input-normal"
                                }`}
                              />
                              <div className="mr-[9.75px] absolute right-0 top-[5px]">
                                <IoIosCard className="relative text-[32.5px] font-normal leading-[32.5px] text-grisCustom2" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center flex justify-between">
                          <div className="mr-[16.25px]">
                            <label
                              htmlFor="#"
                              className="inline-block mb-[6.5px] text-[13.975px] leading-[20.9625px] font-medium"
                            >
                              ¿Guardar tarjeta para realizar más facturas?
                            </label>
                            <div className="text-[12.35px] leading-[18.525px] font-medium text-grisCustom2">
                              Si necesitas más información, consulta la
                              planificación presupuestaria.
                            </div>
                          </div>
                          <label
                            htmlFor="#"
                            className=" items-center flex mx-0 my-0 min-h-[19.5px] pl-0"
                          >
                            <input
                              type="checkbox"
                              value="1"
                              checked="checked"
                              className=" flex-shrink-0 float-none h-[29.25px] mx-0 my-0 px-0 py-0 w-[42.25px] "
                            />
                          </label>
                        </div>
                        <div className="pt-[48.75px] text-center">
                          <button className="bg-grisCustom3 rounded-lg text-white hover:bg-grisCustom3/70 transition-colors  items-start inline-block my-0 ml-0 mr-[9.75px] px-[20.5px] py-[11.075px] text-[14.3px] leading-[21.45px] font-medium">
                            Descartar
                          </button>
                          <button
                            className="bg-grisCustom3 rounded-lg text-white hover:bg-grisCustom3/70 transition-colors items-start inline-block my-0 ml-0 mr-[9.75px] px-[20.5px] py-[11.075px] text-[14.3px] leading-[21.45px] font-medium"
                            onClick={handleSaveCard}
                          >
                            Guardar Tarjeta
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
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
