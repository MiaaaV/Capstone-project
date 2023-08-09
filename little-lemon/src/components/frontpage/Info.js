import './styles/Info.css';
import './styles/media-queries/InfoQuery.css';

function Info() {

  return (
    <>
      <section id="info-section">

        <div className='info-headers'>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
        </div>

        <div className="info-content">
          <div className='info-p'>
            <p>Little Lemon is a charming, family owned Mediterranean neighbourhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
            <br />
            <p>The restaurant was founded by two brothers, Adrian and Mario.</p>
          </div>

          <div className='info-images'>
            <div id='img1' />
            <div id='img2' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Info