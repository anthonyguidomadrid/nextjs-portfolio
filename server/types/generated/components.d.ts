import type { Schema, Struct } from '@strapi/strapi';

export interface HeadHeader extends Struct.ComponentSchema {
  collectionName: 'components_head_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    picture: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subTitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HeadSeo extends Struct.ComponentSchema {
  collectionName: 'components_head_seos';
  info: {
    displayName: 'SEO';
  };
  attributes: {
    canonicalUrl: Schema.Attribute.String;
    noFollow: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    noIndex: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    pageDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    pageTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    shareImages: Schema.Attribute.Media<'images', true>;
  };
}

export interface MainProject extends Struct.ComponentSchema {
  collectionName: 'components_main_projects';
  info: {
    displayName: 'Project';
  };
  attributes: {
    categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    >;
    codeUrl: Schema.Attribute.String & Schema.Attribute.Required;
    date: Schema.Attribute.Date & Schema.Attribute.Required;
    description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    pictures: Schema.Attribute.Media<'images', true> &
      Schema.Attribute.Required;
    projectUrl: Schema.Attribute.String;
    slug: Schema.Attribute.String & Schema.Attribute.Required;
    subTitle: Schema.Attribute.String & Schema.Attribute.Required;
    thumbnail: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface MainResumeItem extends Struct.ComponentSchema {
  collectionName: 'components_main_resume_items';
  info: {
    displayName: 'Resume Item';
  };
  attributes: {
    company: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    endingDate: Schema.Attribute.Date;
    link: Schema.Attribute.String;
    location: Schema.Attribute.String & Schema.Attribute.Required;
    logo: Schema.Attribute.Media<'images'>;
    startingDate: Schema.Attribute.Date & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface MainSkill extends Struct.ComponentSchema {
  collectionName: 'components_main_skills';
  info: {
    displayName: 'Skill';
  };
  attributes: {
    date: Schema.Attribute.Date;
    link: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    percentage: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 100;
          min: 0;
        },
        number
      >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'head.header': HeadHeader;
      'head.seo': HeadSeo;
      'main.project': MainProject;
      'main.resume-item': MainResumeItem;
      'main.skill': MainSkill;
    }
  }
}
