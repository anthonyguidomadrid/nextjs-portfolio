import { Grid, Typography } from '@mui/material';
import { PageTitleProps } from './PageTitle.types';
import { RichText } from '~/components/atoms';
import { StyledImage, StyledTitle, StyledWrapper } from './PageTitle.styles';

export const PageTitle: React.FC<PageTitleProps> = ({
  Title,
  subTitle,
  description,
  picture,
  children,
  isMainTitle,
}) => {
  const image = picture?.data?.attributes;
  const imageUrl = image?.url;
  return (
    <>
      <StyledTitle variant={isMainTitle ? 'h1' : 'h2'}>{Title}</StyledTitle>
      {subTitle && (
        <Typography variant={isMainTitle ? 'h2' : 'h3'}>{subTitle}</Typography>
      )}
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
