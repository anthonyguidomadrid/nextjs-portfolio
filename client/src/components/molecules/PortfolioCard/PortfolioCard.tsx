import {
  Card,
  Typography,
  CardActionArea,
  CardMedia,
  CardContent,
} from '@mui/material';
import { PorfolioCardProps } from './PortfolioCard.types';
import { getMediaUrl } from '~/utils/getMediaUrl';
import { formatDate } from '~/utils/formatDates';
import { useRouter } from 'next/router';
import { useState } from 'react';

export const PortfolioCard: React.FC<PorfolioCardProps> = ({
  title,
  subTitle,
  date,
  thumbnail,
}) => {
  const { locale } = useRouter();
  const thumbnailImg = thumbnail.data?.attributes;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      sx={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 0,
        '&:hover .hover-content': {
          height: '100%', // Expand to cover full card
          opacity: 1, // Ensure content is visible
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardActionArea>
        {/* CardMedia */}
        <CardMedia
          component='img'
          height='300'
          image={getMediaUrl(thumbnailImg?.url)}
          alt={thumbnailImg?.alternativeText ?? title}
          sx={{
            position: 'relative',
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }}
        />

        <CardContent
          className='hover-content'
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '30%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: '#fff',
            opacity: 0.8,
            transition: 'all 0.4s ease-in-out', // Smooth transition
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'start',
            gap: '0.2rem',
          }}
        >
          <Typography variant='caption'>{formatDate(date, locale)}</Typography>
          <Typography gutterBottom variant='h4'>
            {title}
          </Typography>
          {isHovered && (
            <Typography
              variant='body2'
              sx={{
                transition: 'opacity 0.4s ease-in-out', // Smooth transition
              }}
            >
              {subTitle}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
