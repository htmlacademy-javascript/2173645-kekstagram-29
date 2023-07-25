const isEscapeKey = (evt) => evt.key === 'Escape';

const isTextInput = (evt) => (evt.target.closest('input[type="text"]') || evt.target.closest('textarea'));

function debounce (callback, timeoutDelay) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export {isEscapeKey, isTextInput, debounce};
