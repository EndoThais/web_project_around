import Card from "./Card.js";
import { section, popupWithImage, popupConfirmDelete } from "./index.js";
import UserInfo from "./UserInfo.js";
import api from "./api.js";

const userInfo = new UserInfo({
  name: ".profile__artist",
  job: ".profile__url-heading",
  avatar: ".profile__image",
});

api.getUserInfo().then((result) => {
  userInfo.setUserInfo({
    ...result,
    job: result.about,
  });
});

// Selecione os elementos aos quais os valores dos campos serão inseridos
const nameElement = document.querySelector(".profile__artist");
const jobElement = document.querySelector(".profile__url-heading");
const avatarElement = document.querySelector(".profile__image");

// Insira novos valores usando a propriedade textContent
const { name, job, avatar } = userInfo.getUserInfo();
nameElement.textContent = name;
jobElement.textContent = job;
avatarElement.src = avatar;

// Handler do submit
// ainda não vai enviar para lugar nenhum
export function handleProfileFormSubmit(values) {
  // Pegue os valores de cada campo do valor da propriedade correspondente
  const name = values.name;
  const job = values.about;

  return api
    .editUserInfo({
      name,
      about: job,
    })
    .then(() => {
      userInfo.setUserInfo({ name, job, avatar: avatarElement.src });
    });
}

export const createCard = (card) => {
  const cardElement = new Card(
    card,
    card._id,
    card.isLiked,
    "#template",
    (imgSrc, imgText) => popupWithImage.open(imgSrc, imgText),
    (cardId) => (card.isLiked ? api.removeLike(cardId) : api.addLike(cardId)),
    () => {
      popupConfirmDelete.open(cardElement, card._id);
    }
  ).generateCard();
  section.addNewItem(cardElement);
};

//Adicionar um novo cartão

export function addNewImageCard(values) {
  if (values.name != "" && values.link != "") {
    const imageTitle = values.name;
    const imageUrl = values.link;

    const newCard = {
      name: imageTitle,
      link: imageUrl,
    };

    return api.addNewCards(newCard).then(createCard);
  }
}

export const addNewImgProfile = (values) => {
  return api.editProfilePhoto({ avatar: values.link }).then(() => {
    userInfo.setUserAvatar({ avatar: values.link });
  });
};
