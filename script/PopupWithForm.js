import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(submitFormCallback, popupSelector) {
    super(popupSelector);
    this._popup = document.querySelector(popupSelector);
    this._form = this._popup.querySelector(".popup__form");
    this._submitFormCallback = submitFormCallback;
  }

  _getInputValues() {
    const inputs = this._form.querySelectorAll(".popup__input");
    const values = {};
    inputs.forEach((input) => (values[input.name] = input.value));
    return values;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const values = this._getInputValues();
      this._submitFormCallback(values);
      this.close();
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
