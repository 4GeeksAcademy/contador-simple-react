import Contador from "./Contador";
import React, { useState, useEffect } from "react";
import "../../styles/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faRotateRight, faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [time, setTime] = useState(0);
  const [countdownTime, setCountdownTime] = useState(0);
  const [counterActive, setCounterActive] = useState(false);

  const handlePlay = () => {
      setCounterActive(true);
  };

  const handlePause = () => {
    setCounterActive(false);
};

const handleReset = () => {
  setCounterActive(false);
  setTime(0);
};

  useEffect(() => {
    const interval = setInterval(() => {
      if (counterActive) {
        setTime((prevTime) => prevTime + 1);        
      }
    }, 500);

    return () => clearInterval(interval);
  }, [counterActive]);

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
          <Contador unidad={cienMillares.toString()} />
        </div>
        <div className="col">
          <Contador unidad={diezMillares.toString()} />
        </div>
        <div className="col">
          <Contador unidad={millares.toString()} />
        </div>
        <div className="col">
          <Contador unidad={centenas.toString()} />
        </div>
        <div className="col">
          <Contador unidad={decenas.toString()} />
        </div>
        <div className="col">
          <Contador unidad={unidades.toString()} />
        </div>
      </div>
      <div className="row my-4 py-4 input-group">
        <div className="col-4">
          <div className="input-group">
            <input
              className="form-control"
              type="number"
              aria-label="With input"
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-alert"
            >
              Generar alerta
            </button>
          </div>
          <div className="form-text" id="basic-addon4">
            Ingresa un tiempo para generar alerta
          </div>
        </div>
        <div className="col-4">
          <div className="input-group">
            <input
              className="form-control"
              type="number"
              aria-label="With input"
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-regresiva"
            >
              Iniciar regresiva
            </button>
          </div>
          <div className="form-text" id="basic-addon4">
            Ingresa un tiempo para iniciar cuenta regresiva
          </div>
        </div>
        <div className="col-4 text-center d-flex">
          <div className="col">
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-play"
              onClick={handlePlay}
            >
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>
          <div className="col">
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-pause"
              onClick={handlePause}
            >
              <FontAwesomeIcon icon={faPause} />
            </button>
          </div>
          <div className="col">
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-reset"
              onClick={handleReset}
            >
              <FontAwesomeIcon icon={faRotateRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
