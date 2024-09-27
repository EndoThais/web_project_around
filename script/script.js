let divProfile = document.querySelector(".profile");

//abrir popup:
let popupProfile = document.querySelector(".popup");
let page = document.querySelector(".page");

let buttonOpenProfile = document.querySelector(".profile__edit-btn");
buttonOpenProfile.addEventListener("click", function () {
  //remover o display none;
  popupProfile.classList.add("popup_opened");
  page.classList.add("overlay");
});

//fechar popup
//aplicar display none

let buttonCloseProfile = document.querySelector(".popup__btn-close");
buttonCloseProfile.addEventListener("click", function () {
  popupProfile.classList.remove("popup_opened");
  page.classList.remove("overlay");
  //elemento HTML popup para remover o display none;
});

//salvar info perfil

// Vamos encontrar o formulário no DOM
let formElement = document.querySelector(".popup__form"); // Use o método querySelector()

// Em seguida vem o handler do submit
// ainda não vai enviar para lugar nenhum

// Observe que o nome da função começa com um verbo
// e descreve exatamente o que a função faz
function handleProfileFormSubmit(evt) {
  // Esta linha impede o navegador
  // de enviar o formulário da forma padrão.
  evt.preventDefault();
  // Fazendo isso, podemos definir nossa própria forma de enviar o formulário.
  // Explicaremos em mais detalhes posteriormente.

  // Vamos encontrar os campos de formulário do DOM
  let nameInput = document.querySelector(".popup__name"); // Use querySelector()
  let jobInput = document.querySelector(".popup__job"); // Use querySelector()

  // Pegue os valores de cada campo do valor da propriedade correspondente
  let name = nameInput.value;
  let job = jobInput.value;

  // Selecione os elementos aos quais os valores dos campos serão inseridos
  let nameElement = document.querySelector(".profile__artist");
  let jobElement = document.querySelector(".profile__url-heading");

  // Insira novos valores usando a
  // propriedade textContent
  nameElement.textContent = name;
  jobElement.textContent = job;
}

// Conecte o handler ao formulário:
// ele vai observar o evento de submit
formElement.addEventListener("submit", handleProfileFormSubmit);
