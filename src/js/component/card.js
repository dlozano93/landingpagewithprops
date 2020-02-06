import React from "react";
import PropTypes from "prop-types";

//include images into your bundle

//create your first component
export function Card(props) {
	return (
		<div className="card mx-2" style={{ width: "200px" }}>
			<img
				className="card-img-top"
				src={props.img}
				alt="Card image cap"
			/>
			<div className="card-body">
				<div className="col text-center">
					<h5 className="card-title">{props.title}</h5>
				</div>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the card
					{"'"}s content.
				</p>
				<div className="col text-center">
					<a href={props.webpage} className={props.btn}>
						Go there!
					</a>
				</div>
			</div>
		</div>
	);
}

Card.propTypes = {
	webpage: PropTypes.string,
	title: PropTypes.string,
	img: PropTypes.string,
	btn: PropTypes.string
};
