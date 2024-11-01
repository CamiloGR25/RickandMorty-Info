import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/NavegationBar.css";

const NavegationBar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li><Link to="/personajes" className="nav-link">Personajes</Link></li>
                <li><Link to="/favoritos" className="nav-link">Personajes Favoritos</Link></li>
                <li><Link to="/episodios" className="nav-link">Lista de Episodios</Link></li>

            </ul>
        </nav>
    );
};

export default NavegationBar;