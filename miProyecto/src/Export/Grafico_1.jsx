import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const Grafico_1 = () => {
  const data = {
    labels: [
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
    ],
    datasets: [
      {
        label: "Agente",
        data: [25, 12, 19, 3, 5, 2, 16, 18, 21, 27, 10, 6],
        backgroundColor: "#5353ec",
        borderColor: "#5353ec",
        borderWidth: 1,
        borderRadius: 5,
        barThickness: 20,
      },
      {
        label: "Cliente",
        data: [7, 5, 2, 9, 15, 22, 11, 14, 19, 21, 5, 7],
        backgroundColor: "#636674",
        borderColor: "#636674",
        borderWidth: 1,
        borderRadius: 5,
        barThickness: 20,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(255, 255, 255, 0)",
        },
        ticks: {
          color: "white",
        },
      },
      x: {
        beginAtZero: true,
        grid: {
          color: "rgba(255, 255, 255, 0)",
        },
        ticks: {
          color: "white",
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "white",
          usePointStyle: true, // Para que los labels parezcan botones
        },
        position: "bottom", // Puedes cambiar la posición a 'top', 'left', 'right' según tu preferencia
      },
    },
    maintainAspectRatio: false, // Desactiva el mantenimiento del aspecto para permitir dimensiones personalizadas
    responsive: true, // Activa la capacidad de respuesta del gráfico
    width: 500, // Ancho del gráfico
    height: 350, // Altura del gráfico
  };

  return (
    <>
      <div className="w-[808.75px] h-[315px]">
        <Bar data={data} options={options} />
      </div>
    </>
  );
};

export default Grafico_1;
