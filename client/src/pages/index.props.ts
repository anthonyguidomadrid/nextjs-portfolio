interface TodoAttributes {
  phone: string;
  email: string;
  address: string;
}

interface ContactInformation {
  attributes: { Contact: TodoAttributes };
}

export interface HomeProps {
  contactInformation: { data: ContactInformation };
}
