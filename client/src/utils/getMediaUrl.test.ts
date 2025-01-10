import { getMediaUrl } from './getMediaUrl';

describe('getMediaUrl', () => {
  const baseUrl = 'https://example.com';
  const relativeUrl = '/path/to/resource.jpg';
  const expectedUrl = `${baseUrl}${relativeUrl}`;

  beforeAll(() => {
    process.env.NEXT_PUBLIC_BASE_URL = baseUrl;
  });

  afterAll(() => {
    delete process.env.NEXT_PUBLIC_BASE_URL;
  });

  it('should return an empty string if no relativeUrl is provided', () => {
    expect(getMediaUrl()).toBe('');
  });

  it('should return the full URL when a relativeUrl is provided', () => {
    expect(getMediaUrl(relativeUrl)).toBe(expectedUrl);
  });

  it('should return an empty string if NEXT_PUBLIC_BASE_URL is not defined and relativeUrl is provided', () => {
    delete process.env.NEXT_PUBLIC_BASE_URL;
    expect(getMediaUrl(relativeUrl)).toBe(relativeUrl);
  });
});
