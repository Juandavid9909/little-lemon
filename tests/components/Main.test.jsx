import { initializeTimes, updateTimes } from '../../src/components/Main';
import { fetchAPI } from '../../src/api';

describe('Booking Times Reducer Functions with API', () => {
  test('initializeTimes returns the expected initial array of times from fetchAPI', () => {
    const today = new Date();
    const expectedTimes = fetchAPI(today);
    const initialTimes = initializeTimes();

    expect(Array.isArray(initialTimes)).toBe(true);
    expect(initialTimes.length).toBeGreaterThan(0);
    expect(initialTimes).toEqual(expectedTimes);
  });

  test('updateTimes returns the times from fetchAPI for the selected date', () => {
    const currentState = ['17:00', '18:00'];
    const testDate = '2026-10-15';
    const action = { type: 'UPDATE_TIMES', date: testDate };

    const expectedTimes = fetchAPI(testDate);
    const updatedState = updateTimes(currentState, action);

    expect(Array.isArray(updatedState)).toBe(true);
    expect(updatedState.length).toBeGreaterThan(0);
    expect(updatedState).toEqual(expectedTimes);
  });

  test('updateTimes returns different available times for different dates', () => {
    const currentState = [];
    const date1 = '2026-10-15';
    const date2 = '2026-10-16';

    const timesDay15 = updateTimes(currentState, { type: 'UPDATE_TIMES', date: date1 });
    const timesDay16 = updateTimes(currentState, { type: 'UPDATE_TIMES', date: date2 });

    expect(timesDay15).not.toEqual(timesDay16);
  });
});
