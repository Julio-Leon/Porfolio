import { Container, Navbar, Nav} from "react-bootstrap"

export default function Header() {
    return (
        <div>

            <Navbar style={{
                fontSize: '25px',
                }} collapseOnSelect expand='md' variant='dark' bg='dark' >
                <Container>
                    <Navbar.Brand style={{
                        fontSize: '35px'
                    }}>Julio Leon</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav"/>
                    <Nav className='me-auto'>
                        {/* <Nav.Link style={{
                            marginRight: '15px',
                            marginLeft: '15px'
                        }} href='/about' >About</Nav.Link> */}
                        <Nav.Link style={{
                            marginRight: '15px',
                            marginLeft: '15px'
                        }} href='https://julio-leon-porfolio.netlify.app/projects' >Projects</Nav.Link>
                        <Nav.Link style={{
                            marginRight: '25px',
                            marginLeft: '25px'
                        }} href='https://julio-leon-porfolio.netlify.app/skills' >Skills</Nav.Link>
                        <Nav.Link style={{
                            marginRight: '25px',
                            marginLeft: '25px'
                        }} href='https://julio-leon-porfolio.netlify.app/contact' >Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            {/* <div className="text-white text-opacity-50 text-5xl my-6">
                <h1>Julio Leon</h1>
            </div>
            <nav className="flex border border-black ">
                <Link to='/about' >
                    <div className="text-white border border-black text-3xl py-2 mx-16 transform transition duration-300 hover:scale-110 ">About</div>
                </Link>
                <Link to='/skills' >
                    <div className="text-white border border-black text-3xl py-2 mx-16 transform transition duration-300 hover:scale-110 ">Skills</div>
                </Link>
                <Link to='/projects' >
                    <div className="text-white border border-black text-3xl py-2 mx-16 transform transition duration-300 hover:scale-110 ">Projects</div>
                </Link>
                <Link to='contact' >
                    <div className="text-white border border-black text-3xl py-2 mx-16 transform transition duration-300 hover:scale-110 ">Contact</div>
                </Link>
            </nav> */}
        </div>
    )
}