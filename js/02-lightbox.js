import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkUp = createGalleryCardMarkUp(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkUp);

const liteBox = new SimpleLightbox('.gallery a', {
  sourceAttr: 'href',
  captionDelay: 250,
  captionPosition: 'bottom',
});

function createGalleryCardMarkUp(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" title = "${description}"/>
    </a>`;
    })
    .join('');
}
