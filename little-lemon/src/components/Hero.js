import './styles/Hero.css';

function Hero() {

  return (
    <>
      <div className='hero'>

        <div className="hero-section">
          <div>
            <h1 className="hero-title">Little Lemon</h1>
            <h2 className="hero-subtitle">Chicago</h2>

            <div className="text-box">
              <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
              <button>Reserve a Table</button>
            </div>
          </div>

          <div className="img-div">
            <img src={require("../images/restauranfood.jpg")} alt="A waiter holding food" />
          </div>
        </div>

      </div>
    </>
  )
}

export default Hero