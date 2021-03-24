import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';


const Portfolio = () => {
    const props = useSpring({
        opacity: 1,
        marginTop: 0,
        from: { opacity:0, marginTop: -500,}
    });

    return (
        <div className="container mt-3">
            <h1>Projects</h1>
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-primary">
                            XX
                        </strong>
                        <h3 className="mb-0">title</h3>
                        <div className="mb-1 text-muted">month day</div>
                        <p className="card-text mb-auto">excerpt</p>
                        <Link to='#' className="stretched-link">Continue reading</Link>
                    </div>
                    <div className="col-auto d-none d-lg-block p-3">
                        <img width="500" height="250" src='https://github.com/mateuszwwwrobel/KWL_Calkiem_Nowy_Czlowiek/blob/main/static/img/preview.png?raw=true' alt='xxx' />
                    </div>
                </div>
        </div>
    );

};

export default Portfolio;




    // const [greetingStatus, displayGreeting] = React.useState(false);
    //
    // const contentProps = useSpring({
    // opacity: greetingStatus ? 1 : 0,
    // marginTop: greetingStatus ? 0 : -500
    // });


//
//         <button onClick={() => displayGreeting(a => !a)} className="button">
//           Click here to show all blogs
//         </button>
// {!greetingStatus ? (
//         <div className="Intro" />
//       ) : (
//         <a.div className="box" style={contentProps}>
//         </a.div>
//       )}