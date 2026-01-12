import { Box, styled } from '@mui/material';

export const StyledPageWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'shouldAnimate',
})<{ shouldAnimate?: boolean }>(({ theme, shouldAnimate }) => ({
  marginTop: theme.spacing(15),
  marginBottom: theme.spacing(10),
  maxWidth: '90%',
  padding: theme.spacing(3),
  [theme.breakpoints.up('sm')]: {
    maxWidth: theme.breakpoints.values.sm,
    padding: theme.spacing(5),
  },
  [theme.breakpoints.up('md')]: {
    maxWidth: theme.breakpoints.values.md,
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: theme.breakpoints.values.lg,
  },
  marginLeft: 'auto',
  marginRight: 'auto',
  backgroundColor: theme.palette.background.black,

  ...(shouldAnimate
    ? {
        animation: 'pageWrapperFadeIn 400ms ease-out both',
        '@keyframes pageWrapperFadeIn': {
          from: { opacity: 0, transform: 'translateY(4px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      }
    : null),
}));

export const SpinnerWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: theme.palette.background.black,
  zIndex: 9999,
}));
