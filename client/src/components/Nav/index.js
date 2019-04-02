import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg rounded navbar-light bg-dark">
      <a className="navbar-brand text-white" href="/">
        Mark Erik Salvatier
      </a>
      <a className="nav-item mr-1 text-secondary" href="/portfolio">
        Portfolio
      </a>
      <a className="nav-item mr-1 text-secondary" href="/contact">
        Contact
      </a>
    </nav>
  );
}

export default Nav;
