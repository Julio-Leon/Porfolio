import AOS from "aos"

export default function Skills() {

    AOS.init({
        duration: 1000,
        mirror: true
    })

    return (
        <div className='skills flex-container' data-aos='fade-up'>
            <div>
                <h2 className='skill-title'>Languages</h2>
                <h3> - HTML</h3>
                <h3> - CSS</h3>
                <h3> - JavaScript(Node.js)</h3>
                <h3> - Python</h3>
                <h3> - Java</h3>
            </div>

            <div>
                <h2 className='skill-title'>Frameworks</h2>
                <h3> - Express</h3>
                <h3> - Django</h3>
                <h3> - React</h3>
                <h3> - Mongoose</h3>
            </div>

            {/* <div>
                <h2 className='skill-title'>Libraries</h2>
                <h3> - React</h3>
                <h3> - Mongoose</h3>
            </div> */}

            {/* <div>
                <h2 className='skill-title'>Databases</h2>
                <h3> - MongoDB</h3>
                <h3> - Postgres</h3>
            </div> */}

            <div>
                <h2 className='skill-title'>Technologies</h2>
                <h3> - Axios</h3>
                <h3> - AJAX</h3>
                <h3> - AWS</h3>
            </div>
        </div>
    )
}