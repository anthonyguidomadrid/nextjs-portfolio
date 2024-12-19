import { timelineContentClasses } from '@mui/lab/TimelineContent';
import Timeline from '@mui/lab/Timeline';
import { timelineItemClasses } from '@mui/lab/TimeLineItem';
import { styled } from '@mui/material';

export const StyledTimeLine = styled(Timeline)(({ theme }) => ({
  [`& .${timelineItemClasses.root}:before`]: {
    flex: 0,
    padding: 0,
  },
  [`& .${timelineContentClasses.root}`]: {
    padding: theme.spacing(3),
  },
}));
