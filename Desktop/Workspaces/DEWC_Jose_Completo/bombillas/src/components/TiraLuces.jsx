import React, { useState, useEffect } from "react";
import Bombilla from "./Bombilla";
import "./TiraLuces.css";

const TiraLuces = () => {
  const totalBombillas = 9; // Número total de bombillas
  const [activeIndexes, setActiveIndexes] = useState([0, 1, 2]); // Índices iniciales de las bombillas encendidas

  // Efecto para manejar la secuencia
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndexes((prevIndexes) => {
        // Calcular los nuevos índices activos desplazando la ventana
        const nextIndexes = prevIndexes.map((index) => (index + 1) % totalBombillas);
        return nextIndexes;
      });
    }, 1000); // Intervalo de 1 segundo entre cambios

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar
  }, [totalBombillas]);

  return (
    <div className="tira-luces">
      {Array.from({ length: totalBombillas }).map((_, index) => (
        <Bombilla
          key={index}
          color="hsl(60, 100%, 50%)" // Amarillo claro para encendidas
          offColor="hsl(80, 15%,15%)" // Gris oscuro para apagadas
          encendida={activeIndexes.includes(index)} // Solo encendidas si están en los índices activos
        />
      ))}
    </div>
  );
};

export default TiraLuces;
