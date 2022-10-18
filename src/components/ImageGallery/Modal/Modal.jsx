import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalBackdrop, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ modalImg, alt, onCloseModal }) => {
  useEffect(() => {
    const onCloseByEscape = e => {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    };
    window.addEventListener('keydown', onCloseByEscape);
    return () => {
      window.removeEventListener('keydown', onCloseByEscape);
    };
  }, [onCloseModal]);

  const onBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onCloseModal();
    }
  };

  return createPortal(
    <ModalBackdrop onClick={onBackdropClick}>
      <ModalWindow>
        <img src={modalImg} alt={alt} />
      </ModalWindow>
    </ModalBackdrop>,
    modalRoot
  );
};
