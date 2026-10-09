import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import BookingForm from '../../src/components/BookingForm';
import { DEFAULT_AVAILABLE_TIMES } from '../../src/constants';

describe('BookingForm Component', () => {
  test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={DEFAULT_AVAILABLE_TIMES} />);
    const headingElement = screen.getByText('Book Now');
    expect(headingElement).toBeInTheDocument();
  });

  test('Renders static text labels in the BookingForm', () => {
    render(<BookingForm availableTimes={DEFAULT_AVAILABLE_TIMES} />);

    // Validate static labels
    expect(screen.getByText(/Choose date/i)).toBeInTheDocument();
    expect(screen.getByText(/Choose time/i)).toBeInTheDocument();
    expect(screen.getByText(/Number of guests/i)).toBeInTheDocument();
    expect(screen.getByText(/Occasion/i)).toBeInTheDocument();

    // Validate submit button
    const submitButton = screen.getByRole('button', { name: /Make Your reservation/i });
    expect(submitButton).toBeInTheDocument();
  });

  test('Validates HTML5 and ARIA attributes on input fields', () => {
    render(<BookingForm availableTimes={DEFAULT_AVAILABLE_TIMES} />);

    // Date field
    const dateInput = screen.getByLabelText(/Choose date/i);
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveAttribute('required');
    expect(dateInput).toHaveAttribute('min');
    expect(dateInput).toHaveAttribute('aria-required', 'true');
    expect(dateInput).toHaveAttribute('aria-label', 'Choose reservation date');

    // Time select
    const timeSelect = screen.getByLabelText(/Choose time/i);
    expect(timeSelect).toHaveAttribute('required');
    expect(timeSelect).toHaveAttribute('aria-required', 'true');
    expect(timeSelect).toHaveAttribute('aria-label', 'Choose reservation time');

    // Guests input
    const guestsInput = screen.getByLabelText(/Number of guests/i);
    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
    expect(guestsInput).toHaveAttribute('required');
    expect(guestsInput).toHaveAttribute('aria-required', 'true');
    expect(guestsInput).toHaveAttribute('aria-label', 'Number of guests');

    // Occasion select
    const occasionSelect = screen.getByLabelText(/Occasion/i);
    expect(occasionSelect).toHaveAttribute('required');
    expect(occasionSelect).toHaveAttribute('aria-required', 'true');

    // Form and button ARIA attributes
    const formElement = screen.getByRole('form');
    expect(formElement).toHaveAttribute('aria-label', 'Table reservation form');

    const submitBtn = screen.getByRole('button', { name: /Make Your reservation/i });
    expect(submitBtn).toHaveAttribute('aria-label', 'Make Your reservation');
  });

  test('Validates client-side React validation states: disables and enables submit button', () => {
    render(<BookingForm availableTimes={DEFAULT_AVAILABLE_TIMES} />);

    const dateInput = screen.getByLabelText(/Choose date/i);
    const guestsInput = screen.getByLabelText(/Number of guests/i);
    const submitBtn = screen.getByRole('button', { name: /Make Your reservation/i });

    // Submit button is disabled by default because date is empty
    expect(submitBtn).toBeDisabled();

    // Enter valid date -> form becomes valid -> submit button is enabled
    fireEvent.change(dateInput, { target: { value: '2026-10-15' } });
    expect(submitBtn).toBeEnabled();

    // Set invalid guests (< 1) -> submit button becomes disabled and shows error
    fireEvent.change(guestsInput, { target: { value: '0' } });
    expect(submitBtn).toBeDisabled();
    expect(screen.getByText(/Number of guests must be between 1 and 10/i)).toBeInTheDocument();

    // Set invalid guests (> 10) -> submit button remains disabled
    fireEvent.change(guestsInput, { target: { value: '11' } });
    expect(submitBtn).toBeDisabled();

    // Reset guests to valid number -> submit button becomes enabled again
    fireEvent.change(guestsInput, { target: { value: '4' } });
    expect(submitBtn).toBeEnabled();
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
    const submitButton = screen.getByRole('button', { name: /Make Your reservation/i });

    // Simulate user filling the form inputs
    fireEvent.change(dateInput, { target: { value: '2026-10-15' } });
    fireEvent.change(timeSelect, { target: { value: '18:00' } });
    fireEvent.change(guestsInput, { target: { value: '4' } });
    fireEvent.change(occasionSelect, { target: { value: 'Anniversary' } });

    // Simulate user clicking submit
    fireEvent.click(submitButton);

    // Verify submitForm was called with the entered values
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
    const submitButton = screen.getByRole('button', { name: /Make Your reservation/i });

    fireEvent.change(dateInput, { target: { value: '2026-10-20' } });
    fireEvent.click(submitButton);

    expect(screen.getByText('Reservation Confirmed!')).toBeInTheDocument();
    expect(screen.getByText('2026-10-20')).toBeInTheDocument();
  });
});
