import { Link } from 'react-router-dom';

function ConfirmedBookingPage() {
  return (
    <section className="confirmed-booking" aria-labelledby="confirmed-title">
      <div className="confirmed-container">
        <div className="confirmed-card" role="region" aria-labelledby="confirmed-title">
          <div className="confirmation-icon" aria-hidden="true">✓</div>
          <h1 id="confirmed-title" className="confirmed-title">
            Booking Confirmed!
          </h1>
          <p className="confirmed-subtitle">
            Your reservation at Little Lemon has been successfully submitted and confirmed.
          </p>
          <div className="confirmed-info">
            <p>
              We are delighted to host you! A table has been reserved for your visit.
            </p>
            <p>
              If you need to make any changes or have special dietary requests, please contact us at <strong>(312) 555-0199</strong>.
            </p>
          </div>
          <div className="confirmed-actions">
            <Link
              to="/"
              className="btn-primary confirmed-btn"
              aria-label="Return to Home"
            >
              Return to Home
            </Link>
            <Link
              to="/booking"
              className="btn-secondary confirmed-btn"
              aria-label="Book Another Table"
            >
              Book Another Table
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConfirmedBookingPage;
