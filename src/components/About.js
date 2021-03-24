import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useSpring, animated} from 'react-spring';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPython, faReact, faCss3Alt, faJsSquare} from '@fortawesome/free-brands-svg-icons';
import {faDatabase} from '@fortawesome/free-solid-svg-icons';


const About = () => {
    const [experiences, setExperiences] = useState([]);
    const [education, setEducation] = useState([]);

    useEffect(() => {
        const fetchExperiences = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/resume/experience/`);
                setExperiences(response.data);
            } catch (err) {
            }
        }
        fetchExperiences();
    }, []);


    useEffect(() => {
        const fetchEducation = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/resume/education/`);
                setEducation(response.data);
            } catch (err) {
            }
        }
        fetchEducation();
    }, []);

    const getEducation = () => {
        let list = [];
        let result = [];

        education.map(Education => {
            return list.push(
                <div className="card mb-3 bg-yellow">
                    <h5 className="card-header">{Education.title}</h5>
                    <div className="card-body text-white bg-navy">
                        <h6 className="card-title">{Education.school}</h6>
                        <p className="text-muted">{Education.start_date} - {Education.finish_date}</p>
                        <p className="card-text">{Education.final_project}</p>
                        <p className="card-text">{Education.description}</p>
                    </div>
                </div>
            );
        });

        for (let i = 0; i < list.length; i += 2) {
            result.push(
                <div key={i} className="row mb-2 ">
                    <div className="col-md-10 w-100">
                        {list[i]}
                    </div>
                    <div className="col-md-10 w-100">
                        {list[i + 1] ? list[i + 1] : null}
                    </div>
                </div>
            )
        }

        return result;
    };

    const getExperiences = () => {
        let list = [];
        let result = [];

        experiences.map(Experience => {
            return list.push(
                <div className="card mb-3 bg-yellow">
                    <h5 className="card-header">{Experience.title}</h5>
                    <div className="card-body text-white bg-navy">
                        <h6 className="card-title">{Experience.company}</h6>
                        <p className="text-muted">{Experience.start_date} - {Experience.finish_date}</p>
                        <p className="card-text">{Experience.name}</p>
                        <p className="card-text">{Experience.description}</p>
                    </div>
                </div>
            );
        });

        for (let i = 0; i < list.length; i += 2) {
            result.push(
                <div key={i} className="row mb-2">
                    <div className="col-md-10 w-100">
                        {list[i]}
                    </div>
                    <div className="col-md-10 w-100">
                        {list[i + 1] ? list[i + 1] : null}
                    </div>
                </div>
            )
        }
        return result;
    };

    // Animations
    const featuredBlogProps = useSpring({
        opacity: 1,
        marginTop: 0,
        from: {opacity: 0, marginTop: -3500,},
    });

    return (
        <div className="container mt-3">
            <div className="p-4 p-md-5 mb-4 text-white rounded bg-navy">
                <div className="row px-0">
                    <div className="col-md-6">
                        <animated.h1 style={featuredBlogProps} className="display-4 fst-italic">Every day brings new choices.</animated.h1>
                        <animated.p style={featuredBlogProps} className="lead my-3">`All things are diffucult before they are easy.`</animated.p>
                    </div>
                    <div className="col-md-6">
                        <img className="image-fit" src="https://www.w3schools.com/w3css/img_lights.jpg" alt="image"/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <h3 className="text-center">About Me</h3>
                    <p className="text-justify">My objectives are to develop myself as an employee as well as a
                        freelancer, learn new technologies and improve quality of my products.
                        As a junior developer, I constantly work on various projects, learning new solutions and
                        developing myself in programming. It is my great passion that I have discovered in myself and I
                        plan to pursue it.</p>
                    <p className="text-justify">I am open-minded, hardworking and reliable person with a strong
                        technical education, who
                        possesses self-discipline, ability to work as a team member, good communication skills. I am
                        well organized what is one of my greatest advantages.</p>
                    <p className="text-justify">I like video editing. I prefer to edit a film of my adventures or
                        vacations than take hundreds of
                        pictures. You can see some of my videos on my Youtube channel.</p>
                    <p className="text-justify">I really like sports especially football, hiking and mountain biking.
                        Maybe it is time for another ride...</p>
                    <p className="text-justify">If you need any further information, please do not hesitate to contact
                        me.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <h3 className="text-center">Experience</h3>
                    {getExperiences()}
                </div>
                <div className="col-md-6">
                    <h3 className="text-center">Education</h3>
                    {getEducation()}
                </div>
            </div>
        </div>
    );

};

export default About;
