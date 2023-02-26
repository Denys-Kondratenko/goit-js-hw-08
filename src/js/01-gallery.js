// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// 1) Отримуємо посилання на ul.gallery
const gallery = document.querySelector('.gallery');

// 2) Створимо елементи галереї
const getGalleryItems = ({ preview, original, description }) => `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;

const markupGalleryItems = galleryItems.map(getGalleryItems).join('');

// 3) Додамо елементи галереї до розмітки
gallery.insertAdjacentHTML('beforeend', markupGalleryItems);

// 4) Зробимо ініціалізацію бібліотеки та налаштуємо
var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  scrollZoom: false,
});
