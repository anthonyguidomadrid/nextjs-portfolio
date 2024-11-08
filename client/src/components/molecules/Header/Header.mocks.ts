import { MenuItemEntity } from '~/generated/graphql';

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
