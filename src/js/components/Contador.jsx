import React from "react";
import "../../styles/contador.css";
import PropTypes from "prop-types";

const Contador = (props) => {
  return (
    <div className="col-auto unity d-flex justify-content-center align-items-center mx-2">
      <div className="p-3">{props.unidad}</div>
    </div>
  );
};

Contador.propTypes = {
  unidad: PropTypes.string,
};

Contador.defaultProps = {
  unidad: "N",
};

export default Contador;
