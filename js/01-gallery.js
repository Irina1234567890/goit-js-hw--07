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

  if (evt.target.nodeName !== 'IMG') { return; };

  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">`)

    instance.show();
  
}

 
function onCloseModal() {
  window.removeEventListener("keydown", onEscKeyModal);
  document.body.classList.close(".basicLightbox--visible");
}

function onEscKeyModal(event) {
  if (event.code === "Escape") {
    onCloseModal();
  }
  
}

const instance = basicLightbox.create(html, {
  onShow: (instance) => console.log('onShow', instance),
  onClose: (instance) => console.log('onClose', instance)
});


// function isEscapeDown (evt) {
//   if (evt.code === 'Escape') {
//     instance.close(window.removeEventListener('keydown', isEscapeDown));
//   };
// }

instance.show((instance) => console.log('finished show()', instance));



// instance.close(window.removeEventListener('keydown', isEscapeDown));
// function noModal(evt) {
//   if (evt.target.nodeName !== ‘IMG’) { return; };
// }
