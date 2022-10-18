import { Component } from 'react';
import { Circles } from 'react-loader-spinner';
import { SearchBar } from './SearchBar/SearchBar';
import { getImagesViaApi } from 'services/api';
import { ImageGalleryList } from './ImageGallery/ImageGalleryList/ImageGalleryList';
import { LoadMore } from './LoadMore/LoadMore';
import { useState, useEffect } from 'react';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!loading) {
      return;
    }
    async function downloadNewImages() {
      try {
        const images = await getImagesViaApi({ query, page });
        setImages(state => [...state, ...images.hits]);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }
    downloadNewImages();
  }, [loading, page, query]);

  const onSearchSubmit = query => {
    setPage(1);
    setQuery(query);
    setImages([]);
    setLoading(true);
  };
  const loadMore = () => {
    setPage(state => state + 1);
    setLoading(true);
  };

  return (
    <div className="app">
      <SearchBar onSubmit={onSearchSubmit} />
      <ImageGalleryList images={images} />

      {loading && (
        <Circles
          height="80"
          width="80"
          color="red"
          ariaLabel="circles-loading"
          visible={true}
          wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
        />
      )}
      {images.length > 0 && <LoadMore onClick={loadMore} />}
    </div>
  );
};

export class App1 extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    isLoading: false,
  };

  async componentDidUpdate(_, prevState) {
    if (!this.state.isLoading) {
      return;
    }
    try {
      const images = await getImagesViaApi({
        query: this.state.query,
        page: this.state.page,
      });
      if (
        prevState.query !== this.state.query ||
        this.state.page !== prevState.page
      ) {
        this.setState({
          images: [...this.state.images, ...images.hits],
          isLoading: false,
        });
      }
    } catch (error) {
      console.log('error');
    } finally {
      this.setState({ isLoading: false });
    }
  }
  onSearchSubmit = query => {
    this.setState({ page: 1, query, images: [], isLoading: true });
  };
  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1, isLoading: true }));
  };

  render() {
    return (
      <div className="app">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageGalleryList images={this.state.images} />

        {this.state.isLoading && (
          <Circles
            height="80"
            width="80"
            color="red"
            ariaLabel="circles-loading"
            visible={true}
            wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
          />
        )}
        {this.state.images.length > 0 && <LoadMore onClick={this.loadMore} />}
      </div>
    );
  }
}
