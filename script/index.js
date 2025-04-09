import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { cardList } from "./utils.js";
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

initialCards.forEach((card) => {
  const cardElement = new Card(card, "#template").generateCard();
  cardList.append(cardElement);
});
