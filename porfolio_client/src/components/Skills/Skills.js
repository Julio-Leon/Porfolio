export default function Skills() {
    return (
        <div style={{
            display: 'flex',
            height: '3500px',
            width: '100vw',
            justifyContent: 'space-around',
            alignItems: 'center',
            background: 'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(47,47,182,1) 35%, rgba(0,212,255,1) 100%)'
        }}>
            <div style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-around',
                color: 'white'
            }}>
                    <div>
                        <h2 style={{
                            fontSize: '45px'
                        }}>Languages</h2>
                        <h3> - HTML</h3>
                        <h3> - CSS</h3>
                        <h3> - JavaScript(Node.js)</h3>
                        <h3> - Python</h3>
                        <h3> - Java</h3>
                    </div>

                    <div>
                        <h2 style={{
                            fontSize: '45px'
                        }}>Frameworks</h2>
                        <h3> - Express</h3>
                        <h3> - Django</h3>
                    </div>

                    <div>
                        <h2 style={{
                            fontSize: '45px'
                        }}>Libraries</h2>
                        <h3> - React</h3>
                        <h3> - Mongoose</h3>
                    </div>

                    <div>
                        <h2 style={{
                            fontSize: '45px'
                        }}>Databases</h2>
                        <h3> - MongoDB</h3>
                        <h3> - Postgres</h3>
                    </div>

                    <div>
                        <h2 style={{
                            fontSize: '45px'
                        }}>Technologies</h2>
                        <h3> - Axios</h3>
                        <h3> - AJAX</h3>
                        <h3> - AWS</h3>
                    </div>
            </div>
        </div>
    )
}