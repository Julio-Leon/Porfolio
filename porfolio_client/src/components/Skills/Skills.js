import AOS from "aos"

export default function Skills() {

    AOS.init({
        duration: 1000,
        once: false
    })

    return (
        <div id='skills' className='skills flex-container' data-aos='fade-up'>
            <div data-aos='fade-right' data-aos-delay='100' data-aos-duration='800'>
                <h2 className='skill-title'>Languages</h2>
                <h3 data-aos='slide-right' data-aos-delay='150'> - HTML</h3>
                <h3 data-aos='slide-right' data-aos-delay='200'> - CSS</h3>
                <h3 data-aos='slide-right' data-aos-delay='250'> - JavaScript(Node.js)</h3>
                <h3 data-aos='slide-right' data-aos-delay='300'> - Python</h3>
                <h3 data-aos='slide-right' data-aos-delay='350'> - Java</h3>
            </div>

            <div data-aos='fade-up' data-aos-delay='150' data-aos-duration='800'>
                <h2 className='skill-title'>Frameworks/Libraries</h2>
                <h3 data-aos='slide-up' data-aos-delay='200'> - Express</h3>
                <h3 data-aos='slide-up' data-aos-delay='250'> - Django</h3>
                <h3 data-aos='slide-up' data-aos-delay='300'> - React</h3>
                <h3 data-aos='slide-up' data-aos-delay='350'> - Mongoose</h3>
                <h3 data-aos='slide-up' data-aos-delay='400'> - React-Native</h3>
            </div>
            
            <div data-aos='fade-left' data-aos-delay='200' data-aos-duration='800'>
                <h2 className='skill-title'>Technologies</h2>
                <h3 data-aos='slide-left' data-aos-delay='250'> - Axios</h3>
                <h3 data-aos='slide-left' data-aos-delay='300'> - AJAX</h3>
                <h3 data-aos='slide-left' data-aos-delay='350'> - AWS</h3>
                <h3 data-aos='slide-left' data-aos-delay='400'> - Firebase</h3>
                <h3 data-aos='slide-left' data-aos-delay='450'> - MongoDB</h3>
                <h3 data-aos='slide-left' data-aos-delay='500'> - Posgres</h3>
            </div>
        </div>
    )
}