import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { ImageList } from './ImageGalleryList.styled';

export const ImageGalleryList = ({ images }) => {
  return (
    <ImageList>
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} />
      ))}
    </ImageList>
  );
};
