import React  from 'react';
import {Link} from 'react-router-dom';
import { motion } from "framer-motion";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import projects from '../constants/projects';

const Portfolio = () => {

    const getIcons = (icons) => {
        let result = [];
        icons.forEach(icon => {
            result.push(<FontAwesomeIcon className="mx-2 spiral" icon={icon} size="lg"/>)
        })
        return result;
    }

    const getProjects = () => {
        let list = [];

        projects.map(project => {
            return list.push(
                <div
                    className="text-white bg-navy row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <div>
                            {getIcons(project.icons)}
                        </div >
                        <h3 className="mb-0 btn-yellow">{project.title}</h3>
                        <p className="card-text my-4">{project.description}</p>
                        <strong>Build with:</strong>
                        <p className="card-text">{project.technologies}</p>
                        <Link className="w-75 btn-yellow text-justify" target="_blank"
                              to={{pathname: project.demo_link, state: {fromDashboard: true}}}>{project.demo}</Link>
                        <Link className="w-50 btn-yellow" target="_blank" to={{pathname: project.github_link, state: {fromDashboard: true}}}>Github
                            repo</Link>
                    </div>
                    <motion.div transition={{ type: "spring", stiffness: 150 }} whileHover={{ scale: 1.5, transition: { duration: .5 } }} className="col-md-6 d-none d-lg-block p-3">
                        <img className="image-fit-projects"
                             src={project.image}
                             alt='project preview'/>
                    </motion.div>
                </div>
            )
        });
        return list;
    };

    return (
        <div className="container mt-3">
            {getProjects()}
        </div>
    );

};

export default Portfolio;
