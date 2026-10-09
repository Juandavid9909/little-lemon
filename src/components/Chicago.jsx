import marioAndAdrianA from '../assets/Mario and Adrian A.jpg';
import marioAndAdrianB from '../assets/Mario and Adrian b.jpg';

function Chicago() {
  return (
    <section id="about" className="chicago-section" aria-labelledby="chicago-title">
      <div className="chicago-container">
        <div className="chicago-text">
          <h2 id="chicago-title" className="chicago-title">Little Lemon</h2>
          <h3 className="chicago-subtitle">Chicago</h3>
          <p className="chicago-description">
            Little Lemon was founded by two Italian brothers, Mario and Adrian,
            who moved to the United States to pursue their shared passion for
            Mediterranean culinary arts. Inspired by time-honored family recipes
            handed down through generations, they crafted a menu that celebrates
            authentic flavors with a fresh, contemporary touch.
          </p>
          <p className="chicago-description">
            Based in the heart of Chicago, our kitchen prides itself on sourcing
            the freshest locally-grown produce while preserving traditional olive
            oil, herbs, and grilling techniques.
          </p>
        </div>

        <div className="chicago-images-wrapper">
          <img
            src={marioAndAdrianA}
            alt="Mario and Adrian in the Little Lemon kitchen"
            className="chicago-img chicago-img-top"
            loading="lazy"
            decoding="async"
            width="270"
            height="330"
          />
          <img
            src={marioAndAdrianB}
            alt="Mario and Adrian preparing food"
            className="chicago-img chicago-img-bottom"
            loading="lazy"
            decoding="async"
            width="270"
            height="330"
          />
        </div>
      </div>
    </section>
  );
}

export default Chicago;
