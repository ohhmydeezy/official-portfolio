import React from 'react';
import '/src/components/css/footer.css';

const Footer = () => {
    return (
            <>  
            <footer>
            <div className="icon-container">
                <p>Connect with me:</p>
                    <a href="https://www.linkedin.com/in/dylan-gunda-1b5b0b1b5/" target="_blank">
                        <img src="/assets/images/linkedin.png" alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/ohhmydeezy/" target="_blank">
                        <img src="/assets/images/github.png" alt="GitHub" />
                    </a>
                </div>
                <div className="footer">
                    <p>© 2024, Built with ❤️ by Dylan</p>
                </div>
            </footer>
            </>
    );
}
export default Footer;