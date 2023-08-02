import './styles/Header.css'
import { NavLink } from 'react-router-dom'
import Logo from "../images/colour_logo.png";

function Header() {

  return (
    <>
      <header>

        <NavLink to="/">
          <img src={Logo} alt="Little Lemon logo" className="nav-logo" />
        </NavLink>

        <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="#">Menu</NavLink></li>
            <li><NavLink to="/reservations">Reservations</NavLink></li>
            <li><NavLink to="#">Order Online</NavLink></li>
            <li><NavLink to="#">Login</NavLink></li>
          </ul>
        </nav>

      </header>
    </>
  )
}

export default Header