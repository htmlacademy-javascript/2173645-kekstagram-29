const EFFECTS = {
  chrome: {
    name: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  sepia: {
    name: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  marvin: {
    name: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%'
  },
  phobos: {
    name: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit:'px'
  },
  heat: {
    name: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: ''
  },
  default: {
    name: 'none',
    min: 1,
    max: 1,
    step: 1,
    unit: ''
  }
};

const effectLevelValue = document.querySelector('.effect-level__value');
const imgUploadPreview = document.querySelector('.img-upload__preview img');
const effectLevelSlider = document.querySelector('.effect-level__slider');
const sliderContainer = document.querySelector('.img-upload__effect-level');

const setContainerState = (value) => {
  if(value === 'none') {
    sliderContainer.classList.add('hidden');
    imgUploadPreview.style.filter = 'none';
    return;
  }

  sliderContainer.classList.remove('hidden');
};

const createSlider = (value) => {
  const {min, max, step, name, unit} = EFFECTS[value] || EFFECTS.default;

  setContainerState(value);

  noUiSlider.create(effectLevelSlider, {
    range: {
      min,
      max
    },
    start: max,
    step,
    connect: 'lower'
  });

  effectLevelSlider.noUiSlider.on('update', () => {
    const saturation = effectLevelSlider.noUiSlider.get();
    imgUploadPreview.style.filter = `${name}(${saturation}${unit})`;
    effectLevelValue.value = saturation;
  });
};

const initEffects = (value) => {
  if (effectLevelSlider.noUiSlider) {
    effectLevelSlider.noUiSlider.destroy();
  }

  createSlider(value);
};

export {initEffects, imgUploadPreview};
