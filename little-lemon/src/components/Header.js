import './styles/Header.css';

function Header() {

  return (
    <>
      <header>
        <div className="grid">

          <div className="first">
            <div>
              <h1>Little Lemon</h1>
              <h3>Chicago</h3>
            </div>

            <div className="text-box">
              <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
              <button>Reserve a Table</button>
            </div>
          </div>

          <div className="second">
            <img src={require("../images/restauranfood.jpg")} alt="A waiter holding food" className="test-img" />
          </div>

        </div>
      </header>
    </>
  )
}

export default Header