import { useState } from 'react';

function BookingForm({ availableTimes: propsAvailableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // State array for available booking times
  const [availableTimes, setAvailableTimes] = useState([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ]);

  // Support both internal state and lifted state via props (for next lesson)
  const timesOptions = propsAvailableTimes || availableTimes;

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    if (dispatch) {
      dispatch({ type: 'UPDATE_TIMES', payload: newDate });
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
        <div className="booking-confirmation-box" role="alert">
          <div className="confirmation-icon">✓</div>
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
          >
            Book Another Table
          </button>
        </div>
      ) : (
        <form
          className="booking-form"
          style={{ display: 'grid', maxWidth: '360px', gap: '20px' }}
          onSubmit={handleSubmit}
          aria-label="Table reservation form"
        >
          <p className="required-legend">
            <span className="required-asterisk" aria-hidden="true">*</span> Indicates a required field
          </p>

          <div className="form-group">
            <label htmlFor="res-date" className="form-label">
              Choose date <span className="required-asterisk" aria-hidden="true">*</span>
            </label>
            <input
              type="date"
              id="res-date"
              className="form-input"
              value={date}
              onChange={handleDateChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="res-time" className="form-label">
              Choose time <span className="required-asterisk" aria-hidden="true">*</span>
            </label>
            <select
              id="res-time"
              className="form-select"
              value={time}
              onChange={handleTimeChange}
              required
            >
              {timesOptions.map((timeOption) => (
                <option key={timeOption} value={timeOption}>
                  {timeOption}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="guests" className="form-label">
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
            />
          </div>

          <div className="form-group">
            <label htmlFor="occasion" className="form-label">
              Occasion
            </label>
            <select
              id="occasion"
              className="form-select"
              value={occasion}
              onChange={handleOccasionChange}
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
