import React from "react";
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Card } from "./card";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<>
			<Navbar />

			<Jumbotron />
			<div className="container-fluid d-flex justify-content-around my-5">
				<Card
					webpage="https://amazon.com/"
					img="https://www.androidworld.it/wp-content/uploads/2013/03/Amazon-logo.jpg"
					title="Amazon"
					btn="btn btn-danger"
				/>
				<Card
					webpage="https://www.facebook.com"
					img="https://www.pymnts.com/wp-content/uploads/2018/02/facebookpublisher.jpg"
					title="Facebook"
					btn="btn btn-success"
				/>
				<Card
					webpage="https://www.instagram.com"
					img="https://miro.medium.com/max/4086/1*V7GYJQ_4lykfDzOf9q17eA.jpeg"
					title="Instagram"
					btn="btn btn-warning"
				/>
				<Card
					webpage="https://www.linkedin.com"
					img="https://i.pcmag.com/imagery/reviews/05QJZocZxCTxBBzuKYOJMWZ-5.fit_scale.size_2698x1517.jpg"
					title="Linkedin"
					btn="btn btn-dark"
				/>
				<Card
					webpage="https://www.google.com"
					img="https://pbs.twimg.com/profile_images/1216813945408966663/vkVajfRz_400x400.jpg"
					title="Google"
					btn="btn btn-info"
				/>
			</div>
			<div className="container-fluid d-flex justify-content-around my-5">
				<Card
					webpage="https://amazon.com/"
					img="https://www.androidworld.it/wp-content/uploads/2013/03/Amazon-logo.jpg"
					title="Amazon"
					btn="btn btn-danger"
				/>
				<Card
					webpage="https://www.facebook.com"
					img="https://www.pymnts.com/wp-content/uploads/2018/02/facebookpublisher.jpg"
					title="Facebook"
					btn="btn btn-success"
				/>
				<Card
					webpage="https://www.instagram.com"
					img="https://miro.medium.com/max/4086/1*V7GYJQ_4lykfDzOf9q17eA.jpeg"
					title="Instagram"
					btn="btn btn-warning"
				/>
				<Card
					webpage="https://www.linkedin.com"
					img="https://i.pcmag.com/imagery/reviews/05QJZocZxCTxBBzuKYOJMWZ-5.fit_scale.size_2698x1517.jpg"
					title="Linkedin"
					btn="btn btn-dark"
				/>
				<Card
					webpage="https://www.google.com"
					img="https://pbs.twimg.com/profile_images/1216813945408966663/vkVajfRz_400x400.jpg"
					title="Google"
					btn="btn btn-info"
				/>
			</div>
		</>
	);
}
