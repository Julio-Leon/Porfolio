import { Card, Carousel } from 'react-bootstrap'

export default function Projects() {

    const snakeGamePath = './assets/Projects/snake-game.png'
    const leagueFinderPath = './assets/Projects/league-finder.png'
    
    return (
        <div style={{
            display: 'flex',
            height: '3500px',
            width: '100vw',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            background: 'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(47,47,182,1) 35%, rgba(0,212,255,1) 100%)'
        }}>
            <div style={{
                width: '75%',
                marginTop: '90px'
            }}>
                <Carousel>
                    <Carousel.Item>
                        <img className='w-100' src={leagueFinderPath} alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className='w-100' src={snakeGamePath} alt="" />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div style={{
                width: '75%',
                display: 'flex',
                justifyContent: 'space-around',
                marginTop: '90px',
                marginBottom: '90px'
            }}>
                <div style={{
                    width: '30%'
                }}>
                    <Card bg='dark' text='light'>
                        <Card.Body>
                            <Card.Title><a style={{
                                textDecoration: 'none',
                                color: 'white'
                            }} href="https://julio-leon.github.io/Snake-Game" target='_blank' rel='noreferrer'>SNAKE GAME</a></Card.Title>
                        </Card.Body>
                        <Card.Text>
                            <img className='w-100' src={snakeGamePath} alt="" />
                            <p style={{
                                margin: '5px'
                            }}>
                                Classic Snake Game with a theme picker that changes all of the game colors, a difficulty selector that speeds the snake up(or slows down) and a highscore to beat!
                            </p>
                        </Card.Text>
                    </Card>
                </div>
                <div style={{
                    width: '30%'
                }}>
                    <Card bg='dark' text='light'>
                        <Card.Body>
                            <Card.Title><a style={{
                                textDecoration: 'none',
                                color: 'white'
                            }} href="https://league-find.netlify.app" target='_blank' rel='noreferrer'>LEAGUE FINDER</a></Card.Title>
                        </Card.Body>
                        <Card.Text>
                            <img className='w-100' src={leagueFinderPath} alt="" />
                            <p style={{
                                margin: '5px'
                            }}>
                                League Finder is an app that helps League of Legends players search up details and stats about other accounts. It has a Dark Mode feature and allows to switch the server where the account is going to be searched.
                            </p>
                        </Card.Text>
                    </Card>
                </div>
            </div>
        </div>
    )
}