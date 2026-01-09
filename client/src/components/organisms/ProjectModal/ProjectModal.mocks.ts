import { ComponentMainProject } from '~/generated/graphql';

export const PROJECT_MOCK: ComponentMainProject = {
  id: '13',
  slug: 'wedding-site',
  title: 'Wedding site',
  subTitle: 'Customizable React application using Contentful as a headless CMS',
  description: [
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          text: "This multilingual wedding website template, powered by Contentful and Next.js, offers a seamless, fully customizable experience for couples planning their special day. It features five core sections: a header, wedding details, FAQs, RSVP confirmation form, and a gift registry. Each section can be personalized to reflect the couple's style and preferences.",
        },
      ],
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          text: 'The app integrates with Mailchimp to automatically manage guest details, including RSVP status, contact information, guest count, and specific preferences.',
        },
      ],
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          text: 'Built primarily with client-side rendering, the template ensures smooth page transitions and animations, creating an engaging user experience. Server-side rendering is selectively used to enhance social media metadata and streamline translation fetching for an optimal multilingual experience.',
        },
      ],
    },
  ],
  date: '2024-10-01',
  categories: [
    {
      tag: 'NextJS',
      __typename: 'Category',
      documentId: '',
      localizations: [],
    },
    {
      tag: 'React',
      __typename: 'Category',
      documentId: '',
      localizations: [],
    },
    {
      tag: 'Contentful',
      __typename: 'Category',
      documentId: '',
      localizations: [],
    },
    {
      tag: 'NodeJS',
      __typename: 'Category',
      documentId: '',
      localizations: [],
    },
    {
      tag: 'All',
      __typename: 'Category',
      documentId: '',
      localizations: [],
    },
  ],
  projectUrl: 'https://wedding-site-template.vercel.app/',
  codeUrl: 'https://github.com/anthonyguidomadrid/wedding-site',
  pictures: [
    {
      alternativeText: 'Wedding Site Template Header',
      url: 'https://res.cloudinary.com/dm1dwtqb3/image/upload/v1767783854/home_design_account_0201291975.jpg',
      __typename: 'UploadFile',
      hash: '',
      mime: '',
      name: '',
      provider: '',
      size: 0,
      documentId: '',
    },
    {
      alternativeText: 'Wedding Site Template Details',
      url: 'https://res.cloudinary.com/dm1dwtqb3/image/upload/v1767783854/home_design_cart_4d38ddf88a.jpg',
      __typename: 'UploadFile',
      hash: '',
      mime: '',
      name: '',
      provider: '',
      size: 0,
      documentId: '',
    },
    {
      alternativeText: 'Wedding Site Template FAQ',
      url: 'https://res.cloudinary.com/dm1dwtqb3/image/upload/v1767783854/home_design_thumbnail_b706464c08.jpg',
      __typename: 'UploadFile',
      hash: '',
      mime: '',
      name: '',
      provider: '',
      size: 0,
      documentId: '',
    },
  ],
  thumbnail: {
    __typename: undefined,
    documentId: '',
    hash: '',
    mime: '',
    name: '',
    provider: '',
    size: 0,
    url: '',
  },
  pictures_connection: {
    __typename: undefined,
    nodes: [],
  },
};
