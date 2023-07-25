import {debounce} from '../utils/utils.js';
import {renderMiniatures} from './render-miniatures.js';
import {picturesContainer} from './render-miniatures.js';

const RANDOM_PICTURE_COUNT = 10;
const DELAY = 500;
const FILTER_RANDOM = 'filter-random';
const FILTER_DISCUSSED = 'filter-discussed';

const imgFilters = document.querySelector('.img-filters');
const imgFiltersForm = imgFilters.querySelector('.img-filters__form');

const sortByCommentsLength = (data) => data.slice().sort((a, b) => b.comments.length - a.comments.length);

const sortRandom = (data) => {
  const dataClone = data.slice();

  for (let i = dataClone.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [dataClone[i], dataClone[j]] = [dataClone[j], dataClone[i]];
  }

  return dataClone.slice(0, RANDOM_PICTURE_COUNT);
};

const getFilteredData = (id, data) => {
  switch (id) {
    case FILTER_RANDOM:
      return sortRandom(data);
    case FILTER_DISCUSSED:
      return sortByCommentsLength(data);
    default:
      return data;
  }
};

const renderFilteredPictures = (id, data) => {
  picturesContainer.querySelectorAll('.picture').forEach((picture) => picture.remove());
  renderMiniatures(getFilteredData(id, data));
};

const renderPictures = debounce((id, data) => renderFilteredPictures(id, data), DELAY);


const initFilters = (data) => {
  imgFilters.classList.remove('img-filters--inactive');

  imgFiltersForm.addEventListener('click', (evt) => {
    if (evt.target.closest('.img-filters__button') && !evt.target.closest('.img-filters__button--active')) {
      document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
      evt.target.classList.add('img-filters__button--active');
      renderPictures(evt.target.id, data);
    }
  });
};

export {initFilters, getFilteredData};
