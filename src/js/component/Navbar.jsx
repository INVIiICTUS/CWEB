import React from "react";

function Navbar() {
	return (
		<div className="container ">
			<nav className="navbar  navbar-expand-lg d-flex justify-content-between navbar-light p-50 ">
				
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav mx-auto">
							<li className="nav-item active">
								<a className="nav-link text-white" href="https://www.wizardingworld.com/">
									HOME{" "}
									<span className="sr-only">(current)</span>
								</a>
							</li>
							{/*<li>
							<a className="nav-link text-white" href="#">
									{""} 
									<span className="sr-only">(current)</span>
									<iframe width="30" height="25" src="https://www.youtube.com/embed/T8D8vEcZrqM?start=3">PLAY</iframe>
									</a>
	</li>*/}
							<li className="nav-item">
								<a className="nav-link text-white" href="https://es.wikipedia.org/wiki/Harry_Potter">
									ABOUT
								</a>
							</li>
							
						</ul>
					</div>
				
			</nav>
		</div>
	);
}

export default Navbar;
