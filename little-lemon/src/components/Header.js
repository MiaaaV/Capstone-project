import './styles/Header.css';

function Header() {

  return (
    <>
      <header>

        <div className="header-section">
          <div>
            <h1 className="header-title">Little Lemon</h1>
            <h2 className="header-subtitle">Chicago</h2>

            <div className="text-box">
              <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
              <button>Reserve a Table</button>
            </div>
          </div>

          <div className="img-div">
            <img src={require("../images/restauranfood.jpg")} alt="A waiter holding food" />
          </div>
        </div>

      </header>
    </>
  )
}

export default Header