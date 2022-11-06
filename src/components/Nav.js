import React from "react";
import { Link } from "react-router-dom";
import './Nav.css';

export const Nav = () => {
  return (
    <div className = "header">
      <nav className="nav">
        <button>
        <Link className="nav-link" to="/">
          Home
        </Link>
        </button>
        <button>
        <Link className="nav-link" to="/about">
          About
        </Link>
        </button>
        <button>
        <Link className="nav-link" to="/login">
          Login
        </Link>
        </button>
      </nav>
    </div>
  );
};
