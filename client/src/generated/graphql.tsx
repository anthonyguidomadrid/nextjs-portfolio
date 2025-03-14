import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  I18NLocaleCode: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nei?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Category = {
  __typename?: 'Category';
  Tag?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  isMain?: Maybe<Scalars['Boolean']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<CategoryRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type CategoryLocalizationsArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CategoryEntity = {
  __typename?: 'CategoryEntity';
  attributes?: Maybe<Category>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CategoryEntityResponse = {
  __typename?: 'CategoryEntityResponse';
  data?: Maybe<CategoryEntity>;
};

export type CategoryEntityResponseCollection = {
  __typename?: 'CategoryEntityResponseCollection';
  data: Array<CategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type CategoryFiltersInput = {
  Tag?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  isMain?: InputMaybe<BooleanFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<CategoryFiltersInput>;
  not?: InputMaybe<CategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CategoryInput = {
  Tag?: InputMaybe<Scalars['String']['input']>;
  isMain?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CategoryRelationResponseCollection = {
  __typename?: 'CategoryRelationResponseCollection';
  data: Array<CategoryEntity>;
};

export type ComponentFooterContact = {
  __typename?: 'ComponentFooterContact';
  address: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  phone: Scalars['String']['output'];
};

export type ComponentFooterContactInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentFooterSocialMedia = {
  __typename?: 'ComponentFooterSocialMedia';
  GithubUrl: Scalars['String']['output'];
  LinkedinUrl: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type ComponentFooterSocialMediaFiltersInput = {
  GithubUrl?: InputMaybe<StringFilterInput>;
  LinkedinUrl?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentFooterSocialMediaFiltersInput>>>;
  not?: InputMaybe<ComponentFooterSocialMediaFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentFooterSocialMediaFiltersInput>>>;
};

export type ComponentFooterSocialMediaInput = {
  GithubUrl?: InputMaybe<Scalars['String']['input']>;
  LinkedinUrl?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentHeadHeader = {
  __typename?: 'ComponentHeadHeader';
  Title: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  picture?: Maybe<UploadFileEntityResponse>;
  subTitle: Scalars['String']['output'];
};

export type ComponentHeadHeaderFiltersInput = {
  Title?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentHeadHeaderFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentHeadHeaderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentHeadHeaderFiltersInput>>>;
  subTitle?: InputMaybe<StringFilterInput>;
};

export type ComponentHeadHeaderInput = {
  Title?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  picture?: InputMaybe<Scalars['ID']['input']>;
  subTitle?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentHeadSeo = {
  __typename?: 'ComponentHeadSeo';
  canonicalUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  noFollow: Scalars['Boolean']['output'];
  noIndex: Scalars['Boolean']['output'];
  pageDescription: Scalars['String']['output'];
  pageTitle: Scalars['String']['output'];
  shareImages?: Maybe<UploadFileRelationResponseCollection>;
};


export type ComponentHeadSeoShareImagesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentHeadSeoInput = {
  canonicalUrl?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  noFollow?: InputMaybe<Scalars['Boolean']['input']>;
  noIndex?: InputMaybe<Scalars['Boolean']['input']>;
  pageDescription?: InputMaybe<Scalars['String']['input']>;
  pageTitle?: InputMaybe<Scalars['String']['input']>;
  shareImages?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ComponentMainProject = {
  __typename?: 'ComponentMainProject';
  categories?: Maybe<CategoryRelationResponseCollection>;
  codeUrl: Scalars['String']['output'];
  date: Scalars['Date']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  pictures: UploadFileRelationResponseCollection;
  projectUrl?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  subTitle: Scalars['String']['output'];
  thumbnail: UploadFileEntityResponse;
  title: Scalars['String']['output'];
};


export type ComponentMainProjectCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentMainProjectPicturesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentMainProjectFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentMainProjectFiltersInput>>>;
  categories?: InputMaybe<CategoryFiltersInput>;
  codeUrl?: InputMaybe<StringFilterInput>;
  date?: InputMaybe<DateFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentMainProjectFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentMainProjectFiltersInput>>>;
  projectUrl?: InputMaybe<StringFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  subTitle?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentMainProjectInput = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  codeUrl?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  pictures?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  projectUrl?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  subTitle?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentMainResumeItem = {
  __typename?: 'ComponentMainResumeItem';
  company: Scalars['String']['output'];
  description: Scalars['String']['output'];
  endingDate?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  link?: Maybe<Scalars['String']['output']>;
  location: Scalars['String']['output'];
  logo?: Maybe<UploadFileEntityResponse>;
  startingDate: Scalars['Date']['output'];
  title: Scalars['String']['output'];
};

export type ComponentMainResumeItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentMainResumeItemFiltersInput>>>;
  company?: InputMaybe<StringFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  endingDate?: InputMaybe<DateFilterInput>;
  link?: InputMaybe<StringFilterInput>;
  location?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentMainResumeItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentMainResumeItemFiltersInput>>>;
  startingDate?: InputMaybe<DateFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentMainResumeItemInput = {
  company?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endingDate?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['ID']['input']>;
  startingDate?: InputMaybe<Scalars['Date']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentMainSkill = {
  __typename?: 'ComponentMainSkill';
  Name: Scalars['String']['output'];
  date?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  link?: Maybe<Scalars['String']['output']>;
  logo?: Maybe<UploadFileEntityResponse>;
  percentage?: Maybe<Scalars['Int']['output']>;
};

export type ComponentMainSkillFiltersInput = {
  Name?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentMainSkillFiltersInput>>>;
  date?: InputMaybe<DateFilterInput>;
  link?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentMainSkillFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentMainSkillFiltersInput>>>;
  percentage?: InputMaybe<IntFilterInput>;
};

export type ComponentMainSkillInput = {
  Name?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['ID']['input']>;
  percentage?: InputMaybe<Scalars['Int']['input']>;
};

export type ContactInformation = {
  __typename?: 'ContactInformation';
  Contact: ComponentFooterContact;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<ContactInformationRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ContactInformationLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type ContactInformationEntity = {
  __typename?: 'ContactInformationEntity';
  attributes?: Maybe<ContactInformation>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ContactInformationEntityResponse = {
  __typename?: 'ContactInformationEntityResponse';
  data?: Maybe<ContactInformationEntity>;
};

export type ContactInformationInput = {
  Contact?: InputMaybe<ComponentFooterContactInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ContactInformationRelationResponseCollection = {
  __typename?: 'ContactInformationRelationResponseCollection';
  data: Array<ContactInformationEntity>;
};

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  contains?: InputMaybe<Scalars['Date']['input']>;
  containsi?: InputMaybe<Scalars['Date']['input']>;
  endsWith?: InputMaybe<Scalars['Date']['input']>;
  eq?: InputMaybe<Scalars['Date']['input']>;
  eqi?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  nei?: InputMaybe<Scalars['Date']['input']>;
  not?: InputMaybe<DateFilterInput>;
  notContains?: InputMaybe<Scalars['Date']['input']>;
  notContainsi?: InputMaybe<Scalars['Date']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  startsWith?: InputMaybe<Scalars['Date']['input']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  nei?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  nei?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorph = Category | ComponentFooterContact | ComponentFooterSocialMedia | ComponentHeadHeader | ComponentHeadSeo | ComponentMainProject | ComponentMainResumeItem | ComponentMainSkill | ContactInformation | Home | I18NLocale | MenuItem | PageAbout | PageContact | PageProject | PageResume | SocialMedia | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type Home = {
  __typename?: 'Home';
  Header: ComponentHeadHeader;
  SEO: ComponentHeadSeo;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<HomeRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type HomeLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type HomeEntity = {
  __typename?: 'HomeEntity';
  attributes?: Maybe<Home>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type HomeEntityResponse = {
  __typename?: 'HomeEntityResponse';
  data?: Maybe<HomeEntity>;
};

export type HomeInput = {
  Header?: InputMaybe<ComponentHeadHeaderInput>;
  SEO?: InputMaybe<ComponentHeadSeoInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type HomeRelationResponseCollection = {
  __typename?: 'HomeRelationResponseCollection';
  data: Array<HomeEntity>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  nei?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  nei?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  nei?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type MenuItem = {
  __typename?: 'MenuItem';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  label: Scalars['String']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<MenuItemRelationResponseCollection>;
  path: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type MenuItemLocalizationsArgs = {
  filters?: InputMaybe<MenuItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MenuItemEntity = {
  __typename?: 'MenuItemEntity';
  attributes?: Maybe<MenuItem>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type MenuItemEntityResponse = {
  __typename?: 'MenuItemEntityResponse';
  data?: Maybe<MenuItemEntity>;
};

export type MenuItemEntityResponseCollection = {
  __typename?: 'MenuItemEntityResponseCollection';
  data: Array<MenuItemEntity>;
  meta: ResponseCollectionMeta;
};

export type MenuItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<MenuItemFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  label?: InputMaybe<StringFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<MenuItemFiltersInput>;
  not?: InputMaybe<MenuItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<MenuItemFiltersInput>>>;
  path?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type MenuItemInput = {
  label?: InputMaybe<Scalars['String']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MenuItemRelationResponseCollection = {
  __typename?: 'MenuItemRelationResponseCollection';
  data: Array<MenuItemEntity>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createCategory?: Maybe<CategoryEntityResponse>;
  createCategoryLocalization?: Maybe<CategoryEntityResponse>;
  createContactInformationLocalization?: Maybe<ContactInformationEntityResponse>;
  createHomeLocalization?: Maybe<HomeEntityResponse>;
  createMenuItem?: Maybe<MenuItemEntityResponse>;
  createMenuItemLocalization?: Maybe<MenuItemEntityResponse>;
  createPageAboutLocalization?: Maybe<PageAboutEntityResponse>;
  createPageContactLocalization?: Maybe<PageContactEntityResponse>;
  createPageProjectLocalization?: Maybe<PageProjectEntityResponse>;
  createPageResumeLocalization?: Maybe<PageResumeEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteCategory?: Maybe<CategoryEntityResponse>;
  deleteContactInformation?: Maybe<ContactInformationEntityResponse>;
  deleteHome?: Maybe<HomeEntityResponse>;
  deleteMenuItem?: Maybe<MenuItemEntityResponse>;
  deletePageAbout?: Maybe<PageAboutEntityResponse>;
  deletePageContact?: Maybe<PageContactEntityResponse>;
  deletePageProject?: Maybe<PageProjectEntityResponse>;
  deletePageResume?: Maybe<PageResumeEntityResponse>;
  deleteSocialMedia?: Maybe<SocialMediaEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateCategory?: Maybe<CategoryEntityResponse>;
  updateContactInformation?: Maybe<ContactInformationEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateHome?: Maybe<HomeEntityResponse>;
  updateMenuItem?: Maybe<MenuItemEntityResponse>;
  updatePageAbout?: Maybe<PageAboutEntityResponse>;
  updatePageContact?: Maybe<PageContactEntityResponse>;
  updatePageProject?: Maybe<PageProjectEntityResponse>;
  updatePageResume?: Maybe<PageResumeEntityResponse>;
  updateSocialMedia?: Maybe<SocialMediaEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateCategoryArgs = {
  data: CategoryInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateCategoryLocalizationArgs = {
  data?: InputMaybe<CategoryInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateContactInformationLocalizationArgs = {
  data?: InputMaybe<ContactInformationInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateHomeLocalizationArgs = {
  data?: InputMaybe<HomeInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateMenuItemArgs = {
  data: MenuItemInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateMenuItemLocalizationArgs = {
  data?: InputMaybe<MenuItemInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreatePageAboutLocalizationArgs = {
  data?: InputMaybe<PageAboutInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreatePageContactLocalizationArgs = {
  data?: InputMaybe<PageContactInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreatePageProjectLocalizationArgs = {
  data?: InputMaybe<PageProjectInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreatePageResumeLocalizationArgs = {
  data?: InputMaybe<PageResumeInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteContactInformationArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteHomeArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteMenuItemArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeletePageAboutArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeletePageContactArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeletePageProjectArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeletePageResumeArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateContactInformationArgs = {
  data: ContactInformationInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateHomeArgs = {
  data: HomeInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateMenuItemArgs = {
  data: MenuItemInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdatePageAboutArgs = {
  data: PageAboutInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdatePageContactArgs = {
  data: PageContactInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdatePageProjectArgs = {
  data: PageProjectInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdatePageResumeArgs = {
  data: PageResumeInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateSocialMediaArgs = {
  data: SocialMediaInput;
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};

export type PageAbout = {
  __typename?: 'PageAbout';
  Header?: Maybe<ComponentHeadHeader>;
  SEO: ComponentHeadSeo;
  computerSkills: Array<Maybe<ComponentMainSkill>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  languages: Array<Maybe<ComponentMainSkill>>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<PageAboutRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type PageAboutComputerSkillsArgs = {
  filters?: InputMaybe<ComponentMainSkillFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PageAboutLanguagesArgs = {
  filters?: InputMaybe<ComponentMainSkillFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PageAboutLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type PageAboutEntity = {
  __typename?: 'PageAboutEntity';
  attributes?: Maybe<PageAbout>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type PageAboutEntityResponse = {
  __typename?: 'PageAboutEntityResponse';
  data?: Maybe<PageAboutEntity>;
};

export type PageAboutInput = {
  Header?: InputMaybe<ComponentHeadHeaderInput>;
  SEO?: InputMaybe<ComponentHeadSeoInput>;
  computerSkills?: InputMaybe<Array<InputMaybe<ComponentMainSkillInput>>>;
  languages?: InputMaybe<Array<InputMaybe<ComponentMainSkillInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PageAboutRelationResponseCollection = {
  __typename?: 'PageAboutRelationResponseCollection';
  data: Array<PageAboutEntity>;
};

export type PageContact = {
  __typename?: 'PageContact';
  Header: ComponentHeadHeader;
  PrivacyPolicy: Scalars['JSON']['output'];
  SEO: ComponentHeadSeo;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<PageContactRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type PageContactLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type PageContactEntity = {
  __typename?: 'PageContactEntity';
  attributes?: Maybe<PageContact>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type PageContactEntityResponse = {
  __typename?: 'PageContactEntityResponse';
  data?: Maybe<PageContactEntity>;
};

export type PageContactInput = {
  Header?: InputMaybe<ComponentHeadHeaderInput>;
  PrivacyPolicy?: InputMaybe<Scalars['JSON']['input']>;
  SEO?: InputMaybe<ComponentHeadSeoInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PageContactRelationResponseCollection = {
  __typename?: 'PageContactRelationResponseCollection';
  data: Array<PageContactEntity>;
};

export type PageProject = {
  __typename?: 'PageProject';
  Header: Array<Maybe<ComponentHeadHeader>>;
  SEO: ComponentHeadSeo;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<PageProjectRelationResponseCollection>;
  projects: Array<Maybe<ComponentMainProject>>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type PageProjectHeaderArgs = {
  filters?: InputMaybe<ComponentHeadHeaderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PageProjectLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type PageProjectProjectsArgs = {
  filters?: InputMaybe<ComponentMainProjectFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageProjectEntity = {
  __typename?: 'PageProjectEntity';
  attributes?: Maybe<PageProject>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type PageProjectEntityResponse = {
  __typename?: 'PageProjectEntityResponse';
  data?: Maybe<PageProjectEntity>;
};

export type PageProjectInput = {
  Header?: InputMaybe<Array<InputMaybe<ComponentHeadHeaderInput>>>;
  SEO?: InputMaybe<ComponentHeadSeoInput>;
  projects?: InputMaybe<Array<InputMaybe<ComponentMainProjectInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PageProjectRelationResponseCollection = {
  __typename?: 'PageProjectRelationResponseCollection';
  data: Array<PageProjectEntity>;
};

export type PageResume = {
  __typename?: 'PageResume';
  CV: UploadFileEntityResponse;
  Certification: Array<Maybe<ComponentMainSkill>>;
  Education: Array<Maybe<ComponentMainResumeItem>>;
  Header: ComponentHeadHeader;
  SEO: ComponentHeadSeo;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<PageResumeRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  workExperiences: Array<Maybe<ComponentMainResumeItem>>;
};


export type PageResumeCertificationArgs = {
  filters?: InputMaybe<ComponentMainSkillFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PageResumeEducationArgs = {
  filters?: InputMaybe<ComponentMainResumeItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PageResumeLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type PageResumeWorkExperiencesArgs = {
  filters?: InputMaybe<ComponentMainResumeItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageResumeEntity = {
  __typename?: 'PageResumeEntity';
  attributes?: Maybe<PageResume>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type PageResumeEntityResponse = {
  __typename?: 'PageResumeEntityResponse';
  data?: Maybe<PageResumeEntity>;
};

export type PageResumeInput = {
  CV?: InputMaybe<Scalars['ID']['input']>;
  Certification?: InputMaybe<Array<InputMaybe<ComponentMainSkillInput>>>;
  Education?: InputMaybe<Array<InputMaybe<ComponentMainResumeItemInput>>>;
  Header?: InputMaybe<ComponentHeadHeaderInput>;
  SEO?: InputMaybe<ComponentHeadSeoInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workExperiences?: InputMaybe<Array<InputMaybe<ComponentMainResumeItemInput>>>;
};

export type PageResumeRelationResponseCollection = {
  __typename?: 'PageResumeRelationResponseCollection';
  data: Array<PageResumeEntity>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  categories?: Maybe<CategoryEntityResponseCollection>;
  category?: Maybe<CategoryEntityResponse>;
  contactInformation?: Maybe<ContactInformationEntityResponse>;
  home?: Maybe<HomeEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  menuItem?: Maybe<MenuItemEntityResponse>;
  menuItems?: Maybe<MenuItemEntityResponseCollection>;
  pageAbout?: Maybe<PageAboutEntityResponse>;
  pageContact?: Maybe<PageContactEntityResponse>;
  pageProject?: Maybe<PageProjectEntityResponse>;
  pageResume?: Maybe<PageResumeEntityResponse>;
  socialMedia?: Maybe<SocialMediaEntityResponse>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryContactInformationArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryHomeArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryMenuItemArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryMenuItemsArgs = {
  filters?: InputMaybe<MenuItemFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPageAboutArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryPageContactArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryPageProjectArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryPageResumeArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QuerySocialMediaArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type SocialMedia = {
  __typename?: 'SocialMedia';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  socialMedia: Array<Maybe<ComponentFooterSocialMedia>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type SocialMediaSocialMediaArgs = {
  filters?: InputMaybe<ComponentFooterSocialMediaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SocialMediaEntity = {
  __typename?: 'SocialMediaEntity';
  attributes?: Maybe<SocialMedia>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type SocialMediaEntityResponse = {
  __typename?: 'SocialMediaEntityResponse';
  data?: Maybe<SocialMediaEntity>;
};

export type SocialMediaInput = {
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  socialMedia?: InputMaybe<Array<InputMaybe<ComponentFooterSocialMediaInput>>>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nei?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  ext?: InputMaybe<Scalars['String']['input']>;
  folder?: InputMaybe<Scalars['ID']['input']>;
  folderPath?: InputMaybe<Scalars['String']['input']>;
  formats?: InputMaybe<Scalars['JSON']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  previewUrl?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_metadata?: InputMaybe<Scalars['JSON']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String']['output'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String']['output'];
  pathId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  pathId?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmationToken?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type ImageFieldsFragment = { __typename?: 'UploadFile', alternativeText?: string | null, url: string, height?: number | null, width?: number | null };

export type SeoFieldsFragment = { __typename?: 'ComponentHeadSeo', pageTitle: string, pageDescription: string, canonicalUrl?: string | null, noFollow: boolean, noIndex: boolean, shareImages?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, height?: number | null, width?: number | null } | null }> } | null };

export type ResumeItemFragment = { __typename?: 'ComponentMainResumeItem', title: string, description: string, startingDate: any, endingDate?: any | null, location: string, company: string, link?: string | null, logo?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, height?: number | null, width?: number | null } | null } | null } | null };

export type SocialMediaFieldsFragment = { __typename?: 'SocialMedia', socialMedia: Array<{ __typename?: 'ComponentFooterSocialMedia', LinkedinUrl: string, GithubUrl: string } | null> };

export type GetContactInformationQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type GetContactInformationQuery = { __typename?: 'Query', contactInformation?: { __typename?: 'ContactInformationEntityResponse', data?: { __typename?: 'ContactInformationEntity', attributes?: { __typename?: 'ContactInformation', Contact: { __typename?: 'ComponentFooterContact', address: string, email: string, phone: string } } | null } | null } | null };

export type GetMenuItemsQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type GetMenuItemsQuery = { __typename?: 'Query', menuItems?: { __typename?: 'MenuItemEntityResponseCollection', data: Array<{ __typename?: 'MenuItemEntity', attributes?: { __typename?: 'MenuItem', label: string, path: string } | null }> } | null };

export type GetHomePageQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type GetHomePageQuery = { __typename?: 'Query', home?: { __typename?: 'HomeEntityResponse', data?: { __typename?: 'HomeEntity', attributes?: { __typename?: 'Home', Header: { __typename?: 'ComponentHeadHeader', Title: string, subTitle: string }, SEO: { __typename?: 'ComponentHeadSeo', pageTitle: string, pageDescription: string, canonicalUrl?: string | null, noFollow: boolean, noIndex: boolean, shareImages?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, height?: number | null, width?: number | null } | null }> } | null } } | null } | null } | null, socialMedia?: { __typename?: 'SocialMediaEntityResponse', data?: { __typename?: 'SocialMediaEntity', attributes?: { __typename?: 'SocialMedia', socialMedia: Array<{ __typename?: 'ComponentFooterSocialMedia', LinkedinUrl: string, GithubUrl: string } | null> } | null } | null } | null };

export type GetAboutPageQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type GetAboutPageQuery = { __typename?: 'Query', pageAbout?: { __typename?: 'PageAboutEntityResponse', data?: { __typename?: 'PageAboutEntity', attributes?: { __typename?: 'PageAbout', Header?: { __typename?: 'ComponentHeadHeader', Title: string, subTitle: string, description?: string | null, picture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, height?: number | null, width?: number | null } | null } | null } | null } | null, SEO: { __typename?: 'ComponentHeadSeo', pageTitle: string, pageDescription: string, canonicalUrl?: string | null, noFollow: boolean, noIndex: boolean, shareImages?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, height?: number | null, width?: number | null } | null }> } | null }, computerSkills: Array<{ __typename?: 'ComponentMainSkill', Name: string, percentage?: number | null } | null>, languages: Array<{ __typename?: 'ComponentMainSkill', Name: string, percentage?: number | null } | null> } | null } | null } | null };

export type GetResumePageQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type GetResumePageQuery = { __typename?: 'Query', pageResume?: { __typename?: 'PageResumeEntityResponse', data?: { __typename?: 'PageResumeEntity', attributes?: { __typename?: 'PageResume', Header: { __typename?: 'ComponentHeadHeader', Title: string, subTitle: string }, workExperiences: Array<{ __typename?: 'ComponentMainResumeItem', title: string, description: string, startingDate: any, endingDate?: any | null, location: string, company: string, link?: string | null, logo?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, height?: number | null, width?: number | null } | null } | null } | null } | null>, Education: Array<{ __typename?: 'ComponentMainResumeItem', title: string, description: string, startingDate: any, endingDate?: any | null, location: string, company: string, link?: string | null, logo?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, height?: number | null, width?: number | null } | null } | null } | null } | null>, Certification: Array<{ __typename?: 'ComponentMainSkill', Name: string, link?: string | null, date?: any | null, logo?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, height?: number | null, width?: number | null } | null } | null } | null } | null>, CV: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null }, SEO: { __typename?: 'ComponentHeadSeo', pageTitle: string, pageDescription: string, canonicalUrl?: string | null, noFollow: boolean, noIndex: boolean, shareImages?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, height?: number | null, width?: number | null } | null }> } | null } } | null } | null } | null };

export type GetProjectPageQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  categoryTag?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetProjectPageQuery = { __typename?: 'Query', categories?: { __typename?: 'CategoryEntityResponseCollection', data: Array<{ __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', Tag?: string | null, isMain?: boolean | null } | null }> } | null, pageProject?: { __typename?: 'PageProjectEntityResponse', data?: { __typename?: 'PageProjectEntity', attributes?: { __typename?: 'PageProject', SEO: { __typename?: 'ComponentHeadSeo', pageTitle: string, pageDescription: string, canonicalUrl?: string | null, noFollow: boolean, noIndex: boolean, shareImages?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, height?: number | null, width?: number | null } | null }> } | null }, Header: Array<{ __typename?: 'ComponentHeadHeader', Title: string, subTitle: string } | null>, projects: Array<{ __typename?: 'ComponentMainProject', slug: string, title: string, subTitle: string, date: any, thumbnail: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, height?: number | null, width?: number | null } | null } | null } } | null> } | null } | null } | null };

export type GetProjectQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetProjectQuery = { __typename?: 'Query', pageProject?: { __typename?: 'PageProjectEntityResponse', data?: { __typename?: 'PageProjectEntity', attributes?: { __typename?: 'PageProject', projects: Array<{ __typename?: 'ComponentMainProject', id: string, slug: string, title: string, subTitle: string, description: string, date: any, projectUrl?: string | null, codeUrl: string, categories?: { __typename?: 'CategoryRelationResponseCollection', data: Array<{ __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', Tag?: string | null } | null }> } | null, pictures: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, height?: number | null, width?: number | null } | null }> } } | null> } | null } | null } | null };

export type GetContactPageQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type GetContactPageQuery = { __typename?: 'Query', pageContact?: { __typename?: 'PageContactEntityResponse', data?: { __typename?: 'PageContactEntity', attributes?: { __typename?: 'PageContact', PrivacyPolicy: any, SEO: { __typename?: 'ComponentHeadSeo', pageTitle: string, pageDescription: string, canonicalUrl?: string | null, noFollow: boolean, noIndex: boolean, shareImages?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, height?: number | null, width?: number | null } | null }> } | null }, Header: { __typename?: 'ComponentHeadHeader', Title: string, subTitle: string } } | null } | null } | null, contactInformation?: { __typename?: 'ContactInformationEntityResponse', data?: { __typename?: 'ContactInformationEntity', attributes?: { __typename?: 'ContactInformation', Contact: { __typename?: 'ComponentFooterContact', address: string, email: string, phone: string } } | null } | null } | null, socialMedia?: { __typename?: 'SocialMediaEntityResponse', data?: { __typename?: 'SocialMediaEntity', attributes?: { __typename?: 'SocialMedia', socialMedia: Array<{ __typename?: 'ComponentFooterSocialMedia', LinkedinUrl: string, GithubUrl: string } | null> } | null } | null } | null };

export const ImageFieldsFragmentDoc = gql`
    fragment ImageFields on UploadFile {
  alternativeText
  url
  height
  width
}
    `;
export const SeoFieldsFragmentDoc = gql`
    fragment SeoFields on ComponentHeadSeo {
  pageTitle
  pageDescription
  canonicalUrl
  noFollow
  noIndex
  shareImages {
    data {
      attributes {
        ...ImageFields
      }
    }
  }
}
    ${ImageFieldsFragmentDoc}`;
export const ResumeItemFragmentDoc = gql`
    fragment ResumeItem on ComponentMainResumeItem {
  title
  description
  logo {
    data {
      attributes {
        ...ImageFields
      }
    }
  }
  startingDate
  endingDate
  location
  company
  link
}
    ${ImageFieldsFragmentDoc}`;
export const SocialMediaFieldsFragmentDoc = gql`
    fragment SocialMediaFields on SocialMedia {
  socialMedia {
    LinkedinUrl
    GithubUrl
  }
}
    `;
export const GetContactInformationDocument = gql`
    query GetContactInformation($locale: I18NLocaleCode) {
  contactInformation(locale: $locale) {
    data {
      attributes {
        Contact {
          address
          email
          phone
        }
      }
    }
  }
}
    `;

/**
 * __useGetContactInformationQuery__
 *
 * To run a query within a React component, call `useGetContactInformationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContactInformationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContactInformationQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetContactInformationQuery(baseOptions?: Apollo.QueryHookOptions<GetContactInformationQuery, GetContactInformationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetContactInformationQuery, GetContactInformationQueryVariables>(GetContactInformationDocument, options);
      }
export function useGetContactInformationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetContactInformationQuery, GetContactInformationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetContactInformationQuery, GetContactInformationQueryVariables>(GetContactInformationDocument, options);
        }
export function useGetContactInformationSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetContactInformationQuery, GetContactInformationQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetContactInformationQuery, GetContactInformationQueryVariables>(GetContactInformationDocument, options);
        }
export type GetContactInformationQueryHookResult = ReturnType<typeof useGetContactInformationQuery>;
export type GetContactInformationLazyQueryHookResult = ReturnType<typeof useGetContactInformationLazyQuery>;
export type GetContactInformationSuspenseQueryHookResult = ReturnType<typeof useGetContactInformationSuspenseQuery>;
export type GetContactInformationQueryResult = Apollo.QueryResult<GetContactInformationQuery, GetContactInformationQueryVariables>;
export const GetMenuItemsDocument = gql`
    query GetMenuItems($locale: I18NLocaleCode) {
  menuItems(locale: $locale, sort: ["id:asc"]) {
    data {
      attributes {
        label
        path
      }
    }
  }
}
    `;

/**
 * __useGetMenuItemsQuery__
 *
 * To run a query within a React component, call `useGetMenuItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMenuItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMenuItemsQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetMenuItemsQuery(baseOptions?: Apollo.QueryHookOptions<GetMenuItemsQuery, GetMenuItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMenuItemsQuery, GetMenuItemsQueryVariables>(GetMenuItemsDocument, options);
      }
export function useGetMenuItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMenuItemsQuery, GetMenuItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMenuItemsQuery, GetMenuItemsQueryVariables>(GetMenuItemsDocument, options);
        }
export function useGetMenuItemsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetMenuItemsQuery, GetMenuItemsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMenuItemsQuery, GetMenuItemsQueryVariables>(GetMenuItemsDocument, options);
        }
export type GetMenuItemsQueryHookResult = ReturnType<typeof useGetMenuItemsQuery>;
export type GetMenuItemsLazyQueryHookResult = ReturnType<typeof useGetMenuItemsLazyQuery>;
export type GetMenuItemsSuspenseQueryHookResult = ReturnType<typeof useGetMenuItemsSuspenseQuery>;
export type GetMenuItemsQueryResult = Apollo.QueryResult<GetMenuItemsQuery, GetMenuItemsQueryVariables>;
export const GetHomePageDocument = gql`
    query GetHomePage($locale: I18NLocaleCode) {
  home(locale: $locale) {
    data {
      attributes {
        Header {
          Title
          subTitle
        }
        SEO {
          ...SeoFields
        }
      }
    }
  }
  socialMedia {
    data {
      attributes {
        ...SocialMediaFields
      }
    }
  }
}
    ${SeoFieldsFragmentDoc}
${SocialMediaFieldsFragmentDoc}`;

/**
 * __useGetHomePageQuery__
 *
 * To run a query within a React component, call `useGetHomePageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHomePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHomePageQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetHomePageQuery(baseOptions?: Apollo.QueryHookOptions<GetHomePageQuery, GetHomePageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHomePageQuery, GetHomePageQueryVariables>(GetHomePageDocument, options);
      }
export function useGetHomePageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHomePageQuery, GetHomePageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHomePageQuery, GetHomePageQueryVariables>(GetHomePageDocument, options);
        }
export function useGetHomePageSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetHomePageQuery, GetHomePageQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetHomePageQuery, GetHomePageQueryVariables>(GetHomePageDocument, options);
        }
export type GetHomePageQueryHookResult = ReturnType<typeof useGetHomePageQuery>;
export type GetHomePageLazyQueryHookResult = ReturnType<typeof useGetHomePageLazyQuery>;
export type GetHomePageSuspenseQueryHookResult = ReturnType<typeof useGetHomePageSuspenseQuery>;
export type GetHomePageQueryResult = Apollo.QueryResult<GetHomePageQuery, GetHomePageQueryVariables>;
export const GetAboutPageDocument = gql`
    query getAboutPage($locale: I18NLocaleCode) {
  pageAbout(locale: $locale) {
    data {
      attributes {
        Header {
          Title
          subTitle
          description
          picture {
            data {
              attributes {
                ...ImageFields
              }
            }
          }
        }
        SEO {
          ...SeoFields
        }
        computerSkills(sort: "percentage:desc") {
          Name
          percentage
        }
        languages(sort: "percentage:desc") {
          Name
          percentage
        }
      }
    }
  }
}
    ${ImageFieldsFragmentDoc}
${SeoFieldsFragmentDoc}`;

/**
 * __useGetAboutPageQuery__
 *
 * To run a query within a React component, call `useGetAboutPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAboutPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAboutPageQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetAboutPageQuery(baseOptions?: Apollo.QueryHookOptions<GetAboutPageQuery, GetAboutPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAboutPageQuery, GetAboutPageQueryVariables>(GetAboutPageDocument, options);
      }
export function useGetAboutPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAboutPageQuery, GetAboutPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAboutPageQuery, GetAboutPageQueryVariables>(GetAboutPageDocument, options);
        }
export function useGetAboutPageSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAboutPageQuery, GetAboutPageQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAboutPageQuery, GetAboutPageQueryVariables>(GetAboutPageDocument, options);
        }
export type GetAboutPageQueryHookResult = ReturnType<typeof useGetAboutPageQuery>;
export type GetAboutPageLazyQueryHookResult = ReturnType<typeof useGetAboutPageLazyQuery>;
export type GetAboutPageSuspenseQueryHookResult = ReturnType<typeof useGetAboutPageSuspenseQuery>;
export type GetAboutPageQueryResult = Apollo.QueryResult<GetAboutPageQuery, GetAboutPageQueryVariables>;
export const GetResumePageDocument = gql`
    query getResumePage($locale: I18NLocaleCode) {
  pageResume(locale: $locale) {
    data {
      attributes {
        Header {
          Title
          subTitle
        }
        workExperiences {
          ...ResumeItem
        }
        Education {
          ...ResumeItem
        }
        Certification {
          Name
          logo {
            data {
              attributes {
                ...ImageFields
              }
            }
          }
          link
          date
        }
        CV {
          data {
            attributes {
              url
            }
          }
        }
        SEO {
          ...SeoFields
        }
      }
    }
  }
}
    ${ResumeItemFragmentDoc}
${ImageFieldsFragmentDoc}
${SeoFieldsFragmentDoc}`;

/**
 * __useGetResumePageQuery__
 *
 * To run a query within a React component, call `useGetResumePageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetResumePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetResumePageQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetResumePageQuery(baseOptions?: Apollo.QueryHookOptions<GetResumePageQuery, GetResumePageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetResumePageQuery, GetResumePageQueryVariables>(GetResumePageDocument, options);
      }
export function useGetResumePageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetResumePageQuery, GetResumePageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetResumePageQuery, GetResumePageQueryVariables>(GetResumePageDocument, options);
        }
export function useGetResumePageSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetResumePageQuery, GetResumePageQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetResumePageQuery, GetResumePageQueryVariables>(GetResumePageDocument, options);
        }
export type GetResumePageQueryHookResult = ReturnType<typeof useGetResumePageQuery>;
export type GetResumePageLazyQueryHookResult = ReturnType<typeof useGetResumePageLazyQuery>;
export type GetResumePageSuspenseQueryHookResult = ReturnType<typeof useGetResumePageSuspenseQuery>;
export type GetResumePageQueryResult = Apollo.QueryResult<GetResumePageQuery, GetResumePageQueryVariables>;
export const GetProjectPageDocument = gql`
    query getProjectPage($locale: I18NLocaleCode, $categoryTag: String) {
  categories(locale: $locale, sort: "Tag:asc") {
    data {
      attributes {
        Tag
        isMain
      }
    }
  }
  pageProject(locale: $locale) {
    data {
      attributes {
        SEO {
          ...SeoFields
        }
        Header {
          Title
          subTitle
        }
        projects(filters: {categories: {Tag: {eq: $categoryTag}}}) {
          slug
          title
          subTitle
          date
          thumbnail {
            data {
              attributes {
                ...ImageFields
              }
            }
          }
        }
      }
    }
  }
}
    ${SeoFieldsFragmentDoc}
${ImageFieldsFragmentDoc}`;

/**
 * __useGetProjectPageQuery__
 *
 * To run a query within a React component, call `useGetProjectPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectPageQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      categoryTag: // value for 'categoryTag'
 *   },
 * });
 */
export function useGetProjectPageQuery(baseOptions?: Apollo.QueryHookOptions<GetProjectPageQuery, GetProjectPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProjectPageQuery, GetProjectPageQueryVariables>(GetProjectPageDocument, options);
      }
export function useGetProjectPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProjectPageQuery, GetProjectPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProjectPageQuery, GetProjectPageQueryVariables>(GetProjectPageDocument, options);
        }
export function useGetProjectPageSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetProjectPageQuery, GetProjectPageQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProjectPageQuery, GetProjectPageQueryVariables>(GetProjectPageDocument, options);
        }
export type GetProjectPageQueryHookResult = ReturnType<typeof useGetProjectPageQuery>;
export type GetProjectPageLazyQueryHookResult = ReturnType<typeof useGetProjectPageLazyQuery>;
export type GetProjectPageSuspenseQueryHookResult = ReturnType<typeof useGetProjectPageSuspenseQuery>;
export type GetProjectPageQueryResult = Apollo.QueryResult<GetProjectPageQuery, GetProjectPageQueryVariables>;
export const GetProjectDocument = gql`
    query getProject($locale: I18NLocaleCode, $slug: String) {
  pageProject(locale: $locale) {
    data {
      attributes {
        projects(filters: {slug: {eq: $slug}}) {
          id
          slug
          title
          subTitle
          description
          date
          categories {
            data {
              attributes {
                Tag
              }
            }
          }
          projectUrl
          codeUrl
          pictures {
            data {
              attributes {
                ...ImageFields
              }
            }
          }
        }
      }
    }
  }
}
    ${ImageFieldsFragmentDoc}`;

/**
 * __useGetProjectQuery__
 *
 * To run a query within a React component, call `useGetProjectQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetProjectQuery(baseOptions?: Apollo.QueryHookOptions<GetProjectQuery, GetProjectQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProjectQuery, GetProjectQueryVariables>(GetProjectDocument, options);
      }
export function useGetProjectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProjectQuery, GetProjectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProjectQuery, GetProjectQueryVariables>(GetProjectDocument, options);
        }
export function useGetProjectSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetProjectQuery, GetProjectQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProjectQuery, GetProjectQueryVariables>(GetProjectDocument, options);
        }
export type GetProjectQueryHookResult = ReturnType<typeof useGetProjectQuery>;
export type GetProjectLazyQueryHookResult = ReturnType<typeof useGetProjectLazyQuery>;
export type GetProjectSuspenseQueryHookResult = ReturnType<typeof useGetProjectSuspenseQuery>;
export type GetProjectQueryResult = Apollo.QueryResult<GetProjectQuery, GetProjectQueryVariables>;
export const GetContactPageDocument = gql`
    query getContactPage($locale: I18NLocaleCode) {
  pageContact(locale: $locale) {
    data {
      attributes {
        SEO {
          ...SeoFields
        }
        Header {
          Title
          subTitle
        }
        PrivacyPolicy
      }
    }
  }
  contactInformation(locale: $locale) {
    data {
      attributes {
        Contact {
          address
          email
          phone
        }
      }
    }
  }
  socialMedia {
    data {
      attributes {
        ...SocialMediaFields
      }
    }
  }
}
    ${SeoFieldsFragmentDoc}
${SocialMediaFieldsFragmentDoc}`;

/**
 * __useGetContactPageQuery__
 *
 * To run a query within a React component, call `useGetContactPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContactPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContactPageQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetContactPageQuery(baseOptions?: Apollo.QueryHookOptions<GetContactPageQuery, GetContactPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetContactPageQuery, GetContactPageQueryVariables>(GetContactPageDocument, options);
      }
export function useGetContactPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetContactPageQuery, GetContactPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetContactPageQuery, GetContactPageQueryVariables>(GetContactPageDocument, options);
        }
export function useGetContactPageSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetContactPageQuery, GetContactPageQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetContactPageQuery, GetContactPageQueryVariables>(GetContactPageDocument, options);
        }
export type GetContactPageQueryHookResult = ReturnType<typeof useGetContactPageQuery>;
export type GetContactPageLazyQueryHookResult = ReturnType<typeof useGetContactPageLazyQuery>;
export type GetContactPageSuspenseQueryHookResult = ReturnType<typeof useGetContactPageSuspenseQuery>;
export type GetContactPageQueryResult = Apollo.QueryResult<GetContactPageQuery, GetContactPageQueryVariables>;