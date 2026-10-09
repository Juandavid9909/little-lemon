import { useState } from 'react';
import { DEFAULT_AVAILABLE_TIMES, DEFAULT_OCCASIONS } from '../constants';

import {
  getTodayDateString,
  validateDate,
  validateTime,
  validateGuests,
  validateOccasion,
} from '../utils/validation';

export {
  validateDate,
  validateTime,
  validateGuests,
  validateOccasion,
};

function BookingForm({
  availableTimes = DEFAULT_AVAILABLE_TIMES,
  dispatch,
  submitForm,
}) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState(availableTimes[0] || DEFAULT_AVAILABLE_TIMES[0]);
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState(DEFAULT_OCCASIONS[0]);
  const [touched, setTouched] = useState({
    date: false,
    time: false,
    guests: false,
    occasion: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const minDate = getTodayDateString();

  const isDateValid = validateDate(date);
  const isTimeValid = validateTime(time);
  const isGuestsValid = validateGuests(guests);
  const isOccasionValid = validateOccasion(occasion);

  const isFormValid = isDateValid && isTimeValid && isGuestsValid && isOccasionValid;

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    setTouched((prev) => ({ ...prev, date: true }));
    if (dispatch) {
      dispatch({ type: 'UPDATE_TIMES', date: newDate, payload: newDate });
    }
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
    setTouched((prev) => ({ ...prev, time: true }));
  };

  const handleGuestsChange = (e) => {
    setGuests(e.target.value);
    setTouched((prev) => ({ ...prev, guests: true }));
  };

  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
    setTouched((prev) => ({ ...prev, occasion: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) {
      setTouched({
        date: true,
        time: true,
        guests: true,
        occasion: true,
      });
      return;
    }

    const bookingData = { date, time, guests, occasion };

    if (submitForm) {
      submitForm(bookingData);
    } else {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setDate('');
    setTime(availableTimes[0] || '17:00');
    setGuests(1);
    setOccasion(DEFAULT_OCCASIONS[0]);
    setTouched({
      date: false,
      time: false,
      guests: false,
      occasion: false,
    });
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
              name="res-date"
              className={`form-input ${touched.date && !isDateValid ? 'input-error' : ''}`}
              value={date}
              min={minDate}
              onChange={handleDateChange}
              onBlur={() => handleBlur('date')}
              required
              aria-required="true"
              aria-invalid={touched.date && !isDateValid}
              aria-labelledby="date-label"
              aria-label="Choose reservation date"
              aria-describedby={touched.date && !isDateValid ? 'date-error' : 'required-legend'}
            />
            {touched.date && !isDateValid && (
              <p id="date-error" className="form-error" role="alert">
                Please choose a valid reservation date
              </p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="res-time" id="time-label" className="form-label">
              Choose time <span className="required-asterisk" aria-hidden="true">*</span>
            </label>
            <select
              id="res-time"
              name="res-time"
              className={`form-select ${touched.time && !isTimeValid ? 'input-error' : ''}`}
              value={time}
              onChange={handleTimeChange}
              onBlur={() => handleBlur('time')}
              required
              aria-required="true"
              aria-invalid={touched.time && !isTimeValid}
              aria-labelledby="time-label"
              aria-label="Choose reservation time"
              aria-describedby={touched.time && !isTimeValid ? 'time-error' : 'required-legend'}
            >
              {availableTimes.map((timeOption) => (
                <option key={timeOption} value={timeOption}>
                  {timeOption}
                </option>
              ))}
            </select>
            {touched.time && !isTimeValid && (
              <p id="time-error" className="form-error" role="alert">
                Please choose a reservation time
              </p>
            )}
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
              name="guests"
              className={`form-input ${touched.guests && !isGuestsValid ? 'input-error' : ''}`}
              value={guests}
              onChange={handleGuestsChange}
              onBlur={() => handleBlur('guests')}
              required
              aria-required="true"
              aria-invalid={touched.guests && !isGuestsValid}
              aria-labelledby="guests-label"
              aria-label="Number of guests"
              aria-describedby={touched.guests && !isGuestsValid ? 'guests-error' : 'required-legend'}
            />
            {touched.guests && !isGuestsValid && (
              <p id="guests-error" className="form-error" role="alert">
                Number of guests must be between 1 and 10
              </p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="occasion" id="occasion-label" className="form-label">
              Occasion <span className="required-asterisk" aria-hidden="true">*</span>
            </label>
            <select
              id="occasion"
              name="occasion"
              className={`form-select ${touched.occasion && !isOccasionValid ? 'input-error' : ''}`}
              value={occasion}
              onChange={handleOccasionChange}
              onBlur={() => handleBlur('occasion')}
              required
              aria-required="true"
              aria-invalid={touched.occasion && !isOccasionValid}
              aria-labelledby="occasion-label"
              aria-label="Select occasion"
              aria-describedby={touched.occasion && !isOccasionValid ? 'occasion-error' : undefined}
            >
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>
            {touched.occasion && !isOccasionValid && (
              <p id="occasion-error" className="form-error" role="alert">
                Please select an occasion
              </p>
            )}
          </div>

          <input
            type="submit"
            value="Make Your reservation"
            aria-label="Make Your reservation"
            className="btn-primary booking-submit-btn"
            disabled={!isFormValid}
          />
        </form>
      )}
    </div>
  );
}

export default BookingForm;
