import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery, PER_PAGE } from './js/pixabay-api';

import {
  clearGallery,
  createGallery,
  hideLoader,
  hideLoadMoreButton,
  showLoader,
  showLoadMoreButton,
} from './js/render-functions';

export const loader = document.querySelector('.loader');
export const loadMoreButton = document.querySelector('.load-more-button');

const searchInput = document.querySelector('.form');
const gallery = document.querySelector('.gallery');

searchInput.addEventListener('submit', submitSearch);
loadMoreButton.addEventListener('click', loadMore);

iziToast.settings({
  timeout: 2500,
  progressBar: false,
  transitionIn: 'flipInX',
  transitionOut: 'flipInX',
});

let pageCounter = 1;
let searchText = '';

function submitSearch(event) {
  event.preventDefault();
  pageCounter = 1;
  searchText = event.target.elements['search-text'].value.trim();

  if (!searchText) {
    iziToast.warning({
      title: 'Attention!',
      message: 'Please enter text to search!',
      position: 'topRight',
    });
  } else {
    showLoader();
    clearGallery(gallery);
    getImagesByQuery(searchText, pageCounter)
      .then(data => {
        if (!data.hits.length) {
          // hideLoadMoreButton();
          iziToast.info({
            title: 'Info',
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            color: '#f8e730ff',
            position: 'bottomCenter',
          });
        } else {
          clearGallery(gallery);
          createGallery(data.hits, gallery);
          showLoadMoreButton();
          pageCounter++;
          console.log(data);
          if (data.totalHits / PER_PAGE <= pageCounter) {
            hideLoadMoreButton();
            iziToast.info({
              title: 'Info',
              message:
                "We're sorry, but you've reached the end of search results.",
              timeout: 2500,
              color: '#f8e730ff',
              position: 'bottomCenter',
            });
          }
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

function loadMore(event) {
  event.preventDefault();
  showLoader();
  getImagesByQuery(searchText, pageCounter)
    .then(data => {
      if (data.totalHits / PER_PAGE <= pageCounter) {
        createGallery(data.hits, gallery);
        hideLoadMoreButton();
        iziToast.info({
          title: 'Info',
          message: "We're sorry, but you've reached the end of search results.",
          timeout: 2500,
          color: '#f8e730ff',
          position: 'bottomCenter',
        });
      } else {
        createGallery(data.hits, gallery);
        showLoadMoreButton();
        pageCounter++;
        console.log(data);
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
      hideLoader();
    });
}
