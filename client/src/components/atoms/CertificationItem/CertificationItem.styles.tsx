import { Card, styled } from '@mui/material';
import Image from 'next/image';

export const CertificationCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(1, 2),
  borderRadius: 0,
}));

export const CertificationImage = styled(Image)(() => ({
  width: '100%',
  height: 'auto',
  maxHeight: 150,
  objectFit: 'contain',
}));
