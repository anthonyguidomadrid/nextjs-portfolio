import { ComponentMainProject } from '~/generated/graphql';

export const PROJECT_MOCK: ComponentMainProject = {
  id: '13',
  slug: 'wedding-site',
  title: 'Wedding site',
  subTitle: 'Customizable React application using Contentful as a headless CMS',
  description:
    "This multilingual wedding website template, powered by Contentful and Next.js, offers a seamless, fully customizable experience for couples planning their special day. It features five core sections: a header, wedding details, FAQs, RSVP confirmation form, and a gift registry. Each section can be personalized to reflect the couple's style and preferences.\n\nThe app integrates with Mailchimp to automatically manage guest details, including RSVP status, contact information, guest count, and specific preferences.\n\nBuilt primarily with client-side rendering, the template ensures smooth page transitions and animations, creating an engaging user experience. Server-side rendering is selectively used to enhance social media metadata and streamline translation fetching for an optimal multilingual experience.",
  date: '2024-10-01',
  categories: {
    data: [
      {
        attributes: {
          Tag: 'NextJS',
          __typename: 'Category',
        },
        __typename: 'CategoryEntity',
      },
      {
        attributes: {
          Tag: 'React',
          __typename: 'Category',
        },
        __typename: 'CategoryEntity',
      },
      {
        attributes: {
          Tag: 'Contentful',
          __typename: 'Category',
        },
        __typename: 'CategoryEntity',
      },
      {
        attributes: {
          Tag: 'NodeJS',
          __typename: 'Category',
        },
        __typename: 'CategoryEntity',
      },
      {
        attributes: {
          Tag: 'All',
          __typename: 'Category',
        },
        __typename: 'CategoryEntity',
      },
    ],
    __typename: 'CategoryRelationResponseCollection',
  },
  projectUrl: 'https://wedding-site-template.vercel.app/',
  codeUrl: 'https://github.com/anthonyguidomadrid/wedding-site',
  pictures: {
    data: [
      {
        attributes: {
          alternativeText: 'Wedding Site Template Header',
          url: '/uploads/wedding_site_1_d3b4e27006.jpg',
          __typename: 'UploadFile',
          hash: '',
          mime: '',
          name: '',
          provider: '',
          size: 0,
        },
        __typename: 'UploadFileEntity',
      },
      {
        attributes: {
          alternativeText: 'Wedding Site Template Details',
          url: '/uploads/wedding_site_2_754adf08b7.jpg',
          __typename: 'UploadFile',
          hash: '',
          mime: '',
          name: '',
          provider: '',
          size: 0,
        },
        __typename: 'UploadFileEntity',
      },
      {
        attributes: {
          alternativeText: 'Wedding Site Template FAQ',
          url: '/uploads/wedding_site_3_c3e88c5886.jpg',
          __typename: 'UploadFile',
          hash: '',
          mime: '',
          name: '',
          provider: '',
          size: 0,
        },
        __typename: 'UploadFileEntity',
      },
      {
        attributes: {
          alternativeText: 'Wedding Site Template RVSP',
          url: '/uploads/wedding_site_4_569df2f591.jpg',
          __typename: 'UploadFile',
          hash: '',
          mime: '',
          name: '',
          provider: '',
          size: 0,
        },
        __typename: 'UploadFileEntity',
      },
      {
        attributes: {
          alternativeText: 'Wedding Site Template Gifts',
          url: '/uploads/wedding_site_5_79d98fa476.jpg',
          __typename: 'UploadFile',
          hash: '',
          mime: '',
          name: '',
          provider: '',
          size: 0,
        },
        __typename: 'UploadFileEntity',
      },
    ],
    __typename: 'UploadFileRelationResponseCollection',
  },
  __typename: 'ComponentMainProject',
  thumbnail: {
    __typename: undefined,
    data: undefined,
  },
};
