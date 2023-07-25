import {getData} from '../utils/api.js';
import {renderMiniatures} from '../pictures/render-miniatures.js';
import {showMessage} from '../utils/messages.js';
import {initFilters, getFilteredData} from './filter.js';

const GET_URL = 'https://29.javascript.pages.academy/kekstagram/data';
const ERROR_MESSAGE_GET = 'Ошибка загрузки данных';
const STATE = 'error';

const currentFilter = document.querySelector('.img-filters__button--active').id;

const onGetSuccess = (data) => {
  initFilters(data);
  renderMiniatures(getFilteredData(currentFilter, data));
};

const onGetError = () => {
  showMessage(STATE, ERROR_MESSAGE_GET);
};

const initMiniatures = () => {
  getData(GET_URL, onGetSuccess, onGetError);
};

export {initMiniatures};
