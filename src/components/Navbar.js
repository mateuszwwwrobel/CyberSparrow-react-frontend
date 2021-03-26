import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import { useSpring, animated as a } from 'react-spring';


const Navbar = () => {
    const navbarProps = useSpring({
        marginLeft: 0,
        from: { marginLeft: -2500 },
    });

    return (
    <nav className="navbar sticky-top navbar-expand-md navbar-light bg-yellow">
        <div className="container-fluid">
            <Link className="nav-link" aria-current="page" exact to="/">
                <img className="img-fluid" src={'/assets/logo_sparrow_small.png'} alt="logo"/>
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
            <a.div style={navbarProps} className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" exact to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/about">About Me</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/portfolio">Portfolio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/blog">Blog</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </a.div>
        </div>
    </nav>
    );
};

export default Navbar;