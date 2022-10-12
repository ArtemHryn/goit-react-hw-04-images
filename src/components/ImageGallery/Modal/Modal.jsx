import { Component } from 'react';
import { createPortal } from 'react-dom';
import { ModalBackdrop, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onCloseByEscape);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onCloseByEscape);
  }
  onCloseByEscape = e => {
    if (e.code === 'Escape') {
      this.props.onCloseModal();
    }
  };
  onBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onCloseModal();
    }
  };
  render() {
    const { modalImg, alt } = this.props;
    return createPortal(
      <ModalBackdrop onClick={this.onBackdropClick}>
        <ModalWindow>
          <img src={modalImg} alt={alt} />
        </ModalWindow>
      </ModalBackdrop>,
      modalRoot
    );
  }
}
