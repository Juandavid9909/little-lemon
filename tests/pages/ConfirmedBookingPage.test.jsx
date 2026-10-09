import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ConfirmedBookingPage from '../../src/pages/ConfirmedBookingPage';

describe('ConfirmedBookingPage Component', () => {
  test('Renders confirmation title and message', () => {
    render(
      <BrowserRouter>
        <ConfirmedBookingPage />
      </BrowserRouter>
    );

    expect(screen.getByText(/Booking Confirmed!/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Your reservation at Little Lemon has been successfully submitted and confirmed/i)
    ).toBeInTheDocument();
  });

  test('Renders navigation action buttons', () => {
    render(
      <BrowserRouter>
        <ConfirmedBookingPage />
      </BrowserRouter>
    );

    expect(screen.getByRole('link', { name: /Return to Home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Book Another Table/i })).toBeInTheDocument();
  });
});
