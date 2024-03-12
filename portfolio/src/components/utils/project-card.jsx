import React, { useState, useEffect, useRef } from "react";
import "/src/components/css/project-card.css";

const ProjectCard = () => {
    const [carouselClass, setCarouselClass] = useState("");
    const [carouselItems, setCarouselItems] = useState([
        { image: "/src/assets/images/coming soon .webp", title: "Project Title 1", description: "Project Description 1" },
        { image: "/src/assets/images/AI coming soon.png", title: "Project Title 2", description: "Project Description 2" },
        { image: "/src/assets/images/caution coming soon.png", title: "Project Title 3", description: "Project Description 3" }
    ]);
    const [thumbnailItems, setThumbnailItems] = useState([
        { image: "/src/assets/images/coming soon .webp", title: "Project Title 1", description: "Project Description 1" },
        { image: "/src/assets/images/AI coming soon.png", title: "Project Title 2", description: "Project Description 2" },
        { image: "/src/assets/images/caution coming soon.png", title: "Project Title 3", description: "Project Description 3" }
    ]);

    const timeRunning = 3000;
    const timeAutoNext = 8000;
    const runTimeOut = useRef(null);
    const runAutoRun = useRef(null);
    
    useEffect(() => {
        if (carouselClass !== '') {
            runTimeOut.current = setTimeout(() => {
                setCarouselClass('');
            }, timeRunning);

            runAutoRun.current = setTimeout(() => {
                showSlider('next');
            }, timeAutoNext);
        }

        return () => {
            clearTimeout(runTimeOut.current);
            clearTimeout(runAutoRun.current);
        };
    }, [carouselClass]);

    const showSlider = (type) => {
        let itemSlider = [...carouselItems];
        let thumbnailSlider = [...thumbnailItems];
    
        if (type === 'next') {
            const shiftedItem = itemSlider.shift();
            const shiftedThumbnail = thumbnailSlider.shift();
            itemSlider.push(shiftedItem);
            thumbnailSlider.push(shiftedThumbnail);
        } else {
            const poppedItem = itemSlider.pop();
            const poppedThumbnail = thumbnailSlider.pop();
            itemSlider.unshift(poppedItem);
            thumbnailSlider.unshift(poppedThumbnail);
        }
    
        clearTimeout(runTimeOut.current);
        setCarouselClass(type); // Set class to 'next' or 'prev'
        runTimeOut.current = setTimeout(() => {
            setCarouselClass('');
        }, timeRunning);
    
        clearTimeout(runAutoRun.current);
        runAutoRun.current = setTimeout(() => {
            showSlider('next');
        }, timeAutoNext);
    
        setCarouselItems(itemSlider);
        setThumbnailItems(thumbnailSlider);

        clearTimeout(runTimeOut.current);
        clearTimeout(runAutoRun.current);
        setCarouselClass(type); 
    };

        const nextClickHandler = () => {
            showSlider("next");
        };

        const prevClickHandler = () => {
            showSlider("prev");
        };

        return (
            <div>
                {/* carousel section */}
                <div className={`carousel ${carouselClass}`}>
                    {/* card section */}
                    <div className="list">
                        {carouselItems.map((item, index) => (
                            <div className="item" key={index}>
                                <img src={item.image} alt="Project" />
                                <div className="content">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.description}</p>
                                    <div className="card-button">
                                        <a href="#" className="btn btn-primary">Find Out More</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* thumbnail section */}
                <div className="thumbnail">
                    {thumbnailItems.map((item, index) => (
                        <div className="item" key={index}>
                            <img src={item.image} alt="Project" />
                            <div className="content">
                                <div className="thumbnail-title">{item.title}</div>
                                <div className="thumbnail-text">{item.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="arrows">
                    <button className="prev" onClick={prevClickHandler}> &lt; </button>
                    <button className="next" onClick={nextClickHandler}> &gt; </button>
                </div>
                <div className="time"></div>
            </div>
        );
    };

export default ProjectCard;
