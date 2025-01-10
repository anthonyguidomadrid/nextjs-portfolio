import { screen, fireEvent } from '@testing-library/react';
import { ModalNavigation } from './ModalNavigation';
import { ModalNavigationProps } from './ModalNavigation.types';
import { render } from '~/utils/test-utils';

describe('ModalNavigation', () => {
  const DEFAULT_PROPS: ModalNavigationProps = {
    isFirst: false,
    isLast: false,
    onPrev: jest.fn(),
    onNext: jest.fn(),
  };

  const getPrevButton = () => screen.getAllByRole('button')[0];
  const getNextButton = () => screen.getAllByRole('button')[1];

  it('should render both buttons and icons', () => {
    render(<ModalNavigation {...DEFAULT_PROPS} />);

    expect(screen.getByTestId('ChevronLeftIcon')).toBeInTheDocument();
    expect(screen.getByTestId('ChevronRightIcon')).toBeInTheDocument();

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });

  it('should disable the previous button when isFirst is true', () => {
    render(<ModalNavigation {...DEFAULT_PROPS} isFirst={true} />);

    expect(getPrevButton()).toBeDisabled();
  });

  it('should disable the next button when isLast is true', () => {
    render(<ModalNavigation {...DEFAULT_PROPS} isLast={true} />);

    expect(getNextButton()).toBeDisabled();
  });

  it('should call onPrev when previous button is clicked', () => {
    render(<ModalNavigation {...DEFAULT_PROPS} />);

    fireEvent.click(getPrevButton());

    expect(DEFAULT_PROPS.onPrev).toHaveBeenCalledTimes(1);
  });

  it('should call onNext when next button is clicked', () => {
    render(<ModalNavigation {...DEFAULT_PROPS} />);

    fireEvent.click(getNextButton());

    expect(DEFAULT_PROPS.onNext).toHaveBeenCalledTimes(1);
  });

  it('should not call onPrev when the previous button is disabled', () => {
    render(<ModalNavigation {...DEFAULT_PROPS} isFirst={true} />);

    fireEvent.click(getPrevButton());

    expect(DEFAULT_PROPS.onPrev).not.toHaveBeenCalled();
  });

  it('should not call onNext when the next button is disabled', () => {
    render(<ModalNavigation {...DEFAULT_PROPS} isLast={true} />);

    fireEvent.click(getNextButton());

    expect(DEFAULT_PROPS.onNext).not.toHaveBeenCalled();
  });
});
