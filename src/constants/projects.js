import {faPython, faReact, faCss3Alt, faJsSquare, faBootstrap} from '@fortawesome/free-brands-svg-icons';
import {faDatabase} from '@fortawesome/free-solid-svg-icons';


const Projects = [
        {
            "title": "Całkiem Nowy Człowiek",
            "description": "Website created to promote a newly released album. Allow user to listen all the songs and make an order for a physical copy.",
            "technologies": "Django, Allauth, Bootstrap, Sendgrid(to deal with order confirmation), deployed on Heroku.",
            "icons": [faPython, faCss3Alt, faDatabase, faBootstrap],
            "demo_link": "https://kwl-nowy-czlowiek.herokuapp.com/",
            "github_link": "https://github.com/mateuszwwwrobel/KWL_Calkiem_Nowy_Czlowiek",
            "image": "https://github.com/mateuszwwwrobel/KWL_Calkiem_Nowy_Czlowiek/blob/main/static/img/preview.png?raw=true",
            "demo": "Demo",
        },
        {
            "title": "Bootcamp project - Tic Tac Toe Game",
            "description": "An online based TicTacToe multiplayer game created during python bootcamp.",
            "technologies": "Django, Django REST framework, AJAX, Allauth, Bootstrap.",
            "icons": [faPython, faCss3Alt, faDatabase, faJsSquare, faBootstrap],
            "demo_link": "https://kwl-nowy-czlowiek.herokuapp.com/",
            "github_link": "https://github.com/infoshareacademy/jpydzr1-dkmap-django",
            "image": "",
            "demo": "Demo",
        },
        {
            "title": "Tasty News",
            "description": "Website scrapes data from several other websites and shows the titles of the articles with link to main article. In addition it store all articles in database and show some statistics in subpage.",
            "technologies": "Django, BeautifulSoup, deployed on Heroku.",
            "icons": [faPython, faCss3Alt, faDatabase, faBootstrap],
            "demo_link": "https://tasty-news.herokuapp.com/",
            "github_link": "https://github.com/mateuszwwwrobel/KWL_Calkiem_Nowy_Czlowiek",
            "image": "https://github.com/mateuszwwwrobel/Tasty_News/raw/master/static/img/preview_1.png",
            "demo": "Demo",
        },
        {
            "title": "Checkers Game",
            "description": "Game of Checkers created with python using Kivy framework, ready to be deploy on android device.",
            "technologies": "Python and Kivy.",
            "icons": [faPython],
            "github_link": "https://github.com/mateuszwwwrobel/CheckersGame",
            "image": "https://github.com/mateuszwwwrobel/CheckersGame/raw/main/img/screen.png",
        },
        {
            "title": "March Stones of Aberdeen City",
            "description": "A website about March Stones of Aberdeen City. The page displays all march stones on the map, allow user to search by number.",
            "technologies": "Django, Bootstrap, JS, Google Map API, deployed on Heroku.",
            "demo_link": "https://tasty-news.herokuapp.com/",
            "icons": [faJsSquare, faPython, faCss3Alt, faBootstrap],
            "github_link": "https://march-stones-aberdeen.herokuapp.com/",
            "image": "https://github.com/mateuszwwwrobel/March_Stones_Aberdeen/raw/master/static/img/preview.png",
            "demo": "Demo",
        },
        {
            "title": "Personal Website",
            "description": "It is a website you are at. Create to share my passions and knowledge on blog and well as an online CV.",
            "technologies": "Django, Django REST framework, React, Allauth, Bootstrap.",
            "demo_link": "",
            "icons": [faReact, faPython, faDatabase, faBootstrap, faJsSquare],
            "github_link": "",
            "image": "",
            "demo": "Demo",
        },
    ]


export default Projects;