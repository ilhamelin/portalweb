import React, { useState } from "react";
import { Link } from "react-router-dom";

//icons
import Correo from "../../assets/icons/correo-electronico.png";

const ForgetPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px] ">
        <h1 className="text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8 rounded-full">
          Restablecer{" "}
          <span className="text-primary border-b py-2">Contraseña</span>
        </h1>
        <h4 className="mb-4 ">
          Ingrese el correo electronico con el que accedes a la Pagina para
          recibir el codigo de verificacion y cambiar tu contraseña
        </h4>
        <form className="mb-8">
          <div className="relative mb-4">
            <img
              className="w-5 h-5 absolute top-1/2 -translate-y-1/2 left-2  "
              src={Correo}
              alt=""
            />
            <input
              type="Email"
              className="py-3 pl-8 pr-4 px-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
              placeholder="Correo Electronico"
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-primary text-white uppercase font-bold text-sm w-full py-3 px-3 mb-4 rounded-lg hover:text-gray-100 transition-colors"
            >
              Enviar Codigo
            </button>
            <button
              type="submit"
              className="bg-primary text-white uppercase font-bold text-sm w-full py-3 px-3 rounded-lg hover:text-gray-100 transition-colors"
            >
              Continuar
            </button>
          </div>
        </form>
        <span className="flex items-center justify-center gap-2">
          ¿Ya tienes cuenta?
          <Link
            to="/auth"
            className="text-primary/80 hover:text-gray-100 transition-colors"
          >
            Ingresar
          </Link>
        </span>
      </div>
    </div>
  );
};

export default ForgetPassword;
