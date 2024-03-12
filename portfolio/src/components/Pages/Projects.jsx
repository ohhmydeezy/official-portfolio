import React from "react";
import '/src/components/css/projects.css';

const Projects = () => {
    return (
        <>
            <div className="project-container">
                <h1>Projects</h1>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <img src="/src/assets/images/IMG_1717.PNG" alt="project 1" />
                            <div className="card-body">
                                <h5>Project 1</h5>
                                <p>Project 1 description</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card">
                            <img src="/src/assets/images/IMG_1717.PNG" alt="project 2" />
                            <div className="card-body">
                                <h5>Project 2</h5>
                                <p>Project 2 description</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card">
                            <img src="/src/assets/images/IMG_1717.PNG" alt="project 3" />
                            <div className="card-body">
                                <h5>Project 3</h5>
                                <p>Project 3 description</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>

            );
    }

            export default Projects;


