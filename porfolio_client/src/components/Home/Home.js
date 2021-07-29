import { Carousel } from 'react-bootstrap'
import Skills from '../Skills/Skills'
import AOS from 'aos';


export default function Projects() {

    AOS.init({
        duration: 1000,
        mirror: true
    })

    const snakeGamePath = './assets/Projects/snake-game.png'
    const leagueFinderPath = './assets/Projects/league-finder.png'
    const bookAppPath = './assets/Projects/book-app.png'
    
    return (
        <div className='home'>
            <section className='quote-section'>
                <h1 className='quote'>
                    Every good developer has a PHD in the sacred art of Googling
                </h1>
            </section>

            <div className='project-carousel'>
                <Carousel prevLabel={''} nextLabel={''}>
                    <Carousel.Item>
                        <img className='d-block w-100' src={leagueFinderPath} alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className='d-block w-100' src={snakeGamePath} alt="" />
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className='project-container flex-container'>
                <div className="project-image-container flex-container">
                    <img src={snakeGamePath} width='75%' data-aos='fade-right' alt='' />
                </div>
                <div className='project-description flex-container' data-aos='fade-left'>
                    <p>Classic snake game written in Vanilla JS. Has a theme picker that allows you to change the color of most things inside the game board. Also has a difficulty selector which adjusts the speed of the snake. And at last it displays some extra information about the game.</p>
                </div>
            </div>

            <div className='project-container flex-container'>
                <div className='project-description flex-container' data-aos='fade-right'>
                    <p>League of Legends account tracker. Displays the information of the
                    account searched by name. I usually play this game when I am not 
                    programming(not very often by the way), and it comes in really handy
                    when I want to check the last few games of my teamates, or even the 
                    people I am going against!</p>
                </div>
                <div className="project-image-container flex-container">
                    <img src={leagueFinderPath} width='75%' data-aos='fade-left' alt='' />
                </div>
            </div>

            <div className='project-container flex-container'>
                <div className="project-image-container flex-container">
                    <img src={bookAppPath} width='75%' data-aos='fade-right' alt='' />
                </div>
                <div className='project-description flex-container' data-aos='fade-left'>
                    <p>A book app that lets you add books that you've read, or books that you want to read. Also lets you search through a huge library of books. Pretty much any book you can think of will be there. And you can store books, and come back to check the books added so that you can keep track of the books you want to rea, or already read.</p>
                </div>
            </div>

            <Skills />

        </div>
    )
}