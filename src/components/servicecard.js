import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

export function ServiceCard(props) {
	return (
		<Card className="bg-light rounded border border-light text-center service-card">
			<Card.Img variant="top" src={props.serviceBackgroundImg} />
			<Card.Body>
				<Card.Title>{props.serviceTitle}</Card.Title>
				<Card.Text>{props.serviceDescription}</Card.Text>
				<Link to={"/providers/" + props.index} className="servicelink">
					<span>VIEW ALL {props.serviceTitle} PROVIDERS</span>
				</Link>
			</Card.Body>
		</Card>
	);
}

ServiceCard.propTypes = {
	serviceTitle: PropTypes.string,
	serviceDescription: PropTypes.string,
	serviceID: PropTypes.number,
	serviceBackgroundImg: PropTypes.string,
	index: PropTypes.number
};