import React from "react";

//include images into your bundle

//create your first component
export function Navbar() {
	return (
		<nav className="navbar navbar-expand-sm d-flex justify-content-around sticky-top">
			<div className="navbar-logo justify-content-right" href="#">
				<div className="container page_logo ">
					<img
						className="picture"
						src="https://i.ibb.co/SQvdGwL/ct-horizontal.png"
					/>
				</div>
			</div>
			<div className="container d-flex navigation_options">
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavDropdown"
					aria-controls="navbarNavDropdown"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div
					className="collapse navbar-collapse justify-content-center"
					id="navbarNavDropdown">
					<ul className="navbar-nav">
						<li className="btn nav-item active">
							<a
								className="nav-link font-weight-bold text-dark"
								href="#">
								Home <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="btn nav-item">
							<a
								className="nav-link font-weight-bold text-dark"
								href="#">
								Services
							</a>
							<div className="dropdown-menu">
								<a className="dropdown-item" href="#">
									Action
								</a>
								<a className="dropdown-item" href="#">
									Another action
								</a>
								<a className="dropdown-item" href="#">
									Something else here
								</a>
								<div className="dropdown-divider" />
								<a className="dropdown-item" href="#">
									Separated link
								</a>
							</div>
						</li>
						<li className="btn nav-item">
							<a
								className="nav-link font-weight-bold text-dark"
								href="#">
								About us
							</a>
						</li>
						<li className="btn nav-item">
							<a
								className="nav-link font-weight-bold text-dark"
								href="#">
								Past events
							</a>
						</li>
						<li className="btn btn-info nav-item">
							<a
								className="nav-link font-weight-bold text-white"
								href="#">
								Contact us!
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
