import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import AOS from 'aos'


export default function Home() {
    AOS.init({
        duration: 1000,
        once: false
    })
    
    return (
        <div className='home'>
            <section className='quote-section'>
                <h1 className='quote' data-aos='zoom-in' data-aos-duration='1000'>
                    Every good developer has a PHD in the sacred art of Googling
                </h1>
            </section>

            <div className="about-section" data-aos='fade-up' data-aos-duration='1000'>
                <h1 className='about-title' data-aos='slide-right' data-aos-delay='200'>
                    Who Am I?
                </h1>
                <p className='about' data-aos='fade-up' data-aos-delay='300'>Welcome to my Porfolio, My name is Julio Leon, I am 19 years old and I live in New York. I am a young software developer that loves to learn and looks foward to getting my first job on the field. I know that sometimes it might be hard to trust new developers, but every single one of us is looking for that one person who wants to take that leap of faith in us. Well with that set, have a look. Thanks for your time.</p>
            </div>

            <Projects />

        </div>
    )
}