import { Grid, styled } from '@mui/material';
import Image from 'next/image';

export const CompanyLogo = styled(Image)(({ theme }) => ({
  height: '100%',
  width: '100%',
  objectFit: 'cover',
  backgroundColor: theme.palette.common.white,
}));

export const CompanyDetailsWrapper = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));
