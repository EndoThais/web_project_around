import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { openPopup, closePopup } from "./utils.js";
const userForm = document.querySelector("#user-form");
const cardForm = document.querySelector("#card-form");

const config = {
  form: ".popup__form",
  input: ".popup__input",
  submitButton: ".popup__btn-save",
  buttonDisabledClass: "form__button_inactive",
};

// openPopup();
// closePopup();

const profileFormValidator = new FormValidator(config, userForm);
profileFormValidator.enableValidation();

const cardFormValidator = new FormValidator(config, cardForm);
cardFormValidator.enableValidation();

//abrir popup de editar perfil:
const popupProfile = document.querySelector(".popup__profile");

const buttonOpenProfile = document.querySelector(".profile__edit-btn");
buttonOpenProfile.addEventListener("click", function () {
  openPopup(popupProfile);
  //   //remover o display none;
  //   popupProfile.classList.add("popup_opened");
  //   document.addEventListener("click", function (evt) {
  //     console.log(evt.target);
  //     if (evt.target.classList.contains("popup")) {
  //       popupProfile.classList.remove("popup_opened");
  //     }
  //   });
});

// //fechar popup de editar perfil:
// const buttonCloseProfile = document.querySelector(".popup__btn-close");
// buttonCloseProfile.addEventListener("click", function () {
//   popupProfile.classList.remove("popup_opened");
//   //elemento HTML popup para remover o display none;
// });

//abrir popup de adicionar card:
const popupAddCard = document.querySelector(".popup-add-card");

const buttonOpenAddCard = document.querySelector(".profile__add-btn");
buttonOpenAddCard.addEventListener("click", function () {
  //remover o display none;
  popupAddCard.classList.add("popup_opened");
  document.addEventListener("click", function (evt) {
    console.log(evt.target);
    if (evt.target.classList.contains("popup")) {
      popupAddCard.classList.remove("popup_opened");
    }
  });
});

//fechar popup de adicionar card:
const buttonCloseAddCard = popupAddCard.querySelector(".popup__btn-close");
buttonCloseAddCard.addEventListener("click", function () {
  popupAddCard.classList.remove("popup_opened");
  //elemento HTML popup para remover o display none;
});

// Encontrar o formulário no DOM
const formElement = document.querySelector(".popup__form");

// Handler do submit
// ainda não vai enviar para lugar nenhum
function handleProfileFormSubmit(evt) {
  // Esta linha impede o navegador de enviar o formulário da forma padrão.
  evt.preventDefault();

  // Encontrar os campos de formulário do DOM
  const nameInput = document.querySelector(".popup__name");
  const jobInput = document.querySelector(".popup__job");

  // Pegue os valores de cada campo do valor da propriedade correspondente
  const name = nameInput.value;
  const job = jobInput.value;

  // Selecione os elementos aos quais os valores dos campos serão inseridos
  let nameElement = document.querySelector(".profile__artist");
  let jobElement = document.querySelector(".profile__url-heading");

  // Insira novos valores usando a propriedade textContent
  nameElement.textContent = name;
  jobElement.textContent = job;
}

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

const cardList = document.querySelector(".elements__grid");

initialCards.forEach((card) => {
  const cardElement = new Card(card, "#template").generateCard();
  cardList.append(cardElement);
});

//Adicionar um novo cartão

const inputTitle = document.querySelector("#title");
const inputUrl = document.querySelector("#url");
const formAddCard = popupAddCard.querySelector(".popup__form-cards");

function addNewImageCard(evt) {
  evt.preventDefault();
  if (inputTitle.value != "" && inputUrl.value != "") {
    const imageTitle = inputTitle.value;
    const imageUrl = inputUrl.value;

    const newCard = {
      name: imageTitle,
      link: imageUrl,
    };

    const cardElement = new Card(newCard, "#template").generateCard();
    cardList.prepend(cardElement);
    formAddCard.reset();
    popupAddCard.classList.remove("popup_opened");
  }
}

formAddCard.addEventListener("submit", addNewImageCard);

// Conecte o handler ao formulário: ele vai observar o evento de submit
formElement.addEventListener("submit", handleProfileFormSubmit);

let submitCloseProfile = document.querySelector(".popup__btn-save");
submitCloseProfile.addEventListener("click", function () {
  popupProfile.classList.remove("popup_opened");
});

//fechar popup com qualquer tecla

document.addEventListener("keydown", function (evt) {
  console.log(evt.key);
  if (evt.key === "Escape") {
    popupProfile.classList.remove("popup_opened");
    popupAddCard.classList.remove("popup_opened");
  }
});
