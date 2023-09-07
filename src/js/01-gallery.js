// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const container = document.querySelector('.gallery');

// Створення розмітки

function addMarkup(elements) {
    return elements
        .map(({ preview, original, description }) => `
        <li class="gallery__item">
	        <a class="gallery__link" href="${original}">
		        <img class = "gallery__image"
		            src="${preview}"
		            alt="${description}"
		            width="350">
	        </a>
        </li>`).join("");
}
container.insertAdjacentHTML("beforeend", addMarkup(galleryItems));

// Застосування SimpleLightbox

let gallery = new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: 250 });

console.log(galleryItems);

