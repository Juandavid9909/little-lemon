import { initializeTimes, updateTimes } from '../../src/utils/booking';
import { DEFAULT_AVAILABLE_TIMES } from '../../src/constants';

describe('Booking Utilities Unit Tests', () => {
  test('initializeTimes returns default available times', () => {
    const times = initializeTimes();
    expect(times).toEqual(DEFAULT_AVAILABLE_TIMES);
  });

  test('updateTimes returns current state or updated times', () => {
    const state = DEFAULT_AVAILABLE_TIMES;
    const action = { type: 'UPDATE_TIMES', date: '2026-10-15', payload: '2026-10-15' };
    expect(updateTimes(state, action)).toEqual(state);
  });
});
