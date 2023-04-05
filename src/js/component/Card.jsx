import React from "react";
import Corazonvendup from "../../../public/Corazonvendup.png";

function Galery() {
  return (
    <div className="row aling-items-center justify-content-center m-2 p-2">
      <div className="secction col-lg-4 col-md-6 col-12 my-1 mb-5 ">
        <img src="https://i.blogs.es/ef0d01/harry-potter/840_560.jpeg" alt="Proyecto Harry Potter" />

        <img
          src="https://imgs.hipertextual.com/wp-content/uploads/2013/10/breaking-bad-final.jpg"
          alt="Proyecto Breaking Bad"
        />
        <img src={Corazonvendup} alt="Proyecto Final Vendup" />

        <img
          src="https://i0.wp.com/www.lacasadeel.net/wp-content/uploads/2023/03/Star-Wars-Recast-Star-Wars-Midjourney-8-2.jpg"
          alt="Proyecto Stars Wars"
        />

        <img
          src="https://www.casinozaragoza.es/wp-content/uploads/2018/09/poker.jpg"
          alt="Proyecto Generador de Cartas random"
        />
      </div>
    </div>
  );
}

export default Galery;
