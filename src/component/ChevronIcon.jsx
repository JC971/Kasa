import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/chevronIcon.scss";


const ChevronIcon = ({src, alt}) => {
    return (
			<div className="image-with-chevrons">
				<span faChevronLeft>
					<FontAwesomeIcon icon={faChevronLeft} />
				</span>
				
				<span className="chevron-right">
					<FontAwesomeIcon icon={faChevronRight} />
				</span>
			</div>
		);
};

export default ChevronIcon;