import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const KEY = '52764873-a8569ac81d8d8c122be292efa';

export function getImagesByQuery(query) {
  return axios
    .get(`${URL}`, {
      params: {
        key: KEY,
        q: query,
        per_page: 30,
        type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => {
      return response.data.hits;
    });
}
