const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DIVIDER = 100;

const uploadContainer = document.querySelector('.img-upload__preview-container');
const scaleControlSmaller = uploadContainer.querySelector('.scale__control--smaller');
const scaleControlBigger = uploadContainer.querySelector('.scale__control--bigger');
const scaleControlValue = uploadContainer.querySelector('.scale__control--value');
const imgUploadPreview = uploadContainer.querySelector('.img-upload__preview img');

let currentScale = MAX_SCALE;

const changeScale = (value) => {
  imgUploadPreview.style.transform = `scale(${value / DIVIDER})`;
  scaleControlValue.value = `${value}%`;
};

const onScaleControlSmallerClick = (evt) => {
  evt.preventDefault();

  if(currentScale > MIN_SCALE) {
    currentScale -= SCALE_STEP;
    changeScale(currentScale);
  }
};

const onScaleControlBiggerClick = (evt) => {
  evt.preventDefault();

  if (currentScale < MAX_SCALE) {
    currentScale += SCALE_STEP;
    changeScale(currentScale);
  }
};

const initScale = () => {
  scaleControlSmaller.addEventListener('click', onScaleControlSmallerClick);
  scaleControlBigger.addEventListener('click', onScaleControlBiggerClick);
};

const resetScale = () => {
  currentScale = MAX_SCALE;
  changeScale(MAX_SCALE);
};

export{initScale, resetScale};
