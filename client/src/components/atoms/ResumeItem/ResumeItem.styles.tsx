import { styled } from '@mui/material';
import Image from 'next/image';

export const CompanyLogo = styled('img')(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  width: '100%',
  height: 'auto',
}));
