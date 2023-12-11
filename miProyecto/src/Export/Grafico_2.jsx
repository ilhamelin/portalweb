import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const Grafico_2 = () => {
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
        label: "Reportes Mensuales",
        data: [25, 12, 19, 3, 5, 2, 16, 18, 21, 27, 10, 6],
        fill: false,
        backgroundColor: "#5353ec",
        borderColor: "#5353ec",
        tension: 0.4,
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
          color: "rgba(107, 114, 128, 0.5)", // Líneas de fondo del eje X completamente transparentes
          borderDash: [2, 2], // Establece el estilo de línea punteada
          drawTicks: true,
        },
        ticks: {
          color: "white",
        },
      },
      x: {
        beginAtZero: true,
        grid: {
          color: "rgba(255, 255, 255, 0)", // Líneas de fondo del eje X completamente transparentes
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
        },
      },
    },
  };

  return (
    <>
      <div className="bg-secondary-100 p-6 rounded-lg h-auto w-auto text-white">
        <div className="relative">
          <Line data={data} options={options} />
        </div>
      </div>
    </>
  );
};

export default Grafico_2;
