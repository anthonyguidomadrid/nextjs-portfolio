import { Maybe, UploadFile } from '~/generated/graphql';

export type ImageCarouselProps = {
  images: Maybe<UploadFile>[];
};
