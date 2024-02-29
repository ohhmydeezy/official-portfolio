import React from 'react';
import '/src/components/css/text-bubble.css';

const TextBubble = () => {
    return (
        <div>
            <div className="text-bubble">
                <p>The above sites were once either just an idea or needed a lot of work</p>
                <p>that’s where I come in</p>
                <p>My goal is to help you bring your ideas to life</p>
            </div>
            <div className="link-bubble">
                <p>From Design to Front-end development, find out more</p>
            </div>
            <div className="timestamp">
                <img src="/src/assets/images/IMG_1718.PNG" alt="Logo" className="d-inline-block align-text-top" />
                <p>5m ago</p>
            </div>
            <div className="text-bubble">
                <p>Through years of work experiences and well as pursuing personal interests,<br />
                    I have learnt a number of skills that are essential to the developer role.</p>

            </div>
            <div className="link-bubble">
                <p>Find out more</p>
            </div>
            <div className="timestamp">
                <img src="/src/assets/images/IMG_1718.PNG" alt="Logo" className="d-inline-block align-text-top" />
                <p>10m ago</p>
            </div>
            <div className="text-bubble">
                <p>Let’s talk business 🤩</p>
                <p>From one-time bespoke websites to full time employment opportunities,<br />
                    I’m currently open to all avenues.</p>
            </div>
            <div className="link-bubble">
                <p>get in touch, it’d be great to hear from you!</p>
            </div>
            <div className="timestamp">
                <img src="/src/assets/images/IMG_1718.PNG" alt="Logo" className="d-inline-block align-text-top" />
                <p>Now</p>
            </div>
        </div>
    );
}

export default TextBubble;