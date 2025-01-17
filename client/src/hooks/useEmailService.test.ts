import { renderHook, act } from '@testing-library/react';
import { useEmailService } from './useEmailService';
import emailjs from 'emailjs-com';

jest.mock('emailjs-com', () => ({
  send: jest.fn(),
}));

describe('useEmailService', () => {
  const mockFormData = {
    name: 'John Doe',
    email: 'john@example.com',
    message: 'Hello!',
  };

  beforeEach(() => {
    jest.clearAllMocks();
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID = 'test_service_id';
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID = 'test_template_id';
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY = 'test_public_key';
  });

  it('should have initial state', () => {
    const { result } = renderHook(() => useEmailService());
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isSuccess).toBe(false);
    expect(result.current.isError).toBe(false);
  });

  it('should call emailjs.send and set isSuccess on success', async () => {
    (emailjs.send as jest.Mock).mockResolvedValueOnce({ status: 200 });

    const { result } = renderHook(() => useEmailService());

    await act(async () => {
      await result.current.sendEmail(mockFormData);
    });

    expect(emailjs.send).toHaveBeenCalledWith(
      'test_service_id',
      'test_template_id',
      mockFormData,
      'test_public_key'
    );
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isSuccess).toBe(true);
    expect(result.current.isError).toBe(false);
  });

  it('should handle errors and set isError on failure', async () => {
    (emailjs.send as jest.Mock).mockRejectedValueOnce(new Error('Failed to send email'));

    const { result } = renderHook(() => useEmailService());

    await act(async () => {
      await result.current.sendEmail(mockFormData);
    });

    expect(emailjs.send).toHaveBeenCalledWith(
      'test_service_id',
      'test_template_id',
      mockFormData,
      'test_public_key'
    );
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isSuccess).toBe(false);
    expect(result.current.isError).toBe(true);
  });

  it('should handle loading state during API call', async () => {
    const promise = new Promise((resolve) => setTimeout(resolve, 100)); // Mock delayed response
    (emailjs.send as jest.Mock).mockReturnValueOnce(promise);

    const { result } = renderHook(() => useEmailService());

    act(() => {
      result.current.sendEmail(mockFormData);
    });

    expect(result.current.isLoading).toBe(true);

    await act(async () => {
      await promise;
    });

    expect(result.current.isLoading).toBe(false);
  });
});
