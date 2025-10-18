import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';

import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
} from './js/render-functions';

export const loader = document.querySelector('.loader');

const searchInput = document.querySelector('.form');
const gallery = document.querySelector('.gallery');

searchInput.addEventListener('submit', submitSearch);

iziToast.settings({
  timeout: 2500,
  progressBar: false,
  transitionIn: 'flipInX',
  transitionOut: 'flipInX',
});

function submitSearch(event) {
  event.preventDefault();
  showLoader();

  const searchText = event.target.elements['search-text'].value.trim();

  if (!searchText) {
    iziToast.warning({
      title: 'Attention!',
      message: 'Please enter text to search!',
      position: 'topRight',
    });

    hideLoader();
  } else {
    clearGallery(gallery);
    getImagesByQuery(searchText)
      .then(data => {
        if (!data.length) {
          iziToast.info({
            title: 'Info',
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            color: '#f8e730ff',
            position: 'center',
          });
        } else {
          clearGallery(gallery);
          createGallery(data, gallery);
        }
      })
      .catch(error => {
        iziToast.error({
          title: `Ooops!`,
          message: `${error.message}`,
          position: 'bottomRight',
        });
      })
      .finally(() => {
        searchInput.reset();
        hideLoader();
      });
  }
}
