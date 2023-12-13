import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";

//icons React
import {
  RiLockLine,
  RiMailLine,
  RiEyeLine,
  RiEyeOffLine,
  RiGoogleFill,
} from "react-icons/ri";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  // LOGICA LOGIN / BACKEND

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, isAuthenticated, errors: signinErrors } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px] ">
        <h1 className="text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8 rounded-full">
          Iniciar{" "}
          <span className="text-sunsetOrange border-b py-2">sesion</span>
        </h1>
        {signinErrors.map((error, i) => (
          <div
            className="bg-RojoCustom p-2 text-white rounded-lg my-[15px] text-center "
            key={i}
          >
            {error}
          </div>
        ))}
        <form className="mb-8" onSubmit={onSubmit}>
          {/* <button className="flex items-center justify-center py-3 px-4 gap-4 bg-secondary-900 w-full text-center rounded-full mb-8 text-gray-100">
            <RiGoogleFill className=" text-primary w-6 h-6" />
            Ingresar con Google
          </button> */}
          <div className="relative mb-4">
            <RiMailLine className=" text-primary w-5 h-5 absolute top-1/2 -translate-y-1/2 left-2  " />
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
              className="py-3 px-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
              placeholder="Contraseña"
            />
            {showPassword ? (
              <RiEyeLine
                onClick={() => setShowPassword(!showPassword)}
                className=" text-primary w-5 h-5 absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer"
              />
            ) : (
              <RiEyeOffLine
                onClick={() => setShowPassword(!showPassword)}
                className=" text-primary w-5 h-5 absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer"
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
              className="bg-primary text-white uppercase font-bold text-sm w-full py-3 px-4 rounded-lg hover:text-gray-100 transition-colors"
            >
              Ingresar
            </button>
          </div>
        </form>

        <div className="flex flex-col items-center gap-4 text-gray-100">
          <Link
            to="/olvide-password"
            className="hover:text-primary transition-colors"
          >
            ¿Olvidaste tu Contraseña?
          </Link>
          <span className="flex items-center gap-2">
            ¿No tienes cuenta?
            <Link
              to="/registro"
              className="text-primary/80 hover:text-gray-100 transition-colors"
            >
              Registrate
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
