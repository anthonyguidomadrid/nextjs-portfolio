import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CertificationItemProps } from './CertificationItem.types';
import { formatDate } from '~/utils/formatDates';
import { useRouter } from 'next/router';
import { CardMedia } from '@mui/material';
import { getMediaUrl } from '~/utils/getMediaUrl';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export const CertificationItem: React.FC<CertificationItemProps> = ({
  Name,
  date,
  logo,
  link,
}) => {
  const { locale } = useRouter();
  const image = logo?.data?.attributes;
  const { t } = useTranslation();
  return (
    <Card>
      <CardContent>
        <CardMedia
          component='img'
          height={image?.height ?? ''}
          image={getMediaUrl(image?.url)}
          alt={image?.alternativeText ?? ''}
        />
        <Typography variant='h5'>{Name}</Typography>
        <Typography>{formatDate(date, locale)}</Typography>
      </CardContent>
      <CardActions>
        <Link href={link ?? ''} target='_blank'>
          <Button size='small'>{t('resume.button.show-credentials')}</Button>
        </Link>
      </CardActions>
    </Card>
  );
};
