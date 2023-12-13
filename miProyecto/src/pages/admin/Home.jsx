import React, { useState } from "react";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  const iframeStyles = {
    borderRadius: "10px",
    boxShadow: isHovered ? "0 8px 16px rgba(0, 0, 0, 0.2)" : "none", // Agrega sombra en hover
    transition: "background-color 0.3s, box-shadow 0.3s ease-in-out", // Transición para el efecto de hover
    appearance: "none", // Agrega la propiedad appearance
    border: "none", // Agrega la propiedad border
  };

  return (
    <div className="w-auto h-auto">
      <iframe
        title="Grafico Datos"
        width="1270"
        height="750"
        appearance="none"
        src="https://app.powerbi.com/reportEmbed?reportId=0c07897b-d71a-40e5-974f-77ae5d7dadf6&autoAuth=true&ctid=72fd0b5a-8a6a-4cff-89f6-bde961f7e250"
        allowFullScreen={false}
        style={iframeStyles}
        className="w-full  "
        onMouseOver={handleHover}
        onMouseOut={handleLeave}
      ></iframe>
    </div>
  );
};

export default Home;
