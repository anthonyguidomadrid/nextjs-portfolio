import { ComponentMainResumeItem } from '~/generated/graphql';

export type TimelineProps = {
  resumeItems?: (Omit<ComponentMainResumeItem, 'id'> | null)[];
};
