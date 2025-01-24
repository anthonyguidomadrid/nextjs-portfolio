import { screen } from '@testing-library/react';
import { PrivacyPolicyModal } from './PrivacyPolicyModal';
import { PRIVACY_MODAL_CONTENT_MOCK } from './PrivacyPolicyModal.mock';
import { usePrivacyModal } from '~/hooks';
import { render } from '~/utils/test-utils';
import userEvent from '@testing-library/user-event';
import theme from '~/utils/theme';

jest.mock('../../../hooks/usePrivacyModal.ts', () => ({
  usePrivacyModal: jest.fn(),
}));

jest.mock('@mui/material/useMediaQuery', () => jest.fn());

const useMediaQueryMock = require('@mui/material/useMediaQuery');

describe('PrivacyPolicyModal', () => {
  const mockCloseModal = jest.fn();

  beforeEach(() => {
    (usePrivacyModal as jest.Mock).mockReturnValue({
      isOpen: true,
      closeModal: mockCloseModal,
    });
  });

  const getCloseBtn = () => screen.getByRole('button', { name: 'Close' });

  it('should render the privacy policy modal correctly', () => {
    render(<PrivacyPolicyModal content={PRIVACY_MODAL_CONTENT_MOCK} />);

    expect(screen.getByText('Privacy Policy')).toBeVisible();

    expect(screen.getByText('Effective Date')).toBeVisible();
    expect(screen.getByText('01/01/2025')).toBeVisible();

    expect(getCloseBtn()).toBeVisible();
  });

  it('should call closeModal when close button is clicked', async () => {
    render(<PrivacyPolicyModal content={PRIVACY_MODAL_CONTENT_MOCK} />);

    await userEvent.click(getCloseBtn());

    expect(mockCloseModal).toHaveBeenCalledTimes(1);
  });

  it('should not be visible when isOpen is false', () => {
    (usePrivacyModal as jest.Mock).mockReturnValue({
      isOpen: false,
      closeModal: mockCloseModal,
    });
    render(<PrivacyPolicyModal content={PRIVACY_MODAL_CONTENT_MOCK} />); 
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  describe('Mobile', () => {
    beforeEach(() => {
      useMediaQueryMock.mockImplementation(
        (query: string) => query === theme.breakpoints.down('md')
      );
      render(<PrivacyPolicyModal content={PRIVACY_MODAL_CONTENT_MOCK} />);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('renders full-screen modal for mobile view', () => {
      expect(screen.queryByRole('dialog')).toContainHTML(
        'MuiDialog-paperFullScreen'
      );
    });
  });
});
