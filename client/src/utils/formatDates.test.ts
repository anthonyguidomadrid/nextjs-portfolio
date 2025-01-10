import { formatDate, formatDateRange } from './formatDates';

jest.mock('i18next', () => ({
  t: jest.fn((key) => {
    if (key === 'date.current') return 'Present';
    return key;
  }),
}));

describe('formatDate', () => {
  it('should format the date in English by default', () => {
    const date = '2025-01-10';
    expect(formatDate(date)).toBe('January 2025');
  });

  it('should format the date in French', () => {
    const date = '2025-01-10';
    expect(formatDate(date, 'fr')).toBe('Janvier 2025');
  });

  it('should format the date in Spanish', () => {
    const date = '2025-01-10';
    expect(formatDate(date, 'es')).toBe('Enero 2025');
  });

  it('should fallback to English for unsupported locales', () => {
    const date = '2025-01-10';
    expect(formatDate(date, 'de')).toBe('January 2025');
  });
});

describe('formatDateRange', () => {
  const t = require('i18next').t;

  it('should format a date range with both start and end dates', () => {
    const startDate = '2025-01-01';
    const endDate = '2025-12-31';
    expect(formatDateRange(startDate, t, 'en', endDate)).toBe(
      'January 2025 - December 2025'
    );
  });

  it('should format a date range with only the start date', () => {
    const startDate = '2025-01-01';
    expect(formatDateRange(startDate, t, 'en')).toBe('January 2025 - Present');
  });

  it('should format a date range in French', () => {
    const startDate = '2025-01-01';
    const endDate = '2025-12-31';
    expect(formatDateRange(startDate, t, 'fr', endDate)).toBe(
      'Janvier 2025 - Décembre 2025'
    );
  });

  it('should format a date range in Spanish', () => {
    const startDate = '2025-01-01';
    const endDate = '2025-12-31';
    expect(formatDateRange(startDate, t, 'es', endDate)).toBe(
      'Enero 2025 - Diciembre 2025'
    );
  });

  it('should fallback to English for unsupported locales in date range', () => {
    const startDate = '2025-01-01';
    const endDate = '2025-12-31';
    expect(formatDateRange(startDate, t, 'de', endDate)).toBe(
      'January 2025 - December 2025'
    );
  });
});
