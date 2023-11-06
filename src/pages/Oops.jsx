import React from "react";
import { useLocation } from "react-router-dom";
import OpsHeader from "../component/OpsHeader";

const Oops = () => {
	const location = useLocation();

	
	const isOopsPage = location.pathname === "/oops";

	return (
		<div>
			{isOopsPage ? null : <OpsHeader />}{" "}
			
			<h1>404</h1>
		</div>
	);
};

export default Oops;
