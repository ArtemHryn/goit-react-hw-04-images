import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '29161019-6ea1164b9701eafe63306bc8a';

export const getImagesViaApi = async ({ query, page }) => {
  const options = {
    params: {
      q: query,
      page,
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  };
    const response = await axios.get('/', options);
    return response.data
};
