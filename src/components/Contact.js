import React from 'react';
import {motion} from "framer-motion";


const Contact = () => {
    const [isActive, setIsActive] = React.useState(false);

    return (
        <motion.div
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            style={{x: -250, y: -100}}
            className="contact-box"
            onClick={() => setIsActive(!isActive)}
            animate={{
                x: 0,
                y: 0,
                backgroundColor: "#14213D",
                boxShadow: "5px 5px 0 rgba(0, 0, 0, 0.2)",
            }}
            transition={{type: "spring", damping: 10, stiffness: 10}}>
            <div className="btn-yellow">
                <h4>Feel free to contact with me via email address specify below:</h4>
                <p>mateusz.wwwrobel@gmail.com</p>
            </div>
        </motion.div>
    )
};

export default Contact;
