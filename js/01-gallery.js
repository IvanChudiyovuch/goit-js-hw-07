import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const cardMarkUp = createGalleryCardMarkUp(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardMarkUp);
galleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(event) {
  event.preventDefault();

  const linkImg = event.target.dataset.source;

  const instance = basicLightbox.create(
    `
          <img src="${linkImg}" width="800" height="600">
      `
  );

  instance.show();
}

function createGalleryCardMarkUp(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `;
    })
    .join('');
}
