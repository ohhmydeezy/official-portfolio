import React from 'react';
import '/src/components/css/style.css'

const Navbar = () => {
    return (
        <>
            <div className="header">
                <nav className="navbar bg-body-tertiary">
                    <div className="container-fluid d-flex justify-content-between align-items-center">
                        <a className="navbar-brand" href="#">
                            <img src="/src/assets/images/IMG_1718.PNG"    alt="Logo" className="d-inline-block align-text-top"/>
                        </a>
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar;
