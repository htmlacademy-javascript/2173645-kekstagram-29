import {isEscapeKey, isTextInput} from '../utils/utils.js';

const COMMENTS_COUNTER = 5;

const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const socialComments = bigPicture.querySelector('.social__comments');
const socialComment = bigPicture.querySelector('.social__comment');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentCount = bigPicture.querySelector('.comments-count');
const bigImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const socialCaption = bigPicture.querySelector('.social__caption');

let showingComments = 0;
let arrayComments;

const setButtonState = () => {
  if (showingComments >= arrayComments.length) {
    commentsLoader.classList.add('hidden');
    return;
  }
  commentsLoader.classList.remove('hidden');
};

const openModal = () => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  closeButton.addEventListener('click', onCloseButtonClick);
  document.addEventListener('keydown', onDocumentKeydown);
  commentsLoader.addEventListener('click', onCommentsLoaderClick);
};

const closeModal = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  closeButton.removeEventListener('click', onCloseButtonClick);
  document.removeEventListener('keydown', onDocumentKeydown);
  commentsLoader.removeEventListener('click', onCommentsLoaderClick);
  showingComments = 0;
};

function onCloseButtonClick () {
  closeModal();
}

function onDocumentKeydown (evt) {
  if(isEscapeKey(evt) && !isTextInput(evt)) {
    evt.preventDefault();
    closeModal();
  }
}

const fillComment = ({avatar, name, message}) => {
  const comment = socialComment.cloneNode(true);
  const socialPicture = comment.querySelector('.social__picture');
  socialPicture.src = avatar;
  socialPicture.alt = name;
  comment.querySelector('.social__text').textContent = message;
  return comment;
};


const fillCommentsCounter = () => {
  socialCommentCount.innerHTML = `${showingComments} из <span class="comments-count">${arrayComments.length}</span> комментариев`;
};

const fillCommentsList = () => {
  const fragment = document.createDocumentFragment();
  const currentComments = arrayComments.slice(showingComments, showingComments + COMMENTS_COUNTER);
  showingComments = Math.min(showingComments + COMMENTS_COUNTER, arrayComments.length);
  currentComments.forEach((item) => fragment.append(fillComment(item)));
  socialComments.append(fragment);
  setButtonState();
  fillCommentsCounter();
};

function onCommentsLoaderClick (evt) {
  evt.preventDefault();
  fillCommentsList();
}

const fillBigPicture = ({url, description, likes, comments}) => {
  socialCaption.textContent = description;
  bigImg.src = url;
  likesCount.textContent = likes;
  commentCount.textContent = comments.length;
  fillCommentsList();
};

const renderBigPicture = ({url, description, likes, comments}) => {
  arrayComments = comments;
  socialComments.innerHTML = '';
  openModal();
  fillBigPicture({url, description, likes, comments});
};

export {renderBigPicture};
