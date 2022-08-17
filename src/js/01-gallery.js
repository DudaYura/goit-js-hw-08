// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
const galleryMarcupRef = createGalleryMarkup(galleryItems);

galleryRef.innerHTML = galleryMarcupRef;

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

function createGalleryMarkup(item) {
  return item
    .map(
      ({ preview, original, description }) =>
        `<li><a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" 
          alt="${description}" />
        </a></li>`
    )
    .join('');
}

console.log(galleryItems);
