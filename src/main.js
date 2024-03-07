// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getPhotos } from './js/pixabay-api';
import { renderMarkup, refreshLightbox, lightbox } from './js/render-functions';

const formEl = document.querySelector('.js-hero-form');
const photoEl = document.querySelector('.photos-list');
const loaderEl = document.querySelector('.loader');

formEl.addEventListener('submit', e => {
  e.preventDefault();
  showLoader();

  photoEl.innerHTML = '';

  const userSearch = e.target.elements.query.value.trim();

  getPhotos(userSearch)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          titleColor: '#fff',
          messageColor: '#fff',
          backgroundColor: '#ef4040',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      }
      renderMarkup(photoEl, data.hits);
      refreshLightbox();
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      hideLoader();
    });

  e.target.reset();
});

function showLoader() {
  loaderEl.classList.add('visible');
}

function hideLoader() {
  loaderEl.classList.remove('visible');
}
