import './styles/Nav.css'

function Nav() {

  return (
    <>
      <nav>

        <div>
          <img src={require("../images/colour_logo.png")} alt="Little Lemon logo" className="nav-logo" />
        </div>

        <div>
          <ul>
            <li><a href="http://localhost:3000/">Home</a></li>
            <li><a href="http://localhost:3000/">About</a></li>
            <li><a href="http://localhost:3000/">Menu</a></li>
            <li><a href="http://localhost:3000/">Reservations</a></li>
            <li><a href="http://localhost:3000/">Order Online</a></li>
            <li><a href="http://localhost:3000/">Login</a></li>
          </ul>
        </div>

      </nav>
    </>
  )
}

export default Nav