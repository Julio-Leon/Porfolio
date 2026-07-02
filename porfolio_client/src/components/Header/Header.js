import { Link } from 'react-scroll';
import { Document, Page } from 'react-pdf';
import { useState, useEffect } from 'react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`header flex-container ${isScrolled ? 'scrolled' : ''}`}>
            <div className="header-items flex-container">
                <div className="page-title flex-container">
                    <h1 className='header-name'>Julio Leon</h1>
                </div>
                <div className='right-side flex-container'>
                    <Link 
                        to="about" 
                        spy={true} 
                        smooth={true} 
                        duration={100}
                        offset={-180}
                        className='scroller flex-container header-link-item'
                        >
                            About
                    </Link>
                    <Link 
                        to="projects" 
                        spy={true} 
                        smooth={true} 
                        duration={100}
                        offset={-180}
                        className='scroller flex-container header-link-item'
                        >
                            Projects
                    </Link>
                    <Link 
                        to="skills" 
                        spy={true} 
                        smooth={true} 
                        duration={100}
                        offset={-180}
                        className='scroller flex-container header-link-item'
                        >
                            Skills
                    </Link>
                    <a className='header-link header-link-item' href='./assets/Resume/Julio-Leon-Resume.pdf' download><h1>Resume</h1></a>
                    <a href='mailto:julio.leon.diaz1@gmail.com' className='header-link header-link-item' >
                        <h1 className="scroller">Contact</h1>
                    </a>
                </div>
            </div>
        </div>
    )
}