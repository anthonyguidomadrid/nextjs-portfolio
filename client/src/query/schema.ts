import { gql } from '@apollo/client';
export const GETQUERY = gql`
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
