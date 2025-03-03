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
              src={image.attributes?.url ?? ''}
              alt={image.attributes?.alternativeText ?? ''}
              style={{ width: '100%' }}
              height={image.attributes?.height ?? 0}
              width={image.attributes?.width ?? 0}
            />
          </Box>
        ))}
      </Slider>
    </Carousel>
  );
};
