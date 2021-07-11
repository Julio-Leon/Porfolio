export default function Projects() {

    const snakeGamePath = './assets/Projects/snake-game.png'
    const leagueFinderPath = './assets/Projects/league-finder.png'
    
    // Add a description for each project

    return (
        <div className="flex flex-col border border-black height-100 items-center">
            {/* <h1 className='projects-title | text-4xl'>
                My Projects:
            </h1> */}
            <div className="flex border border-black flex-wrap">
                <a href='https://julio-leon.github.io/Snake-Game/' rel='noreferrer' target='_blank' className='mx-8 transform transition duration-300 hover:scale-110' >
                    <div>
                        <h2>
                            Snake Game
                        </h2>
                        <div>
                            <img className='border-4 border-black rounded-lg' src={snakeGamePath} width='550px' alt="Snake Game" />
                        </div>
                    </div>
                </a>
                <a href='https://league-find.netlify.app/' rel='noreferrer' target='_blank' className='mx-8 transform transition duration-300 hover:scale-110' >
                    <div>
                        <h2>
                            League Finder
                        </h2>
                        <div>
                            <img className='border-4 border-black rounded-lg' src={leagueFinderPath} width='550px' alt="Snake Game" />
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}