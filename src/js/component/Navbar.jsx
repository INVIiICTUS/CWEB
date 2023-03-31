import React from "react";

function NavbarCustom() {
  return (
    <div className="container">
      <nav className="navbar  navbar-expand-lg d-flex justify-content-between navbar-light p-50 ">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <a className="nav-link text-white p-auto" href="">
                CONTACTA <span className="sr-only">(current)</span>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white p-auto" href="">
                PROYECTOS
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavbarCustom;
