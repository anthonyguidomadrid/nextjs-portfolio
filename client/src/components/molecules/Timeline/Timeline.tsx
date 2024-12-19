import MuiTimeline from '@mui/lab/Timeline';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimeLineItem, { timelineItemClasses } from '@mui/lab/TimeLineItem';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { ResumeItem } from '~/components/atoms';
import { TimelineProps } from './Timeline.types';
import { StyledTimeLine } from './Timeline.styles';

export const Timeline: React.FC<TimelineProps> = ({ resumeItems }) => {
  return (
    <StyledTimeLine>
      {resumeItems?.map((resumeItem) => (
        <TimeLineItem key={resumeItem?.id}>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            {resumeItem && <ResumeItem {...resumeItem} />}
          </TimelineContent>
        </TimeLineItem>
      ))}
    </StyledTimeLine>
  );
};
