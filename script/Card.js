export default class Card {
  constructor(card, cardSelector) {
    this._card = card;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const template = document
      .querySelector(this._cardSelector)
      .content.querySelector(".elements__rectangle");

    const cardElement = template.cloneNode(true);
    return cardElement;
  }

  _handleLikeButton() {
    const likeButton = this._cardElement.querySelector(".elements__btn-like");

    likeButton.addEventListener("click", () => {
      likeButton.classList.toggle("elements__btn-like-active");
    });
  }

  _handleDeleteButton() {
    const deleteButton = this._cardElement.querySelector(
      ".elements__btn-delete"
    );

    deleteButton.addEventListener("click", () => {
      this._cardElement.remove();
    });
  }

  generateCard() {
    this._cardElement = this._getTemplate();
    this._cardElement.querySelector(".elements__image-title").textContent =
      this._card.name;
    this._cardElement.querySelector(".elements__image").src = this._card.link;
    this._cardElement.querySelector(
      ".elements__image"
    ).alt = `Imagem do ${this._card.name}`;

    this._setEventListener();

    return this._cardElement;
  }

  _setEventListener() {
    this._handleLikeButton();
    this._handleDeleteButton();
  }
}
