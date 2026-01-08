import { Grid, Typography } from '@mui/material';
import { ResumeItemProps } from './ResumeItem.types';
import Link from 'next/link';
import { formatDateRange } from '~/utils/formatDates';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { CompanyDetailsWrapper, CompanyLogo } from './ResumeItem.styles';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

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
  const { locale } = useRouter();
  const { t } = useTranslation();

  return (
    <>
      <CompanyDetailsWrapper container spacing={3} alignItems='center'>
        {logo && (
          <Grid item xs={3}>
            <Link href={link ?? ''} target='_blank'>
              <CompanyLogo
                src={logo.url ?? ''}
                alt={logo.alternativeText ?? ''}
                height={logo.height ?? 0}
                width={logo.width ?? 0}
              />
            </Link>
          </Grid>
        )}
        <Grid item xs={logo ? 9 : 12}>
          <Typography variant='h3'>{title}</Typography>
          <Typography variant='body2'>
            {formatDateRange(startingDate, t, locale, endingDate)}
          </Typography>
          <Typography>
            {company} ({location})
          </Typography>
        </Grid>
      </CompanyDetailsWrapper>
      <BlocksRenderer content={description} />
    </>
  );
};
