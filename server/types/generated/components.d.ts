import type { Schema, Attribute } from '@strapi/strapi';

export interface FooterContact extends Schema.Component {
  collectionName: 'components_footer_contacts';
  info: {
    displayName: 'contact';
    icon: 'phone';
    description: '';
  };
  attributes: {
    phone: Attribute.String & Attribute.Required;
    email: Attribute.String & Attribute.Required;
    address: Attribute.String & Attribute.Required;
  };
}

export interface FooterSocialMedia extends Schema.Component {
  collectionName: 'components_footer_social_medias';
  info: {
    displayName: 'Social Media';
    icon: 'twitter';
    description: '';
  };
  attributes: {
    LinkedinUrl: Attribute.String & Attribute.Required;
    GithubUrl: Attribute.String & Attribute.Required;
  };
}

export interface HeadHeader extends Schema.Component {
  collectionName: 'components_head_headers';
  info: {
    displayName: 'Header';
    icon: 'bold';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    subTitle: Attribute.String & Attribute.Required;
    description: Attribute.RichText;
    picture: Attribute.Media<'images'>;
  };
}

export interface HeadSeo extends Schema.Component {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'SEO';
    icon: 'earth';
    description: '';
  };
  attributes: {
    pageTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    pageDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    canonicalUrl: Attribute.String;
    noFollow: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    noIndex: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    shareImages: Attribute.Media<'images', true>;
  };
}

export interface MainProject extends Schema.Component {
  collectionName: 'components_main_projects';
  info: {
    displayName: 'Project';
    icon: 'calendar';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    date: Attribute.Date & Attribute.Required;
    codeUrl: Attribute.String & Attribute.Required;
    projectUrl: Attribute.String;
    description: Attribute.RichText & Attribute.Required;
    pictures: Attribute.Media<'images', true> & Attribute.Required;
    subTitle: Attribute.String & Attribute.Required;
    thumbnail: Attribute.Media<'images'> & Attribute.Required;
    categories: Attribute.Relation<
      'main.project',
      'oneToMany',
      'api::category.category'
    >;
    slug: Attribute.String & Attribute.Required;
  };
}

export interface MainResumeItem extends Schema.Component {
  collectionName: 'components_main_resume_items';
  info: {
    displayName: 'resumeItem';
    icon: 'stack';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.RichText & Attribute.Required;
    logo: Attribute.Media<'images'>;
    startingDate: Attribute.Date & Attribute.Required;
    endingDate: Attribute.Date;
    location: Attribute.String & Attribute.Required;
    company: Attribute.String & Attribute.Required;
    link: Attribute.String;
  };
}

export interface MainSkill extends Schema.Component {
  collectionName: 'components_main_skills';
  info: {
    displayName: 'Skill';
    icon: 'grid';
    description: '';
  };
  attributes: {
    Name: Attribute.String & Attribute.Required;
    percentage: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 0;
          max: 100;
        },
        number
      >;
    logo: Attribute.Media<'images'>;
    link: Attribute.String;
    date: Attribute.Date;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'footer.contact': FooterContact;
      'footer.social-media': FooterSocialMedia;
      'head.header': HeadHeader;
      'head.seo': HeadSeo;
      'main.project': MainProject;
      'main.resume-item': MainResumeItem;
      'main.skill': MainSkill;
    }
  }
}
