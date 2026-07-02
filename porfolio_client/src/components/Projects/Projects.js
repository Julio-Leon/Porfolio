import React from 'react';
import AOS from 'aos';

function Projects(props) {

    AOS.init({
        duration: 1000,
        mirror: true,
        once: false
    })

    const snakeGamePath = './assets/Projects/snake-game.png'
    const leagueFinderPath = './assets/Projects/league-finder.png'
    const bookAppPath = './assets/Projects/book-app.png'
    const bLucidPath = './assets/Projects/b-lucid.png'
    const ticTacToePath = './assets/Projects/tic-tac-toe.png'
    const pathfinderPath = './assets/Projects/pathfinder-placeholder.svg'
    const prestamosPath = './assets/Projects/prestamos-placeholder.svg'

    return (
        <>
            <h1 className='projects-title flex-container' id='projects'>My Projects</h1>
            
            <div className='left-description project-container flex-container'>
                <div className='project-description flex-container' data-aos='fade-right' data-aos-delay='100'>
                    <a href='https://lucid-pathfinder-visualizer.netlify.app/' target='_blank' rel='noreferrer'>Pathfinder Visualizer</a>
                    <p>An interactive algorithm visualizer that demonstrates pathfinding algorithms in action. Visualize how algorithms like Dijkstra's, A*, and BFS find the shortest path. Features include animated pathfinding, customizable grid generation, random maze creation, and multiple algorithm options. Perfect for understanding how these fundamental algorithms work. Check it out on <a id='github-link' href="https://github.com/Julio-Leon/pathfinder-visualizer" target='_blank' rel='noreferrer'>Github</a></p>
                </div>
                <div className="project-image-container flex-container">
                    <a className='flex-container' href='https://lucid-pathfinder-visualizer.netlify.app/' target='_blank' rel='noreferrer'><img src={pathfinderPath} width='55%' data-aos='fade-left' data-aos-delay='100' alt='Pathfinder Visualizer' /></a>
                </div>
            </div>

            <div className='right-description project-container flex-container'>
                <div className="project-image-container flex-container">
                    <a className='flex-container' href='https://prestamosleon.netlify.app/' target='_blank' rel='noreferrer'><img src={prestamosPath} width='55%' data-aos='fade-right' data-aos-delay='150' alt='Préstamos León' /></a>
                </div>
                <div className='project-description flex-container' data-aos='fade-left' data-aos-delay='150'>
                    <a href='https://prestamosleon.netlify.app/' target='_blank' rel='noreferrer'> Préstamos León</a>
                    <p>A comprehensive lending and loan management system designed for companies. Secure authentication allows managers to track and manage client loans with detailed transaction history. Features include account management, loan tracking, and financial reporting. Currently a single-manager system with plans to support multiple manager accounts for scalability. Built with modern best practices for security and user experience. Check it out on <a id='github-link' href="https://github.com/Julio-Leon/prestamos-leon" target='_blank' rel='noreferrer'>Github</a></p>
                </div>
            </div>

            <div className='right-description project-container flex-container'>
                <div className="project-image-container flex-container">
                    <a className='flex-container' href='https://julio-leon.github.io/Snake-Game/' target='_blank' rel='noreferrer'><img src={snakeGamePath} width='55%' data-aos='fade-right' data-aos-delay='150' alt='' /></a>
                </div>
                <div className='project-description flex-container' data-aos='fade-left' data-aos-delay='150'>
                    <a href='https://julio-leon.github.io/Snake-Game/' target='_blank' rel='noreferrer'> The Snake Game</a>
                    <p>Classic snake game written in Vanilla JS. Has a theme picker that allows you to change the color of most things inside the game board. Also has a difficulty selector which adjusts the speed of the snake. And at last it displays some extra information about the game. Check it out on <a id='github-link' href="https://github.com/Julio-Leon/Snake-Game" target='_blank' rel='noreferrer'>Github</a>
                    </p>
                </div>
            </div>

            <div className='left-description project-container flex-container'>
                <div className='project-description flex-container' data-aos='fade-right' data-aos-delay='200'>
                    <a href='https://league-find.netlify.app/' target='_blank' rel='noreferrer'>League Finder</a>
                    <p>League of Legends account tracker. Displays the information of the
                    account searched by name. I usually play this game when I am not 
                    programming(not very often by the way), and it comes in really handy
                    when I want to check the last few games of my teamates, or even the 
                    people I am going against! Check it out on <a id='github-link' href="https://github.com/Julio-Leon/league-finder" target='_blank' rel='noreferrer'>Github</a></p>
                </div>
                <div className="project-image-container flex-container">
                    <a className='flex-container' href='https://league-find.netlify.app/' target='_blank' rel='noreferrer'><img src={leagueFinderPath} width='55%' data-aos='fade-left' data-aos-delay='200' alt='' /></a>
                </div>
            </div>

            <div className='right-description project-container flex-container'>
                <div className="project-image-container flex-container">
                    <a className='flex-container' href='https://bookstop-books.netlify.app/' target='_blank' rel='noreferrer'><img src={bookAppPath} width='55%' data-aos='fade-right' data-aos-delay='250' alt='' /></a>
                </div>
                <div className='project-description flex-container' data-aos='fade-left' data-aos-delay='250'>
                    <a href='https://bookstop-books.netlify.app/' target='_blank' rel='noreferrer'> BookStop</a>
                    <p>A book app that lets you add books that you've read, or books that you want to read. Also lets you search through a huge library of books. Pretty much any book you can think of will be there. And you can store books, and come back to check the books added so that you can keep track of the books you want to rea, or already read. Check it out on <a id='github-link' href="https://github.com/bookstop" target='_blank' rel='noreferrer'>Github</a></p>
                </div>
            </div>

            <div className='left-description project-container flex-container'>
                <div className='project-description flex-container' data-aos='fade-right' data-aos-delay='300'>
                    <a href='https://b-lucid.netlify.app/#/' target='_blank' rel='noreferrer'>B-LUCID</a>
                    <p>An app where users can see other people's posts, leave comments, like them and of course post their own. Users also have their own  profile page that will display only their posts. You can find these users on the search bar on the top right. There is authentication, so only authenticated users will have access to full functionality. Check it out on <a id='github-link' href="https://github.com/Julio-Leon/B_LUCID_react" target='_blank' rel='noreferrer'>Github</a></p>
                </div>
                <div className="project-image-container flex-container">
                    <a className='flex-container' href='https://b-lucid.netlify.app/#/' target='_blank' rel='noreferrer'><img src={bLucidPath} width='55%' data-aos='fade-left' data-aos-delay='300' alt='' /></a>
                </div>
            </div>

            <div className='right-description project-container flex-container'>
                <div className="project-image-container flex-container">
                    <a className='flex-container' href='https://github.com/Julio-Leon/Tic-Tac-Toe-Online' target='_blank' rel='noreferrer'><img src={ticTacToePath} width='55%' data-aos='fade-right' data-aos-delay='350' alt='' /></a>
                </div>
                <div className='project-description flex-container' data-aos='fade-left' data-aos-delay='350'>
                    <a href='https://github.com/Julio-Leon/Tic-Tac-Toe-Online' target='_blank' rel='noreferrer'> Tic Tac Toe</a>
                    <p>Familiar Tic Tac Toe game built on React-Native. It is not deployed yet but if you'd like to try it on the Expo Go app, send me an email and I'll provide access. You can also clone down the Github Repo and run it yourself on the expo-cli. Check it out on <a id='github-link' href="https://github.com/Julio-Leon/Tic-Tac-Toe-Online" target='_blank' rel='noreferrer'>Github</a></p>
                </div>
            </div>
        </>
    );
}

export default Projects;