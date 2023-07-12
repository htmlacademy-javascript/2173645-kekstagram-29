import {initScale, resetScale} from './scale.js';
import {isEscapeKey, isNotTextInput} from './utils.js';

const HASHTAG = /^#[a-zа-яё0-9]{1,19}$/i;
const MAX_HASHTAG_COUNT = 5;
const HASHTAG_INVALID_MESSAGE = 'Хэштег должен начинаться с #, быть длиной от 2 до 20 символов и состоять только из букв и чисел';
const HASHTAG_MAX_COUNT = 'Нельзя указывать больше пяти хэш-тегов';
const HASHTAG_REPEAT_MESSAGE = 'Один и тот же хэш-тег не может быть использован дважды';

const uploadForm = document.querySelector('.img-upload__form');
const uploadInput = uploadForm.querySelector('.img-upload__input');
const hashtagsInput = uploadForm.querySelector('.text__hashtags');
const uploadOverlay = uploadForm.querySelector('.img-upload__overlay');
const uploadCancel = uploadForm.querySelector('.img-upload__cancel');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
});

const openUploadForm = () => {
  uploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const closeUploadForm = () => {
  uploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  uploadForm.reset();
  resetScale();
  pristine.reset();
};

const onUploadInputChange = () => openUploadForm();
const onUploadCancelClick = () => closeUploadForm();
const onUploadFormSubmit = (evt) => {
  evt.preventDefault();
};

function onDocumentKeydown (evt) {
  if(isEscapeKey(evt) && isNotTextInput(evt)) {
    evt.preventDefault();
    closeUploadForm();
  }
}

const initUploadForm = () => {
  uploadInput.addEventListener('change', onUploadInputChange);
  uploadForm.addEventListener('submit', onUploadFormSubmit);
  uploadCancel.addEventListener('click', onUploadCancelClick);
  initScale();
  pristine.validate();
};

const normalizeTags = (tagsString) => tagsString
  .trim()
  .split(' ')
  .filter((tag) => Boolean(tag.length));

const isValidCount = (value) => normalizeTags(value).length <= MAX_HASHTAG_COUNT;
const isValidHashtag = (value) => normalizeTags(value).every((tag) => HASHTAG.test(tag));

const hasNoRepeatHashtags = (value) => {
  const lowerCaseHashtags = normalizeTags(value).map((tag) => tag.toLowerCase());
  return lowerCaseHashtags.length === new Set(lowerCaseHashtags).size;
};

pristine.addValidator(
  hashtagsInput,
  isValidHashtag,
  HASHTAG_INVALID_MESSAGE
);

pristine.addValidator(
  hashtagsInput,
  isValidCount,
  HASHTAG_MAX_COUNT
);

pristine.addValidator(
  hashtagsInput,
  hasNoRepeatHashtags,
  HASHTAG_REPEAT_MESSAGE
);

export{initUploadForm};

