import Popup from "./Popup.js";
export default class PopupWithConfirmation extends Popup {
  constructor(deleteCardCallback, popupSelector) {
    super(popupSelector);
    this._popup = document.querySelector(popupSelector);
    this._deleteCardCallback = deleteCardCallback;
    this._confirmationButton = this._popup.querySelector(".popup__btn-save");
  }

  setEventListeners() {
    super.setEventListeners();
    this._confirmationButton.addEventListener("click", () => {
      console.log("okay=============");
      this._deleteCardCallback(this._card, this._cardId).then(() => {
        this.close();
      });
    });
  }

  close() {
    super.close();
  }

  open(card, cardId) {
    super.open();
    this._card = card;
    this._cardId = cardId;
  }
}
