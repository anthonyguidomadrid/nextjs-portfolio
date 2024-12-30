import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CertificationItemProps } from './CertificationItem.types';
import { formatDate } from '~/utils/formatDates';
import { useRouter } from 'next/router';
import { Grid, Link } from '@mui/material';
import { getMediaUrl } from '~/utils/getMediaUrl';
import { useTranslation } from 'next-i18next';
import {
  CertificationCard,
  CertificationImage,
} from './CertificationItem.styles';

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
    <CertificationCard>
      <Grid
        container
        alignItems='center'
        spacing={2}
        onClick={() => console.log('clicked')}
      >
        <Grid item xs={2} lg={3}>
          <CertificationImage
            src={getMediaUrl(image?.url)}
            alt={image?.alternativeText ?? ''}
            height={image?.height ?? 100}
            width={image?.width ?? 100}
          />
        </Grid>

        <Grid item xs={10} lg={9}>
          <CardContent>
            <Typography variant='bold'>{Name}</Typography>
            <Typography variant='body2'>{formatDate(date, locale)}</Typography>
            <Link href={link ?? ''} target='_blank'>
              {t('resume.button.show-credentials')}
            </Link>
          </CardContent>
        </Grid>
      </Grid>
    </CertificationCard>
  );
};
