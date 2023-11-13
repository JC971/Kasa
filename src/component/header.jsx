
import "../styles/header.scss";
import image from "../assets/banner.png";
import logo from "../assets/logo.svg";
import { Link, useLocation } from "react-router-dom";
import newImage from "../assets/banner2.jpg";

function Header() {
	const location = useLocation();


	const displayImage = location.pathname === "/About" ? newImage : image;

	return (
		<div className="nav-container">
			<div className="header-container">
				<div className="nav">
					<div className="entoure">
						<img src={logo} alt="{logo.name}" />
					</div>
					<ul>
						<li>
							<Link to="/">Accueil</Link>
						</li>
						<li>
							<Link to="/About">À propos</Link>
						</li>
					</ul>
				</div>

				{!location.pathname.startsWith("/apartment/") && (
					<div className="image-container">
						<img className="header-banner" src={displayImage} alt="banner" />
						{location.pathname === "/" && (
							<div className="textImage">Chez vous, partout et ailleurs</div>
						)}
					</div>
				)}
			</div>
		</div>
	);
}

export default Header;


