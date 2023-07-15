const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';

const isTextInput = (evt) => (evt.target.closest('input[type="text"]') || evt.target.closest('textarea'));

export {getRandomInteger, getRandomArrayElement, isEscapeKey, isTextInput};
