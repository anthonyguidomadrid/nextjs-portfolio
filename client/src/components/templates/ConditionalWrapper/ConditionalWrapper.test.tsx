import { screen } from '@testing-library/react';
import { ConditionalWrapper } from './ConditionalWrapper';
import { Box } from '@mui/material';
import { render } from '~/utils/test-utils';
import { ConditionalWrapperProps } from './ConditionalWrapper.types';

describe('ConditionalWrapper', () => {
  const DEFAULT_PROPS = {
    condition: true,
    wrapper: ({
      children,
      ...wrapperProps
    }: Pick<ConditionalWrapperProps, 'wrapperProps' | 'children'>) => (
      <Box {...wrapperProps} data-testid='wrapper'>
        {children}
      </Box>
    ),
    wrapperProps: {},
    children: <p>This is a child</p>,
  };
  const getChildren = () => screen.getByText('This is a child');
  const getWrapper = () => screen.queryByTestId('wrapper');

  it('renders children directly when condition is false', () => {
    render(<ConditionalWrapper {...DEFAULT_PROPS} condition={false} />);
    expect(getChildren()).toBeVisible();
    expect(getWrapper()).toBeNull();
  });

  it('renders children inside wrapper when condition is true', () => {
    render(<ConditionalWrapper {...DEFAULT_PROPS} />);
    screen.debug();

    expect(getChildren()).toBeVisible();
    expect(getWrapper()).toBeInTheDocument();
  });

  it('passes wrapperProps to the wrapper component', () => {
    render(
      <ConditionalWrapper
        {...DEFAULT_PROPS}
        wrapperProps={{ style: { backgroundColor: 'blue' } }}
      />
    );
    expect(getWrapper()).toHaveStyle('background-color: blue');
  });
});
