import { Box, Grid, Typography } from '@mui/material';
import { ResumeItemProps } from './ResumeItem.types';
import { RichText } from '../RichText';
import { getMediaUrl } from '~/utils/getMediaUrl';
import Link from 'next/link';
import { formatDateRange } from '~/utils/formatDates';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { CompanyLogo } from './ResumeItem.styles';

export const ResumeItem: React.FC<ResumeItemProps> = ({
  company,
  description,
  endingDate,
  link,
  location,
  logo,
  startingDate,
  title,
}) => {
  const companyLogo = logo?.data?.attributes;
  const { locale } = useRouter();
  const { t } = useTranslation();
  return (
    <Grid container flexDirection='column' spacing={2}>
      <Grid item>
        <Grid container spacing={3} alignItems='center'>
          {companyLogo && (
            <Grid item xs={3}>
              <Link href={link ?? ''} target='_blank'>
                <CompanyLogo
                  src={getMediaUrl(companyLogo.url)}
                  alt={companyLogo.alternativeText ?? ''}
                />
              </Link>
            </Grid>
          )}
          <Grid item xs={companyLogo ? 9 : 12}>
            <Typography variant='h4'>{title}</Typography>
            <Typography variant='body2'>
              {formatDateRange(startingDate, t, locale, endingDate)}
            </Typography>
            <Typography>
              {company} ({location})
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <RichText content={description} />
      </Grid>
    </Grid>
  );
};
