import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  const linkClass = ({ isActive }) =>
    "nav-link" + (isActive ? " active" : "");

  return (
    <header className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="brand" onClick={close}>Raiz5</NavLink>

        <button className={`menu ${open ? "open" : ""}`} onClick={() => setOpen(!open)} aria-label="Menú" />
        <nav className={`links ${open ? "show" : ""}`}>
          <NavLink to="/" className={linkClass} onClick={close}>Inicio</NavLink>
          <NavLink to="/projects" className={linkClass} onClick={close}>Proyectos</NavLink>
          <NavLink to="/contact" className={linkClass} onClick={close}>Contacto</NavLink>
        </nav>
      </div>
    </header>
  );
}
