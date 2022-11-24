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
								href="https://www.youtube.com/watch?v=r8Flq-plLBU"
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
								href="https://www.youtube.com/watch?v=FgDAY4u50-0"
								className="btn btn-primary">
								Find Out More!
							</a>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card">
						<img
							src="https://marketpvp.es/wp-content/uploads/2018/06/Horrocruxes.jpg"
							class="card-img-top"
							alt="..."
						/>
						<div class="card-body">
							<h5 class="card-title">Horrocruxes</h5>
							<p class="card-text">
                            Un horrocrux es un objeto muy poderoso en el que un mago o bruja ha ocultado un fragmento de su alma con el propósito de alcanzar la inmortalidad. La creación de un único horrocrux permite adquirir la capacidad de resucitarse a sí mismo si su cuerpo es destruido, sin embargo la creación de horrocruxes múltiples permite ser inmortal. La creación de varios horrocruxes es "costosa" para el creador, tanto por la disminución de su humanidad e incluso por la desfiguración física que conlleva.
							</p>
							<a
								href="https://www.youtube.com/watch?v=xOZz9-jhCZ8"
								className="btn btn-primary">
								Find Out More!
							</a>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card">
						<img
							src="http://pm1.narvii.com/6511/e2f1e6b718c827462397e2a021010dacd37e8f38_00.jpg"
							class="card-img-top"
							alt="..."
						/>
						<div class="card-body">
							<h5 class="card-title">Albus Dumbledore</h5>
							<p class="card-text">
                            Era un mago de sangre mestiza, hijo de Percival y Kendra Dumbledore, y hermano mayor de Aberforth y Ariana Dumbledore.  Su padre murió en Azkaban cuando Albus era joven, mientras que su madre y su hermana murieron más tarde en diversos accidentes. Albus Dumbledore era considerado como el mago más poderoso de su época. Él era famoso por derrotar a Gellert Grindelwald, descubrir doce usos de la sangre de dragón, y su trabajo en alquimia con Nicolas Flamel.
							</p>
							<a
								href="https://www.youtube.com/watch?v=067kQ-LSWS0"
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
