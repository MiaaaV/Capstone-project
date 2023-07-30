import './styles/Nav.css'

function Nav() {

  return (
    <>
      <nav>
        <div className="navbar">

          <div>
            <img src={require("../images/colour_logo.png")} alt="Little Lemon logo" className="nav-logo" />
          </div>

          <div>
            <ul className="nav-items">
              <li className="nav-item"> <a href="#">home</a></li>
              <li className="nav-item"> <a href="#"> about</a></li>
              <li className="nav-item"> <a href="#"> menu </a></li>
              <li className="nav-item"> <a href="#"> reservations</a></li>
              <li className="nav-item"> <a href="#"> order online</a></li>
              <li className="nav-item"> <a href="#"> login</a></li>
            </ul>
          </div>

        </div>
      </nav>
    </>
  )
}

export default Nav