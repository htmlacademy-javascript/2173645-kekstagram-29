import {getRandomInteger, getRandomArrayElement} from './utils.js';

const NUMBER_OF_DESCRIPTIONS = 25;

const AvatarCounter = {
  MIN: 1,
  MAX: 6
};

const LikesCounter = {
  MIN: 15,
  MAX: 200
};

const CommentsCounter = {
  MIN: 0,
  MAX: 30
};

let commentId = 1;
let photoId = 1;

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'Иметь мягкое сердце в жестоком мире — это сила, а не слабость.',
  'Смысл жизни состоит в том, чтобы умереть молодым ... как можно позже.',
  'Отдыхайте так, чтобы вы забывали брать телефон в руки.',
  'У вас никогда не заканчиваются вещи, которые могут пойти не так.',
  'Пятница — мое второе любимое слово.',
  'Скажи да новым приключениям.'
];

const createMessage = () => {
  const messages = Array.from({length: getRandomInteger(1, 2)}, () => getRandomArrayElement(MESSAGES));
  return Array.from(new Set(messages)).join(', ');
};

const createComment = () => ({
  id: commentId++,
  avatar: `img/avatar-${getRandomInteger(AvatarCounter.MIN, AvatarCounter.MAX)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

const createPhotoDescription = () => ({
  id: photoId,
  url: `photos/${photoId++}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LikesCounter.MIN, LikesCounter.MAX),
  comments:  Array.from({length:getRandomInteger(CommentsCounter.MIN, CommentsCounter.MAX)}, createComment)
});

const createPhotoDescriptions = () => Array.from({length: NUMBER_OF_DESCRIPTIONS}, createPhotoDescription);

export {createPhotoDescriptions};
