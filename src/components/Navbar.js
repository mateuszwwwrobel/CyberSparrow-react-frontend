import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated as a } from 'react-spring';


const Navbar = () => {

    const categoryProps = useSpring({
        opacity: 1,
        from: { opacity:0 },
        config: {delay: 1000, duration: 1000}
    });

    return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-yellow">
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
            <a.div style={categoryProps} className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item btn btn-navy">
                        <Link className="p-2 link-secondary" to="/category/boardgames">Board Games</Link>
                    </li>
                    <li className="nav-item btn btn-navy">
                        <Link className="p-2 link-secondary" to="/category/modelling">Modelling</Link>
                    </li>
                    <li className="nav-item btn btn-navy">
                        <Link className="p-2 link-secondary" to="/category/world">World</Link>
                    </li>
                    <li className="nav-item btn btn-navy">
                        <Link className="p-2 link-secondary" to="/category/science">Science</Link>
                    </li>
                    <li className="nav-item btn btn-navy">
                        <Link className="p-2 link-secondary" to="/category/python">Python</Link>
                    </li>
                    <li className="nav-item btn btn-navy">
                        <Link className="p-2 link-secondary" to="/category/travel">Travel</Link>
                    </li>
                </ul>
            </a.div>
        </div>
    </nav>
    );
};

export default Navbar;