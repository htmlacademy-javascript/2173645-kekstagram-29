import {initScale, resetScale} from './scale.js';
import {isEscapeKey, isTextInput} from '../utils.js';
import {validateForm, resetValidation} from './validate.js';
import {initEffects, updateEffects} from './effects.js';

const uploadForm = document.querySelector('.img-upload__form');
const uploadInput = uploadForm.querySelector('.img-upload__input');
const uploadOverlay = uploadForm.querySelector('.img-upload__overlay');
const uploadCancel = uploadForm.querySelector('.img-upload__cancel');
const effectsList = uploadForm.querySelector('.img-upload__effects');
const currentEffectValue = uploadForm.querySelector('input:checked').value;

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
  updateEffects(currentEffectValue);
};

const onUploadInputChange = () => openUploadForm();
const onUploadCancelClick = () => closeUploadForm();
const onEffectsListChange = (evt) => updateEffects(evt.target.value);
const onUploadFormSubmit = (evt) => {
  if (!validateForm()) {
    evt.preventDefault();
  }
  return false;
};

function onDocumentKeydown (evt) {
  if(isEscapeKey(evt) && !isTextInput(evt)) {
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

