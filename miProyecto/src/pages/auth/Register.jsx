import React, { useState } from "react";
import { Link } from "react-router-dom";

//icons React
import {
  RiUserLine,
  RiLockLine,
  RiEyeLine,
  RiEyeOffLine,
} from "react-icons/ri";

import { MdOutlineMail } from "react-icons/md";

//icons
import google from "../../assets/icons/google-v3.png";
import Ojo from "../../assets/icons/ojo.png";
import OjoCerrado from "../../assets/icons/pestanas.png";
import Correo from "../../assets/icons/correo-electronico.png";
import Candado from "../../assets/icons/candado-v1.png";
import Usuario from "../../assets/icons/usuario-nuevo.png";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSaveToLocal = () => {
    // Guardar datos en el localStorage
    localStorage.setItem("registrationData", JSON.stringify(formData));
    alert("Datos de registro guardados localmente");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica de registro, por ejemplo, enviar los datos al servidor

    // Después de procesar los datos, guarda la información en el localStorage
    handleSaveToLocal();

    // Resto de la lógica de registro...
  };

  // Resto del componente...

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px] ">
        <h1 className="text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8 rounded-full">
          Crear <span className="text-primary border-b py-2">Cuenta</span>
        </h1>
        <form className="mb-8" onSubmit={handleRegister}>
          <button className="flex items-center justify-center py-3 px-4 gap-4 bg-secondary-900 w-full text-center rounded-full mb-8 text-gray-100">
            <img src={google} className="w-6 h-6" />
            Ingresar con Google
          </button>
          <div className="relative mb-4">
            <RiUserLine className=" text-primary w-5 h-5 absolute top-1/2 -translate-y-1/2 left-2  " />
            <input
              type="text"
              className="py-3 pl-8 pr-4 px-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
              placeholder="Nombre(s)"
            />
          </div>
          <div className="relative mb-4">
            <RiUserLine className=" text-primary w-5 h-5 absolute top-1/2 -translate-y-1/2 left-2  " />
            <input
              type="text"
              className="py-3 pl-8 pr-4 px-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
              placeholder="Apellido"
            />
          </div>
          <div className="relative mb-4">
            <MdOutlineMail className=" text-primary w-5 h-5 absolute top-1/2 -translate-y-1/2 left-2  " />
            <input
              type="Email"
              className="py-3 pl-8 pr-4 px-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
              placeholder="Correo Electronico"
            />
          </div>

          <div className="relative mb-4">
            <RiLockLine className=" text-primary w-5 h-5 absolute top-1/2 -translate-y-1/2 left-2 " />
            <input
              type={showPassword ? "text" : "password"}
              className="py-3 px-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
              placeholder="Contraseña"
            />
            {showPassword ? (
              <RiEyeLine
                onClick={() => setShowPassword(!showPassword)}
                className="text-primary w-5 h-5 absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer"
              />
            ) : (
              <RiEyeOffLine
                onClick={() => setShowPassword(!showPassword)}
                className="text-primary w-5 h-5 absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer"
              />
            )}
          </div>
          <div className="relative mb-8">
            <RiLockLine className=" text-primary w-5 h-5 absolute top-1/2 -translate-y-1/2 left-2 " />
            <input
              type={showPassword ? "text" : "password"}
              className="py-3 px-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
              placeholder="Escribe tu Contraseña de nuevo"
            />
            {showPassword ? (
              <RiEyeLine
                onClick={() => setShowPassword(!showPassword)}
                className="text-primary w-5 h-5 absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer"
              />
            ) : (
              <RiEyeOffLine
                onClick={() => setShowPassword(!showPassword)}
                className="text-primary w-5 h-5 absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer"
              />
            )}
          </div>
          <div>
            <button
              type="submit"
              className="bg-primary text-white uppercase font-bold text-sm w-full py-3 px-4 rounded-lg hover:text-gray-100 transition-colors"
            >
              Registrarme
            </button>
          </div>
        </form>
        <span className="flex items-center justify-center gap-2">
          ¿Ya tienes cuenta?
          <Link
            to="/Login"
            className="text-primary/80 hover:text-gray-100 transition-colors"
          >
            Ingresar
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
