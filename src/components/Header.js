import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="navbar justify-content-center">
        <li className="nav-item nav-link">
          <Link to="/">Chess Channel</Link>
        </li>
        <li className="nav-item nav-link">
          <Link to="/analytics">Channels analytics</Link>
        </li>
      </nav>
    </div>
  );
}

export default Header;
