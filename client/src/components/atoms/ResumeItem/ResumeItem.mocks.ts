import { ResumeItemProps } from './ResumeItem.types';

export const RESUME_ITEM_MOCK: ResumeItemProps = {
  company: 'Google',
  description: [
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          text: 'I was in charge of developing the front-end of the platform.',
        },
      ],
    },
  ],
  id: '1',
  location: 'Madrid',
  startingDate: '12/12/2020',
  title: 'Frontend developer',
  endingDate: '12/12/2021',
  link: 'https://www.google.com',
  logo: {
    url: 'https://res.cloudinary.com/dm1dwtqb3/image/upload/v1767608157/google_logo_71c902e375.png',
    alternativeText: 'Google Logo',
    height: 100,
    width: 100,
    hash: '',
    mime: '',
    name: '',
    provider: '',
    size: 0,
    documentId: '',
  },
};
