import React from 'react';

function Footer() {
    return (
        <div className='footer flex-container'>
            <div className="footer-links flex-container">
                <a href='mailto:julio.leon.diaz1@gmail.com'>Contact</a>
                <a href='https://www.linkedin.com/in/julio-leon-diaz/' target='_blank' rel='noreferrer'>LinkedIn</a>
                <a href='https://github.com/Julio-Leon' target='_blank' rel='noreferrer'>Github</a>
                <a href='./assets/Resume/Julio-Leon-Resume.pdf' download><h1>Resume</h1></a>
            </div>
        </div>
    );
}

export default Footer;