import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const KEY = '52764873-a8569ac81d8d8c122be292efa';
export const PER_PAGE = 150;

export function getImagesByQuery(query, pageNumber) {
  return axios
    .get(`${URL}`, {
      params: {
        key: KEY,
        q: query,
        per_page: PER_PAGE,
        page: pageNumber,
        type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => {
      console.log(response);

      return response.data;
    });
}
