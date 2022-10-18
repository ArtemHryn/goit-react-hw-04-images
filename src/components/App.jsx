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