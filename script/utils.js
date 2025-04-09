import Card from "./Card.js";

export function openPopup(popup) {
  //remover o display none;
  popup.classList.add("popup_opened");
}

export function closePopup(popup) {
  const buttonCloseProfile = popup.querySelector(".popup__btn-close");
  buttonCloseProfile.addEventListener("click", function () {
    popup.classList.remove("popup_opened");
    //elemento HTML popup para remover o display none;
  });
}

//abrir popup de editar perfil:
const popupProfile = document.querySelector(".popup__profile");

const buttonOpenProfile = document.querySelector(".profile__edit-btn");
buttonOpenProfile.addEventListener("click", function () {
  openPopup(popupProfile);
});

// //fechar popup de editar perfil:
const buttonCloseProfile = popupProfile.querySelector(".popup__btn-close");
buttonCloseProfile.addEventListener("click", function () {
  closePopup(popupProfile);
  //elemento HTML popup para remover o display none;
});

//abrir popup de adicionar card:
const popupAddCard = document.querySelector(".popup-add-card");

const buttonOpenAddCard = document.querySelector(".profile__add-btn");
buttonOpenAddCard.addEventListener("click", function () {
  //remover o display none;
  openPopup(popupAddCard);
});

//fechar popup de adicionar card:
const buttonCloseAddCard = popupAddCard.querySelector(".popup__btn-close");
buttonCloseAddCard.addEventListener("click", function () {
  closePopup(popupAddCard);
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

//Adicionar um novo cartão

const inputTitle = document.querySelector("#title");
const inputUrl = document.querySelector("#url");
const formAddCard = popupAddCard.querySelector(".popup__form-cards");
export const cardList = document.querySelector(".elements__grid");

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
  if (evt.key === "Escape") {
    popupProfile.classList.remove("popup_opened");
    popupAddCard.classList.remove("popup_opened");
  }
});
