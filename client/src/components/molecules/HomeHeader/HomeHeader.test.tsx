import { render } from '~/utils/test-utils';
import { HomeHeader } from './HomeHeader';
import { HomeHeaderProps } from './HomeHeader.types';
import { SOCIAL_MEDIAS_MOCK } from '~/components/organisms/Header/Header.mocks';
import { screen } from '@testing-library/react';

const DEFAULT_PROPS: HomeHeaderProps = {
  title: 'Hello World!',
  subtitle: 'This is a nice subtitle',
  socialMedia: SOCIAL_MEDIAS_MOCK,
  children: <p>These are children</p>,
};

describe('HomeHeader', () => {
  beforeEach(() => {
    render(<HomeHeader {...DEFAULT_PROPS} />);
  });

  it('renders the title', () => {
    expect(screen.getByText(DEFAULT_PROPS.title)).toBeVisible();
  });

  it('renders the subtitle', () => {
    expect(screen.getByText(DEFAULT_PROPS.subtitle)).toBeVisible();
  });

  it('renders the children', () => {
    expect(screen.getByText('These are children')).toBeVisible();
  });

  it('renders the social media icons', () => {
    expect(screen.getByTestId('GitHubIcon')).toBeVisible();
    expect(screen.getByTestId('LinkedInIcon')).toBeVisible();
  });

  it('renders the social media links', () => {
    const links = screen.getAllByRole('link');
    expect(links[0]).toHaveAttribute(
      'href',
      SOCIAL_MEDIAS_MOCK.socialMedia[0]?.GithubUrl
    );
    expect(links[0]).toHaveAttribute(
      'href',
      SOCIAL_MEDIAS_MOCK.socialMedia[1]?.LinkedinUrl
    );
  });
});
