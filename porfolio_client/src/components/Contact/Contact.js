export default function Contact() {
    return (
        <div style={{
            display: 'flex',
            height: '3500px',
            width: '100vw',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'column',
            color: 'white',
            background: 'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(47,47,182,1) 35%, rgba(0,212,255,1) 100%)'
        }}>
            
            {/* <div style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-around',
                color: 'white'
            }}> */}
            <h1>Email: julio.leon.diaz1@gmail.com</h1>
            <h1>Phone Number: (646)-639-2921</h1>
            <h1>Github: <a style={{
                textDecoration: 'none',
                color: 'white'
            }} href="https://github.com/Julio-Leon">github.com/Julio-Leon</a></h1>
            <h1>LinkedIn: <a style={{
                textDecoration: 'none',
                color: 'white'
            }} href="https://www.linkedin.com/in/julio-leon-diaz/">linkedin.com/in/julio-leon-diaz</a></h1>
            {/* </div> */}

        </div>
    )
}