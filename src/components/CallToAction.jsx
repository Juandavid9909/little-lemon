import { Link } from 'react-router-dom';
import heroImage from '../assets/restauranfood.jpg';

function CallToAction() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-container">
        <div className="hero-text">
          <h1 id="hero-title" className="hero-title">Little Lemon</h1>
          <h2 className="hero-subtitle">Chicago</h2>
          <p className="hero-description">
            We are a family owned Mediterranean restaurant, focused on traditional
            recipes served with a modern twist.
          </p>
          <Link to="/booking" className="btn-primary hero-btn" aria-label="Reserve a Table">
            Reserve a Table
          </Link>
        </div>
        <div className="hero-image-wrapper">
          <img
            src={heroImage}
            alt="Little Lemon chef serving appetizers"
            className="hero-image"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width="375"
            height="420"
          />
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
