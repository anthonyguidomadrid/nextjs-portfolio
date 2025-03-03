import { Grid, Typography } from '@mui/material';
import { ResumeItemProps } from './ResumeItem.types';
import { RichText } from '../RichText';
import Link from 'next/link';
import { formatDateRange } from '~/utils/formatDates';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { CompanyDetailsWrapper, CompanyLogo } from './ResumeItem.styles';

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
    <>
      <CompanyDetailsWrapper container spacing={3} alignItems='center'>
        {companyLogo && (
          <Grid item xs={3}>
            <Link href={link ?? ''} target='_blank'>
              <CompanyLogo
                src={companyLogo.url ?? ''}
                alt={companyLogo.alternativeText ?? ''}
                height={companyLogo.height ?? 0}
                width={companyLogo.width ?? 0}
              />
            </Link>
          </Grid>
        )}
        <Grid item xs={companyLogo ? 9 : 12}>
          <Typography variant='h3'>{title}</Typography>
          <Typography variant='body2'>
            {formatDateRange(startingDate, t, locale, endingDate)}
          </Typography>
          <Typography>
            {company} ({location})
          </Typography>
        </Grid>
      </CompanyDetailsWrapper>
      <RichText content={description} />
    </>
  );
};
