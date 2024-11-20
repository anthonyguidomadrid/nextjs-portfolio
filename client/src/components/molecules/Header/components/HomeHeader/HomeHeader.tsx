import { Box, Button, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';
import GitHubIcon from '@mui/icons-material/GitHub';
import { HomeHeaderProps } from './HomeHeader.types';
import { HomeWrapper, SocialButton } from './HomeHeader.styles';

export const HomeHeader: React.FC<HomeHeaderProps> = ({
  title,
  subtitle,
  socialMedia,
  children,
}) => {
  return (
    <HomeWrapper>
      <Typography variant='h1'>{title}</Typography>
      <Typography variant='h2'>{subtitle}</Typography>
      {children}
      {socialMedia?.socialMedia?.map((socialMedia, index) => {
        return (
          <Box key={index}>
            <Link href={socialMedia?.GithubUrl ?? ''} target='_blank'>
              <SocialButton>
                <GitHubIcon color='info' />
              </SocialButton>
            </Link>
            <Link href={socialMedia?.LinkedinUrl ?? ''} target='_blank'>
              <SocialButton>
                <LinkedInIcon color='info' />
              </SocialButton>
            </Link>
          </Box>
        );
      })}
    </HomeWrapper>
  );
};
