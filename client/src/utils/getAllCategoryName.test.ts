import { getAllCategoryName } from './getAllCategoryName';

describe('getAllCategoryName', () => {
  it('should return "All" when locale is not provided', () => {
    expect(getAllCategoryName()).toBe('All');
  });

  it('should return "Tous" when locale is "fr"', () => {
    expect(getAllCategoryName('fr')).toBe('Tous');
  });

  it('should return "Todos" when locale is "es"', () => {
    expect(getAllCategoryName('es')).toBe('Todos');
  });

  it('should return "All" for unsupported locales', () => {
    expect(getAllCategoryName('de')).toBe('All');
    expect(getAllCategoryName('it')).toBe('All');
  });
});
