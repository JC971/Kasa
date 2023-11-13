import React from "react";
import FootLogo from "../assets/FootLogo.png";
import AllRights from "../assets/AllRights.png";
import "../styles/footer.scss";
import Rights from "../assets/Rights.png";

const Footer = () => {
	return (
		<div>
			<div className="footer-container">
				<div className="footer-container__items">
					<img src={FootLogo} alt="logo kasa" className="footLogo" />
					<img src={AllRights} alt="rights" className="allRights"/>
					<img src={Rights} alt="rights" className="smallRights-image"/>
				</div>
			</div>
		</div>
	);
};

export default Footer;
