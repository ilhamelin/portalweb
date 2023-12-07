import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel_1 = () => {
  const settings = {
    dots: true, // Muestra los puntos de navegación
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: false,
  };

  return (
    <div className="">
      <h4 className="text-[16.25px] font-medium text-grisOscuroV2custom">
        Alertas recientes
      </h4>
      <Slider {...settings}>
        <div className="flex-grow pt-[19.5px] ">
          <a href="#" className="text-[14.95px] font-semibold text-white">
            Últimos anuncios
          </a>
          <p className="text-[13.975px] pt-[9.75px] font-medium text-start text-grisOscuroCustom">
            En el último año probablemente hayas tenido que adaptarte a nuevas
            formas de vivir y trabajar.{" "}
          </p>
          <div className="flex justify-between items-center pt-[26px]">
            <span className="items-center flex mr-[6.5px] py-[4.225px] px-[6.5px] bg-blue-500/10 rounded-lg text-[12.35px] font-semibold text-blue-500">
              Junio 10, 2021
            </span>
            <a
              href="#"
              className="block px-[14px] py-[8.15px] text-[12.35px] font-medium bg-secondary-900/50 rounded-lg hover:bg-secondary-900/70 transition-colors"
            >
              Leer mas
            </a>
          </div>
        </div>

        <div className="flex-grow pt-[19.5px] ">
          <a href="#" className="text-[14.95px] font-semibold text-white">
            Intento de acceso fallido
          </a>
          <p className="text-[13.975px] pt-[9.75px] font-medium text-start text-grisOscuroCustom">
            A medida que nos acercamos a un año de trabajo remoto, queríamos
            echar una mirada atrás. y comparta algunas formas en que equipos de
            todo el mundo han colaborado de manera efectiva.{" "}
          </p>
          <div className="flex justify-between items-center pt-[26px]">
            <span className="items-center flex mr-[6.5px] py-[4.225px] px-[6.5px] bg-blue-500/10 rounded-lg text-[12.35px] font-semibold text-blue-500">
              Oct 05, 2021
            </span>
            <a
              href="#"
              className="block px-[14px] py-[8.15px] text-[12.35px] font-medium bg-secondary-900/50 rounded-lg hover:bg-secondary-900/70 transition-colors"
            >
              Ver
            </a>
          </div>
        </div>

        <div className="flex-grow pt-[19.5px] ">
          <a href="#" className="text-[14.95px] font-semibold text-white">
            Últimos anuncios
          </a>
          <p className="text-[13.975px] pt-[9.75px] font-medium text-start text-grisOscuroCustom">
            Hoy nos complace compartir una increíble oportunidad de
            certificación diseñada para enseñarle todo.{" "}
          </p>
          <div className="flex justify-between items-center pt-[26px]">
            <span className="items-center flex mr-[6.5px] py-[4.225px] px-[6.5px] bg-blue-500/10 rounded-lg text-[12.35px] font-semibold text-blue-500">
              Sep 11, 2021
            </span>
            <a
              href="#"
              className="block px-[14px] py-[8.15px] text-[12.35px] font-medium bg-secondary-900/50 rounded-lg hover:bg-secondary-900/70 transition-colors"
            >
              Colaborar
            </a>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel_1;
