import HeroImg from '../images/restauranfood.jpg';
import { NavLink } from 'react-router-dom';
import './styles/Hero.css';
import './styles/media-queries/HeroQuery.css';

function Hero() {

  return (
    <>
      <div className='hero-section'>
        <div className="hero-container">

          <div className="hero-left-box">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>

            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <NavLink to="/reservations"><button>Reserve a Table</button></NavLink>
          </div>

          <div className='hero-right-box'>
            <div className="img-div">
              <img src={HeroImg} alt="A waiter holding food" />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Hero;