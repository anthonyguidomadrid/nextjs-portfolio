import React from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';
import { ImageCarouselProps } from './ImageCarousel.types';
import { getMediaUrl } from '~/utils';

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Box sx={{ width: '80%', margin: 'auto', mt: 4 }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index}>
            <img
              src={getMediaUrl(image.attributes?.url)}
              alt={image.attributes?.alternativeText ?? ''}
              style={{ width: '100%' }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};
