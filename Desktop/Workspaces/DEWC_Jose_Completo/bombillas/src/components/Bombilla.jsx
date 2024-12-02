import React from "react";
import "./Bombilla.css";

const Bombilla = ({ color, offColor = "darkgray", encendida = false }) => {
  return (
    <div className="bombilla-container">
      <div
        className="bombilla"
        style={{
          backgroundColor: encendida ? color : offColor,
          boxShadow: encendida ? `0 0 20px ${color}` : "none",
        }}
      ></div>
    </div>
  );
};

export default Bombilla;
