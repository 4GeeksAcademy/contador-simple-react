import React from "react";
import "../../styles/contador.css";
import PropTypes from "prop-types";

const Contador = (props) => {
  return (
    <div className="unity d-flex align-items-center justify-content-center">
      <div>{props.unidad}</div>
    </div>
  );
};

Contador.propTypes = {
  unidad: PropTypes.oneOfType([
    PropTypes.string, 
    PropTypes.node,  
  ]),
};

Contador.defaultProps = {
  unidad: "N",
};

export default Contador;
