import { Component } from 'react';
import { Modal } from '../Modal/Modal';
import { ImageItem, Image } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };
  onToggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal
    }))
  }
  render() {
    const {
      image: { webformatURL, largeImageURL, tags },
    } = this.props;
    return (
      <>
        <ImageItem>
          <Image src={webformatURL} alt={tags} onClick={this.onToggleModal } />
        </ImageItem>
        {this.state.showModal && <Modal modalImg={largeImageURL} alt={tags} onCloseModal={this.onToggleModal } />}
      </>
    );
  }
}
