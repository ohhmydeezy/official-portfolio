import React from "react";
import ContactHero from "../utils/Contact-hero"; // Adjust the import path as needed

function Contact() {
    return (
        <div>
            <ContactHero />
            <div>
                <div className="link-bubble">
                    <p>
                        If you like what you see so far, there’s plenty more where that came <br />
                        from. I don’t need every detail about your idea, just a few lines to get the ball rolling, <br />
                        if this interests you, enter your details below:
                    </p>
                </div>
            </div>
                <div className="timestamp">
                    <img src="/src/assets/images/IMG_1718.PNG" alt="Logo" className="d-inline-block align-text-top" />
                    <p>Now</p>
                </div>
                <div className="input-container">
                    <div className="text-bubble" id="Name">
                        <input type="text" placeholder="Name" />
                    </div>
                    <div className="text-bubble" id="Email">
                        <input type="text" placeholder="Email" />
                    </div>
                    <div className="text-bubble" id="Subject">
                        <input type="text" placeholder="Subject" />
                    </div>
                    <div className="text-bubble" id="Message">
                        <input type="text" placeholder="Message" />
                    </div>
                    <div className="submit">
                    <button>Send</button>
                </div>
                </div>
                
        </div>
    );
}

export default Contact;

