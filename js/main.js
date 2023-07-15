import {renderMiniatures} from './pictures/render-miniatures.js';
import {createPhotoDescriptions} from './pictures/data.js';
import {initUploadForm} from './upload/upload-image.js';


const data = createPhotoDescriptions();

renderMiniatures(data);

initUploadForm();
