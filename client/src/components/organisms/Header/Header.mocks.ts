import { MenuItemEntity, SocialMedia } from '~/generated/graphql';

export const MENU_ITEMS_MOCK: MenuItemEntity[] = [
  {
    __typename: 'MenuItemEntity',
    attributes: {
      __typename: 'MenuItem',
      label: 'Home',
      path: '/',
    },
  },
  {
    __typename: 'MenuItemEntity',
    attributes: {
      __typename: 'MenuItem',
      label: 'About me',
      path: '/about',
    },
  },
  {
    __typename: 'MenuItemEntity',
    attributes: {
      __typename: 'MenuItem',
      label: 'Resume',
      path: '/resume',
    },
  },
  {
    __typename: 'MenuItemEntity',
    attributes: {
      __typename: 'MenuItem',
      label: 'Portfolio',
      path: '/portfolio',
    },
  },
  {
    __typename: 'MenuItemEntity',
    attributes: {
      __typename: 'MenuItem',
      label: 'Contact',
      path: '/contact',
    },
  },
];

export const SOCIAL_MEDIAS_MOCK: SocialMedia = {
  socialMedia: [
    {
      id: '1',
      GithubUrl: 'https://github.com',
      LinkedinUrl: 'https://linkedin.com',
    },
  ],
};
