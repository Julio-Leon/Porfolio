import React from 'react';

function Footer() {
    return (
        <div className='footer flex-container'>
            <div className="footer-links flex-container">
                <a href='mailto:julio.leon.diaz1@gmail.com' data-aos='flip-left' data-aos-duration='1000'>Contact</a>
                <a href='https://www.linkedin.com/in/julio-leon-diaz/' target='_blank' rel='noreferrer' data-aos='flip-left' data-aos-delay='100' data-aos-duration='1000'>LinkedIn</a>
                <a href='https://github.com/Julio-Leon' target='_blank' rel='noreferrer' data-aos='flip-left' data-aos-delay='200' data-aos-duration='1000'>Github</a>
                <a href='./assets/Resume/Julio-Leon-Resume.pdf' download data-aos='flip-left' data-aos-delay='300' data-aos-duration='1000'><h1>Resume</h1></a>
            </div>
        </div>
    );
}

export default Footer;