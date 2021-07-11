import { Link } from "react-router-dom"

export default function Header() {
    return (
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 flex flex-col items-center border border-black ">
            <div className="text-white text-opacity-50 text-5xl my-6">
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
            </nav>
        </div>
    )
}