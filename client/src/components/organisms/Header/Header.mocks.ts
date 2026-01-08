import { MenuItem, SocialMedia } from '~/generated/graphql';

export const MENU_ITEMS_MOCK: MenuItem[] = [
  {
    __typename: 'MenuItem',
    label: 'Home',
    path: '/',
    documentId: '',
    localizations: [],
  },
  {
    __typename: 'MenuItem',
    label: 'About me',
    path: '/about',
    documentId: '',
    localizations: [],
  },
  {
    __typename: 'MenuItem',
    label: 'Resume',
    path: '/resume',
    documentId: '',
    localizations: [],
  },
  {
    __typename: 'MenuItem',
    label: 'Portfolio',
    path: '/portfolio',
    documentId: '',
    localizations: [],
  },
  {
    __typename: 'MenuItem',
    label: 'Contact',
    path: '/contact',
    documentId: '',
    localizations: [],
  },
];

export const SOCIAL_MEDIAS_MOCK: SocialMedia = {
  githubUrl: 'https://github.com',
  linkedinUrl: 'https://linkedin.com',
  documentId: '',
};
