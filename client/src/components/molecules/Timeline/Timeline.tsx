import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { ResumeItem } from '~/components/atoms';
import { TimelineProps } from './Timeline.types';
import { StyledTimeLine } from './Timeline.styles';
import { TimelineItem } from '@mui/lab';

export const Timeline: React.FC<TimelineProps> = ({ resumeItems }) => {
  return (
    <StyledTimeLine>
      {resumeItems?.map((resumeItem, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            {resumeItem && <ResumeItem {...resumeItem } />}
          </TimelineContent>
        </TimelineItem>
      ))}
    </StyledTimeLine>
  );
};
