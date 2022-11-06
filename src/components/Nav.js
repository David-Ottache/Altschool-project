import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div>
      <nav className="nav">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
        <Link className="nav-link" to="/login">
          Login
        </Link>
      </nav>
    </div>
  );
};
