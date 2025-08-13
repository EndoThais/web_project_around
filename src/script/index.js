import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
import {
  handleProfileFormSubmit,
  addNewImageCard,
  addNewImgProfile,
  createCard,
} from "./utils.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithConfirmation from "./PopupWithConfirmation.js";
import api from "./api.js";
const userForm = document.querySelector("#user-form");
const cardForm = document.querySelector("#card-form");
const avatarForm = document.querySelector("#avatar-form");

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

const avatarFormValidator = new FormValidator(config, avatarForm);
avatarFormValidator.enableValidation();

export const popupWithImage = new PopupWithImage(".popup-view-image");
popupWithImage.setEventListeners();

export const popupConfirmDelete = new PopupWithConfirmation((card, cardId) => {
  return api.deleteCard(cardId).then(() => {
    card.remove();
  });
}, ".popup-confirm");

popupConfirmDelete.setEventListeners();

export let section;

api.getInitialCards().then((result) => {
  section = new Section(
    {
      items: result,
      renderer: createCard,
    },
    ".elements"
  );

  section.renderer();
});

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

const openEditAvatarPopup = document.querySelector(".profile__edit-avatar");

const popupEditAvatar = new PopupWithForm(addNewImgProfile, ".popup-add-img");

popupEditAvatar.setEventListeners();

openEditAvatarPopup.addEventListener("click", () => popupEditAvatar.open());
