import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { motion } from "framer-motion";


const Portfolio = () => {

    const projects = [
        {
            "title": "Całkiem Nowy Człowiek",
            "description": "Website created to promote a newly released album. Allow user to listen all the songs and make an order for a physical copy.",
            "technologies": "Django, Allauth, Bootstrap, Sendgrid(to deal with order confirmation), deployed on Heroku.",
            "demo_link": "https://kwl-nowy-czlowiek.herokuapp.com/",
            "github_link": "https://github.com/mateuszwwwrobel/KWL_Calkiem_Nowy_Czlowiek",
            "image": "https://github.com/mateuszwwwrobel/KWL_Calkiem_Nowy_Czlowiek/blob/main/static/img/preview.png?raw=true",
            "demo": "Demo",
        },
        {
            "title": "Bootcamp project - Tic Tac Toe Game",
            "description": "An online based TicTacToe multiplayer game created during python bootcamp.",
            "technologies": "Django, Django REST framework, AJAX, Allauth, Bootstrap.",
            "demo_link": "https://kwl-nowy-czlowiek.herokuapp.com/",
            "github_link": "https://github.com/infoshareacademy/jpydzr1-dkmap-django",
            "image": "",
            "demo": "Demo",
        },
        {
            "title": "Tasty News",
            "description": "Website scrapes data from several other websites and shows the titles of the articles with link to main article. In addition it store all articles in database and show some statistics in subpage.",
            "technologies": "Django, BeautifulSoup, deployed on Heroku.",
            "demo_link": "https://tasty-news.herokuapp.com/",
            "github_link": "https://github.com/mateuszwwwrobel/KWL_Calkiem_Nowy_Czlowiek",
            "image": "https://github.com/mateuszwwwrobel/Tasty_News/raw/master/static/img/preview_1.png",
            "demo": "Demo",
        },
        {
            "title": "Checkers Game",
            "description": "Game of Checkers created with python using Kivy framework, ready to be deploy on android device.",
            "technologies": "Python and Kivy.",
            "github_link": "https://github.com/mateuszwwwrobel/CheckersGame",
            "image": "https://github.com/mateuszwwwrobel/CheckersGame/raw/main/img/screen.png",
        },
        {
            "title": "March Stones of Aberdeen City",
            "description": "A website about March Stones of Aberdeen City. The page displays all march stones on the map, allow user to search by number.",
            "technologies": "Django, Bootstrap, JS, Google Map API, deployed on Heroku.",
            "demo_link": "https://tasty-news.herokuapp.com/",
            "github_link": "https://march-stones-aberdeen.herokuapp.com/",
            "image": "https://github.com/mateuszwwwrobel/March_Stones_Aberdeen/raw/master/static/img/preview.png",
            "demo": "Demo",
        },
        {
            "title": "Personal Website",
            "description": "It is a website you are at. Create to share my passions and knowledge on blog and as an online CV.",
            "technologies": "Django, Django REST framework, React, Allauth, Bootstrap.",
            "demo_link": "",
            "github_link": "",
            "image": "",
            "demo": "Demo",
        },
    ]

    const getProjects = () => {
        let list = [];

        projects.map(project => {
            return list.push(
                <div
                    className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-primary">{project.title}</strong>
                        <motion.h3
                            animate={{ x: 25 }}
                            transition={{ ease: "easeOut", duration: 2 }}
                            className="mb-0">{project.title}
                        </motion.h3>
                        <p className="card-text my-4">{project.description}</p>
                        <strong>Build with:</strong>
                        <p className="card-text">{project.technologies}</p>
                        <Link className="w-25" target="_blank"
                              to={{pathname: project.demo_link, state: {fromDashboard: true}}}>{project.demo}</Link>
                        <Link className="w-50" target="_blank" to={{pathname: project.github_link, state: {fromDashboard: true}}}>Github
                            repo</Link>
                    </div>
                    <motion.div transition={{ type: "spring", stiffness: 150 }} whileHover={{ scale: 1.5, transition: { duration: .5 }  }} className="col-md-6 d-none d-lg-block p-3">
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
