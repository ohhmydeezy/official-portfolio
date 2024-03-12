import React from 'react'
import '/src/components/css/about.css'
import SkillSlider from '../utils/Skill-slider'

function About() {
    return (
        <div>
            <div className='introduction'>
                <h1>About Me</h1>
                <p>
                    Hello, I'm Dylan Gunda, a passionate, 28-year-old web developer with a passion for creation and innovation. <br />
                    As a first-generation immigrant, originally from Victoria Falls, Zimbabwe, when I moved to the UK in 2001, <br />
                    I instantly fell in love with all the new things that we didn’t have, like candy floss, KFC, and gaming. <br />
                </p>
                <p>
                    My love for gaming has never gone anywhere, in fact, this has only grown over time, <br />
                    spreading to all things technology and culminating in where I am today, pursuing a career in web development.
                </p>
                <p>
                    Before transitioning, I gained a psychology degree, I spent a large portion of my adult life listening to people’s needs, <br />
                    adapting to constantly evolving work environments and handling complex caseloads <br />
                    to help deliver the best possible outcomes for my clients. <br />
                </p>
                <p>
                    I have always been a problem solver, and I have always been passionate about helping others. <br />
                    This is why I am now pursuing a career in web development, to help bring ideas to life.
                </p>
            </div>
            <div>
                <h2>Key Skills:</h2>
                <SkillSlider />
            </div>
        </div>
    );
}

export default About;