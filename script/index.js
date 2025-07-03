import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
import { handleProfileFormSubmit, addNewImageCard } from "./utils.js";
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

const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

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
  ".popup__profile"
);

profileOpenPopup.addEventListener("click", () => popupProfileForm.open());

popupProfileForm.setEventListeners();

const popupAddCardForm = new PopupWithForm(addNewImageCard, ".popup-add-card");
AddCardOpenPopup.addEventListener("click", () => popupAddCardForm.open());

popupAddCardForm.setEventListeners();
