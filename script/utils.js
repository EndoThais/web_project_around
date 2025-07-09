import Card from "./Card.js";
import { section, popupWithImage } from "./index.js";
import UserInfo from "./UserInfo.js";

const userInfo = new UserInfo({
  name: ".profile__artist",
  job: ".profile__url-heading",
});

// Selecione os elementos aos quais os valores dos campos serão inseridos
const nameElement = document.querySelector(".profile__artist");
const jobElement = document.querySelector(".profile__url-heading");

// Insira novos valores usando a propriedade textContent
const { name, job } = userInfo.getUserInfo();
nameElement.textContent = name;
jobElement.textContent = job;

// Handler do submit
// ainda não vai enviar para lugar nenhum
export function handleProfileFormSubmit(values) {
  // Pegue os valores de cada campo do valor da propriedade correspondente
  const name = values.name;
  const job = values.about;

  userInfo.setUserInfo({ name, job });
}

export const initialCards = [
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

//Adicionar um novo cartão

export function addNewImageCard(values) {
  if (values.name != "" && values.link != "") {
    const imageTitle = values.name;
    const imageUrl = values.link;

    const newCard = {
      name: imageTitle,
      link: imageUrl,
    };

    const cardElement = new Card(newCard, "#template", (imgSrc, imgText) =>
      popupWithImage.open(imgSrc, imgText)
    ).generateCard();
    section.addNewItem(cardElement);
  }
}
