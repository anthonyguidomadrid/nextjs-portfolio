import { ConditionalWrapperProps } from './ConditionalWrapper.types';

export const ConditionalWrapper: React.FC<ConditionalWrapperProps> = ({
  condition,
  wrapper: Wrapper,
  wrapperProps,
  children,
}) => {
  return condition ? (
    <Wrapper {...wrapperProps}>{children}</Wrapper>
  ) : (
    <>{children}</>
  );
};
