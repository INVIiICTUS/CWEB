import React from "react";

function Footer() {
  return (
    <div>
      <footer
        className="footer  bg-dark container-fluid d-flex justify-content-center align-items-center fixed-bottom"
        /* style="height: 150px" */
        style={{ height: "50px" }}
      >
        <p className="text-white fw-bold m-3">
          Copyright © Enrique Arés April 2023
        </p>
      </footer>
    </div>
  );
}
export default Footer;
