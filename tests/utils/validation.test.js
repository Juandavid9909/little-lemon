import {
  getTodayDateString,
  validateDate,
  validateTime,
  validateGuests,
  validateOccasion,
} from '../../src/utils/validation';

describe('Validation Utilities Unit Tests', () => {
  test('getTodayDateString returns a valid YYYY-MM-DD date string', () => {
    const today = getTodayDateString();
    expect(today).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  describe('validateDate', () => {
    test('returns true for a non-empty date', () => {
      expect(validateDate('2026-10-15')).toBe(true);
    });

    test('returns false for empty or whitespace-only date', () => {
      expect(validateDate('')).toBe(false);
      expect(validateDate('   ')).toBe(false);
      expect(validateDate(null)).toBe(false);
      expect(validateDate(undefined)).toBe(false);
    });
  });

  describe('validateTime', () => {
    test('returns true for a non-empty time', () => {
      expect(validateTime('17:00')).toBe(true);
    });

    test('returns false for empty or whitespace-only time', () => {
      expect(validateTime('')).toBe(false);
      expect(validateTime('   ')).toBe(false);
      expect(validateTime(null)).toBe(false);
    });
  });

  describe('validateGuests', () => {
    test('returns true for guest numbers between 1 and 10', () => {
      expect(validateGuests(1)).toBe(true);
      expect(validateGuests('1')).toBe(true);
      expect(validateGuests(5)).toBe(true);
      expect(validateGuests(10)).toBe(true);
      expect(validateGuests('10')).toBe(true);
    });

    test('returns false for guest numbers less than 1 or greater than 10', () => {
      expect(validateGuests(0)).toBe(false);
      expect(validateGuests(-2)).toBe(false);
      expect(validateGuests(11)).toBe(false);
      expect(validateGuests('20')).toBe(false);
    });

    test('returns false for empty, null, or non-numeric values', () => {
      expect(validateGuests('')).toBe(false);
      expect(validateGuests(null)).toBe(false);
      expect(validateGuests('abc')).toBe(false);
    });
  });

  describe('validateOccasion', () => {
    test('returns true for a valid occasion string', () => {
      expect(validateOccasion('Birthday')).toBe(true);
      expect(validateOccasion('Anniversary')).toBe(true);
    });

    test('returns false for empty or invalid occasion string', () => {
      expect(validateOccasion('')).toBe(false);
      expect(validateOccasion('   ')).toBe(false);
      expect(validateOccasion(null)).toBe(false);
    });
  });
});
