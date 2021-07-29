import { Link } from "react-router-dom"

export default function Header() {
    return (
        <div className='header flex-container'>

            <div className="">
                <Link to='/home' className='header-link'><h1>Julio Leon</h1></Link>
            </div>
            <div>
                <a href='mailto:julio.leon.diaz1@gmail.com' className='header-link' >
                    <h1 className="">Contact</h1>
                </a>
            </div>
        </div>
    )
}