import { ComponentHeadHeader } from '~/generated/graphql';

export type PageTitleProps = Omit<ComponentHeadHeader, 'subTitle' | 'id'> & {
  children?: React.ReactNode;
  isMainTitle?: boolean;
  subTitle?: string;
};
