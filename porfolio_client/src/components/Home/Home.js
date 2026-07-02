import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import StoryBeat from '../StoryBeat/StoryBeat'
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
                    I am a problem-solving software engineer who enjoys analyzing complex challenges and building practical, efficient solutions.
                </h1>
            </section>

            <div className="about-section" data-aos='fade-up' data-aos-duration='1000'>
                <h1 className='about-title' data-aos='slide-right' data-aos-delay='200'>
                    Who Am I?
                </h1>
                <p className='about' data-aos='fade-up' data-aos-delay='300'>Welcome to my Portfolio, My name is Julio Leon. I'm a 19-year-old software developer based in New York with a passion for solving real-world problems through technology. My background spans full-stack web development, web application design, and technical instruction. Every day, I focus on delivering reliable solutions that improve user experiences and make meaningful impact.</p>
            </div>

            <StoryBeat 
                number="01"
                title="Analytical Problem Solving"
                content="I approach every project with a logical, analytical mindset, breaking large problems into manageable tasks. I create clean, maintainable code with attention to detail, whether I'm debugging applications, optimizing performance, or developing new features. The goal is always the same: reliable solutions that work."
                />

            <Projects />

            <StoryBeat 
                number="02"
                title="Technical Expertise & Continuous Growth"
                content="With hands-on experience in JavaScript, React, Node.js, HTML, CSS, and modern web development tools, I continuously expand my technical skills while embracing new technologies and frameworks. I understand that great software isn't built overnight—it's built through learning, iteration, and mastery of the fundamentals."
                />

            <StoryBeat 
                number="03"
                title="Collaboration & Communication"
                content="I thrive in collaborative environments and communicate technical concepts clearly to both technical and non-technical stakeholders. I believe that the best solutions come from understanding not just the technical requirements, but the real human needs behind them. Every line of code tells a story about solving someone's problem."
                />

            <Skills />

            <StoryBeat 
                number="04"
                title="The Why Behind the Code"
                content="Above all, I see software engineering as the process of solving real-world problems through technology. It's not just about writing code—it's about understanding challenges, learning from them, and building solutions that make a meaningful impact. I'm excited to bring this philosophy to every project I work on."
                />

        </div>
    )
}