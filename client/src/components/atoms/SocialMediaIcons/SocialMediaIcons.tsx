import { Box, Link } from '@mui/material';
import { SocialButton } from './SocialMediaIcons.styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { SocialMediaIconsProps } from './SocialMediaIcons.types';

export const SocialMediaIcons: React.FC<SocialMediaIconsProps> = ({
  socialMedia,
}) => (
  <>
    {socialMedia?.socialMedia.map((socialMedia, index) => {
      return (
        <Box key={index}>
          <Link href={socialMedia?.GithubUrl!} target='_blank'>
            <SocialButton>
              <GitHubIcon color='info' />
            </SocialButton>
          </Link>
          <Link href={socialMedia?.LinkedinUrl!} target='_blank'>
            <SocialButton>
              <LinkedInIcon color='info' />
            </SocialButton>
          </Link>
        </Box>
      );
    })}
  </>
);
