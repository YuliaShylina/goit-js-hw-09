import { images } from './1-gallery';

export const createGallery = images
  .map(({ preview, description, original }) => {
    return `
      <li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img
            class="gallery-image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>
    `;
  })
  .join('');
