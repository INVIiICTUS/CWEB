import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";
import Audio from "./useAudio.jsx"
//include the Navbar

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<Card />
			<Footer />
			{/* <useAudio /> */}
		</div>

	);
};

export default Home;
