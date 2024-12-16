import MuiTimeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { ResumeItem } from '~/components/atoms';
import { TimelineProps } from './Timeline.types';

export const Timeline: React.FC<TimelineProps> = ({ resumeItems }) => {
  return (
    <MuiTimeline>
      {resumeItems?.map((resumeItem) => (
        <TimelineItem key={resumeItem?.id}>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            {resumeItem && <ResumeItem {...resumeItem} />}
          </TimelineContent>
        </TimelineItem>
      ))}
    </MuiTimeline>
  );
};
