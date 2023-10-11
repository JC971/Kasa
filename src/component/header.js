import "../styles/style.scss";
import image from "../assets/banner.png";
import logo from "../assets/logo.svg";

function Header() {
	return (
		<div>
			<div className="nav">
				<img src={logo} alt="{logo.name}" />
				
					<ul>
						<li>Accueil</li>
						<li>A propos</li>
					</ul>
				
			</div>
			<img src={image} alt="" />;
		</div>
	);
}

export default Header;
