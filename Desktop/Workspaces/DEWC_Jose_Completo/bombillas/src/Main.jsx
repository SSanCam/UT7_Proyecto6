import React, { useState } from "react";
import Bombilla from "./components/Bombilla";
import TiraLuces from "./components/TiraLuces";

const Main = () => {
  // Estado independiente para cada luz RGB
  const [rgbStates, setRgbStates] = useState({
    red: true,
    green: true,
    blue: true,
  });

  // Función para alternar el estado de una luz RGB
  const toggleLight = (color) => {
    setRgbStates((prevStates) => ({
      ...prevStates,
      [color]: !prevStates[color], // Alternar el estado de la luz específica
    }));
  };

  return (
    <div style={{ textAlign: "center", color: "white", padding: "20px" }}>
      {/* Sección RGB */}
      <h1>Luces RGB</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "40px" }}>
        {/* Bombilla RGB genérica con color */}
        <div onClick={() => toggleLight("red")}>
          <Bombilla color="red" offColor="darkred" encendida={rgbStates.red} />
        </div>
        <div onClick={() => toggleLight("green")}>
          <Bombilla color="green" offColor="darkgreen" encendida={rgbStates.green} />
        </div>
        <div onClick={() => toggleLight("blue")}>
          <Bombilla color="blue" offColor="darkblue" encendida={rgbStates.blue} />
        </div>
      </div>

      <hr style={{ borderColor: "gray", margin: "40px auto", width: "80%" }} />

      {/* Sección Tira de Luces Navideñas */}
      <h1>Tira de Luces Navideñas</h1>
      <TiraLuces />
    </div>
  );
};

export default Main;
