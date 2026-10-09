import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import BookingForm, {
  validateDate,
  validateTime,
  validateGuests,
  validateOccasion,
} from '../../src/components/BookingForm';
import { DEFAULT_AVAILABLE_TIMES } from '../../src/constants';

describe('BookingForm Component', () => {
  test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={DEFAULT_AVAILABLE_TIMES} />);
    const headingElement = screen.getByText('Book Now');
    expect(headingElement).toBeInTheDocument();
  });

  test('Renders static text labels in the BookingForm', () => {
    render(<BookingForm availableTimes={DEFAULT_AVAILABLE_TIMES} />);

    expect(screen.getByText(/Choose date/i)).toBeInTheDocument();
    expect(screen.getByText(/Choose time/i)).toBeInTheDocument();
    expect(screen.getByText(/Number of guests/i)).toBeInTheDocument();
    expect(screen.getByText(/Occasion/i)).toBeInTheDocument();

    const submitButton = screen.getByRole('button', { name: /On Click/i });
    expect(submitButton).toBeInTheDocument();
  });

  describe('Paso 1: HTML5 Validation Attributes', () => {
    test('Validates HTML5 attributes applied to the date input field', () => {
      render(<BookingForm availableTimes={DEFAULT_AVAILABLE_TIMES} />);
      const dateInput = screen.getByLabelText(/Choose date/i);

      expect(dateInput).toHaveAttribute('type', 'date');
      expect(dateInput).toHaveAttribute('required');
      expect(dateInput).toHaveAttribute('min');
      expect(dateInput).toHaveAttribute('aria-required', 'true');
    });

    test('Validates HTML5 attributes applied to the time select field', () => {
      render(<BookingForm availableTimes={DEFAULT_AVAILABLE_TIMES} />);
      const timeSelect = screen.getByLabelText(/Choose time/i);

      expect(timeSelect).toHaveAttribute('required');
      expect(timeSelect).toHaveAttribute('aria-required', 'true');
    });

    test('Validates HTML5 attributes applied to the guests input field', () => {
      render(<BookingForm availableTimes={DEFAULT_AVAILABLE_TIMES} />);
      const guestsInput = screen.getByLabelText(/Number of guests/i);

      expect(guestsInput).toHaveAttribute('type', 'number');
      expect(guestsInput).toHaveAttribute('min', '1');
      expect(guestsInput).toHaveAttribute('max', '10');
      expect(guestsInput).toHaveAttribute('required');
      expect(guestsInput).toHaveAttribute('aria-required', 'true');
    });

    test('Validates HTML5 attributes applied to the occasion select field', () => {
      render(<BookingForm availableTimes={DEFAULT_AVAILABLE_TIMES} />);
      const occasionSelect = screen.getByLabelText(/Occasion/i);

      expect(occasionSelect).toHaveAttribute('required');
      expect(occasionSelect).toHaveAttribute('aria-required', 'true');
    });
  });

  describe('Accessibility & ARIA Attributes', () => {
    test('Verifies form element ARIA attributes', () => {
      render(<BookingForm availableTimes={DEFAULT_AVAILABLE_TIMES} />);
      const form = screen.getByRole('form');
      expect(form).toHaveAttribute('aria-label', 'Table reservation form');
    });

    test('Verifies submit button has aria-label="On Click"', () => {
      render(<BookingForm availableTimes={DEFAULT_AVAILABLE_TIMES} />);
      const submitBtn = screen.getByRole('button', { name: /On Click/i });
      expect(submitBtn).toHaveAttribute('aria-label', 'On Click');
    });

    test('Verifies all form labels associate with inputs via htmlFor and matching id', () => {
      render(<BookingForm availableTimes={DEFAULT_AVAILABLE_TIMES} />);
      const dateInput = screen.getByLabelText(/Choose date/i);
      const timeSelect = screen.getByLabelText(/Choose time/i);
      const guestsInput = screen.getByLabelText(/Number of guests/i);
      const occasionSelect = screen.getByLabelText(/Occasion/i);

      expect(dateInput).toHaveAttribute('id', 'res-date');
      expect(timeSelect).toHaveAttribute('id', 'res-time');
      expect(guestsInput).toHaveAttribute('id', 'guests');
      expect(occasionSelect).toHaveAttribute('id', 'occasion');
    });
  });

  describe('Paso 2: JavaScript Validation Functions', () => {
    test('validateDate: returns true for valid date and false for invalid/empty date', () => {
      expect(validateDate('2026-10-15')).toBe(true);
      expect(validateDate('')).toBe(false);
      expect(validateDate('   ')).toBe(false);
      expect(validateDate(null)).toBe(false);
    });

    test('validateTime: returns true for valid time and false for invalid/empty time', () => {
      expect(validateTime('17:00')).toBe(true);
      expect(validateTime('20:30')).toBe(true);
      expect(validateTime('')).toBe(false);
      expect(validateTime('   ')).toBe(false);
      expect(validateTime(null)).toBe(false);
    });

    test('validateGuests: returns true for numbers 1 to 10 and false for invalid numbers', () => {
      expect(validateGuests(1)).toBe(true);
      expect(validateGuests('1')).toBe(true);
      expect(validateGuests(5)).toBe(true);
      expect(validateGuests(10)).toBe(true);
      expect(validateGuests('10')).toBe(true);

      expect(validateGuests(0)).toBe(false);
      expect(validateGuests(-1)).toBe(false);
      expect(validateGuests(11)).toBe(false);
      expect(validateGuests('15')).toBe(false);
      expect(validateGuests('')).toBe(false);
      expect(validateGuests('abc')).toBe(false);
    });

    test('validateOccasion: returns true for valid occasion and false for invalid/empty occasion', () => {
      expect(validateOccasion('Birthday')).toBe(true);
      expect(validateOccasion('Anniversary')).toBe(true);
      expect(validateOccasion('')).toBe(false);
      expect(validateOccasion('   ')).toBe(false);
      expect(validateOccasion(null)).toBe(false);
    });
  });

  describe('Paso 2: React Client-Side Validation States', () => {
    test('Submit button is disabled initially when required fields (date) are empty', () => {
      render(<BookingForm availableTimes={DEFAULT_AVAILABLE_TIMES} />);
      const submitBtn = screen.getByRole('button', { name: /On Click/i });

      expect(submitBtn).toBeDisabled();
    });

    test('Submit button becomes enabled when all inputs have valid values', () => {
      render(<BookingForm availableTimes={DEFAULT_AVAILABLE_TIMES} />);

      const dateInput = screen.getByLabelText(/Choose date/i);
      const submitBtn = screen.getByRole('button', { name: /On Click/i });

      fireEvent.change(dateInput, { target: { value: '2026-10-15' } });
      expect(submitBtn).toBeEnabled();
    });

    test('Submit button is disabled and displays error message when guests is invalid', () => {
      render(<BookingForm availableTimes={DEFAULT_AVAILABLE_TIMES} />);

      const dateInput = screen.getByLabelText(/Choose date/i);
      const guestsInput = screen.getByLabelText(/Number of guests/i);
      const submitBtn = screen.getByRole('button', { name: /On Click/i });

      fireEvent.change(dateInput, { target: { value: '2026-10-15' } });
      expect(submitBtn).toBeEnabled();

      fireEvent.change(guestsInput, { target: { value: '0' } });
      expect(submitBtn).toBeDisabled();
      expect(screen.getByText(/Number of guests must be between 1 and 10/i)).toBeInTheDocument();

      fireEvent.change(guestsInput, { target: { value: '11' } });
      expect(submitBtn).toBeDisabled();
      expect(screen.getByText(/Number of guests must be between 1 and 10/i)).toBeInTheDocument();

      fireEvent.change(guestsInput, { target: { value: '4' } });
      expect(submitBtn).toBeEnabled();
      expect(screen.queryByText(/Number of guests must be between 1 and 10/i)).not.toBeInTheDocument();
    });
  });

  test('Verifies that the user can fill and submit the BookingForm', () => {
    const mockSubmitForm = vi.fn();
    render(
      <BookingForm
        availableTimes={DEFAULT_AVAILABLE_TIMES}
        submitForm={mockSubmitForm}
      />
    );

    const dateInput = screen.getByLabelText(/Choose date/i);
    const timeSelect = screen.getByLabelText(/Choose time/i);
    const guestsInput = screen.getByLabelText(/Number of guests/i);
    const occasionSelect = screen.getByLabelText(/Occasion/i);
    const submitButton = screen.getByRole('button', { name: /On Click/i });

    fireEvent.change(dateInput, { target: { value: '2026-10-15' } });
    fireEvent.change(timeSelect, { target: { value: '18:00' } });
    fireEvent.change(guestsInput, { target: { value: '4' } });
    fireEvent.change(occasionSelect, { target: { value: 'Anniversary' } });

    fireEvent.click(submitButton);

    expect(mockSubmitForm).toHaveBeenCalledTimes(1);
    expect(mockSubmitForm).toHaveBeenCalledWith({
      date: '2026-10-15',
      time: '18:00',
      guests: '4',
      occasion: 'Anniversary',
    });
  });

  test('Renders confirmation screen when form is submitted without submitForm prop', () => {
    render(<BookingForm availableTimes={DEFAULT_AVAILABLE_TIMES} />);

    const dateInput = screen.getByLabelText(/Choose date/i);
    const submitButton = screen.getByRole('button', { name: /On Click/i });

    fireEvent.change(dateInput, { target: { value: '2026-10-20' } });
    fireEvent.click(submitButton);

    expect(screen.getByText('Reservation Confirmed!')).toBeInTheDocument();
    expect(screen.getByText('2026-10-20')).toBeInTheDocument();
  });
});
