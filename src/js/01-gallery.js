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
  gallery.innerHTML = '';
  galleryItems.forEach(item => {
    gallery.innerHTML += createGalleryLayout(item);
  });
};

addLayout();

let describeOptionsBigImg = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
  scrollZoom: false,
});
