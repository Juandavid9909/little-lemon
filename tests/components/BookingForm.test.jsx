import { render, screen } from '@testing-library/react';
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

    // Form and button ARIA attributes
    const formElement = screen.getByRole('form');
    expect(formElement).toHaveAttribute('aria-label', 'Table reservation form');

    const submitBtn = screen.getByRole('button', { name: /Make Your reservation/i });
    expect(submitBtn).toHaveAttribute('aria-label', 'Make Your reservation');
  });
});
