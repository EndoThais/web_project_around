const divProfile = document.querySelector(".profile");

//abrir popup de editar perfil:
const popupProfile = document.querySelector(".popup");

const buttonOpenProfile = document.querySelector(".profile__edit-btn");
buttonOpenProfile.addEventListener("click", function () {
  //remover o display none;
  popupProfile.classList.add("popup_opened");
  document.addEventListener("click", function (evt) {
    console.log(evt.target);
    if (evt.target.classList.contains("popup")) {
      popupProfile.classList.remove("popup_opened");
    }
  });
});

//fechar popup de editar perfil:
const buttonCloseProfile = document.querySelector(".popup__btn-close");
buttonCloseProfile.addEventListener("click", function () {
  popupProfile.classList.remove("popup_opened");
  //elemento HTML popup para remover o display none;
});

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
const formElement = document.querySelector(".popup__form"); // Use o método querySelector()
const formInput = formElement.querySelector(".popup__input");

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

  buttonCloseProfile();
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

function createCard(card) {
  const template = document
    .querySelector("#template")
    .content.querySelector(".elements__rectangle");

  const cardElement = template.cloneNode(true);

  const cardImage = cardElement.querySelector(".elements__image");
  cardImage.src = card.link;
  cardImage.alt = `Foto do ${card.name}`;

  cardImage.addEventListener("click", () => {
    const popupImage = document.querySelector(".popup-view-image");
    const popupImageElement = popupImage.querySelector(".popup__image-view");
    const popupTitleElement = popupImage.querySelector(".popup__title-view");

    popupImageElement.src = card.link;
    popupImageElement.alt = `Foto do ${card.name}`;
    popupTitleElement.textContent = card.name;

    popupImage.classList.add("popup_opened");
    const closeButton = popupImage.querySelector(".popup__btn-close");
    closeButton.addEventListener("click", () => {
      popupImage.classList.remove("popup_opened");
    });
  });

  const cardName = cardElement.querySelector(".elements__image-title");
  cardName.textContent = card.name;

  const likeButton = cardElement.querySelector(".elements__btn-like");

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("elements__btn-like-active");
  });

  const deleteButton = cardElement.querySelector(".elements__btn-delete");

  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  return cardElement;
}

const cardList = document.querySelector(".elements__grid");

initialCards.forEach((card) => {
  const cardElement = createCard(card);
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

    const cardElement = createCard(newCard);
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

const formList = document.querySelectorAll(".popup__form");

formList.forEach(function (formElement) {
  console.log("formELement", formElement);
  formElement.addEventListener("submit", function (evt) {
    evt.preventDefault();
    console.log("ok");
  });
  const inputList = formElement.querySelectorAll(".popup__input");
  inputList.forEach(function (inputElement) {
    inputElement.addEventListener("input", function () {
      checkInputValidity(inputElement, formElement);
      console.log("entrou");
    });
  });
});

//desativar botão
const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
  const buttonElement = formElement.querySelector(".popup__btn-save");
  console.log("formElement", formElement);
  console.log("buttonElement", buttonElement);

  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add("form__button_inactive");
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove("form__button_inactive");
      buttonElement.disabled = false;
      console.log("ok");
    }
  };

  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(inputElement, formElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".popup__form"));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    setEventListeners(formElement);
  });
};

enableValidation();

//fechar popup com qualquer tecla

document.addEventListener("keydown", function (evt) {
  console.log(evt.key);
  if (evt.key === "Escape") {
    popupProfile.classList.remove("popup_opened");
    popupAddCard.classList.remove("popup_opened");
  }
});
