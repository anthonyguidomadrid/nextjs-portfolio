interface ContactDetails {
  phone: string;
  email: string;
  address: string;
}

interface ContactAttributes {
  Contact: ContactDetails;
}

interface ContactInformation {
  attributes: ContactAttributes;
}

export interface HomeProps {
  contactInformation: { data: ContactInformation };
}
