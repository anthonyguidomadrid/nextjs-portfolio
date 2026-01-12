import { screen } from '@testing-library/react';
import { SOCIAL_MEDIA_MOCK } from './SocialMediaIcons.mocks';
import { SocialMediaIcons } from './SocialMediaIcons';
import { SocialMediaIconsProps } from './SocialMediaIcons.types';
import { render } from '~/utils/test-utils';

describe('SocialMediaIcons', () => {
  const DEFAULT_PROPS: SocialMediaIconsProps = {
    socialMedia: SOCIAL_MEDIA_MOCK,
  };

  it('should render the correct number of social media links', () => {
    render(<SocialMediaIcons {...DEFAULT_PROPS} />);
    expect(screen.getAllByRole('link')).toHaveLength(2);
  });

  it('should use the correct URLs for social media links', () => {
    render(<SocialMediaIcons {...DEFAULT_PROPS} />);

    const links = screen.getAllByRole('link');
    const githubLink = links[0];
    const linkedinLink = links[1];

    expect(githubLink).toHaveAttribute(
      'href',
      DEFAULT_PROPS.socialMedia?.githubUrl
    );
    expect(githubLink).toHaveAttribute('target', '_blank');

    expect(linkedinLink).toHaveAttribute(
      'href',
      DEFAULT_PROPS.socialMedia?.linkedinUrl
    );
    expect(linkedinLink).toHaveAttribute('target', '_blank');
  });

  it('should render the GitHub and LinkedIn icons', () => {
    render(<SocialMediaIcons {...DEFAULT_PROPS} />);

    expect(screen.getByTestId('GitHubIcon')).toBeVisible();
    expect(screen.getByTestId('LinkedInIcon')).toBeVisible();
  });
});
