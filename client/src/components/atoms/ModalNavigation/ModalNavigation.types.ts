import { ProjectModalProps } from '~/components/organisms/ProjectModal/ProjectModal.types';

export type ModalNavigationProps = Pick<
  ProjectModalProps,
  'isFirst' | 'isLast' | 'onPrev' | 'onNext'
>;
