export const getTodayDateString = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const validateDate = (date) => Boolean(date && date.trim() !== '');

export const validateTime = (time) => Boolean(time && time.trim() !== '');

export const validateGuests = (guests) => {
  const guestsNum = Number(guests);
  return guests !== '' && !isNaN(guestsNum) && guestsNum >= 1 && guestsNum <= 10;
};

export const validateOccasion = (occasion) => Boolean(occasion && occasion.trim() !== '');
