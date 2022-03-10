import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <ul>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/login'}>Login</Link>
            </li>
            <li>
                <Link to={'/contact'}>Contact</Link>
            </li>
            <li>
                <Link to={'/allhotels'}>All Hotels</Link>
            </li>
        </ul>
    )
}

export default NavBar