import { styled } from '@mui/material';

export const AnimatedSvg = styled('svg')(({ theme }) => ({
  '& .stroke-animation': {
    stroke: theme.palette.common.white,
    strokeDasharray: 500,
    strokeDashoffset: 500,
    strokeWith: '1',
    fill: 'transparent',
    animation:
      'stroke-draw 2s ease-in-out forwards, fill-white 2s 2s ease-in-out forwards;',
  },
  '& .fill-animation': {
    fill: 'transparent',
    animation: 'fill 2s ease-in-out forwards 2s',
  },
  '@keyframes stroke-draw': {
    to: {
      strokeDashoffset: 0,
    },
  },
  '@keyframes fill-white': {
    to: {
      fill: theme.palette.common.white,
    },
  },
}));
