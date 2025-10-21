import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery, PER_PAGE } from './js/pixabay-api';

import {
  clearGallery,
  createGallery,
  getHeightImageCard,
  hideLoader,
  hideLoadMoreButton,
  scroll,
  showLoader,
  showLoadMoreButton,
} from './js/render-functions';

export const loader = document.querySelector('.loader');
export const loadMoreButton = document.querySelector('.load-more-button');

const searchInput = document.querySelector('.form');
const gallery = document.querySelector('.gallery');

searchInput.addEventListener('submit', submitSearch);
loadMoreButton.addEventListener('click', loadMore);

let pageCounter = 1;
let searchText = '';

function submitSearch(event) {
  event.preventDefault();
  pageCounter = 1;
  searchText = event.target.elements['search-text'].value.trim();

  if (!searchText) {
    showWarning();
  } else {
    showLoader();
    clearGallery(gallery);
    getImagesByQuery(searchText, pageCounter)
      .then(data => {
        if (!data.hits.length) {
          showInfo(
            'Sorry, there are no images matching your search query. Please try again!'
          );
        } else {
          clearGallery(gallery);
          createGallery(data.hits, gallery);
          showLoadMoreButton();
          pageCounter++;
          if (data.totalHits / PER_PAGE <= pageCounter) {
            hideLoadMoreButton();
            showInfo(
              "We're sorry, but you've reached the end of search results."
            );
          }
        }
      })
      .catch(error => {
        showError(error);
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
        scroll(getHeightImageCard(gallery.children));
        showInfo("We're sorry, but you've reached the end of search results.");
      } else {
        createGallery(data.hits, gallery);
        showLoadMoreButton();
        scroll(getHeightImageCard(gallery.children));
        pageCounter++;
      }
    })
    .catch(error => {
      showError(error);
    })
    .finally(() => {
      hideLoader();
    });
}

iziToast.settings({
  timeout: 4000,
  progressBar: false,
});

function showInfo(message) {
  iziToast.info({
    title: 'Info',
    message: `${message}`,
    color: '#f8e730ff',
    position: 'bottomCenter',
  });
}

function showWarning() {
  iziToast.warning({
    title: 'Attention!',
    message: 'Please enter text to search!',
    position: 'topRight',
  });
}

function showError(error) {
  iziToast.error({
    title: `Ooops!`,
    message: `${error.message}`,
    position: 'bottomRight',
  });
}
