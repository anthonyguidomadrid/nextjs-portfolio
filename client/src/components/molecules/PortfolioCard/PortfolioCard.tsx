import { Typography, CardActionArea, CardMedia } from '@mui/material';
import { PorfolioCardProps } from './PortfolioCard.types';
import { getMediaUrl } from '~/utils/getMediaUrl';
import { formatDate } from '~/utils/formatDates';
import { useRouter } from 'next/router';
import { useState } from 'react';
import {
  PortfolioCardContent,
  StyledPortfolioCard,
} from './PortfolioCard.styles';

export const PortfolioCard: React.FC<PorfolioCardProps> = ({
  title,
  subTitle,
  date,
  thumbnail,
  onClick,
}) => {
  const { locale } = useRouter();
  const thumbnailImg = thumbnail.data?.attributes;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <StyledPortfolioCard
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardActionArea>
        <CardMedia
          component='img'
          src={getMediaUrl(thumbnailImg?.url)}
          alt={thumbnailImg?.alternativeText || title}
        />
        <PortfolioCardContent className='hover-content'>
          <Typography variant='caption'>{formatDate(date, locale)}</Typography>
          <Typography gutterBottom variant='h4'>
            {title}
          </Typography>
          {isHovered && <Typography variant='body2'>{subTitle}</Typography>}
        </PortfolioCardContent>
      </CardActionArea>
    </StyledPortfolioCard>
  );
};
