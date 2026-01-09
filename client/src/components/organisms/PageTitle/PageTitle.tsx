import { Grid, Typography } from '@mui/material';
import { PageTitleProps } from './PageTitle.types';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { StyledImage, StyledTitle, StyledWrapper } from './PageTitle.styles';

export const PageTitle: React.FC<PageTitleProps> = ({
  title,
  subTitle,
  description,
  picture,
  children,
  isMainTitle,
}) => (
  <>
    <StyledTitle variant={isMainTitle ? 'h1' : 'h2'}>{title}</StyledTitle>
    {subTitle && (
      <Typography variant={isMainTitle ? 'h2' : 'h3'}>{subTitle}</Typography>
    )}
    {(description || picture) && (
      <StyledWrapper>
        <Grid container columnSpacing={5} spacing={2}>
          {description && (
            <Grid size={{ xs: 12, sm: 6 }}>
              <BlocksRenderer content={description} />
            </Grid>
          )}
          {picture && (
            <Grid size={{ xs: 12, sm: 6 }}>
              <StyledImage
                src={picture.url}
                alt={picture?.alternativeText ?? ''}
                height={picture?.height ?? 100}
                width={picture?.width ?? 100}
              />
            </Grid>
          )}
        </Grid>
      </StyledWrapper>
    )}
    {children}
  </>
);
