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

const hideElement = () => {
  commentsLoader.classList.add('hidden');
  socialCommentCount.classList.add('hidden');
};

const openModal = () => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  closeButton.addEventListener('click', onCloseButtonClick);
  document.addEventListener('keydown', onDocumentKeydown);
};

const closeModal = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  closeButton.removeEventListener('click', onCloseButtonClick);
  document.removeEventListener('keydown', onDocumentKeydown);
};

function onCloseButtonClick () {
  closeModal();
}

function onDocumentKeydown (evt) {
  if(evt.key === 'Escape' && !evt.target.closest('.social__footer-text')) {
    evt.preventDefault();
    closeModal();
  }
}

const fillBigPicture = ({url, description, likes, comments}) => {
  socialCaption.textContent = description;
  bigImg.src = url;
  likesCount.textContent = likes;
  commentCount.textContent = comments.length;
};

const fillComment = ({avatar, name, message}) => {
  const comment = socialComment.cloneNode(true);
  const socialPicture = comment.querySelector('.social__picture');
  socialPicture.src = avatar;
  socialPicture.alt = name;
  comment.querySelector('.social__text').textContent = message;
  return comment;
};

const fillCommentsList = ({comments}) => {
  comments.forEach((item) => socialComments.append(fillComment(item)));
};

const renderBigPicture = ({url, description, likes, comments}) => {
  hideElement();
  socialComments.innerHTML = '';
  openModal();
  fillBigPicture({url, description, likes, comments});
  fillCommentsList({comments});
};

export {renderBigPicture};
