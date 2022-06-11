import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

function onCreateItem(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `
    // <div class="gallery__item">
    <a class="gallery__item" href='${original}'>
      <img
        class="gallery__image"
        src='${preview}'
        data-source='${original}'
        alt='${description}'
        />
        </a>
    // </div>
    `}).join('');
  }

const item = onCreateItem(galleryItems);
gallery.insertAdjacentHTML('beforeend', item);

const lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt',
captionDelay: 250 });

SimpleLightbox.addEventListener('click', onImageClick);

function onImageClick(evt) {
  evt.preventDefault();
  const instance = lightbox.create(`
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


// new SimpleLightbox({elements: '.imageGallery1 a'}); */}



// {/* <a class="gallery__item" href="large-image.jpg">
//   <img class="gallery__image" src="small-image.jpg" alt="Image description" />
// </a> */}