import React from 'react';
import { useSpring, animated } from 'react-spring';


const About = () => {
    const props = useSpring({
        opacity: 1,
        marginTop: 0,
        from: { opacity:0, marginTop: -500,}
    });

    return (
        <animated.div style={props} className='container'>
            <p>About</p>
        </animated.div>
    );

};

export default About;
