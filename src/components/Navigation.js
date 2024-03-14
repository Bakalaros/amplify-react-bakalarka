import React from 'react';
import { Link } from 'react-router-dom';
import  "../styles/navbar.css"

function Navbar() {
    return (
        <nav>
            <h1 className="header-title">Sociálne inžinierstvo </h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>

            </ul>
        </nav>
    );
}

export default Navbar;
