import { timelineContentClasses } from '@mui/lab/TimelineContent';
import Timeline from '@mui/lab/Timeline';
import { timelineItemClasses } from '@mui/lab/TimeLineItem';
import { styled } from '@mui/material';

export const StyledTimeLine = styled(Timeline)(({ theme }) => ({
  padding: 0,
  [`& .${timelineItemClasses.root}:before`]: {
    flex: 0,
    padding: 0,
  },
  [`& .${timelineContentClasses.root}`]: {
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(3),
    },
  },
  [`& ul`]: {
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2),
    },
    padding: 0,
  },
}));
