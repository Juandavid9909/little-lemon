import heroImage from '../assets/restauranfood.jpg';
import greekSalad from '../assets/greek salad.jpg';
import bruchetta from '../assets/bruchetta.svg';
import lemonDessert from '../assets/lemon dessert.jpg';

function DeliveryIcon() {
  return (
    <svg
      className="delivery-icon"
      width="18"
      height="15"
      viewBox="0 0 24 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M19.5 9.5h-2.2l-1.5-3.3A2 2 0 0 0 14 5H10V3H7v2H3a1 1 0 0 0-1 1v6a2 2 0 0 0 2 2h.2a3 3 0 0 0 5.6 0h3.4a3 3 0 0 0 5.6 0h1.2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1.5zM6 14a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3-3h-1.5l-1.2-2.5H18V11z" />
    </svg>
  );
}

function Main() {
  return (
    <main className="main">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-text">
            <h1 className="hero-title">Little Lemon</h1>
            <h2 className="hero-subtitle">Chicago</h2>
            <p className="hero-description">
              We are a family owned Mediterranean restaurant, focused on traditional
              recipes served with a modern twist.
            </p>
            <button type="button" className="btn-primary hero-btn">
              Reserve a Table
            </button>
          </div>
          <div className="hero-image-wrapper">
            <img
              src={heroImage}
              alt="Little Lemon chef serving appetizers"
              className="hero-image"
            />
          </div>
        </div>
      </section>

      {/* Specials Section */}
      <section className="specials-section">
        <div className="specials-container">
          <div className="specials-header">
            <h2 className="specials-title">This weeks specials!</h2>
            <button type="button" className="btn-primary specials-btn">
              Online Menu
            </button>
          </div>

          <div className="specials-grid">
            {/* Card 1: Greek salad */}
            <article className="special-card">
              <div className="card-image-wrapper">
                <img
                  src={greekSalad}
                  alt="Greek salad"
                  className="card-image"
                />
              </div>
              <div className="card-body">
                <div className="card-header">
                  <h3 className="card-title">Greek salad</h3>
                  <span className="card-price">$12.99</span>
                </div>
                <p className="card-description">
                  The famous greek salad of crispy lettuce, peppers, olives and our
                  Chicago style feta cheese, garnished with crunchy garlic and rosemary
                  croutons.
                </p>
                <div className="card-footer">
                  <a href="#" className="card-delivery-link">
                    <span>Order a delivery</span>
                    <DeliveryIcon />
                  </a>
                </div>
              </div>
            </article>

            {/* Card 2: Bruchetta */}
            <article className="special-card">
              <div className="card-image-wrapper">
                <img
                  src={bruchetta}
                  alt="Bruchetta"
                  className="card-image"
                />
              </div>
              <div className="card-body">
                <div className="card-header">
                  <h3 className="card-title">Bruchetta</h3>
                  <span className="card-price">$ 5.99</span>
                </div>
                <p className="card-description">
                  Our Bruschetta is made from grilled bread that has been smeared with
                  garlic and seasoned with salt and olive oil.
                </p>
                <div className="card-footer">
                  <a href="#" className="card-delivery-link">
                    <span>Order a delivery</span>
                    <DeliveryIcon />
                  </a>
                </div>
              </div>
            </article>

            {/* Card 3: Lemon Dessert */}
            <article className="special-card">
              <div className="card-image-wrapper">
                <img
                  src={lemonDessert}
                  alt="Lemon Dessert"
                  className="card-image"
                />
              </div>
              <div className="card-body">
                <div className="card-header">
                  <h3 className="card-title">Lemon Dessert</h3>
                  <span className="card-price">$ 5.00</span>
                </div>
                <p className="card-description">
                  This comes straight from grandma's recipe book, every last ingredient
                  has been sourced and is as authentic as can be imagined.
                </p>
                <div className="card-footer">
                  <a href="#" className="card-delivery-link">
                    <span>Order a delivery</span>
                    <DeliveryIcon />
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
