import { Grid, Typography } from '@mui/material';
import { PageTitleProps } from './PageTitle.types';
import { RichText } from '~/components/atoms';
import { StyledImage, StyledTitle, StyledWrapper } from './PageTitle.styles';
import { getMediaUrl } from '~/utils/getMediaUrl';

export const PageTitle: React.FC<PageTitleProps> = ({
  title,
  subtitle,
  description,
  picture,
  children,
  isMainTitle,
}) => {
  const image = picture?.data?.attributes;
  const imageUrl = getMediaUrl(image?.url);
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
                  src={imageUrl}
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
