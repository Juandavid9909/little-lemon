import { DEFAULT_AVAILABLE_TIMES } from '../constants';

export const initializeTimes = () => {
  return DEFAULT_AVAILABLE_TIMES;
};

export const updateTimes = (state, action) => {
  // For now, returns the same available times regardless of date
  return DEFAULT_AVAILABLE_TIMES;
};
