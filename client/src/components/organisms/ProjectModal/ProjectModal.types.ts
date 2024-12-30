import { ComponentMainProject } from '~/generated/graphql';

export type ProjectModalProps = {
  open: boolean;
  handleClose: () => void;
  project: ComponentMainProject;
  isLast: boolean;
  isFirst: boolean;
  onPrev: () => void;
  onNext: () => void;
};
