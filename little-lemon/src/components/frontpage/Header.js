import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../../images/logos/colour_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import './styles/Header.css';
import './styles/media-queries/HeaderQuery.css';

function Header() {

  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);

  return (
    <>
      <header>
        <NavLink to="/">
          <img src={Logo} alt="Little Lemon logo" />
        </NavLink>

        <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/menu">Menu</NavLink></li>
            <li><NavLink to="/reservations">Reservations</NavLink></li>
            <li><NavLink to="/orderonline">Order Online</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
          </ul>
        </nav>

        <div className='mobile-nav' onClick={handleClick}>
          {click ? (<FontAwesomeIcon icon={faBars} className='fa-icon' />) : (<FontAwesomeIcon icon={faClose} className='fa-icon' />)}
        </div>
      </header>
    </>
  )
}

export default Header;