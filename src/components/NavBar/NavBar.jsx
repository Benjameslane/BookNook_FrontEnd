import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';  // assuming you have a CSS file for styles

function NavBar() {
    return (
        <nav className="navbar">
            {/* ... other navbar content ... */}

            <Link to="/" className="navbar-link">
                Home
            </Link>
            
            <Link to="/search" className="navbar-link">
                Search
            </Link>

            <Link to="/favorites" className="navbar-link">
                Favorites
            </Link>

            {/* ... other navbar content ... */}
        </nav>
    );
}

export default NavBar;
