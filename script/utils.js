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
nameElement.textContent = userInfo.getUserInfo().name;
jobElement.textContent = userInfo.getUserInfo().job;

// Handler do submit
// ainda não vai enviar para lugar nenhum
export function handleProfileFormSubmit(values) {
  // Pegue os valores de cada campo do valor da propriedade correspondente
  const name = values.name;
  const job = values.about;

  userInfo.setUserInfo({ name, job });
}

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
