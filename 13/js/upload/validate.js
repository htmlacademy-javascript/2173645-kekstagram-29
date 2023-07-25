const HASHTAG_REGULAR = /^#[a-zа-яё0-9]{1,19}$/i;
const MAX_HASHTAG_COUNT = 5;
const HASHTAG_INVALID_MESSAGE = 'Хэштег должен начинаться с #, быть длиной от 2 до 20 символов и состоять только из букв и чисел';
const HASHTAG_MAX_COUNT = 'Нельзя указывать больше пяти хэш-тегов';
const HASHTAG_REPEAT_MESSAGE = 'Один и тот же хэш-тег не может быть использован дважды';

const uploadForm = document.querySelector('.img-upload__form');
const hashtagsInput = uploadForm.querySelector('.text__hashtags');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
});

const validateForm = () => pristine.validate();
const resetValidation = () => pristine.reset();

const normalizeTags = (tagsString) => tagsString
  .trim()
  .split(' ')
  .filter((tag) => Boolean(tag.length));

const isValidCount = (value) => normalizeTags(value).length <= MAX_HASHTAG_COUNT;

const isValidHashtag = (value) => normalizeTags(value).every((tag) => HASHTAG_REGULAR.test(tag));

const hasNoRepeatHashtags = (value) => {
  const lowerCaseHashtags = normalizeTags(value).map((tag) => tag.toLowerCase());
  return lowerCaseHashtags.length === new Set(lowerCaseHashtags).size;
};

pristine.addValidator(
  hashtagsInput,
  isValidHashtag,
  HASHTAG_INVALID_MESSAGE,
  1,
  true
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

export{validateForm, resetValidation};
