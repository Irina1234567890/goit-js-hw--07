import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const gallery = document.querySelector('.gallery');


function onCreateItem(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href='${original}'>
      <img
        class="gallery__image"
        src='${preview}'
        data-source='${original}'
        alt='${description}'
        />
        </a>
    </div>`}).join('');
}

const item = onCreateItem(galleryItems);
gallery.insertAdjacentHTML('beforeend', item);
gallery.addEventListener('click', onImageClick);

function onImageClick(evt) {
  evt.preventDefault();
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">`)

    instance.show();
}
