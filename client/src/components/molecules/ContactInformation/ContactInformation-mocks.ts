import { SOCIAL_MEDIAS_MOCK } from '~/components/organisms/Header/Header.mocks';
import { ContactInformationProps } from './ContactInformation.types';

export const CONTACT_INFORMATION_MOCK: ContactInformationProps = {
  contact: {
    __typename: undefined,
    address: 'Madrid, Spain',
    email: 'info@company.com',
    id: '1',
    phone: '+33 612 345 678',
  },
  socialMedia: {
    __typename: undefined,
    createdAt: undefined,
    publishedAt: undefined,
    ...SOCIAL_MEDIAS_MOCK,
    updatedAt: undefined,
  },
};
