import React from "react";
import "../styles/Encabezado.module.css";

const textosDeEnlaces = ["Docs", "About", "Help us"];
const tranformarTextos = (textoDeEnlace) => {
  return (
    <li
      style={{
        marginLeft: "1rem",
      }}
    >
      <a
        style={{
          color: "var(--naranja)",
        }}
        href="/"
      >
        {textoDeEnlace}
      </a>
    </li>
  );
};

const enlaces = textosDeEnlaces.map(tranformarTextos);

const Encabezado = () => {
  return (
    <header>
      <nav>
        <ul
          style={{
            padding: "0",
            margin: "0",
            display: "flex",
          }}
        >
          {enlaces}
        </ul>
      </nav>
    </header>
  );
};

export default Encabezado;
