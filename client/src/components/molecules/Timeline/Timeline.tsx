import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimeLineItem from '@mui/lab/TimeLineItem';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { ResumeItem } from '~/components/atoms';
import { TimelineProps } from './Timeline.types';
import { StyledTimeLine } from './Timeline.styles';
import { ComponentMainResumeItem } from '~/generated/graphql';

export const Timeline: React.FC<TimelineProps> = ({ resumeItems }) => {
  return (
    <StyledTimeLine>
      {resumeItems?.map((resumeItem) => (
        <TimeLineItem key={resumeItem?.title}>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            {resumeItem && <ResumeItem {...(resumeItem as ComponentMainResumeItem)} />}
          </TimelineContent>
        </TimeLineItem>
      ))}
    </StyledTimeLine>
  );
};
