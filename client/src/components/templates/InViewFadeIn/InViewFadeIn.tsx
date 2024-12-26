import { useInView } from 'react-intersection-observer';
import { FadeInWrapper } from './InViewFadeIn.styles';
import { InViewFadeInProps } from './InViewFadeIn.types';
import { useEffect, useState } from 'react';

export const InViewFadeIn: React.FC<InViewFadeInProps> = ({
  children,
  index = 0,
  threshold = 1,
  delayTime = 0.5,
  alwaysAnimate = false,
}) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold,
  });

  const delay = index * delayTime;

  useEffect(() => {
    if (alwaysAnimate || inView) {
      const timer = setTimeout(() => setShouldAnimate(true), delay * 100);
      return () => clearTimeout(timer);
    }
  }, [alwaysAnimate, inView, delay]);

  return (
    <FadeInWrapper ref={ref} inView={shouldAnimate} delay={delay}>
      {children}
    </FadeInWrapper>
  );
};
