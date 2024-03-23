import React from 'react';
import '/src/components/css/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';

const gitHub = <FontAwesomeIcon icon={faGithub} />;
const linkedIn = <FontAwesomeIcon icon={faLinkedin} />;
const cv = <FontAwesomeIcon icon={faFile} />;

const Footer = () => {
    return (
        <footer>
            <div className="icon-container">
                <p>Connect with me:</p>
                <a href="https://www.linkedin.com/in/dylan-gunda-348660151/" target="_blank">
                    {linkedIn}
                </a>
                <a href="https://github.com/ohhmydeezy/" target="_blank">
                    {gitHub}
                </a>
            </div>
            <div className="footer">
                <p>check out my cv: </p><a href="./src/assets/Web dev resume.pdf" download="Web dev resume.pdf">Download Resume</a>
                <p>© 2024, Built with ❤️ by Dylan</p>
            </div>
        </footer>
    );
};

export default Footer;
