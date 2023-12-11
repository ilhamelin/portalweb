import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

// ICONS
import { BsShieldFillCheck } from "react-icons/bs";

import { GoVerified } from "react-icons/go";
import {
  RiAccountCircleFill,
  RiArrowUpLine,
  RiArrowDownLine,
  RiEdit2Line,
} from "react-icons/ri";
import { HiLocationMarker, HiDotsHorizontal } from "react-icons/hi";
import { IoMdMail } from "react-icons/io";
import { Result } from "postcss";

// util.js

// --------- //
// FUNCIONES //
// --------- //

const Settings = () => {
  const [profileImage, setProfileImage] = useState(() => {
    const savedImage = localStorage.getItem("profileImage");
    return savedImage;
  });

  const [headerProfileImage, setHeaderProfileImage] = useState(profileImage);

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

  const ProfileImage = ({ imageUrl }) => {
    return <img src={imageUrl} alt="Profile" />;
  };

  const [selectedCountry, setSelectedCountry] = useState("");
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const cityList = {
      argentina: ["Buenos Aires", "Córdoba", "Rosario", "Mendoza"],
      australia: ["Sydney", "Melbourne", "Brisbane", "Perth"],
      austria: ["Viena", "Salzburgo", "Graz", "Innsbruck"],
      azerbaiyan: ["Bakú", "Ganja", "Sumgait", "Lankaran"],
      belgica: ["Bruselas", "Amberes", "Gante", "Brujas"],
      brasil: ["Sao Paulo", "Río de Janeiro", "Brasilia", "Salvador"],
      bulgaria: ["Sofía", "Plovdiv", "Varna", "Burgas"],
      canada: ["Toronto", "Vancouver", "Montreal", "Calgary"],
      china: ["Pekín", "Shanghái", "Cantón", "Shenzhen"],
      chile: ["Santiago", "Valparaíso", "Concepción", "Antofagasta"],
      croacia: ["Zagreb", "Split", "Rijeka", "Osijek"],
      dinamarca: ["Copenhague", "Aarhus", "Odense", "Aalborg"],
      ecuador: ["Quito", "Guayaquil", "Cuenca", "Manta"],
      egipto: ["El Cairo", "Alejandría", "Luxor", "Asuán"],
      emiratosarabesunidos: ["Dubái", "Abu Dabi", "Sharjah", "Ajmán"],
    };

    setCities(cityList[selectedCountry] || []);
  }, [selectedCountry]);

  const options = [
    {
      label: "Argentina",
      value: "argentina",
    },
    {
      label: "Australia",
      value: "australia",
    },
    {
      label: "Austria",
      value: "austria",
    },
    {
      label: "Azerbaiyan",
      value: "azerbaiyan",
    },
    {
      label: "Belgica",
      value: "belgica",
    },
    {
      label: "Brasil",
      value: "brasil",
    },
    {
      label: "Bulgaria",
      value: "bulgaria",
    },
    {
      label: "Canadá",
      value: "canadá",
    },
    {
      label: "China",
      value: "china",
    },
    {
      label: "Chile",
      value: "chile",
    },
    {
      label: "Croacia",
      value: "croacia",
    },
    {
      label: "Dinamarca",
      value: "dinamarca",
    },
    {
      label: "Ecuador",
      value: "ecuador",
    },
    {
      label: "Egipto",
      value: "egipto",
    },
    {
      label: "Emiratos Arabes Unidos",
      value: "emiratosarabesunidos",
    },
  ];

  const handleDiscard = () => {
    localStorage.removeItem("formData");
    setProfileImage(defaultProfileImage);
    setSelectedCountry("");
    setCities([]);
    setFullName({ firstName: "", lastName: "" });
    setCompanyName("");
    setContactNumber("");
    setCompanyWebsite("");
  };

  const handleSave = () => {
    const formData = {
      profileImage,
      selectedCountry,
      cities,
      fullName,
      companyName,
      contactNumber,
      companyWebsite,
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
      setSelectedCountry(parsedFormData.selectedCountry);
      setCities(parsedFormData.cities);
      setFullName(parsedFormData.fullName);
      setCompanyName(parsedFormData.companyName);
      setContactNumber(parsedFormData.contactNumber);
      setCompanyWebsite(parsedFormData.companyWebsite);
    }
  }, []);

  const [selectedLanguage, setSelectedLanguage] = useState("");
  const optionsLanguage = [
    {
      label: "Español",
      value: "es",
    },
    {
      label: "Inglés",
      value: "en",
    },
    {
      label: "Francés",
      value: "fr",
    },
    {
      label: "Alemán",
      value: "de",
    },
    {
      label: "Italiano",
      value: "it",
    },
    {
      label: "Portugués",
      value: "pt",
    },
    {
      label: "Chino (Mandarín)",
      value: "zh",
    },
    {
      label: "Japonés",
      value: "ja",
    },
    {
      label: "Coreano",
      value: "ko",
    },
    {
      label: "Árabe",
      value: "ar",
    },
    {
      label: "Ruso",
      value: "ru",
    },
    {
      label: "Hindi",
      value: "hi",
    },
    {
      label: "Turco",
      value: "tr",
    },
    {
      label: "Sueco",
      value: "sv",
    },
    {
      label: "Noruego",
      value: "no",
    },
    {
      label: "Danés",
      value: "da",
    },
    {
      label: "Holandés",
      value: "nl",
    },
    {
      label: "Finlandés",
      value: "fi",
    },
    {
      label: "Polaco",
      value: "pl",
    },
    {
      label: "Griego",
      value: "el",
    },
    {
      label: "Húngaro",
      value: "hu",
    },
    {
      label: "Checo",
      value: "cs",
    },
    {
      label: "Indonesio",
      value: "id",
    },
    {
      label: "Vietnamita",
      value: "vi",
    },
  ];

  const [selectedTimezone, setSelectedTimezone] = useState("");

  const optionstimezones = [
    { label: "UTC", value: "UTC", region: "Universal" },
    { label: "UTC+01:00", value: "UTC+01:00", region: "Europa" },
    { label: "UTC+02:00", value: "UTC+02:00", region: "Europa, África" },
    { label: "UTC+03:00", value: "UTC+03:00", region: "Asia, África" },
    { label: "UTC+04:00", value: "UTC+04:00", region: "Asia, Europa" },
    { label: "UTC+05:00", value: "UTC+05:00", region: "Asia" },
    { label: "UTC+06:00", value: "UTC+06:00", region: "Asia, Europa" },
    { label: "UTC+07:00", value: "UTC+07:00", region: "Asia" },
    { label: "UTC+08:00", value: "UTC+08:00", region: "Asia, Oceanía" },
    { label: "UTC+09:00", value: "UTC+09:00", region: "Asia" },
    { label: "UTC+10:00", value: "UTC+10:00", region: "Australia, Asia" },
    { label: "UTC+11:00", value: "UTC+11:00", region: "Australia" },
    { label: "UTC+12:00", value: "UTC+12:00", region: "Oceanía" },
    { label: "UTC-01:00", value: "UTC-01:00", region: "Atlántico" },
    { label: "UTC-02:00", value: "UTC-02:00", region: "Atlántico" },
    { label: "UTC-03:00", value: "UTC-03:00", region: "América del Sur" },
    { label: "UTC-04:00", value: "UTC-04:00", region: "América del Norte" },
    { label: "UTC-05:00", value: "UTC-05:00", region: "América del Norte" },
    { label: "UTC-06:00", value: "UTC-06:00", region: "América del Norte" },
    { label: "UTC-07:00", value: "UTC-07:00", region: "América del Norte" },
    { label: "UTC-08:00", value: "UTC-08:00", region: "América del Norte" },
    { label: "UTC-09:00", value: "UTC-09:00", region: "Alaska" },
    { label: "UTC-10:00", value: "UTC-10:00", region: "Hawái" },
    { label: "UTC-11:00", value: "UTC-11:00", region: "Islas Midway" },
    { label: "UTC-12:00", value: "UTC-12:00", region: "Baker Island" },
  ];

  // ------------------------------------------ //
  // OCULTAR, MOSTRAR, GUARDAR Y CAMBIAR CORREO //
  // ------------------------------------------ //

  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [nuevoCorreo, setNuevoCorreo] = useState("be.reyes@duocuc.cl");
  const [nuevoCorreoInput, setNuevoCorreoInput] = useState("");

  const mostrarFormularioHandler = () => {
    setMostrarFormulario(true);
  };

  const ocultarFormularioHandler = () => {
    setMostrarFormulario(false);
  };

  const actualizarCorreoHandler = () => {
    setNuevoCorreo(nuevoCorreoInput);
    localStorage.setItem("nuevoCorreo", nuevoCorreoInput);

    const formData = {
      nuevoCorreo: nuevoCorreoInput,
    };

    const savedFormData = localStorage.getItem("formData");
    let parsedFormData = savedFormData ? JSON.parse(savedFormData) : {};
    parsedFormData.nuevoCorreo = nuevoCorreoInput;
    localStorage.setItem("formData", JSON.stringify(parsedFormData));

    setMostrarFormulario(false);
  };

  useEffect(() => {
    const savedNuevoCorreo = localStorage.getItem("nuevoCorreo");
    if (savedNuevoCorreo) {
      setNuevoCorreo(savedNuevoCorreo);
      setNuevoCorreoInput(savedNuevoCorreo);
    }

    const savedFormData = localStorage.getItem("formData");
    if (savedFormData) {
      const parsedFormData = JSON.parse(savedFormData);
      // ... (actualizar otros estados según sea necesario)
    }
  }, []);

  // ---------------------------------------------- //
  // OCULTAR, MOSTRAR, GUARDAR Y CAMBIAR CONTRASEÑA //
  // ---------------------------------------------- //

  const [mostrarFormulario2, setMostrarFormulario2] = useState(false);
  const [nuevaContrasena, setNuevaContrasena] = useState("*********");
  const [nuevaContrasenaInput, setNuevaContrasenaInput] = useState("");

  const mostrarFormularioHandler2 = () => {
    setMostrarFormulario2(true);
  };

  const ocultarFormularioHandler2 = () => {
    setMostrarFormulario2(false);
  };

  const actualizarContrasenaHandler = () => {
    setNuevaContrasena(nuevaContrasenaInput);
    localStorage.setItem("nuevaContrasena", nuevaContrasenaInput);

    const formData = {
      nuevaContrasena: nuevaContrasenaInput,
    };

    const savedFormData = localStorage.getItem("formData");
    let parsedFormData = savedFormData ? JSON.parse(savedFormData) : {};
    parsedFormData.nuevaContrasena = nuevaContrasenaInput;
    localStorage.setItem("formData", JSON.stringify(parsedFormData));

    setMostrarFormulario2(false);
  };

  useEffect(() => {
    const savedNuevaContrasena = localStorage.getItem("nuevaContrasena");
    if (savedNuevaContrasena) {
      setNuevaContrasena(savedNuevaContrasena);
      setNuevaContrasenaInput(savedNuevaContrasena);
    }

    const savedFormData = localStorage.getItem("formData");
    if (savedFormData) {
      const parsedFormData = JSON.parse(savedFormData);
      // ... (actualizar otros estados según sea necesario)
    }
  }, []);

  // ---------------- //
  // VALIDACION INPUT //
  // ---------------- //

  const [fullName, setFullName] = useState({
    firstName: "",
    lastName: "",
  });
  const [companyName, setCompanyName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setFullName({
      ...fullName,
      firstName: inputValue,
      lastName: inputValue,
    });
  };

  const showTextFullName =
    !fullName.firstName ||
    !fullName.lastName ||
    fullName.firstName.trim() === "" ||
    fullName.lastName.trim() === "";
  const showTextCompanyName = !companyName || companyName.trim() === "";
  const showTextContactNumber = !contactNumber || contactNumber.trim() === "";
  const showTextCompanyWebsite =
    !companyWebsite || companyWebsite.trim() === "";

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

      <div className="flex flex-col h-auto w-auto bg-secondary-100 pl-[29.25px] pr-[29.25px] pt-[29.25px] pb-0 min-w-0 rounded-xl card mb-5 xl:mb-10  text-[14.95px] font-semibold">
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
                className="flex items-center mr-[32.5px] py-[16.25px] text-gray-500 text-left border-transparent border-b-2 hover:border-primary transition-colors active:text-primary"
              >
                Descripcion
              </Link>
            </li>
            <li className="items-stretch mb-[-2px] mt-[6.2px] ">
              <Link
                to="/Settings"
                className="flex items-center mr-[32.5px] py-[16.25px] text-gray-500 text-left border-b-2 border-primary hover:border-primary transition-colors active:text-primary"
              >
                Configuracion
              </Link>
            </li>
            <li className="items-stretch mb-[-2px] mt-[6.2px] ">
              <Link
                to="/Security"
                className="flex items-center mr-[32.5px] py-[16.25px] text-gray-500 text-left border-transparent border-b-2 hover:border-primary transition-colors active:text-primary"
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
                className="flex items-center mr-[32.5px] py-[16.25px] text-gray-500 text-left border-transparent border-b-2 hover:border-primary transition-colors active:text-primary"
              >
                Facturacion
              </Link>
            </li>
            <li className="items-stretch mb-[-2px] mt-[6.2px] ">
              <a className="flex items-center mr-[32.5px] py-[16.25px] text-gray-500 text-left border-transparent border-b-2 hover:border-primary transition-colors active:text-primary">
                Declaraciones
              </a>
            </li>
            <li className="items-stretch mb-[-2px] mt-[6.2px] ">
              <a className="flex items-center mr-[32.5px] py-[16.25px] text-gray-500 text-left border-transparent border-b-2 hover:border-primary transition-colors active:text-primary">
                Referencias
              </a>
            </li>
            <li className="items-stretch mb-[-2px] mt-[6.2px] ">
              <a className="flex items-center mr-[32.5px] py-[16.25px] text-gray-500 text-left border-transparent border-b-2 hover:border-primary transition-colors active:text-primary">
                API Keys
              </a>
            </li>
            <li className="items-stretch mb-[-2px] mt-[6.2px] ">
              <a className="flex items-center mr-[32.5px] py-[16.25px] text-gray-500 text-left border-transparent border-b-2 hover:border-primary transition-colors active:text-primary">
                Logs
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Perfil */}
      <div className="relative flex flex-col  h-auto mb-[32.5px] min-w-0 bg-secondary-100 rounded-xl ">
        <div className="flex flex-wrap justify-between items-stretch  min-h-[75px] py-0 pl-[29.25px] pr-[29.25px] bg-transparent text-start cursor-pointer">
          <div className="text-gray-500 flex items-center m-0 font-medium text-xl hover:text-gray-400/40">
            <h3 className=" text-white text-[17.55px]">Detalles de Perfil</h3>
          </div>
        </div>
        <hr className=" border-gray-700" />
        <div>
          <form action="">
            <div className="basis-auto flex-grow flex-shrink px-[29.25px] py-[29.25px]">
              <div className="flex flex-wrap mx-[-9.75px] mb-[19.5px] mt-0">
                <label
                  htmlFor=""
                  className="block basis-auto flex-grow-0 flex-shrink-0 mb-0 mt-0 max-w-[100%] px-[9.75px] py-[11.075px] w-[387px] text-[13.975px] font-medium text-grisCustom"
                >
                  Avatar
                </label>
                <div className="basis-auto flex-grow-0 flex-shrink-0 mt-0 max-w-[100%] px-[9.75px] w-[774px]">
                  <div className="inline-block relative">
                    <img
                      src={profileImage}
                      alt="Perfil"
                      className="block h-[125px] w-[125px] rounded-lg"
                      style={{ objectFit: "contain" }}
                    />
                    <label
                      htmlFor="avatar"
                      className="flex items-center absolute bg-secondary-900 p-2 rounded-full hover:pointer w-[25px] h-[25px] top-[-12px] left-[110px] text-[14.3px]"
                    >
                      <RiEdit2Line />
                    </label>
                    <input
                      type="file"
                      id="avatar"
                      accept="image/*, .gif"
                      className="hidden"
                      onChange={handleImageChange}
                    />
                  </div>
                  <div className="mt-[6.5px] text-[12.35px] font-normal text-grisOscuroCustom">
                    Tipos de archivo permitidos: png, jgp, jpeg, gif.
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap mb-[19.5px] mt-0 mx-[-9.75px]">
                <label
                  htmlFor=""
                  className="basis-auto block flex-grow-0 flex-shrink-0 mb-0 mt-0 max-w-[100%] py-[11.075px] px-[9.75px] w-[379px] text-[13.975px] font-medium after:pl-[3.25px] after:relative after:text-rosadoCustom after:content-['*'] "
                >
                  Nombre Completo
                </label>
                <div className="basis-auto flex-grow-0 flex-shrink-0 mt-0 max-w-[100%] px-[9.75px] w-[758px]">
                  <div className="flex flex-wrap mx-[-9.75px] mt-0">
                    <div className="basis-auto flex-grow-0 flex-shrink-0 mt-0 max-w-[100%] px-[9.75px] relative w-[379px]">
                      <input
                        type="text"
                        placeholder="Nombre(s)"
                        value={fullName.firstName}
                        onChange={(e) =>
                          setFullName({
                            ...fullName,
                            firstName: e.target.value,
                          })
                        }
                        className="bg-secondary-900/70 hover:bg-secondary-900 outline-none  rounded-lg text-grisOscuroV2custom block min-h-[45.875px] px-[19.5px] py-[8px] w-[359.5px] text-[14.95px] font-medium"
                      />
                      <div className="mt-[6.5px] block w-[359.5px]">
                        <div>
                          {showTextFullName && !fullName.firstName && (
                            <p className="text-rosadoCustom text-[12.35px] font-normal">
                              Se requiere un nombre
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="basis-auto flex-grow-0 flex-shrink-0 mt-0 max-w-[100%] px-[9.75px] relative w-[379px]">
                      <input
                        type="text"
                        placeholder="Apellido(s)"
                        value={fullName.lastName}
                        onChange={(e) =>
                          setFullName({ ...fullName, lastName: e.target.value })
                        }
                        className="bg-secondary-900/70 hover:bg-secondary-900 outline-none rounded-lg text-grisOscuroV2custom block min-h-[45.875px] px-[19.5px] py-[8px] w-[359.5px] text-[14.95px] font-medium"
                      />
                      <div className="mt-[6.5px] block w-[359.5px]">
                        <div>
                          {showTextFullName && !fullName.lastName && (
                            <p className="text-rosadoCustom text-[12.35px] font-normal">
                              Se requiere un Apellido
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap mb-[19.5px] mt-0 mx-[-9.75px]">
                <label
                  htmlFor=""
                  className="basis-auto block flex-grow-0 flex-shrink-0 mb-0 mt-0 max-w-[100%] py-[11.075px] px-[9.75px] w-[379px] text-[13.975px] font-medium after:pl-[3.25px] after:relative after:text-rosadoCustom after:content-['*'] "
                >
                  Compañia
                </label>
                <div className="basis-auto flex-grow-0 flex-shrink-0 mt-0 max-w-[100%] px-[9.75px] relative w-[758px]">
                  <input
                    type="text"
                    placeholder="Nombre de empresa"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="block min-h-[45.875px] px-[19.5px] py-[8.725px] w-[738.5px] outline-none bg-secondary-900/70 hover:bg-secondary-900 rounded-xl text-grisOscuroV2custom text-[14.95px] font-medium"
                  />
                  <div className="mt-[6.5px]">
                    {showTextCompanyName && (
                      <p className="text-rosadoCustom text-[12.35px] font-normal">
                        El nombre de la empresa es obligatorio
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap mb-[19.5px] mt-0 mx-[-9.75px]">
                <label
                  htmlFor=""
                  className="basis-auto block flex-grow-0 flex-shrink-0 mb-0 mt-0 max-w-[100%] py-[11.075px] px-[9.75px] w-[379px] text-[13.975px] font-medium after:pl-[3.25px] after:relative after:text-rosadoCustom after:content-['*'] "
                >
                  Teléfono de contacto
                </label>
                <div className="basis-auto flex-grow-0 flex-shrink-0 mt-0 max-w-[100%] px-[9.75px] relative w-[758px]">
                  <input
                    type="text"
                    placeholder="Numero de Telefono"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    className="block min-h-[45.875px] px-[19.5px] py-[8.725px] w-[738.5px] outline-none bg-secondary-900/70 hover:bg-secondary-900 rounded-xl text-grisOscuroV2custom text-[14.95px] font-medium"
                  />
                  <div className="mt-[6.5px]">
                    {showTextContactNumber && (
                      <p className="text-rosadoCustom text-[12.35px] font-normal">
                        El número de contacto es obligatorio
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap mb-[19.5px] mt-0 mx-[-9.75px]">
                <label
                  htmlFor=""
                  className="basis-auto block flex-grow-0 flex-shrink-0 mb-0 mt-0 max-w-[100%] py-[11.075px] px-[9.75px] w-[379px] text-[13.975px] font-medium after:pl-[3.25px] after:relative after:text-rosadoCustom after:content-['*'] "
                >
                  Sitio de la empresa
                </label>
                <div className="basis-auto flex-grow-0 flex-shrink-0 mt-0 max-w-[100%] px-[9.75px] relative w-[758px]">
                  <input
                    type="text"
                    placeholder="Página Web de la compañía"
                    value={companyWebsite}
                    onChange={(e) => setCompanyWebsite(e.target.value)}
                    className="block min-h-[45.875px] px-[19.5px] py-[8.725px] w-[738.5px] outline-none bg-secondary-900/70 hover:bg-secondary-900 rounded-xl text-grisOscuroV2custom text-[14.95px] font-medium"
                  />
                  <div className="mt-[6.5px]">
                    {showTextCompanyWebsite && (
                      <p className="text-rosadoCustom text-[12.35px] font-normal">
                        La página web de la empresa es obligatoria
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap mb-[19.5px] mt-0 mx-[-9.75px]">
                <label
                  htmlFor=""
                  className="basis-auto block flex-grow-0 flex-shrink-0 mb-0 mt-0 max-w-[100%] py-[11.075px] px-[9.75px] w-[379px] text-[13.975px] font-medium after:pl-[3.25px] after:relative after:text-rosadoCustom after:content-['*'] "
                >
                  Pais
                </label>
                <div className="basis-auto flex-grow-0 flex-shrink-0 mt-0 max-w-[100%] px-[9.75px] relative w-[758px]">
                  <select
                    name="seleccionarPais"
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    value={selectedCountry}
                    className="block min-h-[45.875px] px-[19.5px] py-[8.725px] w-[738.5px] outline-none bg-secondary-900/70 hover:bg-secondary-900 rounded-xl text-grisOscuroV2custom"
                  >
                    <option value="" disabled>
                      Seleccionar país
                    </option>
                    {options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <div className="mt-[6.5px]"></div>
                </div>
              </div>
              <div className="flex flex-wrap mb-[19.5px] mt-0 mx-[-9.75px]">
                <label
                  htmlFor=""
                  className="basis-auto block flex-grow-0 flex-shrink-0 mb-0 mt-0 max-w-[100%] py-[11.075px] px-[9.75px] w-[379px] text-[13.975px] font-medium after:pl-[3.25px] after:relative after:text-rosadoCustom after:content-['*'] "
                >
                  Ciudad
                </label>
                <div className="basis-auto flex-grow-0 flex-shrink-0 mt-0 max-w-[100%] px-[9.75px] relative w-[758px]">
                  <select
                    name="seleccionar Ciudad"
                    className="block min-h-[45.875px] px-[19.5px] py-[8.725px] w-[738.5px] bg-secondary-900/70 hover:bg-secondary-900 rounded-xl text-grisOscuroV2custom"
                  >
                    {cities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                  <div className="mt-[6.5px]"></div>
                </div>
              </div>
              <div className="flex flex-wrap mb-[19.5px] mt-0 mx-[-9.75px]">
                <label
                  htmlFor=""
                  className="basis-auto block flex-grow-0 flex-shrink-0 mb-0 mt-0 max-w-[100%] py-[11.075px] px-[9.75px] w-[379px] text-[13.975px] font-medium after:pl-[3.25px] after:relative after:text-rosadoCustom after:content-['*'] "
                >
                  Idioma
                </label>
                <div className="basis-auto flex-grow-0 flex-shrink-0 mt-0 max-w-[100%] px-[9.75px] relative w-[758px]">
                  <select
                    name="selecciona un Idioma"
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                    className="block min-h-[45.875px] px-[19.5px] py-[8.725px] w-[738.5px] bg-secondary-900/70 hover:bg-secondary-900 rounded-xl text-grisOscuroV2custom"
                  >
                    <option value="" disabled>
                      Selecciona un idioma
                    </option>
                    {optionsLanguage.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                    <option value="otro">Otro Idioma</option>
                  </select>
                  <div className="mt-[6.5px]"></div>
                </div>
              </div>
              <div className="flex flex-wrap mb-[19.5px] mt-0 mx-[-9.75px]">
                <label
                  htmlFor=""
                  className="basis-auto block flex-grow-0 flex-shrink-0 mb-0 mt-0 max-w-[100%] py-[11.075px] px-[9.75px] w-[379px] text-[13.975px] font-medium after:pl-[3.25px] after:relative after:text-rosadoCustom after:content-['*'] "
                >
                  Zona Horaria
                </label>
                <div className="basis-auto flex-grow-0 flex-shrink-0 mt-0 max-w-[100%] px-[9.75px] relative w-[758px]">
                  <select
                    name="selecciona una Zona Horaria"
                    value={selectedTimezone}
                    onChange={(e) => setSelectedTimezone(e.target.value)}
                    className="block min-h-[45.875px] px-[19.5px] py-[8.725px] w-[738.5px] bg-secondary-900/70 hover:bg-secondary-900 rounded-xl text-grisOscuroV2custom"
                  >
                    <option value="" disabled>
                      Selecciona una zona horaria
                    </option>
                    {optionstimezones.map((timezone) => (
                      <option key={timezone.value} value={timezone.value}>
                        {`${timezone.label} - ${timezone.region}`}
                      </option>
                    ))}
                  </select>
                  <div className="mt-[6.5px]"></div>
                </div>
              </div>
            </div>
            <hr className=" border-gray-700" />
            <div className="flex justify-end px-[29.25px] py-[19.5px]">
              <button
                className="bg-secondary-900 text-grisCustom items-start  py-[11.075px] px-[20.5px] mb-0 ml-0 mr-[6.5px] mt-0 rounded-lg hover:bg-blue-500/5 hover:text-blue-500/90 transition-colors  text-[14.3px] leading-[21.45px] font-medium "
                onClick={handleDiscard}
              >
                Descartar
              </button>
              <button
                className="bg-blue-500 text-white items-start  py-[11.075px] px-[20.5px] mb-0 ml-0 mr-[6.5px] mt-0 rounded-lg hover:bg-blue-500/80 transition-colors text-[14.3px] leading-[21.45px] font-medium "
                onClick={handleSave}
              >
                Guardar Cambios
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Cambio de Contraseña/Correo y restablecer Contraseña/Correo   */}

      <div className="bg-secondary-100 flex flex-col h-auto mb-[32.5px] min-w-0 relative rounded-xl">
        <div className="items-stretch flex flex-wrap justify-between mb-0 min-h-[70px] pb-0 px-[29.25px] pt-0">
          <div className="items-center flex">
            <h3 className="block my-0 mx-0 text-[17.55px] font-semibold text-white">
              Método de inicio de sesión
            </h3>
          </div>
        </div>
        <hr className=" border-gray-500" />
        <div className={``}>
          <div className="basis-auto flex-grow flex-shrink px-[29.25px] py-[29.25px]">
            <div className="items-center flex flex-wrap">
              <div className={`${mostrarFormulario ? "hidden" : ""}`}>
                <div className="mb-[3.25px] text-[13.975px] font-semibold text-white">
                  Dirección de correo electrónico
                </div>
                <div className="text-[13px] font-medium text-grisCustom">
                  {nuevoCorreo}
                </div>
              </div>
              <div
                className={`flex-none basis-auto flex-grow flex-shrink min-w-0 ${
                  mostrarFormulario ? "" : "hidden"
                }`}
              >
                <form action="" className="mt-0">
                  <div className="flex flex-wrap mb-[19.5px] mx-[-9.75px] mt-0">
                    <div className="basis-auto flex-grow-0 flex-shrink-0 mb-0 mt-0 max-w-[100%] px-[9.75px] w-[50%]">
                      <div className="mb-0 relative">
                        <label
                          htmlFor=""
                          className="inline-block mb-[9.75px] text-[13.975px] font-semibold"
                        >
                          Ingrese una nueva dirección de correo electrónico
                        </label>
                        <input
                          className="min-h-[45.875px] py-[10.725px] pl-[19.5px] pr-[42.575px] w-[100%] bg-secondary-900 rounded-xl hover:bg-secondary-900/70 transition-colors text-[14.95px] leading-[22.425px] font-medium"
                          type="email"
                          placeholder="Dirección de correo electrónico"
                          value={nuevoCorreoInput}
                          onChange={(e) => setNuevoCorreoInput(e.target.value)}
                        />
                        <div className="mt-[6.5px] w-[100%]"></div>
                      </div>
                    </div>
                    <div className="basis-auto flex-grow-0 flex-shrink-0 mb-0 mt-0 max-w-[100%] px-[9.75px] w-[50%]">
                      <div className="mb-0 relative">
                        <label
                          htmlFor=""
                          className="inline-block mb-[9.75px] text-[13.975px] font-semibold"
                        >
                          confirmar Contraseña
                        </label>
                        <input
                          className="min-h-[45.875px] py-[10.725px] pl-[19.5px] pr-[42.575px] w-[100%] bg-secondary-900 rounded-xl hover:bg-secondary-900/70 transition-colors text-[14.95px] leading-[22.425px] font-medium"
                          type="password"
                          name="confirmemailpassword"
                        />
                        <div className="mt-[6.5px] w-[100%]"></div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        actualizarCorreoHandler();
                      }}
                      className="items-start mb-0 ml-0 mr-[6.5px] mt-0 px-[19.5px] py-[11.075px] bg-blue-500 text-white text-[14.3px] rounded-lg"
                    >
                      Actualizar Correo
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        ocultarFormularioHandler();
                      }}
                      className="items-start mb-0 ml-0 mr-0 mt-0 px-[19.5px] py-[11.075px] bg-secondary-900 rounded-lg text-grisCustom hover:bg-secondary-900/70 transition-colors"
                    >
                      Cancelar
                    </button>
                  </div>
                </form>
              </div>
              <div
                className={`${mostrarFormulario ? "hidden" : "ml-[768.875px]"}`}
              >
                <button
                  onClick={mostrarFormularioHandler}
                  className="text-start inline-block px-[20.5px] py-[11.075px] bg-secondary-900 text-grisOscuroV2custom  text-[14.3px] rounded-lg"
                >
                  Cambiar Correo
                </button>
              </div>
            </div>
            <div className="h-[1px] mb-[19.5px] mt-[19.5px] border-grisOscuroCustom border-[1px] border-dashed"></div>
            <div className="items-center flex flex-wrap mb-[32.5px]">
              <div className={`${mostrarFormulario2 ? "hidden" : ""}`}>
                <div className="mb-[3.25px] text-[13.975px] font-semibold text-white">
                  Contraseña
                </div>
                <div className="text-[13px] font-medium">{nuevaContrasena}</div>
              </div>
              <div
                className={`flex-none basis-auto flex-grow flex-shrink min-w-0 ${
                  mostrarFormulario2 ? "" : "hidden"
                }`}
              >
                <form action="" className="mt-0">
                  <div className="flex flex-wrap mb-[3.25px] mx-[-9.75px] mt-0">
                    <div className="block basis-auto flex-grow-0 flex-shrink-0 mt-0 max-w-[100%] px-[9.75px] w-[370.328px]">
                      <div className="mb-0 relative">
                        <label
                          htmlFor=""
                          className="inline-block mb-[9.75px] text-[13.975px] font-semibold"
                        >
                          Contraseña actual
                        </label>
                        <input
                          type="text"
                          className="min-h-[45.875px] px-[19.5px] py-[10.725px] w-[350.828px] bg-secondary-900 rounded-lg"
                        />
                        <div className="mt-[6.5px] w-[350.828px]"></div>
                      </div>
                    </div>
                    <div className="block basis-auto flex-grow-0 flex-shrink-0 mt-0 max-w-[100%] px-[9.75px] w-[370.328px]">
                      <div className="mb-0 relative">
                        <label
                          htmlFor=""
                          className="inline-block mb-[9.75px] text-[13.975px] font-semibold"
                        >
                          Nueva Contraseña
                        </label>
                        <input
                          type="text"
                          className="min-h-[45.875px] px-[19.5px] py-[10.725px] w-[350.828px] bg-secondary-900 rounded-lg"
                        />
                        <div className="mt-[6.5px] w-[350.828px]"></div>
                      </div>
                    </div>
                    <div className="block basis-auto flex-grow-0 flex-shrink-0 mt-0 max-w-[100%] px-[9.75px] w-[370.328px]">
                      <div className="mb-0 relative">
                        <label
                          htmlFor=""
                          className="inline-block mb-[9.75px] text-[13.975px] font-semibold"
                        >
                          Confirmar Nueva Contraseña
                        </label>
                        <input
                          type="text"
                          className="min-h-[45.875px] px-[19.5px] py-[10.725px] w-[350.828px] bg-secondary-900 rounded-lg"
                        />
                        <div className="mt-[6.5px] w-[350.828px]"></div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-[16.25px] mt-[6.5px]">
                    La contraseña debe tener al menos 8 caracteres y contener
                    símbolos.
                  </div>
                  <div className="flex">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        ocultarFormularioHandler2();
                      }}
                      className="items-start mb-0 ml-0 mr-[6.5px] mt-0 px-[19.5px] py-[11.075px] bg-blue-500 text-white text-[14.3px] rounded-lg"
                    >
                      Actualiza contraseña
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        ocultarFormularioHandler2();
                      }}
                      className="items-start mb-0 ml-0 mr-0 mt-0 px-[19.5px] py-[11.075px] bg-secondary-900 rounded-lg text-grisCustom hover:bg-secondary-900/70 transition-colors"
                    >
                      Cancelar
                    </button>
                  </div>
                </form>
              </div>
              <div
                className={`ml-[859.547px] ${
                  mostrarFormulario ? "hidden" : ""
                }`}
              >
                <button
                  onClick={mostrarFormularioHandler2}
                  className="items-start inline-block py-[11.075px] px-[20.5px] text-[14.3px] font-medium bg-secondary-900 rounded-lg text-grisOscuroV2custom hover:bg-secondary-900/80"
                >
                  Restablecer contraseña
                </button>
              </div>
            </div>
            <div className="flex px-[19.5px] py-[19.5px] border border-dashed border-blue-500 rounded-xl bg-blue-500/10">
              <BsShieldFillCheck className="flex mr-[13px] relative text-[35.75px] font-normal text-blue-500/60" />
              <div className="items-center flex flex-grow flex-nowrap justify-between">
                <div className="mb-0">
                  <h4 className="mb-[6.5px] mt-0">Asegure su cuenta</h4>
                  <div className="pr-[22.75px] text-[13.975px] font-medium">
                    La autenticación de dos factores agrega una capa adicional
                    de seguridad a su cuenta. Para iniciar sesión, además
                    deberás proporcionar un código de 6 dígitos
                  </div>
                </div>
                <a
                  href=""
                  className="items-center px-[19.5px] py-[11.075px] font-medium text-[14.3px] bg-blue-500 rounded-lg text-white"
                >
                  Permitir
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
