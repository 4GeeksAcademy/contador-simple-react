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
    <div className="container p-5 bg-dark my-5">
      <div className="row row-cols-7 justify-content-md-center ">
        <div className="col">
          <Contador
            unidad={
              <FontAwesomeIcon icon={faClock} style={{ fontSize: "7rem" }} />
            }
          />
        </div>
        <div className="col">
          <Contador unidad={cienMillares} />
        </div>
        <div className="col">
          <Contador unidad={diezMillares} />
        </div>
        <div className="col">
          <Contador unidad={millares} />
        </div>
        <div className="col">
          <Contador unidad={centenas} />
        </div>
        <div className="col">
          <Contador unidad={decenas} />
        </div>
        <div className="col">
          <Contador unidad={unidades} />
        </div>
      </div>
      <div className="row">
        <div className="col"></div>
      </div>
    </div>
  );
};

export default Home;
