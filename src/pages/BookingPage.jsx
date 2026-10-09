import BookingForm from '../components/BookingForm';

function BookingPage({ availableTimes, dispatch }) {
  return (
    <section className="booking-page" aria-labelledby="booking-heading">
      <div className="booking-hero">
        <div className="booking-hero-container">
          <h1 id="booking-heading" className="booking-title">Reserve a Table</h1>
          <p className="booking-subtitle">
            Experience the authentic Mediterranean taste. Book your table online in just a few steps!
          </p>
        </div>
      </div>

      <div className="booking-content-container">
        <div className="booking-card">
          <h2 className="booking-card-title">Bookings & Reservations</h2>
          <p className="booking-card-text">
            Please select your preferred date, time, and number of diners. We look forward to hosting you at Little Lemon!
          </p>
          <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        </div>
      </div>
    </section>
  );
}

export default BookingPage;
