import React from "react";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";
import NavbarCustom from "./Navbar.jsx";
//include the Navbar

//create your first component
const Home = () => {
	return (
		<div>
			<NavbarCustom />
			<Card />
			<Card />
			<Jumbotron />
			<Footer />
		</div>

	);
};

export default Home;
