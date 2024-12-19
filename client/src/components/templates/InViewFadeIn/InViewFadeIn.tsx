import { useInView } from 'react-intersection-observer';
import { FadeInWrapper } from './InViewFadeIn.styles';
import { InViewFadeInProps } from './InViewFadeIn.types';

export const InViewFadeIn: React.FC<InViewFadeInProps> = ({
  children,
  index,
  threshold = 1,
  delayTime = 0.5,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold,
  });

  const delay = index * delayTime;

  return (
    <FadeInWrapper ref={ref} inView={inView} delay={delay}>
      {children}
    </FadeInWrapper>
  );
};
