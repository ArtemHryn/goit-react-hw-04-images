import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { ImageItem, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  image: { webformatURL, largeImageURL, tags },
}) => {
  const [modal, setModal] = useState(false);
  const onToggleModal = () => {
    setModal(state => !state);
  };
  return (
    <>
      <ImageItem>
        <Image src={webformatURL} alt={tags} onClick={onToggleModal} />
      </ImageItem>
      {modal && (
        <Modal
          modalImg={largeImageURL}
          alt={tags}
          onCloseModal={onToggleModal}
        />
      )}
    </>
  );
};
