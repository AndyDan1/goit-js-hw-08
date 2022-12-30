import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const createGalleryLayout = item => {
  return `
           <a title="asdfghjkl" self class="gallery__item" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" alt="${item.description}"  />
          </a>
         `;
};

const addLayout = () => {
  const arr = galleryItems
    .map(item => {
      return createGalleryLayout(item);
    })
    .join('');
  gallery.insertAdjacentHTML('afterbegin', arr);
};

addLayout();

let describeOptionsBigImg = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
  scrollZoom: false,
});
