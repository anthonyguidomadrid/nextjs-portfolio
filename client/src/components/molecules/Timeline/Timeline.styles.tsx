import { styled } from '@mui/material';
import Timeline from '@mui/lab/Timeline';

export const StyledTimeLine = styled(Timeline)(({ theme }) => ({
  padding: 0,
  [`& .MuiTimelineItem-root:before`]: {
    flex: 0,
    padding: 0,
  },
  [`& .MuiTimelineContent-root`]: {
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(3),
    },
  },
  [`& ul`]: {
    padding: theme.spacing(0, 2),
  },
  [`& li`]: {
    padding: theme.spacing(1, 0),
  },
}));
