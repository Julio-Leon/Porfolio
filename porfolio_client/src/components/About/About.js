export default function About() {

    const myImagePath = './assets/Personal/ProfilePicture.jpeg'

    return (
        <div id='about' className="about-section">
            <div className="my-image flex-container">
                <img src={myImagePath} alt="" />
            </div>
            <h1 className='about-title'>
                Who Am I?
            </h1>
            <p className='about'>Welcome to my Portfolio, My name is Julio Leon. I am a young software developer based on New York that is very passionate about programming. I love solving really hard puzzles and algorithms because of the satisfaction that comes after I get it done. But what I love the most is that feeling I get when something I create is useful to someone out there, that motivates me more and more. This is who I am, and I would love to know who you are.</p>
        </div>
    )
}