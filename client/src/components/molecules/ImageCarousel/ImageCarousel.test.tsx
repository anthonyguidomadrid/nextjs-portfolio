import { screen } from '@testing-library/react';
import { ImageCarousel } from './ImageCarousel';
import { ImageCarouselProps } from './ImageCarousel.types';
import { PROJECT_MOCK } from '~/components/organisms/ProjectModal/ProjectModal.mocks';
import { render } from '~/utils/test-utils';

jest.mock('react-slick', () => {
  return jest.fn(({ children }) => (
    <div data-testid='mock-slider'>{children}</div>
  ));
});

describe('ImageCarousel', () => {
  const DEFAULT_PROPS: ImageCarouselProps = {
    images: PROJECT_MOCK.pictures.data,
  };

  it('should render the slider component', () => {
    render(<ImageCarousel {...DEFAULT_PROPS} />);
    expect(screen.getByTestId('mock-slider')).toBeInTheDocument();
  });

  it('should render all images provided in the images prop', () => {
    render(<ImageCarousel {...DEFAULT_PROPS} />);

    const renderedImages = screen.getAllByRole('img');
    expect(renderedImages).toHaveLength(DEFAULT_PROPS.images.length);

    DEFAULT_PROPS.images.forEach((image, index) => {
      expect(renderedImages[index]).toHaveAttribute(
        'alt',
        image.attributes?.alternativeText
      );
    });
  });

  it('should render an empty slider if no images are provided', () => {
    render(<ImageCarousel images={[]} />);

    const renderedImages = screen.queryAllByRole('img');
    expect(renderedImages).toHaveLength(0);
  });
});
