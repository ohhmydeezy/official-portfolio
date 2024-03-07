import React from "react";
import "/src/components/css/project-card.css";

const ProjectCard = () => {
    return (
        <>
{/* carousel section */}
            <div className="carousel">
{/* card section */}
                <div className="list">
                    <div className="item">
                        <img src="./src/assets/images/coming soon .webp" alt="coming soon" />
                        <div className="content">
                            <h5 className="card-title">Project Title</h5>
                            <p className="card-text">Project Description</p>
                            <a href="#" className="btn btn-primary">Find Out More</a>
                        </div>
                    </div>
                    <div className="item">
                        <img src="./src/assets/images/AI coming soon.png" alt="AI coming soon" />
                        <div className="content">
                            <h5 className="card-title">Project Title</h5>
                            <p className="card-text">Project Description</p>
                            <a href="#" className="btn btn-primary">Find Out More</a>
                        </div>
                    </div>
                    <div className="item">
                        <img src="./src/assets/images/caution coming soon.png" alt="caution coming soon" />
                        <div className="content">
                            <h5 className="card-title">Project Title</h5>
                            <p className="card-text">Project Description</p>
                            <a href="#" className="btn btn-primary">Find Out More</a>
                        </div>
                    </div>
                </div>
{/* thumbnail section */}
                <div className="thumbnail">
                    <div className="item">
                        <img src="./src/assets/images/coming soon .webp" alt="coming soon" />
                        <div className="content">
                            <div className="thumbnail-title">Project Title</div>
                            <div className="thumbnail-text">Project Description</div>
                        </div>
                    </div>
                    <div className="item">
                        <img src="./src/assets/images/AI coming soon.png" alt="coming soon" />
                        <div className="content">
                            <div className="thumbnail-title">Project Title</div>
                            <div className="thumbnail-text">Project Description</div>
                        </div>
                    </div>
                    <div className="item">
                        <img src="./src/assets/images/caution coming soon.png" alt="coming soon" />
                        <div className="content">
                            <div className="thumbnail-title">Project Title</div>
                            <div className="thumbnail-text">Project Description</div>
                        </div>
                    </div>
                    <div className="arrows">
                        <button className="prev"> &lt; </button>
                        <button className="next"> &gt; </button>
                    </div>
                </div>
                <div className="time"></div>
            </div >
        </>
    )
}

export default ProjectCard;