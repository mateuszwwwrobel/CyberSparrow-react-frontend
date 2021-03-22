import React, {useState} from 'react';
import { useSpring, animated as a } from 'react-spring';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faYoutube, faFacebook, faLinkedin} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

    return (
        <div className="text-dark text-center bg-yellow mt-5 pt-3">
            <div className='row'>
                <div className="col-12">
                    <Link target="_blank" to="https://www.facebook.com/mateusz.wrobel.796" className="mx-3 text-navy">
                        <FontAwesomeIcon icon={faFacebook} size="lg" transform="grow-4" />
                    </Link>
                    <Link target="_blank" to="https://github.com/mateuszwwwrobel" className="text-navy mx-3">
                        <FontAwesomeIcon icon={faGithub} size="lg" transform="grow-4" />
                    </Link>
                    <Link target="_blank" to="https://www.youtube.com/channel/UCqbh_cQEJo81E6RvjHllU5w/videos"
                          className="text-navy mx-3">
                        <FontAwesomeIcon icon={faYoutube} size="lg" transform="grow-4" />
                    </Link>
                    <Link target="_blank" to="https://www.linkedin.com/in/mateusz-wrobel/" className="mx-3 text-navy">
                        <FontAwesomeIcon icon={faLinkedin} size="lg" transform="grow-4" />
                    </Link>
                </div>
                <div className="col-12 mt-3">
                    <p>Created by: Mateusz Wrobel</p>
                </div>
            </div>
        </div>
    )
};

export default Footer;
