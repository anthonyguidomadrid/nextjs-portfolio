import { Box, Grid, Typography } from '@mui/material';
import { PageTitleProps } from './PageTitle.types';
import { RichText } from '~/components/atoms';
import {
  StyledImage,
  StyledSubtitle,
  StyledTitle,
  StyledWrapper,
} from './PageTitle.styles';

export const PageTitle: React.FC<PageTitleProps> = ({
  title,
  subtitle,
  description,
  picture,
  children,
  isMainTitle,
}) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';
  const image = picture?.data?.attributes;
  const imageUrl = `${baseUrl}${image?.url ?? ''}`;
  return (
    <>
      <StyledTitle variant={isMainTitle ? 'h1' : 'h2'}>{title}</StyledTitle>
      <Typography variant={isMainTitle ? 'h2' : 'h3'}>{subtitle}</Typography>
      {(description || picture) && (
        <StyledWrapper>
          <Grid container columnSpacing={5} spacing={2}>
            {description && (
              <Grid item xs={12} sm={6}>
                <RichText content={description} />
              </Grid>
            )}
            {imageUrl && (
              <Grid item xs={12} sm={6}>
                <StyledImage
                  src={`${baseUrl}${image?.url ?? ''}`}
                  alt={image?.alternativeText ?? ''}
                  height={image?.height ?? 100}
                  width={image?.width ?? 100}
                />
              </Grid>
            )}
          </Grid>
        </StyledWrapper>
      )}
      {children}
    </>
  );
};
