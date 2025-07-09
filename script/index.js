import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
import {
  handleProfileFormSubmit,
  addNewImageCard,
  initialCards,
} from "./utils.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
const userForm = document.querySelector("#user-form");
const cardForm = document.querySelector("#card-form");

const config = {
  form: ".popup__form",
  input: ".popup__input",
  submitButton: ".popup__btn-save",

  buttonDisabledClass: "form__button_inactive",
};

const profileFormValidator = new FormValidator(config, userForm);
profileFormValidator.enableValidation();

const cardFormValidator = new FormValidator(config, cardForm);
cardFormValidator.enableValidation();

export const popupWithImage = new PopupWithImage(".popup-view-image");
popupWithImage.setEventListeners();

export const section = new Section(
  {
    items: initialCards,
    renderer: (card) => {
      section.addItem(
        new Card(card, "#template", (imgSrc, imgText) =>
          popupWithImage.open(imgSrc, imgText)
        ).generateCard()
      );
    },
  },
  ".elements"
);

section.renderer();

const profileOpenPopup = document.querySelector(".profile__edit-btn");
const AddCardOpenPopup = document.querySelector(".profile__add-btn");

const popupProfileForm = new PopupWithForm(
  handleProfileFormSubmit,
  ".popup-profile"
);

profileOpenPopup.addEventListener("click", () => popupProfileForm.open());

popupProfileForm.setEventListeners();

const popupAddCardForm = new PopupWithForm(addNewImageCard, ".popup-add-card");
AddCardOpenPopup.addEventListener("click", () => popupAddCardForm.open());

popupAddCardForm.setEventListeners();
