import React, { useRef } from 'react';
import '/src/components/css/contact-form.css'; // Corrected path to CSS file
import 'bootstrap'; // Importing Bootstrap JS (optional if you're not using any Bootstrap JS components)
import emailjs from '@emailjs/browser';

export const ContactForm = () => { // Corrected function name to use PascalCase
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        

        emailjs
            .sendForm('service_o200xpa', 'template_0t4nyib', e.target, 'Nt7IbAdkqbE0KUTuv',)
            .then(
                () => {
                    alert('Email sent successfully!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    const handleAlertClose = () => { 
        const alert = document.querySelector('#myAlert');
        if (alert) {
            alert.classList.remove('show');
        }
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <div className="input-container">
                <label htmlFor="name">Name</label>
                <div>
                    <input type="text" className="form-control" id="name" placeholder="Name" name='from_name' />
                </div>
            </div>
            <div className="input-container">
                <label htmlFor="Email">Email</label> 
                <div>
                    <input type="text" className="form-control" id="Email" placeholder="Email" name='from_email' />
                </div>
            </div>
            <div className="input-container">
                <label htmlFor="message">Message</label>
                <div>
                    <textarea className="form-control" id="message" rows="3" placeholder="Your Message"></textarea>
                </div>
            </div>
            <div className="input-container">
                <button type="submit">Send</button>
            </div>
        </form>
    );
};

export default ContactForm;
