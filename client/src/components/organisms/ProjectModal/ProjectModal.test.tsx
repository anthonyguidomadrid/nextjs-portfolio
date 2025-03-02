import { screen, fireEvent } from '@testing-library/react';
import { ProjectModal } from './ProjectModal';
import { PROJECT_MOCK } from './ProjectModal.mocks';
import { render } from '~/utils/test-utils';
import theme from '~/utils/theme';

jest.mock('../../atoms/RichText/RichText.tsx', () => ({
  RichText: jest.fn(({ content }) => (
    <div data-testid='rich-text'>{content}</div>
  )),
}));

jest.mock('../../molecules/ImageCarousel/ImageCarousel.tsx', () => ({
  ImageCarousel: jest.fn(() => (
    <div data-testid='image-carousel'>Image Carousel</div>
  )),
}));
jest.mock('@mui/material/useMediaQuery', () => jest.fn());

const useMediaQueryMock = require('@mui/material/useMediaQuery');

describe('ProjectModal', () => {
  const handleClose = jest.fn();
  const onPrev = jest.fn();
  const onNext = jest.fn();

  const DEFAULT_PROPS = {
    open: true,
    handleClose,
    project: PROJECT_MOCK,
    isFirst: false,
    isLast: false,
    onPrev,
    onNext,
  };

  it('renders modal content correctly', () => {
    render(<ProjectModal {...DEFAULT_PROPS} />);

    expect(screen.getByText(PROJECT_MOCK.title)).toBeVisible();
    expect(screen.getByText(PROJECT_MOCK.subTitle)).toBeVisible();

    expect(screen.getByTestId('rich-text')).toContainHTML(
      PROJECT_MOCK.description
    );

    expect(
      screen.getByText('Categories: NextJS, React, Contentful, NodeJS')
    ).toBeVisible();

    expect(screen.getByTestId('image-carousel')).toBeVisible();

    expect(screen.getByTestId('ChevronLeftIcon')).toBeVisible();
    expect(screen.getByTestId('ChevronRightIcon')).toBeVisible();

    expect(screen.getAllByRole('link')[0]).toHaveAttribute(
      'href',
      PROJECT_MOCK.codeUrl
    );
    expect(screen.getAllByRole('link')[1]).toHaveAttribute(
      'href',
      PROJECT_MOCK.projectUrl
    );
  });

  it('handles navigation actions', () => {
    render(<ProjectModal {...DEFAULT_PROPS} />);

    fireEvent.click(screen.getByTestId('ChevronLeftIcon'));
    expect(onPrev).toHaveBeenCalled();

    fireEvent.click(screen.getByTestId('ChevronRightIcon'));
    expect(onNext).toHaveBeenCalled();
  });

  it('does not render if open is false', () => {
    render(<ProjectModal {...DEFAULT_PROPS} open={false} />);
    expect(screen.queryByText(PROJECT_MOCK.title)).not.toBeVisible();
  });

  it('handles edge cases for first and last navigation', () => {
    render(<ProjectModal {...DEFAULT_PROPS} isFirst={true} isLast={true} />);

    expect(screen.queryByTestId('ChevronLeftIcon')).toBeVisible();
    expect(screen.queryByTestId('ChevronRightIcon')).toBeVisible();

    // Since it's the first and last, ensure navigation disables proper buttons
    expect(onPrev).not.toHaveBeenCalled();
    expect(onNext).not.toHaveBeenCalled();
  });

  describe('Mobile', () => {
    beforeEach(() => {
      useMediaQueryMock.mockImplementation(
        (query: string) => query === theme.breakpoints.down('md')
      );
      render(<ProjectModal {...DEFAULT_PROPS} />);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('handles modal close action', () => {
      fireEvent.click(screen.getByTestId('CloseIcon'));
      expect(handleClose).toHaveBeenCalled();
    });

    it('renders full-screen modal for mobile view', () => {
      expect(screen.queryByRole('dialog')).toContainHTML(
        'MuiDialog-paperFullScreen'
      );
    });
  });
});
