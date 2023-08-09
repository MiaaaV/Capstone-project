import { NavLink } from 'react-router-dom';
import Logo from "../../images/logos/footer_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import './styles/Footer.css';
import './styles/media-queries/FooterQuery.css';

function Footer() {

  return (
    <>
      <footer>

        <div className='footer'>
          <div className='logo-col'>
            <NavLink to="/">
              <img src={Logo} id='footer-logo' alt="Little Lemon logo" />
            </NavLink>
          </div>

          <div className="footer-col">
            <h2>Page navigation</h2>
            <nav>
              <ul class='footer-ul'>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/menu">Menu</NavLink></li>
                <li><NavLink to="/reservations">Reservations</NavLink></li>
                <li><NavLink to="/orderonline">Order Online</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
              </ul>
            </nav>
          </div>

          <div className="footer-col">
            <h2>Contact</h2>
            <ul className='footer-ul'>
              <li><span><FontAwesomeIcon icon={faLocationDot} /></span> Lemon Street 11</li>
              <li><span><FontAwesomeIcon icon={faPhone} /></span> +123 456 7891</li>
              <li><span><FontAwesomeIcon icon={faEnvelope} /></span> Lemon@LL.com</li>
            </ul>
          </div>

          <div className="footer-col">
            <h2>Opening times</h2>
            <ul className='footer-ul'>
              <li>Mon-Fri: 10:30 - 24:00</li>
              <li>Sat: 11:00 - 22:00</li>
              <li>Sun: <span>Closed</span></li>
            </ul>
          </div>

        </div>
      </footer>
    </>
  )
}

export default Footer