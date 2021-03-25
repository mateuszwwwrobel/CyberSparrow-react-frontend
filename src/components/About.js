import React from 'react';
import {useSpring, animated} from 'react-spring';


const About = () => {

    const education = [
        {
            "title": "Junior Python Developer",
            "school": "Infoshare Academy",
            "start_date": "Aug 2020",
            "finish_date": "Mar 2021",
            "final_project": "link do projektu finalnego.",
            "description": "The training comprised 240 workshop hours. It provided knowledge and practical skills in the field of: Python, Django, REST API, Docker, Jenkins, SQL, Scrum.",
        },
        {
            "title": "Web Design",
            "school": "North East Scotland College",
            "start_date": "Sep 2019",
            "finish_date": "Mar 2020",
            "description": "The training provided knowledge and practical skills in the field of: HTML, CSS, basic JavaScript.",
        },
        {
            "title": "MSc: Drilling and Geoengineering",
            "school": "AGH University of Science and Technology",
            "start_date": "Feb 2016",
            "finish_date": "Jun 2017",
            "final_project": "Diploma thesis: “Surfactants in completion and workover fluids.”",
            "description": "opis",
        },
        {
            "title": "BSc: Mining and Geology",
            "school": "AGH University of Science and Technology",
            "start_date": "Oct 2012",
            "finish_date": "Feb 2016",
            "final_project": "Diploma thesis: `Alternative method of using a baryte from drilling mud`",
            "description": "opis",
        },
    ]

    const experiences = [
        {
            "title": "Freelance Software Developer",
            "company": "MW Software Development Services",
            "start_date": "Jan 2021",
            "finish_date": "now",
            "name": "",
            "description": "opis",
        },
        {
            "title": "Field and Laboratory Technician",
            "company": "Raeburn Drilling and Geotechnical",
            "start_date": "Jan 2020",
            "finish_date": "now",
            "name": "",
            "description": "opis",
        },
        {
            "title": "Sub-Contractor",
            "company": "MW Construction",
            "start_date": "Jun 2018",
            "finish_date": "Jan 2020",
            "name": "",
            "description": "opis",
        },
        {
            "title": "Assistant Engineering Surveyor",
            "company": "G79 Geodesy",
            "start_date": "Jan 2018",
            "finish_date": "Jun 2018",
            "name": "",
            "description": "opis",
        },
    ]


    const getEducation = () => {
        let result = [];

        education.map(Education => {
            return result.push(
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

        return result;
    };

    const getExperiences = () => {
        let result = [];

        experiences.map(Experience => {
            return result.push(
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
                        <animated.h1 style={featuredBlogProps} className="display-4 fst-italic">Every day brings new
                            choices.
                        </animated.h1>
                        <animated.p style={featuredBlogProps} className="lead my-3">`All things are diffucult before
                            they are easy.`
                        </animated.p>
                    </div>
                    <div className="col-md-6 d-none d-md-block">
                        <img className="image-fit" src="https://www.w3schools.com/w3css/img_lights.jpg" alt="myself"/>
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

}
    ;

    export default About;
