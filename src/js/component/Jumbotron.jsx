import React from "react";

function Jumbotron() {
	return (
		<div className="jumbotron container">
			<h1 className="display-4">The best magic story...</h1>
			<p className="lead">
            Harry Potter es una serie de novelas fantásticas escrita por la autora británica J. K. Rowling, en la que se describen las aventuras del joven aprendiz de magia y hechicería Harry Potter y sus amigos Hermione Granger y Ron Weasley, durante los años que pasan en el Colegio Hogwarts de Magia y Hechicería.
			</p>
			<hr className="my-4" />
			<p className="lead">
				<a
					className="btn btn-primary btn-lg"
					href="https://www.youtube.com/watch?v=lIMokbMWz9o"
					role="button">
					Call to action!
				</a>
			</p>
		</div>
	);
}
export default Jumbotron;
