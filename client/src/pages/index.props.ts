interface TodoAttributes {
  phone: string;
  email: string;
  address: string;
}

interface ContactAttributes {
  Contact: TodoAttributes;
}

interface ContactInformation {
  attributes: ContactAttributes;
}

export interface HomeProps {
  contactInformation: { data: ContactInformation };
}
