import React from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

const Grafico_3 = () => {
  const data = {
    labels: ["Usuarios", "Administrador", "Errores"], // Modifica los labels aquí
    datasets: [
      {
        data: [1988, 72, 291],
        backgroundColor: ["#00A261", "#36A2EB", "#E42855"],
        hoverBackgroundColor: ["#00A261", "#36A2EB", "#E42855"],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: "white",
          usePointStyle: true, // Para que los labels parezcan botones
        },
        position: "right", // Puedes cambiar la posición a 'top', 'left', 'right' según tu preferencia
      },
    },
    // Desactiva el mantenimiento del aspecto para permitir dimensiones personalizadas
    responsive: true, // Activa la capacidad de respuesta del gráfico
    width: 450, // Ancho del gráfico
    height: 350,
  };

  return (
    <div className="w-[808.75px] h-[300px]">
      <Pie data={data} options={options} />
    </div>
  );
};

export default Grafico_3;
