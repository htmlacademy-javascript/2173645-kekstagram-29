import {renderMiniatures} from './render-miniatures.js';
import {createPhotoDescriptions} from './data.js';

const data = createPhotoDescriptions();

renderMiniatures((data));
