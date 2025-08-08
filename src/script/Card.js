export default class Card {
  constructor(
    card,
    cardId,
    cardIsLiked,
    cardSelector,
    openPopupImage,
    handleLike,
    handleDelete
  ) {
    this._card = card;
    this._cardId = cardId;
    this._cardIsLiked = cardIsLiked;
    this._cardSelector = cardSelector;
    this._openPopupImage = openPopupImage;
    this._handleLike = handleLike;
    this._handleDelete = handleDelete;
  }

  _getTemplate() {
    const template = document
      .querySelector(this._cardSelector)
      .content.querySelector(".elements__rectangle");

    const cardElement = template.cloneNode(true);
    return cardElement;
  }

  _handleLikeButton() {
    this._likeButton.addEventListener("click", () => {
      this._likeButton.classList.toggle("elements__btn-like-active");
      this._handleLike(this._cardId);
    });
  }

  _handleDeleteButton() {
    const deleteButton = this._cardElement.querySelector(
      ".elements__btn-delete"
    );

    deleteButton.addEventListener("click", () => {
      this._handleDelete();
    });
  }

  openImagePopup(imgSrc, imgText) {
    this._openPopupImage(imgSrc, imgText);
  }

  generateCard() {
    this._cardElement = this._getTemplate();
    this._likeButton = this._cardElement.querySelector(".elements__btn-like");
    this._cardElement.querySelector(".elements__image-title").textContent =
      this._card.name;
    const imageElement = this._cardElement.querySelector(".elements__image");
    imageElement.src = this._card.link;
    imageElement.alt = `${this._card.name}`;
    imageElement.addEventListener("click", () => {
      this.openImagePopup(this._card.link, this._card.name);
    });

    if (this._cardIsLiked)
      this._likeButton.classList.add("elements__btn-like-active");

    this._setEventListener();

    return this._cardElement;
  }

  _setEventListener() {
    this._handleLikeButton();
    this._handleDeleteButton();
  }
}
