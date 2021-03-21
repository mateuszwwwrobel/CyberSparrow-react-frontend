import React from 'react';
import { useSpring, animated } from 'react-spring';


const Contact = () => {
    const props = useSpring({
        opacity: 1,
        marginTop: 0,
        from: { opacity:0, marginTop: -500,}
    });

    return (
        <animated.div style={props} className='container'>
            <p>Contact</p>
        </animated.div>
    );

};

export default Contact;
