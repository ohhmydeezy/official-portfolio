import React from "react";
import '/src/components/css/contact-form.css';


function contactForm() {
    return (
        <div>
            <div className="input-container">
            <div className="mb-3">
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Name:" />
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="subject:" />
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div class="mb-3">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your Message:"></textarea>
                </div>
                <div className="submit">
                    <button>Send</button>
                </div>
            </div>
        </div>
    );
}

export default contactForm;