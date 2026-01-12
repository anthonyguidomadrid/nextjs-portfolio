import { screen } from '@testing-library/react';
import { ContactInformation } from './ContactInformation';
import { CONTACT_INFORMATION_MOCK } from './ContactInformation.mocks';
import { render } from '~/utils/test-utils';

describe('ContactInformation', () => {
  it('renders the email information with an EmailIcon', () => {
    render(<ContactInformation {...CONTACT_INFORMATION_MOCK} />);

    expect(
      screen.getByText(CONTACT_INFORMATION_MOCK.contact.email)
    ).toBeVisible();
    expect(
      screen.getByRole('link', { name: CONTACT_INFORMATION_MOCK.contact.email })
    ).toHaveAttribute(
      'href',
      `mailto:${CONTACT_INFORMATION_MOCK.contact.email}`
    );
    expect(screen.getByTestId('EmailIcon')).toBeVisible();
  });

  it('renders the phone information with a PhoneIphoneIcon', () => {
    render(<ContactInformation {...CONTACT_INFORMATION_MOCK} />);

    expect(
      screen.getByText(CONTACT_INFORMATION_MOCK.contact.phone)
    ).toBeVisible();
    expect(
      screen.getByRole('link', { name: CONTACT_INFORMATION_MOCK.contact.phone })
    ).toHaveAttribute(
      'href',
      `tel:${CONTACT_INFORMATION_MOCK.contact.phone.replace(/ /g, '')}`
    );
    expect(screen.getByTestId('PhoneIphoneIcon')).toBeVisible();
  });

  it('renders the address information with a LocationOnIcon', () => {
    render(<ContactInformation {...CONTACT_INFORMATION_MOCK} />);

    expect(
      screen.getByText(CONTACT_INFORMATION_MOCK.contact.address)
    ).toBeInTheDocument();
    expect(screen.getByTestId('LocationOnIcon')).toBeVisible();
  });

  it('renders the SocialMediaIcons component if socialMedia is provided', () => {
    render(<ContactInformation {...CONTACT_INFORMATION_MOCK} />);

    const links = screen.getAllByRole('link');
    const githubLink = links[2];
    const linkedinLink = links[3];

    expect(githubLink).toHaveAttribute(
      'href',
      CONTACT_INFORMATION_MOCK.socialMedia?.githubUrl
    );
    expect(githubLink).toHaveAttribute('target', '_blank');

    expect(linkedinLink).toHaveAttribute(
      'href',
      CONTACT_INFORMATION_MOCK.socialMedia?.linkedinUrl
    );
    expect(linkedinLink).toHaveAttribute('target', '_blank');
  });
});
