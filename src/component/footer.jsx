import React from "react";
import FootLogo from "../assets/FootLogo.png";
import AllRights from "../assets/AllRights.png";
import "../styles/footer.scss";

const Footer = () => {
	return (
		<div>
			<div className="footer-container">
				<div className="footer-container__items">
					<img src={FootLogo} alt="logo kasa" />
					<img src={AllRights} alt="rights" />
				</div>
			</div>
		</div>
	);
};

export default Footer;
