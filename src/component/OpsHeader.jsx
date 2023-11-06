import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import "../styles/oops.scss";

const OpsHeader = () => {
	return (
		<header className="nav">
			<Link to="/">
				<img src={Logo} alt="logo kasa" />
			</Link>
			
				<ul>
					<li>
						<Link to="/">Accueil</Link>
					</li>
					<li>
						<Link to="/about">À propos</Link>
					</li>
				</ul>
			
		</header>
	);
};

export default OpsHeader;
