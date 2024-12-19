import { Box, styled } from '@mui/material';

export const FadeInWrapper = styled(Box)<{ inView: boolean; delay: number }>(
  ({ inView, delay }) => ({
    opacity: inView ? 1 : 0,
    transition: `opacity 0.5s ease-out ${delay}s`,
  })
);
