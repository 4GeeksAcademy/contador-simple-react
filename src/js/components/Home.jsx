import Contador from "./Contador";
import React, { useState, useEffect } from "react";
import "../../styles/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

const Home = () => {
  const [time, setTime] = useState(0); // Tiempo total en milisegundos

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1); // Incrementa el tiempo total
    }, 500); // Incrementa cada 500ms

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  // Calcula las cifras individuales
  const unidades = time % 10;
  const decenas = Math.floor((time / 10) % 10);
  const centenas = Math.floor((time / 100) % 10);
  const millares = Math.floor((time / 1000) % 10);
  const diezMillares = Math.floor((time / 10000) % 10);
  const cienMillares = Math.floor((time / 100000) % 10);

  return (
    <div className="container p-5">
      <div className="row gx-5 d-flex justify-content-center align-items-center mx-2">
	  	<Contador unidad={<FontAwesomeIcon icon={faClock} style={{ fontSize: "7rem" }} />}/>
        <Contador unidad={cienMillares} />
        <Contador unidad={diezMillares} />
        <Contador unidad={millares} />
        <Contador unidad={centenas} />
        <Contador unidad={decenas} />
        <Contador unidad={unidades} />
      </div>
    </div>
  );
};

export default Home;
