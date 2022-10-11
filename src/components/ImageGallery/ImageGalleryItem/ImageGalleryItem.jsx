import { ImageItem, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image: {webformatURL, largeImageURL, tags } }) => {
  return (
    <ImageItem>
      <Image src={webformatURL} alt={tags} />
    </ImageItem>
  );
};