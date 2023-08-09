import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonBiking } from "@fortawesome/free-solid-svg-icons";
import salad from '../../images/foods/greek salad.jpg';
import bruschetta from '../../images/foods/bruschetta.png';
import cake from '../../images/foods/lemon dessert.jpg';
import pasta from '../../images/foods/penne pasta.jpg';
import './styles/Specials.css';
import './styles/media-queries/SpecialsQuery.css';

function Main() {

  return (
    <>
      <section className='special-section'>
        <div className="special-container">
          <h1>This week's specials!</h1>
          <button>Online Menu</button>
        </div>

        <div className="special-grid">

          <div className="card">
            <div className="card-body">
              <img src={salad} alt="Greek salad" className="card-img" />

              <div className='card-info'>
                <div className='card-header'>
                  <h4>Greek salad</h4>
                  <h4><span>$ 12.99</span></h4>
                </div>
                <p className="card-text">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                <a href="http://localhost:3000/" className="card-btn">Add to order <span><FontAwesomeIcon icon={faPersonBiking} /></span></a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <img src={bruschetta} alt="Bruschetta" className="card-img" />

              <div className='card-info'>
                <div className='card-header'>
                  <h4>Bruschetta</h4>
                  <h4><span>$ 5.99</span></h4>
                </div>
                <p className="card-text">Our delicious Bruschetta is made from grilled local bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                <a href="http://localhost:3000/" className="card-btn">Add to order <span><FontAwesomeIcon icon={faPersonBiking} /></span></a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <img src={cake} alt="Lemon dessert" className="card-img" />

              <div className='card-info'>
                <div className='card-header'>
                  <h4>Lemon Cake</h4>
                  <h4><span>$ 5.00</span></h4>
                </div>
                <p className="card-text">This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                <a href="http://localhost:3000/" className="card-btn">Add to order <span><FontAwesomeIcon icon={faPersonBiking} /></span></a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <img src={pasta} alt="Penne pasta" className="card-img" />

              <div className='card-info'>
                <div className='card-header'>
                  <h4>Penne pasta</h4>
                  <h4><span>$ 14.99</span></h4>
                </div>
                <p className="card-text">Mediterranean style prepared penne pasta is our all time favourite for both the young and old. Coated in plenty mozzarella and Parmesan cheese.</p>
                <a href="http://localhost:3000/" className="card-btn">Add to order <span><FontAwesomeIcon icon={faPersonBiking} /></span></a>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Main