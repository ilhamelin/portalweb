import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";

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

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  // logica USEFROM

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px] ">
        <h1 className="text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8 rounded-full">
          Crear <span className="text-primary border-b py-2 ">Cuenta</span>
        </h1>
        {registerErrors.map((error, i) => (
          <div
            className="bg-RojoCustom p-2 text-white rounded-lg my-[15px] text-center "
            key={i}
          >
            {error}
          </div>
        ))}
        <form className="mb-8" onSubmit={onSubmit}>
          {/* <button className="flex items-center justify-center py-3 px-4 gap-4 bg-secondary-900 w-full text-center rounded-full mb-8 text-gray-100">
            <img src={google} className="w-6 h-6" />
            Ingresar con Google
          </button> */}
          <div className="relative mb-4">
            <RiUserLine className=" text-primary w-5 h-5 absolute top-1/2 -translate-y-1/2 left-2  " />
            <input
              type="text"
              {...register("username", { required: true })}
              className="border-none py-3 pl-8 pr-4 px-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
              placeholder="Nombre(s)"
            />
          </div>
          {errors.username && (
            <p className="text-RojoCustom text-[12px] font-medium leading-[22px] my-2">
              Nombre es requerido
            </p>
          )}

          <div className="relative mb-4">
            <MdOutlineMail className=" text-primary w-5 h-5 absolute top-1/2 -translate-y-1/2 left-2  " />
            <input
              type="email"
              {...register("email", { required: true })}
              className="border-none py-3 pl-8 pr-4 px-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
              placeholder="Correo Electronico"
            />
          </div>
          {errors.email && (
            <p className="text-RojoCustom text-[12px] font-medium leading-[22px] my-2">
              Correo es requerido
            </p>
          )}

          <div className="relative mb-4">
            <RiLockLine className=" text-primary w-5 h-5 absolute top-1/2 -translate-y-1/2 left-2 " />
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", { required: true })}
              placeholder="Contraseña"
              className="border-none py-3 px-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
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
          {errors.password && (
            <p className="text-RojoCustom text-[12px] font-medium leading-[22px]">
              Contraseña es requerido
            </p>
          )}

          <div>
            <button
              type="submit"
              className="bg-primary text-white uppercase font-bold text-sm w-full py-3 px-4 rounded-lg hover:text-gray-100 transition-colors mt-5"
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
