import './styles/Specials.css';

function Main() {

  return (
    <>
      <main>
        <div className="container">
          <h1>This weeks specials!</h1>
          <button>Online Menu</button>
        </div>

        <div className="special-grid">

          <div className="card">
            <div className="card-body">
              <img src={require("../images/foods/greek salad.jpg")} alt="Greek salad" className="card-img" />
              <h4 className="card-title">Greek salad</h4>
              <p className="card-text">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
              <a href="http://localhost:3000/" className="card-btn">Order a delivery <span>icon</span></a>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <img src={require("../images/foods/bruschetta.png")} alt="Bruschetta" className="card-img" />
              <h4 className="card-title">Bruschetta</h4>
              <p className="card-text">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
              <a href="http://localhost:3000/" className="card-btn">Order a delivery <span>icon</span></a>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <img src={require("../images/foods/lemon dessert.jpg")} alt="Lemon Dessert" className="card-img" />
              <h4 className="card-title">Lemon Dessert</h4>
              <p className="card-text">This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
              <a href="http://localhost:3000/" className="card-btn">Order a delivery <span>icon</span></a>
            </div>
          </div>

        </div>

      </main>
    </>
  )
}

export default Main