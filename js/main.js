import {renderMiniatures} from './render-miniatures.js';
import {createPhotoDescriptions} from './data.js';
import {initUploadForm} from './upload-image.js';


const data = createPhotoDescriptions();

renderMiniatures(data);

initUploadForm();
