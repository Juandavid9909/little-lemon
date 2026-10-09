import { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import BookingPage from '../pages/BookingPage';
import { DEFAULT_AVAILABLE_TIMES } from '../constants';

export const initializeTimes = () => {
  return DEFAULT_AVAILABLE_TIMES;
};

export const updateTimes = (state, action) => {
  // For now, returns the same available times regardless of date
  return DEFAULT_AVAILABLE_TIMES;
};

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
            />
          }
        />
      </Routes>
    </main>
  );
}

export default Main;
