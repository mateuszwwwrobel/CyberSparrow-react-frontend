import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const navbar = () => (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link className="nav-link" aria-current="page" exact to="/">
                <img className="img-fluid" src={'/assets/logo_sparrow_small.png'} alt="logo" />
            </Link>
            <button className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" exact to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/blog">Blog</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/portfolio">Portfolio</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)

export default navbar;