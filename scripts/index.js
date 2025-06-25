// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы
const placesList = document.querySelector(".places__list");

// @todo: Функция создания карточки
function createCard(cardData) {
    const cardElement = cardTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector(".card__image");
    const cardTitle = cardElement.querySelector(".card__title");

    cardImage.src = cardData.link;
    cardImage.alt = cardData.name; // Хорошая практика для доступности
    cardTitle.textContent = cardData.name;

    // Здесь же можно добавить обработчики событий для кнопок лайка/удаления

    return cardElement;
}

// @todo: Вывести карточки на страницу
initialCards.forEach((cardData) => {
    const card = createCard(cardData);
    placesList.append(card);
});

// @todo: Функция удаления карточки (пока не нужна для отображения)
// @todo: Другие функции, если есть
