import {initScale, resetScale} from './scale.js';
import {isEscapeKey, isTextInput} from '../utils/utils.js';
import {validateForm, resetValidation} from './validate.js';
import {initEffects} from './effects.js';
import {sendData} from '../utils/api.js';
import {showMessage} from '../utils/messages.js';

const SEND_URL = 'https://29.javascript.pages.academy/kekstagram';
const SUCCESS_SEND_MESSAGE = 'Изображение успешно загружено';
const SUCCESS_BUTTON_TEXT = 'Круто';
const ERROR_SEND_MESSAGE = 'Ошибка загрузки файла';
const ERROR_BUTTON_TEXT = 'Попробовать ещё раз';

const uploadForm = document.querySelector('.img-upload__form');
const uploadInput = uploadForm.querySelector('.img-upload__input');
const uploadOverlay = uploadForm.querySelector('.img-upload__overlay');
const uploadCancel = uploadForm.querySelector('.img-upload__cancel');
const effectsList = uploadForm.querySelector('.img-upload__effects');
const currentEffectValue = uploadForm.querySelector('input:checked').value;
const imgUploadSubmit = uploadForm.querySelector('.img-upload__submit');

const openUploadForm = () => {
  uploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const closeUploadForm = () => {
  uploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  resetScale();
  resetValidation();
  uploadForm.reset();
  initEffects(currentEffectValue);
};

const setSubmitState = (state) => {
  imgUploadSubmit.disabled = state;
};

const successUpload = () => {
  setSubmitState(false);
  closeUploadForm();
  showMessage('success', SUCCESS_SEND_MESSAGE, SUCCESS_BUTTON_TEXT);
};

const errorUpload = () => {
  setSubmitState(false);
  showMessage('error', ERROR_SEND_MESSAGE, ERROR_BUTTON_TEXT);
};

const onUploadInputChange = () => openUploadForm();
const onUploadCancelClick = () => closeUploadForm();
const onEffectsListChange = (evt) => initEffects(evt.target.value);

const onUploadFormSubmit = (evt) => {
  evt.preventDefault();
  if (validateForm()) {
    setSubmitState(true);
    sendData(SEND_URL, new FormData(evt.target), successUpload, errorUpload);
  }
};

function onDocumentKeydown (evt) {
  if(isEscapeKey(evt) && !isTextInput(evt) && !document.querySelector('.error')) {
    evt.preventDefault();
    closeUploadForm();
  }
}

const initUploadForm = () => {
  uploadInput.addEventListener('change', onUploadInputChange);
  uploadForm.addEventListener('submit', onUploadFormSubmit);
  uploadCancel.addEventListener('click', onUploadCancelClick);
  initScale();
  initEffects(currentEffectValue);
  effectsList.addEventListener('change', onEffectsListChange);
  validateForm();
};

export{initUploadForm};

