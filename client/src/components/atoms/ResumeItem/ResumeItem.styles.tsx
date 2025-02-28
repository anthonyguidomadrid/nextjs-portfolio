import { Grid, styled } from '@mui/material';

export const CompanyLogo = styled('img')(({ theme }) => ({
  height: '100%',
  width: '100%',
  objectFit: 'cover',
  backgroundColor: theme.palette.common.white,
}));

export const CompanyDetailsWrapper = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));
