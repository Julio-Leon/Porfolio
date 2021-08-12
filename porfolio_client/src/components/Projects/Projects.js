import React from 'react';
import AOS from 'aos';

function Projects(props) {

    AOS.init({
        duration: 1000,
        mirror: true
    })

    const snakeGamePath = './assets/Projects/snake-game.png'
    const leagueFinderPath = './assets/Projects/league-finder.png'
    const bookAppPath = './assets/Projects/book-app.png'
    const bLucidPath = './assets/Projects/b-lucid.png'

    return (
        <>
            <h1 className='projects-title flex-container' id='projects'>My Projects</h1>
            <div className='right-description project-container flex-container'>
                <div className="project-image-container flex-container">
                    <img src={snakeGamePath} width='55%' data-aos='fade-right' alt='' />
                </div>
                <div className='project-description flex-container' data-aos='fade-left'>
                    <a href='https://julio-leon.github.io/Snake-Game/' target='_blank' rel='noreferrer'> The Snake Game</a>
                    <p>Classic snake game written in Vanilla JS. Has a theme picker that allows you to change the color of most things inside the game board. Also has a difficulty selector which adjusts the speed of the snake. And at last it displays some extra information about the game.</p>
                </div>
            </div>

            <div className='project-container flex-container'>
                <div className='project-description flex-container' data-aos='fade-right'>
                    <a href='https://league-find.netlify.app/' target='_blank' rel='noreferrer'>League Finder</a>
                    <p>League of Legends account tracker. Displays the information of the
                    account searched by name. I usually play this game when I am not 
                    programming(not very often by the way), and it comes in really handy
                    when I want to check the last few games of my teamates, or even the 
                    people I am going against!</p>
                </div>
                <div className="project-image-container flex-container">
                    <img src={leagueFinderPath} width='55%' data-aos='fade-left' alt='' />
                </div>
            </div>

            <div className='right-description project-container flex-container'>
                <div className="project-image-container flex-container">
                    <img src={bookAppPath} width='55%' data-aos='fade-right' alt='' />
                </div>
                <div className='project-description flex-container' data-aos='fade-left'>
                    <a href='https://bookstop-books.netlify.app/' target='_blank' rel='noreferrer'> BookStop</a>
                    <p>A book app that lets you add books that you've read, or books that you want to read. Also lets you search through a huge library of books. Pretty much any book you can think of will be there. And you can store books, and come back to check the books added so that you can keep track of the books you want to rea, or already read.</p>
                </div>
            </div>

            <div className='project-container flex-container'>
                <div className='project-description flex-container' data-aos='fade-right'>
                    <a href='https://b-lucid.netlify.app/#/' target='_blank' rel='noreferrer'>B-LUCID</a>
                    <p>An app where users can see other people's posts, leave comments, like them and of course post their own. Users also have their own page that will display only their posts. You can find these users on the search bar on the top right. There is authentication, so only authenticated users will have access to full functionality.</p>
                </div>
                <div className="project-image-container flex-container">
                    <img src={bLucidPath} width='55%' data-aos='fade-left' alt='' />
                </div>
            </div>
        </>
    );
}

export default Projects;