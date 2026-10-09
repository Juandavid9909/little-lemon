import { useState } from 'react';
import { DEFAULT_AVAILABLE_TIMES, DEFAULT_OCCASIONS } from '../constants';

function BookingForm({
  availableTimes = DEFAULT_AVAILABLE_TIMES,
  dispatch,
  submitForm,
}) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState(DEFAULT_AVAILABLE_TIMES[0]);
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState(DEFAULT_OCCASIONS[0]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    if (dispatch) {
      dispatch({ type: 'UPDATE_TIMES', date: newDate, payload: newDate });
    }
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleGuestsChange = (e) => {
    setGuests(e.target.value);
  };

  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingData = { date, time, guests, occasion };

    if (submitForm) {
      submitForm(bookingData);
    } else {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setDate('');
    setTime('17:00');
    setGuests(1);
    setOccasion('Birthday');
    setIsSubmitted(false);
  };

  return (
    <div className="booking-form-wrapper">
      {isSubmitted ? (
        <div className="booking-confirmation-box" role="alert" aria-live="polite">
          <div className="confirmation-icon" aria-hidden="true">✓</div>
          <h3 className="confirmation-title">Reservation Confirmed!</h3>
          <p className="confirmation-text">
            Thank you for reserving a table at Little Lemon.
          </p>
          <div className="confirmation-details">
            <p><strong>Date:</strong> {date || 'Selected date'}</p>
            <p><strong>Time:</strong> {time}</p>
            <p><strong>Guests:</strong> {guests}</p>
            <p><strong>Occasion:</strong> {occasion}</p>
          </div>
          <button
            type="button"
            className="btn-primary confirmation-btn"
            onClick={handleReset}
            aria-label="Book Another Table"
          >
            Book Another Table
          </button>
        </div>
      ) : (
        <form
          className="booking-form"
          style={{ display: 'grid', maxWidth: '360px', gap: '20px' }}
          onSubmit={handleSubmit}
          role="form"
          aria-label="Table reservation form"
        >
          <h2 id="booking-form-heading" className="booking-form-heading">Book Now</h2>
          <p id="required-legend" className="required-legend">
            <span className="required-asterisk" aria-hidden="true">*</span> Indicates a required field
          </p>

          <div className="form-group">
            <label htmlFor="res-date" id="date-label" className="form-label">
              Choose date <span className="required-asterisk" aria-hidden="true">*</span>
            </label>
            <input
              type="date"
              id="res-date"
              className="form-input"
              value={date}
              onChange={handleDateChange}
              required
              aria-required="true"
              aria-labelledby="date-label"
              aria-label="Choose reservation date"
              aria-describedby="required-legend"
            />
          </div>

          <div className="form-group">
            <label htmlFor="res-time" id="time-label" className="form-label">
              Choose time <span className="required-asterisk" aria-hidden="true">*</span>
            </label>
            <select
              id="res-time"
              className="form-select"
              value={time}
              onChange={handleTimeChange}
              required
              aria-required="true"
              aria-labelledby="time-label"
              aria-label="Choose reservation time"
              aria-describedby="required-legend"
            >
              {availableTimes.map((timeOption) => (
                <option key={timeOption} value={timeOption}>
                  {timeOption}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="guests" id="guests-label" className="form-label">
              Number of guests <span className="required-asterisk" aria-hidden="true">*</span>
            </label>
            <input
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              className="form-input"
              value={guests}
              onChange={handleGuestsChange}
              required
              aria-required="true"
              aria-labelledby="guests-label"
              aria-label="Number of guests"
              aria-describedby="required-legend"
            />
          </div>

          <div className="form-group">
            <label htmlFor="occasion" id="occasion-label" className="form-label">
              Occasion
            </label>
            <select
              id="occasion"
              className="form-select"
              value={occasion}
              onChange={handleOccasionChange}
              aria-labelledby="occasion-label"
              aria-label="Select occasion"
            >
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>
          </div>

          <input
            type="submit"
            value="Make Your reservation"
            aria-label="Make Your reservation"
            className="btn-primary booking-submit-btn"
          />
        </form>
      )}
    </div>
  );
}

export default BookingForm;
