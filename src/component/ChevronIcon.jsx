import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/chevronIcon.scss";

const ChevronIcon = ({ onLeftClick, onRightClick }) => {
	return (
		<div className="image-with-chevrons">
			<span className="chevron left-chevron" onClick={onLeftClick}>
				<FontAwesomeIcon icon={faChevronLeft} />
			</span>
			<span className="chevron right-chevron" onClick={onRightClick}>
				<FontAwesomeIcon icon={faChevronRight} />
			</span>
		</div>
	);
};

export default ChevronIcon;
