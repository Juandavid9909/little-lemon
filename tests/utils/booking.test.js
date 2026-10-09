import { initializeTimes, updateTimes } from '../../src/utils/booking';
import { fetchAPI } from '../../src/api';

describe('Booking Utilities Unit Tests', () => {
  test('initializeTimes returns available times array for today', () => {
    const times = initializeTimes();
    expect(Array.isArray(times)).toBe(true);
    expect(times.length).toBeGreaterThan(0);
  });

  test('updateTimes returns available times for a selected date', () => {
    const state = [];
    const date = '2026-10-15';
    const action = { type: 'UPDATE_TIMES', date };
    const result = updateTimes(state, action);

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    expect(result).toEqual(fetchAPI(date));
  });
});
