import { Link } from 'react-scroll';
import { Document, Page } from 'react-pdf';

export default function Header() {
    return (
        <div className='header flex-container'>
            <div className="header-items flex-container">
                <div className="page-title flex-container">
                    <h1>Julio Leon</h1>
                </div>
                <div className='right-side flex-container'>
                    <Link 
                        to="about" 
                        spy={true} 
                        smooth={true} 
                        duration={100}
                        offset={-180}
                        className='scroller flex-container'
                        >
                            About
                    </Link>
                    <Link 
                        to="projects" 
                        spy={true} 
                        smooth={true} 
                        duration={100}
                        offset={-180}
                        className='scroller flex-container'
                        >
                            Projects
                    </Link>
                    <Link 
                        to="skills" 
                        spy={true} 
                        smooth={true} 
                        duration={100}
                        offset={-180}
                        className='scroller flex-container'
                        >
                            Skills
                    </Link>
                    <a className='header-link' href='./assets/Resume/Julio-Leon-Resume.pdf' download><h1>Resume</h1></a>
                    <a href='mailto:julio.leon.diaz1@gmail.com' className='header-link' >
                        <h1 className="scroller">Contact</h1>
                    </a>
                </div>
            </div>
        </div>
    )
}