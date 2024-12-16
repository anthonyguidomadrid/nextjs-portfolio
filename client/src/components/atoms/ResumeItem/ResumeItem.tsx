import { Typography } from '@mui/material';
import { ResumeItemProps } from './ResumeItem.types';
import { RichText } from '../RichText';
import Image from 'next/image';
import { getMediaUrl } from '~/utils/getMediaUrl';
import Link from 'next/link';
import { formatDateRange } from '~/utils/formatDates';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

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
      {companyLogo && (
        <Link href={link ?? ''} target='_blank'>
          <Image
            src={getMediaUrl(companyLogo?.url)}
            alt={companyLogo?.alternativeText ?? ''}
            height={100}
            width={100}
          />
        </Link>
      )}
      <Typography variant='h4'>{title}</Typography>
      <Typography>
        {formatDateRange(startingDate, t, locale, endingDate)}
      </Typography>
      <Typography>
        {company} ({location})
      </Typography>
      <RichText content={description} />
    </>
  );
};
