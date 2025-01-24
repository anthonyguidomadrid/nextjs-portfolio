import { screen, fireEvent, waitFor } from '@testing-library/react';
import { ContactForm } from './ContactForm';
import { useEmailService } from '~/hooks';
import { DEFAULT_STATE } from './ContactForm.constants';
import { render } from '~/utils/test-utils';
import { usePrivacyModal } from '~/hooks';

jest.mock('../../../hooks/useEmailService.ts', () => ({
  useEmailService: jest.fn(),
}));

jest.mock('../../../hooks/usePrivacyModal.ts', () => ({
  usePrivacyModal: jest.fn(),
}));

describe('ContactForm', () => {
  const mockSendEmail = jest.fn();
  const mockOpenModal = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
    (useEmailService as jest.Mock).mockReturnValue({
      sendEmail: mockSendEmail,
      isLoading: false,
      isSuccess: false,
    });
    (usePrivacyModal as jest.Mock).mockReturnValue({
      openModal: mockOpenModal,
    });
  });

  const getInput = (name: string) => screen.getByRole('textbox', { name });
  const getSendButton = () => screen.getByLabelText('Send');
  const getSuccessMessage = () =>
    screen.queryByText('Thank you! Your message has been sent successfully.');
  const MOCKED_NAME = 'John Doe';
  const MOCKED_EMAIL = 'john@example.com';
  const MOCKED_MESSAGE = 'Hello, this is a test message.';

  const fillForm = () => {
    fireEvent.change(getInput('Name'), { target: { value: MOCKED_NAME } });
    fireEvent.change(getInput('Email'), { target: { value: MOCKED_EMAIL } });
    fireEvent.change(getInput('Message'), {
      target: { value: MOCKED_MESSAGE },
    });
    fireEvent.click(screen.getByRole('checkbox'));
  };

  it('renders the form with all fields and a submit button', () => {
    render(<ContactForm />);

    expect(getInput('Name')).toBeVisible();
    expect(getInput('Email')).toBeVisible();
    expect(getInput('Message')).toBeVisible();
    expect(getSendButton()).toBeVisible();
  });

  it('updates form fields on user input', () => {
    render(<ContactForm />);

    const nameInput = getInput('Name');
    const emailInput = getInput('Email');
    const messageInput = getInput('Message');

    fillForm();

    expect(nameInput).toHaveValue(MOCKED_NAME);
    expect(emailInput).toHaveValue(MOCKED_EMAIL);
    expect(messageInput).toHaveValue(MOCKED_MESSAGE);
  });

  it('disables the submit button and shows a loader when loading', () => {
    (useEmailService as jest.Mock).mockReturnValue({
      sendEmail: mockSendEmail,
      isLoading: true,
      isSuccess: false,
    });

    render(<ContactForm />);
    expect(getSendButton()).toBeDisabled();
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('calls the sendEmail function with form data on submit', async () => {
    render(<ContactForm />);

    const nameInput = getInput('Name');
    const emailInput = getInput('Email');
    const messageInput = getInput('Message');

    fillForm();

    fireEvent.click(getSendButton());

    await waitFor(() => {
      expect(mockSendEmail).toHaveBeenCalledWith({
        name: MOCKED_NAME,
        email: MOCKED_EMAIL,
        message: MOCKED_MESSAGE,
      });
    });

    expect(nameInput).toHaveValue(DEFAULT_STATE.name);
    expect(emailInput).toHaveValue(DEFAULT_STATE.email);
    expect(messageInput).toHaveValue(DEFAULT_STATE.message);
  });

  it('displays a success message when the email is sent successfully', async () => {
    (useEmailService as jest.Mock).mockReturnValue({
      sendEmail: mockSendEmail,
      isLoading: false,
      isSuccess: true,
    });

    render(<ContactForm />);

    fillForm();

    fireEvent.click(getSendButton());

    await waitFor(() => expect(getSuccessMessage()).toBeVisible());
  });

  it('displays an error message when the email fails to send', async () => {
    (useEmailService as jest.Mock).mockReturnValue({
      sendEmail: mockSendEmail,
      isLoading: false,
      isSuccess: false,
    });

    render(<ContactForm />);

    fillForm();

    fireEvent.click(getSendButton());

    await waitFor(() => {
      expect(
        screen.getByText(
          'Oops! Something went wrong while sending your message. Please reach out to me directly via email.'
        )
      ).toBeInTheDocument();
    });
  });

  it('closes the Snackbar when the close button is clicked', async () => {
    (useEmailService as jest.Mock).mockReturnValue({
      sendEmail: mockSendEmail,
      isLoading: false,
      isSuccess: true,
    });
    render(<ContactForm />);

    fillForm();
    fireEvent.click(getSendButton());
    await waitFor(() => expect(getSuccessMessage()).toBeVisible());

    const closeButton = screen.getByRole('button', { name: /close/i });

    fireEvent.click(closeButton);

    await waitFor(() => {
      expect(getSuccessMessage()).not.toBeInTheDocument();
    });
  });

  it('opens the privacy modal when the Privacy Policy button is clicked', () => {
    render(<ContactForm />);

    const privacyPolicyButton = screen.getByRole('button', {
      name: 'Privacy Policy',
    });

    fireEvent.click(privacyPolicyButton);

    expect(mockOpenModal).toHaveBeenCalledTimes(1);
  });
});
