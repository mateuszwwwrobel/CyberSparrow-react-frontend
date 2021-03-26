import React from 'react';
import {Link} from 'react-router-dom';
import {useSpring, animated as a} from 'react-spring';

const Home = () => {
    const buttonProps = useSpring({
        opacity: 1,
        from: {opacity: 0},
        config: {delay: 1000, duration: 1500}
    });

    return (
        <div className='container text-white'>
            <div className="bg-navy mt-5 px-5 py-5">
                <h1>Hi, my name is <span className="animate-name">Mateusz Wrobel</span></h1>
                <p className="lead">I am Junior Python Developer.</p>
                <p className="lead text-justify">First of all, thank you for visiting my website! It consists of several sections.</p>
                <p className="lead text-justify">If you want to know something more about me, have a look at About Me section.</p>
                <Link to="/about">
                    <a.span style={buttonProps} className="border btn btn-yellow btn-lg text-dark">About Me</a.span>
                </Link>
                <p className="lead text-justify mt-2">You can find some of my projects in Portfolio section.</p>
                <Link to="/portfolio">
                    <a.span style={buttonProps} className="border btn btn-yellow btn-lg text-dark">Portfolio</a.span>
                </Link>
                <hr className="my-4"/>
                <p>Read posts on my Blog to get familiar with my passions.</p>
                <Link to='/blog' role="button">
                    <a.span style={buttonProps} className="border btn btn-lg btn-yellow">Check out my Blog</a.span>
                </Link>
            </div>
        </div>
    );
};

export default Home;