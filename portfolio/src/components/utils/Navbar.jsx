import React from 'react';
import { Link } from "react-router-dom"
import '/src/components/css/nav.css'

const Navbar = () => {
    return (
        <>
            <div className="header">
                <nav className="navbar bg-body-tertiary">
                    <div className="container-fluid d-flex justify-content-between align-items-center">
                        <Link
                                    to="/"
                                    className={window.location.pathname === "/Home" ? "nav-link active" : "nav-link"}><img src="/src/assets/images/IMG_1718.PNG" alt="Logo" className="d-inline-block align-text-top"></img> </Link>
                        <ul className="nav">
                            <li className="nav-item">
                                <Link
                                    to="/About"
                                    className={window.location.pathname === "/About" ? "nav-link active" : "nav-link"}>About</Link>
                            </li>
                            <li className="nav-item">
                                <a href="#projects"
                                    onClick={() => props.handlePageChange('Blog')}
                                    className="nav-link">Projects</a>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/Contact"
                                    className={window.location.pathname === "/Contact" ? "nav-link active" : "nav-link"}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar;
