import Slider from 'react-slick';
import { Box } from '@mui/material';
import { ImageCarouselProps } from './ImageCarousel.types';
import { Carousel, StyledImage } from './ImageCarousel.styles';

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
    <Carousel>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index}>
            <StyledImage
              src={image?.url ?? ''}
              alt={image?.alternativeText ?? ''}
              style={{ width: '100%' }}
              height={image?.height ?? 0}
              width={image?.width ?? 0}
            />
          </Box>
        ))}
      </Slider>
    </Carousel>
  );
};
