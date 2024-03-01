import React from 'react';
import '/src/components/css/nav.css'

const Navbar = () => {
    return (
        <>
            <div className="header">
                <nav className="navbar bg-body-tertiary">
                    <div className="container-fluid d-flex justify-content-between align-items-center">
                        <a className="navbar-brand" href="#home">
                            <img src="/src/assets/images/IMG_1718.PNG" alt="Logo" className="d-inline-block align-text-top" />
                        </a>
                        <ul className="nav">
                            <li className="nav-item">
                                <a href="#about"
                                    onClick={() => props.handlePageChange('About')}
                                    className="nav-link">About</a>
                            </li>
                            <li className="nav-item">
                                <a href="#projects"
                                    onClick={() => props.handlePageChange('Blog')}
                                    className="nav-link">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a href="#contact"
                                    onClick={() => props.handlePageChange('Contact')}
                                    className="nav-link">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar;
