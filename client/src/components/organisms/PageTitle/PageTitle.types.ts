import { UploadFileEntityResponse } from '~/generated/graphql';

export type PageTitleProps = {
  title?: string;
  isMainTitle?: boolean;
  subtitle?: string;
  description?: string | null;
  picture?: UploadFileEntityResponse | null;
  children?: React.ReactNode;
};
