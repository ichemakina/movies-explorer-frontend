const REGEX_EMAIL = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,4}$/;
const REGEX_NAME = /^[A-Za-zА-Яа-я -]+$/;

// ширина экрана, в зависимости от которой меняется количество карточек
const TABLET_DISPLAY_WIDTH = 840;
const PHONE_DISPLAY_WIDTH = 580;

// количество отображаемых фильмов в зависимости от ширины экрана
const COMPUTER_MOVIES_COUNT = 16;
const TABLET_MOVIES_COUNT = 8;
const PHONE_MOVIES_COUNT = 5;

// количество карточек, которое надо добавить по кнопке "еще"
const COMPUTER_ADDITIONAL_MOVIES = 4;
const PHONE_ADDITIONAL_MOVIES = 2;

export {
    REGEX_EMAIL,
    REGEX_NAME,
    TABLET_DISPLAY_WIDTH,
    PHONE_DISPLAY_WIDTH,
    COMPUTER_MOVIES_COUNT,
    TABLET_MOVIES_COUNT,
    PHONE_MOVIES_COUNT,
    COMPUTER_ADDITIONAL_MOVIES,
    PHONE_ADDITIONAL_MOVIES
};