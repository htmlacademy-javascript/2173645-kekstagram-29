import {createPhotoDescriptions} from './data.js';

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const data = createPhotoDescriptions();

const fragment = document.createDocumentFragment();

const createMiniature = (item) => {
  const userPicture = pictureTemplate.cloneNode(true);
  const img = userPicture.querySelector('.picture__img');
  img.src = item.url;
  img.alt = item.description;
  userPicture.querySelector('.picture__comments').textContent = item.comments.length;
  userPicture.querySelector('.picture__likes').textContent = item.likes;
  fragment.append(userPicture);
};

const renderingMiniatures = () => {
  data.forEach((item) => createMiniature(item));
  picturesContainer.append(fragment);
};

export {renderingMiniatures};


