const isEscapeKey = (evt) => evt.key === 'Escape';

const isTextInput = (evt) => (evt.target.closest('input[type="text"]') || evt.target.closest('textarea'));

export {isEscapeKey, isTextInput};
