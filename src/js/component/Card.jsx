import React from "react";
function Card() {
	return (
		<div class="container-lg">
			<div class="row row-cols-1 row-cols-md-4 g-4">
				<div class="col">
					<div class="card">
						<img
							src="https://www.elindependiente.com/wp-content/uploads/2019/07/IMG_3083.jpg"
							class="card-img-top"
							alt="..."
						/>
						<div class="card-body">
							<h5 class="card-title">Harry Potter</h5>
							<p class="card-text">
                            En su undécimo cumpleaños se entera de que es un mago y la trama de los libros se centra principalmente en los años en los que el huérfano Potter concurre al Colegio Hogwarts de Magia y Hechicería para practicar bajo la guía del director Albus Dumbledore y demás profesores. Allí, Harry también descubre que ya es famoso en todo el mundo mágico y que su destino está atado al de Lord Voldemort, el mago tenebroso mundialmente temido y asesino de su madre y su padre.
							</p>
							<a
								href="https://www.youtube.com/watch?v=p5MdXMvddps"
								className="btn btn-primary">
								Find Out More!
							</a>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card">
						<img
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV0bD7_T7CX9yBAt6CbFnVUlyIRPKtca6vrQ&usqp=CAU"
							class="card-img-top"
							alt="..."
						/>
						<div class="card-body">
							<h5 class="card-title">Lord Voldemort</h5>
							<p class="card-text">
                            Voldemort es el enemigo principal de Harry Potter...    quien según una profecía, tiene el poder de vencerlo....    La comunidad mágica teme tanto a Voldemort que prefiere referirse a él como «Quien-Tú-Sabes», «El-Que-No-Debe-Ser-Nombrado», o el «Innombrable» ... Aunque en la primera guerra mágica era diferente (los mortífagos se tocaban la marca tenebrosa) los mortífagos podían saber al instante la ubicación de quien pronunciara el nombre «Voldemort» he ir a por ellos...
							</p>
							<a
								href="https://www.youtube.com/watch?v=RpjH5DB0Wsc"
								className="btn btn-primary">
								Find Out More!
							</a>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card">
						<img
							src="https://static.foxdeportes.com/2021/11/carlo-ancelotti-mira-hacia-su-derecha-real-madrid-rts-v2-545x907.jpg"
							class="card-img-top"
							alt="..."
						/>
						<div class="card-body">
							<h5 class="card-title">Carlo Ancelotti</h5>
							<p class="card-text">
								After the final in Paris, Carleto proclaimed
								himself champion of the Champions League,
								achieving his fourth orejona and thus becoming
								the top coach to have the most European titles
								with an amazing number of four titles. Two with
								AC Milan and another two with Real Madrid. Key
								piece in the leadership of the team and the
								transmission of its peculiar serenity
							</p>
							<a
								href="https://www.youtube.com/watch?v=TAsu3g4e7Qo"
								className="btn btn-primary">
								Find Out More!
							</a>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card">
						<img
							src="https://www.realmadrid.com/img/vertical_380px/marcelo_380x501_20210826062808.jpg"
							class="card-img-top"
							alt="..."
						/>
						<div class="card-body">
							<h5 class="card-title">Marcelo Vieira</h5>
							<p class="card-text">
								Marcelo, after sixteen seasons and more than
								twenty titles behind him, achieved his fifth
								Champions League together with the core of the
								team such as Kroos, Modric, Casemiro, Isco,
								Benzema.. etc. All of these match Cristiano's
								record. This season he says goodbye to the team
								that has given him so much and that they have
								achieved so much together
							</p>
							<a
								href="https://www.youtube.com/watch?v=CUZnbQn_Eqo"
								className="btn btn-primary">
								Find Out More!
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
