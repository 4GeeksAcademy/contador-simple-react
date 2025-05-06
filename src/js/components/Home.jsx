import React from "react";
import Contador from "./Contador";
import React, { useState, useEffect } from "react";
import "../../styles/home.css";

const Home = () => {
	return (
		<div>
			<Contador unidad= {unidades}/>
		</div>
	);
};

export default Home;