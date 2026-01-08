import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CertificationItemProps } from './CertificationItem.types';
import { formatDate } from '~/utils/formatDates';
import { useRouter } from 'next/router';
import { Grid, Link } from '@mui/material';
import { useTranslation } from 'next-i18next';
import {
  CertificationCard,
  CertificationImage,
} from './CertificationItem.styles';

export const CertificationItem: React.FC<CertificationItemProps> = ({
  name,
  date,
  logo,
  link,
}) => {
  const { locale } = useRouter();
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
            src={logo?.url ?? ''}
            alt={logo?.alternativeText ?? ''}
            height={logo?.height ?? 100}
            width={logo?.width ?? 100}
          />
        </Grid>

        <Grid item xs={10} lg={9}>
          <CardContent>
            <Typography variant='bold'>{name}</Typography>
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
