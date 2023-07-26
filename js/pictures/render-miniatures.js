import {renderBigPicture} from './render-big-picture.js';

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const fragment = document.createDocumentFragment();

const createMiniature = ({url, description, comments, likes}) => {
  const userPicture = pictureTemplate.cloneNode(true);

  const pictureImg = userPicture.querySelector('.picture__img');
  pictureImg.src = url;
  pictureImg.alt = description;

  userPicture.querySelector('.picture__comments').textContent = comments.length;
  userPicture.querySelector('.picture__likes').textContent = likes;

  userPicture.addEventListener('click', (evt) => {
    evt.preventDefault();
    renderBigPicture(url, description, comments, likes);
  });

  fragment.append(userPicture);
};

const renderMiniatures = (pictures) => {
  pictures.forEach((item) => createMiniature(item));
  picturesContainer.append(fragment);
};

export {renderMiniatures};


