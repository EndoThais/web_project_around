import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imageElement = this._popup.querySelector(".popup__image-view");
    this._textElement = this._popup.querySelector(".popup__title-view");
  }

  open(imgSrc, imgText) {
    super.open();
    this._imageElement.src = imgSrc;
    this._imageElement.alt = imgText;
    this._textElement.textContent = imgText;
  }
}
