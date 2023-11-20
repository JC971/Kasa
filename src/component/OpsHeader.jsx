import React from "react";
import { Link } from "react-router-dom";
import "../styles/oops.scss";

const ApartmentNotFound = () => {
	return (
		<div className="not-found">
			<div className="erreur-page">404</div>
			<div className="oops">Oups! la page que vous demandez n'existe pas.</div>
			<div className="broken-link">
				<Link to="/">Retouner à la page d'accueil</Link>
			</div>
		</div>
	);
};

export default ApartmentNotFound;
