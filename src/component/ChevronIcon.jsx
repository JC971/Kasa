import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/chevronIcon.scss";

const ChevronIcon = ({ className, onClick }) => {
	return (
		<div className={`image-with-chevrons ${className}`} onClick={onClick}>
			<span>
				<FontAwesomeIcon icon={faChevronLeft} />
			</span>
			<span>
				<FontAwesomeIcon icon={faChevronRight} />
			</span>
		</div>
	);
}; 

export default ChevronIcon;
