import { fetchAPI } from '../api';
import { DEFAULT_AVAILABLE_TIMES } from '../constants';

export const initializeTimes = () => {
  return fetchAPI(new Date());
};

export const updateTimes = (state, action) => {
  const date = action?.date || action?.payload;
  if (date) {
    return fetchAPI(date);
  }
  return state;
};
