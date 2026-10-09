import { initializeTimes, updateTimes } from '../../src/components/Main';
import { DEFAULT_AVAILABLE_TIMES } from '../../src/constants';

describe('Booking Times Reducer Functions', () => {
  test('initializeTimes returns the expected initial array of times', () => {
    const initialTimes = initializeTimes();
    expect(initialTimes).toEqual(DEFAULT_AVAILABLE_TIMES);
    expect(initialTimes.length).toBeGreaterThan(0);
  });

  test('updateTimes returns the same value that is provided in the state', () => {
    const currentState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const action = { type: 'UPDATE_TIMES', date: '2026-10-15', payload: '2026-10-15' };

    const updatedState = updateTimes(currentState, action);

    // Validates that updateTimes returns the expected state
    expect(updatedState).toEqual(currentState);
  });
});
