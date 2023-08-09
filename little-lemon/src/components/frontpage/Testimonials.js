import customer1 from '../../images/customers/man1.png';
import customer2 from '../../images/customers/man2.png';
import customer3 from '../../images/customers/old_woman.png';
import customer4 from '../../images/customers/woman.png';
import star from '../../images/customers/star.png';
import './styles/Testimonials.css';
import './styles/media-queries/TestimonialsQuery.css';

function Testimonials() {

  return (
    <>
      <section className='testimonials-section'>
        <h1>What our customers think</h1>

        <div className='testimonials-grid'>

          <div id='border-left' className='box'>
            <div className='inner-grid'>

              <div className='rating'>
                <img src={star} id='star' alt="yellow star" />
                <img src={star} id='star' alt="yellow star" />
                <img src={star} id='star' alt="yellow star" />
                <img src={star} id='star' alt="yellow star" />
                <img src={star} id='star' alt="yellow star" />
              </div>

              <div className='customer-info'>
                <img src={customer1} id='customer' alt="customer" />
                <div id='name'>
                  <h3>Mikhail Chen</h3>
                  <h4>Mike_C</h4>
                </div>
              </div>

              <p>The food was flavourful, savory, and succulent. After my meal, I was knocked straight into a food coma. Just amazing.</p>
            </div>
          </div>

          <div id='border-right' className='box'>
            <div className='inner-grid'>

              <div className='rating'>
                <img src={star} id='star' alt="yellow star" />
                <img src={star} id='star' alt="yellow star" />
                <img src={star} id='star' alt="yellow star" />
                <img src={star} id='star' alt="yellow star" />
                <img src={star} id='star' alt="yellow star" />
              </div>

              <div className='customer-info'>
                <img src={customer4} id='customer' alt="customer" />
                <div id='name'>
                  <h3>Ada Jennings</h3>
                  <h4>itsAda</h4>
                </div>
              </div>

              <p>It was so much better than I expected. One of the best mouth-watering steaks I've had grace my taste buds in a long time.</p>
            </div>
          </div>

          <div id='border-left' className='box'>
            <div className='inner-grid'>

              <div className='rating'>
                <img src={star} id='star' alt="yellow star" />
                <img src={star} id='star' alt="yellow star" />
                <img src={star} id='star' alt="yellow star" />
                <img src={star} id='star' alt="yellow star" />
              </div>

              <div className='customer-info'>
                <img src={customer2} id='customer' alt="customer" />
                <div id='name'>
                  <h3>Jason Brown</h3>
                  <h4>jason_brown</h4>
                </div>
              </div>

              <p>Everything I tried was bursting with flavour. I want to hire their decorator to furnish my apartment. Overall 4 stars.</p>
            </div>
          </div>

          <div id='border-right' className='box'>
            <div className='inner-grid'>

              <div className='rating'>
                <img src={star} id='star' alt="yellow star" />
                <img src={star} id='star' alt="yellow star" />
                <img src={star} id='star' alt="yellow star" />
                <img src={star} id='star' alt="yellow star" />
                <img src={star} id='star' alt="yellow star" />
              </div>

              <div className='customer-info'>
                <img src={customer3} id='customer' alt="customer" />
                <div id='name'>
                  <h3>Barbara Lopez</h3>
                  <h4>B_Lopez</h4>
                </div>
              </div>

              <p>The entrees are simply to die for. Try out the huge selection of incredible appetizers. I'm definitely coming back for more!</p>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Testimonials