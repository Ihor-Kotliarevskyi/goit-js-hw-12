import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { loader } from '../main';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.85,
  showCounter: true,
});

export function createGallery(images, galleryElements) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="gallery-item">
                <div class="image-box">
                  <a class="gallery-link" href="${largeImageURL}">
                      <img
                        class="gallery-image"
                        src="${webformatURL}"
                        alt="${tags}"
                      />
                  </a>
                  </div>
                  <ul class="image-stats">
                    <li class="image-stat-item">
                      <h4>Likes</h4>
                      <p>${likes}</p>
                    </li>
                    <li class="image-stat-item">
                      <h4>Views</h4>
                      <p>${views}</p>
                    </li>
                    <li class="image-stat-item">
                      <h4>Comments</h4>
                      <p>${comments}</p>
                    </li>
                    <li class="image-stat-item">
                      <h4>Downloads</h4>
                      <p>${downloads}</p>
                    </li>
                  </ul>
                </li>`;
      }
    )
    .join('');

  galleryElements.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery(elem) {
  elem.innerHTML = '';
}

export function showLoader() {
  loader.style.display = 'block';
}

export function hideLoader() {
  loader.style.display = 'none';
}
